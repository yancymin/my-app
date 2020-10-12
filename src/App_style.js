import styled from "styled-components";

export const Container = styled.main`
  /* max-width: 1200px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn {
    transition: var(--ease-3) !important;

    &:hover {
      transform: translateY(-2px);
    }
  }

  .btn-white {
    &:hover {
      box-shadow: var(--shadow-2) !important;
    }
  }

  .sectionEye {
    font: var(--font-32);
    color: var(--cr-font-3);
    margin-top: var(--mg-160);
  }

  .sectionTitle {
    font: var(--font-46);
    color: var(--cr-font-1);
    margin-bottom: var(--mg-120);
  }

  .sectionDes {
    text-align: left;
    font: var(--font-16-300);
    color: var(--cr-font-2);
    max-width: 400px;
  }

  .navScrolled {
    opacity: 1;
    transform: translateY(0);
  }

  .hide-nav {
    opacity: 0;
  }

  #nav2 {
    z-index: 999;
    position: fixed;
    display: inline-flex;
    background: rgb(255 255 255 / 1);
    /* backdrop-filter: blur(20px); */
    transition: var(--ease-1);
    animation: none;
    border-bottom: 1px solid var(--cr-line-2);
    box-shadow: var(--shadow-3);

    .logo-s {
      margin-right: 16px;
    }

    .left {
      svg {
        transform-origin: left center;
        transform: scale(0.8);
      }
    }

    .nav-item-wrap {
      margin-right: 40px;
      display: flex;

      a {
        position: relative;
        font: var(--font-16-300);
        color: var(--cr-font-2);
        margin-right: 32px;
        display: flex;
        justify-content: center;
        transition: var(--ease-1);

        &::before {
          position: absolute;
          bottom: -4px;
          content: "";
          display: block;
          width: 40%;
          height: 2px;
          border-radius: 2px;
          background: var(--cr-blue-1);
          opacity: 0;
          transform: scaleX(0);
          transition: var(--ease-2);
        }

        &:hover {
          color: var(--cr-blue-1);
          font: var(--font-16-500);

          &::before {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

export const Nav = styled.nav`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  animation: navShow 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 1.35s;
  transform: translateY(-100%);
  opacity: 0;

  @keyframes navShow {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .nav-wrap {
    /* max-width: 1200px; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 24px 40px;
  }

  .left {
    display: flex;
    align-items: center;
    .logo-s {
      margin-right: 80px;
    }

    a {
      position: relative;
      font: var(--font-16-300);
      color: var(--cr-font-2);
      margin-right: 32px;
      display: flex;
      justify-content: center;
      transition: var(--ease-1);

      &::before {
        position: absolute;
        bottom: -4px;
        content: "";
        display: block;
        width: 40%;
        height: 2px;
        border-radius: 2px;
        background: var(--cr-blue-1);
        opacity: 0;
        transform: scaleX(0);
        transition: var(--ease-2);
      }

      &:hover {
        color: var(--cr-blue-1);
        font: var(--font-16-500);

        &::before {
          opacity: 1;
          transform: scaleX(1);
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .right {
    display: flex;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 24px;

      &:last-child {
        margin-right: 0;
      }
    }
    .icon {
      position: relative;
      padding: 8px;
      border-radius: var(--radius-6);
      cursor: pointer;

      svg path {
        transition: var(--ease-1);
      }

      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background: var(--cr-white);
        opacity: 0;
        transform: scale(0.88);
        z-index: -1;
        border-radius: 100%;
        transition: var(--ease-1);
      }

      &:hover {
        svg {
          path {
            fill: var(--cr-blue-1);
          }
        }
        &::after {
          opacity: 1;
          transform: scale(1);
          background: var(--cr-white);
          box-shadow: var(--shadow-1);
        }
      }
    }

    .login {
      font: var(--font-16-500);
      padding: 13px 32px;
      box-shadow: var(--shadow-1);
      border-radius: var(--radius-6);
      color: var(--cr-blue-1);
      line-height: 15px;
      transition: var(--ease-1);
      background-color: var(--cr-white);

      &:hover {
        /* color: var(--cr-blue-1);
        box-shadow: 0 0 0 transparent;
        background-color: var(--cr-bg-3); */
      }
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  section {
    position: absolute;
    left: 0;
    width: 50vw;
    height: 100vh;

    picture {
      filter: brightness(1.05);
      margin-left: -4%;
      width: 100%;
      height: 640px;
      max-height: fit-content;
      margin-top: -6%;

      img {
        position: absolute;
        max-width: 96%;
        z-index: 1;

        &:nth-of-type(6) {
          z-index: 0;
        }
      }
    }
  }

  .left {
    background: transparent;
    display: flex;
    align-items: center;

    &::after {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      display: block;
      z-index: -1;
      background: var(--cr-bg-2);
      width: 100%;
      height: 100%;
      animation: heroBgShow 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.3s;
      transform-origin: left;
      opacity: 0;

      @keyframes heroBgShow {
        from {
          transform: scale3d(0, 1, 1);
          opacity: 0;
        }
        to {
          transform: scale3d(1, 1, 1);
          opacity: 1;
        }
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 0;
    left: unset;
    align-items: center;

    .right-wrap {
      margin-top: var(--mg-40);
    }

    .hero-logo {
      display: inline-block;
      width: 140px;
      margin-bottom: 28px;
    }

    h1 {
      font: var(--font-46);
      color: var(--cr-font-2);
      font-weight: 300;
      margin-bottom: 90px;
      letter-spacing: 0.02em;

      strong {
        font-weight: 700;
        color: var(--cr-font-1);
      }
    }

    .buttons {
      a {
        padding: 13px 40px;
        font: var(--font-18);
        box-shadow: var(--shadow-1);
        background: var(--cr-white);
        border-radius: var(--radius-6);
        color: var(--cr-blue-1);
        margin-right: 20px;
        transition: var(--ease-1);

        &:last-child {
          margin-right: 0;
          /* &:hover {
            color: var(--cr-blue-1);
            box-shadow: 0 0 0 transparent;
            background-color: var(--cr-bg-3);
          } */
        }

        &:first-child {
          position: relative;
          background: var(--cr-blue-1);
          color: var(--cr-white);
          padding: 13px 40px 13px 60px;

          &:after,
          &:before {
            position: absolute;
            font-family: "Barrio", sans-serif;
            font-weight: bold;
            font-size: 20px;
            transition: var(--ease-2);
            transform: translateX(20px);
          }

          &:before {
            content: "_";
            position: absolute;
            left: 22px;
            top: 16px;
          }

          &:after {
            content: ">";
            position: absolute;
            left: 14px;
            top: 18px;
          }

          &:hover {
            background: var(--cr-font-1);

            &:after,
            &:before {
              color: rgb(100, 233, 242);
            }

            &:before {
              content: "_";
              position: absolute;
              left: 39px;
              top: 13px;
              transform: translateY(-3px);
            }

            &:after {
              content: ">";
              position: absolute;
              left: 23px;
              top: 18px;
            }
          }
        }
      }
    }
  }
`;

export const LogoWall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: var(--mg-140);
  width: 100%;

  &::before {
    content: "";
    display: block;
    width: 500px;
    height: 1px;
    background: var(--cr-line-1);
    margin-bottom: var(--mg-56);
  }

  h3 {
    font: vacr(--font-16-300);
    color: var(--cr-font-2);
    margin-bottom: var(--mg-32);
  }

  .logos-wrap {
    display: flex;
    justify-content: flex-start;
    width: 560px;
    flex-wrap: wrap;
    margin-left: -10px;

    img {
      height: 40px;
      filter: saturate(0.3) contrast(1.4);
      margin-right: var(--mg-24);
      margin-bottom: var(--mg-16);
    }
  }
`;

export const StartSection = styled.section`
  text-align: center;
  margin: var(--mg-160) 0;
  max-width: 1200px;

  .card-wrap {
    width: 100%;
    display: grid;
    grid-template-rows: 2fr;
    grid-template-columns: 2fr 1.3fr;
    grid-row-gap: 24px;
    grid-column-gap: 24px;

    .card-1 {
      .right {
        position: absolute;
        bottom: -51px;
        right: -68px;
        text-align: right;

        img {
          width: 370px;
        }
      }
    }

    .card-2 {
      .right {
        position: absolute;
        bottom: 0;
        right: 0;
        text-align: right;
        z-index: -1;

        img {
          width: 50%;
        }
      }
    }

    .card {
      &:nth-of-type(2),
      &:nth-of-type(4) {
        &:hover {
          .right {
            img {
              filter: brightness(1.03);
            }
          }
        }

        .left {
          max-width: 310px;
        }
        .right {
          z-index: -1;
          img {
            width: 100%;
            transition: var(--ease-1);
          }
        }
      }
    }

    .card {
      position: relative;
      height: 420px;
      text-align: left;
      background: var(--cr-bg-1);
      /* border: 1px solid var(--cr-line-1); */
      padding: 68px 64px;
      border-radius: var(--radius-16);
      overflow: hidden;
      transition: var(--ease-1);
      mix-blend-mode: multiply;

      &::after {
        z-index: -1;
        opacity: 0;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: var(--cr-bg-3);
        transform: scale3d(0.96, 0.96, 0.96);
        border-radius: var(--radius-16);
        transition: var(--ease-1);
        mix-blend-mode: multiply;
      }

      &:hover {
        background: transparent;
        border-color: transparent;

        h4 {
          color: var(--cr-blue-1);
        }

        &::after {
          opacity: 1;
          transform: scale3d(1, 1, 1);
        }
      }

      .left {
        max-width: 300px;
      }

      h4 {
        font: var(--font-28);
        color: var(--cr-font-1);
        margin-bottom: var(--mg-24);
        transition: var(--ease-1);
      }

      p {
        font: var(--font-16-300);
        color: var(--cr-font-2);
        margin-bottom: var(--mg-40);
      }

      a {
        font: var(--font-16-500);
        color: var(--cr-blue-1);
        display: flex;
        align-items: center;

        & > span {
          display: inline-flex;
        }
      }

      .left > .link {
        display: inline-flex;
        box-shadow: var(--shadow-1);
        background: var(--cr-white);
        padding: 10px 20px;
        border-radius: var(--radius-6);

        span {
          margin-left: 8px;
        }
      }

      .links {
        display: grid;
        grid-template-rows: 2fr;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 16px;
        grid-column-gap: 32px;
        max-width: fit-content;
        transform: translateX(-14px);

        .link {
          transition: var(--ease-2);
          span {
            transition: var(--ease-2);
          }
          &:hover {
            transform: translateX(12px);
            span {
              &:first-child {
                opacity: 1;
                transform: translateX(6px);
                transition-delay: 0.1s;
              }
              &:last-child {
                opacity: 0;
                transform: translateX(12px);
              }
            }
          }
        }

        span {
          &:first-child {
            opacity: 0;
            margin-right: 10px;
            margin-left: 0;
            transform: translateX(-4px);
          }
          &:last-child {
            margin-left: 4px;
          }
        }
      }
    }
  }
`;

export const DesignPr = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 80px 0;
  background: var(--cr-blue-1);

  .container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      flex-direction: column;

      h2 {
        color: var(--cr-white);
      }

      .sectionEye {
        opacity: 0.4;
        color: var(--cr-white);
      }

      .sectionDes {
        margin-top: -60px;
        color: var(--cr-white);
        opacity: 0.7;
      }
    }

    .right {
      display: grid;
      grid-template-rows: 2fr;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 20px;
      grid-column-gap: 20px;

      .design-card {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 40px;
        border-radius: var(--radius-16);
        /* background: var(--cr-white); */
        transition: var(--ease-1);
        overflow: hidden;

        img {
          &:last-child {
            position: absolute;
            bottom: -40px;
            transform: scale(0.9);
            opacity: 0;
            align-self: center;
          }
        }

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          display: block;
          width: 100%;
          height: 100%;
          background: transparent;
          transform: scale(0.9);
          opacity: 0;
          transition: all 0.2s ease-out;
          transform-origin: top;
          border-radius: var(--radius-16);
        }

        &:hover {
          h5 {
            color: var(--cr-blue-1);
            transform: translateY(-130px);
          }
          p {
            color: var(--cr-font-2);
            transform: translateY(-136px);
          }
          &::after {
            background: var(--cr-white);
            opacity: 1;
            transform: scale(1);
          }

          img {
            &:first-child {
              transform: translateY(-100%);
              opacity: 0;
            }

            &:last-child {
              opacity: 1;
              transform: translateY(-47%) scale(1.4);
            }
          }
        }
      }

      h5 {
        font: var(--font-28);
        color: var(--cr-white);
        margin-bottom: var(--mg-16);
        transition: var(--ease-2);
      }

      p {
        font: var(--font-16-300);
        color: var(--cr-white);
        opacity: 0.7;
        transition: var(--ease-2);
      }

      img {
        width: 120px;
        margin-bottom: var(--mg-24);
        transition: var(--ease-2);
      }
    }
  }
`;

export const Comp = styled.section`
  width: 100vw;
  height: 160vh;
  padding: 160px 0 0 0;
  background: var(--cr-white);
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  .title {
    text-align: center;
    margin-bottom: var(--mg-60);
    /* margin-top */
  }

  .window {
    position: relative;
    width: 100%;
    max-width: 1200px;
    border-radius: var(--radius-32);
    overflow: hidden;
    box-shadow: 0 0 0 16px rgba(147, 157, 168, 0.1);

    span {
      position: absolute;
      display: inline-block;
      width: 110%;
      height: 110%;
      background: #eaeaea;
      mix-blend-mode: difference;
      top: -110%;
    }

    img {
      width: 100%;
    }
  }
`;
