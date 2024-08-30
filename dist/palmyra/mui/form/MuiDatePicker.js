import { jsx as r, Fragment as D } from "react/jsx-runtime";
import { forwardRef as b, useRef as f, useImperativeHandle as v } from "react";
import { LocalizationProvider as M, DatePicker as Y } from "@mui/x-date-pickers";
import { getFieldLabel as y } from "./util.js";
import n from "dayjs";
import { useFieldManager as x, getFieldHandler as L, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { A as j } from "../../../chunks/AdapterDayjs.js";
const T = b(function(e, i) {
  const u = e.serverPattern || e.displayPattern || "YYYY-MM-DD", c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", o = (t) => t ? n(t, u) : n(void 0), m = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(u);
  }, l = x(e.attribute, e, { format: m, parse: o }), { getError: g, getValue: C, setValue: h, mutateOptions: P } = l, V = i || f(null), s = g(), d = f(null);
  v(V, () => ({
    ...L(l),
    focus() {
      d.current.focus();
    },
    setCurrent() {
    }
  }), [l]);
  var a = l.getFieldProps();
  return a.defaultValue && (a.defaultValue = o(a.defaultValue)), a.onChange = (t, F) => {
    e.readOnly || (h(t), e.onChange && e.onChange(t, F));
  }, /* @__PURE__ */ r(D, { children: !P.visible && /* @__PURE__ */ r(
    R,
    {
      label: y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(M, { dateAdapter: j, children: /* @__PURE__ */ r(
        Y,
        {
          defaultValue: n(e.defaultValue),
          format: c,
          label: e.label,
          slotProps: {
            textField: {
              error: s.status,
              helperText: s.message,
              variant: e.variant || "standard",
              fullWidth: e.fullWidth || !0,
              inputRef: d
            }
          },
          ...a,
          value: e.defaultValue ? n(e.defaultValue) : C()
        }
      ) })
    }
  ) });
});
export {
  T as MuiDatePicker
};
