import s from "../style/Style.module.css";
import { ContainerProps } from "types/types";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
export default Container;
