import { jsx as t, Fragment as o, jsxs as r } from "react/jsx-runtime";
import { forwardRef as d, useRef as m, useImperativeHandle as u } from "react";
import f from "./FieldDecorator.js";
import { useFieldManager as v } from "@palmyralabs/rt-forms";
import { getFieldLabel as b } from "./util.js";
const L = d(function(e, a) {
  const l = v(e.attribute, e), n = a || m(null), s = e.textAlign || "left", c = e.variant || "standard", { getValue: i } = l;
  return u(n, () => ({
    getValue: i
  }), [l]), /* @__PURE__ */ t(o, { children: l.mutateOptions.visible && /* @__PURE__ */ t(
    f,
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
            className: e.label ? c === "outlined" ? "text-view-value-outlined" : "text-view-value" : "",
            children: e.options[i()]
          }
        )
      ] })
    }
  ) });
});
export {
  L as default
};
