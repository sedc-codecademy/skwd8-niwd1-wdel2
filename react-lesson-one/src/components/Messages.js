import styles from './Messages.module.css';

console.log('Styles are', styles);

export function Messages(props) {
  // map each string in the messages array into a div element
  // use a unique key to identify each of the elements
  
  return props.messages.map(
    (msg, idx) => (
    <div key={`message-${idx}`} className={styles.message}>
      {msg}
    </div>
    )
  );
}