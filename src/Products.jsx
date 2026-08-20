// import React from 'react'
import React, { useState } from 'react'

function Products() {
    const [a,b] = useState(false);
  return (
    <div>
        <h1 className='p'>Products</h1>
        <h2 className='p'>{(a===true) ? 'Done' : 'Wrong'}</h2>
    </div>
  )
}

export default Products