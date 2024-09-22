import { jsxs as c, jsx as l } from "react/jsx-runtime";
import { Button as f } from "@mui/material";
import { PalmyraForm as h, FieldGroupContainer as v } from "@palmyralabs/rt-forms";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { useRef as C } from "react";
import { c as R, T as N } from "../../../../../chunks/index3.js";
import { convertToField as g } from "./GridFieldConverter.js";
import x from "./FieldGenerator.js";
import '../../../../../assets/FilterForm.css';const p = (t, r, n) => {
  var o = t.indexOf(".");
  if (o < 0) {
    r[t] = n;
    return;
  }
  var i = t.substring(0, o), a = t.substring(o + 1);
  return (r[i] === void 0 || r[i] == null) && (r[i] = {}), p(a, r[i], n);
}, Q = (t) => {
  const r = {}, n = C(), o = t.defaultFilter || {}, i = g(t.columns), a = () => i.map((e, s) => x(e, e.label)), d = t.onClose || ((e) => {
  });
  Object.keys(o || {}).map((e) => {
    const s = o[e];
    p(e, r, s);
  });
  const m = (e) => {
    t.queryRef.current ? (t.queryRef.current.setFilter(e), d(e)) : console.warn("Query reference not found");
  }, F = () => {
    m({});
  }, b = () => {
    const e = n.current.getData();
    var s = {};
    Object.entries(e).map(([y, u]) => {
      u && u != "" && (s[y] = u);
    }), m && m(s);
  };
  return /* @__PURE__ */ c("div", { className: "py-filter-container", children: [
    /* @__PURE__ */ l("div", { className: "py-filter-content", children: /* @__PURE__ */ l(h, { formData: r, ref: n, children: /* @__PURE__ */ l(v, { columns: 2, children: a() }) }) }),
    /* @__PURE__ */ c("div", { className: "py-filter-button-container", children: [
      /* @__PURE__ */ c(f, { className: "py-reset-button", disableRipple: !0, onClick: F, children: [
        /* @__PURE__ */ l(R, { className: "py-button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ c(f, { className: "py-filter-button", disableRipple: !0, onClick: b, children: [
        /* @__PURE__ */ l(N, { className: "py-button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
export {
  Q as FilterForm
};
