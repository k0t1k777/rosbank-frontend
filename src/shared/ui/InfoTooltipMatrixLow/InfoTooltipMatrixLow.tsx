import 'src/shared/ui/InfoTooltipMatrixLow/InfoTooltipMatrixLow.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';

interface InfoTooltipProps {
  text: string;
  className?: string;
}

export default function InfoTooltipMatrixLow({
  text,
  className,
}: InfoTooltipProps) {
  return (
    <section className={`info-matrix-low ${className ? className : ''}`}>
      <Icon id='triangle-yellow-low' className='svg__triangle-yellow' />
      <div className='info-matrix-low__container'>
        <p className='info-matrix-low__title'>Рекомендация</p>
        <span className='info-matrix-low__text'>{text}</span>
      </div>
    </section>
  );
}
