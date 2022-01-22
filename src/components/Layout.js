import React from 'react'
import classes from './layout.module.scss'
import Header from './Header'

function Layout(props) {
  return (
    <>
      <Header />
      <div className={classes.container}>{props.children}</div>
    </>
  )
}

export default Layout
