import React from 'react'
import MyLoader from './MyLoader'
import right from '../assets/icons/right.svg'
import left from '../assets/icons/left.svg'
import data from '../sources/feedback_data.json'

function Slider() {

    const [slide, setSlide] = React.useState(0);
    const [comments, setComments] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    console.log(isLoaded)

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
            setComments(data)
        }, 2000)
    }, [])

    const changeRight = () => {
        setSlide((slide + 1 + comments.length) % comments.length)
    }
    const changeLeft = () => {
        if (slide === 0) {
            setSlide(comments.length - 1)
        }
        else setSlide(prev => prev - 1)
    }

    

    return (
        <div className="comments">
        {isLoaded ? 
        comments.filter((el, index) => index === slide).map((el, id) =>
            <div className="comments__textBlock" key={id}>
                        <div className="comments__textBlock-maintext">{el.text}</div>
                        <div className="comments__textBlock-author"><span>{el.name}</span><br />{el.instagram_username}</div>
                    </div>) : <MyLoader />}

            <div className="comments__navBlock">
                <div className="comments__round" />
                <div className="comments__sliderButtons">
                    <div className="comments__sliderButtons-leftButton" onClick={changeLeft}>
                        <img src={left} alt='left' />
                    </div>
                    <div className="comments__sliderButtons-rightButton" onClick={changeRight}>
                        <img src={right} alt='right' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider