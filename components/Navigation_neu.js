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
      showDropDown_workshops: false,
    };

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClickOutsideWorkshops =
      this.handleClickOutsideWorkshops.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleDropdownWorkshops = this.handleDropdownWorkshops.bind(this);
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
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    // if (event.target.id !== 'dropper' && !this.state.showDropDown) {
    if (
      !event.target.classList.contains('dropper') ||
      (!event.target.classList.contains('dropper_workshop') &&
        this.state.showDropDown)
    ) {
      this.setState((currentState) => {
        return { showDropDown: false, showDropDown_workshops: false };
      });
    }
  }
  handleClickOutsideWorkshops(event) {
    // if (
    //   event.target.id !== 'dropper_workshop' &&
    //   !this.state.showDropDown_workshops
    if (
      !event.target.classList.contains('dropper') ||
      (!event.target.classList.contains('dropper_workshop') &&
        this.state.showDropDown_workshops)
    ) {
      this.setState((currentState) => {
        return { showDropDown_workshops: false };
      });
    }
  }

  handleDropdown() {
    if (this.state.showDropDown) {
      this.setState({
        showDropDown: false,
      });
    } else {
      this.setState({
        showDropDown: true,
        showDropDown_workshops: false,
      });
    }
  }
  handleDropdownWorkshops() {
    if (this.state.showDropDown_workshops) {
      this.setState({
        showDropDown_workshops: false,
      });
    } else {
      this.setState({
        showDropDown_workshops: true,
        showDropDown: false,
      });
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
            <li className='kurse-link'>
              <a
                onClick={this.handleDropdown}
                className='jo bla dropper dropper_workshop'
              >
                Kurse
              </a>
              {/* Arrow für das Dropdown */}
              {/* <div
                className={
                  this.state.showDropDown
                    ? 'arrowWrapperNoAnimation'
                    : 'arrowWrapper'
                }
              >
                <img src='/img/navArrow.svg' alt='' />
              </div> */}

              <div
                // className='kurseList'
                ref={this.wrapperRef}
                // id='dropper'
                className={
                  this.state.showDropDown
                    ? 'kurseList-open dropper dropper_workshop'
                    : 'kurseList '
                }
              >
                <Link href='/kurse/fullstack'>
                  <a id='dropper' className='dropper dropper_workshop'>
                    Fullstack Development
                  </a>
                </Link>
                <Link href='/kurse/frontend'>
                  <a id='dropper' className='dropper dropper_workshop'>
                    Front-End Development
                  </a>
                </Link>
                {/* <Link href='/kurse/uxui'>
                  <a id='dropper' className='dropper dropper_workshop'>
                    UX & UI Design
                  </a>
                </Link> */}
              </div>
            </li>

            <li className='workshops-link'>
              <a
                onClick={this.handleDropdownWorkshops}
                className='dropper_workshop dropper'
              >
                Workshops
              </a>
              {/* Arrow für das Dropdown */}
              {/* <div
                className={
                  this.state.showDropDown_workshops
                    ? 'arrowWrapperNoAnimation_workshops'
                    : 'arrowWrapper_workshops'
                }
              >
                <img src='/img/navArrow.svg' alt='' />
              </div> */}

              <div
                // className='kurseList'
                ref={this.wrapperRef}
                id='dropper_workshop'
                className={
                  this.state.showDropDown_workshops
                    ? 'kurseList-open dropper dropper_workshop'
                    : 'kurseList '
                }
              >
                <Link href='/workshops'>
                  <a id='dropper' className='dropper dropper_workshop '>
                    Kostenloser HTML & CSS Workshop
                  </a>
                </Link>
                <Link href='/workshops'>
                  <a className='dropper_workshop dropper'>
                    Kostenloser UX & UI-Design Workshop
                  </a>
                </Link>
              </div>
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
              <Link href='/blogs'>
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
        .dropper_workshop:hover{
          text-decoration: underline;
          text-decoration-color: white;
        }
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
          .arrowWrapper_workshops img {
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
            right: 40vw;
            cursor: pointer;
            z-index: 10;

            padding-left: 29px;
            // animation: bounce 1.2s infinite;
          }
          .workshops-link:hover > .arrowWrapper_workshops {
            position: absolute;
            display: block;
            width: 40px;
            // left: 70vw;
            // right: 40vw;
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

          .arrowWrapperNoAnimation {
            position: absolute;
            display: block;

            padding-left: 29px;
            width: 40px;
            left: 60vw;
            right: 40vw;
          }
          .arrowWrapperNoAnimation img {
            width: 100%;
          }
          .arrowWrapper_workshops {
            position: relative;

            z-index: 10;
            display: none;
            width: 100%;
            padding-left: 29px;
            // animation: bounce 1.2s infinite;
          }

          .arrowWrapperNoAnimation_workshops {
            position: absolute;
            display: block;

            padding-left: 29px;
            width: 40px;
            // left: 70vw;
            // right: 40vw;
          }
          .arrowWrapperNoAnimation_workshops img {
            width: 100%;
          }

          .kurse-link:hover > .arrowWrapper {
            display: block;
          }
          // .workshops-link:hover > .arrowWrapper_workshops {
          //   display: block;
          // }

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
          @media (max-width: 2170px) {
            .kurse-link:hover > .arrowWrapper {
              left: 71%;
            }
            .arrowWrapperNoAnimation {
              left: 71%;
            }

            .workshops-link:hover > .arrowWrapper_workshops {
              left: 76.7%;
            }

            .arrowWrapperNoAnimation_workshops {
              left: 76.7%;
            }
          }
          @media (max-width: 2070px) {
            .kurse-link:hover > .arrowWrapper {
              left: 70%;
            }
            .arrowWrapperNoAnimation {
              left: 70%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 75.7%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 75.7%;
            }
          }
          @media (max-width: 2020px) {
            .kurse-link:hover > .arrowWrapper {
              left: 69.2%;
            }
            .arrowWrapperNoAnimation {
              left: 69.2%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 74.9%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 74.9%;
            }
          }
          @media (max-width: 1970px) {
            .kurse-link:hover > .arrowWrapper {
              left: 68.2%;
            }
            .arrowWrapperNoAnimation {
              left: 68.2%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 73.9%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 73.9%;
            }
          }

          @media (max-width: 1920px) {
            .kurse-link:hover > .arrowWrapper {
              left: 67.2%;
            }
            .arrowWrapperNoAnimation {
              left: 67.2%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 73.8%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 73.8%;
            }
          }
          @media (max-width: 1870px) {
            .kurse-link:hover > .arrowWrapper {
              left: 66.2%;
            }
            .arrowWrapperNoAnimation {
              left: 66.2%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 72.8%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 72.8%;
            }
          }
          @media (max-width: 1820px) {
            .kurse-link:hover > .arrowWrapper {
              left: 65.2%;
            }
            .arrowWrapperNoAnimation {
              left: 65.2%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 72.4%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 72.4%;
            }
          }
          @media (max-width: 1770px) {
            .kurse-link:hover > .arrowWrapper {
              left: 64.2%;
            }
            .arrowWrapperNoAnimation {
              left: 64.2%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 71.4%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 71.4%;
            }
          }
          @media (max-width: 1720px) {
            .kurse-link:hover > .arrowWrapper {
              left: 63.2%;
            }
            .arrowWrapperNoAnimation {
              left: 63.2%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 70.4%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 70.4%;
            }
          }
          @media (max-width: 1670px) {
            .kurse-link:hover > .arrowWrapper {
              left: 62.2%;
            }
            .arrowWrapperNoAnimation {
              left: 62.2%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 69.4%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 69.4%;
            }
          }
          @media (max-width: 1620px) {
            .kurse-link:hover > .arrowWrapper {
              left: 61.2%;
            }
            .arrowWrapperNoAnimation {
              left: 61.2%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 68.5%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 68.5%;
            }
          }
          @media (max-width: 1570px) {
            .kurse-link:hover > .arrowWrapper {
              left: 60.2%;
            }
            .arrowWrapperNoAnimation {
              left: 60.2%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 67.4%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 67.4%;
            }
          }
          @media (max-width: 1520px) {
            .kurse-link:hover > .arrowWrapper {
              left: 58.8%;
            }
            .arrowWrapperNoAnimation {
              left: 58.8%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 67%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 67%;
            }
          }
          @media (max-width: 1470px) {
            .kurse-link:hover > .arrowWrapper {
              left: 57%;
            }
            .arrowWrapperNoAnimation {
              left: 57%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 65.2%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 65.2%;
            }
          }

          @media (max-width: 1450px) {
            .kurse-link:hover > .arrowWrapper {
              left: 55.5%;
            }
            .arrowWrapperNoAnimation {
              left: 55.5%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 63.7%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 63.7%;
            }
          }
          @media (max-width: 1400px) {
            .kurse-link:hover > .arrowWrapper {
              left: 55%;
            }
            .arrowWrapperNoAnimation {
              left: 55%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 63.7%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 63.7%;
            }
          }
          @media (max-width: 1350px) {
            .kurse-link:hover > .arrowWrapper {
              left: 52.9%;
            }
            .arrowWrapperNoAnimation {
              left: 52.9%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 62.2%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 62.2%;
            }
          }
          @media (max-width: 1300px) {
            .kurse-link:hover > .arrowWrapper {
              left: 51.3%;
            }
            .arrowWrapperNoAnimation {
              left: 51.3%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 60.8%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 60.8%;
            }
          }
          @media (max-width: 1250px) {
            .kurse-link:hover > .arrowWrapper {
              left: 49.9%;
            }
            .arrowWrapperNoAnimation {
              left: 49.9%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 58.9%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 58.9%;
            }
          }
          @media (max-width: 1200px) {
            .kurse-link:hover > .arrowWrapper {
              left: 47.3%;
            }
            .arrowWrapperNoAnimation {
              left: 47.3%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 57.5%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 57.5%;
            }
          }
          @media (max-width: 1150px) {
            .kurse-link:hover > .arrowWrapper {
              left: 44.7%;
            }
            .arrowWrapperNoAnimation {
              left: 44.7%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 56.3%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 56.3%;
            }
          }
          @media (max-width: 1100px) {
            .kurse-link:hover > .arrowWrapper {
              left: 42.8%;
            }
            .arrowWrapperNoAnimation {
              left: 42.8%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 54.4%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 54.4%;
            }
          }

          @media (max-width: 1075px) {
            .kurse-link:hover > .arrowWrapper {
              left: 40.9%;
            }
            .arrowWrapperNoAnimation {
              left: 40.9%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 52.4%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 52.4%;
            }
          }
          @media (max-width: 1050px) {
            .kurse-link:hover > .arrowWrapper {
              left: 39.9%;
            }
            .arrowWrapperNoAnimation {
              left: 39.9%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 52.3%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 52.3%;
            }
          }
          @media (max-width: 1025px) {
            .kurse-link:hover > .arrowWrapper {
              left: 38.6%;
            }
            .arrowWrapperNoAnimation {
              left: 38.6%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 51.1%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 51.1%;
            }
          }
          @media (max-width: 1000px) {
            .kurse-link:hover > .arrowWrapper {
              left: 36.7%;
            }
            .arrowWrapperNoAnimation {
              left: 36.7%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 49.2%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 49.2%;
            }
          }
          @media (max-width: 975px) {
            .kurse-link:hover > .arrowWrapper {
              left: 35.7%;
            }
            .arrowWrapperNoAnimation {
              left: 35.7%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 48.2%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 48.2%;
            }
          }
          @media (max-width: 950px) {
            .kurse-link:hover > .arrowWrapper {
              left: 33.7%;
            }
            .arrowWrapperNoAnimation {
              left: 33.7%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 46.2%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 46.2%;
            }
          }
          @media (max-width: 925px) {
            .kurse-link:hover > .arrowWrapper {
              left: 31.3%;
            }
            .arrowWrapperNoAnimation {
              left: 31.3%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 44.7%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 44.7%;
            }
          }
          @media (max-width: 875px) {
            .kurse-link:hover > .arrowWrapper {
              left: 28%;
            }
            .arrowWrapperNoAnimation {
              left: 28%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 43.1%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 43.1%;
            }
          }
          @media (max-width: 840px) {
            .kurse-link:hover > .arrowWrapper {
              left: 25%;
            }
            .arrowWrapperNoAnimation {
              left: 25%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 40.2%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 40.2%;
            }
          }

          @media (max-width: 781px) {
            .kurse-link:hover > .arrowWrapper {
              left: 24%;
            }
            .arrowWrapperNoAnimation {
              left: 24%;
            }
            .workshops-link:hover > .arrowWrapper_workshops {
              left: 37.3%;
            }
            .arrowWrapperNoAnimation_workshops {
              left: 37.3%;
            }
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
