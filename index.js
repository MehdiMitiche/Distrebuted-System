var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

const bodyparser = require("body-parser");

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/process", (req, res) => {
  io.emit("processUpdate", req.body);
  res.status(200).send("UPDATED !");
});

io.on("connection", (socket) => {
  socket.on("logedIn", () => {});
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
