import { useState } from 'react';
import { months, years } from 'src/services/const';
import 'src/shared/ui/Calendar/Calendar.scss';
import {
  fetchGetDevelopment,
  fetchGetEmployers,
  fetchGetInvolvement,
} from 'src/store/features/slice/chartsSlice';
import { setIsOpen } from 'src/store/features/slice/skillSlice';
import { useAppDispatch } from 'src/store/hooks';

export const Calendar = () => {
  const dispatch = useAppDispatch();
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [firstSelectedMonth, setFirstSelectedMonth] = useState<string | null>(
    null
  );
  const [startMonth, setStartMonth] = useState<string | null>(null);
  const [endMonth, setEndMonth] = useState<string | null>(null);

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
  };

  const handleMonthSelect = (monthValue: string) => {
    const monthIndex = months.findIndex((month) => month.value === monthValue);
    if (monthIndex === -1) return;

    if (!firstSelectedMonth) {
      setFirstSelectedMonth(monthValue);
      setStartMonth(monthValue);
      setSelectedMonths([monthValue]);
    } else {
      const firstIndex = months.findIndex(
        (month) => month.value === firstSelectedMonth
      );
      const selectedMonthsRange =
        monthIndex >= firstIndex
          ? months.slice(firstIndex, monthIndex + 1).map((month) => month.value)
          : months
              .slice(monthIndex, firstIndex + 1)
              .map((month) => month.value);

      setSelectedMonths(selectedMonthsRange);
      setEndMonth(monthValue);
      setFirstSelectedMonth(null);
    }
  };

  const handleSave = () => {
    if (startMonth && endMonth && selectedYear) {
      dispatch(
        fetchGetInvolvement({
          startMonth: startMonth,
          startYear: selectedYear,
          endMonth: endMonth,
          endYear: selectedYear,
        })
      );
      dispatch(
        fetchGetDevelopment({
          startMonth: startMonth,
          startYear: selectedYear,
          endMonth: endMonth,
          endYear: selectedYear,
        })
      );
      dispatch(
        fetchGetEmployers({
          startMonth: startMonth,
          startYear: selectedYear,
          endMonth: endMonth,
          endYear: selectedYear,
        })
      );
    }
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
        {months.map((month, index) => (
          <div
            key={index}
            className={`calendar__months_item ${
              selectedMonths.includes(month.value)
                ? 'calendar__months_item--selected'
                : ''
            }`}
            onClick={() => handleMonthSelect(month.value)}
          >
            {month.label}
          </div>
        ))}
      </div>
      <p className='calendar__button' onClick={handleSave}>
        Применить
      </p>
    </div>
  );
};
