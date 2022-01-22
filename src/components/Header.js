import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import classes from './header.module.scss'

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>Navbar</h2>

        <nav className={classes.header__content__nav}>
          <ul>
            <li>
              <a href='/'>pageOne</a>
            </li>
            <li>
              <a href='/'>pageTwo</a>
            </li>
            <li>
              <a href='/'>pageThree</a>
            </li>
          </ul>
          <button>CTA</button>
        </nav>

        <div className={classes.header__content__toggle}>
          <BiMenuAltRight />
        </div>
      </div>
    </header>
  )
}

export default Header
