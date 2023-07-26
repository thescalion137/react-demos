import Typed from "typed.js";
import { useEffect, useRef } from "react";

import "./App.css";
import VishalProfile from "./assets/images/vishal.jpeg";
import InstagramIcon from "./assets/images/003-instagram.png";
import GithubIcon from "./assets/images/006-github.png";
import TwitterIcon from "./assets/images/005-twitter.png";
import LinkedinIcon from "./assets/images/linkedin.png";
//  ----- tech icons ----
import HtmlIcon from "./assets/images/stack/html.png";
import CssIcon from "./assets/images/stack/css.png";
import JavascriptIcon from "./assets/images/stack/js.png";
import JavaIcon from "./assets/images/stack/java.png";

import PsIcon from "./assets/images/stack/ps.png";
import AiIcon from "./assets/images/stack/ai.png";
import XdIcon from "./assets/images/stack/xd.png";
import FigmaIcon from "./assets/images/stack/figma.png";

import GitIcon from "./assets/images/stack/git.png";

import JqueryIcon from "./assets/images/stack/jquery.png";
import ReactIcon from "./assets/images/stack/react.png";

import WordIcon from "./assets/images/stack/word.png";
import ExcelIcon from "./assets/images/stack/excel.png";
import PowerPointIcon from "./assets/images/stack/pt.png";

import MacIcon from "./assets/images/stack/mac.png";
import WindowsIcon from "./assets/images/stack/windos.png";
import LinuxIcon from "./assets/images/stack/linux.png";

import BootstrapIcon from "./assets/images/stack/bootstrap.png";
import PicoIcon from "./assets/images/stack/pico.png";
import SvelteIcon from "./assets/images/stack/s.png";

import SqlIcon from "./assets/images/stack/sql.png";
import MongoIcon from "./assets/images/stack/mongo.png";

import CertificateOne from "./assets/images/stack/img1.png";

function App() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer &#129321;",
        "App Developer &#128519;",
        "Freelancer &#128578;",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="body">
      <div className="container">
        <nav>
          <ul>
            <li className="ic">
              <img src={VishalProfile} className="circle" />
              <strong className="brand">&nbsp;&nbsp; VishalCodes</strong>
            </li>
          </ul>
          <div className="openMenu">
            <i className="fa fa-bars hidden"></i>
          </div>
          <ul className="mainMenu">
            <li>
              <span className="gradient4" data-theme="dark"></span>
            </li>
            <li>
              <a href="#about" className="contrast">
                About
              </a>
            </li>
            <li>
              <a href="#tech" className="contrast">
                Tech Stack
              </a>
            </li>
            <li>
              <a href="#credentials" className="contrast">
                Credentials
              </a>
            </li>
            <li>
              <a href="#contact" className="contrast">
                Contact
              </a>
            </li>
            <div className="closeMenu">
              <i className="fa fa-times"></i>
            </div>

            <span className="icons2 hidden2">
              <a href="https://www.snapchat.com/add/andievan6">
                <i className="fab fa-snapchat"></i>
              </a>

              <a href="https://www.instagram.com/andiicodes">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://github.com/andiicodes/">
                <i className="fab fa-github "></i>
              </a>
              <a href="https://twitter.com/Andiicodes">
                <i className="fab fa-twitter"></i>
              </a>
            </span>
          </ul>
        </nav>
      </div>
      <div className="container center ">
        <p className="gradient"></p>
        <h1 className="text1 mid p shadow">
          {`Hello`} &#128075; {`,I'm`} <span className="yellow">Vishal</span>
        </h1>
      </div>
      <div className="center up">
        <h2>
          <span className="auto-type" ref={el}></span>
        </h2>
      </div>
      <div className="grid icons">
        <div className="socials ">
          <a
            href="https://www.instagram.com/vishalmakwana_23/"
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy" src={InstagramIcon} className="social" alt="" />
          </a>
          <a
            href="https://github.com/VishalMakwana23"
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy" src={GithubIcon} className="social" alt="" />
          </a>
          <a
            href="https://twitter.com/ivishalmakwana"
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy" src={TwitterIcon} className="social" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/makwana-vishal-a91843198/"
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy" src={LinkedinIcon} className="social" alt="" />
          </a>
        </div>
      </div>
      {/* --- about section --- */}
      <section id="about">
        <div className="container content">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <article>
            <div className="container">
              <div className="headings">
                <h3>About Me</h3>
                <h4>Self-Taught Sr. MEARN Stack Developer 👨🏻‍💻.</h4>
              </div>

              <blockquote>
                <span className="story"></span>
                My journey with technology began when I was just 9 years old, in
                2010. It was then that my father introduced me to the basics of
                using a computer and I quickly became fascinated with the world
                of technology. I spent countless hours exploring new software
                and reading up on the latest advancements in the field, always
                eager to learn more. As I grew older, I knew that I wanted to
                make a career out of my passion for technology. I decided to
                focus on front-end development, drawn to the creative and
                visually appealing aspects of this field. I have dedicated
                myself to learning and improving my skills, and am excited to
                see where my career takes me in the future.
                <footer>
                  <cite>- VishalCodes</cite>
                </footer>
              </blockquote>
            </div>
          </article>
        </div>
      </section>
      {/* ----------------- */}
      {/* --- tech section --- */}
      <section id="tech">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="headings">
            <div className="gradient2"></div>
            <h1>Tech Stack</h1>
            <h3>
              Front-end developer. Proficient in HTML, CSS, JavaScript, and
              various frameworks and libraries. Continuously learning and
              experimenting with new technologies. 👼
            </h3>
          </div>
          <article className="m-w">
            <div className="container">
              <div className="row">
                <div className="column">
                  <div className="headings">
                    <h1>Languages</h1>
                  </div>
                  <ul>
                    <li>
                      <img loading="lazy" src={HtmlIcon} alt="" />
                      <span className="title">HTML</span>
                    </li>
                    <li>
                      <img loading="lazy" src={CssIcon} alt="" />
                      <span className="title">CSS</span>
                    </li>
                    <li>
                      <img loading="lazy" src={JavascriptIcon} alt="" />
                      <span className="title">JavaScript</span>
                    </li>
                    <li>
                      <img loading="lazy" src={JavaIcon} alt="" />
                      <span className="title">Java</span>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <div className="headings">
                    <h1>Graphic Design</h1>
                  </div>
                  <ul>
                    <li>
                      <img loading="lazy" src={PsIcon} alt="" />
                      <span className="title">Adobe Photoshop</span>
                    </li>
                    <li>
                      <img loading="lazy" src={AiIcon} alt="" />
                      <span className="title">Adobe Illustrator</span>
                    </li>
                    <li>
                      <img loading="lazy" src={XdIcon} alt="" />
                      <span className="title">Adobe XD</span>
                    </li>
                    <li>
                      <img loading="lazy" src={FigmaIcon} alt="" />
                      <span className="title">Figma</span>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <div className="headings">
                    <h1>Version Control</h1>
                  </div>
                  <ul>
                    <li>
                      <img loading="lazy" src={GitIcon} alt="" />
                      <span className="title">Git</span>
                    </li>
                    <li>
                      <img loading="lazy" src={GithubIcon} alt="" />
                      <span className="title">Github</span>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <div className="headings">
                    <h1>Javascript UI</h1>
                  </div>
                  <ul>
                    <li>
                      <img loading="lazy" src={JqueryIcon} alt="" />
                      <span className="title">JQuery</span>
                    </li>
                    <li>
                      <img loading="lazy" src={ReactIcon} alt="" />
                      <span className="title">React</span>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <div className="headings">
                    <h1>Productivity Suite</h1>
                  </div>
                  <ul>
                    <li>
                      <img loading="lazy" src={WordIcon} alt="" />
                      <span className="title">Microsoft Word</span>
                    </li>
                    <li>
                      <img loading="lazy" src={ExcelIcon} alt="" />
                      <span className="title">Microsoft Excel</span>
                    </li>
                    <li>
                      <img loading="lazy" src={PowerPointIcon} alt="" />
                      <span className="title">Microsoft PowerPoint</span>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <div className="headings">
                    <h1>Operation Systems</h1>
                  </div>
                  <ul>
                    <li>
                      <img loading="lazy" src={MacIcon} alt="" />
                      <span className="title">MacOS</span>
                    </li>
                    <li>
                      <img loading="lazy" src={WindowsIcon} alt="" />
                      <span className="title">Windows</span>
                    </li>
                    <li>
                      <img loading="lazy" src={LinuxIcon} alt="" />
                      <span className="title">Linux</span>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <div className="headings">
                    <h1>Frameworks</h1>
                  </div>
                  <ul>
                    <li>
                      <img loading="lazy" src={BootstrapIcon} alt="" />
                      <span className="title">Bootstrap</span>
                    </li>
                    <li>
                      <img loading="lazy" src={PicoIcon} alt="" />
                      <span className="title">Pico CSS</span>
                    </li>
                    <li>
                      <img loading="lazy" src={SvelteIcon} alt="" />
                      <span className="title">svelte</span>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <div className="headings">
                    <h1>Databases</h1>
                  </div>
                  <ul>
                    <li>
                      <img loading="lazy" src={SqlIcon} alt="" />
                      <span className="title">MySql</span>
                    </li>
                    <li>
                      <img loading="lazy" src={MongoIcon} alt="" />
                      <span className="title">MongoDB</span>
                    </li>
                  </ul>
                </div>
                {/* <div className="column">
                  <div className="headings">
                    <h1>Databases</h1>
                  </div>
                  <ul>
                    <li>
                      <img loading="lazy" src={SqlIcon} alt="" />
                      <span className="title">MySql</span>
                    </li>
                    <li>
                      <img loading="lazy" src={MongoIcon} alt="" />
                      <span className="title">MongoDB</span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>

            <div className="gradient3"></div>
          </article>
        </div>
      </section>
      {/* ------------------------------ */}
      {/* ---- credentials ---- */}
      <section id="credentials">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="headings">
            <div className="gradient2"></div>
            <h1>Credentials</h1>
            <h3>
              I completed courses in front-end web development and cyber
              security, gaining valuable skills in HTML, CSS, JavaScript, and
              network security. Ready to apply my knowledge to build secure,
              user-friendly websites.👼
            </h3>
          </div>

          <div></div>

          <article style={{ paddingBottom: "0px" }}>
            <header>
              <div className="container grid">
                <h6>
                  <br /> Full-Stack Development Bootcamp by Dr. Angela Yu.{" "}
                  <br />{" "}
                  <a
                    className="link"
                    href="https://www.udemy.com/certificate/UC-690b92e7-c5a3-446e-a4ef-e7e5d55a0180/"
                  >
                    🔗 Udemy <i className="fa fa-external-link-alt"></i>
                  </a>{" "}
                </h6>
                <br />
                <img
                  loading="lazy"
                  src={CertificateOne}
                  alt=""
                  className="img-1"
                />
                <br />
              </div>
            </header>

            {/* <div className="container grid">
              <h6>
                <br /> CCNA1 Course By Cisco{" "}
                <a
                  className="link"
                  href="https://www.credly.com/badges/be2a1edb-26eb-4ff1-bf9b-5c17f1764c7d/public_url"
                >
                  <br />
                  🔗 Credly <i className="fa fa-external-link-alt"></i>
                </a>{" "}
              </h6>
              <br />
              <img
                loading="lazy"
                src="imgs/stack/img3.png"
                alt=""
                className="img-1"
              />
              <br />
            </div>

            <div className="container grid ccna2">
              <h6>
                <br /> CCNA2 Course By Cisco{" "}
                <a
                  className="link"
                  href="https://www.credly.com/badges/ed86c8c3-011e-4c6e-92ad-8eac4fc6e60d/public_url"
                >
                  <br />
                  🔗 Credly <i className="fa fa-external-link-alt"></i>
                </a>{" "}
              </h6>
              <br />
              <img
                loading="lazy"
                src="imgs/ccna2.png"
                alt=""
                className="img-1"
              />
              <br />
            </div>

            <footer>
              <div className="container grid">
                <h6>
                  <br /> Ethical Hacking & Cyber Security <br />{" "}
                  <a
                    className="link"
                    href="https://www.udemy.com/certificate/UC-073f9946-d02e-497e-8908-5091165e6263/"
                  >
                    🔗 Udemy <i className="fa fa-external-link-alt"></i>
                  </a>{" "}
                </h6>
                <br />
                <img
                  loading="lazy"
                  src="imgs/stack/img2.png"
                  alt=""
                  className="img-1"
                />
                <br />
              </div>
            </footer> */}
          </article>
          <article style={{ paddingBottom: "0px" }}>
            <header style={{ backgroundColor: "#141e26" }}>
              <div className="container grid">
                <h6>
                  <br /> Full-Stack Development Bootcamp by Dr. Angela Yu.{" "}
                  <br />{" "}
                  <a
                    className="link"
                    href="https://www.udemy.com/certificate/UC-690b92e7-c5a3-446e-a4ef-e7e5d55a0180/"
                  >
                    🔗 Udemy <i className="fa fa-external-link-alt"></i>
                  </a>{" "}
                </h6>
                <br />
                <img
                  loading="lazy"
                  src={CertificateOne}
                  alt=""
                  className="img-1"
                />
                <br />
              </div>
            </header>
          </article>

          <article style={{ paddingBottom: "0px" }}>
            <header>
              <div className="container grid">
                <h6>
                  <br /> Full-Stack Development Bootcamp by Dr. Angela Yu.{" "}
                  <br />{" "}
                  <a
                    className="link"
                    href="https://www.udemy.com/certificate/UC-690b92e7-c5a3-446e-a4ef-e7e5d55a0180/"
                  >
                    🔗 Udemy <i className="fa fa-external-link-alt"></i>
                  </a>{" "}
                </h6>
                <br />
                <img
                  loading="lazy"
                  src={CertificateOne}
                  alt=""
                  className="img-1"
                />
                <br />
              </div>
            </header>
          </article>
        </div>
      </section>
      {/* ----------------------------- */}
      {/* ----- footer ------ */}
      {/* ------------------------------ */}
      <footer className="ft">
        <article className="foot">
          <h3 className="foot-2">
            Made With ♥️ By{" "}
            <a href="#" className="f-text">
              VishalCodes
            </a>
          </h3>

          <section id="contact">
            <div className="container1">
              <div className="wid">
                <span className="req">
                  For Business Inquiries: <br />
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="25px"
                  height="25px"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <span className="email">
                  {" "}
                  Email: <a href="#" />
                  makwanavishal8306@gmail.com
                </span>
              </div>
            </div>
          </section>
        </article>
      </footer>

      {/* ------------------------------ */}
    </div>
  );
}

export default App;
