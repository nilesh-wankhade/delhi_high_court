import styles from "./cardone.module.css";
import image from "../../assets/img/icons/judge-icon.png";
const CardOne = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__cardBody}>
        <div className={styles.card_container}>
          <p className={styles.card__paraOne}>Case : [W.P.(C) 12304/2023]</p>
          <p className={styles.card__paraTwo}>Decided on: 15 Feb 2023</p>

          <div className={styles.card__nameContainer}>
            <div className={styles.card__rightName}>
              <h3>Mr. Avi Singh</h3>
              <h4>Rohan Podar, Adv</h4>
            </div>
            <div>
              <div className={styles.card__versus}></div>
            </div>
            <div className={styles.card__leftName}>
              <h3>Mr. Atul Tripathi</h3>
              <h4>Jaswinder Singh, Adv</h4>
            </div>
            <div className={styles.card__btn}>
              <button className={styles.card__btnOne}>
                <img src={image} alt="pic" />
              </button>
              <button className={styles.card__btnTwo}>ENG</button>
              <button className={styles.card__btnThree}>JudgeMent</button>
              <button className={styles.card__btnFour}>
                Key issue & finding
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
