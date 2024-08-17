import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { forwardRef as h, useRef as d, useImperativeHandle as v } from "react";
import { LocalizationProvider as M, DatePicker as Y } from "@mui/x-date-pickers";
import { getFieldLabel as V } from "./util.js";
import y from "./FieldDecorator.js";
import c from "dayjs";
import { useFieldManager as x, getFieldHandler as L } from "@palmyralabs/rt-forms";
import { A as R } from "../../../chunks/AdapterDayjs.js";
const W = h(function(e, n) {
  const i = e.serverPattern || e.displayPattern || "YYYY-MM-DD", m = e.displayPattern || e.serverPattern || "YYYY-MM-DD", o = (t) => t ? c(t, i) : c(void 0), f = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(i);
  }, a = x(e.attribute, e, { format: f, parse: o }), { getError: P, getValue: g, setValue: C, mutateOptions: F } = a, D = n || d(null), s = P(), u = d(null);
  v(D, () => ({
    ...L(a),
    focus() {
      u.current.focus();
    },
    setCurrent() {
    }
  }), [a]);
  var r = a.getFieldProps();
  return r.defaultValue && (r.defaultValue = o(r.defaultValue)), r.onChange = (t) => {
    e.readOnly || C(t);
  }, /* @__PURE__ */ l(b, { children: !F.visible && /* @__PURE__ */ l(
    y,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(M, { dateAdapter: R, children: /* @__PURE__ */ l(
        Y,
        {
          format: m,
          label: e.label,
          slotProps: {
            textField: {
              error: s.status,
              helperText: s.message,
              variant: r.variant || "standard",
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
  W as MuiDatePicker
};
