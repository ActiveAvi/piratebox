import Container from './container'

const classes = {
  header: 'text-h-1 font-mono text-2xl font-bold lowercase mb-4',
  list: 'list-decimal list-inside p-4',
  prize: 'text-lg text-reel-500',
  body: 'px-8',
}

export default function Contest() {
  return (
    <Container>
      <h2
        id='dates'
        className={classes.header}
        style={{ textShadow: ' 4px 2px 4px #000000, 4px 2px 4px #000000' }}>
        ::contest
      </h2>
      <div className={classes.body}>
        <h3 className={classes.subheader}>Help Develop Pirate Box</h3>

        <h3 className={classes.subheader}>Dates:</h3>
        <p>
          <b>August 1th</b> - deadline for all entries. Entries must be
          submitted and available to the judges by this date. <br />
          <b>August 7th</b> - judging begins. Want to join us in person? Check
          out the Jackalope Freedom festival that we'll be at!
          <br />
          <br />
          <h3 className={classes.prize}>
            Over $2500 in prizes to be awarded to the winners!
          </h3>
        </p>
      </div>
    </Container>
  )
}
