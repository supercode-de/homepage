import Link from "next/link";
import React, { Component } from "react";

class Navigation extends Component {
  state = { show: true, color: "white" };
  // listenScrollEvent = e => {
  //   if (window.scrollY > 2700 && window.scrollY < 4700) {
  //     this.setState({ color: 'black' })
  //   } else if (window.scrollY > 7100 && window.scrollY < 8670) {
  //     this.setState({ color: 'black' })
  //   } else {
  //     this.setState({ color: 'white' })
  //   }
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.listenScrollEvent)
  // }
  render() {
    return (
      <nav
        id="navigation"
        style={{
          width: this.state.show ? "100%" : "5%",
        }}
      >
        <div className={`main-navigation ${this.state.show ? "hide" : "hide"}`}>
          <Link href="/">
            <a className="logo" style={{ color: "rgb(255, 255, 255)" }}>
              <img src="/img/Logo.png" alt="SuperCode-Logo" />
            </a>
          </Link>

          <ul>
            <li>
              <Link href="/kurse">
                <a>Kurse</a>
              </Link>
            </li>

            <li>
              <Link href="/workshops">
                <a>Workshops</a>
              </Link>
            </li>
            <li>
              <Link href="/#faq">
                <a>FAQ</a>
              </Link>
            </li>
            <li>
              <a onClick={this.props.toggleJetztAnmelden}>Kontakt</a>
            </li>
          </ul>

          <img
            className="menu-button"
            src="/menu-button.svg"
            alt="Menu-Button"
            onClick={this.props.toggleNavigationMobile}
          />
        </div>

        <style jsx>{`
          ul {
            list-style-type: none;
            display: flex;
            // width: 100%;
            text-transform: uppercase;
            justify-content: flex-end;
            align-items: center;
            margin-right: 2em;
          }
          li {
            padding-left: 2em;
          }
          #navigation {
            // background: #03000f;
            display: flex;
            align-items: center;
            width: 100%;
            // height: 4vmax;
            transition: width 1s;
            position: relative;
            top: 5vh;
            z-index: 999;
          }
          a {
            text-decoration: none;
            font-size: 1em;
            letter-spacing: 1.3px;
            color: #fff;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 0.4px;
            -webkit-text-stroke-color: #03000f;
            transition: color 0.5s;
            cursor: pointer;
          }
          a:visited {
            color: #fff;
          }

          a:hover {
            // text-decoration: underline;
            color: #3dd7ac;
          }
          a:active {
            color: #5d3ede;
          }

          .main-navigation {
            // background: #03000f;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            // box-sizing: border-box;
            transition: background 1s, right 1s;
            position: relative;
            padding: 0 2em;
            position: fixed;
            top: 5;
            z-index: 999;
          }

          .menu-button {
            // position: fixed;
            // right: 2.5vw;
            height: 4vmax;
            min-height: 50px;
            z-index: 99998;
            cursor: pointer;
            display: none;
          }
          .logo {
            color: #3dd7ac;
            // position: fixed;
            // left: 2.5vw;
            // padding-top: 4vh;
            // height: 4vmax;
            z-index: 99998;
          }
          .superCode-logo {
            z-index: 99998;
            cursor: pointer;
          }

          @media (max-width: 1040px) {
            .logo {
              // margin-top: -3%;
            }
          }

          @media (max-width: 768px) {
            .logo {
              // margin-top: -4.5%;
            }
            ul {
              padding-left: 0;
            }

            ul {
              display: none;
            }
            .menu-button {
              display: unset;
            }
          }

          @media (max-width: 520px) {
            .main-navigation {
              // width: unset;
            }
          }

          @media (max-width: 468px) {
            .logo {
              // display: none;
            }
            .menu-button {
              top: 7vh;
            }
            a {
              // font-size: 1.3em;
            }
            a img {
              // width: #65%;
            }
          }
          @media (max-width: 400px) {
            a img {
              // display: none;
            }
          }
          @media (max-width: 349px) {
          }
        `}</style>
      </nav>
    );
  }
}

export default Navigation;
