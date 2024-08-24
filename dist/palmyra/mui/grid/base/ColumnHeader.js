import { jsx as r, jsxs as y } from "react/jsx-runtime";
import { useState as v } from "react";
import { TableCell as p } from "@mui/material";
import { G as h } from "../../../../chunks/iconBase.js";
import '../../../../assets/ColumnHeader.css';/* empty css                              */
function D(t) {
  return h({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" }, child: [] }, { tag: "path", attr: { d: "M7 20V4" }, child: [] }, { tag: "path", attr: { d: "m21 8-4-4-4 4" }, child: [] }, { tag: "path", attr: { d: "M17 4v16" }, child: [] }] })(t);
}
function w(t) {
  return h({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" }, child: [] }, { tag: "path", attr: { d: "M17 20V4" }, child: [] }, { tag: "path", attr: { d: "m3 8 4-4 4 4" }, child: [] }, { tag: "path", attr: { d: "M7 4v16" }, child: [] }] })(t);
}
const j = ({ header: t, children: c, onSortChange: n }) => {
  var i, d, m, u;
  const [o, f] = v(""), b = ((i = t.column.columnDef.meta) == null ? void 0 : i.attribute) || t.id, g = !t.column.columnDef.enableSorting, l = ((m = (d = t.column.columnDef.meta) == null ? void 0 : d.columnDef) == null ? void 0 : m.width) || "auto", k = () => {
    if (!(n === void 0 || g)) {
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
      f(e), n(b, e);
    }
  }, a = t.column.columnDef.meta, s = "py-dataGrid-header-text" + (((u = a == null ? void 0 : a.columnDef) == null ? void 0 : u.type) === "number" ? " py-dataGrid-header-text-type-number" : "");
  return t.column.columnDef.columns ? /* @__PURE__ */ r(p, { className: "py-baseGrid-header-cell", colSpan: t.colSpan, children: /* @__PURE__ */ r("div", { className: s, style: { width: l }, children: c }) }, t.id) : /* @__PURE__ */ r(
    p,
    {
      colSpan: t.colSpan,
      className: "py-baseGrid-header-cell",
      children: /* @__PURE__ */ y(
        "div",
        {
          className: s,
          style: { width: l },
          onClick: () => k(),
          children: [
            c,
            o === "asc" ? /* @__PURE__ */ r(w, { className: "py-baseGrid-header-sort-icon" }) : o === "desc" ? /* @__PURE__ */ r(D, { className: "py-baseGrid-header-sort-icon" }) : null
          ]
        }
      )
    },
    t.id
  );
};
export {
  j as default
};
