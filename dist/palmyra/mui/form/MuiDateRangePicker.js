import { jsx as i, Fragment as T, jsxs as E } from "react/jsx-runtime";
import { forwardRef as H, useRef as y, useImperativeHandle as J } from "react";
import { LocalizationProvider as O, DatePicker as x } from "@mui/x-date-pickers";
import { getFieldLabel as W } from "./util.js";
import V from "dayjs";
import { useFieldManager as z, getFieldHandler as B, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { A as _ } from "../../../chunks/AdapterDayjs.js";
const M = (n, e) => {
  if (n && n.isValid && n.isValid())
    return n.format(e);
}, d = (n, e) => n ? V(n, e) : V(void 0), X = H(function(e, P) {
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
  }, Y = (t) => {
    if (t) {
      const r = M(t.from, l), a = M(t.to, l);
      if (r)
        return a ? r + "..." + a : ">" + r;
      if (a)
        return "<" + a;
    }
  }, u = z(e.attribute, e, { format: Y, parse: F }), { getError: D, getValue: A, setValue: R, mutateOptions: j, refreshError: L } = u, k = P || y(null), f = D(), m = y(null);
  J(k, () => ({
    ...B(u),
    focus() {
      m.current.focus();
    },
    setCurrent() {
    }
  }), [u]);
  var s = u.getFieldProps(), g, h;
  const c = A();
  if (c && (g = c.from, h = c.to), s.defaultValue) {
    const t = F(s.defaultValue);
    g = t.from, h = t.to;
  }
  const b = (t, r, a) => {
    if (!e.readOnly) {
      const o = { ...c, [t]: r };
      R(o), e.onChange && e.onChange(o, a);
    }
  };
  return s.onBlur = L, /* @__PURE__ */ i(T, { children: !j.visible && /* @__PURE__ */ i(
    I,
    {
      label: W(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ E(O, { dateAdapter: _, children: [
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
