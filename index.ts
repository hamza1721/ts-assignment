import inquirer from "inquirer";

let todos: string[] = [];
let loop = true;

while(loop){
    const answer :{
        TODO: string,
        addmore: boolean,

    }= await inquirer.prompt([
     {
        type: "input",
        name: "TODO",
        message: "what do you want to add in your todo?" 
     },
     {
        type: "confirm",
        name: "addmore",
        default: false 
     }  
    ])
const {TODO,addmore} = answer;
console.log(answer)
loop = addmore
if(TODO) {
    todos.push(TODO)
} else {
    console.log("Kindly add valid input")
}
}
if(todos.length >0){
    console.log("Your ROdo list:")
    todos.forEach(todo => {
        console.log(todo)
    });

} else{
    console.log("no todos found")
}