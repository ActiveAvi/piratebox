const classes = {
  section: 'px-4',
  descriptionBox: ' max-w-2xl m-auto my-20 py-10 sm:px-10',
}

export default function Container(props) {
  return (
    <section className={classes.section}>
      <div className={classes.descriptionBox}>{props.children}</div>
    </section>
  )
}
