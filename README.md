# assigment17may: MERN Stack Job Listing Application 🧑‍💻

[![Stars](https://img.shields.io/github/stars/rahul72pal/assigment17may?style=flat-square)](https://github.com/rahul72pal/assigment17may)
[![Forks](https://img.shields.io/github/forks/rahul72pal/assigment17may?style=flat-square)](https://github.com/rahul72pal/assigment17may)
[![License](https://img.shields.io/github/license/rahul72pal/assigment17may?style=flat-square)](https://github.com/rahul72pal/assigment17may/blob/main/LICENSE)


This project is a MERN stack (MongoDB, Express.js, React, Node.js) application for managing job listings.  It was developed as an assignment for Knovator Technologies Pvt Ltd.  The application allows users to view a list of jobs, add new jobs, and view individual job details.

## Description

This application provides a user-friendly interface for browsing and managing job listings. The frontend, built with React and Tailwind CSS, displays jobs in a card format and allows for the addition of new jobs through a form. The backend, utilizing Node.js, Express.js, and MongoDB, handles data persistence and API requests.

## Technologies Used

* **Frontend:** React, Tailwind CSS, HTML, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rahul72pal/assigment17may.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd assigment17may
   ```

3. **Install dependencies:**  (You'll need to provide the actual commands for installing the client and server dependencies separately since we lack access to the `package.json` files)  Replace the placeholders below with the actual commands from the respective `package.json` files in the `client` and `server` folders.

   ```bash
   cd client
   # npm install  or yarn install (client dependencies)
   cd ../server
   # npm install or yarn install (server dependencies)
   cd ..
   ```

4. **Set up your MongoDB database.** You will need a running MongoDB instance.  Ensure the connection string in your server code is properly configured.

5. **Start the server and client:** (Again, placeholders for commands from `package.json` scripts)

   ```bash
   cd server
   # npm start or yarn start (start the backend server)
   cd ../client
   # npm start or yarn start (start the frontend)
   ```


## Usage Instructions

* **Homepage (`/`):**  Displays a list of all available jobs.
* **Add Job Page (`/add-job`):** Allows users to add new job listings by filling out the form and submitting it.
* **Job Details Page (`/job/:id`):** Shows detailed information for a specific job based on its ID.

## File Structure

```
assigment17may/
├── client/       // Frontend code (ReactJS)
│   └── ...
├── server/      // Backend code (Node.js, Express.js)
│   └── ...
└── ...
```

## Scripts

**(This section will be populated with the scripts from your `package.json` files.  Please add the client and server scripts here.  Example below):**

**Client (`client/package.json`):**

* `start`: Starts the React development server.  (e.g., `react-scripts start`)

**Server (`server/package.json`):**

* `start`: Starts the Node.js server. (e.g., `node index.js`)


## License

This project is currently not licensed.


## Contribution and Contact

Contributions are welcome! Please feel free to open an issue or submit a pull request.  You can contact the owner, rahul72pal, through GitHub.


**(Remember to replace the placeholder comments and add the actual commands from your `package.json` files.)**
