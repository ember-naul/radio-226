import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


function Clients() {
    const swiperConfig = {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 60,
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 80,
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 120,
            },
        },
    };

    useEffect(() => {
        const swiper = new Swiper('.init-swiper', swiperConfig);
    }, []);

    return (
        <section id="clients" className="clients section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper init-swiper">
                    <svg className="bi" width="32" height="32" fill="currentColor">
                        <use xlinkHref="bootstrap-icons.svg#arrow-left" />
                    </svg>

                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
                    </div>
                    <div className="swiper-pagination"></div>
                    {/* <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div> */}
                </div>
            </div>
        </section>
    );
}

export default Clients;
