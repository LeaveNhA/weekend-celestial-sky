import styles from "./styles.jsx";

const style = {
  color: styles.palette[0]
}

const render = ({ output }) => {
  if (output == 0) return null;
  return <div style={style}>􀆺</div>;
};

export default render;
