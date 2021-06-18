import Container from './container'

const classes = {
  header: 'text-h-1 font-mono text-2xl font-bold lowercase mb-4 font-mono',
  flexbox: 'flex flex-wrap justify-center gap-20',
  service: 'p-8 text-center transition opacity-80 hover:opacity-100',
  title: 'text-h-1 opacity-60',
  img: 'h-32 m-auto my-2',
  link: 'hover:pointer',
  button: 'bg-brightyellow text-black p-1 rounded opacity-80 hover:opacity-100',
}

export default function Community() {
  return (
    <Container>
      <h2 className={classes.header}>::community</h2>
      <div className={classes.flexbox}>
        <div className={classes.service}>
          <a className={classes.link} href='https://discord.gg/rMvnyD9aDb'>
            <h3 className={classes.title}>Discord</h3>
            <img
              className={classes.img}
              src={require('../images/icons8-discord.svg')}
            />
            <button className={classes.button}>Join us on Discord</button>
          </a>
        </div>
        <div className={classes.service}>
          <a className={classes.link} href='https://t.me/PirateBoxContest'>
            <h3 className={classes.title}>Telegram</h3>
            <img
              className={classes.img}
              src={require('../images/icons8-telegram-app.svg')}
            />
            <button className={classes.button}>Join us on Telegram</button>
          </a>
        </div>
      </div>
    </Container>
  )
}
