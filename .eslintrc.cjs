module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:vue/vue3-recommended", "standard"],
    "overrides": [],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "ecmaFeatures": {
            "modules": true
        },
        "parser": "@typescript-eslint/parser",
        "sourceType": "module",
        "requireConfigFile": false
    },
    "plugins": ["vue"],
    "rules": {
        "semi": [2, "never"]
    }
}