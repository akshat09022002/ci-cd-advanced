"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@repo/db/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await client_1.client.user.create({
            data: {
                username,
                password
            }
        });
        res.status(201).json({ message: "User created successfully", username: user.username, password: user.password });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
app.listen(3002, () => {
    console.log("Server is running on port 3002");
});
