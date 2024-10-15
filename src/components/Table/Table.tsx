import 'src/components/Table/Table.scss';
import { Filter } from 'src/components/Filter/Filter';
import { Icon } from 'src/shared/ui/Icon/Icon';
import { useEffect } from 'react';
import InfoTooltipTable from 'src/shared/ui/InfoTooltipTable/InfoTooltipTable';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  fetchGetEmployees,
  fetchAmountEmployeesId,
  selectEmployees,
  setTooltipIndex,
  setSelectedMemberId,
} from 'src/store/features/slice/membersSlice';
import { roundSkill } from 'src/services/helpers';

export const Table = () => {
  const { employees, selectedMemberId, tooltipIndex, position, grade, worker } =
    useAppSelector(selectEmployees);
  const dispatch = useAppDispatch();

  const handleMouseEnter = (index: number) => {
    dispatch(setTooltipIndex(index));
  };

  const handleMouseLeave = () => {
    dispatch(setTooltipIndex(null));
  };

  const handleRowClick = (id: number) => {
    dispatch(fetchAmountEmployeesId(id));
    dispatch(setSelectedMemberId(id));
  };

  useEffect(() => {
    dispatch(fetchGetEmployees({ position, grade, worker }));
  }, [dispatch, position, grade, worker]);

  return (
    <section className='table'>
      <Filter />
      <table className='table__container'>
        <tbody>
          {selectedMemberId
            ? employees
                .filter((item) => item.id === selectedMemberId)
                .map((item, index) => {
                  const isSelected = selectedMemberId === item.id;
                  let backgroundColorClass = '';
                  if (item.skill >= 0 && item.skill <= 33) {
                    backgroundColorClass = 'table__bg-red';
                  } else if (item.skill >= 34 && item.skill <= 66) {
                    backgroundColorClass = 'table__bg-yellow';
                  } else if (item.skill >= 67 && item.skill <= 100) {
                    backgroundColorClass = 'table__bg-green';
                  }

                  return (
                    <tr
                      key={index}
                      onClick={() => handleRowClick(item.id)}
                      className={`table__row ${
                        isSelected ? 'table__row--selected' : ''
                      }`}
                    >
                      <td className='table__td'>
                        <p className='table__text'>{item.position}</p>
                      </td>
                      <td className='table__td table__td_type_l'>
                        <p className='table__text'>{item.grade}</p>
                      </td>
                      <td className='table__td table__td_type_xl'>
                        <p className='table__text'>{item.worker}</p>
                        {item.bus_factor && (
                          <Icon id='sircle-red' className='svg__sircle-red' />
                        )}
                        {item.key_people && (
                          <Icon
                            id='sircle-green'
                            className='svg__sircle-green'
                          />
                        )}
                        <div
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {item.education.length > 0 && (
                            <Icon id='table-book' className='svg__table-book' />
                          )}
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
                          <p className='table__text'>{roundSkill(item.skill)}</p>
                        </div>
                      </td>
                    </tr>
                  );
                })
            : employees.map((item, index) => {
                let backgroundColorClass = '';
                if (item.skill >= 0 && item.skill <= 33) {
                  backgroundColorClass = 'table__bg-red';
                } else if (item.skill >= 34 && item.skill <= 66) {
                  backgroundColorClass = 'table__bg-yellow';
                } else if (item.skill >= 67 && item.skill <= 100) {
                  backgroundColorClass = 'table__bg-green';
                }
                return (
                  <tr
                    key={index}
                    onClick={() => handleRowClick(item.id)}
                    className='table__row'
                  >
                    <td className='table__td'>
                      <p className='table__text'>{item.position}</p>
                    </td>
                    <td className='table__td table__td_type_l'>
                      <p className='table__text'>{item.grade}</p>
                    </td>
                    <td className='table__td table__td_type_xl'>
                      <p className='table__text'>{item.worker}</p>
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
                        {item.education.length > 0 && (
                          <Icon id='table-book' className='svg__table-book' />
                        )}
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
                        <p className='table__text'>{roundSkill(item.skill)}</p>
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
