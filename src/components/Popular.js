import React from 'react'
import  Slider from 'react-slick'
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Popular = ({popularMovies}) => {
    if(!popularMovies || !popularMovies.length){
		return <div style={{marginTop: "20px", textAlign: "center", color: "white"}}><h1>No Popular Movies</h1></div>
	}
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
       
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              centerMode: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              centerMode: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false
            }
          }
        ]
        };
    return (
        <>
        <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                        <h2 className="section__title">Popular Movies</h2>
                </div>
                <div className="col-12">
                    <div className="section__carousel-wrap">
                        <div className="section__carousel owl-carousel owl-loaded" id="popular">
                            <div className="owl-stage-outer owl-height" >
                                <div className="owl-stage" style={{margin: "30px"}}>
                                <Slider {...settings}>
                                {popularMovies &&
                                    popularMovies.map((pop) => {
                                        return(
                                            <div key = {pop.id} className="owl-item" >
                                            <div className="card" style={{marginRight: "10px"}}>
                                                <Link to={`/popularlists/${pop.id}`} className="card__cover">
                                                <img src={`https://image.tmdb.org/t/p/original/${pop.poster_path}`} alt="" />
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" strokeLinecap="round" strokeLinejoin="round"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                </Link>
                                                <button className="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"></path></svg></button>
                                                <span className="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path></svg>{pop.vote_average}</span>
                                                <h3 className="card__title"><a href="details.html">{pop.original_title}</a></h3>
                                                <ul className="card__list">
                                                   
                                                    <li>{pop.release_date}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                                </Slider>
                                </div>
                                <div className="owl-nav disabled">
                                <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
                                </div>
                                <div className="owl-dots disabled"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</section>
    </>
    )
}

Popular.propTypes = {
    popularMovies: PropTypes.array
}


export default Popular