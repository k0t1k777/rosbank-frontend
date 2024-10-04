import React from 'react';

// кастомный хук для закрытия кастомного силекта по оверлею

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, handler]);
};

export default useOutsideClick;
