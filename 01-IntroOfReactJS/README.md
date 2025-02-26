# Introduction to React JS

- MERN Stack
  - Introduction to React JS
- React
  - React.createElement
  - ReactDOM.render
- JSX
  - Embedding Expressions
  - Nesting elements

# Introduction to React JS | Cheat Sheet

## Concepts in Focus

- [React JS](#introduction)
  - [Why React JS?](#whyreactjs)
  - [Advantages of React JS](#advantagesofreactjs)
- [Running JavaSript in HTML](#runnigjs)
- [Creating Elements using React JS](#)
  - [React CDN](#)
  - [React.createElement()](#)
  - [ReactDOM.render()](#)

- [JSX](#)
  - [Babel](#)
  - [Embedding Variables and Expressions in JSX](#)
  - [Nesting JSX elements](#)

<a name="introduction"></a>

## 1. React JS

React JS is an open-source JavaScript library used to build user interfaces. It was developed by Facebook.

<a name='whyreactjs'></a>
### 1.1 Why React JS?

- Performant websites
- Fewer lines of code
- Improves readability of code
- Less time consuming
- Open Source
- Reusable code

<a name='advantagesofreactjs'></a>
### 1.2 Advantages of React JS

- Easy to Learn
- Large Community
- Developer Toolset

<a name="runningjs"></a>
## 2. Running JavaScript in HTML

We can run JavaScript in HTML using the HTML `script` element. It is used to include JavaScript in HTML.
```jsx
<body>
  <div id="root"></div>
  <script type="text/javascript">
    const rootElement = document.getElementById("root");
    const element = document.createElement("h1");
    element.textContent = "Hello World!";
    element.classList.add("greeting");
    rootElement.appendChild(element);
  </script>
</body>
```

Here the `type` attribute specifies the type of the script.

To include an external JavaScript file, we can use the HTML `script` element with the attribute `src`. The `src` attribute specifies the path of an external JS file.

```jsx
<script type="text/javascript" src="PATH_TO_JS_FILE.js"></script>
```

**Note**
When the browser comes across a `script` element while loading the HTML, it must wait for the script to download, execute it, and only then can it process the rest of the page.

So, we need to put a `script` element at the bottom of the page. Then the browser can see elements above it and doesn’t block the page content from showing.

If more than one `script` elements are in the HTML, the `script` elements will be executed in the order they appear.