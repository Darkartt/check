import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
<<<<<<< HEAD
=======
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-explicit-any": "off", // Disable rule for 'any' type
      "prefer-const": "off", // Disable prefer-const rule globally
    },
  },
>>>>>>> f7d0c5bf1442387ada4246c3e9b3d86ab7f25bfe
];

export default eslintConfig;
