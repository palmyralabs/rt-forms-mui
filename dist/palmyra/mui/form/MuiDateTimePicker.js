import { jsx as a, Fragment as v } from "react/jsx-runtime";
import { forwardRef as D, useRef as d, useImperativeHandle as b } from "react";
import { LocalizationProvider as M, DateTimePicker as Y } from "@mui/x-date-pickers";
import { getFieldLabel as x } from "./util.js";
import L from "./FieldDecorator.js";
import u from "dayjs";
import { useFieldManager as O, getFieldHandler as R } from "@palmyralabs/rt-forms";
import { A as T } from "../../../chunks/AdapterDayjs.js";
const W = D(function(e, n) {
  const i = e.serverPattern || e.displayPattern || "YYYY-MM-DD", c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", m = (t) => t ? u(t, i) : u(void 0), f = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(i);
  }, r = O(e.attribute, e, { format: f, parse: m }), { getError: P, getValue: g, setValue: y, mutateOptions: C } = r, F = n || d(null), l = P(), s = d(null), h = e.variant || "standard";
  b(F, () => ({
    ...R(r),
    focus() {
      s.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var o = r.getFieldProps();
  return o.onChange = (t) => {
    e.readOnly || y(t);
  }, /* @__PURE__ */ a(v, { children: !C.visible && /* @__PURE__ */ a(
    L,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(M, { dateAdapter: T, children: /* @__PURE__ */ a(
        Y,
        {
          readOnly: e.readOnly,
          format: c,
          label: e.label,
          views: ["year", "day", "hours", "minutes", "seconds"],
          slotProps: {
            textField: {
              error: l.status,
              helperText: l.message,
              variant: h,
              fullWidth: !0,
              inputRef: s
            }
          },
          ...o,
          value: g()
        }
      ) })
    }
  ) });
});
export {
  W as MuiDateTimePicker
};
