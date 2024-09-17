import { jsx as l, Fragment as x, jsxs as h } from "react/jsx-runtime";
import { forwardRef as C, useRef as u, useImperativeHandle as F } from "react";
import '../../../assets/TextView.css';/* empty css                       */
import { e as w } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { o as A } from "../../../chunks/StringUtil.js";
import { getFieldLabel as L } from "./util.js";
import { useFieldManager as N, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
const q = C(function(e, s) {
  const a = N(e.attribute, e), { getValue: m, mutateOptions: d } = a, f = s || u(null), o = m(), i = e.lookupOptions, n = (i == null ? void 0 : i.labelAttribute) || "name", v = e.textAlign || "left", b = e.variant || "standard", g = u(null);
  F(f, () => ({
    ...M(a),
    focus() {
      g.current.focus();
    }
  }), [a]);
  const r = A(n) ? (t) => w(n, t) : (t) => t == null ? void 0 : t[n];
  var c = a.getFieldProps();
  return /* @__PURE__ */ l(x, { children: !d.visible && /* @__PURE__ */ l(
    R,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ h("div", { ...c, className: "text-view-field-container", children: [
        /* @__PURE__ */ l("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ l("div", { className: b == "standard" ? "text-view-value" : "text-view-value-outlined", children: r(o) || "N/A" })
      ] }) : /* @__PURE__ */ l("div", { ...c, style: { textAlign: v }, children: r(o) || "N/A" })
    }
  ) });
});
export {
  q as default
};
