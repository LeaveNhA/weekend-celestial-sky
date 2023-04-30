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
    "justifyContent": "flex-start",
    "alignItems": "center",
    gap: "30px",
    position: "fixed",
    overflow: "hidden",
    left: "0px",
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

const imageStyle = {
    height: "25px",
    borderRadius: "9px",
    aspectRatio: "1/1"
};

const textStyle = {
    color: styles.palette[0],
};

export const refreshFrequency = 10000;

export const command = "./nibar/scripts/leftstatus.sh";

export const render = ({ output }) => {
    const data = parse(output);
    console.info(data);
    const profilePictureData = data.user.profilePicture;

    if (typeof data === "undefined") {
        return (
            <div style={style}>
              <Error msg="Error: unknown script output" side="right" />
            </div>
        );
    }

    return (
        <div style={style}>
          <img style={imageStyle} src={"data:image/jpeg;base64," + profilePictureData} />
          <span style={textStyle}>{data.user.fullName}</span>
        </div>
    );
};

export default null;
