import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { Button as m } from "@mui/material";
import { PalmyraForm as h } from "@palmyralabs/rt-forms";
import { i as R } from "../../../../../chunks/accessor.js";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { useRef as g } from "react";
import { T as N, a as y } from "../../../../../chunks/index4.js";
import { convertToField as C } from "./GridFieldConverter.js";
import j from "./FieldGenerator.js";
import v from "../../../form/FieldGroupContainer.js";
const S = (r) => {
  const s = {}, c = g(), a = r.defaultFilter || {}, f = C(r.columns), d = () => f.map((e, t) => j(e, e.label)), u = r.onClose || ((e) => {
  });
  Object.keys(a || {}).map((e) => {
    const t = a[e];
    R(e, s, t);
  });
  const n = (e) => {
    r.queryRef.current ? (r.queryRef.current.setFilter(e), u(e)) : console.warn("Query reference not found");
  }, p = () => {
    n({});
  }, F = () => {
    const e = c.current.getData();
    var t = {};
    Object.entries(e).map(([b, l]) => {
      l && l != "" && (t[b] = l);
    }), n && n(t);
  };
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ o("div", { className: "grid-filter-content", children: /* @__PURE__ */ o(h, { formData: s, mode: "new", ref: c, children: /* @__PURE__ */ o(v, { columns: 2, children: d() }) }) }),
    /* @__PURE__ */ i("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ i(m, { className: "secondary-filled-button", disableRipple: !0, onClick: p, children: [
        /* @__PURE__ */ o(N, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ i(m, { className: "filled-button", disableRipple: !0, onClick: F, children: [
        /* @__PURE__ */ o(y, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
export {
  S as FilterForm
};
