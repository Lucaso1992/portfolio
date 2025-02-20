import img1 from "../../assets/star-wars.webp";
import img2 from "../../assets/we-contain.png";
import img3 from "../../assets/cosmos.webp";
import img4 from "../../assets/agenda-2.webp";
import img5 from "../../assets/el-redoble-2.webp";
import img6 from "../../assets/shop.webp";
import img7 from "../../assets/show.png";

import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiMysql } from "react-icons/si";


const worksData = [
  {
    key: 'social',
    title: "SHOW APP",
    img: img7,
    description: "SHOW APP is a social network where you can sign up, log in, create your profile, and share posts with images and text. You can also follow others to see their updates and engage with their content.",
    description_espanol: "SHOW APP es una red social donde puedes registrarte, iniciar sesión, crear tu perfil y compartir publicaciones con imágenes y texto. Además, puedes seguir a otras personas para ver sus actualizaciones y conectar con su contenido.",
    containerName: "show",
    web: "https://show-app-front.vercel.app/",
    github: "https://github.com/Lucaso1992/proyecto-x",
    backtext: "",
    technologies: [<FaReact />, <IoLogoJavascript/>, <FaPython />, <SiFlask />, <SiMysql />]
  },{
    key: 'ecommerce',
    title: "LUCKY SHOP",
    img: img6,
    description: "LUCKY SHOP is an e-commerce platform built with React, aimed to deliver a seamless shopping experience. Users can browse through the catalog, filter prices and categorys, and add items to their shopping cart,  managing their selections.",
    description_espanol: "LUCKY SHOP es un e-commerce que brinda una experiencia de compra fluida. Los usuarios pueden gestionar sus selecciones navegando por el catálogo, filtrando por precio y categoría y agregando productos al carrito de compras.",
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
    description: "Design and development of a Horsebreeder & Stable website. Linked to an external database and to Instagram's API, featuring client's products. The seamless integration with the CMS database showcases my practical approach and effective solutions.",
    description_espanol: "Diseño y desarrollo de un sitio web de un criadero de caballos de salto. Vinculado a una base de datos externa y a la API de Instagram, muestra los caballos disponibles del cliente. La integración con la base de datos muestra mi enfoque práctico y soluciones efectivas.",
    containerName: "haras",
    web: "https://haras-el-redoble-4qj7.vercel.app/",
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
    technologies: [<FaReact />, <IoLogoJavascript/>, <FaPython />, <SiFlask />, <SiMysql />]
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
