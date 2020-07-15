import Subtitle from "../subtitle/subtitle";
import Text from "../text/text";
import styles from "./placard.module.scss";

export default function Placard(props) {
  const { title, children, ...rest } = props;

  return (
    <div className={styles.placard} {...rest}>
      <Subtitle>{title}</Subtitle>
      <Text className={styles.body}>{children}</Text>
    </div>
  );
}
