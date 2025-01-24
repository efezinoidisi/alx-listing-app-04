import { ACCOMMODATION_TYPES } from '@/constants';
import Pill from './Pill';

const AccomodationTypes = () => {
  return (
    <div className='flex gap-12 overflow-x-auto w-full text-[#616161] px-21 md:px-10 lg:px-60'>
      {ACCOMMODATION_TYPES.map((accommodationType) => {
        return (
          <Pill
            key={accommodationType.name}
            name={accommodationType.name}
            image={accommodationType.image}
            handleClick={() => {}}
          />
        );
      })}
    </div>
  );
};

export default AccomodationTypes;
