const HeaderOurStory = () => {
  return (
    <header className="our-story-wrapper">
      <div className="img-sergio">
        <img src="/img/microcamps/sergio03.png" alt="sergio say hi" />
      </div>
      <div className="info">
        <h1>Olá, ich bin Sergio. Der Gründer von SuperCode!</h1>
        <p>
          Falls du ein paar Minuten Zeit hast erzähle ich dir gerne die SuperCode Geschichte und wie und warum daraus am Ende auch die MicroCamps entstanden sind. Es war eine tolle Reise mit vielen Hürden, Rezertifizierungen und Fehlversuchen. Aber es hat sich gelohnt! ✌️
        </p>
      </div>

      <style jsx>{`
      .our-story-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--clr-super-lila);
        color: var(--super-white);
        padding: 0 5%;
        height: 100vh;
      }
      .our-story-wrapper .img-sergio {
        width: 100%;
      }
      .our-story-wrapper .info {
        max-width: 50rem;
      }
      .our-story-wrapper h1 {
        font-family: var(--ff-reg-bold);
        font-size: var(--fs-900);
        line-height: 115%;
        margin-bottom: 2%;
      }
      @media only screen and (max-width: 576px) {
        .our-story-wrapper {
          padding: 3.125rem 4.5rem;
          display: block;
          height: 100%;
        }
        .our-story-wrapper .img-sergio {
          margin-bottom: 25px;
        }
      }
    
    `}</style>
    </header>
  )
}
export default HeaderOurStory;