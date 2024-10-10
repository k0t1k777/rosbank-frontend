import 'src/components/Sidebar/Sidebar.scss';
import { NAV_MENU } from 'src/services/const';
import { Icon } from 'src/shared/ui/Icon/Icon';

export default function Sidebar() {
  return (
    <section className='sidebar'>
      <div className='sidebar__container'>
        <h1 className='sidebar__title'>Starsmap</h1>
        <ul className='sidebar__list'>
        {NAV_MENU.map((item, index) => (
          <li key={index} className='sidebar__item'>
            <Icon id={item.icon} />
            <p className='sidebar__text'>{item.title}</p>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
