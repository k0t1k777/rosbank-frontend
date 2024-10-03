import { useNavigate } from 'react-router-dom';
import { TeamsProps } from 'src/services/types';
import styles from 'src/ui/TeamsItem/TeamsItem.module.scss';

export default function TeamsItemPersonal({ name, projects }: TeamsProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-team');
  };

  return (
    <div className={styles.teamsItem} onClick={handleClick}>
      <p className={styles.title}>{name}</p>
      {projects &&
        projects.map((item) => (
          <p key={item.id} className={`${styles.text} ${styles.text_link}`}>
            {item.name}
          </p>
        ))}
    </div>
  );
}
