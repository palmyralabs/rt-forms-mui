import { jsx as e, jsxs as x } from "react/jsx-runtime";
import { useState as k } from "react";
import { TableCell as m } from "@mui/material";
import { G as p } from "../../../../chunks/iconBase.js";
function v(t) {
  return p({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" }, child: [] }, { tag: "path", attr: { d: "M7 20V4" }, child: [] }, { tag: "path", attr: { d: "m21 8-4-4-4 4" }, child: [] }, { tag: "path", attr: { d: "M17 4v16" }, child: [] }] })(t);
}
function D(t) {
  return p({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" }, child: [] }, { tag: "path", attr: { d: "M17 20V4" }, child: [] }, { tag: "path", attr: { d: "m3 8 4-4 4 4" }, child: [] }, { tag: "path", attr: { d: "M7 4v16" }, child: [] }] })(t);
}
const j = ({ header: t, children: l, onSortChange: c }) => {
  var i, s, d, u;
  const [n, f] = k(""), g = ((i = t.column.columnDef.meta) == null ? void 0 : i.attribute) || t.id, h = !t.column.columnDef.enableSorting, a = ((d = (s = t.column.columnDef.meta) == null ? void 0 : s.columnDef) == null ? void 0 : d.width) || "auto", b = () => {
    if (!(c === void 0 || h)) {
      var o = n;
      switch (o) {
        case "asc":
          o = "desc";
          break;
        case "desc":
          o = "";
          break;
        default:
          o = "asc";
          break;
      }
      f(o), c(g, o);
    }
  }, r = t.column.columnDef.meta;
  return t.column.columnDef.columns ? /* @__PURE__ */ e(m, { className: "plr-baseGrid-header-cell", colSpan: t.colSpan, children: /* @__PURE__ */ e("div", { style: {
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    gap: "10px",
    width: a,
    justifyContent: "center"
  }, children: l }) }, t.id) : /* @__PURE__ */ e(
    m,
    {
      colSpan: t.colSpan,
      className: "plr-baseGrid-header-cell",
      children: /* @__PURE__ */ x("div", { style: {
        display: "flex",
        fontWeight: "bold",
        alignItems: "center",
        gap: "10px",
        width: a,
        justifyContent: ((u = r == null ? void 0 : r.columnDef) == null ? void 0 : u.type) === "number" ? "flex-end" : "flex-start"
      }, onClick: () => b(), children: [
        l,
        n === "asc" ? /* @__PURE__ */ e(D, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : n === "desc" ? /* @__PURE__ */ e(v, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : null
      ] })
    },
    t.id
  );
};
export {
  j as default
};
