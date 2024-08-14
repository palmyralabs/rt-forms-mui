import { jsx as d } from "react/jsx-runtime";
import { forwardRef as f, useRef as p, useImperativeHandle as y } from "react";
import R from "./EmptyChildTable.js";
import { useServerQuery as h } from "@palmyralabs/rt-forms";
import { generateColumns as w } from "../utils/ColumnConverter.js";
import { NoopGridCustomizer as E } from "./NoopGridCustomizer.js";
import k from "./BaseGrid.js";
const Q = f(function(o, r) {
  const { columns: n, EmptyChild: m } = o, i = m || R, e = o.customizer || E, t = h(o), s = r || p(null);
  y(s, () => t, [t]);
  const c = w(n, e), l = o.onRowClick ? (a) => {
    o.onRowClick(a);
  } : () => {
  }, u = t.getCurrentData(), C = t.setSortColumns;
  return /* @__PURE__ */ d(
    k,
    {
      columnDefs: c,
      EmptyChild: i,
      customizer: e,
      rowData: u,
      onRowClick: l,
      onColumnSort: C
    }
  );
});
export {
  Q as ApiGrid
};
