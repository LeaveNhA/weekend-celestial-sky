import styles from "./styles.jsx";

const render = ({ output }) => {
  let charging = output.charging;
  let percentage = output.percentage;
  let remaining = output.remaining;

  return (
    <div>
      <div
        style={
          percentage < 10 && charging == false
            ? { color: styles.palette[4] }
            : { color: styles.palette[0]}
        }
      >
        <span>􀋦 {percentage}%</span>
      </div>
    </div>
  );
};

export default render;
