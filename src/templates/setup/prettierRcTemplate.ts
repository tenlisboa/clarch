import Template from "../contracts/template";

const template = `
{
  "semi": true,
  "singleQuote": false,
  "arrowParens": "avoid"
}
`;

export function prettierRcTemplate(): Template {
  return {
    fileName: ".prettierrc",
    template: template,
  };
}
