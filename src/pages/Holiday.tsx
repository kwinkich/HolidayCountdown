import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../index.module.css';
import moment from 'moment';

const HolidayPage = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/modal')
    }

    const location = useLocation();
    const locationState = location.state as {
        titleValue: string;
        dateValue: string;
        timeValue: string;
        endTitleValue: string;
        colorValue: string;
        colorBgValue: string;
    };  

    const storedTitleValue = localStorage.getItem('titleValue');
    const storedDateValue = localStorage.getItem('dateValue');
    const storedTimeValue = localStorage.getItem('timeValue');
    const storedEndTitleValue = localStorage.getItem('endTitleValue');
    const title = locationState?.titleValue || storedTitleValue || '';
    const date = locationState?.dateValue || storedDateValue || '';
    const time = locationState?.timeValue || storedTimeValue || '';
    const endTitle = locationState?.endTitleValue || storedEndTitleValue || '';
    let displayContent;
	const selectedDateTime = moment(`${date} ${time}`);
	const currentTime = moment();
	const holidayDate = selectedDateTime.diff(currentTime);
	const days = Math.floor(moment.duration(holidayDate).asDays());
	const hours = moment.duration(holidayDate).hours();
	const minutes = moment.duration(holidayDate).minutes();
	const seconds = moment.duration(holidayDate).seconds();
	const [remainingTime, setRemainingTime] = useState(0);

    useEffect(() => {
        const selectedDateTime = new Date(`${date} ${time}`);
        const currentTime = new Date();
        const holidayDate = selectedDateTime.getTime() - currentTime.getTime();
        setRemainingTime(holidayDate);}, [date, time]);
    
    useEffect(() => {
        const selectedDateTime = new Date(`${date} ${time}`);
        const currentTime = new Date();
        const holidayDate = selectedDateTime.getTime() - currentTime.getTime();
        setRemainingTime(holidayDate);
        setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 1000);
        }, 1000);
        return () => {};
    }, [date, time]);

    useEffect(() => {
        const storedColorValue = localStorage.getItem('colorValue');
        const storedColorBgValue = localStorage.getItem('colorBgValue');

        // Применяем цвета к стилям страницы
        document.documentElement.style.setProperty('--text-color', storedColorValue);
        document.documentElement.style.setProperty('--bgcolor', storedColorBgValue);
    }, []);

	if (remainingTime <= 0) {
		
        displayContent = (
			<div className={styles.containerCount}>
				<span className={styles.endTitle}>{endTitle}</span>
			</div>
		);

	} else {
		
        displayContent = (
			<div className={styles.containerCount}>
				<span className={`${styles.item} ${styles.day}`}>{days} Днів</span>
				<span className={`${styles.item} ${styles.hour}`}>{hours} Годин</span>
				<span className={`${styles.item} ${styles.min}`}>{minutes} Хвилин</span>
				<span className={`${styles.item} ${styles.sec}`}>{seconds} Секунд</span>
			</div>
		);
	}



  return (
    <div className={`${styles.presentContainer}`}>
      <h1 className={styles.title}>{title}</h1>
      {displayContent}
      <div className={styles.exitBlock}>
        <button className={styles.exit} id="exit" onClick={handleButtonClick}>
          Скасувати подію
        </button>
      </div>
    </div>
  );
}

export default HolidayPage;
