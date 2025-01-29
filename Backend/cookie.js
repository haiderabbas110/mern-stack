// its for client side

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3005;

// Middleware to use cookies
app.use(cookieParser());

// ✅ Set a Cookie (Client-Side)
app.get("/set-cookie", (req, res) => {
    res.cookie("username", "JohnDoe", { maxAge: 60000, httpOnly: true });
    res.send("Cookie has been set!");
});

// ✅ Get Cookie Value
app.get("/get-cookie", (req, res) => {
    const username = req.cookies.username;
    res.send(username ? `Cookie Value: ${username}` : "No cookie found");
});

// ✅ Clear Cookie
app.get("/clear-cookie", (req, res) => {
    res.clearCookie("username");
    res.send("Cookie has been cleared!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
