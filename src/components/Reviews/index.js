import React from "react";
import Slider from "react-slick";


function Reviews() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    draggable: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  
  };

  return (
    <section className='reviews-bg'>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <h2 className='reviews-title'>Reviews</h2>
        <Slider {...settings}>
        <div className='review-container'>
            <h3>Zach Villejo</h3>

            <p className="review-text">
                "Very knowledgeable and professional. They helped us with the sale of our house with no issues, when other attorneys couldn't. Definitely recommend them."
            </p>
        </div>
        <div className='review-container'>
            <h3>Franciso Corona</h3>
            
            <p className="review-text">
                "Very good service  and Knowledgeable Staff Title transfer done easy and inexpensive Thanks for taking your time to help and advise Us."
            </p>
        </div>
        <div className='review-container'>
            <h3>Yvonne Perez</h3>
            
            <p className="review-text">
                "Our family and extended family have done busy with them for several years. Good staff, service, reasonable, and timely."
            </p>
        </div>
        <div className='review-container'>
            <h3>Theresa Pomerleau</h3>
            
            <p className="review-text">
                "The staff at West & West are making a difficult time a little easier. They are honest, thorough, and reasonably priced. Basically, they do right by folks."
            </p>
        </div>
        <div className='review-container'>
            <h3>Lydia Sanchez</h3>
            
            <p className="review-text">
                "Been doing business with Mr West for over 10 years. I would not go to anyone else for what he specializes. Great group to work with!!"
            </p>
        </div>
        <div className='review-container'>
            <h3>Albert Hernandez</h3>
            
            <p className="review-text">
                "Had my back when I needed them definitely recommended them to close on a house."
            </p>
        </div>
        <div className='review-container'>
            <h3>Frances Parker</h3>
            
            <p className="review-text">
                "Had a free consultation. Very professional.
"
            </p>
        </div>
        
        </Slider>
    
    
    </section>
    
    );
}

export default Reviews;