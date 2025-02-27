# Routing using React Router | Cheat Sheet
### Concepts in Focus
- [Web Apps](#webapp)
- [React Router](#reactrouter)
- [Routing Example](#example)


<a name="webapp"></a>
### 1. Web Apps
Web Apps are of two types, based on how we get content:

-Multi-page application (MPA)
-Single-page application (SPA)

### 1.1 Multi-page application (MPA)
- Every URL is associated with corresponding resources (HTML, CSS, JS).
- The browser downloads these resources when you access them or navigate between URLs.

### 1.2 Single-page application (SPA)
- All URLs are associated with a single HTML page.
- On navigating we only get the additional content (Component - HTML, CSS, JS).

**1.2.1 Advantages of using Single-page application (SPA)**
- Faster Page loading - since they load only necessary Component (HTML, CSS, JS) resources on subsequent requests.
- React is mainly used to build Single-page applications.


<a name="reactrouter"></a>
### 2. React Router
In React, we build Single-page applications using **React Router**.

To implement routing, React Router provides various components:

- `BrowserRouter`
- `Link`
- `Route`
- `Switch`

### 2.1 BrowserRouter
To add routing wrap all the Components with `BrowserRouter`.

**Syntax:**
```jsx
<BrowserRouter>
  <Component 1>
  <Component 2>
  ... 
</BrowserRouter>
```

### 2.2 Link
`Link` Component creates hyperlinks that allows to navigate around in application.

**Syntax:**

```JSX
<Link to="Path"> Display Text</Link>
```

The `to` prop specifies absolute path.

### 2.3 Route
The `Route` component renders specific UI component when path matches current URL.

```JSX
<Route path="Path" component={Component} />
```

**2.3.1 Exact**
Renders the route if path matches exactly the current url

```JSX
<Route exact path="Path1" component={Component1} />
```

**Note**
`If user enters undefined Path, the Component won’t be rendered`

### 2.3 Switch

The `Switch` component will only render the first route that matches the path. If no path matches, it renders the Not Found component.

```JSX
<Switch>
  <Route path="Path1" component={Component1} />
  <Route path="Path2" component={Component2} />
 <Route component={NotFound} />
</Switch>
```


<a name="example"></a>
### 3. Routing Example
**File:** src/App.js

```JSX
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NotFound from "./components/NotFound";
...
const App = () => (
  <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
 </BrowserRouter>
)

export default App
```

**File:** src/components/Header/index.js

```jsx
import { Link } from "react-router-dom";
...
const Header = () => (
  ...
     <ul className="nav-menu">
       <li>
         <Link className="nav-link" to="/">Home</Link>
       </li>
       <li>
         <Link className="nav-link" to="/about">About</Link>
       </li>
       <li>
         <Link className="nav-link" to="/contact">Contact</Link>
       </li>
     </ul>
  ...
)
```