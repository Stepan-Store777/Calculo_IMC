import { Level, calculateImc } from '../../helpers/imc';
import styles from './GridItem.module.css';
import upImage  from '../../assets/up.png';
import dowrImage  from '../../assets/down.png';   


type Props ={
  item: Level
}


export const GridItem = ({item} : Props) => {
    return(
      <div className={styles.main} style={{backgroundColor: item.color}}>
        <div className={styles.gridIcon}>
         { item.icon === 'up' && <img src={upImage} alt=""  width="30"  />}
         { item.icon === 'down' && <img src={dowrImage} alt=""  width="30"  />}

        </div>
      </div>
    )
  }
  