import { useState } from 'react'
import Link from 'next/link'

const classes = {
  nav: (show) =>
    `${
      show ? '' : 'msm:-translate-y-40'
    } z-20 transition duration-300 transform fixed msm:inset-x-0 sm:right-0 top-0 sm:pr-4 sm:mt-4 text-center `,
  innerNav: 'p-4 bg-opacity-60 bg-darkbrown sm:rounded-md sm:shadow-md',
  button: 'sm:hidden bg-opacity-60 bg-darkbrown p-1 rounded-md m-1',
}

export default function Nav() {
  const [show, setShow] = useState(false)

  return (
    <>
      <nav className={classes.nav(show)}>
        <ul className={classes.innerNav}>
          <li>
            <Link href='/#about' scroll={false}>
              <a>about</a>
            </Link>
          </li>
          <li>
            <Link href='/#aboutcontest'>
              <a>contest</a>
            </Link>
          </li>
          <li>
            <Link href='/#dates'>
              <a>dates & prizes</a>
            </Link>
          </li>
          <li>
            <Link href='/#howto'>
              <a>how to enter</a>
            </Link>
          </li>
          <li>
            <Link href='#submit'>
              <a>submit entry</a>
            </Link>
          </li>
        </ul>
        <button className={classes.button} onClick={() => setShow(!show)}>
          {show ? 'close menu' : 'open menu'}
        </button>
      </nav>
    </>
  )
}
