import Container from './container'

const classes = {
  section: 'p-4',
  header: 'text-h-1 font-mono text-2xl font-bold lowercase mb-4',
  subheader: 'px-4 py-1',
  inner: 'px-3',
  container: 'max-w-2xl m-auto my-20 py-10 sm:px-10',
}

const mailchimpEmbed = `<link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">

<div id="mc_embed_signup">
<form action="https://piratebox.us6.list-manage.com/subscribe/post?u=91ab7db2fde308a871367d0d6&amp;id=8cec8cc606" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_91ab7db2fde308a871367d0d6_8cec8cc606" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>`

export default function Subcribe() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.header}>::subscribe</h2>
        <div className={classes.inner}>
          <h3 className={classes.subheader}>
            Subcribe to get early bird deals on Pirate Box
          </h3>
          <div dangerouslySetInnerHTML={{ __html: mailchimpEmbed }}></div>
        </div>
      </div>
    </section>
  )
}
