export default `
{
  "name": "some-project",
  "version": "1.0.0",
  "main": "dist/index.js",
  "license": "MIT",
  "scripts": {
    "test": "npx jest --config ./jest.config.js",
    "test:dev": "npm run test -- --watchAll --runInBand",
    "test:cov": "npm run test -- --coverage",
    "start": "node --experimental-json-modules src/index.js",
    "build": "node build.js",
    "lint": "eslint --ext .js,.ts src",
    "format": "prettier --ignore-path .gitignore --write '**/*.+(js|ts|json)'"
  },
  "dependencies": {},
  "peerDependencies": {},
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.59.8",
    "@typescript-eslint/parser": "^5.59.8",
    "esbuild": "^0.17.19",
    "eslint": "^8.42.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-config-standard-with-typescript": "^35.0.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-n": "^15.7.0",
    "eslint-plugin-promise": "^6.1.1",
    "jest": "^29.5.0",
    "npm-dts": "^1.3.12",
    "prettier": "^2.8.8",
    "ts-jest": "^29.1.0",
    "typescript": "^5.1.3"
  }
}
`;
