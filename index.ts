import app from "./src/app";

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server listening on port");
});
// console.log("Server listening on port");
