import cx from "classnames";
import styles from "./subtitle.module.scss";

export default function Subtitle(props) {
  const { className, ...rest } = props;
  return <h4 className={cx(styles.subtitle, className)} {...rest} />;
}
