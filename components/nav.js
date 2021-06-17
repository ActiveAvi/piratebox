import { useState } from 'react'
import Link from 'next/link'

const classes = {
  nav: (show) =>
    `${
      show ? '' : 'msm:-translate-y-92'
    } z-20 transition duration-300 transform fixed msm:inset-x-0 sm:right-0 top-0 sm:pr-4 sm:mt-4 text-center `,
  innerNav: 'p-4 bg-opacity-90 bg-background sm:shadow-sm',
  button: 'sm:hidden bg-opacity-60 bg-background p-1 rounded-md m-1',
  item: 'py-2 hover:text-h-1',
  image: 'sm:w-32 opacity-60',
  brand: '',
  brandBox: 'bg-opacity-60 bg-background text-xl font-mono text-h-1 font-bold',
}

export default function Nav() {
  const [show, setShow] = useState(false)

  return (
    <>
      <nav className={classes.nav(show)}>
        <div className={classes.brandBox}>Pirate Box</div>

        <img
          className={classes.image}
          src={require('../images/pirateFlag.png')}
        />
        <ul className={classes.innerNav}>
          <li className={classes.item}>
            <Link href='#about' scroll={false}>
              <a>about</a>
            </Link>
          </li>
          <li className={classes.item}>
            <Link href='#contest'>
              <a>contest</a>
            </Link>
          </li>
          <li className={classes.item}>
            <Link href='#prizes'>
              <a>prizes</a>
            </Link>
          </li>
          <li className={classes.item}>
            <Link href='#howto'>
              <a>how to</a>
            </Link>
          </li>
          <li className={classes.item}>
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
