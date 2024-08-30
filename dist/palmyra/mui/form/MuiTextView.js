import { jsx as t, Fragment as f, jsxs as g } from "react/jsx-runtime";
import { forwardRef as x, useRef as c, useImperativeHandle as b } from "react";
import { useFieldManager as h, getFieldHandler as C, FieldDecorator as F } from "@palmyralabs/rt-forms";
import { getFieldLabel as w } from "./util.js";
const j = x(function(e, n) {
  const l = h(e.attribute, e), { getValue: i, setValue: r, mutateOptions: u } = l, d = n || c(null), o = e.textAlign || "left", m = c(null), v = e.variant || "standard";
  b(d, () => ({
    ...C(l),
    focus() {
      m.current.focus();
    }
  }), [l]);
  var a = l.getFieldProps();
  return a.onChange = (s) => {
    e.readOnly || r(s.target.value);
  }, /* @__PURE__ */ t(f, { children: !u.visible && /* @__PURE__ */ t(
    F,
    {
      label: w(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ g("div", { ...a, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: e.label ? v === "outlined" ? "text-view-value-outlined" : "text-view-value" : "", children: i() })
      ] }) : /* @__PURE__ */ t("div", { ...a, style: { textAlign: o }, children: i() })
    }
  ) });
});
export {
  j as MuiTextView
};
