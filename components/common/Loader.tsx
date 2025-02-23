import { Loader2 } from 'lucide-react';

const Loader = ({ text = '' }: { text?: string }) => {
  return (
    <div className='grid place-items-center'>
      <Loader2 className='animate-spin text-primary' />
      {text ? <p>{text}</p> : null}
    </div>
  );
};

export default Loader;
