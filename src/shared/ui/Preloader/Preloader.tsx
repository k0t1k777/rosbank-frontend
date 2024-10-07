import styles from 'src/ui/Preloader/Preloader.module.scss';
// import Logo from 'src/assets/icon/Logo.svg?react'

export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__overlay}></div>
      {/* <div className={styles.preloader__loader}><Logo /></div> */}
    </div>
  );
}
