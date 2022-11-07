import React from 'react'
import classes from "./Part.module.scss";

const Part = (props: {rowIndex: number, colIndex: number}) => {
  const {rowIndex, colIndex} = props;

  return (
    <>
      <div className={classes.Part}>R{rowIndex} / C{colIndex}</div>
    </>
  )
}

export default Part