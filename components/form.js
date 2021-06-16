import Container from './container'

const classes = {
  form: 'm-auto max-w-xs',
  header: 'text-h-1 font-mono text-2xl font-bold lowercase mb-4',
  title: '',
  input: 'text-black',
  label: 'block',
  submit: '',
}

export default function Form() {
  return (
    <Container>
      <h2
        id='submit'
        className={classes.header}
        style={{ textShadow: ' 4px 2px 4px #000000, 4px 2px 4px #000000' }}>
        Submit your entry
      </h2>
      <form className={classes.form}>
        <label className={classes.label} htmlFor='title'>
          Title:
        </label>
        <input className={classes.input} />
        <br />
        <label className={classes.label} htmlFor='name'>
          Name:
        </label>
        <input className={classes.input} />
        <br />
        <label className={classes.label} htmlFor='email'>
          Email:
        </label>
        <input className={classes.input} />
        <br />
        <label className={classes.label} htmlFor='repo'>
          Repo URL:
        </label>
        <input className={classes.input} />
        <br />
        <label className={classes.label} htmlFor='desc'>
          Description:
        </label>
        <textarea className={classes.input} />
        <br />
        <button>Submit Entry</button>
      </form>
    </Container>
  )
}
