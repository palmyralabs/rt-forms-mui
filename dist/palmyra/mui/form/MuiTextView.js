import { jsx as t, Fragment as m, jsxs as v } from "react/jsx-runtime";
import { forwardRef as f, useRef as s, useImperativeHandle as x } from "react";
import { useFieldManager as b, getFieldHandler as g, FieldDecorator as h } from "@palmyralabs/rt-forms";
import { getFieldLabel as C } from "./util.js";
const V = f(function(e, a) {
  const l = b(e.attribute, e), { getValue: i, mutateOptions: c } = l, r = a || s(null), o = e.textAlign || "left", d = s(null), u = e.variant || "standard";
  x(r, () => ({
    ...g(l),
    focus() {
      d.current.focus();
    }
  }), [l]);
  var n = l.getFieldProps();
  return /* @__PURE__ */ t(m, { children: !c.visible && /* @__PURE__ */ t(
    h,
    {
      label: C(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ v("div", { ...n, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: e.label ? u === "outlined" ? "text-view-value-outlined" : "text-view-value" : "", children: i() })
      ] }) : /* @__PURE__ */ t("div", { ...n, style: { textAlign: o }, children: i() })
    }
  ) });
});
export {
  V as MuiTextView
};
