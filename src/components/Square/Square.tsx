import React, { useRef, useState } from 'react'
import { useActions } from "../../store/hooks/actions";
import { useAppSelector } from "../../store/hooks/redux";
import Column from "../Column/Column";
import Part from "../Part/Part";
import Row from "../Row/Row";
import Tooltip from "../Tooltip/Tooltip";
import classes from "./Square.module.scss";

const Square = () => {
  const {addNewColumn} = useActions();
  const {addNewColumnStatus} = useAppSelector(state => state.reducerProduct);

  const productRef = useRef<any>(null);

  const [columns, setColumns] = useState<string[]>([]);
  const [columnTitle, setColumnTitle] = useState<string>("");
  const [rows, setRows] = useState<string[]>([]);
  const [rowTitle, setRowTitle] = useState<string>("");

  const addColumnHandler = () => {
    if (!addNewColumnStatus) {
      addNewColumn(true);
      // setColumns([...columns, columnTitle]);
    }
  }

  const addRowHandler = () => {
    setRows([...rows, rowTitle])
  }

  return (
    <>
      <div className={classes.Main}>
        <section className={classes.Section}>
          <div className={classes.Upside}>
            <div ref={productRef} className={classes.ProductTopLeft}>Product</div>
            {columns.map((_, i: number) => <Column key={i} />)}
            <div className={classes.BtnWithColumnTooltip}>
              <button className={classes.Button} onClick={addColumnHandler}>+ Add Column</button>
              {addNewColumnStatus ? <Tooltip /> : null}
            </div>
          </div>
          <div className={classes.Downside}>
            <section className={classes.AddRowSection}>
              {rows.map((_, i: number) => <Row key={i} />)}
              <button className={classes.Button} onClick={addRowHandler}>+ Add Row</button>
            </section>
            <div className={classes.Parts}>
              {rows.map((_, rowIndex: number) => (
                <div key={rowIndex} className={classes.PartsRow}>
                {columns.map((_, colIndex: number) => <Part key={colIndex} rowIndex={rowIndex} colIndex={colIndex} />)}
              </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Square