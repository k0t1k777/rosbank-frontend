import 'src/shared/ui/InfoTooltipTable/InfoTooltipTable.scss';
import { Icon } from '../Icon/Icon';

export default function InfoTooltipTable() {
  return (
    <section className='info-tooltip'>
      <Icon id='triangle' className='svg__triangle'/>
      <div className='info-tooltip__container'>
        <p className='info-tooltip__title'>Запросы на обучения</p>
          <span className='info-tooltip__text'>Планирование</span>
          <span className='info-tooltip__text'>Решение проблем</span>
          <span className='info-tooltip__text'>Эмоциональный интеллект</span>
      </div>
    </section>
  );
}
