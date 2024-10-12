import 'src/shared/ui/InfoTooltipTable/InfoTooltipTable.scss';
import { Icon } from '../Icon/Icon';

export default function InfoTooltipTable() {
  return (
    <section className='info-table'>
      <Icon id='triangle' className='svg__triangle'/>
      <div className='info-table__container'>
        <p className='info-table__title'>Запросы на обучения</p>
          <span className='info-table__text'>Планирование</span>
          <span className='info-table__text'>Решение проблем</span>
      </div>
    </section>
  );
}
