let CLIEngine = require('eslint').CLIEngine

it('load config in eslint to validate code', () => {
  let cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json',
  })

  expect(() => {
    cli.executeOnFiles(['__test__/example.js'])
  }).not.toThrow()

})
