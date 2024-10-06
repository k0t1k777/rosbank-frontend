import 'src/components/Matrix/Matrix.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';

export const Matrix = () => {
  return (
    <section className='matrix'>
      <h2 className='matrix__title'>Матрица оценки потенциала сотрудников</h2>
      <div className='matrix__container'>
        <div className='matrix__row'>
          <div className='matrix__high-label'>
            <div className='matrix__label'>ВЫСОКАЯ</div>
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>Назначить в роли менторов</p>
            <Icon id='help' className='svg__help' />
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>Участвовать в инициативах</p>
            <Icon id='help' className='svg__help' />
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>Достигать карьерные цели</p>
            <Icon id='help' className='svg__help' />
          </div>
        </div>

        <div className='matrix__row'>
          <div className='matrix__middle-label'>
            <div className='matrix__label'>СРЕДНЯЯ</div>
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>Правильно распределять задачи</p>
            <Icon id='help' className='svg__help' />
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>
              Создавать возможности для обучения и развития
            </p>
            <Icon id='help' className='svg__help' />
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>
              Вовлекать в стратегические проекты
            </p>
            <Icon id='help' className='svg__help' />
          </div>
        </div>

        <div className='matrix__row'>
          <div className='matrix__low-label'>
            <div className='matrix__label'>НИЗКАЯ</div>
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>Изменить роли/задачи</p>
            <Icon id='help' className='svg__help' />
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>
              Разработать программу поддержки и обучения
            </p>
            <Icon id='help' className='svg__help' />
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>Повышение вовлеченности</p>
            <Icon id='help' className='svg__help' />
          </div>
        </div>

        <div className='matrix__down_container'>
          <div className='matrix__down_text'>НИЗКАЯ</div>
          <div className='matrix__down_text'>СРЕДНЯЯ</div>
          <div className='matrix__down_text'>ВЫСОКАЯ</div>
        </div>
      </div>
    </section>
  );
};
