import { useState } from 'react';

function Contact() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  function getEmailSection() {
    if (isEmailVisible) {
      return <h5>sinzunza@sdgku.edu</h5>;
    }
    else {
      return <label>Click the button below</label>;
    }
  }

  function handleClick() {
    console.log("It Works!!!!");
    setIsEmailVisible(true);
  }

  function hideEmail() {
    setIsEmailVisible(false);
  }

  return (
    <div className="contact">
      <h1>Sergio Inzunza</h1>

      {getEmailSection()}
      <br />
      <button onClick={handleClick} className='btn btn-sm btn-primary'>Show Email</button>
      <button onClick={hideEmail} className="btn btn-sm btn-danger">Hide Email</button>
    </div>
  );
}

export default Contact;

/*
  another button that calls another function
  that function sets the state variable to false
  try it!
*/