const classes = {
  section: 'px-4',
  descriptionBox:
    'shadow-lg border-t-8 border-yellow-700 rounded-lg max-w-2xl m-auto my-32 bg-gradient-to-b from-darkbrown to-background py-10 px-10',
}

export default function Container(props) {
  return (
    <section className={classes.section}>
      <div className={classes.descriptionBox}>{props.children}</div>
    </section>
  )
}
