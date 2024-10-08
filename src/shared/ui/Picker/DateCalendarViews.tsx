import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarViews() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar', 'DateCalendar']}>      
        <DemoItem label={'поклацайте ниже'}>
          <DateCalendar
            defaultValue={dayjs('2022-04-17')}
            views={['month', 'year']}
            openTo="month"
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

// import 'src/components/Metric/Metric.scss';
// import Subtitile from 'src/shared/ui/Subtitle/Subtitle';
// import { useState } from 'react';
// import Select from 'src/shared/ui/Select/Select';
// import { PROFESSION_DATA } from 'src/services/const';
// import DateCalendarViews from 'src/shared/ui/Picker/DateCalendarViews';


// export const Metric = () => {
// const [picker, setPicker] = useState(false)

//   const [speciality, setSpeciality] = useState('');
//   const handleSelectChange = (value: string, type: 'speciality') => {
//     if (type === 'speciality') {
//       setSpeciality(value);
//     }
//   };

//   return (
//     <section className='metric'>
//       <Subtitile text='Основные метрики команды' />
//       <div className='metric__header-container'>
//         <div className='metric__header_picker'>Календарь
//           {picker && 
//           <DateCalendarViews />
//            }
//         </div>
//         <Select
//           label='Специальность'
//           value={speciality}
//           options={PROFESSION_DATA}
//           setValue={(value) => handleSelectChange(value, 'speciality')}
//         />
//       </div>
//     </section>
//   );
// };
