const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "input",
    message: "why do you prefer this:",
    name: "reason",
    default: "I do not know at this stage",
    default: "Typescrit",
  },
  {
    type: "list",
    name: "LangOption",
    message: "do you prefer js or ts",
    choices: ["Javascript", "Typescript"],
  },
];

prompt(questions).then((ans) => {
  console.log(ans);
});
