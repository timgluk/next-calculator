import Image from "next/image";
import Link from "next/link";
import logo from "../public/dintek-logo.png"

const Header = () => (
  <>
    <header className='relative flex justify-center w-full '>
      <div className='flex flex-row justify-between m-12 w-3/4'>
        <Link href="/">
          <div className="cursor-pointer">
            <Image 
              src={logo}
              alt="dintek logo"
              width={250}
              height={105}
            />
          </div>
        </ Link>
        <nav className='flex flex-row gap-5 items-center mr-10 text-white'>
          <Link href="/"><a className='hover:text-blue-400 underline'>О нас</a></Link>
          <Link href="/calc"><a className='hover:text-blue-400 underline'>Калькулятор</a></Link>
          <Link href="#"><a className='hover:text-blue-400 underline'>Блог</a></Link>
        </nav>
      </div>
    </header>
  </>
)

export default Header;
