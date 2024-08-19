import { jsx as l, Fragment as v } from "react/jsx-runtime";
import { forwardRef as D, useRef as d, useImperativeHandle as b } from "react";
import { LocalizationProvider as M, DateTimePicker as Y } from "@mui/x-date-pickers";
import { getFieldLabel as V } from "./util.js";
import x from "./FieldDecorator.js";
import m from "dayjs";
import { useFieldManager as L, getFieldHandler as O } from "@palmyralabs/rt-forms";
import { A as R } from "../../../chunks/AdapterDayjs.js";
const W = D(function(e, n) {
  const i = e.serverPattern || e.displayPattern || "YYYY-MM-DD", c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", o = (t) => t ? m(t, i) : m(void 0), f = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(i);
  }, r = L(e.attribute, e, { format: f, parse: o }), { getError: g, getValue: C, setValue: h, mutateOptions: P } = r, y = n || d(null), s = g(), u = d(null);
  b(y, () => ({
    ...O(r),
    focus() {
      u.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var a = r.getFieldProps();
  return a.defaultValue && (a.defaultValue = o(a.defaultValue)), a.onChange = (t, F) => {
    e.readOnly || (h(t), e.onChange && e.onChange(t, F));
  }, /* @__PURE__ */ l(v, { children: !P.visible && /* @__PURE__ */ l(
    x,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(M, { dateAdapter: R, children: /* @__PURE__ */ l(
        Y,
        {
          readOnly: e.readOnly,
          format: c,
          label: e.label,
          views: ["year", "day", "hours", "minutes", "seconds"],
          slotProps: {
            textField: {
              error: s.status,
              helperText: s.message,
              variant: a.variant,
              fullWidth: !0,
              inputRef: u
            }
          },
          ...a,
          value: C()
        }
      ) })
    }
  ) });
});
export {
  W as MuiDateTimePicker
};
