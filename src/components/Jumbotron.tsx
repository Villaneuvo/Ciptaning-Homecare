import Image from "next/image";

export default function Jumbotron() {
  return (
    <section className="wrapper flex min-h-screen flex-col-reverse items-center justify-between bg-main p-4 lg:flex-row lg:p-0">
      <div className="wrapper-text mx-auto lg:mx-[170px] lg:pt-4">
        <h1 className="mt-5 w-full text-3xl font-extrabold leading-relaxed text-textPrimary drop-shadow-lg md:text-3xl lg:mt-0 lg:w-5/6 lg:leading-relaxed">
          We Really Care About Your Healthy, By Provide Homecare Services
        </h1>

        <p className="my-5 w-full text-justify text-sm font-normal leading-normal text-white md:text-base lg:w-[440px]">
          Ciptaning Homecare menghadirkan pelayanan kesehatan mandiri yang
          ditujukan untuk membantu percepatan kesembuhan pasien, dengan memberi
          layanan pendampingan, edukasi, dll.
        </p>
        <button className="btn my-5 w-full max-w-xs border-buttonMain bg-buttonMain text-lg font-bold text-main shadow-buttonMainShadow hover:border-buttonHoverMain hover:bg-buttonHoverMain hover:text-white lg:w-52">
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
              <b className="font-bold text-textPrimary">100+</b> Pasien Dilayani
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
      <div className="mt-8 w-screen bg-white px-8 py-8 shadow-imageJumbotronShadow lg:ml-4 lg:mt-0 lg:w-fit lg:rounded-l-[15px] lg:py-16 lg:pl-16 lg:pr-32">
        <Image
          src="/jumbotron-img.png"
          alt="a doctor and a nurse"
          width={368}
          height={600}
          className="h-auto max-w-full"
        />
      </div>
    </section>
  );
}
