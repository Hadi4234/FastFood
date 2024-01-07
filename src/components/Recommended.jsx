import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { togglePopup } from '../slice/popupSlice';
import Modal from './Modal';

const Recommended = () => {
  const sliderRef = useRef();
  const cardItems = useSelector((state) => state.card.cardList);
  const popups = useSelector((state) => state.popup.popups);
  const dispatch = useDispatch();
  const handleToggle = (popupId) => {
    dispatch(togglePopup({ id: popupId }));
  };

  const settings = {
    className: ' -z-10 overflow-hidden',
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  const filteredData = cardItems.filter((item) => item.IsRecommended === true);
  return (
    <div className=' relative my-10'>
      <div className=' container mx-auto'>
        <div className='  flex flex-row items-center justify-between gap-4'>
          <h3 className='text-3xl'>Recommended</h3>
          <div className='flex flex-row gap-4'>
            <button
              className='text-xl text-customBtn'
              onClick={() => handleToggle('poppup2')}
            >
              add more
            </button>
            <div className='flex flex-row '>
              <button onClick={goToPrevious}>
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
                    d='M15.75 19.5 8.25 12l7.5-7.5'
                  />
                </svg>
              </button>
              <button onClick={goToNext}>
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
                    d='m8.25 4.5 7.5 7.5-7.5 7.5'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {filteredData?.map((item) => (
            <div key={item.Id} className='p-4'>
              <div className='rounded  px-3 py-5'>
                <img
                  src={item.ImageUrl}
                  alt={item.Name}
                  className='mb-2 h-56 w-full rounded object-cover  shadow-md'
                />
                <h3 className=' text-customTextLightGray'>{item.Name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {popups['poppup2'] && <Modal />}
    </div>
  );
};
export default Recommended;
