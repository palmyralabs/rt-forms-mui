import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { forwardRef as y, useRef as d, useImperativeHandle as V } from "react";
import { LocalizationProvider as x, TimePicker as L } from "@mui/x-date-pickers";
import { getFieldLabel as M } from "./util.js";
import O from "dayjs";
import { useFieldManager as R, getFieldHandler as T, FieldDecorator as j } from "@palmyralabs/rt-forms";
import { A as k } from "../../../chunks/AdapterDayjs.js";
const I = y(function(e, n) {
  const i = e.serverPattern || e.displayPattern || "hh:mm aa", m = e.displayPattern || e.serverPattern || "hh:mm aa", s = (t) => {
    if (t)
      return O(t, i);
  }, c = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(i);
  }, r = R(e.attribute, e, { format: c, parse: s }), { getError: f, getValue: h, setValue: g, mutateOptions: C, refreshError: P } = r, F = n || d(null), o = f(), u = d(null);
  V(F, () => ({
    ...T(r),
    focus() {
      u.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var a = r.getFieldProps();
  return a.defaultValue && (a.defaultValue = s(a.defaultValue)), a.onChange = (t, v) => {
    e.readOnly || (g(t), e.onChange && e.onChange(t, v));
  }, a.onBlur = P, /* @__PURE__ */ l(b, { children: !C.visible && /* @__PURE__ */ l(
    j,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(x, { dateAdapter: k, children: /* @__PURE__ */ l(
        L,
        {
          readOnly: e.readOnly,
          format: m,
          label: e.label,
          views: ["hours", "minutes", "seconds"],
          slotProps: {
            textField: {
              error: o.status,
              helperText: o.message,
              variant: e.variant || "standard",
              fullWidth: e.fullWidth || !0,
              inputRef: u
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
  I as MuiTimePicker
};
