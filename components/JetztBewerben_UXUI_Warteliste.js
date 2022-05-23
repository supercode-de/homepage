import React from 'react';
import HubspotForm from 'react-hubspot-form';
import { Component } from 'react/cjs/react.production.min';

class JetztBewerben_UXUI_Warteliste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }

  render() {
    return (<div>
      <button className="button-HeaderCallToAction" onClick={() => this.setState({ isHidden: false })}>Jetzt bewerben</button>
      <div
        id='jetzt-bewerben'
        className={this.state.isHidden ? 'isHidden' : 'isNotHidden'}
      >
        <button
          className='jetzt-bewerben-close'
          onClick={() => this.setState({ isHidden: true })}
        >
          &#10539;
        </button>

        <div className='jetzt-bewerben-container'>
          <div className='jetzt-bewerben-left'>
            <h1>Schön, dass du</h1>
            <h1>dich für</h1>
            <h1><span>unseren UX/UI-Design</span></h1>
            <h1><span>Kurs</span> interessierst.</h1>
            <p>Leider sind alle Termine in diesem Jahr bereits ausgebucht.</p>
            <p>Aber kein Grund zur Traurigkeit, wir werden demnächst neue Termine und neue Kursreihen im Bereich UX/UI-Design veröffentlichen. Trage dich in unserer Warteliste ein und wir informieren dich, sobald es wieder freie Plätze oder neue Termine gibt.</p>
            <p>Bei Fragen kannst du dich natürlich auch gerne per Mail oder Telefon an uns wenden: </p>
            <a href="mailto:beratung@super-code.de">beratung@super-code.de</a>
            <a href="tel:+4921178172330">0211 7817 2330</a>
          </div>
          <div className='jetzt-bewerben-right'>
            <h1>Warteliste</h1>
            <HubspotForm
              region="na1"
              portalId="5807040"
              formId="7d93ef6f-2b1c-4b2c-9a33-940a7a15ea56"
              onSubmit={() => console.log('Submit!')}
              onReady={(form) => console.log('Form ready!')}
              loading={<div>Loading...</div>}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        #jetzt-bewerben {
            position: fixed;
            padding: 20px;
            background: var(--super-black);
            top: 0;
            bottom: 0;
            // right: -100%;
            color: var(--super-green);
            transition: all 0.5s;
            width: 100%;
            overflow-y: scroll;
            z-index: 99999;
        }
          .isHidden {
            right: -100%;
          }
          .isNotHidden {
            right: 0;
          }
          .hbspt-form {
            width: 500px;
          }

          .jetzt-bewerben-container {
            padding: 50px 5%;
            // display: grid;
            // grid-template-columns: 1fr 1fr;
            // gap: 50px;
            // align-items: center;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
          }
          .button-HeaderCallToAction {
            margin: 2em 1em;
            font-family: "Fira Sans", sans-serif;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: 15px 0px;
            background: transparent;
            border: 2px solid var(--super-green);
            color: #fff;
            justify-self: center;
            display: inline-block;
            width: 38.75em;
            outline: none;
          }
          .button-HeaderCallToAction:hover {
            color: var(--super-lila);
            background: var(--super-green);
          }
          .jetzt-bewerben-close {
            top: 60px;
            right: 50px;
            cursor: pointer;
            position: absolute;
            box-shadow: none;
            border: none;
            border-radius: 0;
            padding: 0;
            margin: 0;
            color: #f0f0f0;
            background: none;
            font-weight: 300;
            font-size: 2.5em;
          }
          .jetzt-bewerben-close:hover {
            color: var(--super-green);
          }
          .jetzt-bewerben-right {
            width: 40%;
          }
          .jetzt-bewerben-left {
            width: 80%;
          }
          .jetzt-bewerben-left h1,
          .jetzt-bewerben-right h1{
            font-size: 4em;
            font-style: normal;
            font-weight: 800;
            margin: 0;
            line-height: 1em;
            letter-spacing: -1.5px;
          }
          .jetzt-bewerben-left p {
            font-size: 1.1em;
            line-height: 1.08;
            font-weight: 400;
            letter-spacing: 2px;
            margin-bottom: 14px;
            line-height: 24px;
          }
          span {
            color: transparent;
            letter-spacing: 3px;
            -webkit-text-stroke-width: 1.5px;
            -webkit-text-stroke-color: var(--super-green);
          }
          a{
              display:block;
              margin-bottom: 5px;
              color: var(--super-green);
              text-decoration: none;
          }
          a:hover{
            text-decoration: underline;
        }

    }
          @media screen and (max-width: 768px) {
            #jetzt-bewerben {
              overflow-y: scroll;
            }

            .jetzt-bewerben-left h1 {
              font-size: 3.3em;
            }
            .jetzt-bewerben-left,
            .jetzt-bewerben-right {
              width: 100%;
            }
            .jetzt-bewerben-right {
              margin-top: 50px;
            }
            
            .jetzt-bewerben-left p {
              letter-spacing: 0;
            }
            .jetzt-bewerben-container {
              padding: 5% 10%;
              display: block;
            }
            .hbspt-form {
              width: 500px;
            }

            .jetzt-bewerben-close {
              top: 60px;
              right: 20px;
              cursor: pointer;
              position: absolute;
              box-shadow: none;
              border: none;
              border-radius: 0;
              padding: 0;
              margin: 0;
              color: #f0f0f0;
              background: none;
              font-weight: 300;
              font-size: 4em;
              height: 4vmax;
              min-height: 50px;
              width: 4vmax;
              min-width: 50px;
            }
          }

          .button-HeaderCallToAction {
            width: 30em;
          }

          @media screen and (max-width: 568px) {
            .jetzt-bewerben-left h1 {
              font-size: 2.3em;
            }
            .jetzt-bewerben-container {
              padding: 10% 10%;
              display: block;
            }
            .hbspt-form {
              width: 400px;
            }
            .button-HeaderCallToAction {
              width: 100%;
            }
          }
          @media screen and (max-width: 400px) {
            .jetzt-bewerben-container {
              padding: 10% 5%;
              display: block;
            }
            .hbspt-form {
              width: 350px;
            }
            
          }
          @media screen and (max-width: 350px) {
            .jetzt-bewerben-container {
              padding: 12% 5%;
              display: block;
            }
            .hbspt-form {
              width: 300px;
            }
          }
        `}
      </style>
    </div>
    );
  }
}

export default JetztBewerben_UXUI_Warteliste;