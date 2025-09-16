import { jsx as r, jsxs as h } from "react/jsx-runtime";
import { useState as f } from "react";
import { TableCell as s } from "@mui/material";
import { G as i } from "../../../../chunks/iconBase.js";
import '../../../../assets/ColumnHeader.css';/* empty css                              */
function b(t) {
  return i({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" }, child: [] }, { tag: "path", attr: { d: "M7 20V4" }, child: [] }, { tag: "path", attr: { d: "m21 8-4-4-4 4" }, child: [] }, { tag: "path", attr: { d: "M17 4v16" }, child: [] }] })(t);
}
function k(t) {
  return i({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" }, child: [] }, { tag: "path", attr: { d: "M17 20V4" }, child: [] }, { tag: "path", attr: { d: "m3 8 4-4 4 4" }, child: [] }, { tag: "path", attr: { d: "M7 4v16" }, child: [] }] })(t);
}
const x = ({ header: t, children: a, onSortChange: c }) => {
  const [o, d] = f(""), m = t.column.columnDef.meta?.attribute || t.id, u = !t.column.columnDef.enableSorting, n = t.column.columnDef.meta?.columnDef?.width || "auto", p = () => {
    if (!(c === void 0 || u)) {
      var e = o;
      switch (e) {
        case "asc":
          e = "desc";
          break;
        case "desc":
          e = "";
          break;
        default:
          e = "asc";
          break;
      }
      d(e), c(m, e);
    }
  }, l = "py-dataGrid-header-text" + (t.column.columnDef.meta?.columnDef?.type === "number" ? " py-dataGrid-header-text-type-number" : "");
  return t.column.columnDef.columns ? /* @__PURE__ */ r(s, { className: "py-baseGrid-header-cell", colSpan: t.colSpan, children: /* @__PURE__ */ r("div", { className: l, style: { width: n }, children: a }) }, t.id) : /* @__PURE__ */ r(
    s,
    {
      colSpan: t.colSpan,
      className: "py-baseGrid-header-cell",
      children: /* @__PURE__ */ h(
        "div",
        {
          className: l,
          style: { width: n },
          onClick: () => p(),
          children: [
            a,
            o === "asc" ? /* @__PURE__ */ r(k, { className: "py-baseGrid-header-sort-icon" }) : o === "desc" ? /* @__PURE__ */ r(b, { className: "py-baseGrid-header-sort-icon" }) : null
          ]
        }
      )
    },
    t.id
  );
};
export {
  x as default
};
