# Chapter 03: React essentials

<!--continue at 013. component composition the special children prop-->

## Import assets into a js variable

When referencing an image as `<img src="image.png">`, there is a chance that the image path may break if the directory structure changes during the build process. It is best practice to first import the image into a javascript variable and then reference it as a dynamic value. Image will be correctly processed by the bundler and remain accessible across environments.

```jsx
import reactImage from "./assets/image.png"

function App() {
  return (
    <img src={reactImage} alt="image description" />
  );
}

```

```jsx
import personImage from "./assets/john_doe.png

const PERSON = {
  image: personImage,
  name: "John Doe"
};

function App() {
  return (
    <img src={PERSON.image} alt="image description" />
  );
}
```

## Reference assets as a variable

### Build Process and Asset Management

- When you import an image, it allows bundlers like Webpack or Vite (commonly used in React apps) to properly process the image, optimize it, and include it in the final bundle. This ensures the image is correctly referenced in the final build, even if the directory structure changes.
- Using a relative path directly in the `src` attribute bypasses the bundler’s optimization process. If the directory structure changes during the build, this approach might result in broken paths.

### Dynamic Path Resolution

- Importing into a variable means that React can use it anywhere without worrying about path changes, making it more flexible.
- Hardcoding paths requires careful management, especially if images are moved or the app structure changes, increasing maintenance overhead.

### Error Prevention

- If the path in the import statement is incorrect, the build process will throw an error, allowing you to catch it early.
- With a direct path in the `src` attribute, issues will only surface at runtime, which can lead to missing images in production if not caught in testing.

## Component styles and .css files

- We can keep separate .css files for each component instead of one single .css file. Important thing to note is that such styles are not scoped. If i have `Header.css` and import it to `Header.jsx`, but i also have few other components each with it's own .css file and everything is inside main .jsx file like `App.jsx`. Styles from can affect any element found on `App.jsx`.

- We can write and import separate .css files for each component but important thing to note is that styles are not automatically scoped and isolated to the specific component. Like  importing `Header.css` to `Header.jsx`. The styles defined in Header.css can still affect any element within main .jsx file that renders all the components. By default, CSS styles are applied to global scope. They cascade throughout entire page, even if you apply it to single component.
- Local scope will be explained later.

## { props } object

- Each component will have built in `props` object. React automatically provides a special, implicit prop named "children" to any custom component. It represents whatever is rendered between opening and closing tags of each component. If there is a single child `props.children` will be that child (a string, element, component... etc). If there are multiple children, it will represent an array of those children. It will not render `innerHTML` elements, instead it will render plain text. React has a special prop called `dangerouslySetInnerHTML` for when you absolutely need to inject raw HTML into component.

## Summary

- Using `import` is more reliable, bundler-friendly, and maintainable for images in React projects. It ensures that images are optimized and referenced correctly across environments, which is particularly important for production builds.
- CSS styles, by default, applies to global scope. Instead of single component CSS will apply to whole page. It is possible to apply style to single component.
- `props.children`, props object by default have implicit "children" key holding the text value of each component (value between opening and closing tags).