import 'src/shared/ui/InfoTooltipMatrixMiddle/InfoTooltipMatrixMiddle.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';

interface InfoTooltipProps {
  text: string;
  className?: string;
}

export default function InfoTooltipMatrixMiddle({
  text,
  className,
}: InfoTooltipProps) {
  return (
    <section className={`info-matrix-middle ${className ? className : ''}`}>
      <Icon id='triangle-grey' className='svg__triangle-grey' />
      <div className='info-matrix-middle__container'>
        <p className='info-matrix-middle__title'>Рекомендация</p>
        <span className='info-matrix-middle__text'>{text}</span>
      </div>
    </section>
  );
}
