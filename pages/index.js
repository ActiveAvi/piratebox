import Hero from '../components/hero'
import Description from '../components/description'
import Form from '../components/form'
import Nav from '../components/nav'
import Contest from '../components/contest'
import Prizes from '../components/prizes'
import HowTo from '../components/howto'
import Subscribe from '../components/subscribe'
import Community from '../components/community'

import Fade from 'react-reveal/Fade'
import Footer from '../components/footer'

const classes = {
  main: 'text-primary',
}

export default function Root() {
  return (
    <main className={classes.main}>
      <Nav />
      <Hero />
      <div id='about'>
        <Fade>
          <Description />
        </Fade>
      </div>

      <div id='contest'>
        <Fade>
          <Contest />
        </Fade>
      </div>

      <div id='community'>
        <Fade>
          <Community />
        </Fade>
      </div>

      <div id='howto'>
        <Fade>
          <HowTo />
        </Fade>
      </div>

      <div id='prizes'>
        <Prizes />
      </div>

      <div id='submit'>
        <Fade>
          <Form />
        </Fade>
      </div>

      <div id='subscribe'>
        <Fade>
          <Subscribe />
        </Fade>
      </div>

      <Footer />
    </main>
  )
}
