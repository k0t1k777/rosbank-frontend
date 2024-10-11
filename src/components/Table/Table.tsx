import 'src/components/Table/Table.scss';
import { Filter } from 'src/components/Filter/Filter';
import { TABLE_DATA } from 'src/services/const';
import { Icon } from 'src/shared/ui/Icon/Icon';
import { useState } from 'react';
import InfoTooltipTable from 'src/shared/ui/InfoTooltipTable/InfoTooltipTable';

export const Table = () => {
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setTooltipIndex(index);
  };

  const handleMouseLeave = () => {
    setTooltipIndex(null);
  };

  return (
    <section className='table'>
      <Filter />
      <table className='table__container'>
        <tbody>
          {TABLE_DATA.map((item, index) => {
            
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
                <td className='table__td'>{item.speciality}</td>
                <td className='table__td table__td_type_l'>{item.grade}</td>
                <td className='table__td table__td_type_xl'>
                  {item.employer}
                  <div
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Icon id='table-book' className='svg__table-book' />
                  </div>
                  {tooltipIndex === index && <InfoTooltipTable />}
                  <Icon id='sircle-red' className='svg__sircle-red' />
                  <Icon id='sircle-green' className='svg__sircle-green' />
                </td>
                <td className='table__td table__td_type_s'>
                  <div
                    className={`table__td_type_border ${backgroundColorClass}`}
                  >
                    {item.skill}
                  </div>
                </td>
                <td className='table__td table__td_type_m'></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
