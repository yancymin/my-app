import styled from "styled-components";

export const Container = styled.main`
  max-width: 1200px;
  width: 100%;

  .btn-white {
    &:hover {
      box-shadow: var(--shadow-2) !important;
    }
  }
`;

export const Nav = styled.nav`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  animation: navShow 0.6s ease-out forwards 0.5s;
  transform: translateY(-10%);
  opacity: 0;

  @keyframes navShow {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .nav-wrap {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
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
      animation: navItemShow 0.5s ease-out forwards;
      transform: translateX(-40%);
      opacity: 0;

      @keyframes navItemShow {
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      &:nth-of-type(1) {
        animation-delay: 0.7s;
      }
      &:nth-of-type(2) {
        animation-delay: 0.75s;
      }
      &:nth-of-type(3) {
        animation-delay: 0.8s;
      }
      &:nth-of-type(4) {
        animation-delay: 0.85s;
      }
      &:nth-of-type(5) {
        animation-delay: 0.9s;
      }

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
        background: var(--cr-bg-1);
        opacity: 0;
        transform: scale(0.7);
        z-index: -1;
        border-radius: var(--radius-6);
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
          background-color: var(--cr-bg-3);
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
  height: 88vh;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  section {
    position: absolute;
    left: 0;
    width: 50vw;
    height: 88vh;

    picture {
      height: 62%;

      img {
        position: absolute;
        width: 48vw;
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
      transform-origin: bottom;
      opacity: 0;

      @keyframes heroBgShow {
        from {
          transform: scale3d(1, 0, 1);
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
    right: -6vw;
    left: unset;

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

          /* span {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            right: 6px;
            top: 5px;
            border-radius: var(--radius-4);
            background: var(--cr-white);
          } */
        }
      }
    }
  }
`;
