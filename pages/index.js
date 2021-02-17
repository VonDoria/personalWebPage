import { FaLinkedin, FaGithub, FaReact, FaHtml5, FaCss3Alt, FaWhatsapp, FaNodeJs } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiGmail } from "react-icons/si";
import style from '../styles/globals.module.css';
import { useEffect } from "react";

export default function Home() {

  function typeWriter(element) {
    console.log(element);
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letra, index) => {
      setTimeout(() => element.innerHTML += letra, 75 * index);
    });
  }

  useEffect(() => {
    typeWriter(document.querySelector('#work'));
    setTimeout(typeWriter(document.querySelector('#live')), 2000);
  }, []);


  return (
    <div className={style.container}>
      <style jsx global>{`
            body {
              box-sizing: border-box;
              padding: 0;
              margin: 0;
              background-color: #1f1f1f;
            }
      `}</style>
      <div className={style.skills}>
        <FaReact size={50} color="#1687a7" />
        <FaNodeJs size={50} color="#54e346" />
        <FaHtml5 size={50} color="#eb5e0b" />
        <FaCss3Alt size={50} color="#1687a7" />
        <DiJavascript size={50} color="#ffe227" />
      </div>
      <div className={style.image}>
          <img src=""></img>
      </div>
      <div className={style.name}>
          <h1>Ítalo Faria Dória</h1>
          <p id="work">Web_developer_Jr | Jabil</p>
          <p id="live">Contagem, MG, Brasil</p>
      </div>
      <div className={style.contact}>
        <a href=""><FaGithub size={50} color="#FFF" /></a>
        <a href=""><FaLinkedin size={50} color="#FFF" /></a>
        <a href=""><FaWhatsapp size={50} color="#FFF" /></a>
        <a href=""><SiGmail size={50} color="#FFF" /></a>    
      </div>
    </div>
  )
}
