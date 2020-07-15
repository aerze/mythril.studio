import cx from "classnames";
import styles from "./text.module.scss";

export default function Text(props) {
  const { className, ...rest } = props;

  return <p className={cx(styles.text, className)} {...rest} />;
}
