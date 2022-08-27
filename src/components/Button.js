import React from 'react'
import { Colors } from '../globals/Colors'

const Button = (props) => {

  const styles = {
      width: props.width || '120px',
      border: props.type === "white" ? `1px solid ${Colors.greenColor}`:'none',
      height: props.height || '35px',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      color: props.type === "white" ? Colors.greenColor: Colors.whiteColor

  }

  return (
    <div styles={styles}>
        <p>{props.text || "Button"}</p>
    </div>
  )
}

export default Button