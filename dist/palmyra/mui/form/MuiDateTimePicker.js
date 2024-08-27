import { jsx as l, Fragment as F } from "react/jsx-runtime";
import { forwardRef as v, useRef as f, useImperativeHandle as D } from "react";
import { LocalizationProvider as b, DateTimePicker as M } from "@mui/x-date-pickers";
import { getFieldLabel as Y } from "./util.js";
import x from "./FieldDecorator.js";
import n from "dayjs";
import { useFieldManager as L, getFieldHandler as O } from "@palmyralabs/rt-forms";
import { A as R } from "../../../chunks/AdapterDayjs.js";
const I = v(function(e, i) {
  const u = e.serverPattern || e.displayPattern || "YYYY-MM-DD", m = e.displayPattern || e.serverPattern || "YYYY-MM-DD", s = (t) => t ? n(t, u) : n(void 0), c = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(u);
  }, r = L(e.attribute, e, { format: c, parse: s }), { getError: g, getValue: h, setValue: C, mutateOptions: P } = r, V = i || f(null), o = g(), d = f(null);
  D(V, () => ({
    ...O(r),
    focus() {
      d.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var a = r.getFieldProps();
  return a.defaultValue && (a.defaultValue = s(a.defaultValue)), a.onChange = (t, y) => {
    e.readOnly || (C(t), e.onChange && e.onChange(t, y));
  }, /* @__PURE__ */ l(F, { children: !P.visible && /* @__PURE__ */ l(
    x,
    {
      label: Y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(b, { dateAdapter: R, children: /* @__PURE__ */ l(
        M,
        {
          defaultValue: n(e.defaultValue),
          readOnly: e.readOnly,
          format: m,
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
  I as MuiDateTimePicker
};
