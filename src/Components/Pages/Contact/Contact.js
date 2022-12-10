
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_irzzbre', 'template_5naaa9f', form.current, 'xUe_pW7qSwL3DV3yH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div id="contact" className="lg:px-14 px-4 mb-10">
      <h2
        className="lg:text-5xl text-3xl
        uppercase text-[#818AA9] font-bold text-center my-14 "
      >
        Contact
        <hr className="w-3/12  mx-auto mb-4" />
      </h2>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center mx-auto py-3 gap-5 border  w-1/2">
      <input  name="user_email" type="email" placeholder="your Email" required className="input input-bordered w-full max-w-xs text-black" />
      <input  name="user_email" type="text" placeholder=" your Name" className="input input-bordered w-full max-w-xs text-black" />
      <textarea name="message" className="textarea textarea-bordered w-80 text-black" placeholder="Message"></textarea>
       <button type="submit" value="Send" className="bgColor btn btn-outline mb-4">Submit</button>
      </form>

    </div>
  );
};

export default Contact;
