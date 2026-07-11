# RentNest Backend API

Welcome to the **RentNest Backend** repository. RentNest is a modern, premium rental management platform that connects tenants, landlords, and administrators. This backend service handles authentication, property management, rental requests, payment processing via Stripe, reviews, and administration dashboard services.

---

## 🚀 Tech Stack

*   **Runtime Environment**: Node.js (v18+)
*   **Framework**: Express.js (v5.x)
*   **Programming Language**: TypeScript (v6.x)
*   **Database ORM**: Prisma ORM (v7.x)
*   **Database**: PostgreSQL
*   **Bundler/Build Tool**: tsup (esbuild-powered compiler)
*   **Authentication**: JSON Web Tokens (JWT) & HTTP-only cookies
*   **Payments & Billing**: Stripe API Integration & Webhooks
*   **Hosting Platform**: Vercel Serverless Functions

---

## 👥 User Roles & Permissions

The system supports three distinct user roles:

1.  **Tenant**:
    *   Browse and search available properties.
    *   Submit rental requests.
    *   Make rental payments via Stripe.
    *   Add reviews and ratings for rented properties.
2.  **Landlord**:
    *   Post and list new properties.
    *   Edit, update, or remove listed properties.
    *   Manage incoming tenant requests for their properties.
3.  **Admin**:
    *   Monitor all platform activity.
    *   Manage users (activate, ban, update roles).
    *   Manage all property listings and rentals.
    *   Access transaction history.

---

## 📁 Repository Structure

```
├── .vercel/              # Vercel deployment configuration
├── api/                  # Vercel Serverless function entry points
│   └── index.js          # Express app wrapper for Vercel
├── prisma/               # Prisma database schemas & migrations
│   ├── migrations/       # Database migration scripts
│   ├── schema/           # Prisma multi-file database schema files
│   └── seed.ts           # Database seeding script
├── src/                  # Application source code
│   ├── config/           # App configuration & environment variables
│   ├── lib/              # Shared library clients (Prisma, Stripe)
│   ├── middleware/       # Express middlewares (auth, error handlers)
│   ├── modules/          # Core feature modules (auth, properties, rentals, payments, reviews)
│   ├── types/            # TypeScript type declarations
│   ├── utils/            # Helper utilities (catchAsync, sendResponse, jwt)
│   ├── app.ts            # Express application setup
│   └── server.ts         # Local server entry point
├── vercel.json           # Vercel routing configuration
├── tsup.config.ts        # Fast bundling configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 🛠️ Installation & Setup

1.  **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd rentnest_backend
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env` file in the root directory and configure the following variables:
    ```env
    PORT=5000
    DATABASE_URL="postgresql://username:password@localhost:5432/rentnest"
    APP_URL="http://localhost:3000"
    BCRYPT_SALT_ROUNDS=12
    JWT_ACCESS_SECRET="your_jwt_access_secret_key"
    JWT_REFRESH_SECRET="your_jwt_refresh_secret_key"
    JWT_ACCESS_EXPIRES_IN="1d"
    JWT_REFRESH_EXPIRES_IN="30d"
    STRIPE_SECRET_KEY="your_stripe_secret_key"
    STRIPE_PUBLIC_KEY="your_stripe_public_key"
    STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"
    ```

4.  **Database Migration & Client Generation**:
    ```bash
    npx prisma migrate dev
    npx prisma generate
    ```

5.  **Database Seeding (Optional)**:
    ```bash
    npm run prisma:seed
    ```

6.  **Run Locally**:
    *   **Development mode** (auto-reload):
        ```bash
        npm run dev
        ```
    *   **Build production bundle**:
        ```bash
        npm run build
        ```
    *   **Start production server**:
        ```bash
        npm run start
        ```

---

## 📖 API Documentation & Postman

The complete documentation of the API endpoints, request bodies, query parameters, and example responses is available online:

🔗 **[RentNest Postman Documentation](https://documenter.getpostman.com/view/50799511/2sBY4LRN44)**

Alternatively, you can import the local Postman Collection directly into your Postman app:
*   File: `RentNest_Api.postman_collection3.json` (located in the project root)

### Core Endpoints Overview:

| Method | Endpoint | Access / Role | Description |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Public | Register a new user |
| **POST** | `/api/auth/login` | Public | Login user & receive JWT cookies |
| **GET** | `/api/auth/me` | Tenant / Landlord | Get currently authenticated user profile |
| **GET** | `/api/properties` | Public | List all properties (with filter options) |
| **POST** | `/api/landlord/properties` | Landlord | Create a new property listing |
| **PUT** | `/api/landlord/properties/:id`| Landlord | Update listed property details |
| **DELETE**| `/api/landlord/properties/:id`| Landlord | Remove a property listing |
| **POST** | `/api/rentals` | Tenant | Submit a rental request for a property |
| **GET** | `/api/rentals` | Tenant | Retrieve tenant's rental requests |
| **POST** | `/api/payments/create` | Tenant | Create a Stripe checkout session for a rental |
| **POST** | `/api/payments/confirm` | Tenant | Verify/confirm payment status |
| **POST** | `/api/reviews` | Tenant | Submit feedback/ratings for a rental |
| **GET** | `/api/admin/users` | Admin | Get list of all registered platform users |
| **PATCH**| `/api/admin/users/:id` | Admin | Update user status (Activate/Ban) |
| **GET** | `/api/admin/properties` | Admin | Manage all property listings |
| **GET** | `/api/admin/rentals` | Admin | Monitor all platform rental requests |

---

## ☁️ Vercel Deployment

This project is fully configured for zero-downtime serverless deployments on Vercel:
*   The deployment entry point is mapped to the [api/index.js](file:///d:/rentnest_backend/api/index.js) function using rewriting rules defined in [vercel.json](file:///d:/rentnest_backend/vercel.json).
*   During the build phase, Vercel triggers `npx prisma generate` to build a native client matching the runtime lambda micro-architecture.

To deploy manual builds:
```bash
npx vercel --prod
```
