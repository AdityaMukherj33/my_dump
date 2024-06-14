

const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
      <style>
          .body-style {
              background-color: rgb(243, 60, 60);
          }
          .container {
              margin-top: 50px;
              height: 540px;
              width: 1050px;
  
              background-color: aliceblue;
              border-radius: 10px 10px 10px 10px;
          }
          .col-6 {
              width: 350px;
              height: 540px;
              border-radius: 10px 0px 0px 10px;
              border-top: none;
              border-left: none;
              border-bottom: none;
              padding-left: 50px;
          }
          .box-two {
              width: 700px;
              height: 540px;
              border: 1px solid black;
              border-radius: 0px 10px 10px 0px;
              border-bottom: none;
              border-right: none;
              border-top: none;
          }
          .search {
              width: 400px;
              margin-left: 200px;
              margin-top: 30px;
          }
          .box-two-likes {
              margin-top: 10px;
              background-color: rgb(53, 53, 153);
              height: 330px;
              margin-left: 10px;
              padding-top: 30px;
              padding-left: 30px;
              margin-right: 10px;
              border-radius: 10px 10px 10px 10px;
              margin-bottom: 15px;
              padding-bottom: 15px;
          }
          .Like {
              font-variant: small-caps;
              color: aliceblue;
          }
          .cards input {
              margin-left: 5px;
              margin-right: 10px;
          }
  
          .form-control {
              margin-top: 10px;
              margin-right: 40px;
          }
  
          .am {
              margin-top: 10px;
  
          }
  
          .mb-3 {
              margin-left: 30px;
              margin-right: 40px;
          }
  
          .h {
              margin-top: 25px;
              font-variant: small-caps;
              font-size: large;
              color: rgb(103, 80, 185);
              padding-right: 25px;
          }
  
          .booo {
              width: 180px;
              height: 55px;
              background-color: rgb(255, 77, 46);
              border: none;
              border-radius: 15px 15px 15px 15px;
              color: white;
          }
      </style>
  </head>
  <body class="body-style">
      <div class="container">
          <div class="row">
              <div class="col-6">
                  <div class="h">
                      INSERT DYPATIL LOGO HERE
                  </div><br>
                  <div><button class="booo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-book" viewBox="0 0 16 16">
                              <path
                                  d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                          </svg>
                          <b>Subject 1</b>
                      </button>
                  </div>
                  <br>
                  <div>
                      <button class="booo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-book" viewBox="0 0 16 16">
                              <path
                                  d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                          </svg>
                          <b>Subject 2</b>
                      </button>
                  </div>
                  <br>
                  <div>
                      <button class="booo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-book" viewBox="0 0 16 16">
                              <path
                                  d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                          </svg>
                          <b>Subject 3</b>
                      </button>
                  </div>
                  <br>
                  <div>
                      <button class="booo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-book" viewBox="0 0 16 16">
                              <path
                                  d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                          </svg>
                          <b>Subject 4</b>
                      </button>
                  </div><br>
                  <div>
                      <button class="booo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-book" viewBox="0 0 16 16">
                              <path
                                  d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                          </svg>
                          <b>Subject 5</b>
                      </button>
                  </div><br>
                  <div>
                      <button class="booo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                              class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd"
                                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                              <path fill-rule="evenodd"
                                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                          </svg>
                          <b>Logout</b>
                      </button>
                  </div>
              </div>
              <div class="col box-two">
                  <div class="input-group mb-3">
                      <span class="input-group-text am" id="basic-addon1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-search" viewBox="0 0 16 16">
                              <path
                                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                          </svg>
                      </span>
                      <input type="text" class="form-control" placeholder="Keep Searchbar if you want"
                          aria-label="Username" aria-describedby="basic-addon1">
                  </div>
                  <h3><b>Dashboard</b></h3><br>
                  <div class="row cards">
                      <div class="col box-two-likes">
  
                          <h3 class="Like">Percentage=(Link numbers here)</h3><br>
                          <h3 class="Like">Classes present=</h3><br>
                          <h3 class="Like">Total classes=</h3><br>
                          <h3 class="Like">Status=</h3><br>
                      </div>
                  </div>
                  <br>
              </div>
          </div>
      </div>
  </body>
  
  </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});