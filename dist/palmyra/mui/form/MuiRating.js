import { jsx as t, Fragment as R } from "react/jsx-runtime";
import { forwardRef as y, useRef as d, useImperativeHandle as x } from "react";
import { Rating as I } from "@mui/material";
import M from "./FieldDecorator.js";
import { useFieldManager as L, getFieldHandler as z } from "@palmyralabs/rt-forms";
import { getFieldLabel as E } from "./util.js";
import { Star as H, StarOutline as P } from "@mui/icons-material";
const B = y(function(e, i) {
  var u;
  const n = L(e.attribute, e), { getError: o, getValue: r, setValue: s, mutateOptions: f } = n, g = i || d(null), l = o(), a = d(null), F = e.variant || "standard", C = (e == null ? void 0 : e.autoFocus) || !1, b = (e == null ? void 0 : e.precision) || 1, h = (e == null ? void 0 : e.max) || 5, v = (e == null ? void 0 : e.icon) || H, O = (e == null ? void 0 : e.emptyIcon) || P;
  x(g, () => ({
    ...z(n),
    focus() {
      a.current.checked = !0, a.current.focus();
    },
    getOptions() {
    },
    setOptions(V) {
    }
  }), [n]);
  var c = n.getFieldProps();
  return c.onChange = (m) => {
    e.readOnly || s(m.target.value);
  }, /* @__PURE__ */ t(R, { children: !f.visible && /* @__PURE__ */ t(
    M,
    {
      label: E(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ t(
        I,
        {
          variant: F,
          precision: b,
          readOnly: e.readOnly,
          disabled: e.disabled,
          inputRef: a,
          size: (u = e == null ? void 0 : e.fieldProps) == null ? void 0 : u.size,
          icon: /* @__PURE__ */ t(v, {}),
          emptyIcon: /* @__PURE__ */ t(O, {}),
          max: h,
          ...c,
          value: r(),
          error: l.status,
          helperText: l.message,
          autoFocus: C
        }
      )
    }
  ) });
});
export {
  B as MuiRating
};
