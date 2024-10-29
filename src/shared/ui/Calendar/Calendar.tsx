import { months, years } from 'src/services/const';
import 'src/shared/ui/Calendar/Calendar.scss';
import {
  fetchGetDevelopment,
  fetchGetEmployers,
  fetchGetInvolvement,
  selectCharts,
  setEndMonth,
  setSelectedMonths,
  setSelectedYear,
  setStartMonth,
} from 'src/store/features/slice/chartsSlice';
import { setIsOpenCalendar } from 'src/store/features/slice/skillSlice';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

export const Calendar = () => {
  const dispatch = useAppDispatch();
  const { selectedYear, selectedMonths, startMonth, endMonth } =
    useAppSelector(selectCharts);

  const handleYearSelect = (year: string) => {
    dispatch(setSelectedYear(year));
  };

  const handleMonthSelect = (monthValue: string) => {
    const monthIndex = months.findIndex((month) => month.value === monthValue);
    if (monthIndex === -1) return;

    if (!startMonth) {
      dispatch(setStartMonth(monthValue));
      dispatch(setSelectedMonths([monthValue]));
    } else if (!endMonth) {
      const startIndex = months.findIndex(
        (month) => month.value === startMonth
      );

      if (monthIndex >= startIndex) {
        dispatch(setEndMonth(monthValue));
        dispatch(
          setSelectedMonths(
            months.slice(startIndex, monthIndex + 1).map((month) => month.value)
          )
        );
      } else {
        dispatch(setEndMonth(startMonth));
        dispatch(setStartMonth(monthValue));
        dispatch(
          setSelectedMonths(
            months.slice(monthIndex, startIndex + 1).map((month) => month.value)
          )
        );
      }
    } else {
      dispatch(setStartMonth(monthValue));
      dispatch(setEndMonth(null));
      dispatch(setSelectedMonths([monthValue]));
    }
  };

  const handleSave = () => {
    if (startMonth && endMonth && selectedYear) {
      const params = {
        startMonth,
        startYear: selectedYear,
        endMonth,
        endYear: selectedYear,
      };
      dispatch(fetchGetInvolvement(params));
      dispatch(fetchGetDevelopment(params));
      dispatch(fetchGetEmployers(params));
    }
    dispatch(setIsOpenCalendar(false));
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
