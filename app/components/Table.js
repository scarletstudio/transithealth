import { useState, useEffect } from 'react'

function Cell({ data: d, col: c }) {
  const value = c.format ? c.format(d[c.key]): d[c.key];
  const classes = c.rowClasses ? "Cell " + c.rowClasses.join(" ") : "Cell";
  return (
    <td className={classes}>{value}</td>
  );
}

function Row({ data, cols }) {
  return (
    <tr>{cols.map((col, j) => {
      return (
        <Cell key={j} data={data} col={col} />
      );
    })}</tr>   
  );
}

function Header({ cols }) {
  const hasGroups = cols.reduce((agg, c) => (agg || c.group), false);
  const colSpan = cols
    .filter(c => c.group)
    .reduce((agg, c) => ({ ...agg, [c.group]: (agg[c.group] || 0) + 1 }), {});
  const lastCol = cols
    .filter(c => c.group)
    .reduce((agg, c) => ({ ...agg, [c.group]: c.key }), {});
  const groupCols = cols
    .filter((c) => (!c.group || lastCol[c.group] === c.key));

  const groupHeader = hasGroups ? (
    <tr>{groupCols.map((c, i) => {
      const nCols = colSpan[c.group] || 1;
      return (
        <th className="GroupHeader" key={i} colSpan={nCols}>{c.group}</th>
      );
    })}</tr>
  ) : null;

  return (
    <thead>
      {groupHeader}
      <tr>{cols.map((c, i) => {
        return (
          <th key={i}>{c.name}</th>
        );
      })}</tr>
    </thead>
  );
}

export function Table({ cols, rows }) {
  return (
    <div className="TableContainer">
      <table>
        <Header cols={cols} />
        <tbody>{rows.map((data, i) => {
          return (
            <Row key={i} data={data} cols={cols} /> 
          );
        })}</tbody>
      </table>
    </div>
  );
}
