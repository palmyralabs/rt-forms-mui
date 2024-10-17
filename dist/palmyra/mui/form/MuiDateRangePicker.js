import { jsx as i, Fragment as k, jsxs as T } from "react/jsx-runtime";
import { forwardRef as E, useRef as x, useImperativeHandle as H } from "react";
import { LocalizationProvider as J, DatePicker as V } from "@mui/x-date-pickers";
import { getFieldLabel as O } from "./util.js";
import W from "dayjs";
import { useFieldManager as z, getFieldHandler as B, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { A as _ } from "../../../chunks/AdapterDayjs.js";
const M = (n, e) => {
  if (n && n.isValid && n.isValid())
    return n.format(e);
}, d = (n, e) => {
  if (n)
    return W(n, e);
}, X = E(function(e, P) {
  const l = e.serverPattern || e.displayPattern || "YYYY-MM-DD", F = e.displayPattern || e.serverPattern || "YYYY-MM-DD", b = (t) => {
    if (t && typeof t == "string") {
      var r, a;
      const s = t.charAt(0);
      if (s == ">")
        r = d(t.slice(1), l);
      else if (s == "<")
        a = d(t.slice(1), l);
      else {
        const v = t.split("...");
        r = d(v[0], l), v[1] && (a = d(v[1], l));
      }
    }
    return { from: r, to: a };
  }, Y = (t) => {
    if (t) {
      const r = M(t.from, l), a = M(t.to, l);
      if (r)
        return a ? r + "..." + a : ">" + r;
      if (a)
        return "<" + a;
    }
  }, u = z(e.attribute, e, { format: Y, parse: b }), { getError: D, getValue: m, setValue: A, mutateOptions: R, refreshError: j } = u, L = P || x(null), f = D(), g = x(null);
  H(L, () => ({
    ...B(u),
    focus() {
      g.current.focus();
    },
    setCurrent() {
    }
  }), [u]);
  var o = u.getFieldProps(), h, C;
  const c = m();
  if (c && (h = c.from, C = c.to), o.defaultValue) {
    const t = b(o.defaultValue);
    h = t.from, C = t.to;
  }
  const y = (t, r, a) => {
    if (!e.readOnly) {
      const s = { ...c, [t]: r };
      A(s), e.onChange && e.onChange(s, a);
    }
  };
  return o.onBlur = j, /* @__PURE__ */ i(k, { children: !R.visible && /* @__PURE__ */ i(
    I,
    {
      label: O(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ T(J, { dateAdapter: _, children: [
        /* @__PURE__ */ i(
          V,
          {
            format: F,
            label: e.label,
            slotProps: {
              textField: {
                error: f.status,
                helperText: f.message,
                variant: o.variant || "standard",
                fullWidth: !0,
                inputRef: g
              }
            },
            value: m().from,
            ...o,
            onChange: (t, r) => y("from", t, r),
            defaultValue: h
          }
        ),
        /* @__PURE__ */ i("span", { style: { width: "10%", textAlign: "center", padding: "5px" }, children: "to" }),
        /* @__PURE__ */ i(
          V,
          {
            format: F,
            label: e.label,
            slotProps: {
              textField: {
                error: f.status,
                helperText: f.message,
                variant: e.variant || "standard",
                fullWidth: !0,
                inputRef: g
              }
            },
            value: m().to,
            ...o,
            onChange: (t, r) => y("to", t, r),
            defaultValue: C
          }
        )
      ] })
    }
  ) });
});
export {
  X as MuiDateRangePicker
};
