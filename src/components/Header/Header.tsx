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
      <div className='header__media_container'>
        <p className='header__media'>Медиа</p>
        <Icon id='arrow'/>
      </div>
      <div className='header__empoyes_container'>
        <div className='header__line_black'>
          <span className='header__empoyes_count'>7</span>
          <p className='header__empoyes'>Сотрудники</p>
        </div>
        <div className='header__line_green'>
          <span className='header__empoyes_count'>7</span>
          <p className='header__empoyes'>Key-people</p>
        </div>
        <div className='header__line_red'>
          <span className='header__empoyes_count'>7</span>
          <p className='header__empoyes'>Bus-factor</p>
        </div>
      </div>

      <div className='header__profile'>
        <div className='header__calendar_container'>
          <Icon id='calendar-black' />
          <h2 className='header__date'>{date}</h2>
        </div>
        <div className='header__avatar_container'>
          <h2 className='header__name'>Петрова Елена</h2>
          <img src={Avatar} className='header__avatar'></img>
        </div>
      </div>
    </header>
  );
};
