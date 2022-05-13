import Image from "next/image"
// import picurre from '../public/main-img2.webp'

const MainBgImg = ({ src }) => (
  <div className='absolute inset-0 h-screen overflow-hidden -z-10 w-full'>
    <Image 
      src={src}
      alt='main image'
      placeholder="blur"
      quality={100}
      width={1920}
      height={694}
    />
  </div>
)

export default MainBgImg;
