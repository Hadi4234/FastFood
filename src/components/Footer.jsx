import { FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className=' flex w-full flex-row justify-around bg-customOrange px-20 py-10'>
      <div className='flex flex-col items-start justify-start gap-12  py-12'>
        <div className=' relative flex items-center  justify-center'>
          <input
            className='mr-10  rounded-2xl py-3 pl-6 pr-24 focus:outline-none md:pr-48'
            type='text'
            placeholder='Enter Your Email'
          />
          <button className=' absolute right-0 mr-12 rounded-2xl bg-customBtn px-3 py-2 text-customWhite '>
            Subscribe
          </button>
        </div>
        <div className='flex flex-col-reverse items-center justify-center gap-6 align-bottom md:flex-row md:justify-around'>
          <div className=' flex flex-col max-md:items-center max-md:justify-center md:mr-10'>
            <h1 className='text-3xl font-bold text-customBlack'>pti</h1>
            <p className='text-lg font-bold text-customBlack'>
              {' '}
              Copyright©Tripp.All Right Reserved
            </p>
          </div>
          <div className='flex flex-row items-center justify-center gap-2'>
            <button className=' rounded-full bg-customBtn p-3 text-customWhite'>
              <FaGoogle />
            </button>
            <button className=' rounded-full bg-customBtn p-3 text-customWhite'>
              <FaTwitter />
            </button>
            <button className=' rounded-full bg-customBtn p-3 text-customWhite'>
              <FaInstagram />
            </button>
          </div>
        </div>
      </div>

      <div className='flex items-end justify-end max-md:hidden '>
        <img
          src='Image2.png'
          className=' h-[300px] w-full object-contain'
          alt=''
        />
      </div>
    </div>
  );
};

export default Footer;
