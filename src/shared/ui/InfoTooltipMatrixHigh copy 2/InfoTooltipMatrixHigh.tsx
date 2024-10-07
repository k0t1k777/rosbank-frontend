import 'src/shared/ui/InfoTooltipMatrixHigh/InfoTooltipMatrixHigh.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';

interface InfoTooltipProps {
  text: string;
  className?: string;
}

export default function InfoTooltipMatrixHigh({
  text,
  className,
}: InfoTooltipProps) {
  return (
    <section className={`info-matrix ${className ? className : ''}`}>
      <Icon id='triangle-green' className='svg__triangle-green' />
      <div className='info-matrix__container'>
        <p className='info-matrix__title'>Рекомендация</p>
        <span className='info-matrix__text'>{text}</span>
      </div>
    </section>
  );
}
