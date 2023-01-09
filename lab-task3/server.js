const express = require("express");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("homepage");
});
app.get("/contact-us", (req, res) => {
    res.render("contact-us");
});
app.get("/about-us", (req, res) => {
    res.render("about-us");
});
app.listen(2000);