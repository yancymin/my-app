import React, { Component } from "react";
import styled from "styled-components";
import InlineSVG from "inline-svg-react";
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
  } from "../data";
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
  } from "../assets/svg";

const Team = () => {
    return (
        <FooterSection id="footer">
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
                <a href="/" className="btn">
                  <InlineSVG icon={footerFeedback} />
                  {data_footer.input.feedback.btn}
                </a>
              </div>
              <div className="newsletter">
                <h6>{data_footer.input.newsletter.title}</h6>
                <p>{data_footer.input.newsletter.des}</p>
                <form className="input-wrap">
                  <input
                    type="email"
                    id="email"
                    placeholder={data_footer.input.newsletter.placeholder}
                    required
                  />
                  <input
                    className="submit"
                    type="submit"
                    for="email"
                    value={data_footer.input.newsletter.btn}
                  ></input>
                </form>
              </div>
            </div>
          </div>
          <div className="bottom">
            <p>{data_footer.other}</p>
            <InlineSVG className="footer-logo" icon={footerLogo} />
            <div className="social">
              <InlineSVG icon={dribbble} />
              <InlineSVG icon={figma} />
              <InlineSVG icon={behance} />
              <InlineSVG icon={twitter} />
            </div>
          </div>
        </div>
      </FooterSection>
    )
}

const FooterSection = styled.footer`
position: fixed;
bottom: 0;
z-index: -1;
width: 100%;
padding: 120px 0 0 0;
background: var(--cr-blue-2);
display: flex;
justify-content: center;

.footer-wrap {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .top {
    position: relative;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 80px;
    margin-bottom: var(--mg-80);

    .left {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: 40px;

      .link-list {
        display: grid;
        grid-template-rows: 4fr;
        grid-template-columns: 1fr;
        align-items: flex-start;
        grid-row-gap: 8px;
        grid-template-rows: 1.6fr 1fr 1fr 1fr 1fr;
        grid-template-columns: max-content;

        h6 {
          font: var(--font-18);
          color: var(--cr-white);
          margin-bottom: 12px;
        }
        li {
          font: var(--font-16-300);
          color: var(--cr-white);
          opacity: 0.7;
          cursor: pointer;
          transition: var(--ease-1);

          &:hover {
            opacity: 1;
          }
        }
      }
    }

    .right {
      position: absolute;
      display: grid;
      row-gap: 64px;
      right: 0;

      h6 {
        font: var(--font-18);
        color: var(--cr-white);
        margin-bottom: var(--mg-8);
      }
      p {
        font: var(--font-16-300);
        color: var(--cr-white);
        opacity: 0.7;
      }

      .feedback {
        a {
          display: inline-flex;
          align-items: center;
          font: var(--font-14-500);
          box-shadow: var(--shadow-1);
          background: var(--cr-white);
          border-radius: var(--radius-6);
          color: var(--cr-font-2);
          padding: 12px 24px;
          transition: var(--ease-1);
          margin-top: var(--mg-24);

          span {
            margin-right: 6px;
          }
        }
      }

      .newsletter {
        .input-wrap {
          position: relative;
          padding: 0 2px 0 0;
          background: var(--cr-white);
          border-radius: var(--radius-6);
          margin-top: var(--mg-24);
        }

        input {
          position: absolute;
          display: inline-block;
          font: var(--font-14-500);
          background: var(--cr-bg-1);
          border-radius: var(--radius-6);
          color: var(--cr-white);
          padding: 12px 24px;
          transition: var(--ease-1);
          border: none;
          width: 100%;
          border: none;

          &:hover {
            &:first-child {
              background: hsl(230 59% 32% / 1);
            }
          }

          &:focus ~ .submit {
            opacity: 1;
            transform: scale(1);
          }
        }

        input::placeholder {
          color: var(--cr-font-3);
          font-weight: 300;
          opacity: 0.4;
        }

        .submit {
          opacity: 0;
          position: absolute;
          right: 3px;
          top: 3px;
          font: var(--font-14-500);
          box-shadow: var(--shadow-1);
          background: var(--cr-white);
          border-radius: var(--radius-4);
          color: var(--cr-blue-1);
          transition: var(--ease-3);
          width: 80px;
          transform: scale(0.96);

          &:hover {
            opacity: 0.95;
          }
        }
      }
    }
  }

  .bottom {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: var(--mg-160);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding: 40px 0;
    align-items: center;

    p {
      color: var(--cr-white);
      font: var(--font-12);
      opacity: 0.6;
    }

    .footer-logo {
      margin-left: -80px;
    }

    .social {
      span {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        position: relative;
        margin-left: 16px;
        cursor: pointer;

        &:hover {
          &::after {
            opacity: 0.1;
            transform: scale(1);
          }
        }

        &::after {
          content: "";
          display: block;
          position: absolute;
          border-radius: 100%;
          width: 126%;
          height: 126%;
          background: var(--cr-white);
          opacity: 0;
          transform: scale(0.9);
          transition: var(--ease-3);
        }
      }
    }
  }
}
`;

export default Team;