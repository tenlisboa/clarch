export default `
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "allowJs": true,
    "outDir": "./dist",
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "paths": {}
  },
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
`;
