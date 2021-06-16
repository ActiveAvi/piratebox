import Hero from '../components/hero'
import Description from '../components/description'
import Form from '../components/form'
import Nav from '../components/nav'
import Dates from '../components/dates'
import Prizes from '../components/prizes'

import Fade from 'react-reveal/Fade'

const classes = {
  main: 'text-primary',
}

export default function Root() {
  return (
    <main className={classes.main}>
      <Nav />
      <Hero id='hero' />
      <Fade>
        <Description id='about' />
      </Fade>
      <Fade>
        <Dates id='dates' />
      </Fade>
      <Fade>
        <Prizes id='prizes' />
      </Fade>
      <Fade>
        <Form id='submit' />
      </Fade>
    </main>
  )
}
