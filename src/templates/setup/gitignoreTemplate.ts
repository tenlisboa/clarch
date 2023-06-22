import Template from "../contracts/template";

const template = `
node_modules
coverage
dist
`;

export function gitignoreTemplate(input?: any): Template {
  return {
    fileName: ".gitignore",
    template: template,
  };
}
