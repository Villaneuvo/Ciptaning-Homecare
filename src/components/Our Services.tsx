import Image from "next/image";

export default function Services() {
  return (
    <div className="wrapper-services mt-20 w-full bg-bgSecondary p-6 lg:mt-0">
      <div className="mx-4 md:mx-16 lg:mx-36">
        <div className="wrapper-category-services mt-5 flex flex-col items-center">
          <h2 className="text-center text-3xl font-extrabold text-main md:text-4xl">
            We Provide Great Services
          </h2>
          <p className="mt-3 w-full text-center text-sm font-normal leading-normal md:w-[480px] lg:w-[600px]">
            We deliver exceptional homecare services tailored to meet the unique
            needs of each individual, ensuring comfort, dignity, and the highest
            quality of life for our clients.
          </p>
        </div>
        {/* Carousel */}
        <section className="w-full lg:carousel">
          <div
            className="w-full lg:carousel-item sm:grid sm:grid-cols-2"
            id="item1"
          >
            <div className="mx-auto mt-5 flex h-fit w-fit flex-col rounded-3xl bg-cardSecondary p-2 md:p-5 lg:mx-0 lg:h-[280px] lg:w-[320px] lg:flex-row lg:py-10 xl:h-[280px] xl:w-[28rem] xl:p-12 2xl:w-[555px]">
              <Image
                src="/tape.png"
                alt="tape"
                width={128}
                height={128}
                className="mx-auto h-16 w-16 lg:mx-0 lg:h-20 lg:w-20 xl:h-32 xl:w-32"
              />
              <div className="mx-5">
                <h3 className="my-2 text-xl font-bold lg:my-0 lg:text-xl xl:text-2xl">
                  Rawat Luka
                </h3>
                <p className="w-48 text-justify text-sm lg:w-44 xl:w-52 2xl:w-80">
                  Layanan medis dan komplementari serta kebutuhan kesehatan
                  lainnya ke rumah Anda oleh tenaga kesehatan profesional dan
                  terlatih.
                </p>
                <button className="btn my-[10px] border-buttonMain bg-buttonMain text-lg font-bold text-main shadow-buttonMainShadow hover:border-buttonHoverMain hover:bg-buttonHoverMain hover:text-white lg:h-10 lg:w-40">
                  Lebih Detail
                </button>
              </div>
            </div>
            <div className="mx-auto mt-5 flex h-fit w-fit flex-col rounded-3xl bg-cardSecondary p-2 md:p-5 lg:mx-0 lg:h-[280px] lg:w-[320px] lg:flex-row lg:py-10 xl:h-[280px] xl:w-[28rem] xl:p-12 2xl:w-[555px]">
              <Image
                src="/tape.png"
                alt="tape"
                width={128}
                height={128}
                className="mx-auto h-16 w-16 lg:mx-0 lg:h-20 lg:w-20 xl:h-32 xl:w-32"
              />
              <div className="mx-5">
                <h3 className="my-2 text-xl font-bold lg:my-0 lg:text-xl xl:text-2xl">
                  Rawat Luka
                </h3>
                <p className="w-48 text-justify text-sm lg:w-44 xl:w-52 2xl:w-80">
                  Layanan medis dan komplementari serta kebutuhan kesehatan
                  lainnya ke rumah Anda oleh tenaga kesehatan profesional dan
                  terlatih.
                </p>
                <button className="btn my-[10px] border-buttonMain bg-buttonMain text-lg font-bold text-main shadow-buttonMainShadow hover:border-buttonHoverMain hover:bg-buttonHoverMain hover:text-white lg:h-10 lg:w-40">
                  Lebih Detail
                </button>
              </div>
            </div>
            <div className="mx-auto mt-5 flex h-fit w-fit flex-col rounded-3xl bg-cardSecondary p-2 md:p-5 lg:mx-0 lg:h-[280px] lg:w-[320px] lg:flex-row lg:py-10 xl:h-[280px] xl:w-[28rem] xl:p-12 2xl:w-[555px]">
              <Image
                src="/tape.png"
                alt="tape"
                width={128}
                height={128}
                className="mx-auto h-16 w-16 lg:mx-0 lg:h-20 lg:w-20 xl:h-32 xl:w-32"
              />
              <div className="mx-5">
                <h3 className="my-2 text-xl font-bold lg:my-0 lg:text-xl xl:text-2xl">
                  Rawat Luka
                </h3>
                <p className="w-48 text-justify text-sm lg:w-44 xl:w-52 2xl:w-80">
                  Layanan medis dan komplementari serta kebutuhan kesehatan
                  lainnya ke rumah Anda oleh tenaga kesehatan profesional dan
                  terlatih.
                </p>
                <button className="btn my-[10px] border-buttonMain bg-buttonMain text-lg font-bold text-main shadow-buttonMainShadow hover:border-buttonHoverMain hover:bg-buttonHoverMain hover:text-white lg:h-10 lg:w-40">
                  Lebih Detail
                </button>
              </div>
            </div>
            <div className="mx-auto mt-5 flex h-fit w-fit flex-col rounded-3xl bg-cardSecondary p-2 md:p-5 lg:mx-0 lg:h-[280px] lg:w-[320px] lg:flex-row lg:py-10 xl:h-[280px] xl:w-[28rem] xl:p-12 2xl:w-[555px]">
              <Image
                src="/tape.png"
                alt="tape"
                width={128}
                height={128}
                className="mx-auto h-16 w-16 lg:mx-0 lg:h-20 lg:w-20 xl:h-32 xl:w-32"
              />
              <div className="mx-5">
                <h3 className="my-2 text-xl font-bold lg:my-0 lg:text-xl xl:text-2xl">
                  Rawat Luka
                </h3>
                <p className="w-48 text-justify text-sm lg:w-44 xl:w-52 2xl:w-80">
                  Layanan medis dan komplementari serta kebutuhan kesehatan
                  lainnya ke rumah Anda oleh tenaga kesehatan profesional dan
                  terlatih.
                </p>
                <button className="btn my-[10px] border-buttonMain bg-buttonMain text-lg font-bold text-main shadow-buttonMainShadow hover:border-buttonHoverMain hover:bg-buttonHoverMain hover:text-white lg:h-10 lg:w-40">
                  Lebih Detail
                </button>
              </div>
            </div>
          </div>
          {/* Carousel 2 */}
          <div
            className="w-full lg:carousel-item sm:grid sm:grid-cols-2"
            id="item2"
          >
            <div className="mx-auto mt-5 flex h-fit w-fit flex-col rounded-3xl bg-cardSecondary p-2 md:p-5 lg:mx-0 lg:h-[280px] lg:w-[320px] lg:flex-row lg:py-10 xl:h-[280px] xl:w-[28rem] xl:p-12 2xl:w-[555px]">
              <Image
                src="/tape.png"
                alt="tape"
                width={128}
                height={128}
                className="mx-auto h-16 w-16 lg:mx-0 lg:h-20 lg:w-20 xl:h-32 xl:w-32"
              />
              <div className="mx-5">
                <h3 className="my-2 text-xl font-bold lg:my-0 lg:text-xl xl:text-2xl">
                  Rawat Luka
                </h3>
                <p className="w-48 text-justify text-sm lg:w-44 xl:w-52 2xl:w-80">
                  Layanan medis dan komplementari serta kebutuhan kesehatan
                  lainnya ke rumah Anda oleh tenaga kesehatan profesional dan
                  terlatih.
                </p>
                <button className="btn my-[10px] border-buttonMain bg-buttonMain text-lg font-bold text-main shadow-buttonMainShadow hover:border-buttonHoverMain hover:bg-buttonHoverMain hover:text-white lg:h-10 lg:w-40">
                  Lebih Detail
                </button>
              </div>
            </div>
            <div className="mx-auto mt-5 flex h-fit w-fit flex-col rounded-3xl bg-cardSecondary p-2 md:p-5 lg:mx-0 lg:h-[280px] lg:w-[320px] lg:flex-row lg:py-10 xl:h-[280px] xl:w-[28rem] xl:p-12 2xl:w-[555px]">
              <Image
                src="/tape.png"
                alt="tape"
                width={128}
                height={128}
                className="mx-auto h-16 w-16 lg:mx-0 lg:h-20 lg:w-20 xl:h-32 xl:w-32"
              />
              <div className="mx-5">
                <h3 className="my-2 text-xl font-bold lg:my-0 lg:text-xl xl:text-2xl">
                  Rawat Luka
                </h3>
                <p className="w-48 text-justify text-sm lg:w-44 xl:w-52 2xl:w-80">
                  Layanan medis dan komplementari serta kebutuhan kesehatan
                  lainnya ke rumah Anda oleh tenaga kesehatan profesional dan
                  terlatih.
                </p>
                <button className="btn my-[10px] border-buttonMain bg-buttonMain text-lg font-bold text-main shadow-buttonMainShadow hover:border-buttonHoverMain hover:bg-buttonHoverMain hover:text-white lg:h-10 lg:w-40">
                  Lebih Detail
                </button>
              </div>
            </div>
            <div className="mx-auto mt-5 flex h-fit w-fit flex-col rounded-3xl bg-cardSecondary p-2 md:p-5 lg:mx-0 lg:h-[280px] lg:w-[320px] lg:flex-row lg:py-10 xl:h-[280px] xl:w-[28rem] xl:p-12 2xl:w-[555px]">
              <Image
                src="/tape.png"
                alt="tape"
                width={128}
                height={128}
                className="mx-auto h-16 w-16 lg:mx-0 lg:h-20 lg:w-20 xl:h-32 xl:w-32"
              />
              <div className="mx-5">
                <h3 className="my-2 text-xl font-bold lg:my-0 lg:text-xl xl:text-2xl">
                  Rawat Luka
                </h3>
                <p className="w-48 text-justify text-sm lg:w-44 xl:w-52 2xl:w-80">
                  Layanan medis dan komplementari serta kebutuhan kesehatan
                  lainnya ke rumah Anda oleh tenaga kesehatan profesional dan
                  terlatih.
                </p>
                <button className="btn my-[10px] border-buttonMain bg-buttonMain text-lg font-bold text-main shadow-buttonMainShadow hover:border-buttonHoverMain hover:bg-buttonHoverMain hover:text-white lg:h-10 lg:w-40">
                  Lebih Detail
                </button>
              </div>
            </div>
            <div className="mx-auto mt-5 flex h-fit w-fit flex-col rounded-3xl bg-cardSecondary p-2 md:p-5 lg:mx-0 lg:h-[280px] lg:w-[320px] lg:flex-row lg:py-10 xl:h-[280px] xl:w-[28rem] xl:p-12 2xl:w-[555px]">
              <Image
                src="/tape.png"
                alt="tape"
                width={128}
                height={128}
                className="mx-auto h-16 w-16 lg:mx-0 lg:h-20 lg:w-20 xl:h-32 xl:w-32"
              />
              <div className="mx-5">
                <h3 className="my-2 text-xl font-bold lg:my-0 lg:text-xl xl:text-2xl">
                  Rawat Luka
                </h3>
                <p className="w-48 text-justify text-sm lg:w-44 xl:w-52 2xl:w-80">
                  Layanan medis dan komplementari serta kebutuhan kesehatan
                  lainnya ke rumah Anda oleh tenaga kesehatan profesional dan
                  terlatih.
                </p>
                <button className="btn my-[10px] border-buttonMain bg-buttonMain text-lg font-bold text-main shadow-buttonMainShadow hover:border-buttonHoverMain hover:bg-buttonHoverMain hover:text-white lg:h-10 lg:w-40">
                  Lebih Detail
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="hidden py-2 lg:flex lg:w-full lg:justify-center lg:gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
        </div>
      </div>
    </div>
  );
}
