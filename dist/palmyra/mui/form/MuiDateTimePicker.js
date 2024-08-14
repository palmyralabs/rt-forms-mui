import { jsx as r, Fragment as F } from "react/jsx-runtime";
import { forwardRef as M, useRef as u, useImperativeHandle as v } from "react";
import { LocalizationProvider as Y, DateTimePicker as O } from "@mui/x-date-pickers";
import { generateOptions as x, getFieldLabel as L } from "./util.js";
import R from "./FieldDecorator.js";
import c from "dayjs";
import { useFieldManager as T, getFieldHandler as V } from "@palmyralabs/rt-forms";
import { A as j } from "../../../chunks/AdapterDayjs.js";
const B = M(function(e, n) {
  const i = e.serverPattern || e.displayPattern || "YYYY-MM-DD", m = e.displayPattern || e.serverPattern || "YYYY-MM-DD", f = (t) => t ? c(t, i) : c(void 0), P = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(i);
  }, a = T(e.attribute, e, { format: P, parse: f }), { getError: g, getValue: y, setValue: C, mutateOptions: l } = a, b = n || u(null), s = g(), o = u(null), h = e.variant || "standard";
  v(b, () => ({
    ...V(a),
    focus() {
      o.current.focus();
    },
    setCurrent() {
    }
  }), [a]);
  var d = x(e, l, y());
  d.onChange = (t) => {
    e.readOnly || C(t);
  };
  const D = e.labelMode != "title" ? e.label : "";
  return /* @__PURE__ */ r(F, { children: !l.visible && /* @__PURE__ */ r(
    R,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(Y, { dateAdapter: j, children: /* @__PURE__ */ r(
        O,
        {
          ...d,
          readOnly: e.readOnly,
          ...e.muiProps,
          format: m,
          label: D,
          views: ["year", "day", "hours", "minutes", "seconds"],
          slotProps: {
            textField: {
              error: s.status,
              helperText: s.message,
              variant: h,
              fullWidth: !0,
              inputRef: o
            }
          }
        }
      ) })
    }
  ) });
});
export {
  B as MuiDateTimePicker
};
