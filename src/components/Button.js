import React from 'react'

function Button({children,background,action}) {
  return (
    <button className={"text-white px-3 py-2 rounded shadow "+background} onClick={() => action()}>
        {children}
    </button>
  )
}

export default Button