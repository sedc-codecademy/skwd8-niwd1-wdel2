import styles from './Counter.module.css';

export function Counter(props) {
    return (
        <div className={styles.message}>
            Counter: {props.counterValue}
        </div>
    );
}