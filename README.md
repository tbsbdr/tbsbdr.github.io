# tbsbdr.github.io
# Getting started

## 1. Install Tailwind CSS
Install tailwindcss via npm, and create your tailwind.config.js file.

```
npm install -D tailwindcss
````
```
npx tailwindcss init
```

## 2. Start the Tailwind CLI build process
Run the CLI tool to scan your template files for classes and build your CSS.

```
npx tailwindcss -i ./src/input.css -o ./output.css --watch
```

All details on:
https://tailwindcss.com/docs/installation