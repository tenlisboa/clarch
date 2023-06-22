import Template from "../contracts/template";

const template = `
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "Node",
    "target": "ES2020",
    "jsx": "react",
    "checkJs": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "resolveJsonModule": true
  },
  "exclude": ["node_modules", "**/node_modules/*"]
}
`;

export function jsConfigTemplate(input?: any): Template {
  return {
    fileName: "jsconfig.json",
    template: template,
  };
}
