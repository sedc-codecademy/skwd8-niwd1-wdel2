import styles from './Messages.module.scss';
import classNames from 'classnames';

console.log('Styles are', styles);

export function Messages(props) {
  // map each string in the messages array into a div element
  // use a unique key to identify each of the elements
  
  return props.messages.map(
    (msg, idx) => {
      const messageClasses = classNames(
        'my-padding',
        {
          [styles.primary]: !msg.isWarning,
          [styles.warning]: msg.isWarning
        }
      );

      return (
        <div
          key={`message-${idx}`}
          className={messageClasses}>
            {msg.text}
        </div>
      );
    }
  );
}