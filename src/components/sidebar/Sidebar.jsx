import Bench from '../card/Bench'
import styles  from  './sidebar.module.css'
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
    
        <h3 className={styles.sidebar__title}>
        <i className={`bi bi-link ${styles.sidebar__linkIcon}`}></i>
        Related Topics
        </h3>
        <div className={styles.sidebar__cardContainer}>
        <Bench/>
        <Bench/>
        <Bench/>
        <Bench/>
        </div>
    </div>
  )
}

export default Sidebar