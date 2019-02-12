const templateFilesJS = 'plop-templates/js/**';
const templateFilesTS = 'plop-templates/ts/**';

const jsTemplateActions = [
  {
    type: 'addMany',
    destination: 'packages/{{camelCase name}}',
    base: 'plop-templates/js',
    templateFiles: templateFilesJS,
  },
  {
    type: 'modify',
    path: 'packages/{{camelCase name}}/package.json',
    pattern: /##__PROJECT_NAME_LOWER_CASE__##/gi,
    template: '{{dashCase name}}',
  },
];
const tsTemplateActions = [
  {
    type: 'addMany',
    destination: 'packages/{{camelCase name}}',
    base: 'plop-templates/ts',
    templateFiles: templateFilesTS,
  },
  {
    type: 'modify',
    path: 'packages/{{camelCase name}}/package.json',
    pattern: /##__PROJECT_NAME_LOWER_CASE__##/gi,
    template: '{{dashCase name}}',
  },
];

module.exports = plop => {
  // Declare a new generator called "newApp" for use with our react-redux-boilerplate app
  plop.setGenerator('bloks-core', {
    description: 'Scaffold a new React microApp',

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name from your Micro App?',
        validate: value => {
          if (/.+/.test(value)) {
            if (/^[a-zA-Z]+$/.test(value)) {
              return true;
            }
            return 'Name must not have any special characters in it.';
          }
          return 'Name is required!';
        },
      },
      {
        type: 'confirm',
        name: 'isJSTemplate',
        message: 'Would you like to create typescript template?',
      },
    ],

    actions: answers =>
      answers.isJSTemplate ? tsTemplateActions : jsTemplateActions,
  });
};
