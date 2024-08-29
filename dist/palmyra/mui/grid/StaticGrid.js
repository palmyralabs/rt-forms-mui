import { jsx as a } from "react/jsx-runtime";
import { forwardRef as C } from "react";
import { generateColumns as s } from "./utils/ColumnConverter.js";
import d from "./base/BaseTable.js";
import f from "./base/EmptyChildTable.js";
import { NoopGridCustomizer as u } from "./base/NoopGridCustomizer.js";
const z = C(function(o, h) {
  const { columns: i, EmptyChild: m } = o, r = m || f, t = o.customizer || u, n = s(i, t), c = o.onRowClick ? (l) => {
    o.onRowClick(l);
  } : () => {
  }, e = o.rowData;
  return /* @__PURE__ */ a(
    d,
    {
      columnDefs: n,
      EmptyChild: r,
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
