import { jsx as l, Fragment as h } from "react/jsx-runtime";
import { forwardRef as v, useRef as d, useImperativeHandle as D } from "react";
import { LocalizationProvider as b, DateTimePicker as M } from "@mui/x-date-pickers";
import { getFieldLabel as Y } from "./util.js";
import V from "./FieldDecorator.js";
import m from "dayjs";
import { useFieldManager as x, getFieldHandler as L } from "@palmyralabs/rt-forms";
import { A as O } from "../../../chunks/AdapterDayjs.js";
const I = v(function(e, i) {
  const n = e.serverPattern || e.displayPattern || "YYYY-MM-DD", c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", s = (t) => t ? m(t, n) : m(void 0), f = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(n);
  }, a = x(e.attribute, e, { format: f, parse: s }), { getError: P, getValue: g, setValue: y, mutateOptions: C } = a, F = i || d(null), o = P(), u = d(null);
  D(F, () => ({
    ...L(a),
    focus() {
      u.current.focus();
    },
    setCurrent() {
    }
  }), [a]);
  var r = a.getFieldProps();
  return r.defaultValue && (r.defaultValue = s(r.defaultValue)), r.onChange = (t) => {
    e.readOnly || y(t);
  }, /* @__PURE__ */ l(h, { children: !C.visible && /* @__PURE__ */ l(
    V,
    {
      label: Y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(b, { dateAdapter: O, children: /* @__PURE__ */ l(
        M,
        {
          readOnly: e.readOnly,
          format: c,
          label: e.label,
          views: ["year", "day", "hours", "minutes", "seconds"],
          slotProps: {
            textField: {
              error: o.status,
              helperText: o.message,
              variant: r.variant,
              fullWidth: !0,
              inputRef: u
            }
          },
          ...r,
          value: g()
        }
      ) })
    }
  ) });
});
export {
  I as MuiDateTimePicker
};
