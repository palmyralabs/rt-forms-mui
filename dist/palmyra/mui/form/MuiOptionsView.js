import { jsx as t, Fragment as c, jsxs as r } from "react/jsx-runtime";
import { forwardRef as m, useRef as u, useImperativeHandle as d } from "react";
import v from "./FieldDecorator.js";
import { useFieldManager as f } from "@palmyralabs/rt-forms";
import { getFieldLabel as b } from "./util.js";
const M = m(function(e, i) {
  const l = f(e.attribute, e), n = i || u(null), s = e.textAlign || "left", o = e.variant || "standard", { getValue: a } = l;
  return d(n, () => ({
    getValue: a
  }), [l]), /* @__PURE__ */ t(c, { children: l.mutateOptions.visible && /* @__PURE__ */ t(
    v,
    {
      label: b(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r("div", { className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t(
          "div",
          {
            style: { textAlign: s },
            className: e.label ? o === "outlined" ? "text-view-value-outlined" : "text-view-value" : "",
            children: e.options[a()]
          }
        )
      ] })
    }
  ) });
});
export {
  M as MuiOptionsView
};
