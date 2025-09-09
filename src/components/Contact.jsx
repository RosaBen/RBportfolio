export default function Contact () {

  return (
    <>
      <section>
        <p>Would you like to contact me to discuss about my projects? Please, click on "Leave a message" and fill out the form, I will contact you as soon as possible</p>
        <button>Leave a Message</button>
        <form action="">
          <label htmlFor="fullname">Your name</label>
          <input type="text" name="fullname" />
          <label htmlFor="title">Object</label>
          <input type="text" name="title" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <fieldset>
            <legend>
              Your message
            </legend>
            <textarea name="content" id="content"></textarea>
          </fieldset>
        </form>

      </section>
    </>
  );
}