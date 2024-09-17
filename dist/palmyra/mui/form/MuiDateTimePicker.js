import { jsx as l, Fragment as v } from "react/jsx-runtime";
import { forwardRef as D, useRef as f, useImperativeHandle as b } from "react";
import { LocalizationProvider as M, DateTimePicker as Y } from "@mui/x-date-pickers";
import { getFieldLabel as x } from "./util.js";
import n from "dayjs";
import { useFieldManager as L, getFieldHandler as O, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { A as T } from "../../../chunks/AdapterDayjs.js";
const B = D(function(e, i) {
  const u = e.serverPattern || e.displayPattern || "YYYY-MM-DD", c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", s = (t) => t ? n(t, u) : n(void 0), m = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(u);
  }, r = L(e.attribute, e, { format: m, parse: s }), { getError: h, getValue: g, setValue: C, mutateOptions: P, refreshError: V } = r, y = i || f(null), o = h(), d = f(null);
  b(y, () => ({
    ...O(r),
    focus() {
      d.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var a = r.getFieldProps();
  return a.defaultValue && (a.defaultValue = s(a.defaultValue)), a.onChange = (t, F) => {
    e.readOnly || (C(t), e.onChange && e.onChange(t, F));
  }, a.onBlur = V, /* @__PURE__ */ l(v, { children: !P.visible && /* @__PURE__ */ l(
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
          format: c,
          label: e.label,
          views: ["year", "day", "hours", "minutes", "seconds"],
          slotProps: {
            textField: {
              error: o.status,
              helperText: o.message,
              variant: e.variant || "standard",
              fullWidth: e.fullWidth || !0,
              inputRef: d
            }
          },
          ...a,
          value: e.defaultValue ? n(e.defaultValue) : g()
        }
      ) })
    }
  ) });
});
export {
  B as MuiDateTimePicker
};
