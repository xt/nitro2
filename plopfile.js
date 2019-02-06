const templateFiles = "template/**";

const defaultActions = [
  {
    type: "addMany",
    destination: "src/",
    base: "template",
    templateFiles
  },
  {
    type: "modify",
    path: "src/README.md",
    pattern: /##__PROJECT_NAME_PROPER_CASE__##/gi,
    template: "{{titleCase name}}"
  },
  {
    type: "modify",
    path: "src/**",
    pattern: /##__PROJECT_NAME_LOWER_CASE__##/gi,
    template: "{{lowerCase name}}"
  }
];

module.exports = plop => {
  // Declare a new generator called "newApp" for use with our react-redux-boilerplate app
  plop.setGenerator("bloks-core", {
    description: "Scaffold a new React project",

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your Project name?",
        validate: value => {
          if (/.+/.test(value)) {
            if (/^[a-zA-Z]+$/.test(value)) {
              return true;
            }
            return "Name must not have any special characters in it.";
          }
          return "Name is required!";
        }
      },
      {
        type: "input",
        name: "prod-url",
        message: "What will the production url for the site app?",
        validate: value => {
          if (/.+/.test(value)) {
            if (
              /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
                value
              )
            ) {
              return true;
            }
            return "Doesn't look like a valid URL.";
          }
          return "url is required!";
        }
      },

      {
        type: "confirm",
        name: "isBertieNeeded",
        message: "Would you like to add Bertie for Analytics?",
        default: true
      },

      {
        type: "confirm",
        name: "isDockerNeeded",
        message: "Would you like to dockerize the app for deployment?",
        default: true
      },
      {
        when: response => {
          return response.isDockerNeeded;
        },
        type: "input",
        name: "hosting",
        message: "Would you be deploying it to AWS or Azure?"
      }
    ],

    actions: function(answers) {
      let actions = defaultActions;
      return actions;
    }
  });
};
