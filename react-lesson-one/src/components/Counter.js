import styles from './Counter.module.scss';

export function Counter(props) {
    return (
        <div className={styles.message}>
            Counter: {props.counterValue}
        </div>
    );
}