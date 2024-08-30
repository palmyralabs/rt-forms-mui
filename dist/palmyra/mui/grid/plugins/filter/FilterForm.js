import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { Button as m } from "@mui/material";
import { PalmyraForm as h, FieldGroupContainer as R } from "@palmyralabs/rt-forms";
import { i as C } from "../../../../../chunks/accessor.js";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { useRef as N } from "react";
import { c as g, b as j } from "../../../../../chunks/index3.js";
import { convertToField as v } from "./GridFieldConverter.js";
import x from "./FieldGenerator.js";
import '../../../../../assets/FilterForm.css';const S = (t) => {
  const s = {}, c = N(), a = t.defaultFilter || {}, f = v(t.columns), p = () => f.map((e, r) => x(e, e.label)), u = t.onClose || ((e) => {
  });
  Object.keys(a || {}).map((e) => {
    const r = a[e];
    C(e, s, r);
  });
  const i = (e) => {
    t.queryRef.current ? (t.queryRef.current.setFilter(e), u(e)) : console.warn("Query reference not found");
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
    /* @__PURE__ */ o("div", { className: "py-filter-content", children: /* @__PURE__ */ o(h, { formData: s, ref: c, children: /* @__PURE__ */ o(R, { columns: b, children: p() }) }) }),
    /* @__PURE__ */ n("div", { className: "py-filter-button-container", children: [
      /* @__PURE__ */ n(m, { className: "py-reset-button", disableRipple: !0, onClick: d, children: [
        /* @__PURE__ */ o(g, { className: "py-button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ n(m, { className: "py-filter-button", disableRipple: !0, onClick: F, children: [
        /* @__PURE__ */ o(j, { className: "py-button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
export {
  S as FilterForm
};
