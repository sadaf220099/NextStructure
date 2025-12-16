import Link from "next/link";
import Button from "./button";
import Input from "./input";

export default function Navigation() {
    return <header className="grid grid-cols-3">
        <div className=""></div>
        <nav className=" text-black py-4">
            <div className="container mx-auto">
                <ul className="flex space-x-4">
                    <li><Link href="/" className="text-base font-medium hover:text-gray-300">Home</Link></li>
                    <li><Link href="/about" className="text-base font-medium hover:text-gray-300">About</Link></li>
                    <li><Link href="/profile" className="text-base font-medium hover:text-gray-300">Profile</Link></li>
                </ul>
            </div>
        </nav>
    </header>
}