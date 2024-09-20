import { jsx as l, Fragment as D } from "react/jsx-runtime";
import { forwardRef as V, useRef as c, useImperativeHandle as b } from "react";
import { LocalizationProvider as M, DateTimePicker as Y } from "@mui/x-date-pickers";
import { getFieldLabel as x } from "./util.js";
import n from "dayjs";
import { useFieldManager as L, getFieldHandler as O, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { A as T } from "../../../chunks/AdapterDayjs.js";
const B = V(function(e, i) {
  const s = e.serverPattern || e.displayPattern || "YYYY-MM-DD", f = e.displayPattern || e.serverPattern || "YYYY-MM-DD", o = (t) => t ? n(t, s) : n(void 0), m = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(s);
  }, r = L(e.attribute, e, { format: m, parse: o }), { getError: h, getValue: g, setValue: C, mutateOptions: P, refreshError: y } = r, F = i || c(null), u = h(), d = c(null);
  b(F, () => ({
    ...O(r),
    focus() {
      d.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var a = r.getFieldProps();
  return a.defaultValue && (a.defaultValue = o(a.defaultValue)), a.onChange = (t, v) => {
    e.readOnly || (C(t), e.onChange && e.onChange(t, v));
  }, a.onBlur = y, /* @__PURE__ */ l(D, { children: !P.visible && /* @__PURE__ */ l(
    R,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(M, { dateAdapter: T, children: /* @__PURE__ */ l(
        Y,
        {
          defaultValue: n(e.defaultValue),
          readOnly: e.readOnly,
          format: f,
          label: e.label,
          views: ["year", "day", "hours", "minutes", "seconds"],
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
          value: g()
        }
      ) })
    }
  ) });
});
export {
  B as MuiDateTimePicker
};
