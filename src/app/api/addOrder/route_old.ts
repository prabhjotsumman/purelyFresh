import { Product } from "@/components/product/ProductCard";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Method:", req.method)
  // if (req.method !== "POST") {
  //   console.log("Method:", req.method)
  //   return res.status(405).json({ error: "Method Not Allowed" });
  // }

  try {
    const { name, email, address, city, phone, cart } = req.body;

    console.log(name, email, address, city, phone, cart)

    console.log("cred:", process.env.GOOGLE_CREDENTIALS);

    // Load credentials from environment variable
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS!);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1AhhcBqQJcDUmOdBcka6rkhhXv39GtZ6l5Uk"; // Replace with your actual spreadsheet ID
    const range = "Orders!A:F"; // Assuming you store orders in "Orders" sheet

    // Convert cart items into a single string
    const orderItems = cart
      .map(
        (item: Product) => `${item.name} (x${item.quantity}) - Rs.${item.price}`
      )
      .join(", ");

    // Append data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, email, address, city, phone, orderItems]],
      },
    });

    return res.status(200).json({ message: "Order saved successfully!" });
  } catch (error) {
    console.error("Error saving order:", error);
    return res.status(500).json({ error: "Failed to save order" });
  }
}
