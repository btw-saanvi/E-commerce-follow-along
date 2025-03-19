# -E-Commerce-follow-along
It contains 4 parts.
User Authentication: Register and log in users.
Product Management: Add, update, and retrieve product data.
Order Handling: Manage customer orders. Each API endpoint will interact with the database and serve data in a structured format (typically JSON). User Authentication: Register and log in users. Product Management: Add, update, and retrieve product data. Order Handling: Manage customer orders. Each API endpoint will interact with the database and serve data in a structured format (typically JSON).


Project Overview:- 

1.MERN Integration: Full-stack JavaScript development for seamless front-end and back-end communication.

2.REST APIs: Scalable endpoints for managing users, products, and orders.

3.Database Schema: Models for users, products, and orders, optimized for performance.

4.Backend Setup: Efficient routing and middleware handling with Express.js.

5.Authentication: Secure login and role-based access control using bcrypt and JWT.

6.Order Page:- -->Admin: View and manage all user orders. -->Users: Track personal order history and statuses.

7.Product Page: Interactive product catalog with search, filter, and details view.

8.Payment Gateway:Seamless integration with Stripe/PayPal for secure transactions, Handles payment success, failure, and refunds.

New Feature Added:

-->Login Page: A user-friendly login page has been added, featuring: Email and password validation. A "Show/Hide Password" toggle for enhanced user experience. Error handling for invalid email format and password length. Loading state to indicate the process of authentication. Navigation to a signup page for new users.

-->Technologies Used: React (Frontend) Tailwind CSS (Styling) React Router (Routing) Express.js (Backend) Stripe/PayPal (Payment Gateway)

-->Installation & Setup: Clone the repository. Run npm install to install dependencies. Start the development server with npm start.


# Milestone 3 - Backend Setup and Integration

## Overview
In this milestone, you will set up the foundational elements for your backend. You'll organize your backend code efficiently, configure a Node.js server to handle API requests, connect to MongoDB for data management, and implement basic error handling to ensure smooth server operation. By the end of this milestone, your application will be able to handle requests and store data in MongoDB with proper error feedback.

## Tasks

### 1. Backend Folder Structure 🗂️
- Create dedicated folders for organizing your backend code. This includes:
  - `routes`: Handles routing of incoming requests.
  - `controllers`: Contains the logic for handling requests.
  - `models`: Defines the structure and schema of your data (MongoDB).
  - `middlewares`: Used for functions that run during the request-response cycle (e.g., validation, logging).
  - `utils`: Utility functions that may be used across the backend code.
  
  *Note: Terms like “middleware” and “utils” will be explored more in-depth as you progress in the course.*

### 2. Server Setup 🖥️
- Use Node.js and Express to create the backend server.
- Configure the server to listen on a designated port (e.g., 5000 or 3000).
  
  Steps:
  - Install necessary dependencies like `express` using npm.
  - Create an Express app and set up a basic route to ensure your server is running.

### 3. Database Connection 💾
- Integrate MongoDB with your application to store and manage data.
  - Use the `mongoose` library to define schemas and models.
  - Connect the backend server to MongoDB and ensure the connection is successful.
  - Test database connection by saving a test document or retrieving data from a collection.

### 4. Error Handling ⚠️
- Implement basic error handling to help with debugging and user feedback.
  - Create a middleware to handle common errors (e.g., 404 for routes that don’t exist, 500 for server issues).
  - Ensure that error messages are clear and helpful for both the developer and the user.

### 5. Documentation 📖
- Update your README file to reflect the progress you've made in this milestone.
  - Provide instructions for setting up and running the backend server.
  - Document key components of the backend, such as how the server is structured, how MongoDB is integrated, and how to handle errors.

## Key Features 🛠️

- **Backend Folder Structure**: Organizing your code in a modular and maintainable way will make future development easier.
- **Node.js Server**: Setting up and configuring a server to handle incoming API requests.
- **MongoDB Integration**: Storing and retrieving data from a MongoDB database.
- **Error Handling**: Implementing basic error handling to ensure smooth debugging and user experience.

## Expected Outcome
By the end of this milestone, you will have:
- A well-structured backend with clear folder organization.
- A running Node.js backend server.
- A working MongoDB connection for data storage.
- Implemented basic error handling for better app stability.

## Mentor Guidance
During this milestone, your mentor will guide you through:
- Setting up the backend folder structure and files.
- Configuring the server and connecting to MongoDB.
- Writing and testing error-handling code.

# Milestone 4: User Management with File Uploads

This Node.js application demonstrates user creation, file uploads using Multer, and secure password management using bcrypt and JWT.

## Features

- *User Registration*: Securely create users with hashed passwords.
- *File Upload*: Upload user avatars with unique filenames.
- *JWT Authentication*: Generate and validate JSON Web Tokens.
- *Error Handling*: Robust error management using a custom ErrorHandler utility.

## Technologies Used

- *Node.js* with *Express.js*
- *Mongoose* for MongoDB
- *Multer* for file uploads
- *bcrypt.js* for password hashing
- *jsonwebtoken* for authentication

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance running
- .env file with the following variables

# Milestone 5 -Adding SignUp Page

1. Created a Sign-Up Page in React.
2. Implemented form validation for:
      Name (required)
      Email (valid format required)
      Password (minimum 2 characters)
      Password Confirmation (must match password)

4. Used React Router for navigation.

# Milestone 6: User Authentication with Password Encryption

## Overview

In this project, we focus on two key aspects of user authentication:

1. **Encrypting the Password**: Hash the user's password during the signup process using bcrypt to ensure it's stored securely.
2. **Saving User Data**: Store the user's data (e.g., name, email, etc.) in the database, ensuring the password remains encrypted.

## Features

- **Password Encryption**: Uses bcrypt to securely hash and store passwords.
- **Secure User Storage**: Stores user information (name, email, etc.) in the database with encrypted passwords.
- **Database Integration**: Ensures all user data is stored following security best practices.

# Milestone 7:The Login Endpoint

## Overview

This guide covers how to implement a user login endpoint that accepts user credentials (email/username and password), validates the credentials against a database, and uses bcrypt to hash the entered password for secure authentication.

## Features
Accepts login credentials (email/username and password) from the user.
Retrieves user information from the database using the provided credentials.
Uses bcrypt for hashing and comparing passwords securely

# Milestone 8: Product Card Component

## Overview

In Milestone 8, we focus on creating a reusable product card component and designing a homepage to display a collection of these cards. Each card will showcase key product details, such as the product's name, price, and image. The goal is to create a clean and organized layout that improves the user experience and allows for easy browsing of products. This milestone demonstrates the principles of component-based design and how to efficiently manage dynamic content within your app.

## Features

**Reusable Product Card:** A single card component that accepts dynamic product details as props and renders them in a uniform, visually appealing way. The product card includes:

1. Product name
2. Product image
3. Product price

**Dynamic Rendering:** Use of JavaScript array mapping to iterate through a list of products and dynamically render each product's card with its respective data.
**Homepage Layout:** A structured layout, designed using either CSS Grid or Flexbox, to display multiple cards on the homepage in a responsive, organized manner.
**Consistent Design:** The card component ensures that the product details are presented consistently across all cards, providing a seamless user experience

# Milestone 9: Create Product Component

## Overview

In this milestone, we have implemented the Create Product component for the Follow-Along Ecommerce project. This component allows users to create new products by entering details such as name, description, category, tags, price, stock, email, and uploading images.

# Features Implemented

**Form Inputs:** Users can input product details including name, description, category, tags, price, stock, and email.

**Image Upload & Preview:** Users can upload multiple images, which will be displayed as previews before submission.

**Category Selection:** A dropdown to choose a product category.

**Validation & Submission:** Required fields are enforced, and product data is logged on submission.

**Memory Optimization**: Object URLs for image previews are revoked to prevent memory leaks.

# Technologies Used

1. React: Functional components and hooks (useState, useEffect).

2. Tailwind CSS: For styling.

3. React Icons: AiOutlinePlusCircle for the image upload button.

### Milestone 10: Product Management Enhancements


Milestone 10 focuses on refining the product creation and management process. This includes improving the form submission flow, handling errors effectively, and ensuring a seamless user experience.

# Key Features Implemented

**Form Submission & Error Handling**

Implemented a structured form to capture product details including:

1. Name

2. Description

3. Price

4. Category

5. Tags

6. Stock

7. Email

8. Multiple Images

# Integrated multiple image selection for better product representation.

Enhanced error handling using try-catch methods to catch and display errors during product creation.

Debugging tools added to log form data before submission for easier troubleshooting.

API Integration

Built a POST endpoint to receive and validate product data.

Used FormData to handle file uploads efficiently.

Sent form data to the backend API, ensuring proper request formatting (multipart/form-data).

Provided real-time feedback to users on successful product creation or errors encountered.

Why Validation & Error Handling?

Ensures only valid data is stored in the database.

Helps users identify and correct input mistakes quickly.

Prevents incomplete or invalid submissions, reducing inconsistencies in the system.

Technologies Used

React.js for frontend UI

Express.js for backend API handling

MongoDB & Mongoose for database storage

Axios for HTTP requests

Postman for API testing

Next Steps & Enhancements

Implement user authentication to restrict product uploads to authorized users.

Develop an admin panel to manage and moderate product listings.

Introduce real-time image preview and editing capabilities.

Optimize database indexing for faster search and retrieval.


## Milestone 11: Product Data Integration

# Overview

This milestone demonstrates how to send product data from a backend API to the frontend, retrieve the data, and dynamically display it using reusable product card components. It focuses on improving your understanding of data fetching, API integration, and dynamic UI rendering.

# Features

**API Integration:**

Backend API endpoint that provides all product data in JSON format.

**Frontend Data Fetching:**

A function that retrieves the product data from the backend API.

**Dynamic UI Rendering:**

Product data is dynamically passed to a reusable product card component and displayed in a clean layout.

## Instructions

**Backend:**

Create an API endpoint to fetch product data.
Ensure the endpoint returns a structured JSON response.

**Frontend:**

Write a function to fetch the product data using the API endpoint.
Dynamically map the fetched data to product card components.

**Display:**

Render the product cards in a grid or list format for a user-friendly interface.

### Milestone 12: Creating My products page 

# Backend: Creating the Endpoint
Set Up the Route

Create a new route in your backend API that filters products based on the user's email.
Fetch Data from MongoDB

Query the database to retrieve all products associated with the authenticated user’s email.
Send Response

Return the filtered products as JSON to the frontend.

 ### Frontend: Fetch and Display Products
 
Create a Function to Fetch Products

Use fetch or Axios to call the backend endpoint.
Display the Products Dynamically

Pass the fetched data to a ProductCard component for rendering.

### Milestone 13: Menu Management System
This project is an extension of a backend system to manage a restaurant's online menu. It includes features to update and delete menu items in a MongoDB database. The frontend will have an edit button to enable users to update menu items.

# Features
1. Update Menu Items: Update existing data in MongoDB via an API.
2. Frontend Integration: Edit menu items through an interactive form.
3. Error Handling: Validation for incoming data with descriptive error messages.

### Milestone 14: Delete Operation in MongoDB 📝

This milestone focuses on implementing a DELETE operation to remove data from MongoDB using a product's unique ID. The frontend will feature a Delete Button on each product card. Clicking the button sends the product's ID to the backend server to delete it from the database.

# Features

1. Delete Menu Items: Remove specific menu items from the MongoDB database using their unique IDs.
2. Frontend Integration: Enable users to delete products with a single click.
3. Error Handling: Handle cases where the ID is invalid or the item does not exist.

### Milestone 15:Responsive Navbar Components

# Overview

This project includes the creation of a responsive navigation bar component (Nav component) that provides smooth navigation across multiple pages within the application. The Nav component will contain links to the following pages:

1. Home

2. My Products

3. Add Product

4. Cart

**The navigation bar will be designed to adapt seamlessly to all screen sizes, ensuring an optimal user experience across devices. The Nav component will be added to all pages, facilitating easy and intuitive navigation throughout the application.**

# Features

1. Responsive navigation bar that adjusts to different screen sizes.

2. Smooth navigation between pages.

3. A user-friendly interface for accessing different sections of the application.

### Milestone 16: Product Info Page
# Overview

**This is a React-based e-commerce project built using Vite. The project includes features such as product listing, adding products to the cart, and managing quantities. It utilizes react-router-dom for navigation, axios for data fetching, and dotenv for managing environment variables.**

# Features

1. Product listing page displaying all available products.

2. Individual product details page.

3. Add to Cart functionality with quantity selection.

4. Shopping cart page displaying selected products.

5. State management using React Context.

6. Responsive UI for seamless experience across devices.

7. Environment variable support for API integration.

### Milestone 17: Cart Functionality Implementation

# Overview

**In this milestone, we will be implementing the cart functionality in our project. This includes designing a schema to store cart products and creating an endpoint to receive and store product details in the cart.**

# Features

1. Cart Schema: A database schema to manage products in the cart.

2. API Endpoint: An endpoint to add products to the cart.

3. Data Storage: Store product details such as name, price, quantity, and user reference.

4. Efficient Retrieval: Ability to fetch cart data for a specific user.

5. Validation: Ensure valid product details before storing.

## Milestone 18:

### *Overview*  
Milestone 18 focuses on implementing a backend API to manage the cart system in an e-commerce application. This includes retrieving products inside a user's cart, ensuring efficient cart management and a seamless shopping experience.  

### *Features*

- *Fetch Cart Items:* Retrieve all products added to a user's cart. 

- *MongoDB Integration:* Store and manage cart data efficiently.  

- *REST API Support:* Simple and structured API endpoints.  

- *Scalability:* Designed for easy expansion with additional features like cart updates and deletion.
  
- *Secure & Optimized:* Ensures reliable data fetching with proper error handling.

# Ecommerce Website - Milestone 19: Functional Cart
## Overview
In Milestone 19, the functional cart feature was implemented on the Ecommerce website. This milestone focuses on providing users with an intuitive and seamless way to add products to their cart and view them dynamically within the cart page. The cart updates in real-time as products are added, creating an interactive shopping experience.

## Key Features

1. Add to Cart: Users can add products to their cart with a simple click, and the cart will automatically update to reflect the added item.
2. Product Display in Cart: After adding items, the cart displays the products with relevant details such as product name, image, and price.
3. Dynamic Cart: As products are added, the cart updates dynamically, ensuring that users can easily review their selections.


# Ecommerce Website - Milestone 20: Profile Page

## Overview
In Milestone 20, we have implemented a Profile Page for the Ecommerce website. This page allows users to view and manage their personal information, including their name, email, and order history. The profile page enhances the user experience by providing a dedicated space to access and update their account details.

## Key Features

1.  User Information Display: Users can view their profile information, such as their name and email address, on the profile page.
2.  Order History: A section where users can view their past orders, including order details like product names, quantities, and prices.
3.  Edit Profile: The profile page includes an option to edit personal information, offering users a way to keep their account details up to date.

### Milestone 21: Address Form Frontend Page 🚀

 *Overview*
 
Create a frontend form to collect and store address details, including country, city, address1, address2, zip code, and address type.

 *Steps 📝*
1. Build the address form page.
2. Store input values in state.
3. Navigate to this form when clicking "Add Address" in the profile.

### Milestone 22 - Address Handling API Endpoint

# Overview

### Milestone 23: Implementing Order Placement

Overview

In this milestone, we will enhance the ordering functionality by adding a "Place Order" button inside the cart. When a user clicks this button, they will be redirected to a "Select Address" page, where they can choose a delivery address. We will also implement a backend endpoint to fetch and display user addresses and create a Mongoose schema for storing order details.

 **Learning Goals 🎯**
By the end of this milestone, you will:
✅ Add a "Place Order" button inside the cart page.
✅ Create a "Select Address" page that displays available addresses and allows users to select a delivery address.
✅ Implement a backend endpoint to retrieve user addresses.
✅ Write a Mongoose schema to store order details.

### Steps for Milestone 24 📝
1️⃣ Display Ordered Products – Show a list of all products in the order, including images, names, prices, and quantities.
2️⃣ Show Delivery Address – Display the user's selected shipping address.
3️⃣ Calculate and Display Total Price – Show a breakdown of the subtotal, shipping fees (if any), and the final total amount.
4️⃣ Implement "Place Order" Button – Add a button that allows users to confirm their purchase and proceed to the next step.

# Milestone 25 - Order Placement API 📝

## Steps to Implement

1. *Create an Endpoint:*
   - Develop an endpoint that accepts product details, user information, and address details.

2. *Retrieve User ID:*
   - Extract the user's email from the request data.
   - Use this email to fetch the corresponding _id from the MongoDB users collection.

3. *Store Order Details:*
   - For each product, create a unique order entry with the same address.
   - Use the existing Order schema to store these details in the MongoDB orders collection.

   # Milestone 26 📝

### Steps to Fetch User Orders
1. Create an endpoint to receive the *user's email*.
2. Retrieve the *user's _id* using the provided email.
3. Fetch all orders linked to that *_id*.
4. Respond with the user's order details.

This endpoint will help you retrieve all orders for a specific user

## README - Milestone 27: My Orders Page  

### Overview  
In this milestone, we created a *My Orders* page for our frontend. This page fetches and displays all user orders by sending a GET request to the my-orders endpoint using the user’s email.  

### Learning Goals 🎯  
- Implement a frontend page to display user orders.  
- Send a request to retrieve order data from the backend.  
- Integrate the *My Orders* page into the navbar for easy access.  

### Implementation Steps 📝  
1. Created a *My Orders* page.  
2. Sent a GET request to fetch user orders using their email.  
3. Displayed the retrieved orders on the page.  
4. Updated the navbar to include the *My Orders* page for better navigation.  

### Submission Guidelines 📥  
- Code pushed to the GitHub repository.  
- Repository is publicly accessible.  
- README updated with milestone details.  
- Repository link submitted as per guidelines.  

🚀 *Milestone 27 completed successfully!

## README - Milestone 28: Cancel Order Feature  

### Overview  
In this milestone, we enhanced the *My Orders* page by adding a *Cancel Order* button and implemented a backend endpoint to handle order cancellations.  

### Learning Goals 🎯  
- Enable users to cancel placed orders.  
- Implement order cancellation logic in the frontend and backend.  
- Prevent the cancel button from appearing for already canceled orders.  

### Implementation Steps 📝  
1. Added a *Cancel Order* button for each order in the *My Orders* page.  
2. Ensured the button is hidden for already canceled orders.  
3. Created a backend endpoint to receive an order-id, find the order, update its status to *canceled*, and save the changes.  

### Submission Guidelines 📥  
- Code pushed to the GitHub repository.  
- Repository is publicly accessible.  
- README updated with milestone details.  
- Repository link submitted as per guidelines.  

🚀 *Milestone 28 completed successfully!*

Milestone 29 and 30 - PayPal Integration (Setup)

In this milestone, we set up PayPal for online payments. First, create a PayPal developer account and log in to the PayPal Developer Dashboard. Navigate to Sandbox Accounts, create an account if needed, and save the User ID. Next, obtain and save your Client ID from the sandbox account. Update the order confirmation page to include two payment options: Cash on Delivery (COD) and Online Payment (PayPal). Implement radio buttons to toggle between these options, ensuring the PayPal button appears when Online Payment is selected. In the next milestone, we will integrate the PayPal payment buttons into the application.