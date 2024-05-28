#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] = [];
let conditions = true;

//print welcome message
console.log(chalk.magenta.bold("\n \t Welcome to CodeWithMarium - Todo-List Application\n")); 

// while(conditions){
//     let addTask = await inquirer.prompt([
//         {
//             name: "task",
//             type: "input",
//             message:chalk.bgWhiteBright.bold ("Enter your New Task :")
//         }
//     ]);
//     todoList.push(addTask.task);
//     console.log(`${addTask.task} Task added in Todo-List sudccessfully`);

//     let addMoreTask = await inquirer.prompt([
//         {
//             name: "addMore",
//             type: "confirm",
//             message: "Do you want to add more task?",
//             default: "False"
//         }
//     ]);
//     conditions = addMoreTask.addMore;
// }

// console.log("Your updated Todo-List:" ,todoList);

let main = async () => {
    while (conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option what do you want to do?",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"]
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }
        else if(option.choice === "Delete Task"){
            await deleteTask()
        }
        else if(option.choice === "Update Task"){
            await updateTask()
        }
        else if(option.choice === "View Todo-List"){
            await viewTask()
        }
        else if(option.choice === 'Exit'){
            conditions = false;
        }
    }
}
// function addTask
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`${newTask.task} Task added in Todo-List sudccessfully`);

}
//funtion to view all TODO's
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`)
    });
    console.log("\n");
}

//function to delete a task from list
let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "input",
            message: "Enter the 'index.no' of task you want to delete:",
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index -1, 1);
    console.log(`${deleteTask} This task has been deleted successfully from your Todo-List`);

}
//function to update a task
let updateTask = async () => {
    await viewTask()
    let update_task_Index = await inquirer.prompt([
        {
            name: "index",
            type: "input",
            message: "Enter the 'index.no' of task you want to update:",
        },
        {
            name: "new_task",
            type: "input",
            message: "Enter the new task you want to update:",
        }
    ]);
    todoList[update_task_Index.index - 1] = update_task_Index.new_task;
    console.log(`\n Task at index no. ${update_task_Index.index -1} updated successfully [For updated list check option: "view Todo-List"]`);
}
main();