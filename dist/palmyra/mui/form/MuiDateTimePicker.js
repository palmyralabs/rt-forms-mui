import { jsx as a, Fragment as v } from "react/jsx-runtime";
import { forwardRef as D, useRef as d, useImperativeHandle as M } from "react";
import { LocalizationProvider as Y, DateTimePicker as x } from "@mui/x-date-pickers";
import { getFieldLabel as L } from "./util.js";
import O from "./FieldDecorator.js";
import u from "dayjs";
import { useFieldManager as R, getFieldHandler as T } from "@palmyralabs/rt-forms";
import { A as V } from "../../../chunks/AdapterDayjs.js";
const q = D(function(e, n) {
  const i = e.serverPattern || e.displayPattern || "YYYY-MM-DD", c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", m = (t) => t ? u(t, i) : u(void 0), f = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(i);
  }, r = R(e.attribute, e, { format: f, parse: m }), { getError: P, getValue: g, setValue: y, mutateOptions: C } = r, F = n || d(null), l = P(), s = d(null), b = e.variant || "standard";
  M(F, () => ({
    ...T(r),
    focus() {
      s.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var o = r.getFieldProps();
  o.onChange = (t) => {
    e.readOnly || y(t);
  };
  const h = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ a(v, { children: !C.visible && /* @__PURE__ */ a(
    O,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(Y, { dateAdapter: V, children: /* @__PURE__ */ a(
        x,
        {
          readOnly: e.readOnly,
          format: c,
          label: h,
          views: ["year", "day", "hours", "minutes", "seconds"],
          slotProps: {
            textField: {
              error: l.status,
              helperText: l.message,
              variant: b,
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
  q as MuiDateTimePicker
};
