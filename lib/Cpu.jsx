import styles from "./styles.jsx";

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (
      <div style={output.loadAverage > 3 ? { color: styles.palette[4] } : { color: styles.palette[0] }}>
      <span>􀫥 {output.loadAverage}</span>
    </div>
  );
};

export default render;
