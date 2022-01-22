import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import classes from './header.module.scss'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [size, setSize] = useState({ width: undefined, height: undefined })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false)
    }
  }, [size.width, menuOpen])

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>Navbar</h2>

        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ''
          }`}
        >
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
          {!menuOpen ? (
            <BiMenuAltRight onClick={() => setMenuOpen(true)} />
          ) : (
            <AiOutlineClose onClick={() => setMenuOpen(false)} />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
