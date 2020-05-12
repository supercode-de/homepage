import React, { useState, useEffect } from 'react';
import { useWindowSize } from './functions/windowSize'

const UnserCampus = (props) => {
  // const width = useWindowSize().width / 12
  // console.log(width)
  return (
    <div id="unser-campus">
      <span className="aside">lerne programmieren</span>
      {/* <img className="img-one" src="https://unsplash.it/300/200" alt="" /> */}
      <div className="text-one">
        <h1>
          Unser Campus <br /> ist <span>mehr</span>
        </h1>
        <p>Unsere Schule befindet sich im Super7000. Auf über 1.000 qm arbeiten mehr als 50 Unternehmen in offenen Büros und in Teambüros inklusive Telefonzellen, Meetingräumen, Bällebad und der legendären Eventfläche auf echtem Kunstrasen für Workshops, Meet-Ups & Co. Wir nutzen dieses einzigartige Umfeld, um Dich noch schneller in passende Jobs zu vermitteln.</p>
        <p className="hash-tag">#superwinwin</p>
      </div>
      <img className="img-two" src="https://unsplash.it/300/202" alt="" />
      <img className="img-three" src="https://unsplash.it/302/200" alt="" />
      <img className="img-four" src="https://unsplash.it/305/200" alt="" />
      <img className="img-five" src="https://unsplash.it/300/206" alt="" />
      <div className="text-two">
        <p>SuperCode bietet ein arbeitsmarktlich aussichtsreiches und praxisnahes Bildungsangebot im IT-Bereich mit methodisch modernen und hohem Einsatz von Lehrpersonal. Hervorzuheben ist die hervorragende Branchenvernetzung sowie die innovative Praxiskompetenz der Geschäftsführung und des Teams.</p>
        <p className="hash-tag"># Certqua Bonn</p>
      </div>
      <img className="img-six" src="https://unsplash.it/300/200" alt="" />
      <style jsx>{`
                #unser-campus {
                    position: relative;
                    background-color: #fff;
                    background-image:
                      linear-gradient(
                        to right,
                        rgba(255, 0, 0, 0.25) 0,
                        rgba(255, 0, 0, 0.25) 1px,
                        transparent 1px,
                        transparent 100%
                      ),
                      linear-gradient(
                        to bottom,
                        rgba(255, 0, 0, 0.25) 0,
                        rgba(255, 0, 0, 0.25) 1px,
                        transparent 1px,
                        transparent 100%
                      )
                    ;
                    background-position: 0 0, 0 0;
                    background-size: ${props.width}px ${props.width}px;
                  }
                  img {
                      width: ${3 * props.width}px
                  }
                  .text-one {
                    padding-top: ${props.width}px;
                  }
                  h1, p, .text-two {
                    color: #3DD7AC;
                    width: ${props.width * 3}px
                  }
                  h1 span {
                    color: transparent;
                    letter-spacing: 3px;
                    -webkit-text-stroke-width: 1.5px;
                    -webkit-text-stroke-color: #3DD7AC;
                  }
                  h1 {
                      font-size: 5em;
                  }
                  .hash-tag {
                    color: #5D3EDE;
                  }
                  .img-one {
                      margin-left: ${props.width}px
                  }
                  .img-two {
                    margin-left: ${props.width * 9}px;
                    margin-top: -${2 * props.width}px
                  }
                  .img-three {
                    margin-left: ${props.width * 3}px;
                    margin-top: ${props.width * .5}px;
                  }
                  .img-four {
                    margin-left: ${props.width * 8}px;
                    margin-top: -${1.5 * props.width}px
                  }
                  .img-five {
                    margin-top: ${props.width}px;
                  }
                  .img-six {
                    margin-left: ${props.width * 7}px;
                    margin-top: ${props.width}px
                  }
                  .text-one, .text-two {
                      margin-left: ${props.width * 5}px;
                      margin-top: -${.5 * props.width}px
                  }
                  .aside {
                    position: absolute;
                    transform: rotate(-90deg);
                    transform-origin: left;
                    left: 1%;
                    top: 30%;
                    text-transform: uppercase;
                  }
                  .text-two {
                    margin-top: ${-1.5 * props.width}px
                  }
            `}</style>
    </div>
  );
}

export default UnserCampus;