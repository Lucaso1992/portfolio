import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import useAppContext from "../../store/AppContext";

import curriculum from "../../assets/lucas-solari.pdf";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";


import styles from "./Contact.module.css";

const Contact = () => {
  const { store } = useAppContext();
  const targetRef = useRef < HTMLDivElement > (null);
  const [t] = useTranslation('global');

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });


  const opacityDesktop = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const opacityMobile = useTransform(scrollYProgress, [0.65, 0.75], [0, 1], {
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
        alert("Message sent correctly! thanks :)");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <motion.section id="contact" style={{ opacity }} ref={{ targetRef }} className={styles.contact_div}>
      <h2 className={styles.contact_title} data-aos="fade-up" data-aos-duration="1000"><strong>{t('contact.title')}</strong></h2>
      <div className={styles.contact_container} data-aos="fade-up" data-aos-duration="1000">
        <div className={styles.my_info}>
          <p className={styles.contact_myname}><strong>Lucas Solari</strong></p>
          <Link to={"https://api.whatsapp.com/send?phone=34617272872"} target="_blank" className={`${styles.links_div} text-decoration-none`}><div className={styles.icons_conteiner}><FaPhone className={styles.icons} /><p className={styles.icons_text}>(+34) 617 272 872</p></div></Link>
          <Link to={"mailto:solarilucas92@gmail.com"} target="_blank" className={`${styles.links_div} text-decoration-none`}><div className={styles.icons_conteiner}><MdEmail className={styles.icons} /><p className={styles.icons_text}>solarilucas92@gmail.com</p></div></Link>
          <Link to={"https://github.com/Lucaso1992"} target="_blank" className={`${styles.links_div} text-decoration-none`}><div className={styles.icons_conteiner}><FaGithub className={styles.icons} /><p className={styles.icons_text}>github.com/Lucaso1992</p></div></Link>
          <Link to={"https://www.linkedin.com/in/lucas-solari/"} target="_blank" className={`${styles.links_div} text-decoration-none`}><div className={styles.icons_conteiner}><FaLinkedin className={styles.icons} /><p className={styles.icons_text}>linkedin.com/in/lucas-solari</p></div></Link>
          <a href={curriculum} download="lucas-solari.pdf" className={`${styles.links_div} text-decoration-none`}><div className={styles.icons_conteiner}><IoMdDownload  className={styles.icons} /><p className={styles.icons_text}>{t('contact.download')}</p></div></a>
        </div>

        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input type="text" name="user_name" className={styles.input_holder} required placeholder={t('contact.name')} />
          <input type="email" name="user_email" className={styles.input_holder} required placeholder={t('contact.email')} />
          <textarea name="message" className={styles.message_holder} required placeholder={t('contact.message')} />
          <input type="submit" className={styles.send_button} value={t('contact.send')} />
        </form>
      </div>
    </motion.section>
  )
}

export default Contact;