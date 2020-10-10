/* eslint-disable no-unreachable */
import React, { Component } from "react";
import { Container, Header, Nav, LogoWall, StartSection } from "./App_style.js";
import InlineSVG from "inline-svg-react";
import {
  iconSearch,
  iconLang,
  heroLogo,
  cardArrow,
  cardArrow2,
} from "./assets/svg";
import "antd/dist/antd.css";
import { gsap, TweenMax } from "gsap";
import { SplitText } from "./SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Parallax from "parallax-js";
import logo_s from "./assets/logo-s.svg";
import hero_0 from "./assets/hero_pic/0.png";
import hero_1 from "./assets/hero_pic/1.png";
import hero_2 from "./assets/hero_pic/2.png";
import hero_3 from "./assets/hero_pic/3.png";
import hero_4 from "./assets/hero_pic/4.png";
import hero_5 from "./assets/hero_pic/5.png";
import logo_1 from "./assets/logos/1.png";
import logo_2 from "./assets/logos/2.png";
import logo_3 from "./assets/logos/3.png";
import logo_4 from "./assets/logos/4.png";
import logo_5 from "./assets/logos/5.png";
import logo_6 from "./assets/logos/6.png";

gsap.registerPlugin(ScrollTrigger);

const data_nav = ["设计", "组件", "主题", "资源", "团队"];
const data_logos = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6];
const sectionTitles = [
  ["设计与开发", "开始使用 Arco Design"],
  ["设计与开发", "开始使用 Arco Design"],
];
const data_start = [
  {
    title: "组件系统",
    des:
      "Arco Design 包含了众多精心设计的组件，覆盖主流前端框架，让各路开发者都能得心应手。",
    btn: ["快速上手", "React.js", "Flutter Web", "Vue.js"],
  },
  {
    title: "完备的生态",
    des:
      "包含设计资源、图标库等在内的完善生态，让极致体验触及产品中的每一处细节。",
    btn: "了解更多",
  },
  {
    title: "设计指南",
    des:
      "了解 Arco Design 的设计思想以及我们如何将其应用于整个设计系统，这里有包括全局色、文字、图标和布局的指南。",
    btn: "了解更多",
  },
  {
    title: "社区与贡献",
    des: "Arco Design System 即将开源，如果你有任何意见请随时与我们联系。",
    btn: "了解更多",
  },
];

class App extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <div className="nav-wrap">
            <div className="left">
              <img src={logo_s} alt="" className="logo-s" />
              {data_nav.map((item, index) => {
                return (
                  <a href="/" className="navItem">
                    {item}
                  </a>
                );
              })}
            </div>
            <div className="right">
              <a href="/" className="icon">
                <InlineSVG icon={iconSearch} />
              </a>
              <a href="/" className="icon">
                <InlineSVG icon={iconLang} />
              </a>
              <a href="/" className="login btn-white">
                登录
              </a>
            </div>
          </div>
        </Nav>
        <Header>
          <section className="left parallax-1">
            <picture id="scene">
              <img
                data-depth="0.2"
                src={hero_1}
                alt="hero_1"
                className="hero"
              />
              <img
                data-depth="0.1"
                src={hero_2}
                alt="hero_2"
                className="hero"
              />
              <img
                data-depth="0.2"
                src={hero_3}
                alt="hero_3"
                className="hero"
              />
              <img
                data-depth="0.1"
                src={hero_4}
                alt="hero_4"
                className="hero"
              />
              <img
                data-depth="0.1"
                src={hero_5}
                alt="hero_5"
                className="hero"
              />
              <img
                data-depth="0.04"
                src={hero_0}
                alt="hero_0"
                className="hero"
              />
            </picture>
          </section>
          <section className="right parallax-2">
            <InlineSVG icon={heroLogo} className="hero-logo" />
            <h1 id="slogan">
              <strong>企业级</strong>设计系统，
              <br />让<strong>设计者</strong>和<strong>开发者</strong>更专注
              <br />
              实现极致的用户体验。
            </h1>
            <div className="buttons">
              <a href="/">开始使用</a>
              <a href="/" className="btn-white">
                设计语言
              </a>
            </div>
          </section>
        </Header>
        <LogoWall className="logo-wall">
          <h3>使用 Arco Design System 构建</h3>
          <div className="logos-wrap">
            {data_logos.map((item) => {
              return (
                <img src={item} className="logo-wall-item" alt="logo-wall" />
              );
            })}
          </div>
        </LogoWall>
        <StartSection>
          <span className="sectionEye">{sectionTitles[0][0]}</span>
          <h2 className="sectionTitle">{sectionTitles[0][1]}</h2>
          <div className="card-wrap">
            {data_start.map((item, index) => {
              if (index === 0) {
                return (
                  <div className="card">
                    <div className="left">
                      <h4>{item.title}</h4>
                      <p>{item.des}</p>
                      <div className="links">
                        {item.btn.map((link) => {
                          return (
                            <a href="/" className="link">
                              <InlineSVG icon={cardArrow} />
                              {link} <InlineSVG icon={cardArrow} />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div className="card">
                  <div className="left">
                    <h4>{item.title}</h4>
                    <p>{item.des}</p>
                    <a href="/" className="link">
                      {item.btn} <InlineSVG icon={cardArrow2} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </StartSection>
      </Container>
    );
  }

  componentDidMount() {
    const mySplitText = new SplitText("#slogan", { type: "chars" }); //{type:"chars,words,lines"}打散成字、词、行
    const chars = mySplitText.chars;
    const heroBtns = document.querySelectorAll(".buttons");
    const heroLogo = document.querySelectorAll(".hero-logo");
    const heroImgs = document.querySelectorAll(".hero");

    //------- HERO --------//

    TweenMax.staggerFrom(
      [heroLogo, chars, heroBtns],
      0.5,
      {
        opacity: 0,
        y: 80,
        delay: 1.5,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      0.02
    );

    TweenMax.staggerFrom(
      heroImgs,
      1,
      {
        opacity: 0,
        y: 250,
        delay: 0.8,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      0.04
    );

    const scene = document.getElementById("scene");
    setTimeout(() => {
      new Parallax(scene);
    }, 2000);

    gsap.to(".parallax-1", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: "header",
        start: "top", // the default values
        // end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".parallax-2", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top", // the default values
        // end: "bottom top",
        scrub: true,
      },
    });

  //   var html = document.documentElement;
  //   var body = document.body;

  //   var scroller = {
  //     target: document.querySelector("body"),
  //     ease: 0.04, // <= scroll speed
  //     endY: 0,
  //     y: 0,
  //     resizeRequest: 1,
  //     scrollRequest: 0,
  //   };

  //   var requestId = null;

  //   gsap.set(scroller.target, {
  //     rotation: 0.01,
  //     force3D: true,
  //   });

  //   window.addEventListener("load", onLoad);

  //   function onLoad() {
  //     updateScroller();
  //     window.focus();
  //     window.addEventListener("resize", onResize);
  //     document.addEventListener("scroll", onScroll);
  //   }

  //   function updateScroller() {
  //     var resized = scroller.resizeRequest > 0;

  //     if (resized) {
  //       var height = scroller.target.clientHeight;
  //       body.style.height = height + "px";
  //       scroller.resizeRequest = 0;
  //     }

  //     var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  //     scroller.endY = scrollY;
  //     scroller.y += (scrollY - scroller.y) * scroller.ease;

  //     if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
  //       scroller.y = scrollY;
  //       scroller.scrollRequest = 0;
  //     }

  //     gsap.set(scroller.target, {
  //       y: -scroller.y,
  //     });

  //     requestId =
  //       scroller.scrollRequest > 0
  //         ? requestAnimationFrame(updateScroller)
  //         : null;
  //   }

  //   function onScroll() {
  //     scroller.scrollRequest++;
  //     if (!requestId) {
  //       requestId = requestAnimationFrame(updateScroller);
  //     }
  //   }

  //   function onResize() {
  //     scroller.resizeRequest++;
  //     if (!requestId) {
  //       requestId = requestAnimationFrame(updateScroller);
  //     }
  //   }
  }
}

export default App;
