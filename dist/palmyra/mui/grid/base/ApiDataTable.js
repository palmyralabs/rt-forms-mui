import { jsx as f } from "react/jsx-runtime";
import { forwardRef as d, useRef as p, useImperativeHandle as y } from "react";
import R from "./EmptyChildTable.js";
import { useServerQuery as h } from "@palmyralabs/rt-forms";
import { generateColumns as w } from "../utils/ColumnConverter.js";
import { NoopGridCustomizer as D } from "./NoopGridCustomizer.js";
import E from "./BaseTable.js";
const A = d(function(o, r) {
  const { columns: n, EmptyChild: m } = o, i = m || R, e = o.customizer || D, t = h(o), l = r || p(null);
  y(l, () => t, [t]);
  const s = w(n, e), a = o.onRowClick ? (C) => {
    o.onRowClick(C);
  } : () => {
  }, c = t.getCurrentData(), u = t.setSortColumns;
  return /* @__PURE__ */ f(
    E,
    {
      columnDefs: s,
      EmptyChild: i,
      customizer: e,
      rowData: c,
      onRowClick: a,
      onColumnSort: u
    }
  );
});
export {
  A as ApiDataTable
};
