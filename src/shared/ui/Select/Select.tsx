import { useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import cn from 'classnames/bind';
import 'src/shared/ui/Select/SimpleBar.scss';
import styles from 'src/shared/ui/Select/Select.module.scss';
import useOutsideClick from 'src/shared/hooks/useOutsideClick';
import { Icon } from '../Icon/Icon';
import { SelectProps } from 'src/services/types';
import { useAppDispatch } from 'src/store/hooks';
import { setIsOpenCalendar } from 'src/store/features/slice/skillSlice';

const cx = cn.bind(styles);

export default function Select({
  label,
  value,
  setValue,
  options,
  className,
  dissable,
  border,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const ref = useRef(null);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
    dispatch(setIsOpenCalendar(false))
  }

  useOutsideClick(ref, toggleOpen);

  function handleReset(event: React.MouseEvent<HTMLImageElement>) {
    event.stopPropagation();
    setValue('');
  }

  return (
    <div
      ref={isOpen ? ref : null}
      className={cx('select', {
        'select--open': isOpen,
        'select--border': border,
      })}
      aria-hidden='true'
    >
      {!value && (
        <span onClick={toggleOpen} className={cx('select__title')}>
          {label}
        </span>
      )}
      <span className={cx('select__title')} onClick={toggleOpen}>
        {value}
      </span>
      <div onClick={toggleOpen}>
        <Icon
          id='arrow'
          className={cx('svg__select', className, {
            'svg__select--open': isOpen,
          })}
        />
      </div>

      {isOpen && options && (
        <ul
          className={cx('select__optionContainer', {
            'select__optionContainer--open': isOpen,
          })}
        >
          <SimpleBar style={{ maxHeight: 'inherit' }}>
            {options.map((option, index) => (
              <li
                className={styles.select__option}
                key={index}
                aria-hidden='true'
                onClick={() => {
                  setValue(option);
                  setIsOpen(false);
                }}
              >
                <p className={cx('select__optionName')}>{option}</p>
              </li>
            ))}
          </SimpleBar>
        </ul>
      )}
      {value && (
        <div onClick={handleReset} className={dissable && styles.dissable}>
          <Icon id='close' className={styles.reset} />
        </div>
      )}
    </div>
  );
}
