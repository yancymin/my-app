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
  GetStarted,
  Tools,
  Blog,
  FooterSection,
} from "./App_style.js";
import InlineSVG from "inline-svg-react";
import {
  iconSearch,
  iconLang,
  heroLogo,
  cardArrow,
  cardArrow2,
  btnArrow,
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
import logo_1 from "./assets/logos/1.png";
import logo_2 from "./assets/logos/2.png";
import logo_3 from "./assets/logos/3.png";
import logo_4 from "./assets/logos/4.png";
import logo_5 from "./assets/logos/5.png";
import logo_6 from "./assets/logos/6.png";
import card_1 from "./assets/cards/1.png";
import comp_col_1 from "./assets/comp/col-1.png";
import comp_col_2 from "./assets/comp/col-2.png";
import comp_col_3 from "./assets/comp/col-3.png";
import comp_col_4 from "./assets/comp/col-4.png";
import search_modal from "./assets/search_modal.png";
import comp_card from "./assets/comp/comp-card.png";
import tools_pic from "./assets/tools/tools-pic.png";

const data_logos = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6];
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavScroll: true,
      isSearch: false,
    };
  }

  handleSearchClick() {
    this.setState({ isSearch: !this.state.isSearch });
    console.log(this.state.isSearch);
  }

  render() {
    return (
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
                    <img src={item.img} alt="design" />
                  </div>
                );
              })}
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
            <img src={comp_card} alt="comp_card" id="comp-card" />
            <div className="window" id="window">
              <img src={comp_col_1} alt="comp_col" className="col-1 col" />
              <img src={comp_col_2} alt="comp_col" className="col-2 col" />
              <img src={comp_col_3} alt="comp_col" className="col-3 col" />
              <img src={comp_col_4} alt="comp_col" className="col-4 col" />
            </div>
          </div>
        </Comp>
        <GetStarted>
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
        <Tools>
          <div className="title">
            <img src={tools_pic} alt="" className="left" />
            <div className="right">
              <span className="sectionEye">{sectionTitles[4][0]}</span>
              <h2 className="sectionTitle">{sectionTitles[4][1]}</h2>
              <p className="sectionDes">{sectionTitles[4][2]}</p>
            </div>
          </div>
          <div className="tools-list-wrap">
            {data_tools.map((item) => {
              return (
                <div className="tools-list-item">
                  <h5>
                    <InlineSVG icon={cardArrow} />
                    {item.title}
                  </h5>
                  <p>{item.des}</p>
                  <i>{item.tag}</i>
                </div>
              );
            })}
          </div>
          <a href="/" className="btn">
            查看全部
            <InlineSVG icon={btnArrow} />
          </a>
        </Tools>
        <Blog>
          <div className="title">
            <span className="sectionEye">{sectionTitles[5][0]}</span>
            <h2 className="sectionTitle">{sectionTitles[5][1]}</h2>
            <a href="/" className="btn btn-white">
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
                      {/* <InlineSVG icon={cardArrow2} /> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Blog>
        <FooterSection>
          <div className="footer-wrap">
            <div className="top">
              <div className="left">
                {data_footer.main.map((item) => {
                  return (
                    <ul className="link-list">
                      <h6>{item.title}</h6>
                      {item.links.map((item_2) => {
                        return <li key={item_2}>{item_2}</li>;
                      })}
                    </ul>
                  );
                })}
              </div>
              <div className="right">
                <div className="feedback">
                  <h6>{data_footer.input.feedback.title}</h6>
                  <p>{data_footer.input.feedback.des}</p>
                  <a href="/">{data_footer.input.feedback.btn}</a>
                </div>
                <div className="newsletter">
                  <h6>{data_footer.input.newsletter.title}</h6>
                  <p>{data_footer.input.newsletter.des}</p>
                  <input
                    type="text"
                    placeholder={data_footer.input.newsletter.placeholder}
                  />
                  <a href="/">{data_footer.input.newsletter.btn}</a>
                </div>
              </div>
            </div>
          </div>
        </FooterSection>
      </Container>
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

    // gsap.to("#nav2", {
    //   scrollTrigger: {
    //     trigger: "header",
    //     toggleActions: "play none none reset",
    //     id: "nav2",
    //     start: "65% top",
    //     end: "bottom bottom",
    //     scrub: 1,
    //   },
    //   y: 0,
    // });

    //------- HERO SECTION --------//

    gsap.from(childSplit.chars, {
      duration: 0.35,
      ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      yPercent: 100,
      stagger: 0.018,
      delay: 1.1,
      // Remove the extra markup when it's done
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
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "header",
        start: "top",
        // end: "bottom top",
        scrub: true,
        maker: false,
      },
    });

    //------------ START SECTION ---------//

    gsap.to("#start-card", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "#start-card",
        toggleActions: "play none none reset",
        start: "top",
        // end: "bottom top",
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
        // end: "bottom top",
        scrub: true,
        maker: false,
      },
    });

    //------------ COMP SECTION ---------//

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

    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      yPercent: 20,
      scrollTrigger: {
        trigger: "#comp",
        pin: true, // pin the trigger element while active
        pinSpacing: true,
        start: "400px", // when the top of the trigger hits the top of the viewport
        end: "bottom", // end after scrolling 500px beyond the start
        toggleActions: "play none none reset",
        markers: false,
        id: "cover",
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // snap: {
        //   snapTo: "labels", // snap to the closest label in the timeline
        //   duration: 0.3, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "none", // the ease of the snap animation ("power3" by default)
        // },
      },
    });

    // add animations and labels to the timeline
    tl.addLabel("start")
      .to(
        ".col",
        { yPercent: -30, autoAlpha: 1 },
        TweenMax.staggerFrom(".col", 20, {
          // y: 40,
          // delay: 1,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        })
      )
      .addLabel("cover")
      .to("#cover", { y: "105%", autoAlpha: 1 })
      .addLabel("right")
      .to("#window", { x: "40%", autoAlpha: 1 })
      .addLabel("end");

    // gsap.to("#cover", {
    //   yPercent: 0,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: "#comp .window",
    //     toggleActions: "play none none reset",
    //     start: "top",
    //     end: "bottom",
    //     scrub: 1,
    //     markers: true,
    //     id: "cover",
    //     pin: true,
    //     pinSpacing: true,
    //   },
    //   y: 0,
    // });
  }
}

export default App;
