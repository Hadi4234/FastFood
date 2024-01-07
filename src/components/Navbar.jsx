import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { RiUserLine } from 'react-icons/ri';

const Navbar = () => {
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };
  return (
    <>
      <header className='z-50 flex items-center justify-between gap-4 p-4'>
        <h1 className='text-2xl font-bold text-customBlack'>pti.</h1>
        <div className='flex items-center justify-center'>
          <div className='relative mr-1 md:mr-3 '>
            <input
              type='text'
              className=' rounded-lg border  py-2 pl-10 focus:outline-none md:px-6 md:pl-10 md:pr-40'
              placeholder='Search Audiobook'
            />
            <div
              className='pointer-events-none absolute top-2 flex  
                    items-center pl-2  
                    text-customBtn md:pl-3'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
            </div>
          </div>
          <Popover className='relative '>
            <Popover.Button
              as='div'
              className=' flex flex-row items-center justify-between gap-8 rounded-lg bg-customWhite px-2 py-2 font-medium text-customBlack focus:outline-customTextLightGray  md:px-4'
              onClick={toggleDiv}
            >
              <h3>MENU</h3>
              <FaChevronDown />
            </Popover.Button>
            {showDiv && (
              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                <Popover.Panel className='absolute mt-2 flex  flex-col rounded-lg bg-customWhite font-normal '>
                  <button className='my-1 mt-3 cursor-pointer px-1 py-2 text-customTextBlack  hover:bg-customGray hover:text-customBtn '>
                    Home
                  </button>
                  <button className='my-1 cursor-pointer px-1 py-2   text-customTextBlack  hover:bg-customGray hover:text-customBtn'>
                    Details
                  </button>
                  <button className='my-1 cursor-pointer px-1 py-2   text-customTextBlack  hover:bg-customGray hover:text-customBtn'>
                    Category
                  </button>
                  <button className='my-1 cursor-pointer px-1 py-2   text-customTextBlack  hover:bg-customGray hover:text-customBtn'>
                    My Favorites
                  </button>
                  <button className='my-1 cursor-pointer px-1 py-2   text-customTextBlack  hover:bg-customGray hover:text-customBtn'>
                    Profile
                  </button>
                  <button className='my-1 mb-3 cursor-pointer px-1 py-2   text-customTextBlack  hover:bg-customGray hover:text-customBtn'>
                    Log in/Sign Up
                  </button>
                </Popover.Panel>
              </Transition>
            )}
          </Popover>
        </div>

        <div className=' rounded-full bg-customBtn p-3 text-2xl text-customWhite max-md:hidden'>
          <RiUserLine />
        </div>
      </header>
    </>
  );
};

export default Navbar;
