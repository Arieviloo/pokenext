import React from 'react'

export default function Nome({props}) {
  console.log("Nome -> props", props)
  return (
    <>
    <div className="header">
      {props.name}
    </div>
      <style>
        {`
        * {
          padding: 0;
          margin: 0;
          border: 0;
          box-sizing: border-box
        }
        
          .header {
            box-sizing: border-box;
            background-color: #BDFFE1;
            width: 100%;
            position: relative; 
            top: 0;
            left: 0;
            z-index: 300;
            padding: 20px 40px;
            color: #333;
          }
        `}
      </style>
      </>
  )
}
