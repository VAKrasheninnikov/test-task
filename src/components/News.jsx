import React from 'react'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import news from '../sources/blog_posts.json'

function News({ showNews }) {

    const [arr, setArr] = React.useState(news);

    React.useEffect(() => {
        const hugeArr = news.map((el) => {
            return ({
                ...el,
                date: Number(el.date.split('').filter((element) => element !== '-').join(''))
            })
        })
        setArr(hugeArr)
    }, [])

    return (
        <div className="news">
            <a href="https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b" target="_blank">
                <div className="news__card">
                    <div className="news__card__content">
                        <img src={img1} alt='img' />
                    </div>
                    <div className="news__card__content-text">Instagram FAQ — All You Need To Know</div>
                </div>
            </a>
            <a href="https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63" target="_blank">
                <div className="news__card">
                    <div className="news__card__content">
                        <img src={img2} alt='img' />
                    </div>
                    <div className="news__card__content-text">Instagram FAQ — All You Need To Know</div>
                </div>
            </a>
            <a href="https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7" target="_blank">
                <div className="news__card">
                    <div className="news__card__content">
                        <img src={img3} alt='img' />
                    </div>
                    <div className="news__card__content-text">Instagram FAQ — All You Need To Know</div>
                </div>
            </a>
            {[...arr].sort((a, b) => b.date - a.date).map((el) => showNews ?
                <a>
                    <div className="news__card">
                        <div className="news__card__content">
                            <img src={img1} alt='img' />
                        </div>
                        <div className="news__card__content-text">{el.title}</div>
                    </div>
                </a>
                : null)}
        </div>
    )
}

export default News
