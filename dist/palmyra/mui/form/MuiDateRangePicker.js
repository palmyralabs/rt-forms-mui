import { jsx as o, Fragment as k, jsxs as T } from "react/jsx-runtime";
import { forwardRef as W, useRef as y, useImperativeHandle as H } from "react";
import { LocalizationProvider as J, DatePicker as V } from "@mui/x-date-pickers";
import { getFieldLabel as O } from "./util.js";
import x from "dayjs";
import { useFieldManager as z, getFieldHandler as E, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { A as S } from "../../../chunks/AdapterDayjs.js";
const M = (n, e) => {
  if (n && n.isValid && n.isValid())
    return n.format(e);
}, d = (n, e) => n ? x(n, e) : x(void 0), Q = W(function(e, v) {
  const l = e.serverPattern || e.displayPattern || "YYYY-MM-DD", P = e.displayPattern || e.serverPattern || "YYYY-MM-DD", F = (t) => {
    if (t && typeof t == "string") {
      var r, a;
      const i = t.charAt(0);
      if (i == ">")
        r = d(t.slice(1), l);
      else if (i == "<")
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
  }, f = z(e.attribute, e, { format: Y, parse: F }), { getError: D, getValue: A, setValue: R, mutateOptions: j } = f, L = v || y(null), u = D(), m = y(null);
  H(L, () => ({
    ...E(f),
    focus() {
      m.current.focus();
    },
    setCurrent() {
    }
  }), [f]);
  var s = f.getFieldProps(), g, h;
  const c = A();
  if (c && (g = c.from, h = c.to), s.defaultValue) {
    const t = F(s.defaultValue);
    g = t.from, h = t.to;
  }
  s.fullwidth = !1;
  const b = (t, r, a) => {
    if (!e.readOnly) {
      const i = { ...c, [t]: r };
      R(i), e.onChange && e.onChange(i, a);
    }
  };
  return /* @__PURE__ */ o(k, { children: !j.visible && /* @__PURE__ */ o(
    I,
    {
      label: O(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ T(J, { dateAdapter: S, children: [
        /* @__PURE__ */ o(
          V,
          {
            format: P,
            label: e.label,
            slotProps: {
              textField: {
                error: u.status,
                helperText: u.message,
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
        /* @__PURE__ */ o("span", { style: { textAlign: "center", whiteSpace: "nowrap", padding: "1vw" }, children: "to" }),
        /* @__PURE__ */ o(
          V,
          {
            format: P,
            label: e.label,
            slotProps: {
              textField: {
                error: u.status,
                helperText: u.message,
                variant: e.variant || "standard",
                fullWidth: e.fullWidth,
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
  Q as MuiDateRangePicker
};
