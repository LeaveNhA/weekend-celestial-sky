import styles from "./styles.jsx";
import run from "uebersicht";
import config from '../config.json'

const containerStyle = {
    display: "grid",
    gridAutoFlow: "column",
    gridGap: "3px"
};

const desktopStyle = {
    maxWidth: config.windows_max_win,
    overflow: "hidden"
};


const renderWindow = (app, focused, visible) => {
    let contentStyle = JSON.parse(JSON.stringify(desktopStyle));
    if (focused == 1) {
        contentStyle.color = styles.colors.fg;
        contentStyle.fontWeight = "bold";
    } else if (visible == 1) {
        contentStyle.color = styles.colors.fg;
    }
    return (
        <div style={contentStyle}>
          {focused ? "[" : <span>&nbsp;</span> }
          {app}
          {focused ? "]" : <span>&nbsp;</span> }
        </div>
    );
};

const TimeDisplay = ({ hour, minute, theme }) => {
    const fontSize = styles.fontSizes[4];

    const timeStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: "300px",
        height: "200px",
        backgroundColor: theme[1],
        borderRadius: "5%",
    };

    const hourStyle = {
        color: theme[2], // You can adjust the theme index to match your desired color
        fontFamily: styles.fontFamily,
        fontSize,
        lineHeight: styles.lineHeight,
        fontWeight: styles.fontWeight,
    };

    const minuteStyle = {
        color: theme[2], // You can adjust the theme index to match your desired color
        fontFamily: styles.fontFamily,
        fontSize,
        lineHeight: styles.lineHeight,
        fontWeight: styles.fontWeight,
    };

    const colonStyle = {
        color: theme[0], // You can adjust the theme index to match your desired color
        margin: '0 0.2rem',
        fontFamily: styles.fontFamily,
        fontSize,
        lineHeight: styles.lineHeight,
        fontWeight: styles.fontWeight,
    };

    return (
        <div style={timeStyle}>
          <span style={hourStyle}>{hour.toString().padStart(2, '0')}</span>
          <span style={colonStyle}>:</span>
          <span style={minuteStyle}>{minute.toString().padStart(2, '0')}</span>
        </div>
    );
};

const Calendar = ({ date, palette }) => {
    const currentMonth = date;
    const textColor = palette[4];
    const headerFontSize = styles.fontSizes[2];
    const titleFontSize = styles.fontSizes[1];
    const daysFontSize = styles.fontSizes[0];

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const generateCalendar = () => {
        const month = currentMonth.getMonth();
        const year = currentMonth.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const weeks = Math.ceil((firstDay + daysInMonth) / 7);
        const calendar = [];

        let day = 1;
        for (let i = 0; i < weeks; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < firstDay) || day > daysInMonth) {
                    week.push("null");
                } else {
                    week.push(day);
                    day++;
                }
            }
            calendar.push(week);
        }
        return calendar;
    };

    const calendar = generateCalendar();

    const wrapperStyle = {
        backgroundColor: palette[1],
        borderRadius: "10%",
        padding: "2% 2% 7% 2%",
    };

    const headerStyle = {
        color: textColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '10px 0',
        fontFamily: styles.fontFamily,
        fontSize: headerFontSize,
        lineHeight: styles.lineHeight,
        fontWeight: styles.fontWeight,
    };

    const weekStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const dayStyle = {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: "10px",
        padding: '5px 0',
        color: textColor,
        fontFamily: styles.fontFamily,
        fontSize: daysFontSize,
        lineHeight: styles.lineHeight,
        fontWeight: styles.fontWeight,
    };

    const dayWrapperStyle = {
        color: textColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '10px 0',
        fontFamily: styles.fontFamily,
        lineHeight: styles.lineHeight,
        fontWeight: styles.fontWeight,
    };

    return (
        <div style={wrapperStyle}>
          <div style={headerStyle}>
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </div>
          <div style={dayWrapperStyle}>
            {daysOfWeek.map((day, index) => (
                <div key={index} style={dayStyle}>
                  <div>{day}</div>
                  {calendar.map((week, weekIndex) => (
                      <div key={weekIndex}>{week[index] !== "null" ? week[index] : '.'}</div>
                  ))}
                </div>
            ))}
          </div>
        </div>
    );
};

const render = ({ }) => {
    const windowsCount = 0; //output.length;
    const blur = styles.effects.blur;

    const wrapperStyle = {
        display:"flex",
        width: "750px",
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"flex-start",
        alignItems:"stretch",
        alignContent:"stretch",
        borderRadius: "10%",
        gap: "25px",
    };

    const backgroundStyle = {
        filter: `blur(${blur})`,
        WebkitBackdropFilter: `blur(${blur})`,
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
    };

    const inWrapperStyle = {
        display:"flex",
        flexDirection:"column",
        flexWrap:"nowrap",
        justifyContent:"flex-start",
        alignItems:"stretch",
        alignContent:"stretch",
        gap: "25px"
    };

    const imageStyle = {
        width: "200px",
        height: "200px",
        borderRadius: "10%",
    };

    console.info("Palette:" + styles.palette);

    return (
        <div style={wrapperStyle}>
          <div style={backgroundStyle}></div>
          <div style={inWrapperStyle}>
            <img style={imageStyle} src="https://www.canbind.ca/canbindwebsitetest/wp-content/uploads/2018/04/blank-profile-picture-973460_640-300x300.png" />
            <Calendar date={new Date()}
                      palette={styles.palette}/>
          </div>
          <div style={inWrapperStyle}>
            <TimeDisplay hour="09" minute="05" theme={styles.palette} />
            <div>MUSIC PLACEHOLDER!</div>
          </div>
          <div style={inWrapperStyle}>
            <div>STORAGE PLACEHOLDER!</div>
            <div>RAM PLACEHOLDER!</div>
            <div>CPU PLACEHOLDER!</div>
          </div>
        </div>
    );
};

export default render;
