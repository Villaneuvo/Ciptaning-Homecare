import ChoosingUs from "@/components/Choosing";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Our Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Under Development doesnt represent final product */}
      {/* Jumbotron */}
      <section className="wrapper flex min-h-screen flex-col-reverse items-center justify-between bg-main p-4 lg:flex-row lg:p-0 xl:min-h-[75vh]">
        <div className="wrapper-text mx-auto lg:mx-[170px] lg:pt-4">
          <h1 className="xl:w- mt-10 w-full text-3xl font-extrabold leading-relaxed text-textPrimary drop-shadow-lg md:text-3xl md:leading-relaxed lg:mt-0 lg:w-5/6 xl:w-[600px] xl:leading-relaxed">
            We Really Care About Your Healthy, By Provide Homecare Services
          </h1>
          <p className="my-5 w-full text-justify text-sm font-normal leading-normal text-white md:text-base lg:w-[490px]">
            Ciptaning Homecare menghadirkan pelayanan kesehatan mandiri yang
            ditujukan untuk membantu percepatan kesembuhan pasien, dengan
            memberi layanan pendampingan, edukasi, dll.
          </p>
          <button className="btn my-5 w-52 max-w-xs border-buttonMain bg-buttonMain text-lg font-bold text-main shadow-buttonMainShadow hover:border-buttonHoverMain hover:bg-buttonHoverMain hover:text-white lg:w-52">
            Lebih Lanjut
          </button>
          <div className="mt-4 flex flex-col gap-5 md:flex-row">
            <div className="flex items-center gap-2 lg:block">
              <Image
                src="/patient.png"
                alt="a male patient using a masker"
                width={48}
                height={48}
              />
              <p className="text-sm font-medium text-white lg:mt-2">
                <b className="font-bold text-textPrimary">100+</b> Pasien
                Dilayani
              </p>
            </div>
            <div className="flex items-center gap-2 lg:block">
              <Image
                src="/satisfied.png"
                alt="a male patient using a masker"
                width={48}
                height={48}
              />
              <p className="text-sm font-medium text-white lg:mt-2">
                <b className="font-bold text-textPrimary">89+</b> Pasien Puas
              </p>
            </div>
            <div className="flex items-center gap-2 lg:block">
              <Image
                src="/businessman.png"
                alt="a male patient using a masker"
                width={48}
                height={48}
              />
              <p className="text-sm font-medium text-white lg:mt-2">
                <b className="font-bold text-textPrimary">20+</b> Ahli
                Professional
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 w-screen bg-white px-8 py-8 shadow-imageJumbotronShadow md:w-screen md:p-10 lg:mt-0 lg:rounded-l-[15px] lg:py-16 lg:pl-2 lg:pr-12 xl:ml-4 xl:mt-0 xl:h-full xl:w-fit xl:py-16 xl:pl-16 xl:pr-32">
          <Image
            src="/jumbotron-img.png"
            alt="a doctor and a nurse"
            width={158}
            height={300}
            className="mx-auto h-auto w-auto lg:h-full lg:w-full"
          />
        </div>
      </section>

      {/* Why Choosing Us */}
      <div className="mx-4 h-auto md:mx-10 lg:mx-40 lg:mb-20 lg:h-full xl:mb-0 xl:h-[75vh] 2xl:h-[80vh]">
        <div className="wrapper-choosing-us mt-12 flex flex-col items-center lg:mt-24">
          <h2 className="text-3xl font-extrabold text-main md:text-4xl">
            Why Choosing Us
          </h2>
          <p className="mt-3 w-full max-w-lg text-center text-sm font-normal leading-normal">
            Layanan medis dan komplementari serta kebutuhan kesehatan lainnya ke
            rumah anda oleh tenaga kesehatan profesional dan terlatih.
          </p>
        </div>

        <div className="wrapper-card-choosing-us mt-5 flex flex-col items-center rounded-md bg-main p-4 shadow-cardChoosingUsShadow lg:flex-row lg:items-end lg:p-10">
          <section className="grid h-full w-full grid-cols-1 gap-4 lg:w-auto lg:grid-cols-gridChoosingUsLg xl:grid-cols-gridChoosingUs">
            <div className="wrapper-chosing-us-card-img">
              <Image
                src="/a-nurse-with-patient.jpg"
                alt="a nurse with a patient"
                width={250}
                height={250}
                className="lg:wrapper-chosing-us-img hidden lg:block lg:rounded-l-xl lg:rounded-br-xl lg:rounded-tr-[150px] lg:shadow-lg"
              />
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="hehe">
                  <Image
                    src="/an-oldman-take-cared.jpeg"
                    alt="a nurse with a patient"
                    width={200}
                    height={200}
                    className="shadow-cardCSImgShadow"
                  />
                </div>
                <div className="hehe">
                  <Image
                    src="/patient-room.jpg"
                    alt="a nurse with a patient"
                    width={200}
                    height={200}
                    className="shadow-cardCSImgShadow"
                  />
                </div>
                <div className="hehe">
                  <Image
                    src="/doctor-bandage-a-patient.jpg"
                    alt="a nurse with a patient"
                    width={200}
                    height={200}
                    className="shadow-cardCSImgShadow"
                  />
                </div>
              </div>
              <div>
                <p className="w-full text-sm font-normal leading-[1.7rem] text-white lg:w-[90%]">
                  At CiptaningHomeCare, we believe that compassionate,
                  personalized care can make a world of difference in the lives
                  of our clients and their families. Our team of highly trained
                  professionals is dedicated to providing top-quality care
                  tailored to meet the unique needs of each individual.
                </p>
                <button className="btn my-5 w-fit border-buttonMain bg-buttonMain text-lg font-bold text-main shadow-buttonMainShadow hover:border-buttonHoverMain hover:bg-buttonHoverMain hover:text-white lg:w-52">
                  Pelajari Artikel
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Our Services */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* Find Us */}
      <FindUs />

      {/* Footer */}
    </>
  );
}
