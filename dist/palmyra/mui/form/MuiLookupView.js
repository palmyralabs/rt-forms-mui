import { jsx as l, Fragment as x, jsxs as C } from "react/jsx-runtime";
import { forwardRef as F, useRef as u, useImperativeHandle as w } from "react";
import '../../../assets/TextView.css';/* empty css                       */
import { e as A } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { o as L } from "../../../chunks/StringUtil.js";
import { getFieldLabel as N } from "./util.js";
import { useFieldManager as y, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
const z = F(function(e, o) {
  const a = y(e.attribute, e), { getValue: d, setValue: m, mutateOptions: f } = a, v = o || u(null), r = d(), n = e.lookupOptions, i = (n == null ? void 0 : n.labelAttribute) || "name", b = e.textAlign || "left", g = e.variant || "standard", h = u(null);
  w(v, () => ({
    ...M(a),
    focus() {
      h.current.focus();
    }
  }), [a]);
  const c = L(i) ? (t) => A(i, t) : (t) => t == null ? void 0 : t[i];
  var s = a.getFieldProps();
  return s.onChange = (t) => {
    e.readOnly || m(t.target.value);
  }, /* @__PURE__ */ l(x, { children: !f.visible && /* @__PURE__ */ l(
    R,
    {
      label: N(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ C("div", { ...s, className: "text-view-field-container", children: [
        /* @__PURE__ */ l("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ l("div", { className: g == "standard" ? "text-view-value" : "text-view-value-outlined", children: c(r) || "N/A" })
      ] }) : /* @__PURE__ */ l("div", { ...s, style: { textAlign: b }, children: c(r) || "N/A" })
    }
  ) });
});
export {
  z as default
};
