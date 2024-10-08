import { useState } from 'react';
import 'src/shared/ui/Calendar/Calendar.scss';

interface CalendarProps {
  setIsOpen: (type: boolean) => void;
}

export const Calendar = ({ setIsOpen }: CalendarProps) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [firstSelectedMonth, setFirstSelectedMonth] = useState<string | null>(null);
  const years = [2022, 2023, 2024];
  const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ];

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
  };

  const handleMonthSelect = (month: string) => {
    const monthIndex = months.indexOf(month);

    if (!firstSelectedMonth) {
      // Если первый месяц еще не выбран
      setFirstSelectedMonth(month);
      setSelectedMonths([month]);
    } else {
      // Если первый месяц уже выбран
      const firstIndex = months.indexOf(firstSelectedMonth);
      const selectedMonthsRange =
        monthIndex >= firstIndex
          ? months.slice(firstIndex, monthIndex + 1)
          : months.slice(monthIndex, firstIndex + 1);

      setSelectedMonths(selectedMonthsRange);
      setFirstSelectedMonth(null); // Сбрасываем выбор первого месяца
    }
  };

  const handleSave = (event: React.MouseEvent<HTMLParagraphElement>) => {
    event.stopPropagation();
    console.log('Сохранено:', selectedYear, selectedMonths);
    setIsOpen(false);
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
