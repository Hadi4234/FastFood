import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addItems } from '../slice/cardSlice';
import { closePopup } from '../slice/popupSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newData = { Id: uuidv4(), ...data };
    dispatch(addItems(newData));
    if (data) {
      dispatch(closePopup());
    }
  };
  console.log(errors);

  return (
    <div className=' absolute  -top-20 z-50 flex h-[600px] w-full items-center justify-center rounded-md bg-customOrange bg-opacity-90 p-8 text-customTextBlack transition-all'>
      <div className=' relative cursor-pointer'>
        <button
          className='absolute right-0 top-0 float-end -mr-20 -mt-20 rounded-full bg-customBtn px-3 py-2 md:-mr-36'
          type='button'
          onClick={() => dispatch(closePopup())}
        >
          Close
        </button>
        <form
          className='flex flex-col items-center justify-center gap-4'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              type='text'
              className='rounded-lg border py-2 pl-10 pr-8 md:pr-40'
              placeholder='Enter Item Name'
              {...register('Name', {
                required: 'Name is required.',
                maxLength: 80,
              })}
            />
            <ErrorMessage
              errors={errors}
              name='Name'
              render={({ message }) => <p>{message}</p>}
            />
          </div>
          <input
            type='text'
            className='rounded-lg border py-2 pl-10 pr-8 md:pr-40'
            placeholder='Price'
            {...register('Price', {
              required: 'Price is required.',
              maxLength: 100,
            })}
          />
          <ErrorMessage
            errors={errors}
            name='Price'
            render={({ message }) => <p>{message}</p>}
          />
          <input
            type='text'
            className='rounded-lg border py-2 pl-10 pr-8 md:pr-40'
            placeholder='Image Url eg: Cake.jpg'
            {...register('ImageUrl', { required: 'Image Url is required' })}
          />
          <ErrorMessage
            errors={errors}
            name='ImageUrl'
            render={({ message }) => <p>{message}</p>}
          />

          <label className='flex w-full flex-row justify-between gap-2 rounded-lg border px-4 py-2 '>
            Mark as Popular
            <input type='checkbox' {...register('IsPopular')} />
          </label>
          <label className='flex w-full flex-row justify-between gap-2 rounded-lg border px-4 py-2'>
            Mark as Recommended
            <input type='checkbox' {...register('IsRecommended')} />
          </label>

          <button className='rounded-lg bg-customBtn px-4 py-2 text-customWhite'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Modal;
