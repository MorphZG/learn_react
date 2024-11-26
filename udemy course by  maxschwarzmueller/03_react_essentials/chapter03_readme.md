# Chapter 03: React essentials

## Import assets into a js variable

When referencing an image in the `<img>` tag, under the `src` attribute. It is best practice to first import the image into the javascript variable, than reference it as dynamic value.

```jsx
import reactImage from "./assets/image.png"

<img src={reactImage} alt="image description" />

```

### Build Process and Asset Management

- When you import an image, it allows bundlers like Webpack or Vite (commonly used in React apps) to properly process the image, optimize it, and include it in the final bundle. This ensures the image is correctly referenced in the final build, even if the folder structure changes.
- Using a relative path directly in the `src` attribute bypasses the bundler’s optimization process. If the folder structure changes during the build, this approach might result in broken paths.

### Dynamic Path Resolution

- Importing into a variable means that React can use it anywhere without worrying about path changes, making it more flexible.
- Hardcoding paths requires careful management, especially if images are moved or the app structure changes, increasing maintenance overhead.

### Error Prevention

- If the path in the import statement is incorrect, the build process will throw an error, allowing you to catch it early.
- With a direct path in the `src` attribute, issues will only surface at runtime, which can lead to missing images in production if not caught in testing.

### Summary

- Using `import` is more reliable, bundler-friendly, and maintainable for images in React projects. It ensures that images are optimized and referenced correctly across environments, which is particularly important for production builds.