import { jsxs as o, jsx as n } from "react/jsx-runtime";
import { Button as m } from "@mui/material";
import { PalmyraForm as b, FieldGroupContainer as h } from "@palmyralabs/rt-forms";
import { setValueByKey as C } from "@palmyralabs/ts-utils";
import { useRef as R } from "react";
import { d as N, T as g } from "../../../../../chunks/index3.js";
import { convertToField as j } from "./GridFieldConverter.js";
import v from "./FieldGenerator.js";
import '../../../../../assets/FilterForm.css';const w = (t) => {
  const s = t.queryRef.current.getCurrentFilter() || {}, c = R(null), a = t.defaultFilter || {}, f = j(t.columns), u = () => f.map((e, r) => v(e, e.label)), p = t.onClose || ((e) => {
  });
  Object.keys(a || {}).map((e) => {
    const r = a[e];
    C(e, s, r);
  });
  const l = (e) => {
    t.queryRef.current ? (t.queryRef.current.setFilter(e), p(e)) : console.warn("Query reference not found");
  }, d = () => {
    l({});
  }, F = () => {
    const e = c.current.getData();
    var r = {};
    Object.entries(e).map(([y, i]) => {
      i && i != "" && (r[y] = i);
    }), l && l(r);
  };
  return /* @__PURE__ */ o("div", { className: "py-filter-container", children: [
    /* @__PURE__ */ n("div", { className: "py-filter-content", children: /* @__PURE__ */ n(b, { formData: s, ref: c, children: /* @__PURE__ */ n(h, { columns: 2, children: u() }) }) }),
    /* @__PURE__ */ o("div", { className: "py-filter-button-container", children: [
      /* @__PURE__ */ o(m, { className: "py-reset-button", disableRipple: !0, onClick: d, children: [
        /* @__PURE__ */ n(N, { className: "py-button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ o(m, { className: "py-filter-button", disableRipple: !0, onClick: F, children: [
        /* @__PURE__ */ n(g, { className: "py-button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
export {
  w as FilterForm
};
