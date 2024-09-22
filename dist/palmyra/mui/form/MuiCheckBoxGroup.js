import { jsx as o, Fragment as v, jsxs as k } from "react/jsx-runtime";
import { forwardRef as O, useRef as d, useImperativeHandle as R } from "react";
import { FormControl as D, FormControlLabel as S, Checkbox as y, FormHelperText as L } from "@mui/material";
import { useFieldManager as M, getFieldHandler as V, FieldDecorator as j } from "@palmyralabs/rt-forms";
import { getFieldLabel as B } from "./util.js";
import { a as H, b as T } from "../../../chunks/index3.js";
const P = O(function(t, c) {
  const l = M(t.attribute, t), { getError: f, getValue: m, setValue: h, mutateOptions: g, refreshError: C } = l, b = c || d(null), x = t.autoFocus || !1, u = f(), i = d(null);
  R(b, () => ({
    ...V(l),
    focus() {
      i.current.checked = !0, i.current.focus();
    },
    setOptions(n) {
    },
    getOptions() {
    }
  }), [l]);
  var r = l.getFieldProps();
  function F(e, n) {
    const a = l.getValue() ? l.getValue().split(",") : [];
    var s = a.indexOf(e);
    n ? s < 0 && a.push(e) : s >= 0 && a.splice(s, 1);
  }
  r.onChange = (e, n) => {
    t.readOnly || (F(e.target.value, e.target.checked), h(e.target.value), t.onChange && t.onChange(e, n));
  }, r.onBlur = C;
  const p = (e) => m().includes(e);
  return /* @__PURE__ */ o(v, { children: !g.visible && /* @__PURE__ */ o(
    j,
    {
      label: B(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ k(D, { fullWidth: !0, style: { flexDirection: t.flexDirection }, error: u.status, ...r, children: [
        r.options ? Object.keys(r.options).map((e, n) => /* @__PURE__ */ o(
          S,
          {
            value: e,
            control: /* @__PURE__ */ o(
              y,
              {
                icon: /* @__PURE__ */ o(H, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ o(T, { style: { fontSize: "20px" } }),
                checked: p(e),
                autoFocus: x,
                disabled: t.readOnly,
                ...r,
                inputRef: (a) => {
                  n == 0 && (i.current = a);
                }
              }
            ),
            label: r.options[e]
          },
          n
        )) : /* @__PURE__ */ o("div", { children: "No options provided" }),
        /* @__PURE__ */ o(L, { className: "form-error-text", children: u.message })
      ] })
    }
  ) });
});
export {
  P as MuiCheckBoxGroup
};
