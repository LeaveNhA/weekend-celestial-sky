import styles from "./styles.jsx";

const style = {
    color: styles.palette[0]
};

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (
      <div style={style}>
        􀐬&nbsp;{output.time}
    </div>
  );
};

export default render;
