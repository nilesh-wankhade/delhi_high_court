import styles from "./searchbar.module.css";

const SearchBar = () => {
  return (
    <>
      <div className={styles.serachbar}>
       
          <span className={styles.serachbar__search}>
            <i className={`bi bi-search ${styles.searchbar__searchIcon}`}></i>
            <input
              type="text"
              placeholder="Search within result"
              className={styles.serachbar__input}
            />
            <i className={`bi bi-mic ${styles.searchbar__micIcon}`} id="microphoneIcon"></i>
          </span>

          <button className={styles.searchbar__btn}>
            <i className={`bi bi-search ${styles.btnSearch}`}></i>
            Search
          </button>
      
          {/* radio button */}
          <span className="formCheck">
            <input className="formCheckInput hideProximity" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label htmlFor="flexRadioDefault1"> Phrase(s)</label>
          </span>

          <span className="formCheck">
            <input className="formCheckInput hideProximity" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label htmlFor="flexRadioDefault2"> Any Words</label>
          </span>

          <span className="formCheck">
            <input className="formCheckInput hideProximity" type="radio" name="flexRadioDefault" id="allworld" />
            <label htmlFor="allworld"> All Words</label>
          </span>

          <span className="formCheck">
            <input className="formCheckInput hideProximity" type="radio" name="flexRadioDefault" id="boolean" />
            <label htmlFor="boolean"> Boolean</label>
          </span>
          <span className="formCheck">
           <select className="formSelect">
           
            <option  selected>Proximity
           
            </option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
            
           </select>
         
          </span>
        
      </div>
    </>
  );
};

export default SearchBar;
