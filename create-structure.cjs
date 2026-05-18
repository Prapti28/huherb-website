const fs = require("fs");
const path = require("path");

// Load JSON file
const structure = JSON.parse(
  fs.readFileSync("project-structure.json", "utf-8")
);

// Recursive function
function createStructure(basePath, obj) {
  for (const key in obj) {
    const fullPath = path.join(basePath, key);

    if (typeof obj[key] === "string") {
      // Create file
      fs.writeFileSync(fullPath, obj[key]);
      console.log("File created:", fullPath);
    } else {
      // Create folder
      fs.mkdirSync(fullPath, { recursive: true });
      console.log("Folder created:", fullPath);

      // Recursively create inside folder
      createStructure(fullPath, obj[key]);
    }
  }
}

// Run
createStructure(".", structure);