import { jsx as t, Fragment as x } from "react/jsx-runtime";
import { forwardRef as I, useRef as o, useImperativeHandle as M } from "react";
import { Rating as E } from "@mui/material";
import { useFieldManager as L, getFieldHandler as z, FieldDecorator as H } from "@palmyralabs/rt-forms";
import { getFieldLabel as P } from "./util.js";
import { Star as S, StarOutline as V } from "@mui/icons-material";
const A = I(function(e, c) {
  var d;
  const n = L(e.attribute, e), { getError: r, getValue: s, setValue: f, mutateOptions: g, refreshError: C } = n, h = c || o(null), u = r(), a = o(null), F = e.variant || "standard", b = (e == null ? void 0 : e.autoFocus) || !1, O = (e == null ? void 0 : e.precision) || 1, R = (e == null ? void 0 : e.max) || 5, v = (e == null ? void 0 : e.icon) || S, y = (e == null ? void 0 : e.emptyIcon) || V;
  M(h, () => ({
    ...z(n),
    focus() {
      a.current.checked = !0, a.current.focus();
    },
    getOptions() {
    },
    setOptions(m) {
    }
  }), [n]);
  var i = n.getFieldProps();
  return i.onChange = (l, m) => {
    e.readOnly || (f(l.target.value), e.onChange && e.onChange(l, m));
  }, i.onBlur = C, /* @__PURE__ */ t(x, { children: !g.visible && /* @__PURE__ */ t(
    H,
    {
      label: P(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ t(
        E,
        {
          variant: F,
          precision: O,
          readOnly: e.readOnly,
          disabled: e.disabled,
          inputRef: a,
          size: (d = e == null ? void 0 : e.fieldProps) == null ? void 0 : d.size,
          icon: /* @__PURE__ */ t(v, {}),
          emptyIcon: /* @__PURE__ */ t(y, {}),
          max: R,
          ...i,
          value: s(),
          error: u.status,
          helperText: u.message,
          autoFocus: b
        }
      )
    }
  ) });
});
export {
  A as MuiRating
};
