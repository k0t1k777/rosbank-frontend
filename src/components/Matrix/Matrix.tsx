import { useState } from 'react';
import 'src/components/Matrix/Matrix.scss';
import { MATRIX_DATA } from 'src/services/const';
import { Icon } from 'src/shared/ui/Icon/Icon';
import InfoTooltipMatrix from 'src/shared/ui/InfoTooltipMatrixHigh/InfoTooltipMatrixHigh';
import InfoTooltipMatrixLow from 'src/shared/ui/InfoTooltipMatrixLow/InfoTooltipMatrixLow';
import InfoTooltipMatrixMiddle from 'src/shared/ui/InfoTooltipMatrixMiddle/InfoTooltipMatrixMiddle';
import Subtitile from 'src/shared/ui/Subtitle/Subtitle';

const LIST_ITEM = ['Костин М.', ' Акимов Р.', 'Филатов Т.', 'Сорокин М.'];

export const Matrix = () => {
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setTooltipIndex(index);
  };

  const handleMouseLeave = () => {
    setTooltipIndex(null);
  };

  return (
    <section className='matrix'>
      <Subtitile text='Матрица оценки потенциала сотрудников' />
      <div className='matrix__container'>
        <div className='matrix__row'>
          <div className='matrix__high_label-vertical'>
            <div className='matrix__label_vertiacal'>высокая</div>
          </div>
          <div className='matrix__cell'>
            {LIST_ITEM.length > 0 ? (
              <>
                <ul className='matrix__cell_list'>
                  {LIST_ITEM.map((item, index) => (
                    <li key={index} className='matrix__cell_item'>
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Icon id='help' className='svg__help' />
                </div>
              </>
            ) : (
              <p className='matrix__cell_text'>{MATRIX_DATA.mentor}</p>
            )}
            {tooltipIndex === 0 && (
              <InfoTooltipMatrix text={MATRIX_DATA.mentor} />
            )}
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>{MATRIX_DATA.iniciative}</p>
            <div
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon id='help' className='svg__help' />
            </div>
            {tooltipIndex === 1 && (
              <InfoTooltipMatrix text={MATRIX_DATA.iniciative} />
            )}
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>{MATRIX_DATA.careare}</p>
            <div
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon id='help' className='svg__help' />
            </div>
            {tooltipIndex === 2 && (
              <InfoTooltipMatrix text={MATRIX_DATA.careare} />
            )}
          </div>
        </div>

        <div className='matrix__row'>
          <div className='matrix__middle_label-vertical'>
            <div className='matrix__label_vertiacal'>средняя</div>
            <p className='matrix__label_engagement'>Вовлеченность</p>
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>{MATRIX_DATA.task}</p>
            <div
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon id='help' className='svg__help' />
            </div>
            {tooltipIndex === 3 && (
              <InfoTooltipMatrixMiddle
                text={MATRIX_DATA.task}
                className='_type_midle'
              />
            )}
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>{MATRIX_DATA.education}</p>
            <div
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon id='help' className='svg__help' />
            </div>
            {tooltipIndex === 4 && (
              <InfoTooltipMatrixMiddle text={MATRIX_DATA.education} />
            )}
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>{MATRIX_DATA.project}</p>
            <div
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon id='help' className='svg__help' />
            </div>
            {tooltipIndex === 5 && (
              <InfoTooltipMatrixMiddle text={MATRIX_DATA.project} />
            )}
          </div>
        </div>

        <div className='matrix__row'>
          <div className='matrix__row_label-vertical'>
            <div className='matrix__label_vertiacal'>низкая</div>
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>{MATRIX_DATA.editTask}</p>
            <div
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon id='help' className='svg__help' />
            </div>
            {tooltipIndex === 6 && (
              <InfoTooltipMatrixLow text={MATRIX_DATA.editTask} />
            )}
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'>{MATRIX_DATA.learning}</p>
            <div
              onMouseEnter={() => handleMouseEnter(7)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon id='help' className='svg__help' />
            </div>
            {tooltipIndex === 7 && (
              <InfoTooltipMatrixLow text={MATRIX_DATA.learning} />
            )}
          </div>
          <div className='matrix__cell'>
            <p className='matrix__cell_text'> {MATRIX_DATA.engagement}</p>
            <div
              onMouseEnter={() => handleMouseEnter(8)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon id='help' className='svg__help' />
            </div>
            {tooltipIndex === 8 && (
              <InfoTooltipMatrixLow text={MATRIX_DATA.engagement} />
            )}
          </div>
        </div>
        <div className='matrix__row'>
          <div className='matrix__row_label-horizontal'>
            <p className='matrix__label_horizontal'>низкая</p>
          </div>
          <div className='matrix__middle-label-horizontal'>
            <p className='matrix__label_horizontal'>средняя</p>
          </div>
          <div className='matrix__high-label-horizontal'>
            <p className='matrix__label_horizontal'>высокая</p>
          </div>
        </div>
        <div className='matrix__row_skills'>Оценка навыков</div>
      </div>
    </section>
  );
};
