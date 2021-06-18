const classes = {
  section: 'py-6 px-2 bg-darkbrown bg-opacity-50 text-sm',
  inner: '',
  footer: 'text-center',
  link: 'text-h-1 font-mono font-bold',
}

export default function Footer() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <p className={classes.footer}>
          Site Design by:{' '}
          <a className={classes.link} href='https://tonyrrr.dev'>
            TonyRrr
          </a>
        </p>
      </div>
    </section>
  )
}
