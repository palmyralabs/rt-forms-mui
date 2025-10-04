import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { LocalizationProvider as D, DatePicker as M } from "@mui/x-date-pickers";
import { useFieldManager as Y, getFieldHandler as V, FieldDecorator as y } from "@palmyralabs/rt-forms";
import x from "dayjs";
import { forwardRef as L, useRef as d, useImperativeHandle as R } from "react";
import { getFieldLabel as j } from "./util.js";
import { A as k } from "../../../chunks/AdapterDayjs.js";
const T = L(function(e, n) {
  const i = e.serverPattern || e.displayPattern || "YYYY-MM-DD", c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", o = (t) => {
    if (t)
      return x(t, i);
  }, f = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(i);
  }, a = Y(e.attribute, e, { format: f, parse: o }), { getError: m, getValue: h, setValue: g, mutateOptions: C, refreshError: P } = a, F = n || d(null), s = m(), u = d(null);
  R(F, () => ({
    ...V(a),
    focus() {
      u.current.focus();
    },
    setCurrent() {
    }
  }), [a]);
  var r = a.getFieldProps();
  return r.defaultValue && (r.defaultValue = o(r.defaultValue)), r.onChange = (t, v) => {
    e.readOnly || (g(t), e.onChange && e.onChange(t, v));
  }, r.onBlur = P, /* @__PURE__ */ l(b, { children: !C.visible && /* @__PURE__ */ l(
    y,
    {
      label: j(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(D, { dateAdapter: k, children: /* @__PURE__ */ l(
        M,
        {
          format: c,
          label: e.label,
          slotProps: {
            textField: {
              error: s.status,
              helperText: s.message,
              variant: e.variant || "standard",
              fullWidth: e.fullWidth !== void 0 ? e.fullWidth : !0,
              inputRef: u
            }
          },
          ...r,
          value: h() || null
        }
      ) })
    }
  ) });
});
export {
  T as MuiDatePicker
};
