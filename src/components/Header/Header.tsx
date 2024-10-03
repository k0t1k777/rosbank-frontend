import { useEffect, useState } from 'react';
import 'src/components/Header/Header.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';
import Avatar from 'src/shared/assets/Avatar.png';

export const Header = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const formatCurrentDate = () => {
      const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      };
      const date = new Date();
      const formattedDate = date
        .toLocaleDateString('ru-RU', options)
        .replace('.', '')
        .replace('г.', 'г.');
      return formattedDate;
    };

    setDate(formatCurrentDate());
  }, []);

  return (
    <header className='header'>
      <div className='header__container_media'>
        <p className='header__media header__media_active'>Медиа</p>
        <p className='header__media'>Эквайринг</p>
      </div>
      <div>
        <div>
          <span>7</span>
          <p>Сотрудники</p>
        </div>
        <div>
          <span>7</span>
          <p>Сотрудники</p>
        </div>
        <div>
          <span>7</span>
          <p>Сотрудники</p>
        </div>
      </div>

      <div>
        <div>
          <Icon id='calendar' /> <p className='header'>{date}</p>
        </div>
        <div>
          <p>Петрова Елена</p>
          <img src={Avatar}></img>
        </div>
        <Icon id='exit' />
      </div>
    </header>
  );
};
