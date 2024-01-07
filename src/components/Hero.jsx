const Hero = () => {
  return (
    <div className=' mt-16 flex flex-col items-center justify-center gap-4 rounded-3xl md:m-10  md:mt-20 md:flex-row md:bg-customOrange md:px-10'>
      <div className=' md:flex md:flex-col md:items-start md:justify-center md:px-10'>
        <h1 className=' flex items-center  justify-center text-wrap text-3xl font-semibold text-customTextBlack md:text-4xl md:text-customWhite'>
          Delever Food To Your Door Step
        </h1>
        <p className=' text-md flex items-start justify-center text-customTextLightGray md:items-center md:text-2xl md:text-customWhite'>
          Authentic Food,Quick Service,Fast Delivery
        </p>
      </div>
      <div className='mt-10   max-md:rounded-2xl max-md:bg-customHero '>
        <img
          className='w-full max-md:-mt-20 md:object-contain'
          src='Image1.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Hero;
