import React, { useEffect, useState } from 'react'
import rgbToHex from '../utils';

export const Item = ({rgb, weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(",")
    const hex = rgbToHex(...rgb);
    
    const hexValue = `#${hexColor}`


    useEffect(() => {
      const timeout = setTimeout(() => {
          setAlert(false)
      }, 3000)
      return () => clearTimeout(timeout)
    }, [])
    return (
        <article className={`color ${index > 10 && "color-light"}`}
        style={{background: `rgb(${bcg})`}} onClick={() => {setAlert(true)
        navigator.clipboard.writeText(hexValue)}}>
            <p className='percentage-value'>{weight}</p>
            <p className='color-value'>{hexValue}</p>
            {alert && <p className='alert'>Copied to clipboard</p>}
        </article>
    )
}
