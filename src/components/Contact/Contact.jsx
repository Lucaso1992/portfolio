import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";

import useAppContext from "../../store/AppContext";

import styles from "./Contact.module.css";

const Contact = () => {
  const { store } = useAppContext();
  const targetRef = useRef < HTMLDivElement > (null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });


  const opacityDesktop = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const opacityMobile = useTransform(scrollYProgress, [0.6, 0.75], [0, 1], {
    clamp: false,
  });

  const opacity = store.isSmallScreen ? opacityMobile : opacityDesktop;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_svabuxs', 'template_mdpt49s', form.current, 'pY_4-aRSCLLG8DX0Z')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        alert("Message sent! ;)");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <motion.section id="contact" style={{ opacity }} ref={{ targetRef }} className={styles.contact_div}>
      <h2 className={styles.contact_title}> <strong>Contact</strong></h2>
      <div className={styles.contact_container}>
        <div className={styles.my_info}>
          <p>Lucas Solari</p>
          <p> 617 2728 72</p>
          <p>solarilucas92@gmail.com</p>
        </div>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        {/* <label>Name</label> */}
        <input type="text" name="user_name" required placeholder="Name"/>
        {/* <label>Email</label> */}
        <input type="email" name="user_email" required placeholder="Email"/>
        {/* <label>Message</label> */}
        <textarea name="message" required placeholder="Message"/>
        <input type="submit" value="Send" />
      </form>
      </div>
    </motion.section>
  )
}

export default Contact;