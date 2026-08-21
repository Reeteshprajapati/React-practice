import React from 'react'
import {ThemesContext} from '../App'
import { useContext } from 'react'


const C = () => {
  const theme = useContext(ThemesContext);
  return (
    <div>Hello, {theme}!</div>
  )
}

export default C