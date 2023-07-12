module.exports = {
  root: true,

  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "plugin:eslint-plugin-import/recommended"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  plugins: ["import"],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "import/extensions": ["off"],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "error",
    "arrow-body-style": ["error", "as-needed"],
    "no-console": "error",
    camelcase: "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test.{ts,tsx}",
          "test-*.{ts,tsx}",
          "**/*{.,_}{test,spec}.{ts,tsx}",
          "**/jest.config.ts", // jest config
          "**/jest.setup.ts", // jest setup
        ],
        optionalDependencies: false,
      },
    ],
  },
};
