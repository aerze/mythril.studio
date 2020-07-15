import cx from "classnames";
import styles from "./title.module.scss";

export default function Title(props) {
  const { className, ...rest } = props;
  return <h1 className={cx(styles.title, className)} {...rest} />;
}
