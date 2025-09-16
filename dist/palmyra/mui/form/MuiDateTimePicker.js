import { jsx as l, Fragment as v } from "react/jsx-runtime";
import { forwardRef as b, useRef as d, useImperativeHandle as D } from "react";
import { LocalizationProvider as M, DateTimePicker as Y } from "@mui/x-date-pickers";
import { getFieldLabel as V } from "./util.js";
import x from "dayjs";
import { useFieldManager as L, getFieldHandler as O, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { A as T } from "../../../chunks/AdapterDayjs.js";
const B = b(function(e, n) {
  const i = e.serverPattern || e.displayPattern || "YYYY-MM-DD", c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", s = (t) => {
    if (t)
      return x(t, i);
  }, m = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(i);
  }, a = L(e.attribute, e, { format: m, parse: s }), { getError: f, getValue: h, setValue: g, mutateOptions: C, refreshError: P } = a, y = n || d(null), o = f(), u = d(null);
  D(y, () => ({
    ...O(a),
    focus() {
      u.current.focus();
    },
    setCurrent() {
    }
  }), [a]);
  var r = a.getFieldProps();
  return r.defaultValue && (r.defaultValue = s(r.defaultValue)), r.onChange = (t, F) => {
    e.readOnly || (g(t), e.onChange && e.onChange(t, F));
  }, r.onBlur = P, /* @__PURE__ */ l(v, { children: !C.visible && /* @__PURE__ */ l(
    R,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(M, { dateAdapter: T, children: /* @__PURE__ */ l(
        Y,
        {
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
              inputRef: u
            }
          },
          ...r,
          value: h()
        }
      ) })
    }
  ) });
});
export {
  B as MuiDateTimePicker
};
