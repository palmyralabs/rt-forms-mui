import { jsxs as r, jsx as i } from "react/jsx-runtime";
import { Button as c } from "@mui/material";
import { PalmyraForm as F } from "@palmyralabs/rt-forms";
import { i as b } from "../../../../../chunks/accessor.js";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { useRef as h } from "react";
import { T as R, a as g } from "../../../../../chunks/index4.js";
import { convertToField as N } from "./GridFieldConverter.js";
import y from "./FieldGenerator.js";
const O = (t) => {
  const l = {}, n = h(), s = t.defaultFilter || {}, m = N(t.columns), f = () => m.map((e, a) => y(e, e.label)), d = t.onClose || ((e) => {
  });
  Object.keys(s || {}).map((e) => {
    const a = s[e];
    b(e, l, a);
  });
  const o = (e) => {
    t.queryRef.current ? (t.queryRef.current.setFilter(e), d(e)) : console.warn("Query reference not found");
  }, u = () => {
    o({});
  }, p = () => {
    const e = n.current.getData();
    o && o(e);
  };
  return /* @__PURE__ */ r("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ i("div", { className: "grid-filter-content", children: /* @__PURE__ */ i(F, { formData: l, mode: "new", ref: n, children: f() }) }),
    /* @__PURE__ */ r("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ r(c, { className: "secondary-filled-button", disableRipple: !0, onClick: u, children: [
        /* @__PURE__ */ i(R, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ r(c, { className: "filled-button", disableRipple: !0, onClick: p, children: [
        /* @__PURE__ */ i(g, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
export {
  O as default
};
