export interface CardProps {
  id: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: React.ReactNode;
}
