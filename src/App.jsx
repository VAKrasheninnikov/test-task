import React from 'react'
import './assets/styles.scss';
import down from './assets/icons/down.svg'
import Slider from './components/Slider';
import News from './components/News';

function App() {

  const [showNews, setShowNews] = React.useState(false);
  const handleShowNews = () => {
    setShowNews(!showNews)
  }

  return (
    <div className="wrapper">
      <Slider />
      <div className="whatsNew">
        <div className="text">What's New?</div>
      </div>
      <News 
        showNews={showNews}
      />
      <div className="read-more">
        <div className="text" onClick={handleShowNews}>{showNews ? 'Hide' : 'Read More'}</div>
        <img src={down} style={showNews ? {transform:'rotate(180deg)'} : {}} alt='img'/>
      </div>
    </div>
  );
}

export default App;
