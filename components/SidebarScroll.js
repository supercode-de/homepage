import Link from "next/link";
import React, { Component } from "react";

class SidebarScroll extends Component {
  state = { show: true, color: "white", sidebarHeight: 0 };
  listenScrollEvent = () => {
    let scrollLimit =
      Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ) - document.documentElement.clientHeight;

    this.setState({
      sidebarHeight: (window.scrollY / scrollLimit) * 100,
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
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <>
        <aside className="sidebar"></aside>

        <style jsx>{`
          .sidebar {
            background: #3dd7ac
            position: relative;
            top: 0;
            left: 0;
            width: 20px;
            height: ${this.state.sidebarHeight}vh
          }
        `}</style>
      </>
    );
  }
}

export default SidebarScroll;
