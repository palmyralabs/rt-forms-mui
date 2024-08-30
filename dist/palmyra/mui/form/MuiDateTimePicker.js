import { jsx as r, Fragment as F } from "react/jsx-runtime";
import { forwardRef as v, useRef as c, useImperativeHandle as D } from "react";
import { LocalizationProvider as b, DateTimePicker as M } from "@mui/x-date-pickers";
import { getFieldLabel as Y } from "./util.js";
import n from "dayjs";
import { useFieldManager as x, getFieldHandler as L, FieldDecorator as O } from "@palmyralabs/rt-forms";
import { A as R } from "../../../chunks/AdapterDayjs.js";
const E = v(function(e, i) {
  const u = e.serverPattern || e.displayPattern || "YYYY-MM-DD", f = e.displayPattern || e.serverPattern || "YYYY-MM-DD", s = (t) => t ? n(t, u) : n(void 0), m = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(u);
  }, l = x(e.attribute, e, { format: m, parse: s }), { getError: g, getValue: h, setValue: C, mutateOptions: P } = l, V = i || c(null), o = g(), d = c(null);
  D(V, () => ({
    ...L(l),
    focus() {
      d.current.focus();
    },
    setCurrent() {
    }
  }), [l]);
  var a = l.getFieldProps();
  return a.defaultValue && (a.defaultValue = s(a.defaultValue)), a.onChange = (t, y) => {
    e.readOnly || (C(t), e.onChange && e.onChange(t, y));
  }, /* @__PURE__ */ r(F, { children: !P.visible && /* @__PURE__ */ r(
    O,
    {
      label: Y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(b, { dateAdapter: R, children: /* @__PURE__ */ r(
        M,
        {
          defaultValue: n(e.defaultValue),
          readOnly: e.readOnly,
          format: f,
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
          value: e.defaultValue ? n(e.defaultValue) : h()
        }
      ) })
    }
  ) });
});
export {
  E as MuiDateTimePicker
};
