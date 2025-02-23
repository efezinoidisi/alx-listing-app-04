import { BookingFormData } from '@/interfaces';
import { ChangeEvent } from 'react';
import Input from '../common/Input';

const BookingForm = ({
  formData,
  handleChange,
}: {
  formData: BookingFormData;
  handleChange: (
    event: ChangeEvent<HTMLInputElement>,
    isBooking?: boolean
  ) => void;
}) => {
  return (
    <div className='bg-white rounded-lg'>
      <h2 className='text-xl font-bold'>Contact Detail</h2>
      <form className='mt-5'>
        {/* Contact Information */}
        <div className='grid md:grid-cols-2 gap-4'>
          <Input
            label='First Name'
            id='firstName'
            onChange={handleChange}
            value={formData.firstName}
          />

          <Input
            label='Last Name'
            id='lastName'
            onChange={handleChange}
            value={formData.lastName}
          />

          <Input
            label='Email'
            id='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            label='Phone Number'
            id='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <Input
          label='Receive text message update about your booking. Messages rates may apply.'
          id='messageConsent'
          type='checkbox'
          className='flex-row-reverse items-center justify-end mt-4'
          inputStyles='w-fit accent-primary'
          labelStyles='font-medium text-sm'
        />

        {/* Payment Information */}
        <h2 className='text-xl font-semibold mt-6 mb-4'>Pay with</h2>
        <Input
          type='password'
          className=''
          value={formData.cardNumber}
          onChange={handleChange}
          placeholder='Card number'
          id='cardNumber'
        />

        <div className='grid grid-cols-2'>
          <Input
            className=''
            value={formData.expirationDate}
            placeholder='Expiration Date'
            id='expirationDate'
          />

          <Input
            className=''
            id='cvv'
            value={formData.cvv}
            onChange={handleChange}
            placeholder='CVV'
          />
        </div>

        {/* Billing Address */}
        <h2 className='text-xl font-semibold mt-6 mb-4'>Billing Address</h2>

        <Input
          id='street'
          value={formData.billingAddress.street}
          onChange={(e) => handleChange(e, true)}
          placeholder='Street Address'
          className=''
        />
        <Input
          id='apartment'
          value={formData.billingAddress.apartment}
          onChange={(e) => handleChange(e, true)}
          placeholder='Apt or suite number'
          className=''
        />
        <Input
          id='city'
          value={formData.billingAddress.city}
          onChange={(e) => handleChange(e, true)}
          placeholder='City'
          className=''
        />
        <div className='grid grid-cols-2'>
          <Input
            id='state'
            value={formData.billingAddress.state}
            onChange={(e) => handleChange(e, true)}
            placeholder=''
            className=''
          />
          <Input
            id='zipcode'
            value={formData.billingAddress.zip}
            onChange={(e) => handleChange(e, true)}
            placeholder='Zip Code'
            className=''
          />
        </div>
        <Input
          id='country'
          value={formData.billingAddress.country}
          onChange={(e) => handleChange(e, true)}
          placeholder='Country'
          className=''
        />
      </form>
    </div>
  );
};

export default BookingForm;
