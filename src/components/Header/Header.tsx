import 'src/components/Header/Header.scss';
import { useEffect } from 'react';
import { Icon } from 'src/shared/ui/Icon/Icon';
import Avatar from 'src/shared/assets/Avatar.png';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { fetchAmountEmployees, selectEmployees, setDate } from 'src/store/features/slice/membersSlice';

export const Header = () => {
  const { amount, date } = useAppSelector(selectEmployees);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAmountEmployees());
  }, [dispatch]);

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

    dispatch(setDate(formatCurrentDate()));
  }, [dispatch]);

  return (
    <header className='header'>
      <div className='header__media_container'>
        <p className='header__media'>Медиа</p>
        <Icon id='arrow'/>
      </div>
      <div className='header__empoyes_container'>
        <div className='header__line_black'>
          <span className='header__empoyes_count'>{amount.numberOfEmployee}</span>
          <p className='header__empoyes'>Сотрудники</p>
        </div>
        <div className='header__line_green'>
          <span className='header__empoyes_count'>{amount.numberOfKeyPeople}</span>
          <p className='header__empoyes'>Key-people</p>
        </div>
        <div className='header__line_red'>
          <span className='header__empoyes_count'>{amount.numberOfBusFactor}</span>
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
