import { useState } from 'react';

export default function useToggle(
  initialState: boolean = false
): [boolean, () => void] {
  const [value, setValue] = useState(initialState);

  const toggleValue = () => {
    setValue((prevState) => !prevState);
  };

  return [value, toggleValue];
}
