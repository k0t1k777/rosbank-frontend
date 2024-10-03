import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import styles from 'src/ui/Modal/Modal.module.scss';
import {
  selectTeams,
  setAddTeam,
  setNameTeam,
} from 'src/store/features/slice/teamsSlice';

export default function Modal() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { addTeam, nameTeam } = useAppSelector(selectTeams);

  const addNewTeam = () => {
    if (!nameTeam.trim()) {
      return;
    }
    const newTeam = {
      id: (addTeam.length + 777).toString(),
      name: nameTeam,
    };
    dispatch(setAddTeam([...addTeam, newTeam]));
    navigate('/teams');
  };

  return (
    <div className={styles.modal}>
      <p className={styles.title}>Введите имя команды</p>
      <form
        className={styles.container}
        onSubmit={(e) => {
          e.preventDefault();
          addNewTeam();
        }}
      >
        <Input
          className={styles.input}
          value={nameTeam}
          onChange={(e) => dispatch(setNameTeam(e.target.value))}
          placeholder='Введите название команды'
        />
        <Button htmlType='submit' className={styles.button}>
          Отправить
        </Button>
      </form>
    </div>
  );
}
