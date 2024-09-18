import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { Button as m } from "@mui/material";
import { PalmyraForm as y, FieldGroupContainer as h } from "@palmyralabs/rt-forms";
import { i as C } from "../../../../../chunks/accessor.js";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { useRef as R } from "react";
import { c as N, b as g } from "../../../../../chunks/index3.js";
import { convertToField as j } from "./GridFieldConverter.js";
import v from "./FieldGenerator.js";
import '../../../../../assets/FilterForm.css';const S = (t) => {
  const s = {}, c = R(), a = t.defaultFilter || {}, f = j(t.columns), p = () => f.map((e, r) => v(e, e.label)), u = t.onClose || ((e) => {
  });
  Object.keys(a || {}).map((e) => {
    const r = a[e];
    C(e, s, r);
  });
  const n = (e) => {
    t.queryRef.current ? (t.queryRef.current.setFilter(e), u(e)) : console.warn("Query reference not found");
  }, d = () => {
    n({});
  }, F = () => {
    const e = c.current.getData();
    var r = {};
    Object.entries(e).map(([b, l]) => {
      l && l != "" && (r[b] = l);
    }), n && n(r);
  };
  return /* @__PURE__ */ i("div", { className: "py-filter-container", children: [
    /* @__PURE__ */ o("div", { className: "py-filter-content", children: /* @__PURE__ */ o(y, { formData: s, ref: c, children: /* @__PURE__ */ o(h, { columns: 2, children: p() }) }) }),
    /* @__PURE__ */ i("div", { className: "py-filter-button-container", children: [
      /* @__PURE__ */ i(m, { className: "py-reset-button", disableRipple: !0, onClick: d, children: [
        /* @__PURE__ */ o(N, { className: "py-button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ i(m, { className: "py-filter-button", disableRipple: !0, onClick: F, children: [
        /* @__PURE__ */ o(g, { className: "py-button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
export {
  S as FilterForm
};
