import React from 'react'
import { ThemesContext } from '../App'

const C = () => {
    const theme = React.useContext(ThemesContext);
  return (
    <div>{theme}</div>
  )
}

export default C