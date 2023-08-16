import React, { useState, useEffect } from 'react';
import styles from '../index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import Input from '../components/Input/Input';
import { useNavigate } from 'react-router-dom';

function MainPage() {
 
        const navigate = useNavigate();
 
        const [arrayData, setArrayData] = useState<string[]>([]); 
        const [titleValue, setTitleValue] = useState<string>('');
        const [dateValue, setDateValue] = useState<string>('');
        const [timeValue, setTimeValue] = useState<string>('');
        const [endTitleValue, setEndTitleValue] = useState<string>('');
        const [colorValue, setColorValue] = useState<string>('');
        const [colorBgValue, setColorBgValue] = useState<string>('');

        const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setTitleValue(event.target.value);
        };
        const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setDateValue(event.target.value);
        };
        const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setTimeValue(event.target.value);
        };
        const handleEndTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setEndTitleValue(event.target.value);
        };
        const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setColorValue(event.target.value);
        };
        const handleColorBgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setColorBgValue(event.target.value);
        };

        const handleButtonClick = () => {
            setArrayData([titleValue, dateValue, timeValue, endTitleValue, colorValue, colorBgValue])
            localStorage.setItem('arrayData', JSON.stringify(arrayData));
            localStorage.setItem('titleValue', titleValue);
            localStorage.setItem('dateValue', dateValue);
            localStorage.setItem('timeValue', timeValue);
            localStorage.setItem('endTitleValue', endTitleValue);
            localStorage.setItem('colorValue', colorValue);
            localStorage.setItem('colorBgValue', colorBgValue);

            navigate('/holiday', {
                state: {
                    titleValue,
                    dateValue,
                    timeValue,
                    endTitleValue,
                }
            });
        };

        useEffect(() => {
            console.log(arrayData);
        }, [arrayData]);

        useEffect(() => {
            document.documentElement.style.setProperty('--text-color', colorValue);
            document.documentElement.style.setProperty('--bgcolor', colorBgValue);
        }, [colorValue, colorBgValue, arrayData]);

        useEffect(() => {
            const storedColorValue = localStorage.getItem('colorValue');
            if (storedColorValue) {
                setColorValue(storedColorValue);
            }

            const storedColorBgValue = localStorage.getItem('colorBgValue');
            if (storedColorBgValue) {
                setColorBgValue(storedColorBgValue);
            }
        }, []);
 
        return(
				<div className={styles.selectContainer}>
					<h1 className={styles.selectTitle}>
						Створіть свою <span>подію,</span> і почніть зворотний відлік разом з<span> HCK!</span>
					</h1>
                    <div className={`${styles.form} ${styles.selectTitle}`}>
						<label className={styles.selectLabel}>Назва події: </label>
                        <Input type='text' classNameInput='selectInputTitle' id='title' placeholder='День народження!' 
                        value={titleValue} 
                        onChange={handleTitleChange}/>
                    </div>
					<div className={`${styles.form} ${styles.selectFormDate}`}>
						<label className={styles.selectLabel}>Дата події: </label>
                        <Input type='date' classNameInput='selectInputDate' id='date' placeholder='' 
                        value={dateValue} 
                        onChange={handleDateChange}/>
					</div>
					<div className={`${styles.form} ${styles.selectFormTime}`}>
						<label className={styles.selectLabel}>Час початку події: </label>
                        <Input type='time' classNameInput='selectInputTime' id='time' placeholder=''
                        value={timeValue} 
                        onChange={handleTimeChange}/>
					</div>
					<div className={`${styles.form} ${styles.selectFormEndTitle}`}>
						<label className={styles.selectLabel}>Повідомлення по закінченню таймера: </label>
                        <Input type='text' classNameInput='selectInputEndTitle' id='end-title' placeholder='З днем народження!'
                        value={endTitleValue} 
                        onChange={handleEndTitleChange}/>
					</div>
					<div className={`${styles.form} ${styles.selectFormColor}`}>
						<label className={styles.selectLabel}>Оберіть улюблений колір: </label>
                        <Input type='color' classNameInput='selectInputColor' id='color' placeholder=''
                        value={colorValue}
                        onChange={handleColorChange}/>
					</div>
					<div className={`${styles.form} ${styles.selectFormBg}`}>
						<label className={styles.selectLabel}>Оберіть колір фону: </label>
                        <Input type='color' classNameInput='selectInputColorBg' id='color-bg' placeholder=''
                        value={colorBgValue}
                        onChange={handleColorBgChange}/>
					</div>
					<div className={styles.blockBtn}>
						<button className={styles.selectBtn} id="select-btn" onClick={handleButtonClick}>
							Почати відлік!
						</button>
					</div>
					<div className={styles.blockIcon}>
						<a href='https://t.me/kwinkichDeveloper' className={styles.link} target='_blank'>
							<FontAwesomeIcon icon={faTelegram} />
						</a>
						<a href='https://github.com/kwinkich' className={styles.link} target='_blank'>
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</div>
				</div>
            )
}

export default MainPage
