import Card from '@/components/common/Card';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  return (
    <main>
      <div>
        <h1>“Find your favorite place here!</h1>
        <p>The best prices for over 2 million properties worldwide.</p>
      </div>

      <div>
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <Card key={property.name} name={property.name} />
        ))}
      </div>
    </main>
  );
}
