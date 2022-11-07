import React from 'react'
import { type } from "../../settings/settings";
import classes from "./Tooltip.module.scss";

const Tooltip = () => {
  return (
    <>
      <section className={classes.TooltipContainer}>
        <div className={classes.TitleDiv}>
          <h5 className={classes.Title}>Add Column</h5>
        </div>
        <input type="text" className={classes.InputStyle} />
        <div className={classes.TypeFormatContainer}>
          <div className={classes.InputPart}>
            <input
              type="text"
              className={[classes.TypeFormat, classes.InputStyle].join(" ")}
              defaultValue={type}
              readOnly
            />
            <div className={classes.ArrowPart}>
              <div className={classes.ArrowUp}></div>
              <div className={classes.ArrowDown}></div>
            </div>
          </div>
          <div className={classes.InputPart}>
            <input
              type="text"
              className={[classes.TypeFormat, classes.InputStyle].join(" ")}
              readOnly
            />
            <div className={classes.ArrowPart}>
              <div className={classes.ArrowUp}></div>
              <div className={classes.ArrowDown}></div>
            </div>
          </div>
        </div>
        <textarea className={[classes.Description, classes.InputStyle].join(" ")}></textarea>
        <div className={classes.ButtonSection}>
          <button className={[classes.Button, classes.InputStyle, classes.CancelBtn].join(" ")}>Cancel</button>
          <button className={[classes.Button, classes.InputStyle, classes.ApplyBtn].join(" ")}>Apply</button>
        </div>
      </section>
    </>
  )
}

export default Tooltip