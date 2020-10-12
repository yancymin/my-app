/* eslint-disable no-unreachable */
import React, { Component } from "react";
import {
  Container,
  Header,
  Nav,
  LogoWall,
  StartSection,
  DesignPr,
  Comp,
} from "./App_style.js";
import InlineSVG from "inline-svg-react";
import {
  iconSearch,
  iconLang,
  heroLogo,
  cardArrow,
  cardArrow2,
} from "./assets/svg";
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
import card_1 from "./assets/cards/1.png";
import card_2 from "./assets/cards/2.png";
import card_3 from "./assets/cards/3.png";
import card_4 from "./assets/cards/4.png";
import designPr_1 from "./assets/designPr/1.png";
import designPr_2 from "./assets/designPr/2.png";
import designPr_3 from "./assets/designPr/3.png";
import designPr_4 from "./assets/designPr/4.png";
import comp_bg from "./assets/comp/bg.png";

gsap.registerPlugin(ScrollTrigger);

const data_nav = ["设计", "组件", "主题", "资源", "团队"];
const data_logos = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6];
const sectionTitles = [
  ["设计与开发", "开始使用 Arco Design"],
  [
    "设计原则",
    "浪漫与务实",
    "务实是同理心，浪漫是想象力。务实是通过 Arco Design 去解决大部分需求，最大程度提升效率。让设计师与开发者能去做更「浪漫」的发挥想象力事情。",
  ],
  ["组件系统", "灵活全面的组件库"],
];
const data_start = [
  {
    title: "组件系统",
    des:
      "Arco Design 包含了众多精心设计的组件，覆盖主流前端框架，让各路开发者都能得心应手。",
    btn: ["快速上手", "React.js", "Flutter Web", "Vue.js"],
    img: card_1,
  },
  {
    title: "完备的生态",
    des:
      "包含设计资源、图标库等在内的完善生态，让极致体验触及产品中的每一处细节。",
    btn: "了解更多",
    img: card_2,
  },
  {
    title: "设计指南",
    des:
      "了解 Arco Design 的设计思想以及我们如何将其应用于整个设计系统，这里有包括全局色、文字、图标和布局的指南。",
    btn: "了解更多",
    img: card_3,
  },
  {
    title: "社区与贡献",
    des: "Arco Design System 即将开源，如果你有任何意见请随时与我们联系。",
    btn: "了解更多",
    img: card_4,
  },
];

const data_designPr = [
  {
    title: "清晰",
    des: "清晰的指向亦是效率的提升",
    img: designPr_1,
  },
  {
    title: "一致",
    des: "一致的设计产生品牌信赖感",
    img: designPr_2,
  },
  {
    title: "韵律",
    des: "跳动的韵律构建字节的美感",
    img: designPr_3,
  },
  {
    title: "开放",
    des: "开放包容是解决问题的思路",
    img: designPr_4,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavScroll: true,
    };
  }

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
              <a href="/" className="login btn-white btn">
                登录
              </a>
            </div>
          </div>
        </Nav>
        <Nav
          className={this.state.isNavScroll ? "navScrolled" : "hide-nav"}
          id="nav2"
        >
          <div className="nav-wrap">
            <div className="left">
              <img src={logo_s} alt="" className="logo-s" />
              <InlineSVG icon={heroLogo} />
            </div>
            <div className="right">
              <div className="nav-item-wrap">
                {data_nav.map((item, index) => {
                  return (
                    <a href="/" className="navItem">
                      {item}
                    </a>
                  );
                })}
              </div>
              <a href="/" className="icon">
                <InlineSVG icon={iconSearch} />
              </a>
              <a href="/" className="icon">
                <InlineSVG icon={iconLang} />
              </a>
              <a href="/" className="login btn-white btn">
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
            <div className="right-wrap">
              <InlineSVG icon={heroLogo} className="hero-logo" />
              <h1 id="slogan">
                <strong>企业级</strong>设计系统，
                <br />让<strong>设计者</strong>和<strong>开发者</strong>更专注
                <br />
                实现极致的用户体验。
              </h1>
              <div className="buttons">
                <a href="/" className="btn">
                  开始使用
                </a>
                <a href="/" className="btn-white btn">
                  设计语言
                </a>
              </div>
              <LogoWall className="logo-wall">
                <h3>使用 Arco Design System 构建</h3>
                <div className="logos-wrap">
                  {data_logos.map((item) => {
                    return (
                      <img
                        src={item}
                        className="logo-wall-item"
                        alt="logo-wall"
                      />
                    );
                  })}
                </div>
              </LogoWall>
            </div>
          </section>
        </Header>
        <StartSection id="start-card">
          <div className="title">
            <span className="sectionEye">{sectionTitles[0][0]}</span>
            <h2 className="sectionTitle">{sectionTitles[0][1]}</h2>
          </div>
          <div className="card-wrap">
            {data_start.map((item, index) => {
              if (index === 0) {
                return (
                  <div className="card card-1">
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
                    <div className="right">
                      <img src={card_1} alt="" />
                    </div>
                  </div>
                );
              }
              return (
                <div className="card card-2">
                  <div className="left">
                    <h4>{item.title}</h4>
                    <p>{item.des}</p>
                    <a href="/" className="link btn">
                      {item.btn} <InlineSVG icon={cardArrow2} />
                    </a>
                  </div>
                  <div className="right">
                    <img src={item.img} alt="img" />
                  </div>
                </div>
              );
            })}
          </div>
        </StartSection>
        <DesignPr id="designPr">
          <div className="container">
            <div className="left">
              <span className="sectionEye">{sectionTitles[1][0]}</span>
              <h2 className="sectionTitle">{sectionTitles[1][1]}</h2>
              <p className="sectionDes">{sectionTitles[1][2]}</p>
            </div>
            <div className="right">
              {data_designPr.map((item, index) => {
                return (
                  <div className="design-card">
                    <img src={item.img} alt="design" />
                    <h5>{item.title}</h5>
                    <p>{item.des}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </DesignPr>
        <Comp id="comp">
          <div className="title" id="comp-title">
            <span className="sectionEye">{sectionTitles[2][0]}</span>
            <h2 className="sectionTitle">{sectionTitles[2][1]}</h2>
          </div>
          <div className="window">
            <span id="cover"></span>
            <img src={comp_bg} alt="compbg" />
          </div>
        </Comp>
      </Container>
    );
  }

  componentDidMount() {
    const heroBtns = document.querySelectorAll(".buttons");
    const heroLogo = document.querySelectorAll(".hero-logo");
    const heroimg = document.querySelectorAll(".hero");
    const navItems = document.querySelectorAll(".navItem");
    const logoWall = document.querySelectorAll(".logo-wall");
    const mySplitText = new SplitText("#slogan", { type: "chars" });
    const chars = mySplitText.chars;

    const startCard = new SplitText("#start-card .title", { type: "chars" });
    const startCardChars = startCard.chars;

    // function ttt() {
    // TweenMax.staggerFrom(
    //   startCardChars,
    //   1,
    //   {
    //     opacity: 0,
    //     y: 60,
    //     ease: "cubic-bezier(0.16, 1, 0.3, 1)",
    //     scrollTrigger: {
    //       trigger: "#start-card",
    //       toggleActions: "play none none none",
    //       start: "-60%", // the default values
    //       end: "bottom",
    //       scrub: false,
    //     },
    //   },
    //   0.02
    // );
    // }


    // ScrollTrigger.defaults({
    //   markers: true,
    // })

    //------------ NAV ---------//
    gsap.to("#nav2", {
      scrollTrigger: {
        trigger: "header",
        toggleActions: "play none none reset",
        id: "nav2",
        start: "65% top",
        end: "bottom bottom",
        scrub: 1,
      },
      y: 0,
    });

    //------- HERO --------//

    TweenMax.staggerFrom(
      navItems,
      0.4,
      {
        opacity: 0,
        x: -10,
        delay: 1.3,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      0.1
    );

    TweenMax.staggerFrom(
      [heroLogo, chars, heroBtns, logoWall],
      0.4,
      {
        opacity: 0,
        y: 60,
        delay: 1.2,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      0.02
    );

    TweenMax.staggerFrom(
      ".logo-wall-item",
      0.4,
      {
        opacity: 0,
        y: 40,
        delay: 2,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      0.05
    );

    TweenMax.staggerFrom(
      heroimg,
      0.6,
      {
        opacity: 0,
        y: 300,
        delay: 0.8,
        ease: "cubic-bezier(0, 0.55, 0.45, 1)",
      },
      0.03
    );

    const scene = document.getElementById("scene");
    setTimeout(() => {
      new Parallax(scene);
    }, 3000);

    gsap.to("header", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "header",
        start: "top", // the default values
        // end: "bottom top",
        scrub: true,
        maker: false,
      },
    });

    // gsap.to(".parallax-2", {
    //   yPercent: 5,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: "header",
    //     start: "top", // the default values
    //     // end: "bottom top",
    //     scrub: true,
    //     maker: false,
    //     id: "parallax-2",
    //   },
    // });

    //------------ COMP ---------//
    gsap.to("#comp-title", {
      scrollTrigger: {
        trigger: "#designPr",
        toggleActions: "play none none reset",
        id: "comp-title",
        start: "top top",
        end: "bottom +=100px",
        scrub: 1,
        markers: false,
        pin: false,
        pinSpacing: false,
      },
      y: 0,
    });

    gsap.to("#start-card .card-wrap", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: "#start-card",
        toggleActions: "play none none reset",
        start: "top", // the default values
        // end: "bottom top",
        scrub: true,
        maker: false,
      },
    });

    gsap.to("#designPr", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "#designPr",
        toggleActions: "play none none reset",
        start: "top", // the default values
        // end: "bottom top",
        scrub: true,
        maker: false,
      },
    });

    gsap.to("#cover", {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#comp .window",
        toggleActions: "play none none reset",
        start: "top", // the default values
        end: "bottom",
        scrub: 1,
        maker: false,
        onUpdate: (self) => {
          console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity()
          );

          if (self.progress.toFixed(3) >= 1.0) {
            console.log("2");
          }
        },
      },
      y: 800,
    });
  }
}

export default App;
