import cx from "classnames";
import styles from "./caption.module.scss";

export default function Caption(props) {
  const { className, ...rest } = props;
  return <h1 className={cx(styles.caption, className)} {...rest} />;
}
