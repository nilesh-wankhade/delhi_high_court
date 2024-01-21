import graph from "../../assets/img/judge-graph.png";
import styles from "./bench.module.css";

const Bench = () => {
  return (
    <div className={styles.card}>
      <h4 className={styles.card__title}>
      <i className={`fas fa-university ${styles.card__universityIcon}`}></i>
        Bench
      </h4>
      <div className={styles.card__cardBody}>
        <img src={graph} className={styles.card__imgFluid} alt="bench" />
      </div>
    </div>
     
     

  );
};



export default Bench;
