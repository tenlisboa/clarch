import Template from "../contracts/template";

const template = `
{
  "semi": true,
  "singleQuote": false,
  "arrowParens": "avoid"
}
`;

export function prettierRcTemplate(input?: any): Template {
  return {
    fileName: ".prettierrc",
    template: template,
  };
}
