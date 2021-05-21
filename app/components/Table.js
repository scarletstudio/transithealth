import { useState, useEffect } from 'react'

function Cell({ data: d, col: c }) {
  const v = d[c.key];
  const value = c.format ? c.format(v): v;
  const classes = c.rowClasses ? "Cell " + c.rowClasses.join(" ") : "Cell";
  const style = {
    background: c.rgb ? (c.alpha ? `rgba(${c.rgb}, ${c.alpha(v)})`: `rgb(${c.rgb})`): "transparent",
  };
  return (
    <td className={classes} style={style}>{value}</td>
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

function Header({ cols, sortCol, sortAsc, sortByCol }) {
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
          <th
            key={i}
            className={sortCol === c.key ? "Sorted" : ""}
            onClick={(e) => {
              sortByCol(c.key);
            }}
          >
            <span>{c.name}</span>
            <span className="SortArrow">{sortAsc ? "▼" : "▲"}</span>
          </th>
        );
      })}</tr>
    </thead>
  );
}

export function Table(props) {
  const rows = [ ...props.rows ];
  const [ sortCol, setSortCol ] = useState(null);
  const [ sortAsc, setSortAsc ] = useState(false);
  const [ countSorted, setCountSorted ] = useState(0);

  function sortByCol(key) {
    if (key == sortCol) {
      if (countSorted >= 2) {
        setSortCol(null);
        setSortAsc(false);
        setCountSorted(0);
      } else {
        setSortAsc(!sortAsc);
        setCountSorted(countSorted + 1);
      }
    } else {
      setSortCol(key);
      setSortAsc(false);
      setCountSorted(1);
    }
  }

  let displayRows = sortCol !== null
    ? rows.sort((a, b) => {
        const av = a[sortCol];
        const bv = b[sortCol];
        if (av.localeCompare && bv.localeCompare) {
          if (sortAsc) {
            return av.localeCompare(bv);
          }
          return bv.localeCompare(av);
        }
        if (sortAsc) {
          return av - bv;
        }
        return bv - av;
      })
    : [ ...rows ];

  return (
    <div className="TableContainer">
      <table>
        <Header
          cols={props.cols}
          sortCol={sortCol}
          sortAsc={sortAsc}
          sortByCol={sortByCol}
        />
        <tbody>{displayRows.map((data, i) => {
          return (
            <Row key={i} data={data} cols={props.cols} /> 
          );
        })}</tbody>
      </table>
    </div>
  );
}
