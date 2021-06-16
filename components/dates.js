import Container from './container'

const classes = {
  header: 'text-h-1 font-mono text-2xl font-bold lowercase mb-4',
  list: 'list-decimal list-inside p-4',
}

export default function Dates() {
  return (
    <Container>
      <h2
        id='dates'
        className={classes.header}
        style={{ textShadow: ' 4px 2px 4px #000000, 4px 2px 4px #000000' }}>
        ::Deadline
      </h2>
      <p>
        <b>August 7th</b> - the deadline for all entries. Entries must be
        submitted and available to the judges by this date. <br />
        <br />
        over $2500 in prizes to be awarded to the winners!
      </p>
    </Container>
  )
}
