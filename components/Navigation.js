import Link from "next/link";
import React, { Component } from 'react';


class Navigation extends Component {
  state = { show: true, color: 'white' }
  listenScrollEvent = e => {
    if (window.scrollY > 2700) {
      this.setState({ color: 'black' })
    } else {
      this.setState({ color: 'white' })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  render() {
    return (
      <nav id="navigation" style={{
        width: this.state.show ? "100%" : "5%"
      }}>
        <img src="/menu-button.svg" alt="Menu-Button" />
        <div className={`main-navigation ${this.state.show ? "show" : "hide"}`}>
          <Link href="/"><a className="logo" style={{ color: this.state.color }}>super(code)</a></Link>

          <ul>
            <li>
              <Link href="/kurse"><a>Kurse</a></Link>
            </li>
            <li>
              <Link href="/workshops"><a>Workshops</a></Link>
            </li>
            {/* <li>
              <Link href="/finfanzierung"><a>finfanzierung</a></Link>
            </li>
            <li>
              <Link href="/team"><a>team</a></Link>
            </li>
            <li>
              <Link href="/outcomes"><a>outcomes</a></Link>
            </li> */}
            <li>
              <Link href="/#faq"><a>faq</a></Link>
            </li>
          </ul>


        </div>

        <style jsx>{`
        
          ul {
            list-style-type: none;
            display: flex;
            width:100%;
            text-transform: uppercase;
            justify-content:flex-end;
          }
          li {
            padding-left: 2em;
          }
          #navigation {
              background:#03000F;
  
              display: flex;
              
              width: 100%;
              height: 4vmax;
              transition: width 1s;
          }
          a {
              color: #fff;
              text-decoration: none;
              font-size: 0.8em;
              letter-spacing:1.3px
          }
          a:visited {
          color: #fff;
          }
            
          a:hover {
              text-decoration: underline;
              color: #3DD7AC;
          }
          a:active {
              color: #5D3EDE;
          }
          
          .main-navigation {
            background:#03000F;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 92%;
            transition: background 1s, right 1s;
            position: relative;
            padding: 0 2em;
          }
          .main-navigation.show {
            right: 0;
          }
          .main-navigation.hide {
            right: -100vw;
          }
          img {
            position: fixed;
            right: 2.5vw;
            height: 4vmax;
            z-index:88888899
  
          }
          .logo{
            position: fixed;
            left: 2.5vw;
            top:60px;
            height: 4vmax;
            z-index:88888899
          }
          @media (max-width: 1200px) {
            .main-navigation {
              height: fit-content;
              top: 7vh;
              width: 70%;
              flex-direction: column;
              justify-content: flex-start;
            }
            .main-navigation.show {
              right: -30%;
            }
            ul {
              display: block;
              padding: 0;
              margin: 0;
              text-align: center;
            }
            a {
              display: block;
            }
            li {
              margin: 5vh 0;
              padding: 0;
            }
            .logo {
              margin-top: 5vh;
            }
          }
        `}</style>
      </nav>
    );
  }
}



export default Navigation;
