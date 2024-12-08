                                                                  /******* TO-DO-LIST ***********/
                                                                 /***** SNEH RANJAN*************/

# To-Do-List

To-Do-List is a simple web application for creating and managing to-do lists. It allows users to create tasks with titles and descriptions, update existing tasks, and delete tasks. To-Do-List provides a user-friendly interface for organizing tasks and staying productive.

## Features

- *Task Management*: User can create, update, and delete their tasks & also can view their tasks in a user-friendly interface.
- *User Authentication*: Users can sign up and log in to access their personalized to-do lists.
- *Responsive Design*: Compatible with various screen sizes for a seamless user experience.
- *Intuitive Interface*: User-friendly dark minimal interface for easy task management.

## Screenshots

![Home Page](https://i.ibb.co/MNRbLP1/to-do-img1.png)

![Task List Page](https://i.ibb.co/pRkZWhP/to-do-img2.png)

## Backend API Documentation

### Sign-Up API

- *Endpoint*: /api/v1/register
- *Method*: POST
- *Description*: Creates a new user account with the provided name, email, and password.
- *Parameters*:
-   - name (string): User's chosen name.
  - email (string): User's email address.
  - password (string): User's chosen password.
- *Response*:
  - message (string): Success message or error message if user already exists.

### Sign-In API

- *Endpoint*: /api/v1/login
- *Method*: POST
- *Description*: Allows existing users to log in with their email and password.
- *Parameters*:
  - email (string): User's email address.
  - password (string): User's password.
- *Response*:
  - others (object): User details excluding the password.
  - message (string): Error message if login fails.

### Create Task API

- *Endpoint*: /api/v2/addTask
- *Method*: POST
- *Description*: Adds a new task to the user's to-do list.
- *Parameters*:
  - title (string): Title of the task.
  - body (string): Description of the task.
  - email (string): User's email address.
- *Response*:
  - list (object): Details of the added task.

### Update Task API

- *Endpoint*: /api/v2/updateTask/:id
- *Method*: PUT
- *Description*: Updates an existing task in the user's to-do list.
- *Parameters*:
    - title (string): New title for the task.
    - body (string): New description for the task.
    - email (string): User's email address.
- *Response*:
    - message (string): Success message indicating the task was updated.

### Delete Task API

- *Endpoint*: /api/v2/deleteTask/:id
- *Method*: DELETE
- *Description*: Deletes a task from the user's to-do list.
- *Parameters*:
    - id (string): ID of the task to be deleted.
    - email (string): User's email address.
- *Response*:
    - message (string): Success message indicating the task was deleted.

### Get Tasks API

- *Endpoint*: /api/v2/getTask/:id
- *Method*: GET
- *Description*: Retrieves all tasks belonging to a user.
- *Parameters*:
    - id (string): ID of the user whose tasks are to be retrieved.
- *Response*:
    - list (array): Array of task objects belonging to the user.

## Technologies Used

- *Frontend*:
  - Next.js: For user interfaces.
  - React Router: For Routing in applications.
  - Bootstrap: For responsive design.
  - Next Icons: Icon library.
  - Axios: For making requests to the backend.

- *Backend*:
  - Node.js: For server-side logic.
  - Express.js: For building APIs and handling HTTP requests.
  - MongoDB: For storing user data and task information.
  - Mongoose: MongoDB object modeling for Node.js applications.
  - bcrypt.js: Library for hashing passwords securely.

## Getting Started

To run To-Do-List locally, follow these steps:

1. Clone the repository:
    bash
    # git clone https://github.com/sani9525/To-Do-List.git

2. Navigate to the project directory:
    bash
    #cd ListFlow

3. Install dependencies for the frontend and backend:
    bash
    cd client
    npm install

    cd server
    npm install

4. Start the frontend server:
    ```cd frontend
       npm start
    ```

5. Start the backend server:
    ```nodemon app.js
   

6. Open your browser and navigate to http://localhost:3000 to access To-Do-List.

## Contact

Feel free to reach out to sanikumar3600@gmail.com with any questions or feedback!!

## License

This project is open-source and available. Feel free to contribute.


![Screenshot 2024-12-08 232843](https://github.com/user-attachments/assets/fd336588-9474-411d-98ad-63c21cc22f24)

![Screenshot 2024-12-08 232856](https://github.com/user-attachments/assets/dddd2784-5ea3-4e43-85d8-c2171f4e745e)


![Screenshot 2024-12-08 233643](https://github.com/user-attachments/assets/f86b6a37-376a-4ba3-8793-5177f00f77c9)


![Screenshot 2024-12-08 233658](https://github.com/user-attachments/assets/dffd25a8-9b5d-45ef-83d8-8dae07961bb0)

![Screenshot 2024-12-08 233856](https://github.com/user-attachments/assets/62cce5f8-76d7-4937-9c98-a3332edbc7d0)
                                                                 
