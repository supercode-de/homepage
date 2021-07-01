import Link from 'next/link';
import React, { Component } from 'react';

class Navigation extends Component {
  state = { show: true, color: 'white', rotateDeg: 0 };
  listenScrollEvent = () => {
    let scrollLimit =
      Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ) - document.documentElement.clientHeight;

    let numberOfRotations =
      Math.ceil(scrollLimit / document.documentElement.clientHeight / 3) * 0.5;
    let totalRotation = numberOfRotations * 360;

    this.setState({
      rotateDeg: (window.scrollY / scrollLimit) * totalRotation,
    });
    //   if (window.scrollY > 2700 && window.scrollY < 4700) {
    //     this.setState({ color: "black" });
    //   } else if (window.scrollY > 7100 && window.scrollY < 8670) {
    //     this.setState({ color: "black" });
    //   } else {
    //     this.setState({ color: "white" });
    //   }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    return (
      <nav
        id='navigation'
        style={{
          width: this.state.show ? '100%' : '5%',
        }}
      >
        <div className={`main-navigation ${this.state.show ? 'hide' : 'hide'}`}>
          <Link href='/'>
            <a className='logo'>
              <img
                src='/img/Bildungsinstitut_Logo.svg'
                alt='SuperCode-Logo'
                className='rotate'
              />

              <img src='/img/SuperCode_Logo.svg' alt='SuperCode-Logo' />
            </a>
          </Link>
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
            padding-left: 0;
          }
          li {
            padding-left: 2em;
          }
          #navigation {
            // background: var(--super-black);
            display: flex;
            align-items: center;
            width: 100%;
            // height: 4vmax;
            transition: width 1s;
            position: relative;
            top: 40px;
            z-index: 999;
          }
          .logo {
            position: relative;
            height: 80px;
          }
          .logo img {
            height: 80px;
            width: 80px;
          }
          .logo .rotate {
            transform: rotate(${this.state.rotateDeg}deg);
          }

          .logo > img {
            position: absolute;
            top: 1px;
            left: -1px;
          }

          a {
            text-decoration: none;
            font-size: 1em;
            letter-spacing: 1.3px;
            color: #fff;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 0.4px;
            -webkit-text-stroke-color: var(--super-black);
            transition: color 0.5s;
            cursor: pointer;
          }
          a:visited {
            color: #fff;
          }

          a:hover {
            // text-decoration: underline;
            color: #var(--super-green);
          }
          a:active {
            color: var(--super-lila);
          }

          .main-navigation {
            // background: var(--super-black);
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            // box-sizing: border-box;
            transition: background 1s, right 1s;
            position: relative;
            padding: 0 25px;
            position: fixed;
            top: 5;
            z-index: 99;
          }
          .nav-list {
            display: ${window.scrollY > 0 ||
            document.documentElement.clientWidth < 768
              ? 'none'
              : 'flex'};
          }

          .logo {
            color: var(--super-green);
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
          }

          @media (max-width: 768px) {
          }

          @media (max-width: 520px) {
          }

          @media (max-width: 468px) {
          }
          @media (max-width: 400px) {
          }
          @media (max-width: 349px) {
          }
        `}</style>
      </nav>
    );
  }
}

export default Navigation;
