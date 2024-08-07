import Image from "next/image";

export default function FindUs() {
  return (
    <div className="wrapper-find-us h-auto xl:h-[80vh]">
      <div className="mx-4 my-10 md:mx-16 lg:mx-40">
        <div className="wrapper-find-us-title mt-10 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-main lg:text-4xl">
            Find Us
          </h2>
          <p className="mt-3 w-full text-center text-sm font-normal leading-normal md:w-[480px] lg:w-[600px]">
            Kami hadir di beberapa kota besar di Indonesia, untuk memudahkan
            anda dalam mendapatkan pelayanan homecare terbaik
          </p>
        </div>
        <div className="wrapper-find-us-image mt-8">
          <Image
            src="/map.png"
            alt="a map of indonesia"
            layout="responsive"
            width={1200}
            height={600}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
