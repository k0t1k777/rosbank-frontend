import 'src/shared/ui/InfoTooltipTable/InfoTooltipTable.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';
import { InfoTooltipTableProps } from 'src/services/types';

export default function InfoTooltipTable({
  trainingNames,
}: InfoTooltipTableProps) {
  return (
    <section className='info-table'>
      <Icon id='triangle' className='svg__triangle' />
      <div className='info-table__container'>
        <p className='info-table__title'>Запросы на обучения</p>
        {trainingNames.length > 0 &&
          trainingNames.map((name, index) => (
            <span key={index} className='info-table__text'>
              {name}
            </span>
          ))}
      </div>
    </section>
  );
}
