import React, { Component } from "react";
import { Container, Header, Nav } from "./App_style.js";
import InlineSVG from "inline-svg-react";
import { iconSearch, iconLang, heroLogo } from "./assets/svg";
import "antd/dist/antd.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo_s from "./assets/logo-s.svg";
import hero_0 from "./assets/hero_pic/0.png";
import hero_1 from "./assets/hero_pic/1.png";
import hero_2 from "./assets/hero_pic/2.png";
import hero_3 from "./assets/hero_pic/3.png";
import hero_4 from "./assets/hero_pic/4.png";
import hero_5 from "./assets/hero_pic/5.png";

gsap.registerPlugin(ScrollTrigger);

const data_nav = ["设计", "组件", "主题", "资源", "团队"];

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
                  <a href="/" className={index + 1}>
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
          <section className="left">
            <picture>
              <img src={hero_1} alt="hero_1" />
              <img src={hero_2} alt="hero_2" />
              <img src={hero_3} alt="hero_3" />
              <img src={hero_4} alt="hero_4" />
              <img src={hero_5} alt="hero_5" />
              <img src={hero_0} alt="hero_0" />
            </picture>
          </section>
          <section className="right">
            <InlineSVG icon={heroLogo} className="hero-logo" />
            <h1>
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
        <div className="logos">ssss</div>
      </Container>
    );
  }

  //  componentDidMount () {
  //    gsap.to(".pContent", {
  //      yPercent: -100,
  //      ease: "none",
  //      scrollTrigger: {
  //        trigger: ".pSection",
  //        // start: "top bottom", // the default values
  //        // end: "bottom top",
  //        scrub: true
  //      },
  //    });

  //    gsap.to(".pImage", {
  //      yPercent: 50,
  //      ease: "none",
  //      scrollTrigger: {
  //        trigger: ".pSection",
  //        // start: "top bottom", // the default values
  //        // end: "bottom top",
  //        scrub: true
  //      },
  //    });

  // var html = document.documentElement;
  // var body = document.body;

  // var scroller = {
  //   target: document.querySelector("#scroll-container"),
  //   ease: 0.05, // <= scroll speed
  //   endY: 0,
  //   y: 0,
  //   resizeRequest: 1,
  //   scrollRequest: 0,
  // };

  // var requestId = null;

  // gsap.set(scroller.target, {
  //   rotation: 0.01,
  //   force3D: true
  // });

  // window.addEventListener("load", onLoad);

  // function onLoad() {
  //   updateScroller();
  //   window.focus();
  //   window.addEventListener("resize", onResize);
  //   document.addEventListener("scroll", onScroll);
  // }

  // function updateScroller() {

  //   var resized = scroller.resizeRequest > 0;

  //   if (resized) {
  //     var height = scroller.target.clientHeight;
  //     body.style.height = height + "px";
  //     scroller.resizeRequest = 0;
  //   }

  //   var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  //   scroller.endY = scrollY;
  //   scroller.y += (scrollY - scroller.y) * scroller.ease;

  //   if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
  //     scroller.y = scrollY;
  //     scroller.scrollRequest = 0;
  //   }

  //   gsap.set(scroller.target, {
  //     y: -scroller.y
  //   });

  //   requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  // }

  // function onScroll() {
  //   scroller.scrollRequest++;
  //   if (!requestId) {
  //     requestId = requestAnimationFrame(updateScroller);
  //   }
  // }

  // function onResize() {
  //   scroller.resizeRequest++;
  //   if (!requestId) {
  //     requestId = requestAnimationFrame(updateScroller);
  //   }
  // }
  //  }
}

export default App;
