import 'src/components/Matrix/Matrix.scss';
import { MATRIX_DATA } from 'src/services/const';
import { Icon } from 'src/shared/ui/Icon/Icon';
import InfoTooltipMatrix from 'src/shared/ui/InfoTooltipMatrixHigh/InfoTooltipMatrixHigh';
import InfoTooltipMatrixLow from 'src/shared/ui/InfoTooltipMatrixLow/InfoTooltipMatrixLow';
import InfoTooltipMatrixMiddle from 'src/shared/ui/InfoTooltipMatrixMiddle/InfoTooltipMatrixMiddle';
import Subtitile from 'src/shared/ui/Subtitle/Subtitle';
import {
  selectEmployees,
  setTooltip,
} from 'src/store/features/slice/membersSlice';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

export const Matrix = () => {
  const { employees, tooltip } = useAppSelector(selectEmployees);
  const dispatch = useAppDispatch();

  const handleMouseEnter = (index: number) => {
    dispatch(setTooltip(index));
  };

  const handleMouseLeave = () => {
    dispatch(setTooltip(null));
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
            <ul className='matrix__cell_list'>
              {employees.map((employee) => {
                const { assesmentLevel, involvmentLevel } =
                  employee.assesmentOfPotention;
                if (assesmentLevel < 3.3 && involvmentLevel > 6.6) {
                  return (
                    <li key={employee.id} className='matrix__cell_item'>
                      {employee.worker}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {employees.every((employee) => {
              const { assesmentLevel, involvmentLevel } =
                employee.assesmentOfPotention;
              return !(assesmentLevel < 3.3 && involvmentLevel > 6.6);
            }) ? (
              <p
                className='matrix__cell_text'
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
              >
                {MATRIX_DATA.mentor}
              </p>
            ) : (
              <div
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
              >
                <Icon id='help' className='svg__help' />
              </div>
            )}
            {tooltip === 0 && <InfoTooltipMatrix text={MATRIX_DATA.mentor} />}
          </div>
          <div className='matrix__cell'>
            <ul className='matrix__cell_list'>
              {employees.map((employee) => {
                const { assesmentLevel, involvmentLevel } =
                  employee.assesmentOfPotention;
                if (
                  assesmentLevel > 3.3 &&
                  assesmentLevel < 6.6 &&
                  involvmentLevel > 6.6
                ) {
                  return (
                    <li key={employee.id} className='matrix__cell_item'>
                      {employee.worker}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {employees.every((employee) => {
              const { assesmentLevel, involvmentLevel } =
                employee.assesmentOfPotention;
              return !(
                assesmentLevel > 3.3 &&
                assesmentLevel < 6.6 &&
                involvmentLevel > 6.6
              );
            }) ? (
              <p
                className='matrix__cell_text'
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                {MATRIX_DATA.iniciative}
              </p>
            ) : (
              <div
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <Icon id='help' className='svg__help' />
              </div>
            )}
            {tooltip === 1 && (
              <InfoTooltipMatrix text={MATRIX_DATA.iniciative} />
            )}
          </div>
          <div className='matrix__cell'>
            <ul className='matrix__cell_list'>
              {employees.map((employee) => {
                const { assesmentLevel, involvmentLevel } =
                  employee.assesmentOfPotention;
                if (assesmentLevel > 6.6 && involvmentLevel > 6.6) {
                  return (
                    <li key={employee.id} className='matrix__cell_item'>
                      {employee.worker}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {employees.every((employee) => {
              const { assesmentLevel, involvmentLevel } =
                employee.assesmentOfPotention;
              return !(assesmentLevel > 6.6 && involvmentLevel > 6.6);
            }) ? (
              <p
                className='matrix__cell_text'
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                {MATRIX_DATA.careare}
              </p>
            ) : (
              <div
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <Icon id='help' className='svg__help' />
              </div>
            )}
            {tooltip === 2 && <InfoTooltipMatrix text={MATRIX_DATA.careare} />}
          </div>
        </div>
        <div className='matrix__row'>
          <div className='matrix__middle_label-vertical'>
            <div className='matrix__label_vertiacal'>средняя</div>
            <p className='matrix__label_engagement'>Вовлеченность</p>
          </div>
          <div className='matrix__cell'>
            <ul className='matrix__cell_list'>
              {employees.map((employee) => {
                const { assesmentLevel, involvmentLevel } =
                  employee.assesmentOfPotention;
                if (
                  assesmentLevel < 3.3 &&
                  involvmentLevel > 3.3 &&
                  involvmentLevel < 6.6
                ) {
                  return (
                    <li key={employee.id} className='matrix__cell_item'>
                      {employee.worker}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {employees.every((employee) => {
              const { assesmentLevel, involvmentLevel } =
                employee.assesmentOfPotention;
              return !(
                assesmentLevel < 3.3 &&
                involvmentLevel > 3.3 &&
                involvmentLevel < 6.6
              );
            }) ? (
              <p
                className='matrix__cell_text'
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                {MATRIX_DATA.task}
              </p>
            ) : (
              <div
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                <Icon id='help' className='svg__help' />
              </div>
            )}
            {tooltip === 3 && (
              <InfoTooltipMatrixMiddle text={MATRIX_DATA.task} />
            )}
          </div>
          <div className='matrix__cell'>
            <ul className='matrix__cell_list'>
              {employees.map((employee) => {
                const { assesmentLevel, involvmentLevel } =
                  employee.assesmentOfPotention;
                if (
                  assesmentLevel > 3.3 &&
                  involvmentLevel < 6.6 &&
                  involvmentLevel > 3.3 &&
                  involvmentLevel < 6.6
                ) {
                  return (
                    <li key={employee.id} className='matrix__cell_item'>
                      {employee.worker}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {employees.every((employee) => {
              const { assesmentLevel, involvmentLevel } =
                employee.assesmentOfPotention;
              return !(
                assesmentLevel > 3.3 &&
                involvmentLevel < 6.6 &&
                involvmentLevel > 3.3 &&
                involvmentLevel < 6.6
              );
            }) ? (
              <p
                className='matrix__cell_text'
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
              >
                {MATRIX_DATA.education}
              </p>
            ) : (
              <div
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
              >
                <Icon id='help' className='svg__help' />
              </div>
            )}
            {tooltip === 4 && (
              <InfoTooltipMatrixMiddle text={MATRIX_DATA.education} />
            )}
          </div>
          <div className='matrix__cell'>
            <ul className='matrix__cell_list'>
              {employees.map((employee) => {
                const { assesmentLevel, involvmentLevel } =
                  employee.assesmentOfPotention;
                if (
                  assesmentLevel > 3.3 &&
                  involvmentLevel < 6.6 &&
                  involvmentLevel > 3.3 &&
                  involvmentLevel < 6.6
                ) {
                  return (
                    <li key={employee.id} className='matrix__cell_item'>
                      {employee.worker}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {employees.every((employee) => {
              const { assesmentLevel, involvmentLevel } =
                employee.assesmentOfPotention;
              return !(
                assesmentLevel > 3.3 &&
                involvmentLevel < 6.6 &&
                involvmentLevel > 3.3 &&
                involvmentLevel < 6.6
              );
            }) ? (
              <p
                className='matrix__cell_text'
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={handleMouseLeave}
              >
                {MATRIX_DATA.project}
              </p>
            ) : (
              <div
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={handleMouseLeave}
              >
                <Icon id='help' className='svg__help' />
              </div>
            )}
            {tooltip === 5 && (
              <InfoTooltipMatrixMiddle text={MATRIX_DATA.project} />
            )}
          </div>
        </div>

        <div className='matrix__row'>
          <div className='matrix__row_label-vertical'>
            <div className='matrix__label_vertiacal'>низкая</div>
          </div>
          <div className='matrix__cell'>
            <ul className='matrix__cell_list'>
              {employees.map((employee) => {
                const { assesmentLevel, involvmentLevel } =
                  employee.assesmentOfPotention;
                if (assesmentLevel < 3.3 && involvmentLevel < 3.3) {
                  return (
                    <li key={employee.id} className='matrix__cell_item'>
                      {employee.worker}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {employees.every((employee) => {
              const { assesmentLevel, involvmentLevel } =
                employee.assesmentOfPotention;
              return !(assesmentLevel < 3.3 && involvmentLevel < 3.3);
            }) ? (
              <p
                className='matrix__cell_text'
                onMouseEnter={() => handleMouseEnter(6)}
                onMouseLeave={handleMouseLeave}
              >
                {MATRIX_DATA.editTask}
              </p>
            ) : (
              <div
                onMouseEnter={() => handleMouseEnter(6)}
                onMouseLeave={handleMouseLeave}
              >
                <Icon id='help' className='svg__help' />
              </div>
            )}
            {tooltip === 6 && (
              <InfoTooltipMatrixLow text={MATRIX_DATA.editTask} />
            )}
          </div>

          <div className='matrix__cell'>
            <ul className='matrix__cell_list'>
              {employees.map((employee) => {
                const { assesmentLevel, involvmentLevel } =
                  employee.assesmentOfPotention;
                if (
                  assesmentLevel > 3.3 &&
                  assesmentLevel > 6.6 &&
                  involvmentLevel < 3.3
                ) {
                  return (
                    <li key={employee.id} className='matrix__cell_item'>
                      {employee.worker}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {employees.every((employee) => {
              const { assesmentLevel, involvmentLevel } =
                employee.assesmentOfPotention;
              return !(
                assesmentLevel > 3.3 &&
                assesmentLevel > 6.6 &&
                involvmentLevel < 3.3
              );
            }) ? (
              <p
                className='matrix__cell_text'
                onMouseEnter={() => handleMouseEnter(7)}
                onMouseLeave={handleMouseLeave}
              >
                {MATRIX_DATA.learning}
              </p>
            ) : (
              <div
                onMouseEnter={() => handleMouseEnter(7)}
                onMouseLeave={handleMouseLeave}
              >
                <Icon id='help' className='svg__help' />
              </div>
            )}
            {tooltip === 7 && (
              <InfoTooltipMatrixLow text={MATRIX_DATA.learning} />
            )}
          </div>

          <div className='matrix__cell'>
            <ul className='matrix__cell_list'>
              {employees.map((employee) => {
                const { assesmentLevel, involvmentLevel } =
                  employee.assesmentOfPotention;
                if (assesmentLevel > 6.6 && involvmentLevel < 3.3) {
                  return (
                    <li key={employee.id} className='matrix__cell_item'>
                      {employee.worker}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {employees.every((employee) => {
              const { assesmentLevel, involvmentLevel } =
                employee.assesmentOfPotention;
              return !(assesmentLevel > 6.6 && involvmentLevel < 3.3);
            }) ? (
              <p
                className='matrix__cell_text'
                onMouseEnter={() => handleMouseEnter(8)}
                onMouseLeave={handleMouseLeave}
              >
                {MATRIX_DATA.engagement}
              </p>
            ) : (
              <div
                onMouseEnter={() => handleMouseEnter(8)}
                onMouseLeave={handleMouseLeave}
              >
                <Icon id='help' className='svg__help' />
              </div>
            )}
            {tooltip === 8 && (
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
