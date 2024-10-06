import 'src/components/Metric/Metric.scss';
import { useState } from 'react';

const years = [2022, 2023, 2024];
const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
export const Metric = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
    setIsOpen(true);
  };

  const handleMonthSelect = (month: string) => {
    setSelectedMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };

  const handleSave = () => {
    console.log('Сохранено:', selectedYear, selectedMonths);
    setIsOpen(false);
  };

  return (
    <section className='metric'>
      <h2>Основные метрики команды</h2>
      <div className='period-selector'>
        <div className='selector' onClick={toggleDropdown}>
          <span>
            {selectedYear
              ? `${selectedYear} ${selectedMonths.join(', ')}`
              : 'Выбери период'}
          </span>
          <span className='arrow'>▼</span>
        </div>
        {isOpen && (
          <div className='dropdown'>
            <div className='year-selection'>
              {years.map((year) => (
                <div
                  key={year}
                  className={`year ${selectedYear === year ? 'selected' : ''}`}
                  onClick={() => handleYearSelect(year)}
                >
                  {year}
                </div>
              ))}
            </div>
            <div className='month-selection'>
              {months.map((month) => (
                <div
                  key={month}
                  className={`month ${
                    selectedMonths.includes(month) ? 'selected' : ''
                  }`}
                  onClick={() => handleMonthSelect(month)}
                >
                  {month}
                </div>
              ))}
            </div>
            <button className='save-button' onClick={handleSave}>
              Сохранить
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
