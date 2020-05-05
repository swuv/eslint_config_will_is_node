# eslint_config_backend

My eslint-config file for node applications without typescript. This project works together with [@will_is_santos/prettier-config-backend](https://www.npmjs.com/package/@will_is_santos/prettier-config-backend), so it'll be necessary install this dependency. If you wanna use in your project, see the Install and Usage sections.

## Installation

```bash
sudo npm install -D @will_is_santos/eslint-config-backend @will_is_santos/prettier-config-backend prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-node eslint-plugin-security eslint-plugin-jsdoc eslint
```

## Usage

Create a eslintrc.json file in your repo's root and add the following key:

```json
"extends":[
    "@will_is_santos/backend"
]
```

After this, create a prettierrc.json file in the same place and copy this text into it:

```json
"@will_is_santos/prettier-config-backend"
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
