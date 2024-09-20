import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { forwardRef as v, useRef as c, useImperativeHandle as M } from "react";
import { LocalizationProvider as Y, DatePicker as y } from "@mui/x-date-pickers";
import { getFieldLabel as x } from "./util.js";
import n from "dayjs";
import { useFieldManager as L, getFieldHandler as R, FieldDecorator as j } from "@palmyralabs/rt-forms";
import { A as k } from "../../../chunks/AdapterDayjs.js";
const T = v(function(e, i) {
  const o = e.serverPattern || e.displayPattern || "YYYY-MM-DD", f = e.displayPattern || e.serverPattern || "YYYY-MM-DD", s = (t) => t ? n(t, o) : n(void 0), m = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(o);
  }, r = L(e.attribute, e, { format: m, parse: s }), { getError: g, getValue: h, setValue: C, mutateOptions: P, refreshError: F } = r, D = i || c(null), u = g(), d = c(null);
  M(D, () => ({
    ...R(r),
    focus() {
      d.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var a = r.getFieldProps();
  return a.defaultValue && (a.defaultValue = s(a.defaultValue)), a.onChange = (t, V) => {
    e.readOnly || (C(t), e.onChange && e.onChange(t, V));
  }, a.onBlur = F, /* @__PURE__ */ l(b, { children: !P.visible && /* @__PURE__ */ l(
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
          format: f,
          label: e.label,
          slotProps: {
            textField: {
              error: u.status,
              helperText: u.message,
              variant: e.variant || "standard",
              fullWidth: e.fullWidth || !0,
              inputRef: d
            }
          },
          ...a,
          value: h()
        }
      ) })
    }
  ) });
});
export {
  T as MuiDatePicker
};
