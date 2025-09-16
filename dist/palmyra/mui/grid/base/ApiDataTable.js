import { jsx as f } from "react/jsx-runtime";
import { forwardRef as d, useRef as p, useImperativeHandle as y } from "react";
import R from "./EmptyChildTable.js";
import { NoopGridCustomizer as h, useServerQuery as w, generateColumns as D } from "@palmyralabs/rt-forms";
import E from "./BaseTable.js";
const g = d(function(o, r) {
  const { columns: n, EmptyChild: m } = o, i = m || R, e = o.customizer || h, t = w(o), l = r || p(null);
  y(l, () => t, [t]);
  const s = D(n, e), a = o.onRowClick ? (C) => {
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
  g as ApiDataTable
};
