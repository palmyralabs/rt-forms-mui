import { jsx as i, Fragment as k, jsxs as T } from "react/jsx-runtime";
import { forwardRef as E, useRef as y, useImperativeHandle as H } from "react";
import { LocalizationProvider as J, DatePicker as x } from "@mui/x-date-pickers";
import { getFieldLabel as O } from "./util.js";
import W from "dayjs";
import { useFieldManager as z, getFieldHandler as B, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { A as _ } from "../../../chunks/AdapterDayjs.js";
const V = (n, e) => {
  if (n && n.isValid && n.isValid())
    return n.format(e);
}, d = (n, e) => {
  if (n)
    return W(n, e);
}, X = E(function(e, P) {
  const l = e.serverPattern || e.displayPattern || "YYYY-MM-DD", v = e.displayPattern || e.serverPattern || "YYYY-MM-DD", F = (t) => {
    if (t && typeof t == "string") {
      var r, a;
      const o = t.charAt(0);
      if (o == ">")
        r = d(t.slice(1), l);
      else if (o == "<")
        a = d(t.slice(1), l);
      else {
        const C = t.split("...");
        r = d(C[0], l), C[1] && (a = d(C[1], l));
      }
    }
    return { from: r, to: a };
  }, M = (t) => {
    if (t) {
      const r = V(t.from, l), a = V(t.to, l);
      if (r)
        return a ? r + "..." + a : ">" + r;
      if (a)
        return "<" + a;
    }
  }, u = z(e.attribute, e, { format: M, parse: F }), { getError: Y, getValue: D, setValue: A, mutateOptions: R, refreshError: j } = u, L = P || y(null), f = Y(), m = y(null);
  H(L, () => ({
    ...B(u),
    focus() {
      m.current.focus();
    },
    setCurrent() {
    }
  }), [u]);
  var s = u.getFieldProps(), g, h;
  const c = D();
  if (c && (g = c.from, h = c.to), s.defaultValue) {
    const t = F(s.defaultValue);
    g = t.from, h = t.to;
  }
  const b = (t, r, a) => {
    if (!e.readOnly) {
      const o = { ...c, [t]: r };
      A(o), e.onChange && e.onChange(o, a);
    }
  };
  return s.onBlur = j, /* @__PURE__ */ i(k, { children: !R.visible && /* @__PURE__ */ i(
    I,
    {
      label: O(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ T(J, { dateAdapter: _, children: [
        /* @__PURE__ */ i(
          x,
          {
            format: v,
            label: e.label,
            slotProps: {
              textField: {
                error: f.status,
                helperText: f.message,
                variant: s.variant || "standard",
                fullWidth: !0,
                inputRef: m
              }
            },
            ...s,
            onChange: (t, r) => b("from", t, r),
            defaultValue: g
          }
        ),
        /* @__PURE__ */ i("span", { style: { width: "10%", textAlign: "center", padding: "5px" }, children: "to" }),
        /* @__PURE__ */ i(
          x,
          {
            format: v,
            label: e.label,
            slotProps: {
              textField: {
                error: f.status,
                helperText: f.message,
                variant: e.variant || "standard",
                fullWidth: !0,
                inputRef: m
              }
            },
            ...s,
            onChange: (t, r) => b("to", t, r),
            defaultValue: h
          }
        )
      ] })
    }
  ) });
});
export {
  X as MuiDateRangePicker
};
