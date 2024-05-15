import img1 from "../../assets/star-wars.png";
import img2 from "../../assets/we-contain.png";
import img3 from "../../assets/cosmos.png";
import img4 from "../../assets/agenda-2.png";
import img5 from "../../assets/el-redoble-2.png";
import img6 from "../../assets/shop.png";

import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";


const worksData = [
  {
    key: 'ecommerce',
    title: "LUCKY SHOP",
    img: img6,
    description: "LUCKY SHOP is an e-commerce platform built with React, aimed to deliver a seamless shopping experience. Users can browse through the catalog, add items to their shopping cart, and manage their selections.",
    description_espanol: "LUCKY SHOP es un e-commerce construido con React, con el objetivo de brindar una experiencia de compra fluida. Los usuarios pueden navegar por el catálogo, agregar productos al carrito de compras y gestionar sus selecciones.",
    containerName: "shop",
    web: "https://e-commerce-3a53.vercel.app/",
    github: "https://github.com/Lucaso1992/e-commerce",
    backtext: "",
    technologies: [<FaReact />, <IoLogoJavascript/>, <FaBootstrap />, <FaCss3Alt />, <FaHtml5 />] 
  },
  {
    key: 'haras',
    title: "EL REDOBLE HARAS",
    img: img5,
    description: "Design and development of a Horsebreeder & Stable website. Linked to an external database featuring client's products. The seamless integration with the CMS database showcases my practical approach and effective solutions.",
    description_espanol: "Diseño y desarrollo de un sitio web de un criadero de caballos de salto. Vinculado a una API externa, muestra los caballos disponibles del cliente. La integración con la base de datos muestra mi enfoque práctico y soluciones efectivas.",
    containerName: "haras",
    web: "https://www.haraselredoble.com/",
    github: "https://github.com/Lucaso1992/haras-el-redoble",
    backtext: "",
    technologies: [<FaReact />, <IoLogoJavascript/>, <FaBootstrap />, <FaCss3Alt />, <FaHtml5 />] 
  },
  {
    key: 'wecontain',
    title: "WE CONTAIN",
    img: img2,
    description: "Design and development of a landing page for a container rental company in Buenos Aires, Argentina. Focused on showcasing the company's activities and how it operates in a practical and effective manner.",
    description_espanol: "Diseño y desarrollo de una landing page para una empresa de alquiler de contenedores en Buenos Aires, Argentina. Enfocada en mostrar de manera práctica y efectiva a que se dedica la empresa y como funciona.",
    containerName: "wecontain_container",
    web: "https://www.wecontain.com.ar/",
    github: "https://github.com/Lucaso1992/we-contain",
    backtext: "",
    technologies: [<FaReact />, <IoLogoJavascript/>, <FaBootstrap />, <FaCss3Alt />, <FaHtml5 />]
  },
  {
    key: 'cosmos',
    title: "COSMOS APP",
    img: img3,
    description: "Dating Web App: Full Stack Development with Authentication (JWT). Cosmos is a social media web app that connects people through astrology, enabling them create their profile, connect with other users, chat and arrange dates",
    description_espanol: "Aplicación web de citas: Desarrollo Full Stack con autenticación (JWT). Cosmos es una aplicación web de redes sociales que conecta a las personas a través de la astrología, permitiéndoles crear su perfil, conectarse con otros usuarios, chatear y concertar citas.",
    containerName: "cosmos_container",
    web: "https://cosmos-app-1234.onrender.com/",
    github: "https://github.com/Lucaso1992/cosmos-date-app",
    backtext: "",
    technologies: [<FaReact />, <IoLogoJavascript/>, <FaBootstrap />, <FaCss3Alt />, <FaHtml5 />]
  },
  {
    key: 'starwars',
    title: "STAR WARS BLOG",
    img: img1,
    description: "Front-End development, connected with external an API. Allows to register with your email and password, login and add favorite characters. Access to dynamic routes and user authentication with JSON Web Tokens.",
    description_espanol: "Desarrollo de Front-End, conectado con una API externa. Permite registrarse con tu correo electrónico y contraseña, iniciar sesión y agregar personajes favoritos. Acceso a rutas dinámicas y autenticación de usuario con Tokens Web JSON.",
    containerName: "starwars_container",
    web: "https://star-wars-reloaded.vercel.app/",
    github: "https://github.com/Lucaso1992/star-wars-reloaded",
    backtext: "",
    technologies: [<FaReact />, <IoLogoJavascript/>, <FaBootstrap />, <FaCss3Alt />, <FaHtml5 />]
  },
  {
    key: 'agenda',
    title: "CONTACTS AGENDA",
    img: img4,
    description: "Create, edit or delete your contacts list. Agenda app, connected to an external API, allows you to save your contacts. React skills: state management, event handling and context management.",
    description_espanol: "Crea, edita o elimina tu lista de contactos. Esta aplicación web, conectada a una API externa, permite guardar tus contactos. Habilidades en React: gestión de estado, manejo de eventos y gestión de contexto.",
    containerName: "agenda_container",
    web: "https://add-contacts-xi.vercel.app/",
    github: "https://github.com/Lucaso1992/add-contacts",
    backtext: "",
    technologies: [<FaReact />, <IoLogoJavascript/>, <FaBootstrap />, <FaCss3Alt />, <FaHtml5 />] 
  },
];

export default worksData;
