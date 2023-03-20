import React, { useState } from "react";
import vg from "../assets/vg - Edited.png";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), { name, email, message });
      toast.success("Message Send");
    } catch (error) {
      toast.error("Error");
      console.log(error);
    }
  };
  return (
    <div id="contact">
      <section>
        <form onSubmit={submitHandler}>
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            value={message}
            placeholder="Enter Your messsage"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
      </section>
      <aside>
        <img src={vg} alt="vector" />
      </aside>
    </div>
  );
};

export default Contact;
