const taskModel = {
    tasks: require("../tasksData").tasks,

    getAllTasks: function () {
        return this.tasks;
    },

    getTaskByID: function (id) {
        let tasksFound = this.tasks.filter(currentTask => currentTask.id == id);
        if (tasksFound.length >= 1)
            return tasksFound[0];
        else
            return null;
    },

    addTask: function (task) {
        if (!task.taskName || !task.creator) {
            throw new Error("Name and creator are requred.");
        }

        let taskToAdd = {
            id: this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 0,
            taskName: task.taskName,
            description: task.description ? task.description : "",
            done: task.done,
            deadline: task.deadline ? task.deadline : "",
            creator: task.creator,
            assigned: task.assigned ? task.assigned : ""
        }

        this.tasks.push(taskToAdd);

        return this.getTaskByID(taskToAdd.id);
    },

    editTask: function (id, task) {
        let indexOfTaskToAdd = this.tasks.findIndex(
            currentTask => currentTask.id == id
        );

        if (indexOfTaskToAdd == -1)
            throw new ERROR("Task doesn't exist.");

        let originalTask = this.tasks[indexOfTaskToAdd];

        let editedTask = {
            id: originalTask.id,
            taskName: task.taskName ? task.taskName : originalTask.taskName,
            description: task.description ? task.description : originalTask.description,
            done: task.done === true ? task.done : task.done === false ? task.done : originalTask.done,
            deadline: task.deadline ? task.deadline : originalTask.deadline,
            creator: task.creator ? task.creator : originalTask.creator,
            assigned: task.assigned ? task.assigned : originalTask.assigned
        }

        this.tasks[indexOfTaskToAdd] = editedTask;

        return this.getTaskByID(id);
    },

    deleteTask: function (id) {
        let indexOfTaskToDelete = this.tasks.findIndex(
            currentTask => currentTask.id == id
        );

        if (indexOfTaskToDelete == -1)
            throw new error("Task doesn't exist.");

        return this.tasks.splice(indexOfTaskToDelete, 1)[0];
    }
}

module.exports = taskModel;