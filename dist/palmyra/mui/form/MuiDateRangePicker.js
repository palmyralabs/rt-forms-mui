import { jsx as i, Fragment as T, jsxs as W } from "react/jsx-runtime";
import { forwardRef as E, useRef as y, useImperativeHandle as H } from "react";
import { LocalizationProvider as J, DatePicker as V } from "@mui/x-date-pickers";
import { getFieldLabel as O } from "./util.js";
import x from "dayjs";
import { useFieldManager as z, getFieldHandler as B, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { A as S } from "../../../chunks/AdapterDayjs.js";
const M = (n, e) => {
  if (n && n.isValid && n.isValid())
    return n.format(e);
}, d = (n, e) => n ? x(n, e) : x(void 0), U = E(function(e, v) {
  const s = e.serverPattern || e.displayPattern || "YYYY-MM-DD", P = e.displayPattern || e.serverPattern || "YYYY-MM-DD", F = (t) => {
    if (t && typeof t == "string") {
      var r, a;
      const o = t.charAt(0);
      if (o == ">")
        r = d(t.slice(1), s);
      else if (o == "<")
        a = d(t.slice(1), s);
      else {
        const C = t.split("...");
        r = d(C[0], s), C[1] && (a = d(C[1], s));
      }
    }
    return { from: r, to: a };
  }, Y = (t) => {
    if (t) {
      const r = M(t.from, s), a = M(t.to, s);
      if (r)
        return a ? r + "..." + a : ">" + r;
      if (a)
        return "<" + a;
    }
  }, f = z(e.attribute, e, { format: Y, parse: F }), { getError: D, getValue: A, setValue: R, mutateOptions: j, refreshError: L } = f, k = v || y(null), u = D(), m = y(null);
  H(k, () => ({
    ...B(f),
    focus() {
      m.current.focus();
    },
    setCurrent() {
    }
  }), [f]);
  var l = f.getFieldProps(), h, g;
  const c = A();
  if (c && (h = c.from, g = c.to), l.defaultValue) {
    const t = F(l.defaultValue);
    h = t.from, g = t.to;
  }
  l.fullwidth = !1;
  const b = (t, r, a) => {
    if (!e.readOnly) {
      const o = { ...c, [t]: r };
      R(o), e.onChange && e.onChange(o, a);
    }
  };
  return l.onBlur = L, /* @__PURE__ */ i(T, { children: !j.visible && /* @__PURE__ */ i(
    I,
    {
      label: O(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ W(J, { dateAdapter: S, children: [
        /* @__PURE__ */ i(
          V,
          {
            format: P,
            label: e.label,
            slotProps: {
              textField: {
                error: u.status,
                helperText: u.message,
                variant: l.variant || "standard",
                fullWidth: !0,
                inputRef: m
              }
            },
            ...l,
            onChange: (t, r) => b("from", t, r),
            defaultValue: h
          }
        ),
        /* @__PURE__ */ i("span", { style: { textAlign: "center", whiteSpace: "nowrap", padding: "1vw" }, children: "to" }),
        /* @__PURE__ */ i(
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
            ...l,
            onChange: (t, r) => b("to", t, r),
            defaultValue: g
          }
        )
      ] })
    }
  ) });
});
export {
  U as MuiDateRangePicker
};
