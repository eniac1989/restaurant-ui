import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url );
const __dirname =path.dirname(__filename);

const tokenPath = path.join(__dirname, "../src/tokens/token.json");
const outputPath = path.join(__dirname, "../src/tokens/tokens.css");

const tokens = JSON.parse(
  fs.readFileSync(tokenPath, "utf8")
);

const cssVariables = [];

function convertTokens(obj, pathParts = []) {
  for (const key in obj) {
    const value = obj[key];

    if (
      value &&
      typeof value === "object" &&
      Object.prototype.hasOwnProperty.call(value, "value")
    ) {
      const variableName = [
        ...pathParts,
        key
      ].join("-");

      cssVariables.push(
        `  --${variableName}: ${value.value};`
      );
    } else if (value && typeof value === "object") {
      convertTokens(value, [...pathParts, key]);
    }
  }
}

convertTokens(tokens);

const css = `:root {\n${cssVariables.join("\n")}\n}\n`;

fs.writeFileSync(outputPath, css);

console.log("tokens.css generated successfully.");