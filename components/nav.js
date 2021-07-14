import { useState } from 'react'
import Link from 'next/link'

const classes = {
  nav: (show) =>
    `${
      show ? '' : 'msm:-translate-y-92'
    } z-20 transition duration-300 transform fixed msm:inset-x-0 sm:right-0 top-0 sm:pr-4 sm:mt-4 text-center `,
  innerNav: 'p-4 bg-opacity-90 bg-background sm:shadow-sm',
  button:
    'sm:hidden bg-opacity-80 border border-red-400 bg-background p-1 rounded-md m-1',
  item: 'py-1 sm:py-2 hover:text-h-1',
  image: 'w-40 msm:mx-auto opacity-60',
  img: 'w-10 inline-block mx-2 transition opacity-40 hover:opacity-80',
  imagebox: 'p-2 bg-background',
  brandBox:
    'bg-opacity-60 bg-background text-xl font-mono text-h-1 font-bold p-1',
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
          {/* <li className={classes.item}>
            <a href='#community'>community</a>
          </li> */}
          <li className={classes.item}>
            <Link href='#howto'>
              <a>how to</a>
            </Link>
          </li>
          <li className={classes.item}>
            <Link href='#prizes'>
              <a>prizes</a>
            </Link>
          </li>
          <li className={classes.item}>
            <Link href='#submit'>
              <a>submit entry</a>
            </Link>
          </li>
        </ul>
        <div className={classes.imagebox}>
          {' '}
          <a href='https://discord.gg/rMvnyD9aDb'>
            <img
              className={classes.img}
              src={require('../images/icons8-discord.svg')}
              alt='discord'
            />
          </a>
          <a href='https://t.me/PirateBoxContest'>
            <img
              className={classes.img}
              src={require('../images/icons8-telegram-app.svg')}
              alt='discord'
            />
          </a>
        </div>

        <br />
        <button className={classes.button} onClick={() => setShow(!show)}>
          {show ? 'close menu' : 'open menu'}
        </button>
      </nav>
    </>
  )
}
