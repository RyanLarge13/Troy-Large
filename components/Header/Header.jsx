"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <header className="fixed top-0 w-full">
      <nav>
        <ul className="flex px-2 py-4 justify-around items-center bg-[#222] rounded-b-md shadow-md">
          <li>
            <Link href="/" legacyBehavior>
              <a className={path === "/" ? "text-amber-200" : "text-white"}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/gallery" legacyBehavior>
              <a
                className={
                  path === "/gallery" ? "text-amber-200" : "text-white"
                }
              >
                Gallery
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a
                className={path === "/about" ? "text-amber-200" : "text-white"}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a
                className={
                  path === "/contact" ? "text-amber-200" : "text-white"
                }
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
