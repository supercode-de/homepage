import Link from 'next/link';
import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      color: 'white',
      rotateDeg: 0,
      showDropDown: false,
    };
    // this.wrapperRef = React.createRef();
    // this.setWrapperRef = this.setWrapperRef.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

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
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  // componentDidMount() {
  //   document.addEventListener('mousedown', this.handleClickOutside);
  // }
  handleClickOutside(event) {
    // if (event.target.id !== 'dropper') {
    //   this.setState((currentState) => {
    //     return { showDropDown: false };
    //   });
    // }
    if (event.target.id !== 'dropper' && !this.state.showDropDown) {
      this.setState((currentState) => {
        return { showDropDown: false };
      });
    }
  }

  handleDropdown() {
    if (this.state.showDropDown) {
      this.setState(
        // (prev) => (
        {
          showDropDown: false,
        }
        //   console.log(this.state.showDropDown)
        // )
      );
    } else {
      this.setState(
        // (prev) => (
        {
          showDropDown: true,
        }
        //   console.log(this.state.showDropDown)
        // )
      );
    }
  }

  render() {
    const { dropdownColor } = this.props;

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

          <ul className='nav-list'>
            <li
              className='kurse-link'
              // onMouseOver={() => this.setState({ showArrow: true })}
              // onMouseOut={() => this.setState({ showArrow: false })}
              // onClick={this.handleDropdown}
            >
              {/* <Link href='/kurse'> */}
              <a
                // className={this.state.showDropDown ? 'dropper' : null}
                onClick={this.handleDropdown}
              >
                Kurse
              </a>
              {/* </Link> */}

              <div
                className={
                  this.state.showDropDown
                    ? 'arrowWrapperNoAnimation'
                    : 'arrowWrapper'
                }
              >
                <img src='/img/navArrow.svg' alt='' />
              </div>

              <div
                // className='kurseList'
                ref={this.wrapperRef}
                id='dropper'
                className={
                  this.state.showDropDown ? 'kurseList-open ' : 'kurseList '
                }
              >
                <Link href='/fullstack'>
                  <a id='dropper'>Fullstack Developer</a>
                </Link>
                <Link href='/frontend'>
                  <a id='dropper'>Front-End Developer</a>
                </Link>
                <Link href='/uxui'>
                  <a id='dropper'>UX & UI Designer</a>
                </Link>
              </div>
            </li>

            <li>
              <Link href='/workshops'>
                <a>Workshops</a>
              </Link>
            </li>

            <li>
              <Link href='/team'>
                <a>Team</a>
              </Link>
            </li>

            <li>
              <Link href='/#faq'>
                <a>FAQ</a>
              </Link>
            </li>
            <li>
              <a onClick={this.props.toggleJetztAnmelden}>Kontakt</a>
            </li>
            <li>
              <Link href='/#blog'>
                <a>Blog</a>
              </Link>
            </li>
          </ul>

          <img
            className='menu-button'
            src='/menu-button.svg'
            alt='Menu-Button'
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

          .arrowWrapper img {
            width: 100%;
          }
          // .kurse-link {
          //   position: relative;
          // }
          .kurse-link:hover > .arrowWrapper {
            position: absolute;
            display: block;
            width: 40px;
            left: 60vw;
            cursor: pointer;
            z-index: 10;

            padding-left: 29px;
            // animation: bounce 1.2s infinite;
          }
          .arrowWrapper {
            position: relative;

            z-index: 10;
            display: none;
            width: 100%;
            padding-left: 29px;
            // animation: bounce 1.2s infinite;
          }
          // .arrowWrapper:hover {
          //   display: block;
          //   width: 100%;
          //   cursor: pointer;
          //   padding-left: 20px;
          //   animation: bounce 2s infinite;
          // }
          .arrowWrapperNoAnimation {
            position: absolute;
            display: block;

            padding-left: 29px;
            width: 40px;
            left: 60vw;
          }
          .arrowWrapperNoAnimation img {
            width: 100%;
          }

          .kurse-link:hover > .arrowWrapper {
            display: block;
          }

          .kurseList-open {
            position: absolute;
            top: 80px;
            height: 56px;
            font-size: 1.2rem;

            opacity: 1;
            display: flex;
            text-transform: none;
            justify-content: space-around;
            align-items: center;
            padding-top: 2px;
            background: ${this.props.dropdownColor
              ? dropdownColor
              : 'var(--super-green)'};
            width: 100vw;
            padding-left: 11%;
            padding-right: 11%;
            left: 0;

            transition: height 0.4s, opacity 0.3s;
          }

          .kurseList {
            position: absolute;
            top: 80px;
            height: 0px;
            font-size: 1.2rem;

            opacity: 0;
            display: flex;
            text-transform: none;
            justify-content: space-around;
            align-items: center;
            padding-top: 2px;
            background: ${this.props.dropdownColor
              ? dropdownColor
              : 'var(--super-green)'};
            width: 100vw;
            padding-left: 11%;
            padding-right: 11%;
            left: 0;

            transition: height 0.4s, opacity 0.6s;
          }

          .kurseList-open a {
            -webkit-text-stroke-width: 1.5px;
            -webkit-text-stroke-color: #fff;
            font-size: 0.9em;
          }
          .kurseList {
            pointer-events: none;
          }

          .kurseList-open a:hover {
            text-decoration: underline;
            text-decoration-thickness: 3px;
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
            color: rgb(255, 255, 255);
            letter-spacing: 2px;
            -webkit-text-stroke-width: ${this.props.navstroke
              ? this.props.navstroke
              : '0.4px'};
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
          .menu-button {
            // position: fixed;
            // right: 2.5vw;
            height: 4vmax;
            min-height: 50px;
            z-index: 99998;
            cursor: pointer;
            display: ${window.scrollY > 0 ||
            document.documentElement.clientWidth < 768
              ? 'unset'
              : 'none'};
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
          @keyframes bounce {
            0%,
            20%,
            50%,
            80%,
            100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-30px);
            }
            60% {
              transform: translateY(-15px);
            }
          }
        `}</style>
      </nav>
    );
  }
}

export default Navigation;
