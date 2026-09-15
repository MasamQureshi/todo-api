const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];
let nextId = 1;

// Create a task
app.post("/tasks", (req, res) => {
    const task = {
        id: nextId++,
        title: req.body.title,
        done: false
    };

    tasks.push(task);

    res.status(201).json(task);
});

// List all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Mark a task as done
app.post("/tasks/:id/done", (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    task.done = true;

    res.json(task);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});