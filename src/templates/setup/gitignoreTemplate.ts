import Template from "../template";

const template = `
node_modules
coverage
dist
`;

export function gitignoreTemplate(): Template {
  return {
    fileName: ".gitignore",
    template: template,
  };
}
