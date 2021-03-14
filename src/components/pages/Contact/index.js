import { useState } from "react";
import { validateEmail } from '../../../utils/helpers';

const Contact = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
      }

      setFormState('');
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
        console.log(e.target.name);
        const validEmail = validateEmail(e.target.value);
        if(!validEmail) {
            setErrorMessage('InvalidEmail')
        } else {
            setErrorMessage('')
        }
    } else {
        if(!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required`)
        } else {
            setErrorMessage('')
        }
    }
  }

  return (
    <div>
      <h2 className="page-title">Contact</h2>
      <form onSubmit={onSubmit}>
        <div className="input-control">
          <label>Name: </label>
          <input
            type="text"
            placeholder="Your Name"
            defaultValue={name}
            name='name'
            onBlur={handleChange}
          ></input>
        </div>
        <div className="input-control">
          <label>Email: </label>
          <input
            type="text"
            placeholder="Your Email"
            defaultValue={email}
            name='email'
            onBlur={handleChange}
          ></input>
        </div>
        <div className="input-control">
          <label>Message: </label>
          <textarea
            type="text-box"
            defaultValue={message}
            onBlur={handleChange}
          ></textarea>
        </div>
        <input type="submit" value="Submit" className="btn"></input>
        {errorMessage && <p className="form-error">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
