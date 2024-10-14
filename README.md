![Untitled (9)](https://github.com/user-attachments/assets/263d67f2-edf4-4bce-9ded-83693d178d25)

Employee Registration App

Project Overview
The Teekga ELECTRICAL Company Registration App is designed to manage employee records efficiently. This application allows the admin to securely log in and perform CRUD (Create, Read, Update, Delete) operations on employee data. It also provides insights into the status of employees, including active employees, deactivated employees, and those who have transferred to other company branches.

Features
Admin Access Only:
Only the admin can log in to the app and perform actions like adding, updating, and deleting employee records. To delete an employee, log in using the admin credentials:
Username: eungobs@gmail.com
Password: 000000
For Deleting use:Elizabeth Ndzukule to login a Delete page.

Employee Status:
View employees by their status, including active employees, deactivated employees, and those who have moved to other branches.

Responsive Design:
The app is fully responsive and works seamlessly across all devices, ensuring an optimal user experience on both desktops and mobile devices.

Built-in Security:
The app has been developed with a focus on security to ensure safe access and management of employee data.

Technologies Used
React.js: A JavaScript library for building user interfaces and handling state management.
JavaScript: Used for handling the core application logic and interactivity.
CSS: Ensures a modern and responsive design for the app.
JSON: Used for storing and managing employee data within the application.
Installation and Setup
To set up the project, follow these steps:

Install the project using React.js:

npx create-react-app employee-registration
cd employee-registration
npm start
Open the app in your browser at http://localhost:3000.

How to Use
Landing Page:

On the landing page, click the Admin button to register as a new admin.
Once registered, log in to access the employee management system.
Active Employees Page:

ActiveEmployees Page Overview
Description: After logging in, users will be directed to the ActiveEmployees page where they can view all current employees. The page includes several action buttons and individual employee cards for managing employee records.

Layout and Features
Top-Left Action Buttons:

Add: Opens a form or modal for adding a new employee to the system.
Edit: Allows editing of employee details. (Note: This button will be located inside each employee's card.)
Delete: Deletes an employee from the system.
Personnel: Provides access to view employees who have resigned, transferred, or been promoted to other branches or hubs.
Logout: Logs the user out of the system securely.
Employee Cards:

Each card represents an individual employee with their details.
Edit Button: This button is embedded within each employee's card, allowing users to edit the details specific to that employee.

To edit an employee's details, click the Edit button and update the necessary information.
To delete an employee, click the Delete button and confirm the action.
The Personnel button will navigate to the personnel screen, where you can view employees who have left the company or moved to other locations.
Author
Elizabeth Eunice Ndzukule
This project was completed in 5 days, demonstrating rapid development and deployment capabilities. The app was developed using VSCode, and the initial sketches of the app were created using Figma. Screenshots of the app can be found in the public folder.

Additional Information
This employee registration system was designed with a focus on security and responsiveness. It allows Teekga ELECTRICAL Company admins to manage employee data efficiently and securely from any device.
