const classes = {
  section: 'pt-36 pb-32 bg-graybrown-900 text-center shadow-innerBrown',
  grid: 'grid grid-cols-1 sm:grid-cols-3 justify-items-center',
  header: 'w-max m-auto text-h-1 font-mono text-3xl font-bold lowercase mb-14',
  top: 'sm:col-span-3',
  item: 'py-20 w-64',
  title: 'text-lg text-h-1 font-bold py-1 uppercase',
  body: '',
  img: ' shadow-lg my-4 transition opacity-60 hover:opacity-100',
}

export default function Prizes() {
  return (
    <section className={classes.section}>
      <h2
        className={classes.header}
        style={{ textShadow: ' 4px 2px 4px #000000, 4px 2px 4px #000000' }}>
        ::Prizes{' '}
      </h2>
      <div className={classes.grid}>
        <item
          className={classes.item + ' ' + classes.top}
          style={{ textShadow: ' 4px 2px 4px #000000, 4px 2px 4px #000000' }}>
          <img
            className={classes.img}
            src={require('../images/pi-top.jpg')}
            alt='pi-top battery powered, 1tb Pirate Box'
          />
          <h3 className={classes.title}>Top Prize</h3>
          <p className={classes.body}>
            Pi-top Battery Powered, 1TB sd Pirate Box - value $999
          </p>
        </item>
        <item className={classes.item}>
          <h3
            className={classes.title}
            style={{ textShadow: ' 4px 2px 4px #000000, 4px 2px 4px #000000' }}>
            1st runner up
          </h3>
          <p className={classes.body}>
            Argon ONE Pirate Box with 1TB M.2 SSD - value $799
          </p>
        </item>
        <item className={classes.item}>
          <h3
            className={classes.title}
            style={{ textShadow: ' 4px 2px 4px #000000, 4px 2px 4px #000000' }}>
            2nd runner up
          </h3>
          <p className={classes.body}>
            Passively Cooled, Aluminum Pirate Box - value $499
          </p>
        </item>
        <item className={classes.item}>
          <h3
            className={classes.title}
            style={{ textShadow: ' 4px 2px 4px #000000, 4px 2px 4px #000000' }}>
            3rd runner up
          </h3>
          <p className={classes.body}>
            Labist Pirate Box with dual LED fans - value $199
          </p>
        </item>
      </div>
    </section>
  )
}
