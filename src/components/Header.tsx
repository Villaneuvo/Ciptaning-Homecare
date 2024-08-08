import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="navbar bg-main text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost px-1 sm:px-4 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-main p-2 text-white shadow"
          >
            <li className="font-bold text-textPrimary">
              <a>Home</a>
            </li>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Team</a>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost ml-0 flex h-20 items-center space-x-2 px-0 text-sm font-bold text-textPrimary sm:px-4 md:text-xl lg:ml-[75px] xl:ml-[150px]"
        >
          <Image
            src="/ini-bencana.jpg"
            alt="logo header"
            height={60}
            width={60}
            className="h-10 w-10 rounded-full md:h-12 md:w-12"
          />
          <span className="whitespace-nowrap">CiptaningHomeCare</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:ml-10 lg:flex xl:ml-0">
        <ul className="xl:text-md menu menu-horizontal px-1">
          <li>
            <Link href="/" className="font-bold text-textPrimary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about-us">About</Link>
          </li>
          <li>
            <Link href="/teams">Teams</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="/"
          className="btn mr-2 flex w-28 flex-col-reverse rounded-3xl border-textPrimary bg-textPrimary px-2 font-medium text-main shadow-xl hover:border-buttonHeader hover:bg-buttonHeader sm:w-36 sm:px-4 lg:mr-[75px] xl:mr-[150px] xl:w-40"
        >
          <Image
            src="/whatsapp.png"
            height={28}
            width={28}
            alt="whatsapp icon"
          />
          <span className="whitespace-nowrap text-[10px] sm:text-sm">
            Whatsapp
          </span>
        </Link>
      </div>
    </header>
  );
}
