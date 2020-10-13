import styled from "styled-components";

export const Container = styled.main`
  /* max-width: 1200px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .col {
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }
  }

  .col-1 {
    max-width: 440px;
    height: 1159px;
    width: 100%;
  }
  .col-2 {
    max-width: 282px;
    width: 100%;
    height: 1384px;
  }
  .col-3 {
    max-width: 318px;
    width: 100%;
    height: 1234px;
    margin-top: 75px;
  }
  .col-4 {
    max-width: 480px;
    width: 100%;
    height: 1340px;
    margin-top: 22px;
  }

  .split-parent {
    overflow: hidden;
  }

  #comp-card {
    mix-blend-mode: difference;
    width: 366px;
    position: absolute;
  }

  .window-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }

  #cover {
    z-index: 2;
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: hsl(0 0% 88% / 1);
    mix-blend-mode: exclusion;
    top: -118%;
  }

  .block {
    height: 300vh;
  }

  .search-hide {
    z-index: -1;
    opacity: 0;
    transform: translateY(0) scale3d(1.25, 1.25, 1.25);
  }

  .search-show {
    z-index: 9999;
    opacity: 1;
    transform: translateY(0) scale3d(1, 1, 1);
    filter: blur(0) !important;
  }

  #search-modal {
    position: fixed;
    top: 25vh;
    width: 700px;
    transition: var(--ease-3);
    transition-duration: 0.3s !important;
    transform-origin: bottom;
    will-change: transform;
    filter: blur(60px);
  }

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
    display: none !important;
    z-index: 999;
    position: fixed;
    display: inline-flex;
    background: rgb(255 255 255 / 0.88);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
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
      /* margin-right: 24px; */

      &:nth-of-type(1) {
        margin-right: 28px;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    i {
      display: inline-grid;
    }

    .icon {
      position: relative;
      padding: 8px;
      border-radius: var(--radius-6);
      cursor: pointer;
      margin-right: 20px;

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
      &:nth-of-type(3),
      &:nth-of-type(4) {
        a {
          transition: var(--ease-2) !important;

          svg path {
            transition: var(--ease-2);
          }
        }

        &:hover {
          a {
            color: var(--cr-white);
            background: var(--cr-blue-1) !important;
            svg path {
              fill: white;
            }
          }
        }
      }

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
        box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.04),
          0px 100px 80px rgba(122, 124, 131, 0.09),
          0px 41.7776px 33.4221px rgba(122, 124, 131, 0.0673083),
          0px 22.3363px 17.869px rgba(122, 124, 131, 0.0590076),
          0px 12.5216px 10.0172px rgba(122, 124, 131, 0.0526212),
          0px 6.6501px 5.32008px rgba(122, 124, 131, 0.0453961),
          0px 2.76726px 2.21381px rgba(122, 124, 131, 0.0341191);

        h4 {
          color: var(--cr-blue-1);
        }

        &::after {
          /* opacity: 1; */
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
  padding: 40px 0;
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
          transition: all 0.3s ease-out;
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
        transition: var(--ease-1);
      }

      p {
        font: var(--font-16-300);
        color: var(--cr-white);
        opacity: 0.7;
        transition: var(--ease-1);
      }

      img {
        width: 120px;
        margin-bottom: var(--mg-24);
        transition: var(--ease-1);
      }
    }
  }
`;

export const Comp = styled.section`
  position: relative;
  width: 100vw;
  height: 160vh;
  padding: 160px 0 0 0;
  background: var(--cr-white);
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  overflow: hidden;

  .sectionDes {
    max-width: 600px;
    text-align: center;
    margin-top: -60px;
    margin-bottom: var(--mg-120);
  }

  .title {
    text-align: center;
    margin-bottom: var(--mg-60);
    /* margin-top */
  }

  .window {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 770px;
    max-width: 1200px;
    border-radius: var(--radius-32);
    overflow: hidden;
    box-shadow: 0 0 0 16px rgb(41 50 60 / 10%);
    background: var(--cr-bg-1);

    img {
      width: 100%;
    }
  }
`;

export const GetStarted = styled.section`
  padding: 0 0 160px 0;
  max-width: 1200px;

  .title {
    text-align: center;
  }

  strong {
    color: var(--cr-blue-1);
  }

  .card-wrap {
    width: 100vw;
    max-width: 1200px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 24px;
    grid-column-gap: 24px;

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
        box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.04),
          0px 100px 80px rgba(122, 124, 131, 0.09),
          0px 41.7776px 33.4221px rgba(122, 124, 131, 0.0673083),
          0px 22.3363px 17.869px rgba(122, 124, 131, 0.0590076),
          0px 12.5216px 10.0172px rgba(122, 124, 131, 0.0526212),
          0px 6.6501px 5.32008px rgba(122, 124, 131, 0.0453961),
          0px 2.76726px 2.21381px rgba(122, 124, 131, 0.0341191);

        h4 {
          color: var(--cr-blue-1);
        }

        a {
          color: var(--cr-white);
          background: var(--cr-blue-1) !important;
          svg path {
            fill: white;
          }
        }
      }

      .left {
        max-width: 300px;
      }

      .right {
        position: absolute;
        right: -56px;
        bottom: 0;

        img {
          width: 400px;
        }
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

        svg path {
          transition: var(--ease-2);
        }

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
          }
        }
      }
    }
  }
`;

export const Tools = styled.section`
  width: 100%;
  /* max-width: 1200px; */
  display: grid;
  justify-content: center;
  grid-template-rows: 2fr;
  grid-row-gap: 120px;
  grid-column-gap: 24px;
  padding: 160px 0;
  border-top: 1px solid var(--cr-line-1);

  .title {
    max-width: 970px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 80px;
    align-items: center;

    .left {
      width: 280px;
      justify-self: center;
    }
    .sectionTitle {
      margin-bottom: 80px;
    }
  }

  .tools-list-wrap {
    display: grid;
    max-width: 970px;
    width: 100%;
    justify-self: center;
    grid-template-rows: 2fr;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 24px;
    grid-column-gap: 80px;

    .tools-list-item {
      cursor: pointer;
      position: relative;
      padding: 40px 0;
      transition: var(--ease-1);
      border-bottom: 1px solid var(--cr-line-1);

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: var(--cr-line-1);
        position: absolute;
        bottom: 0;
        transform: scaleX(0);
        transition: var(--ease-2);
      }

      &:hover {
        h5 {
          color: var(--cr-blue-1);
          transform: translateX(2px);

          span {
            opacity: 1;
            transform: translateX(0);
          }
        }
        i {
          color: var(--cr-white);
          background: var(--cr-blue-1);
        }

        &::after {
          transform: scaleX(1);
          background: var(--cr-blue-1);
        }
      }

      h5 {
        font: var(--font-24);
        color: var(--cr-font-1);
        margin-bottom: var(--mg-16);
        transition: var(--ease-2);
        transform: translateX(-13px);

        span {
          opacity: 0;
          display: inline-table;
          position: relative;
          top: -4px;
          transition: var(--ease-2);
          transform: translateX(-8px);

          &:first-child {
            margin-right: 8px;
          }

          svg {
            transform: scale(1.6);
          }
        }
      }
      p {
        font: var(--font-16-300);
        color: var(--cr-font-2);
        transition: var(--ease-1);
      }
      i {
        position: absolute;
        right: 0;
        top: 40px;
        padding: 4px 8px;
        border-radius: var(--radius-4);
        background: var(--cr-bg-1);
        font: var(--font-12);
        color: var(--cr-font-2);
        transition: var(--ease-2);
      }
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    justify-self: center;
    padding: 13px 40px;
    font: var(--font-18);
    box-shadow: var(--shadow-1);
    background: var(--cr-white);
    border-radius: var(--radius-6);
    position: relative;
    background: var(--cr-blue-1);
    color: var(--cr-white);
    padding: 13px 40px;
    margin-top: -40px;
    transition: var(--ease-1);

    span {
      display: contents;

      svg path {
        transition: var(--ease-1);
      }
    }

    &:hover {
      background: var(--cr-font-1);

      svg {
        path {
          fill: rgb(100, 233, 242);
        }
      }
    }
  }
`;

export const Blog = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 160px 0;
  display: grid;
  justify-self: center;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 80px;

  .title {
    .sectionTitle {
      margin-bottom: 64px;
    }
  }

  a {
    font: var(--font-18);
    box-shadow: var(--shadow-1);
    background: var(--cr-white);
    border-radius: var(--radius-6);
    color: var(--cr-blue-1);
    margin-right: 20px;
    transition: var(--ease-1);
    padding: 13px 40px;
  }

  .blog-container {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    #blog-drag {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-column-gap: 24px;
      width: 300%;
    }

    .card {
      width: 440px;
      overflow: hidden;
      border-radius: var(--radius-16);
      background: var(--cr-bg-1);

      h5 {
        font: var(--font-28);
        color: var(--cr-font-1);
        margin-bottom: var(--mg-24);
      }

      p {
        font: var(--font-16-300);
        color: var(--cr-font-2);
        margin-bottom: var(--mg-40);
      }

      span {
        display: contents;

        svg {
          transform: scale(2);
          transform-origin: left;
        }
      }

      img {
        height: 200px;
      }

      .bottom {
        padding: 64px;
      }
    }
  }
`;
