import 'src/components/Table/Table.scss';
import { Filter } from 'src/components/Filter/Filter';
import { Icon } from 'src/shared/ui/Icon/Icon';
import { useEffect } from 'react';
import InfoTooltipTable from 'src/shared/ui/InfoTooltipTable/InfoTooltipTable';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  fetchGetEmployees,
  selectEmployees,
  setTooltipIndex,
} from 'src/store/features/slice/membersSlice';

export const Table = () => {
  const { employees, tooltipIndex } = useAppSelector(selectEmployees);
  console.log('employees: ', employees);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetEmployees());
  }, [dispatch]);

  const handleMouseEnter = (index: number) => {
    dispatch(setTooltipIndex(index));
  };

  const handleMouseLeave = () => {
    dispatch(setTooltipIndex(null));
  };

  return (
    <section className='table'>
      <Filter />
      <table className='table__container'>
        <tbody>
          {employees.map((item, index) => {
            let backgroundColorClass = '';
            if (item.skill >= 0 && item.skill <= 33) {
              backgroundColorClass = 'table__bg-red';
            } else if (item.skill >= 34 && item.skill <= 66) {
              backgroundColorClass = 'table__bg-yellow';
            } else if (item.skill >= 67 && item.skill <= 100) {
              backgroundColorClass = 'table__bg-green';
            }

            return (
              <tr className='table__row' key={index}>
                <td className='table__td'>{item.position}</td>
                <td className='table__td table__td_type_l'>{item.grade}</td>
                <td className='table__td table__td_type_xl'>
                  {item.worker}
                  {item.bus_factor && (
                    <Icon id='sircle-red' className='svg__sircle-red' />
                  )}
                  {item.key_people && (
                    <Icon id='sircle-green' className='svg__sircle-green' />
                  )}
                  <div
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.education.length > 0 && <Icon id='table-book' className='svg__table-book' />}
                  </div>
                  {tooltipIndex === index && (
                    <InfoTooltipTable
                      trainingNames={item.education.map(
                        (education) => education.training_name
                      )}
                    />
                  )}
                </td>
                <td className='table__td table__td_type_s'>
                  <div
                    className={`table__td_type_border ${backgroundColorClass}`}
                  >
                    {item.skill}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
