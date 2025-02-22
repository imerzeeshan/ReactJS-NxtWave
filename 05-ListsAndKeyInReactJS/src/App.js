import UserProfile from './components/UserProfile'
import './App.css'

const userDeatailsList = [ 
  {
    uniqueNo: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Md Zeeshan',
    role: 'Software Engineer',
  },
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Kareena',
    role: 'Solution Engineer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Anushka',
    role: 'MERN Full Stack Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Md Yusuf',
    role: 'Software Engineer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDeatailsList.map(eachUser => (
        <UserProfile userDetails={eachUser} key={eachUser.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
