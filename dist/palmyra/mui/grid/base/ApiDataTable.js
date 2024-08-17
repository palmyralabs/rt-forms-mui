import { jsx as f } from "react/jsx-runtime";
import { forwardRef as d, useRef as p, useImperativeHandle as y } from "react";
import R from "./EmptyChildTable.js";
import { useServerQuery as h } from "@palmyralabs/rt-forms";
import { generateColumns as w } from "../utils/ColumnConverter.js";
import { NoopGridCustomizer as D } from "./NoopGridCustomizer.js";
import E from "./BaseTable.js";
const A = d(function(o, e) {
  const { columns: n, EmptyChild: m } = o, i = m || R, r = o.customizer || D, t = h(o), s = e || p();
  y(s, () => t, [t]);
  const a = w(n, r), c = o.onRowClick ? (C) => {
    o.onRowClick(C);
  } : () => {
  }, l = t.getCurrentData(), u = t.setSortColumns;
  return /* @__PURE__ */ f(
    E,
    {
      columnDefs: a,
      EmptyChild: i,
      customizer: r,
      rowData: l,
      onRowClick: c,
      onColumnSort: u
    }
  );
});
export {
  A as ApiDataTable
};
