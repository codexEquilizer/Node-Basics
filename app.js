const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const pug = require("pug");

const app = express();
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const errorController = require("./controllers/error-controller.js");

app.set("view engine", "pug");

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// catch Error Middleware
app.use(errorController.getPageNotFound);

app.listen(3000);
