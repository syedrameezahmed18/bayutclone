import React from 'react'
import { Colors } from '../globals/Colors'

const Button = (props) => {

  const styles = {
      width: props.width || '120px',
      border: props.type === "white" || props.type === "green"? `1px solid ${Colors.blueGreenColor}`:'none',
      height: props.height || '35px',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      color: props.type === "white" ? Colors.blueGreenColor: Colors.whiteColor,
      marginTop: props.marginTop || "0px",
      cursor:'pointer',
      borderRadius: props.borderRadius || '5px',
      background: props.type === "green" ? Colors.blueGreenColor:'white'
  }

  return (
    <div style={styles}>
        <p>{props.text || "Button"}</p>
    </div>
  )
}

export default Button