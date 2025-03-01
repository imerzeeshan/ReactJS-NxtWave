# Authentication & Authorization | Cheat Sheet
### Concepts in Focus
- Client-Server Communication
    - Authentication
    - Authorization
- Authentication Flow
- Route Parameters
    - History
- E-Commerce Application

## 1. Client-Server Communication
<img src="https://assets.ccbp.in/frontend/content/react-js/session-13-client-server-communication.png" alt="client sever" width="600"/>

### 1.1 Authentication
Authentication is the process of verifying a user's identity.

### 1.2 Authorization
Authorization is the process of verifying whether the user is authenticated and permitted to perform some actions like accessing resources, etc.

**Example:**

After successful authentication, employees are only allowed to access certain resources based on their roles.

- Admin can Read, Create, Delete, and Update the Resources
- User can only Read and Create the Resources

<img src="https://assets.ccbp.in/frontend/content/react-js/session-13-authentication-authorization-difference.png" alt="authentication authorization" width="600"/>

## 2. Authentication Flow

<img src="https://assets.ccbp.in/frontend/content/react-js/session-13-authentication-flow.png" alt="authentication" width="600"/>

## 3. Route Parameters
When a component is rendered by the Route, some additional props are passed.

They are:

- match
- history
- location

### 3.1 History
The `history` object has some methods to control the navigation in the browser, and it also maintains the history of the routes we navigated.

It has the following methods to control the navigation in the browser:

- `push()`
- `replace()`
- `go()`
- `goBack()`
- `goForward()`, etc.

The `history.push()` and `history.replace()` methods are used to navigate to other routes programmatically.

#### 3.1.1 history.push()
With the `history.push()` method, the user can go forward and backwards in the browser, and the URL will change.

**Syntax:**

```JAVASCRIPT
history.push("PATH");
```

#### 3.1.2 history.replace()
The `history.replace()` method replaces the current URL with new one. The user can't go backwards to the previous URL.

**Syntax:**

```JAVASCRIPT
history.replace("PATH");
```

## 4. E-Commerce Application

- Make an Authentication Request to Login API
- Handle Login API Response
    - **On Login Success**
    - On Login Failure
- Store the JWT Token

**Authenticated Credentials:**

```css
Username: henry
password: henry_the_developer
```
```css
Username: david
password: the_miller@23
```
```css
Username: robert
password: WilsonRobert45
```
```css
Username: praneetha
password: praneetha@2021
```
```css
Username: mosh
password: DevMosh22
```
```css
Username: rahul
password: rahul@2021
```
---

**File**: src/App.js

```JSX
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
```

**File**: src/components/LoginForm/index.js
 
```JSX
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
```

When the `history.push()` is triggered, the path will change. The `switch` inside `App.js` will trigger again, and the corresponding component will render.

**Note**
- If the Response status code is 2XX, then response.ok will be true else it is false.
- Whenever the route changes, the `switch` in the `App.js` will trigger again, and the corresponding component will render.
**File**: src/components/Home/index.js

 
```JSX
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="dresses to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
```


**File**: src/components/Cart/index.js

```JSX
import Header from '../Header'
import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="cart-img"
      />
    </div>
  </>
)

export default Cart
```


**File**: src/components/Header/index.js
 
```JSX
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/products" className="nav-link">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="nav-link">
          <li>Cart</li>
        </Link>
      </ul>
      <button type="button" className="logout-desktop-btn">
        Logout
      </button>
      <button type="button" className="logout-mobile-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="logout icon"
          className="logout-icon"
        />
      </button>
    </div>
  </nav>
)
export default Header
```


**File**: src/components/Products/index.js

```JSX
import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="products-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="products-img"
      />
    </div>
  </>
)

export default Products
```


**File**: src/components/NotFound/index.js
 
```JSX
import "./index.css";

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not-found"
      className="not-found-img"
    />
  </div>
);

export default NotFound;
```