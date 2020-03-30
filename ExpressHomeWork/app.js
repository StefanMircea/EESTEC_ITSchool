const express = require('express');
const app = express();

app.use(express.json());

const taskRouter = require("./routes/taskRoutes");

app.use("/tasks", taskRouter);

app.listen(4000);