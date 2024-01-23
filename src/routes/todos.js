"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({
        todos,
    });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({
        message: "todo added",
        todo: newTodo,
        todos,
    });
});
router.put("/todo/:todoId", (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(({ id }) => id === tid);
    if (todoIndex < 0) {
        return res.status(404).json({
            message: "todo not found",
            todos,
        });
    }
    todos[todoIndex].text = req.body.text;
    res.status(200).json({
        message: "todo updated",
        todos,
    });
});
router.delete("/todo/:todoId", (req, res, next) => {
    const tid = req.params.todoId;
    todos = todos.filter(({ id }) => id !== tid);
    res.status(200).json({
        message: "Deleted todo!",
        todos,
    });
});
exports.default = router;
