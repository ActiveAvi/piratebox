import Container from './container'

const classes = {
  header: 'text-h-1 font-mono text-2xl font-bold lowercase mb-4',
  body: '',
  subheader: 'pb-2 opacity-60 uppercase text-sm text-h-1',
}

export default function Description() {
  return (
    <Container>
      <h2
        id='about'
        className={classes.header}
        style={{ textShadow: ' 4px 2px 4px #000000, 4px 2px 4px #000000' }}>
        ::piratebox
      </h2>
      <h3 className={classes.subheader}>out of the box ipfs solution</h3>
      <p>
        PirateBox is a custom built computer loaded with software to enable the
        owner to easily store and access data on IPFS, coupled with open source
        tools to enhance user experience.
      </p>
    </Container>
  )
}