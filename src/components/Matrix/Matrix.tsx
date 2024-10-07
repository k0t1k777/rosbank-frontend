import 'src/components/Matrix/Matrix.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';
import Subtitile from 'src/shared/ui/Subtitle/Subtitle';

const LIST_ITEM = ['Костин М.', ' Акимов Р.', 'Филатов Т.', 'Сорокин М.'];

export const Matrix = () => {
  return (
    <section className='matrix'>
      <Subtitile text='Матрица оценки потенциала сотрудников'/>
      <div className='matrix__container'>
        <div className='matrix__row'>
          <div className='matrix__high_label-vertical'>
            <div className='matrix__label_vertiacal'>ВЫСОКАЯ</div>
          </div>
          <div className='matrix__cell'>
            {LIST_ITEM.length > 0 ? (
              <ul className='matrix__cell_list'>
                {LIST_ITEM.map((item, index) => (
                  <li key={index} className='matrix__cell_item'>{item}</li>
                ))}
              </ul>
            ) : (
              <p className='matrix__cell_text'>Назначить в роли менторов</p>
            )}
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
          <div className='matrix__middle_label-vertical'>
            <div className='matrix__label_vertiacal'>СРЕДНЯЯ</div>
            <p className='matrix__label_engagement'>Вовлеченность</p>
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
          <div className='matrix__row_label-vertical'>
            <div className='matrix__label_vertiacal'>НИЗКАЯ</div>
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
        <div className='matrix__row'>
          <div className='matrix__row_label-horizontal'>
            <p className='matrix__label_horizontal'>НИЗКАЯ</p>
          </div>
          <div className='matrix__middle-label-horizontal'>
            <p className='matrix__label_horizontal'>СРЕДНЯЯ</p>
          </div>
          <div className='matrix__high-label-horizontal'>
            <p className='matrix__label_horizontal'>ВЫСОКАЯ</p>
          </div>
        </div>
        <div className='matrix__row_skills'>Оценка навыков</div>
      </div>    
    </section>
  );
};
