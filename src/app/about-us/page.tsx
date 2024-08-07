import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      {/* Jumbotron */}
      <section className="wrapper flex min-h-screen flex-col-reverse items-center justify-between bg-main p-4 lg:flex-row lg:p-0 xl:min-h-[75vh]">
        <div className="wrapper-text mx-auto lg:mx-[170px] lg:pt-4">
          <h1 className="mt-10 w-full text-3xl font-extrabold leading-relaxed text-textPrimary drop-shadow-lg lg:mt-0 lg:w-5/6 xl:w-[600px]">
            Om Swastiastu, Salam dari Perawat Ciptaning Homecare
          </h1>
          <p className="my-5 w-full text-justify text-sm font-normal leading-loose text-white lg:w-[570px]">
            Established in 2023, Ciptaning Homecare has quickly become a trusted
            name in home healthcare services. Our mission is to provide
            personalized, compassionate, and professional care to individuals in
            the comfort of their own homes. <br /> From post-operative care to
            elderly assistance, our highly trained and dedicated staff are
            committed to ensuring the well-being and dignity of every client.
            With a focus on quality and reliability, Ciptaning Homecare stands
            as a beacon of excellence, delivering peace of mind to families and
            enhancing the quality of life for those we serve.
          </p>
        </div>
        <div className="h-fit w-fit">
          <Image
            src="/nurse-hd.png"
            alt="a doctor and a nurse"
            width={1000}
            height={1000}
            className="h-full w-full"
          />
        </div>
      </section>
      {/* Why We Build This */}
      <div className="wrapper grid h-[85vh] grid-cols-2 p-40">
        <div className="wrapper-image-build h-fit w-fit">
          <Image
            src="/hospital-building-hd.png"
            alt="why we build this"
            width={800}
            height={700}
            className="h-full w-full"
          />
        </div>
        <div className="wrapper-text-build my-auto h-fit w-[690px] translate-x-[-13rem] bg-main p-5">
          <h1 className="mt-10 text-3xl font-extrabold leading-relaxed text-textPrimary drop-shadow-lg lg:mt-0">
            Why We Build This
          </h1>
          <p className="my-5 text-justify text-sm font-normal leading-relaxed text-white">
            Ciptaning Homecare Nurses are here to provide the best services in
            the healing process by improving the health status of patients and
            ensuring the comfort and trust of their families.
            <br />
            <br />
            All Sri Rahayu Homecare Nurses are guaranteed to have formal
            education in Nursing. With youthful spirit, effective communication,
            and patient comfort as our top priorities, we are committed to
            delivering excellent care.
            <br />
            <br />
            {`With such strong dedication, we have the vision and mission of 'viva
            la vida' where the winner takes it all`}
          </p>
        </div>
      </div>

      {/* Our Journey */}
      <div className="mx-4 grid h-fit grid-cols-2 md:mx-10 lg:mx-40 lg:mb-20">
        <div className="wrapper-choosing-us mt-12 items-center lg:mt-24">
          <h2 className="text-md font-extrabold uppercase text-main opacity-65">
            Our Culture
          </h2>
          <h3 className="my-3 w-fit text-4xl font-bold tracking-wide text-main">
            Building strong relationships through honesty, transparency, and
            ethical practices.
          </h3>
          <p className="mt-3 w-full max-w-lg text-sm font-normal leading-normal">
            At Ciptaning Homecare Our journey is a testament to our commitment
            to providing the highest quality care to our clients.
          </p>
          <div className="my-5">
            <h2 className="bg-numberBg text-textNumber my-auto mb-2 h-fit w-fit rounded-lg p-1 font-bold tracking-widest">
              01
            </h2>
            <div className="grid-cols-gridCulture grid w-5/6 bg-cardSecondary">
              <div className="h-40 w-40">
                <Image
                  src="/patient-room.jpg"
                  alt="a nurse with a patient"
                  width={160}
                  height={160}
                  className="h-full w-full"
                />
              </div>
              <div className="my-auto">
                <h3 className="mb-2 font-semibold">Compassionate Care</h3>
                <p className="mr-5 text-[12px]">
                  At Ciptaning Homecare, compassion is at the heart of
                  everything we do. We treat every patient with the utmost
                  respect and dignity, ensuring their comfort and well-being.
                </p>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h2 className="bg-numberBg text-textNumber my-auto mb-2 h-fit w-fit rounded-lg p-1 font-bold tracking-widest">
              02
            </h2>
            <div className="grid-cols-gridCulture grid w-5/6 bg-cardSecondary">
              <div className="h-40 w-40">
                <Image
                  src="/patient-room.jpg"
                  alt="a nurse with a patient"
                  width={160}
                  height={160}
                  className="h-full w-full"
                />
              </div>
              <div className="my-auto">
                <h3 className="mb-2 font-semibold">Integrity and Trust</h3>
                <p className="mr-5 text-[12px]">
                  Integrity is a cornerstone of our company values. We build
                  trust with our clients and their families through honesty,
                  transparency, and ethical practices.
                </p>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h2 className="bg-numberBg text-textNumber my-auto mb-2 h-fit w-fit rounded-lg p-1 font-bold tracking-widest">
              03
            </h2>
            <div className="grid-cols-gridCulture grid w-5/6 bg-cardSecondary">
              <div className="h-40 w-40">
                <Image
                  src="/patient-room.jpg"
                  alt="a nurse with a patient"
                  width={160}
                  height={160}
                  className="h-full w-full"
                />
              </div>
              <div className="my-auto">
                <h3 className="mb-2 font-semibold">Professional Growth</h3>
                <p className="mr-5 text-[12px]">
                  Ciptaning Homecare provides ongoing training and opportunities
                  for career advancement, empowering our staff to reach their
                  full potential and achieve their career goals.
                </p>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h2 className="bg-numberBg text-textNumber my-auto mb-2 h-fit w-fit rounded-lg p-1 font-bold tracking-widest">
              04
            </h2>
            <div className="grid-cols-gridCulture grid w-5/6 bg-cardSecondary">
              <div className="h-40 w-40">
                <Image
                  src="/patient-room.jpg"
                  alt="a nurse with a patient"
                  width={160}
                  height={160}
                  className="h-full w-full"
                />
              </div>
              <div className="my-auto">
                <h3 className="mb-2 font-semibold">Employee Well-being</h3>
                <p className="mr-5 text-[12px]">
                  The well-being of our employees is a top priority. We offer a
                  supportive and nurturing work environment, with resources and
                  programs designed to promote physical, mental, and emotional
                  health.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-md font-extrabold uppercase text-main opacity-65">
            Our Journey
          </h2>
          <h3 className="my-3 w-fit text-4xl font-bold tracking-wide text-main">
            A Journey of Growth of Ciptaning Homecare
          </h3>
          <p className="mt-3 w-full max-w-lg text-sm font-normal leading-normal">
            At Ciptaning Homecare Our journey is a testament to our commitment
            to providing the highest quality care to our clients.
          </p>
          <div>
            <h2 className="mt-3 h-fit w-fit rounded-lg p-1 text-xl font-extrabold tracking-wide text-main">
              2021 The Concept
            </h2>
            <ul className="steps steps-vertical">
              <li className="step step-primary text-sm">
                January 2021: Initial Conceptualization
              </li>
              <li className="step step-primary text-sm">
                March 2021: Market Research Begins
              </li>
              <li className="step text-sm">
                July 2021: Feasibility Study Completed
              </li>
              <li className="step text-sm">October 2021: Strategic Planning</li>
            </ul>
          </div>
          <div>
            <h2 className="mt-3 h-fit w-fit rounded-lg p-1 text-xl font-extrabold tracking-wide text-main">
              2022 Laying the Foundation
            </h2>
            <ul className="steps steps-vertical">
              <li className="step step-primary text-sm">
                February 2022: Team Building
              </li>
              <li className="step step-primary text-sm">
                May 2022: Service Development
              </li>
              <li className="step text-sm">
                August 2022: Infrastructure Setup
              </li>
              <li className="step text-sm">November 2022: Pilot Testing</li>
            </ul>
          </div>
          <div>
            <h2 className="mt-3 h-fit w-fit rounded-lg p-1 text-xl font-extrabold tracking-wide text-main">
              2023 Official Launch 🎉
            </h2>
            <ul className="steps steps-vertical">
              <li className="step step-primary text-sm">
                January 2023: Company Registration
              </li>
              <li className="step step-primary text-sm">
                March 2023: Soft Launch
              </li>
              <li className="step text-sm">June 2023: Grand Opening</li>
              <li className="step text-sm">
                July 2023: Welcoming First Clients
              </li>
              <li className="step text-sm">Expansion of Services</li>
              <li className="step text-sm">
                December 2023: Recognition and Growth
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Our Leads */}
      <div className="wrapper-services mt-20 w-full p-6 lg:mt-0">
        <div className="mx-4 md:mx-16 lg:mx-36">
          <div className="wrapper-category-services mt-5 flex flex-col items-center">
            <h2 className="text-center text-3xl font-extrabold text-main md:text-4xl">
              Meet Our Lead Team
            </h2>
            <p className="mt-3 w-full text-center text-sm font-normal leading-normal md:w-[480px] lg:w-[600px]">
              At Ciptaning Homecare, our leadership team is the driving force
              behind our commitment to exceptional care and innovative
              solutions.
            </p>
          </div>
        </div>

        <div className="mx-auto my-5 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="card w-72 bg-base-100 shadow-xl">
              <figure>
                <Image
                  className="h-full w-full"
                  src="/teams-p1.jpg"
                  alt="Shoes"
                  height={200}
                  width={200}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Ni Made Prawiya Ciptaningrum</h2>
                <p className="text-sm opacity-50">CEO & Founder</p>
                <p className="text-justify">
                  With over 15 years of experience in healthcare management and
                  a deep commitment to compassionate care, Prawiya founded the
                  company to bring exceptional homecare services to those in
                  need.
                </p>
              </div>
            </div>
            <div className="card w-72 bg-base-100 shadow-xl">
              <figure>
                <Image
                  className="h-full w-full"
                  src="/teams-p2.jpg"
                  alt="Shoes"
                  height={200}
                  width={200}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Dan Fieri Hernanda Kang</h2>
                <p className="text-sm opacity-50">{`Chief Operating Officer (COO)`}</p>
                <p className="text-justify">
                  With over 15 years of experience in healthcare management and
                  a deep commitment to compassionate care, Prawiya founded the
                  company to bring exceptional homecare services to those in
                  need.
                </p>
              </div>
            </div>
            <div className="card w-72 bg-base-100 shadow-xl">
              <figure>
                <Image
                  className="h-full w-full"
                  src="/teams-p3.jpg"
                  alt="Shoes"
                  width={200}
                  height={200}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Samuel Jason Patrick Kumenap</h2>
                <p className="text-sm opacity-50">{`Chief Nursing Officer (CNO)`}</p>
                <p className="text-justify">
                  With over 15 years of experience in healthcare management and
                  a deep commitment to compassionate care, Prawiya founded the
                  company to bring exceptional homecare services to those in
                  need.
                </p>
              </div>
            </div>
            <div className="card w-72 bg-base-100 shadow-xl">
              <figure>
                <Image
                  src="/teams-p4.jpg"
                  alt="Shoes"
                  width={200}
                  height={200}
                  className="h-full w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Muhammad Daffa Al Fahreza</h2>
                <p className="text-sm opacity-50">{`Chief Information Officer (CIO)`}</p>
                <p className="text-justify">
                  With over 15 years of experience in healthcare management and
                  a deep commitment to compassionate care, Prawiya founded the
                  company to bring exceptional homecare services to those in
                  need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
