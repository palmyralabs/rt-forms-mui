import { jsx as t, Fragment as y } from "react/jsx-runtime";
import { forwardRef as x, useRef as o, useImperativeHandle as I } from "react";
import { Rating as M } from "@mui/material";
import L from "./FieldDecorator.js";
import { useFieldManager as z, getFieldHandler as E } from "@palmyralabs/rt-forms";
import { getFieldLabel as H } from "./util.js";
import { Star as P, StarOutline as S } from "@mui/icons-material";
const B = x(function(e, l) {
  var m;
  const n = z(e.attribute, e), { getError: r, getValue: s, setValue: f, mutateOptions: g } = n, C = l || o(null), c = r(), a = o(null), F = e.variant || "standard", h = (e == null ? void 0 : e.autoFocus) || !1, b = (e == null ? void 0 : e.precision) || 1, O = (e == null ? void 0 : e.max) || 5, R = (e == null ? void 0 : e.icon) || P, v = (e == null ? void 0 : e.emptyIcon) || S;
  I(C, () => ({
    ...E(n),
    focus() {
      a.current.checked = !0, a.current.focus();
    },
    getOptions() {
    },
    setOptions(d) {
    }
  }), [n]);
  var u = n.getFieldProps();
  return u.onChange = (i, d) => {
    e.readOnly || (f(i.target.value), e.onChange && e.onChange(i, d));
  }, /* @__PURE__ */ t(y, { children: !g.visible && /* @__PURE__ */ t(
    L,
    {
      label: H(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ t(
        M,
        {
          variant: F,
          precision: b,
          readOnly: e.readOnly,
          disabled: e.disabled,
          inputRef: a,
          size: (m = e == null ? void 0 : e.fieldProps) == null ? void 0 : m.size,
          icon: /* @__PURE__ */ t(R, {}),
          emptyIcon: /* @__PURE__ */ t(v, {}),
          max: O,
          ...u,
          value: s(),
          error: c.status,
          helperText: c.message,
          autoFocus: h
        }
      )
    }
  ) });
});
export {
  B as MuiRating
};
