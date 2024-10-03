import styles from 'src/ui/ProjectsItem/ProjectsItem.module.scss';
import { ProjectseProps } from 'src/services/types';
import { useNavigate } from 'react-router-dom';

export default function ProjectsItem({ name, teams }: ProjectseProps) {
  const navigate = useNavigate();

  const handleTeamClick = (teamId: number) => {
    navigate(`/teams/${teamId}`);
  };
  
  return (
    <div className={styles.projectsItem}>
      <p className={styles.title}>{name}</p>
      <div className={styles.mainContainer}>
      {teams &&
          teams.map((item) => {
            const teamId = item.id ? Number(item.id) : undefined;
            return (
              <p
                key={item.id}
                onClick={() => teamId !== undefined && handleTeamClick(teamId)}
                className={`${styles.text} ${styles.text_link}`}
              >
                {item.name}
              </p>
            );
          })}
        <p className={styles.text}>
          Опорное месторождение Ямальского центра газодобычи
        </p>
        <p className={styles.text}>с 2012 по 2028 гг.</p>
      </div>
    </div>
  );
}
