# Blogify
Blogify is a simple blogging platform built with Node.js, Express, and MongoDB. It allows users to create, read and delete blog posts. The application uses EJS as the templating engine for server-side rendering, providing a dynamic and responsive user interface. 

## Description
This is my first web development project using Node.js, Express, MongoDB, and template engines. Through this project, I have learned:

- How to create a server using Node.js and Express.
- How to create routes and handle them using handler functions.
- How to call POST and DELETE requests from the frontend using fetch() and handle those requests by creating API endpoints in the backend.
- How to connect my application to a MongoDB database.

Till now, I have worked primarily on the frontend with HTML, CSS, and JavaScript. When I needed data, I used external APIs to fetch and display the data on the frontend. While working on this project, I learned about template engines, which allow data from the database to be directly embedded into EJS files and sent as updated files to the client's browser. This experience helped me understand the difference between server-side rendering and client-side rendering.

As I am very new to these technologies, I initially wrote the whole code in a single file. Writing the entire code in one file creates confusion and makes future updates tedious. After some research, I learned about the MVC (Model-View-Controller) framework, which structures code by separating routes into a routes folder, handler functions into a controller folder, and schemas/models into a models folder. By adopting the MVC framework, my code became more modular, and I learned how to write structured code, which is very important for peer developers to understand.

## Features

- **Home Page:** Displays a list of all blog posts sorted by creation date.
- **Create Blog:** A form to create new blog posts.
- **Blog Details:** View details of a single blog post.
- **Delete Blog:** Remove a blog post from the database.


## Technologies Used

- **Node.js:** JavaScript runtime for building server-side applications.
- **Express:** Fast and minimalist web framework for Node.js.
- **MongoDB:** NoSQL database for storing blog data.
- **Mongoose:** ODM for MongoDB to manage data models and schemas.
- **EJS:** Templating engine for generating HTML with embedded JavaScript.


## Screenshots of my work

**Home Page:**
![image](https://github.com/user-attachments/assets/d9baa8b2-54b6-4494-b5e9-8a8a74192532)

**Create-blog Page:**
![image](https://github.com/user-attachments/assets/ea4b6f39-cc2d-4baf-895c-00437a7f0928)

**Blog-details Page:**
![image](https://github.com/user-attachments/assets/f2396f42-5892-4234-8de1-be9117b9eecb)










