/* eslint-disable no-unreachable */
import React, { Component } from "react";
import GlobalFooter from "./components/GlobalFooter";
import Team from "./pages/Team";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Container,
  Header,
  Nav,
  LogoWall,
  StartSection,
  DesignPr,
  Comp,
  GetStarted,
  Tools,
  Blog,
  FooterSection,
  CompFeature,
} from "./App_style.js";
import InlineSVG from "inline-svg-react";
import {
  iconSearch,
  iconDark,
  iconLang,
  heroLogo,
  cardArrow,
  cardArrow2,
  btnArrow,
  footerLogo,
  dribbble,
  figma,
  behance,
  twitter,
  footerFeedback,
} from "./assets/svg";
import {
  data_nav,
  sectionTitles,
  data_start,
  data_designPr,
  data_getStarted,
  data_tools,
  data_blog,
  data_footer,
  data_feature,
} from "./data";
import { gsap, TweenMax } from "gsap";
import { SplitText } from "./SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import Parallax from "parallax-js";
import logo_s from "./assets/logo-s.svg";
import hero_0 from "./assets/hero_pic/0.png";
import hero_1 from "./assets/hero_pic/1.png";
import hero_2 from "./assets/hero_pic/2.png";
import hero_3 from "./assets/hero_pic/3.png";
import hero_4 from "./assets/hero_pic/4.png";
import hero_5 from "./assets/hero_pic/5.png";
import logo_1 from "./assets/logos/1.svg";
import logo_2 from "./assets/logos/2.svg";
import logo_3 from "./assets/logos/3.svg";
import logo_4 from "./assets/logos/4.svg";
import logo_5 from "./assets/logos/5.svg";
import logo_6 from "./assets/logos/6.svg";
import logo_7 from "./assets/logos/7.svg";
import logo_8 from "./assets/logos/8.svg";
import logo_9 from "./assets/logos/9.svg";
import logo_10 from "./assets/logos/10.svg";
import logo_11 from "./assets/logos/11.svg";
import logo_12 from "./assets/logos/12.svg";
import logo_g1 from "./assets/logos/gray-1.svg";
import logo_g2 from "./assets/logos/gray-2.svg";
import logo_g3 from "./assets/logos/gray-3.svg";
import logo_g4 from "./assets/logos/gray-4.svg";
import logo_g5 from "./assets/logos/gray-5.svg";
import logo_g6 from "./assets/logos/gray-6.svg";
import logo_g7 from "./assets/logos/gray-7.svg";
import logo_g8 from "./assets/logos/gray-8.svg";
import logo_g9 from "./assets/logos/gray-9.svg";
import logo_g10 from "./assets/logos/gray-10.svg";
import logo_g11 from "./assets/logos/gray-11.svg";
import logo_g12 from "./assets/logos/gray-12.svg";
import card_1 from "./assets/cards/1.png";
import comp_col_1 from "./assets/comp/col-1.png";
import comp_col_2 from "./assets/comp/col-2.png";
import comp_col_3 from "./assets/comp/col-3.png";
import comp_col_4 from "./assets/comp/col-4.png";
import comp_col_5 from "./assets/comp/col-5.png";
import comp_col_6 from "./assets/comp/col-6.png";
import search_modal from "./assets/search_modal.png";
import tools_pic from "./assets/tools/tools-pic.png";

const data_logos = [
  [logo_g1, logo_1],
  [logo_g2, logo_2],
  [logo_g3, logo_3],
  [logo_g4, logo_4],
  [logo_g5, logo_5],
  [logo_g6, logo_6],
  [logo_g7, logo_7],
  [logo_g8, logo_8],
  [logo_g9, logo_9],
  [logo_g10, logo_10],
  [logo_g11, logo_11],
  [logo_g12, logo_12],
];

// Random Array

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

let data_logos_random = shuffle(data_logos).slice(6);

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavScroll: true,
      isSearch: false,
      isDark: false,
    };
  }

  handleSearchClick() {
    this.setState({ isSearch: !this.state.isSearch });
  }

  handleDarkSwitch() {
    this.setState({ isDark: !this.state.isDark });
    const body = document.querySelector("body");
    body.classList.toggle("darkmode");
  }

  render() {
    return (
      <>
        <Container>
          <img
            src={search_modal}
            alt="search_modal"
            id="search-modal"
            className={this.state.isSearch ? "search-show" : "search-hide"}
          />
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
                <i className="icon" onClick={() => this.handleSearchClick()}>
                  <InlineSVG icon={iconSearch} />
                </i>
                <i
                  className="icon dark-switcher"
                  onClick={() => this.handleDarkSwitch()}
                >
                  <InlineSVG icon={iconDark} />
                </i>
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
                <i className="icon" onClick={() => this.handleSearchClick()}>
                  <InlineSVG icon={iconSearch} />
                </i>
                <i
                  className="icon dark-switcher"
                  onClick={() => this.handleDarkSwitch()}
                >
                  <InlineSVG icon={iconDark} />
                </i>
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
              <i id="hero-bg"></i>
              <picture id="scene">
                <img
                  data-depth="0.23"
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
                  data-depth="0.23"
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
              </div>
            </section>
          </Header>
          <LogoWall className="logo-wall">
            <h3>使用 Arco Design System 构建</h3>
            <div className="logos-wrap">
              {data_logos_random.map((item) => {
                return (
                  <div>
                    <img
                      src={item[0]}
                      className="logo-wall-item"
                      alt="logo-wall"
                    />
                    <img
                      src={item[1]}
                      className="logo-wall-item"
                      alt="logo-wall"
                    />
                  </div>
                );
              })}
            </div>
          </LogoWall>
          <StartSection id="start-card">
            <div className="title">
              <span className="sectionEye">{sectionTitles[0][0]}</span>
              <h2 className="sectionTitle">{sectionTitles[0][1]}</h2>
            </div>
            <div className="card-wrap">
              {data_start.map((item, index) => {
                if (index === 0) {
                  return (
                    <div className="card card-1 multiply">
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
                        <img
                          src={card_1}
                          alt=""
                          className={
                            this.state.isDark ? "comp-card-1-dark" : null
                          }
                        />
                      </div>
                    </div>
                  );
                }
                return (
                  <div
                    className={
                      this.state.isDark
                        ? "card card-2 comp-card-234-dark "
                        : "card card-2"
                    }
                  >
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
                <div className="card-wrap">
                  {data_designPr.map((item, index) => {
                    return (
                      <div className={"design-card design-card-" + (index + 1)}>
                        <img src={item.img} alt="design" />
                        <div className="title">
                          <h5>{item.title}</h5>
                          <p>{item.des}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </DesignPr>
          <Comp id="comp">
            <span id="cover"></span>
            <div className="title" id="comp-title">
              <span className="sectionEye">{sectionTitles[2][0]}</span>
              <h2 className="sectionTitle">{sectionTitles[2][1]}</h2>
              <p className="sectionDes">{sectionTitles[2][2]}</p>
            </div>
            <div className="window-wrap">
              <div className="window" id="window">
                <div className="comp-pic-all">
                  <img src={comp_col_1} alt="comp_col" className="col-1 col" />
                  <img src={comp_col_2} alt="comp_col" className="col-2 col" />
                  <img src={comp_col_3} alt="comp_col" className="col-3 col" />
                  <img src={comp_col_4} alt="comp_col" className="col-4 col" />
                  <img src={comp_col_5} alt="comp_col" className="col-5 col" />
                  <img src={comp_col_6} alt="comp_col" className="col-6 col" />
                </div>
              </div>
            </div>
          </Comp>
          <CompFeature id="feature">
            <div className="feature-wrap">
              <div className="list">
                {data_feature.map((item, index) => {
                  return (
                    <div className={"list-item item-" + (index + 1)}>
                      <div className="title">
                        <InlineSVG icon={item.img} />
                        <h5>{item.title}</h5>
                      </div>
                      <p className="des">{item.des}</p>
                    </div>
                  );
                })}
              </div>
              <a href="/" className="btn">
                开始使用
              </a>
            </div>
          </CompFeature>
          <GetStarted id="get-start">
            <div className="title">
              <span className="sectionEye">{sectionTitles[3][0]}</span>
              <h2
                className="sectionTitle"
                dangerouslySetInnerHTML={{ __html: sectionTitles[3][1] }}
              ></h2>
            </div>
            <div className="card-wrap">
              {data_getStarted.map((item) => {
                return (
                  <div className="card card-2">
                    <div className="left">
                      <h4>{item.title}</h4>
                      <p>{item.des}</p>
                      <a href="/" className="link btn">
                        快速上手
                        <InlineSVG icon={cardArrow2} />
                      </a>
                    </div>
                    <div className="right">
                      <img src={item.img} alt="img" />
                    </div>
                  </div>
                );
              })}
            </div>
          </GetStarted>
          <Tools id="tools">
            <div className="title">
              <img src={tools_pic} alt="" className="left" />
              <div className="right">
                <span className="sectionEye">{sectionTitles[4][0]}</span>
                <h2 className="sectionTitle">{sectionTitles[4][1]}</h2>
                <p className="sectionDes">{sectionTitles[4][2]}</p>
                <a href="/" className="btn">
                  查看全部
                  <InlineSVG icon={btnArrow} />
                </a>
              </div>
            </div>
            <div className="tools-list-wrap">
              {data_tools.map((item) => {
                return (
                  <div className="tools-list-item">
                    <h5>{item.title}</h5>
                    <p>{item.des}</p>
                    <i>{item.tag}</i>
                  </div>
                );
              })}
            </div>
          </Tools>
          <Blog id="blog">
            <div className="arrows">
              <InlineSVG icon={cardArrow} />
              <InlineSVG icon={cardArrow} />
            </div>
            <div className="blog-wrap">
              <div className="title">
                <span className="sectionEye">{sectionTitles[5][0]}</span>
                <h2 className="sectionTitle">{sectionTitles[5][1]}</h2>
                <a href="/" className="btn">
                  全部文章
                </a>
              </div>
              <div className="blog-container" id="blog-container">
                <div id="blog-drag">
                  {data_blog.map((item) => {
                    return (
                      <div className="card">
                        <img src={item.img} alt="" />
                        <div className="bottom">
                          <h5>{item.title}</h5>
                          <p>{item.des}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Blog>
        </Container>
        <GlobalFooter />
        {this.props.children}
        <Router>
          <Route path="/" component={App}>
            <Route path="team" component={Team} />
          </Route>
        </Router>
      </>
    );
  }

  componentDidMount() {
    const heroBtns = document.querySelectorAll(".buttons");
    const heroLogo = document.querySelectorAll(".hero-logo");
    const heroimg = document.querySelectorAll(".hero");
    const navItems = document.querySelectorAll(".navItem");
    const logoWall = document.querySelectorAll(".logo-wall");

    const parentSplit = new SplitText("#slogan", {
      type: "lines",
      linesClass: "split-parent",
    });
    const childSplit = new SplitText("#slogan", { type: "chars" });

    Draggable.create("#blog-drag", {
      type: "x",
      bounds: "#blog-container",
      edgeResistance: 0,
      dragResistance: 0.5,
      autoScroll: true,
      inertia: true,
      throwProps: true,
    });

    // ScrollTrigger.defaults({
    //   markers: true,
    // })

    //------------ NAV ---------//

    gsap.to("#nav2", {
      scrollTrigger: {
        trigger: "header",
        toggleActions: "play none none reset",
        id: "nav2",
        start: "50% top",
        end: "bottom bottom",
        scrub: 1,
      },
      y: 0,
    });

    gsap.to("#nav2", {
      scrollTrigger: {
        trigger: "#designPr",
        toggleActions: "play none none reset",
        id: "nav2",
        start: "64%",
        scrub: 0,
      },
      y: -100,
    });

    gsap.to("#nav2", {
      scrollTrigger: {
        trigger: "#get-start",
        toggleActions: "play none none reset",
        id: "nav2",
        start: "top",
        end: "top",
        scrub: 1,
      },
      y: 0,
    });

    //------- HERO SECTION --------//

    gsap.from(childSplit.chars, {
      duration: 0.35,
      ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      yPercent: 100,
      stagger: 0.018,
      delay: 1.1,
      onComplete: () => {
        parentSplit.revert();
        childSplit.revert();
      },
    });

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
      [heroLogo, heroBtns, logoWall],
      0.4,
      {
        opacity: 0,
        y: 60,
        delay: 1.25,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      0.03
    );

    TweenMax.staggerFrom(
      ".logo-wall-item",
      0.4,
      {
        opacity: 0,
        y: 40,
        delay: 1.3,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      0.04
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
      yPercent: -8,
      ease: "none",
      scrollTrigger: {
        trigger: "header",
        start: "top",
        scrub: true,
        maker: false,
      },
    });

    // gsap.to("#hero-bg", 0.4, {
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: "header",
    //     toggleActions: "play none none reset",
    //     start: "50%",
    //     end: "51%",
    //     scrub: false,
    //     markers: false,
    //     pin: false,
    //     pinSpacing: false,
    //     force3D: true,
    //   },
    //   width: "200%",
    // });

    //------------ START SECTION ---------//

    gsap.to("#start-card", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "#start-card",
        toggleActions: "play none none reset",
        start: "top",
        scrub: true,
        maker: false,
      },
    });

    //------------ DESIGNPR SECTION ---------//

    gsap.to("#designPr", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "#designPr",
        toggleActions: "play none none reset",
        start: "top",
        scrub: true,
        maker: false,
      },
    });

    // ----- DESIGNPR CARDS -------//

    let designPrtl = gsap.timeline({
      scrollTrigger: {
        trigger: "#designPr",
        toggleActions: "play none none none",
        duration: 1,
        pin: true,
        pinSpacing: true,
        start: "-200px",
        // end: "bottom",
        markers: false,
        id: "designPr",
        scrub: 0,
      },
    });

    designPrtl
      .to(".design-card-1", 1, {
        autoAlpha: 1,
        y: -80,
        // zIndex: 0,
      })
      .to(".design-card-1", 0.2, {
        scale: 0.9,
        autoAlpha: 0.4,
      })
      .to(".design-card-2", 1, {
        autoAlpha: 1,
        y: -60,
        // zIndex: 1,
      })
      .to(".design-card-2", 0.2, {
        scale: 0.93,
        autoAlpha: 0.4,
      })
      .to(".design-card-3", 1, {
        autoAlpha: 1,
        y: -40,
        // zIndex: 2,
      })
      .to(".design-card-3", 0.2, {
        scale: 0.965,
        autoAlpha: 0.4,
      })
      .to(".design-card-4", 0.2, {
        autoAlpha: 1,
        y: -20,
        // zIndex: 3,
        scale: 1,
      });

    //------------ COMP SECTION ---------//

    gsap.to("#comp-title", {
      yPercent: -10,
      autoAlpha: 1,
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

    let tl = gsap.timeline({
      yPercent: 20,
      scrollTrigger: {
        trigger: "#comp",
        pin: true,
        pinSpacing: true,
        start: "400px",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false,
        id: "cover",
        scrub: 1,
      },
    });

    tl.addLabel("start")
      .to(".col", 6, { yPercent: -40, autoAlpha: 1, force3D: true }, "start")
      .to("#cover", { y: "105%", autoAlpha: 1, delay: 0.2 }, "start")
      .to("#window", 2, { scale: 1.6, autoAlpha: 1, delay: 0.4 }, "start")
      .addLabel("end")
      .to(".comp-pic-all", 1.6, { scale: 0.5, autoAlpha: 1 }, "end")
      .to("#cover", { opacity: 0, autoAlpha: 1 }, "end")
      .to(
        "#window",
        {
          autoAlpha: 1,
          background: "transparent",
          boxShadow: "0 0 0 0 transparent",
          force3D: true,
        },
        "end"
      );

    //------------ GET START SECTION ---------//

    gsap.to("#feature", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: "#feature",
        toggleActions: "play none none reset",
        start: "top",
        // end: "bottom top",
        scrub: true,
        maker: false,
      },
    });

    //------------ GET START SECTION ---------//

    gsap.to("#get-start", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "#get-start",
        toggleActions: "play none none reset",
        start: "top",
        // end: "bottom top",
        scrub: true,
        maker: false,
      },
    });

    //------------ TOOLS SECTION ---------//

    gsap.to("#tools", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "#tools",
        toggleActions: "play none none reset",
        start: "top",
        // end: "bottom top",
        scrub: true,
        maker: false,
      },
    });

    //------------ BLOG SECTION ---------//

    gsap.to("#blog", {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#blog",
        toggleActions: "play none none reset",
        start: "top",
        // end: "bottom top",
        scrub: true,
        maker: false,
      },
    });
  }
}

export default App;
