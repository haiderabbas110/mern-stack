//Its for servr side


const express = require("express");

const session = require("express-session");


const app = express();
const PORT = 3005;
// ✅ Use Express Session
app.use(
    session({
        secret: "secretkey", // Change this to a random string
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }, // 1 minute session
    })
);

// ✅ Set Session
app.get("/set-session", (req, res) => {
    req.session.username = "JohnDoe";
    res.send("Session has been set!");
});

// ✅ Get Session
app.get("/get-session", (req, res) => {
    res.send(req.session.username ? `Session Value: ${req.session.username}` : "No session found");
});

// ✅ Clear Session
app.get("/clear-session", (req, res) => {
    req.session.destroy();
    res.send("Session has been cleared!");
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
