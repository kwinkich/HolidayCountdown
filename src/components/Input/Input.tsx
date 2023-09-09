import styles from '../../index.module.css';

interface InputProps {
  type: string;
  classNameInput: string;
  id: string;
  placeholder: string;
  value: string; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:React.FC<InputProps> = ({
    type,
    classNameInput,
    id,
    placeholder,
    value,
    onChange
}) => {
    return(
        <input
            type={type}
            className={`${styles.input} ${styles[classNameInput]}`}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input;
