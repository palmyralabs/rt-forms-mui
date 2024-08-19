import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { forwardRef as v, useRef as d, useImperativeHandle as M } from "react";
import { LocalizationProvider as Y, DatePicker as V } from "@mui/x-date-pickers";
import { getFieldLabel as y } from "./util.js";
import x from "./FieldDecorator.js";
import c from "dayjs";
import { useFieldManager as L, getFieldHandler as R } from "@palmyralabs/rt-forms";
import { A as j } from "../../../chunks/AdapterDayjs.js";
const q = v(function(e, n) {
  const i = e.serverPattern || e.displayPattern || "YYYY-MM-DD", m = e.displayPattern || e.serverPattern || "YYYY-MM-DD", o = (t) => t ? c(t, i) : c(void 0), f = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(i);
  }, r = L(e.attribute, e, { format: f, parse: o }), { getError: g, getValue: C, setValue: P, mutateOptions: h } = r, F = n || d(null), s = g(), u = d(null);
  M(F, () => ({
    ...R(r),
    focus() {
      u.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var a = r.getFieldProps();
  return a.defaultValue && (a.defaultValue = o(a.defaultValue)), a.onChange = (t, D) => {
    e.readOnly || (P(t), e.onChange && e.onChange(t, D));
  }, /* @__PURE__ */ l(b, { children: !h.visible && /* @__PURE__ */ l(
    x,
    {
      label: y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(Y, { dateAdapter: j, children: /* @__PURE__ */ l(
        V,
        {
          format: m,
          label: e.label,
          slotProps: {
            textField: {
              error: s.status,
              helperText: s.message,
              variant: a.variant || "standard",
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
  q as MuiDatePicker
};
