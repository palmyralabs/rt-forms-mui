import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { forwardRef as v, useRef as f, useImperativeHandle as M } from "react";
import { LocalizationProvider as Y, DatePicker as y } from "@mui/x-date-pickers";
import { getFieldLabel as x } from "./util.js";
import n from "dayjs";
import { useFieldManager as L, getFieldHandler as R, FieldDecorator as j } from "@palmyralabs/rt-forms";
import { A as k } from "../../../chunks/AdapterDayjs.js";
const T = v(function(e, i) {
  const u = e.serverPattern || e.displayPattern || "YYYY-MM-DD", c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", o = (t) => t ? n(t, u) : n(void 0), m = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(u);
  }, r = L(e.attribute, e, { format: m, parse: o }), { getError: g, getValue: h, setValue: C, mutateOptions: P, refreshError: V } = r, F = i || f(null), s = g(), d = f(null);
  M(F, () => ({
    ...R(r),
    focus() {
      d.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var a = r.getFieldProps();
  return a.defaultValue && (a.defaultValue = o(a.defaultValue)), a.onChange = (t, D) => {
    e.readOnly || (C(t), e.onChange && e.onChange(t, D));
  }, a.onBlur = V, /* @__PURE__ */ l(b, { children: !P.visible && /* @__PURE__ */ l(
    j,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(Y, { dateAdapter: k, children: /* @__PURE__ */ l(
        y,
        {
          defaultValue: n(e.defaultValue),
          format: c,
          label: e.label,
          slotProps: {
            textField: {
              error: s.status,
              helperText: s.message,
              variant: e.variant || "standard",
              fullWidth: e.fullWidth || !0,
              inputRef: d
            }
          },
          ...a,
          value: e.defaultValue ? n(e.defaultValue) : h()
        }
      ) })
    }
  ) });
});
export {
  T as MuiDatePicker
};
