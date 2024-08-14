import { jsx as t, Fragment as v, jsxs as g } from "react/jsx-runtime";
import { forwardRef as x, useRef as r, useImperativeHandle as b } from "react";
import { useFieldManager as h, getFieldHandler as C } from "@palmyralabs/rt-forms";
import { getFieldLabel as F } from "./util.js";
import w from "./FieldDecorator.js";
const y = x(function(e, i) {
  const l = h(e.attribute, e), { getValue: n, setValue: c, mutateOptions: o } = l, u = i || r(null), d = e.textAlign || "left", m = r(null), f = e.variant || "standard";
  b(u, () => ({
    ...C(l),
    focus() {
      m.current.focus();
    }
  }), [l]);
  var a = l.getFieldProps();
  return a.onChange = (s) => {
    e.readOnly || c(s.target.value);
  }, /* @__PURE__ */ t(v, { children: !o.visible && /* @__PURE__ */ t(
    w,
    {
      label: F(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ g("div", { ...a, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: e.label ? f === "outlined" ? "text-view-value-outlined" : "text-view-value" : "", children: n() })
      ] }) : /* @__PURE__ */ t("div", { ...a, style: { textAlign: d }, children: n() })
    }
  ) });
});
export {
  y as MuiTextView
};
