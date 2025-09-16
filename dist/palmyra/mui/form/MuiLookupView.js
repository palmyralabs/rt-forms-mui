import { jsx as t, Fragment as f, jsxs as b } from "react/jsx-runtime";
import { forwardRef as g, useRef as o, useImperativeHandle as x } from "react";
import '../../../assets/TextView.css';/* empty css                       */
import { getFieldLabel as h } from "./util.js";
import { useFieldManager as C, getFieldHandler as F, FieldDecorator as w } from "@palmyralabs/rt-forms";
const j = g(function(e, a) {
  const l = C(e.attribute, e), { getValue: c, mutateOptions: r } = l, u = a || o(null), n = c(), i = e.lookupOptions?.labelAttribute || "name", d = e.textAlign || "left", m = e.variant || "standard", v = o(null);
  x(u, () => ({
    ...F(l),
    focus() {
      v.current.focus();
    }
  }), [l]);
  var s = l.getFieldProps();
  return /* @__PURE__ */ t(f, { children: !r.visible && /* @__PURE__ */ t(
    w,
    {
      label: h(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ b("div", { ...s, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: m == "standard" ? "text-view-value" : "text-view-value-outlined", children: n[i] || "N/A" })
      ] }) : /* @__PURE__ */ t("div", { ...s, style: { textAlign: d }, children: n[i] || "N/A" })
    }
  ) });
});
export {
  j as MuiLookupView
};
