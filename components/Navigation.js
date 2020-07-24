import Link from "next/link";
import React, { Component } from 'react';


class Navigation extends Component {
  state = { show: true, color: 'white' }
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
      <nav id="navigation" style={{
        width: this.state.show ? "100%" : "5%"
      }}>
        <img src="/menu-button.svg" alt="Menu-Button" onClick={this.props.toggleJetztAnmelden} />
        <div className={`main-navigation ${this.state.show ? "hide" : "hide"}`}>
          <Link href="/"><a className="logo" style={{ color: '#3DD7AC' }}>super(code)</a></Link>

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
          
          
          img {
            position: fixed;
            right: 2.5vw;
            height: 4vmax;
            z-index:99998
  
          }
          .logo{
            color: #3DD7AC;
            position: fixed;
            left: 2.5vw;
            padding-top:4vh;
            height: 4vmax;
            z-index:99998
          }
          
          @media (max-width: 468px) {
            .logo{
              display:none
            }
          }
        `}</style>
      </nav>
    );
  }
}



export default Navigation;
