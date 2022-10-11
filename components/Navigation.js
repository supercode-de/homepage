import Link from 'next/link';
import React, { Component } from 'react';
// import SignetRotateAnimation from './small/SignetRotateAnimation';

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
          <Link href='/' passHref>
            <a className='logo'>
              <img
                src='/img/sc_logo2022.svg'
                alt='SuperCode-Logo'
                className='rotate'
              />
              <img src='/img/c_2022.svg' alt='SuperCode-Logo' id="supercodeC" />
              <img id="supercodeLogo2022" src="/img/supercode_logo_2022.svg" alt="supercode logo" />
            </a>
          </Link>

          <ul className='nav-list'>
            <li className='kurse-link'>
              <a
                onClick={this.handleDropdown}
                className='dropper dropper_workshop'
              >
                Bootcamps
              </a>
              <div
                ref={this.wrapperRef}
                className={
                  this.state.showDropDown
                    ? 'kurseList-open dropper dropper_workshop'
                    : 'kurseList '
                }
              >
                <Link href='/kurse/fullstack' passHref>
                  <a id='dropper' className='dropper dropper_workshop'>
                    Fullstack Development
                  </a>
                </Link>
                <Link href='/kurse/frontend' passHref>
                  <a id='dropper' className='dropper dropper_workshop'>
                    Front-End Development
                  </a>
                </Link>
                <Link href='/kurse/ux-ui-kurs' passHref>
                  <a id='dropper' className='dropper dropper_workshop'>
                    UX/UI–Design
                  </a>
                </Link>
              </div>
            </li>

            {/* <li className='workshops-link'>
              <a
                onClick={this.handleDropdownWorkshops}
                className='dropper_workshop dropper'
              >
                Workshops
              </a>

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
                <Link href='/workshops' passHref>
                  <a id='dropper' className='dropper dropper_workshop '>
                    Kostenloser HTML & CSS Workshop
                  </a>
                </Link>
                <Link href='/workshops' passHref>
                  <a className='dropper_workshop dropper'>
                    Kostenloser UX & UI-Design Workshop
                  </a>
                </Link>
              </div>
            </li> */}
            <li>
              <Link href="/microcamps/" passHref>
                <a>MicroCamps</a>
              </Link>
            </li>
            <li>
              <Link href='/team' passHref>
                <a>Team</a>
              </Link>
            </li>
            <li>
              <Link href="/microcamps/unsere-story" passHref>
                <a>Unsere Story</a>
              </Link>
            </li>
            <li>
              <Link href='/#faq' passHref>
                <a>FAQ</a>
              </Link>
            </li>
            <li>
              <a onClick={this.props.toggleJetztAnmelden}>Kontakt</a>
            </li>
            <li>
              <Link href='/blog' passHref>
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
            text-transform: uppercase;
            justify-content: flex-end;
            align-items: center;
            margin-right: 2em;
            padding-left: 0;
          }

          li {
            padding-left: 2em;
          }
          a {
            text-decoration: none;
            font-size: 1em;
            letter-spacing: 1.3px;
            color: var(--super-white);
            letter-spacing: 2px;
            transition: color 0.5s;
            cursor: pointer;
          }
          a:visited {
            color: var(--super-white);
          }

          a:hover {
            color: #var(--super-green);
          }
          a:active {
            color: var(--super-lila);
          }

          #navigation {
            display: flex;
            align-items: center;
            width: 100%;
            transition: width 1s;
            position: relative;
            top: 40px;
            z-index: 2;
          }
          .main-navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            transition: background 1s, right 1s;
            position: relative;
            padding: 0 25px;
            position: fixed;
            top: 5;
            z-index: 99;
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
          #supercodeLogo2022 {
            left: 80px;
            width: 166px;
            display: ${window.scrollY > 0 ? 'none' : 'block'};
          }

          #supercodeC {
            width: 25px;
            left: 27px;
          }
          .nav-list {
            display: ${window.scrollY > 0 ||
            document.documentElement.clientWidth <= 1140
            ? 'none'
            : 'flex'};
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
          .kurseList {
            pointer-events: none;
          }
          .kurseList-open a:hover {
            text-decoration: underline;
            text-decoration-thickness: 3px;
          }
          .menu-button {
            height: 4vmax;
            min-height: 50px;
            z-index: 99998;
            cursor: pointer;
            display: ${window.scrollY > 0 ||
            document.documentElement.clientWidth <= 1140
            ? 'unset'
            : 'none'};
          }

          @media (max-width: 320px) {
            #supercodeLogo2022 {
              width: 130px;
            }
          }
        `}</style>
      </nav>
    );
  }
}

export default Navigation;
