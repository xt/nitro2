const templateFiles = "plop-template/**";

const defaultActions = [
  {
    type: "addMany",
    destination: "packages/{{camelCase name}}",
    base: "plop-template",
    templateFiles
  },
  {
    type: "modify",
    path: "packages/{{camelCase name}}/package.json",
    pattern: /##__PROJECT_NAME_LOWER_CASE__##/gi,
    template: "{{dashCase name}}"
  }
];

module.exports = plop => {
  // Declare a new generator called "newApp" for use with our react-redux-boilerplate app
  plop.setGenerator("bloks-core", {
    description: "Scaffold a new React microApp",

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name from your Micro App?",
        validate: value => {
          if (/.+/.test(value)) {
            if (/^[a-zA-Z]+$/.test(value)) {
              return true;
            }
            return "Name must not have any special characters in it.";
          }
          return "Name is required!";
        }
      }
    ],

    actions: function(answers) {
      let actions = defaultActions;
      return actions;
    }
  });
};
