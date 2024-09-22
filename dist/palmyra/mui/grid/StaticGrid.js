import { jsx as a } from "react/jsx-runtime";
import { forwardRef as C } from "react";
import { NoopGridCustomizer as s, generateColumns as d } from "@palmyralabs/rt-forms";
import f from "./base/BaseTable.js";
import u from "./base/EmptyChildTable.js";
const z = C(function(o, h) {
  const { columns: i, EmptyChild: m } = o, n = m || u, t = o.customizer || s, r = d(i, t), c = o.onRowClick ? (l) => {
    o.onRowClick(l);
  } : () => {
  }, e = o.rowData;
  return /* @__PURE__ */ a(
    f,
    {
      columnDefs: r,
      EmptyChild: n,
      customizer: t,
      rowData: e,
      onRowClick: c,
      onColumnSort: o.setSortColumns
    }
  );
});
export {
  z as StaticGrid
};
