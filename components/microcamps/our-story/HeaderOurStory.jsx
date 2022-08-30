import "./headerOurStory.scss"

const HeaderOurStory = () => {
  return (<header className="our-story-wrapper">
    <div className="img-sergio">
      <img src="/img/sergio03.png" alt="sergio say hi" />
    </div>
    <div className="info">
      <h1>Olá, ich bin Sergio. Der Gründer von SuperCode!</h1>
      <p>
        Falls du ein paar Minuten Zeit hast erzähle ich dir gerne die SuperCode Geschichte und wie und warum daraus am Ende auch die MicroCamps entstanden sind. Es war eine tolle Reise mit vielen Hürden, Rezertifizierungen und Fehlversuchen. Aber es hat sich gelohnt! ✌️
      </p>
    </div>
  </header>
  )
}
export default HeaderOurStory;