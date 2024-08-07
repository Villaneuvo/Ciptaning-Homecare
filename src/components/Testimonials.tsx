import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="wrapper-testimonials h-auto xl:h-[65vh]">
      <div className="mx-4 md:mx-16 lg:mx-40">
        <div className="wrapper-testimonials-title mt-10 flex flex-col items-center md:mt-16 lg:mt-24">
          <h2 className="text-3xl font-extrabold text-main md:text-4xl">
            Testimonials
          </h2>
          <p className="mt-3 w-full text-center text-sm font-normal leading-normal lg:w-[600px]">
            Simak kepuasaan pelanggan kami terhadap pelayanan homecare yang
            sejauh ini kami lakukan dan, Kepuasaan anda adalah tanggung jawab
            dan kebahagiaan kami
          </p>
        </div>
        <div className="wrapper-testimonials-card mx-5 mt-8 w-fit items-center rounded-xl bg-main p-5 md:mx-auto md:p-10 lg:w-3/4">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item w-full">
              <section className="gap-4 md:grid md:grid-cols-gridTestimonials">
                <div className="wrapper-testimonials-img">
                  <Image
                    src="/indonesian-old-woman.jpeg"
                    alt="an old indonesian woman with happy expression"
                    width={250}
                    height={250}
                    className="md:imgTestimonials mx-auto rounded-xl"
                  />
                </div>
                <div className="my-auto w-full">
                  <h3 className="text-md font-semibold text-white">
                    Dr Sarah Wijayanto S.pd, Phd
                  </h3>
                  <p className="my-3 text-justify text-sm text-white">
                    {`My family and I are incredibly grateful for the exceptional care provided by the homecare team. Their professionalism, compassion, and dedication have significantly improved my mother's quality of life. She feels more comfortable and secure at home, and we have peace of mind knowing she's in good hands.`}
                  </p>
                  <div className="wrapper-ratings flex flex-row gap-2">
                    <Image src="/star.png" alt="stars" width={20} height={20} />
                    <Image src="/star.png" alt="stars" width={20} height={20} />
                    <Image src="/star.png" alt="stars" width={20} height={20} />
                    <Image src="/star.png" alt="stars" width={20} height={20} />
                    <Image src="/star.png" alt="stars" width={20} height={20} />
                  </div>
                </div>
              </section>
            </div>
            <div id="slide2" className="carousel-item w-full">
              <section className="gap-4 md:grid md:grid-cols-gridTestimonials">
                <div className="wrapper-testimonials-img">
                  <Image
                    src="/asian-businessman.jpeg"
                    alt="an old indonesian woman with happy expression"
                    width={250}
                    height={250}
                    className="md:imgTestimonials mx-auto rounded-xl"
                  />
                </div>
                <div className="my-auto w-full">
                  <h3 className="text-md font-semibold text-white">John D.</h3>
                  <p className="my-3 text-justify text-sm text-white">
                    {`After my surgery, I needed specialized care at home, and the homecare services exceeded my expectations. The caregivers were highly skilled, attentive, and always went the extra mile to ensure I was comfortable. Their support made my recovery much smoother and less stressful.`}
                  </p>
                  <div className="wrapper-ratings flex flex-row gap-2">
                    <Image src="/star.png" alt="stars" width={20} height={20} />
                    <Image src="/star.png" alt="stars" width={20} height={20} />
                    <Image src="/star.png" alt="stars" width={20} height={20} />
                    <Image src="/star.png" alt="stars" width={20} height={20} />
                    <Image src="/star.png" alt="stars" width={20} height={20} />
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#slide1" className="btn btn-xs">
              1
            </a>
            <a href="#slide2" className="btn btn-xs">
              2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
