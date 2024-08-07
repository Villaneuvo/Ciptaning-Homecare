import Image from "next/image";

export default function FooterPage() {
  return (
    <>
      <footer className="footer bg-main p-5 text-base-content">
        <aside className="wrapper-footer-img mx-auto h-52 w-52 md:h-60 md:w-60">
          <Image src="/Logo-footer.png" alt="logo" width={208} height={208} />
        </aside>
        <nav className="my-auto">
          <div className="wrapper-footer-contact">
            <h3 className="w-fit text-3xl font-bold text-textPrimary">
              Contact Information
            </h3>
            <div className="my-5 flex flex-row items-center gap-2 text-sm text-white">
              <Image
                src="/location.png"
                width={24}
                alt="only icon"
                height={24}
              />
              <span>Jl. Pulau Saelus No.36, Sesetan, Bali - Indonesia</span>
            </div>
            <div className="my-5 flex flex-row items-center gap-2 text-sm text-white">
              <Image src="/email.png" width={24} alt="only icon" height={24} />
              <span>homecareCiptaning@gmail.com</span>
            </div>
            <div className="my-5 flex flex-row items-center gap-2 text-sm text-white">
              <Image
                src="/phone-call.png"
                width={24}
                alt="only icon"
                height={24}
              />
              <span>+6289605106328</span>
            </div>
          </div>
        </nav>
        <nav className="lg:my-5">
          <h3 className="w-fit text-3xl font-bold text-textPrimary">
            Working Hours
          </h3>
          <div className="my-3 flex flex-col gap-2 text-sm text-white">
            <span>Mon-Fri: 9:00AM - 9:00PM</span>
            <span>Sat-Sun: 24 Hours</span>
          </div>
        </nav>
      </footer>
      <div className="bg-main">
        <span className="block w-full py-5 text-center text-sm text-white">
          &copy; Copyright 2024 - All right reserved by Ciptaning Homecare
        </span>
      </div>
    </>
  );
}
