import { FaLinkedin, FaGithub, FaReact, FaWhatsapp, FaNodeJs } from "react-icons/fa";
import { DiJavascript, DiCss3, DiHtml5 } from "react-icons/di";
import { SiGmail } from "react-icons/si";
import style from '../styles/globals.module.css';
import { useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image';
import screenfull from 'screenfull';

export default function Home() {

  var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  function typeWriter(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letra, index) => {
      setTimeout(() => element.innerHTML += letra, 75 * index);
    });
  }

  useEffect(() => {
    if(isMobile.any())
    {
      if (screenfull.isEnabled) {
        document.querySelector('#container').addEventListener('click', () => screenfull.toggle());
      }
    }
    typeWriter(document.querySelector('#work'));
    setTimeout(typeWriter(document.querySelector('#live')), 2000);
  }, []);


  return (
    <div className={style.container} id="container">
      <Head>
        <link rel="shortcut icon" href="/static/icon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#1f1f1f" />
        <title>Ítalo_Dória</title>
      </Head>
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
        <DiHtml5 size={50} color="#eb5e0b" />
        <DiCss3 size={50} color="#1687a7" />
        <DiJavascript size={50} color="#ffe227" />
      </div>
      <div className={style.image}>
        <Image alt="myFace" src="/static/perfil.jpeg" width={570} height={760} />
      </div>
      <div className={style.name}>
          <h1><span>Ítalo</span><span>Faria</span><span>Dória</span></h1>
          <p id="work">Web_developer_Jr | Jabil</p>
          <p id="live">Contagem, MG, Brasil</p>
      </div>
      <div className={style.contact}>
        <a target="_blank" href="https://github.com/VonDoria" title="VonDoria"><FaGithub size={50} color="#FFF" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/%C3%ADtalo-faria-d%C3%B3ria-51a341193/" title="Ítalo Faria Dória"><FaLinkedin size={50} color="#FFF" /></a>
        <a target="_blank" href="https://web.whatsapp.com/send?phone=5531989247157" title="(31)98924-7157"><FaWhatsapp size={50} color="#FFF" /></a>
        <a target="_blank" href="mailto:italo.faria0@gmail.com" title="italo.faria0@gmail.com"><SiGmail size={50} color="#FFF" /></a>    
      </div>
    </div>
  );
}
