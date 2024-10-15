import { useState } from 'react';
import { months, years } from 'src/services/const';
import 'src/shared/ui/Calendar/Calendar.scss';
import { setIsOpen } from 'src/store/features/slice/skillSlice';
import { useAppDispatch } from 'src/store/hooks';

export const Calendar = () => {
  const dispatch = useAppDispatch();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [firstSelectedMonth, setFirstSelectedMonth] = useState<string | null>(null);

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
  };

  const handleMonthSelect = (month: string) => {
    const monthIndex = months.indexOf(month);
    if (!firstSelectedMonth) {
      setFirstSelectedMonth(month);
      setSelectedMonths([month]);
    } else {
      const firstIndex = months.indexOf(firstSelectedMonth);
      const selectedMonthsRange =
        monthIndex >= firstIndex
          ? months.slice(firstIndex, monthIndex + 1)
          : months.slice(monthIndex, firstIndex + 1);

      setSelectedMonths(selectedMonthsRange);
      setFirstSelectedMonth(null);
    }
  };

  const handleSave = (event: React.MouseEvent<HTMLParagraphElement>) => {
    event.stopPropagation();
    dispatch(setIsOpen(false));
  };

  return (
    <div className='calendar'>
      <div className='calendar__years'>
        {years.map((year) => (
          <div
            key={year}
            className={`calendar__years_item ${
              selectedYear === year ? 'calendar__years_item--selected' : ''
            }`}
            onClick={() => handleYearSelect(year)}
          >
            {year}
          </div>
        ))}
      </div>
      <div className='calendar__months'>
        {months.map((month) => (
          <div
            key={month}
            className={`calendar__months_item ${
              selectedMonths.includes(month)
                ? 'calendar__months_item--selected'
                : ''
            }`}
            onClick={() => handleMonthSelect(month)}
          >
            {month}
          </div>
        ))}
      </div>
      <p className='calendar__button' onClick={handleSave}>
        Применить
      </p>
    </div>
  );
};
