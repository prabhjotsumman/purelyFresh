# Purely Fresh - Organic Vegetable Store

## About
Purely Fresh is an online organic vegetable store where customers can browse and purchase fresh, locally grown vegetables. The platform is built using **Next.js**, **Strapi**, and **Razorpay** for secure payments.

## Features
- **User Authentication:** Login and register using Google or mobile number (via Firebase).
- **Product Management:** Add, update, and delete organic vegetable products dynamically from Strapi.
- **Shopping Cart:** Users can add products to their cart and checkout securely.
- **Order Management:** Orders are stored in Strapi, and users receive WhatsApp/email confirmations.
- **Payment Integration:** Secure payments via Razorpay.
- **Google Sheets Integration:** Order details are saved in Google Sheets.
- **Basic Order Tracking:** Users can check order status.

## Technologies Used
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Strapi (Headless CMS)
- **Authentication:** Firebase (Google and mobile auth)
- **Database:** Strapi (SQLite/PostgreSQL)
- **Payments:** Razorpay
- **Hosting:** Vercel (Frontend), Railway (Strapi Backend)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v18+)
- Yarn or npm
- Strapi (for the backend)
- Firebase setup for authentication

### Clone the Repository
```sh
  git clone https://github.com/your-username/purely-fresh.git
  cd purely-fresh
```

### Install Dependencies
```sh
  npm install
  # or
  yarn install
```

### Setup Environment Variables
Create a `.env.local` file in the root directory and add:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_RAZORPAY_KEY=your_razorpay_key
STRAPI_API_URL=your_strapi_backend_url
GOOGLE_CREDENTIALS=your_google_sheets_credentials
SPREADSHEET_ID=your_google_sheets_id
```

### Run Development Server
```sh
  npm run dev
  # or
  yarn dev
```
Your site should be running at `http://localhost:3000`.

## Deployment
- **Frontend:** Deploy on Vercel.
- **Backend:** Deploy Strapi on Railway or DigitalOcean.
- **Database:** PostgreSQL on Railway.
- **Environment Variables:** Add the `.env` values in Vercel and Railway.

## Contributing
Pull requests are welcome. For major changes, open an issue first to discuss your ideas.

## License
This project is licensed under the MIT License.

---
Happy coding! 🚀

