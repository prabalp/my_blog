
# My Blog 

This a simple project made using MERN Stack(MongoDB, Express, React and Node)


## Installation

Clone the git repo in your local machine.

```bash
  git clone https://github.com/prabalp/my_blog.git
  cd my_blog
```

You will find two folders named frontend and backend 

```bash
    cd backend 
    npm i
    npm start 
```
in a differnt terminal
```bash
    cd ..
    cd frontend 
    npm i 
    npm start
```
This will run the frontend server in port = 3001 and the backend in the port = 3000 

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`


## API Reference(backend)

#### Get blogs from database

```http
  GET /blog/getblogs
```
NOTE: No autherntication has been added till now, no need to send any JWT or API key

#### add blogs

```http
  POST /blog/addblog/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**.  title to add |
| `description`      | `string` | **Required**.  description to add |



## Reference

[Materail UI](https://mui.com/)



## MongoDB Atlas 

Just create a cluster and paste the URI in the enviromental variable with proper credentials.

