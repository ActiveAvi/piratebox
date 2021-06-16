const classes = {
  section:
    ' text-sm text-white grid sm:grid-cols-2 justify-center content-center justify-items-center py-20 msm:pt-40 h-screen',
  heroBox:
    'msm:max-w-sm sm:max-w-xl px-4 sm:w-96 justify-self-start p-4 mt-20 sm:mt-40 sm:ml-4',
  heroImg: 'bg-center bg-auto bg-no-repeat sm:w-96 lg:w-32r msm:w-80 max-w-lg ',
  header: 'text-2xl font-mono text-h-1 font-bold',
  description: 'text-lg',
  button: 'text-lg',
  imgBox: 'w-min justify-self-end p-4',
}

export default function Hero() {
  return (
    <section className={classes.section}>
      <div className={classes.imgBox}>
        <img
          className={classes.heroImg}
          src={require('../images/PIRATES.png')}
        />
      </div>

      <div className={classes.heroBox}>
        <h1
          className={classes.header}
          style={{ textShadow: ' 4px 2px 4px #000000, 4px 2px 4px #000000' }}>
          PirateBox Dev Contest
        </h1>
        <p className={classes.description}>
          Want to contribute to a project to protect Creative Content from
          censorship, while simultaneously lowering storage costs and having
          performance scale with traffic? You can help by creating custom
          software to run on the PirateBox.
        </p>
        <a className={classes.submitLink}>Learn More</a>
      </div>
    </section>
  )
}
