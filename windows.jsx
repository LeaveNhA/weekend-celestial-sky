import App from "./lib/App.jsx";
import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles.jsx";
import config from "./config.json"


const style = {
    padding: "0 8px",
    display: "flex",
    "justify-content": "space-between",
    "align-items": "center",
    margin: "10px 13px",
    gap: "16px",
    position: "fixed",
    // overflow: "hidden",
    left: config.windows_offset_left,
    fontFamily: styles.fontFamily,
    lineHeight: styles.lineHeight,
    fontSize: styles.fontSize,
    color: "white",
    fontWeight: styles.fontWeight,
    // Get the window width and center it!
    top: "25%",
	  left: "25%",
	  zIndex: 1,
};

export const refreshFrequency = false;
export const command = "./nibar/scripts/windows.sh";

export const render = ({ output }) => {
    const data = parse(output);
    if (typeof data === "undefined") {
        return (
            <div style={style}>
              <Error msg="Error: unknown script output" side="left" />
            </div>
        );
    }
    if (typeof data.error !== "undefined") {
        return (
            <div style={style}>
              <Error msg={`Error: ${data.error}`} side="left" />
            </div>
        );
    }
    console.info("Re-freshed at " + data.windows.length);
    if(false) //(data.windows.length === 0)
        return (
            <div style={style}>
              <App />
            </div>
        );
    else
        return null;
};

export default null;
