export default function Form ({ ref }) {
  return (
    <fieldset className="form-container" ref={ ref }>
      <legend className="legend-container">Please Fill out form</legend>
      <form action="" >
        <div className="form-infos">
          <img src="" alt="" className="column-one" />
          <div className="column-two">

            <div className="labels">
              <label htmlFor="fullname">Your name</label>
              <label htmlFor="title">Object</label>
              <label htmlFor="email">Email</label>
            </div>
            <div className="inputs">

              <input type="text" name="fullname" />
              <input type="text" name="title" />
              <input type="email" name="email" id="email" />
            </div>
          </div>
          <fieldset className="textarea">
            <legend>
              Your message
            </legend>
            <textarea name="content" id="content"></textarea>
          </fieldset>
        </div>
        <button type="submit">Send</button>
      </form>
    </fieldset>
  );
}