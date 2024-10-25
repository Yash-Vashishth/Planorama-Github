// Importing libraries and declaring global variables
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const JWT_SECRET = "hellohidarlingkkrh";
const app = express();
const port = 3000;
let users = [];


// Middlewares
app.use(express.json());
app.use(cors());

const auth = (req,res,next) => {
  const token = req.headers.token;
  const decodedInfo = jwt.verify(token, JWT_SECRET);
  if (decodedInfo.username) {
    req.username = decodedInfo.username;
    next();
  } else {
    res.json({
      message : "You are not logged in"
    })
  }
}


// Route Handlers
// app.get("/", (req,res) => {
//   res.sendFile(__dirname + "/public/index.html")
// })

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    Message: "Welcome Aboard",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    user.token = token;
    res.json({
      token: token,
    });
  } else {
    res.status(404).json({
      Message: "Invalid username or password",
    });
  }
});

app.get("/me", auth, (req, res) => {
  const token = req.headers.token;
  const decodedInfo = jwt.verify(token, JWT_SECRET);
  const username = decodedInfo.username;

  res.json({
    username: username,
  });
});

// Listening port
app.listen(port, () => {
    console.log("Server is running!")
});
