import Container from './container'

const classes = {
  header: 'text-h-1 font-mono text-2xl font-bold lowercase mb-4',
  list: 'list-decimal list-inside p-4',
  prize: 'text-lg text-reel-500',
  body: 'px-8',
  subheader: 'text-h-1 opacity-80 font-mono',
  list: 'list-disc list-inside',
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
        <h3 className={classes.subheader}>Help Develop Pirate Box and Win</h3>
        <p>
          In order to encourage the community development of Pirate Box, we're
          hosting a competition to see who can develop the coolest solutions for
          it. We want to see what you think the Pirate Box is capable of.
        </p>
        <br />
        <h3 className={classes.subheader}>Criteria for Judging</h3>
        <ul className={classes.list}>
          <li>Uses of Pirate Box that showcase IPFS</li>
          <li>Examples of portable apps using IPFS</li>
          <li>
            Innovative networking solutions, such as mesh nets and DNS
            alternatives
          </li>
          <li>Uses of Pirate Box that support the agora & business</li>
          <li>
            Packaging & Presentation, who has the best marketing and promotion
          </li>
          <li>Best examples of Liberty Library content or custom software</li>
        </ul>
        <br />
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
