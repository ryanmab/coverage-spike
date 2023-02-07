module.exports = {
    // Provide browser and es6 variables
    env: {
        browser: true,
        es6: true,
    },
    extends: ["airbnb", "prettier"],
    plugins: [],
    settings: {},
    overrides: [],
    rules: {
        // ESLint
        // This turns off errors when we modify a value on an object passed as a parameter
        "no-param-reassign": [
            "error",
            {
                props: false,
            },
        ],
        // console.log should be stripped on compilation and can be useful for debugging tags and other things
        "no-console": "off",
        // Handled by @typescript-eslint/no-unused-vars
        "no-unused-vars": "off",
        // Handled by Typescript
        "consistent-return": "off",
        // Allow both styles of arrow functions
        "arrow-body-style": "off",
        // Prefer template strings over concatenation
        "prefer-template": "warn",
        // Prefer destructuring variables
        "prefer-destructuring": "warn",
        // Don't allow nested ternarys
        "no-nested-ternary": "warn",
        // Allow declarations of variables on switch case
        "no-case-declarations": "off",
        // We want to use plusplus
        "no-plusplus": "off",
        // No need to be so strict about this since we don't usually use classes
        "max-classes-per-file": ["error", 2],
        // Don't allow continue
        "no-continue": "warn",
        // Use whatever name you like
        "no-restricted-exports": "off",
        // Optional parameters go last, default parameters may be anywhere within those
        "default-param-last": "off",
        // Add lines between certain statements
        "padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                prev: "*",
                next: ["return", "continue", "multiline-const", "block-like", "switch", "export", "throw"],
            },
            {
                blankLine: "always",
                prev: ["block-like", "multiline-const"],
                next: "*",
            },
        ],

        // eslint-plugin-import
        // Never allow extension for packages, but allow for anything else
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        // Only allow imports on dependencies
        "import/no-extraneous-dependencies": "off",
        // We use both types of exports
        "import/prefer-default-export": "off",
        // Throws an error when you import the default with the name of a named export
        "import/no-named-as-default": "off",
        // Handled by Prettier
        "import/order": "off",
        "import/newline-after-import": "off",
        "import/first": "off",

        // React
        // We use prop spreading
        "react/jsx-props-no-spreading": "off",
        // Handled by typescript
        "react/prop-types": "off",
        "react/require-default-props": "off",
        // Make sure filenames use jsx or tsx
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".jsx", ".tsx"],
            },
        ],
        // These two are no longer required, v17 uses a babel transform.
        // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/state-in-constructor": "off",
        "react/no-unescaped-entities": "off",
        // Force destructuring of props on FC
        "react/destructuring-assignment": ["error", "always", { ignoreClassFields: true }],
        // Use arrow functions for function components
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        // Don't allow nested components, except props
        "react/no-unstable-nested-components": [
            "error",
            {
                allowAsProps: true,
            },
        ],
        // Don't have fragments when they are not needed
        "react/jsx-no-useless-fragment": [
            "error",
            {
                allowExpressions: true,
            },
        ],
        // Handled by Prettier
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-wrap-multilines": "off",
    },
};
