import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { Button as m } from "@mui/material";
import { convertToField as h, PalmyraForm as R, FieldGroupContainer as C } from "@palmyralabs/rt-forms";
import { i as N } from "../../../../../chunks/accessor.js";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { useRef as g } from "react";
import { c as j, T as v } from "../../../../../chunks/index3.js";
import x from "./FieldGenerator.js";
import '../../../../../assets/FilterForm.css';const Q = (t) => {
  const s = {}, c = g(), a = t.defaultFilter || {}, f = h(t.columns), u = () => f.map((e, r) => x(e, e.label)), p = t.onClose || ((e) => {
  });
  Object.keys(a || {}).map((e) => {
    const r = a[e];
    N(e, s, r);
  });
  const i = (e) => {
    t.queryRef.current ? (t.queryRef.current.setFilter(e), p(e)) : console.warn("Query reference not found");
  }, d = () => {
    i({});
  }, F = () => {
    const e = c.current.getData();
    var r = {};
    Object.entries(e).map(([y, l]) => {
      l && l != "" && (r[y] = l);
    }), i && i(r);
  }, b = t.column || 2;
  return /* @__PURE__ */ n("div", { className: "py-filter-container", children: [
    /* @__PURE__ */ o("div", { className: "py-filter-content", children: /* @__PURE__ */ o(R, { formData: s, ref: c, children: /* @__PURE__ */ o(C, { columns: b, children: u() }) }) }),
    /* @__PURE__ */ n("div", { className: "py-filter-button-container", children: [
      /* @__PURE__ */ n(m, { className: "py-reset-button", disableRipple: !0, onClick: d, children: [
        /* @__PURE__ */ o(j, { className: "py-button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ n(m, { className: "py-filter-button", disableRipple: !0, onClick: F, children: [
        /* @__PURE__ */ o(v, { className: "py-button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
export {
  Q as FilterForm
};
