const element = (
    // Write your code here.
    <div className = 'bg-container'>
        <h1 className ='main-heading'>Congratulations</h1>
        <div className = 'detail-container'>
            <img className = 'man-img' src = 'https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'/>
            <h2>Kiran V</h2>
            <p>Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
            <img className ='watch-img' src = 'https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' />
        </div>
    </div>
  )
  
ReactDOM.render(element, document.getElementById('root'))