import express from "express";
import fs from "fs";

const app = express();
const PORT = 8800;

app.use(express.json());

function readData() {
    const data = fs.readFileSync("data.json", "utf-8");
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
}

app.post("/filesave", (req, res) => {
    const { filename, content } = req.body;
    fs.writeFileSync(filename, content);
    res.json({ message: "File saved successfully", filename });
});

app.get("/data", (req, res) => {
    res.json(readData());
});

app.put("/data", (req, res) => {
    writeData(req.body);
    res.json({ message: "Data updated successfully", data: req.body });
});

app.get("/users", (req, res) => {
    const data = readData();
    res.json(data.users);
});

app.post("/users", (req, res) => {
    const data = readData();
    const { name, email, ...otherFields } = req.body;

    const newUser = {
        id: Date.now(),
        name,
        email,
        ...otherFields
    };

    data.users.push(newUser);
    writeData(data);

    res.json({ message: "User added successfully", user: newUser });
});

app.get("/", (req, res) => {
    res.json("Hello from root route");
});

app.get("/greet", (req, res) => {
    res.json("Hello from greet route");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
