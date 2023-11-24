import Link from "next/link";
import Logo from "./assets/logo.svg";
import { IoMenu } from "react-icons/io5";
import Dropdown from "@/store/components/dropdown";

const items = [
  { title: "فروشگاه", href: "/store" },
  { title: "تنظیم کیبورد", href: "/configure" },
  { title: "وبلاگ", href: "/blog" },
];

export default function Header() {
  return (
    <div className="lg:px-2 lg:py-2">
      <div className="navbar bg-base-300 lg:rounded-2xl">
        <div className="navbar-start">
          <Dropdown className="lg:hidden">
            <IoMenu className="w-7 h-7" />
            <ul
              tabIndex={0}
              className="menu mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 text-base"
            >
              {items.map((item) => (
                <li key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </Dropdown>
          <Link href="/" className="hidden lg:flex">
            <Logo
              alt="Onyx Labs Logo"
              className="w-48 btn btn-ghost text-primary mx-2"
            />
          </Link>
        </div>
        <div className="navbar-center">
          <Link href="/" className="lg:hidden">
            <Logo
              alt="Onyx Labs Logo"
              className="w-44 btn btn-ghost text-primary"
            />
          </Link>
          <ul className="menu menu-horizontal px-1 hidden lg:flex text-xl">
            {items.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
}
