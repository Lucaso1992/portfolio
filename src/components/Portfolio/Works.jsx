import img1 from "../../assets/star-wars.png";
import img2 from "../../assets/we-contain.png";
import img3 from "../../assets/cosmos.png";
import img4 from "../../assets/agenda-2.png";
import img5 from "../../assets/el-redoble-2.png";

import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";

const worksData = [
  {
    key: 'haras',
    title: "EL REDOBLE HARAS",
    img: img5,
    description: "Design and development of a Horsebreeder & Stable website. Linked to an external database featuring client's products. The seamless integration with the CMS database showcases my practical approach and effective solutions.",
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
    description: "Design and development of a landing page for a container rental company in Buenos Aires, Argentina. Using React, JavaScript, Bootstrap, SASS, HTML, CSS and Figma.",
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
    description: "Dating Web App. Full Stack development created with Python, React, JavaScript, HTML, CSS. Applying knowledge of authentication (JWT). Cosmos connects people through astrology.",
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
    description: "Front-End development, connected with an external API. Allows to create a user with email and password, login and add favorite characters. Implementing access to dynamic routes and user authentication.",
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
    description: "Create, edit or delete your contacts list. Agenda app connected to an external API, allows you to save your contacts. React skills: state management, event handling and context management.",
    containerName: "agenda_container",
    web: "https://add-contacts-xi.vercel.app/",
    github: "https://github.com/Lucaso1992/add-contacts",
    backtext: "",
    technologies: [<FaReact />, <IoLogoJavascript/>, <FaBootstrap />, <FaCss3Alt />, <FaHtml5 />] 
  },
];

export default worksData;
