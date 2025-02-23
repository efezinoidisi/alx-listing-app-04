import { IconProps } from '@/components/common/Icons';
import { JSX } from 'react';
import { DateObject } from 'react-multi-date-picker';

export interface CardProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: Offer;
  image: string;
  discount: string;
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
  description: string;
  reviews: Review[];
}

export interface PillProps {
  name: string;
  image?: (props: IconProps) => JSX.Element;
  handleClick: () => void;
  className?: string;
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

export interface RatingProps {
  rating: number;
}

export interface Offer {
  bed: string;
  occupants: string;
  shower: string;
}

export interface Review {
  id: number;
  name: string;
  dateJoined: string;
  comment: string;
  createdAt: string;
  tag: string;
  avatar: string;
  rating: number;
}

export interface PropertyTitleProps {
  name: string;
  rating: number;
  reviewsLength: number;
  city: string;
  country: string;
  className?: string;
}

export interface ListingProps {
  listing: PropertyProps[];
  sortValue: string;
}
