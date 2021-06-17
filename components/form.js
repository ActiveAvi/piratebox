import Container from './container'

const classes = {
  form: 'px-8',
  header: 'text-h-1 font-mono text-2xl font-bold lowercase mb-4',
  title: '',
  input: 'text-black',
  label: 'block',
  submit: '',
}

let mailchimpEmbed = `<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#000; clear:left; font:14px Helvetica,Arial,sans-serif; }
  input{color:black;}
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://piratebox.us6.list-manage.com/subscribe/post?u=91ab7db2fde308a871367d0d6&amp;id=8cec8cc606" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-FNAME">Name  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-MMERGE7">Title  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="MMERGE7" class="required" id="mce-MMERGE7">
</div>
<div class="mc-field-group">
	<label for="mce-MMERGE8">Description  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="MMERGE8" class="required" id="mce-MMERGE8">
</div>
<div class="mc-field-group">
	<label for="mce-VIDEO">Video url  <span class="asterisk">*</span>
</label>
	<input type="url" value="" name="VIDEO" class="required url" id="mce-VIDEO">
</div>
<div class="mc-field-group">
	<label for="mce-MMERGE9">Link to Source Code  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="MMERGE9" class="required" id="mce-MMERGE9">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_91ab7db2fde308a871367d0d6_8cec8cc606" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->`

export default function Form() {
  return (
    <Container>
      <h2
        id='submit'
        className={classes.header}
        style={{ textShadow: ' 4px 2px 4px #000000, 4px 2px 4px #000000' }}>
        ::Submit your entry
      </h2>
      <div dangerouslySetInnerHTML={{ __html: mailchimpEmbed }}></div>
    </Container>
  )
}
