import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-[8rem] py-[1rem] relative z-[10]">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/" scroll={false}>
            <Image src="/logo.png" alt="logo" width={70} height={70} />
          </Link>
        </div>
        <ul className="flex gap-4 text-lg">
          <li>
            <Link href="/" scroll={false}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#menu" scroll={false}>
              Our menu
            </Link>
          </li>
          <li>
            <Link href="#dessert" scroll={false}>
              Dessert
            </Link>
          </li>
          <li>
            <Link href="#about" scroll={false}>
              About us
            </Link>
          </li>
          <li>
            <Link href="#contact" scroll={false}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
