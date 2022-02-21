import './assets/styles.scss';
import right from './assets/icons/right.svg'
import left from './assets/icons/left.svg'
import down from './assets/icons/down.svg'
import img1 from './assets/images/img1.png'
import img2 from './assets/images/img2.png'
import img3 from './assets/images/img3.png'

function App() {
  return (
    <div className="wrapper">
      <div className="comments">
        <div className="comments__textBlock">
          <div className="comments__textBlock-maintext">“I registered on the AidaForm website,
            having stumbled upon one of the form templates, which I really liked. My first form, which is still active by the way, was published 20 minutes after
            I found the AidaForm website and created an account!“</div>
          <div className="comments__textBlock-author"><span>Ben Johnson</span>, web-store owner</div>
        </div>
        <div className="comments__navBlock">
          <div className="comments__round" />
          <div className="comments__sliderButtons">
            <div className="comments__sliderButtons-leftButton">
              <img src={left} />
            </div>
            <div className="comments__sliderButtons-rightButton">
              <img src={right} />
            </div>
          </div>
        </div>
      </div>
      <div className="whatsNew">
        <div className="text">What's New?</div>
      </div>
      <div className="news">
        <div className="news__card">
          <div className="news__card__content">
            <img src={img1} />
          </div>
          <div className="news__card__content-text">Instagram FAQ — All You Need To Know</div>
        </div>
        <div className="news__card">
          <div className="news__card__content">
            <img src={img2} />
          </div>
          <div className="news__card__content-text">DMEXCO 2019 — Meet Combin in Cologne</div>
        </div>
        <div className="news__card">
          <div className="news__card__content">
            <img src={img3} />
          </div>
          <div className="news__card__content-text">Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1</div>
        </div>
      </div>
      <div className="read-more">
      <div className="text">Read More</div>
      <img src={down} />
      </div>
    </div>
  );
}

export default App;
