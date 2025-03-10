import { Product } from "@/components/product/ProductCard";
import { format } from "date-fns"; // Import date-fns for formatting
import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, address, city, phone, cart } = body;

    console.log("Received Order:", { name, email, address, city, phone, cart });

    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS!);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1AhhcBqQJcDUmOdBcka6rkhhXv39GtZ6l5Uk-hfpIOYU";
    const range = "Orders!A:A"; // Column A will store serial numbers

    // Fetch existing rows to determine the next serial number
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    const lastRow = response.data.values ? response.data.values.length : 1;
    const serialNumber = lastRow; // Increment based on last row count

    // Get current date, day, and time
    const now = new Date();
    const formattedDate = format(now, "yyyy-MM-dd");
    const formattedDay = format(now, "EEEE");
    const formattedTime = format(now, "hh:mm a");

    // Convert cart items into a single string
    const orderItems = cart
      .map(
        (item: { name: string; quantity: number; price: number }) =>
          `${item.name} (x${item.quantity}) - Rs.${item.price}`
      )
      .join("\n");

    const totalPrice = cart?.reduce(
      (acc: number, item: Product) => acc + item.price * (item.quantity as number),
      0
    );

    // Append data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Orders!A:H", // Make sure this matches your sheet structure
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            serialNumber,
            formattedDate,
            formattedDay,
            formattedTime,
            name,
            email,
            address,
            city,
            phone,
            orderItems,
            totalPrice,
          ],
        ],
      },
    });

    return NextResponse.json(
      { message: "Order saved successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving order:", error);
    return NextResponse.json(
      { error: "Failed to save order" },
      { status: 500 }
    );
  }
}
