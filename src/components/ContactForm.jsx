import React from "react";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xknalpdv");

  return (
    <div className="contact-form">
      {state.succeeded ? (
        <div>
          <p>Thank you for your message!</p>
          <p>We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <label className="block text-white mb-2" htmlFor="name">
              Your Name:
            </label>
            <input
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              Email Address:
            </label>
            <input
              className="border border-gray-300 rounded-md px-3 py-2 w-full "
              type="email"
              id="email"
              name="email"
              placeholder="example@emzardesign.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="border border-gray-300 rounded-md px-3 py-2 w-full h-32 "
              id="message"
              name="message"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>

          <button
            className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
