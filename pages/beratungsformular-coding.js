import Layout from '../components/Layout';
import { useWindowSize } from '../components/functions/windowSize';
import HubspotForm from 'react-hubspot-form';
import Header_Subpages from '../components/Header_Subpages';

export default function Workshop() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <Header_Subpages headline='Willkommen bei SuperCode' />
        <div id='arrow-img'>
          <img src='/img/Arrow24.svg' alt='' />
        </div>
        <div id='sign-up'>
          <div id='form'>
            <HubspotForm
              portalId='5807040'
              formId='b1c54768-9387-49e1-9669-ea5c0f58ebd6'
              onSubmit={() => console.log('Submit!')}
              onReady={(form) => console.log('Form ready!')}
              loading={<div>Loading...</div>}
            />
          </div>
        </div>

        <style jsx>{`
          #arrow-img {
            position: absolute;
            width: 18%;
            z-index: 3;
            top: 50%;
            left: 12%;
          }

          #arrow-img img {
            width: 100%;
          }

          #sign-up {
            justify-content: center;
            padding: 7em 7%;
          }

          #form {
            padding: 20px;
            background: var(--super-black);
            color: var(--super-green);
            border-radius: .5rem;
            width: 100%;
          }

          h1 {
            font-size: 3em;
            width: 90%;
            margin: 0 auto;
          }
          @media (max-width: 768px) {
            #arrow-img {
              width: 26%;
            }
          }
          @media (max-width: 455px) {
            #form {
              width: 100%;
            }

            .inputs-list label {
              padding: 5px;
            }
          }

      `}</style>
      </Layout>
    );
  } else {
    return '';
  }
}
