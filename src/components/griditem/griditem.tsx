import { level } from "../../helpers/imc";
import styles from './griditem.module.css';
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type props = 
{ item:level

}
export const GridItem = ({item}: props) =>
{   return (
    <div className={styles.main} style={{backgroundColor: item.color}}>
        <div className={styles.gridIcon}>
            {item.icon === 'up' &&  <img src={upImage} alt="" width='30'/>}
            {item.icon === 'down' &&  <img src={downImage} alt="" width='30'/>}
        </div>
        <div className={styles.GridTitle}>
            {item.title}
        </div>
        <div className={styles.gridInfo}>
            <>{ item.yourImc &&
                <div className={styles.yourIMC}>
                    Seu IMC é de <strong>{ item.yourImc}</strong>
                </div>  
              }
                <p>O IMC está entre <strong>{item.imc[0]}</strong> e <strong> {item.imc[1]}</strong></p>
            </>
        </div>
    </div>
);

}