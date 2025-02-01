const names = 'MD ZEESHAN'
const clsName = 'greeting'
const user = {firstName: 'Moassir', lastName: 'Rizwi'}
const fullName = user => user.firstName + ' ' + user.lastName

const element = (
  <div>
    <h1 className={clsName}>Hello {names}!</h1>
    <h1 className={clsName}>Hello {fullName(user)}!</h1>
  </div>
)
ReactDOM.render(element, document.getElementById('root'))
