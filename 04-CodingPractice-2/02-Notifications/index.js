const Notification = props => {
    //  Write your code here.
    const {img,text,classN} = props
    return (
        <div className={`msg ${classN}`}>
            <img className={'icon'} src={img}/> <p className={`noti-msg`}> {text} Message</p>
        </div>
    )
  }
  
  const element = (
    //  Write your code here.   
    <div className = 'bg-container'>
        <h1 className='heading'>Notifications</h1>
        <div className='noti-container'>
            <Notification img='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
            text='Information' classN='noti-1' />

            <Notification img='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
            text='Success' classN='noti-2' />

            <Notification img='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
            text='Warning' classN='noti-3' />

            <Notification img='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
            text='Error' classN='noti-4' />
        </div>
    </div>
  )
  
  ReactDOM.render(element, document.getElementById('root'))
  