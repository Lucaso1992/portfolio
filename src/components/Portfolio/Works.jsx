import img1 from "../../assets/star-wars.png";
import img2 from "../../assets/we-contain.png";
import img3 from "../../assets/cosmos.png";
import img4 from "../../assets/agenda.png";

import { FaBootstrap } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";

const worksData = [
  {
    key: 'wecontain',
    img: img2,
    description: "Design and development of a corporate website for a container rental company.",
    containerName: "wecontain_container",
    link: "https://www.wecontain.com.ar/",
    technologies: [<FaReact />, <IoLogoJavascript/>, <FaBootstrap />, <FaCss3Alt />, <FaHtml5 />]
  },
  {
    key: 'cosmos',
    img: img3,
    description: "FrontEnd Development of a Dating Web App connecting people through astrology.",
    containerName: "cosmos_container",
    link: "https://cosmos-app-1234.onrender.com/",
    technologies: [<FaReact />, <IoLogoJavascript/>, <FaBootstrap />, <FaCss3Alt />, <FaHtml5 />]
  },
  {
    key: 'starwars',
    img: img1,
    description: "FrontEnd development, connected with external API. Allows to Login and add favorite characters.",
    containerName: "starwars_container",
    link: "https://star-wars-reloaded.vercel.app/",
    technologies: [<FaReact />, <IoLogoJavascript/>, <FaBootstrap />, <FaCss3Alt />, <FaHtml5 />]
  },
  {
    key: 'agenda',
    img: img4,
    description: "Agenda app connected to an external API. Create, edit or delete your contacts list.",
    containerName: "agenda_container",
    link: "https://add-contacts-xi.vercel.app/",
    technologies: [<FaReact />, <IoLogoJavascript/>, <FaBootstrap />, <FaCss3Alt />, <FaHtml5 />] 
  },
];

export default worksData;
