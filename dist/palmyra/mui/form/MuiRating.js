import { jsx as t, Fragment as y } from "react/jsx-runtime";
import { forwardRef as x, useRef as c, useImperativeHandle as I } from "react";
import { Rating as M } from "@mui/material";
import { useFieldManager as E, getFieldHandler as L, FieldDecorator as z } from "@palmyralabs/rt-forms";
import { getFieldLabel as H } from "./util.js";
import { Star as P, StarOutline as S } from "@mui/icons-material";
const q = x(function(e, i) {
  const n = E(e.attribute, e), { getError: u, getValue: d, setValue: m, mutateOptions: f, refreshError: g } = n, C = i || c(null), l = u(), a = c(null), h = e.variant || "standard", F = e?.autoFocus || !1, b = e?.precision || 1, O = e?.max || 5, R = e?.icon || P, v = e?.emptyIcon || S;
  I(C, () => ({
    ...L(n),
    focus() {
      a.current.checked = !0, a.current.focus();
    },
    getOptions() {
    },
    setOptions(s) {
    }
  }), [n]);
  var o = n.getFieldProps();
  return o.onChange = (r, s) => {
    e.readOnly || (m(r.target.value), e.onChange && e.onChange(r, s));
  }, o.onBlur = g, /* @__PURE__ */ t(y, { children: !f.visible && /* @__PURE__ */ t(
    z,
    {
      label: H(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ t(
        M,
        {
          variant: h,
          precision: b,
          readOnly: e.readOnly,
          disabled: e.disabled,
          inputRef: a,
          size: e?.fieldProps?.size,
          icon: /* @__PURE__ */ t(R, {}),
          emptyIcon: /* @__PURE__ */ t(v, {}),
          max: O,
          ...o,
          value: d(),
          error: l.status,
          helperText: l.message,
          autoFocus: F
        }
      )
    }
  ) });
});
export {
  q as MuiRating
};
