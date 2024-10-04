import 'src/components/Table/Table.scss';
import { Filter } from 'src/components/Filter/Filter';
import { TABLE_DATA } from 'src/services/const';

export const Table = () => {
  return (
    <section className='table'>
      <Filter />
      <table className='table__container'>
        {/* <colgroup>
          <col style={{ width: '202px' }} />
          <col style={{ width: '106px' }} />
          <col style={{ width: '202px' }} />
          <col style={{ width: '62px' }} />
          <col style={{ width: '96px' }} />
        </colgroup> */}
        <tbody>
          {TABLE_DATA.map((item, index) => (
            <tr className='table__row' key={index}>
              <td className='table__td'>{item.speciality}</td>
              <td className='table__td'>{item.grade}</td>
              <td className='table__td'>{item.employer}</td>
              <td className='table__td'>{item.skill}</td>
              <td className='table__td'>{item.edu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
