import { jsx as a, Fragment as C, jsxs as F } from "react/jsx-runtime";
import { forwardRef as w, useRef as d, useImperativeHandle as A } from "react";
import '../../../assets/TextView.css';/* empty css                       */
import { e as L } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { getFieldLabel as N } from "./util.js";
import { useFieldManager as y, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
const O = (l, e) => {
  var n = l.indexOf(e);
  return n >= 0;
}, V = (l) => O(l, "."), z = w(function(e, n) {
  const i = y(e.attribute, e), { getValue: m, setValue: f, mutateOptions: v } = i, b = n || d(null), c = m(), s = e.lookupOptions, r = (s == null ? void 0 : s.labelAttribute) || "name", g = e.textAlign || "left", x = e.variant || "standard", h = d(null);
  A(b, () => ({
    ...M(i),
    focus() {
      h.current.focus();
    }
  }), [i]);
  const u = V(r) ? (t) => L(r, t) : (t) => t == null ? void 0 : t[r];
  var o = i.getFieldProps();
  return o.onChange = (t) => {
    e.readOnly || f(t.target.value);
  }, /* @__PURE__ */ a(C, { children: !v.visible && /* @__PURE__ */ a(
    R,
    {
      label: N(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ F("div", { ...o, className: "text-view-field-container", children: [
        /* @__PURE__ */ a("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ a("div", { className: x == "standard" ? "text-view-value" : "text-view-value-outlined", children: u(c) || "N/A" })
      ] }) : /* @__PURE__ */ a("div", { ...o, style: { textAlign: g }, children: u(c) || "N/A" })
    }
  ) });
});
export {
  z as default
};
