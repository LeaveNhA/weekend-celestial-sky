import DateTime from "./lib/DateTime.jsx";
import Battery from "./lib/Battery.jsx";
import Cpu from "./lib/Cpu.jsx";
import Wifi from "./lib/Wifi.jsx";
import Dnd from "./lib/Dnd.jsx";
import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles.jsx";

const style = {
    display: "flex",
    padding: "6px 12px",
    "justifyContent": "space-between",
    "alignItems": "center",
    gap: "30px",
    position: "fixed",
    overflow: "hidden",
    right: "0px",
    top: "0px",
    "borderRadius": "500px",
    color: styles.colors.dim,
    fontFamily: styles.fontFamily,
    fontSize: styles.fontSize,
    lineHeight: styles.lineHeight,
    fontWeight: styles.fontWeight,
    margin: "10px 13px",
    background: styles.bg
};

export const refreshFrequency = 10000;

export const command = "./nibar/scripts/status.sh";

export const render = ({ output }) => {
    const data = parse(output);
    if (typeof data === "undefined") {
        return (
            <div style={style}>
              <Error msg="Error: unknown script output" side="right" />
            </div>
        );
    }
    return (
        <div style={style}>
          <Battery output={data.battery} />
          <Cpu output={data.cpu} />
          <DateTime output={data.datetime} />
          <Dnd output={data.dnd} />
        </div>
    );
};

export default null;
