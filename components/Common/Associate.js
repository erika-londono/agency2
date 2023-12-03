import React from "react";
import { useRouter } from 'next/router';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";

const Associate = () => {
  const router = useRouter();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Realiza la redirección en el lado del cliente.
    router.push('/normativity');
  };
  return (
    <>
      <div className="testimonial-section ptb-100">
        <div className="container">
          <div className="section-title">
            {/* <span>Testimonials</span> */}
            <h2>Bienvenido</h2>
          </div>

          <section className="Associates" id="Associates"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1200"
          data-aos-once="true">
            <div className="Associates__LoginBox">
              <img alt="Ceter logo" src="/images/logo.png" />
              <h2 className="Associates__Title">Ingreso</h2>
              <form
                className="form-group"
                onSubmit={handleFormSubmit}
                method="post"
              >
                <div className="Associates__FormGroup">
                  <input
                    className="Associates__FormControl"
                    name="usuario"
                    placeholder="CC Usuario"
                    required=""
                    type="text"
                  />
                </div>
                <div className="Associates__FormGroup">
                  <input
                    className="Associates__FormControl"
                    name="password"
                    placeholder="Contrasena"
                    required=""
                    type="password"
                  />
                </div>
                <button className="default-btn col-lg-12 col-md-12 col-sm-12" type="submit">
                  Ingresar
                </button>
              </form>
            </div>
          </section>
        </div>
        {/* Shape Images */}
        <div className="testimonial-shape">
          <img src="/images/shape/testimonial-shape-1.png" alt="main-image" />
        </div>
        <div className="testimonial-shape-img1">
          <img src="/images/shape/testimonial-shape-2.png" alt="main-image" />
        </div>
        <div className="testimonial-shape-img2">
          <img src="/images/shape/testimonial-shape-3.png" alt="main-image" />
        </div>
      </div>
    </>
  );
};

export default Associate;
