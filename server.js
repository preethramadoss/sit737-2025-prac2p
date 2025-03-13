const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"), (err) => {
        if (err) {
            console.error("Error serving index.html:", err);
            res.status(err.status || 500).send("File Not Found");
        }
    });
});

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});
