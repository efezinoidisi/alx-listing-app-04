import { IconProps } from '@/components/common/Icons';
import { JSX } from 'react';
import { DateObject } from 'react-multi-date-picker';

export interface CardProps {
  name: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: React.ReactNode;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: Array<string>;
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface PillProps {
  name: string;
  image: (props: IconProps) => JSX.Element;
}

export interface MobileSearchBarProps {
  closeModal: () => void;
  searchValues: HeaderSearchValues;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDatePickerChange: (dateObject: DateObject[]) => void;
  clearAllSearchValues: () => void;
  handleSearch: () => void;
}

export interface HeaderSearchValues {
  location: string;
  dates: [string, string];
  people: string;
}
