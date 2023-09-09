import styles from '../index.module.css';
import { useNavigate } from 'react-router-dom';


const ModalWindow = () => {

    const navigate = useNavigate();

    const handleButtonYesClick = () => {
        navigate('/')
    };

    const handleButtonNoClick = () => {
        navigate('/holiday');
    }    

return(
    <div className={styles.modal}>
        <div className={styles.modalContent}>
				<h2>Закрити подію</h2>
				<p>Ви впевнені, що хочете закрити цю подію?</p>
				<div className={styles.modalButtons}>
					<button className={styles.modalYes} onClick={handleButtonYesClick}>
						Так
					</button>
					<button className={styles.modalNo} onClick={handleButtonNoClick}>
						Ні
					</button>
				</div>
			</div>
		</div>
    )
}

export default ModalWindow;
