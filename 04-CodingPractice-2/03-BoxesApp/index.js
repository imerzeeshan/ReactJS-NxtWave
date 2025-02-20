const Box = props => {
    //  Write your code here.
    return (
        <div className={props.boxClass}>{props.boxText}</div>
    )
  }
  
  const element = (
    //  Write your code here. 
    <div className='bg-container'>
        <h1 className='heading'>Boxes</h1>
        <div className='boxes-container'>
            <Box boxClass="small" boxText='Small' />
            <Box boxClass="medium" boxText='Medium' />
            <Box boxClass="large" boxText='Large' />
        </div>
    </div>
  )
  
  ReactDOM.render(element, document.getElementById("root"));
  