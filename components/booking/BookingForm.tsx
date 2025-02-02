import Input from '../common/Input';

const BookingForm = () => {
  return (
    <div className='bg-white rounded-lg'>
      <h2 className='text-xl font-bold'>Contact Detail</h2>
      <form className='mt-5'>
        {/* Contact Information */}
        <div className='grid md:grid-cols-2 gap-4'>
          <Input label='First Name' id='firstName' />

          <Input label='Last Name' id='lastName' />

          <Input label='Email' id='email' type='email' />

          <Input label='Phone Number' id='phoneNumber' />
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
        <h2 className='text-xl font-semibold mt-6'>Pay with</h2>
        <div className='mt-4'>
          <label>Card Number</label>
          <input type='text' className='border p-2 w-full mt-2' />
        </div>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div>
            <label>Expiration Date</label>
            <input type='text' className='border p-2 w-full mt-2' />
          </div>
          <div>
            <label>CVV</label>
            <input type='text' className='border p-2 w-full mt-2' />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className='text-xl font-semibold mt-6'>Billing Address</h2>
        <div className='mt-4'>
          <label>Street Address</label>
          <input type='text' className='border p-2 w-full mt-2' />
        </div>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div>
            <label>City</label>
            <input type='text' className='border p-2 w-full mt-2' />
          </div>
          <div>
            <label>State</label>
            <input type='text' className='border p-2 w-full mt-2' />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div>
            <label>Zip Code</label>
            <input type='text' className='border p-2 w-full mt-2' />
          </div>
          <div>
            <label>Country</label>
            <input type='text' className='border p-2 w-full mt-2' />
          </div>
        </div>

        {/* Submit Button */}
        <button className='mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full'>
          Confirm & Pay
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
