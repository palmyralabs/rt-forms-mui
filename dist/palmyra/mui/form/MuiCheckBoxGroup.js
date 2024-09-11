import { jsx as o, Fragment as p, jsxs as v } from "react/jsx-runtime";
import { forwardRef as k, useRef as d, useImperativeHandle as O } from "react";
import { FormControl as R, FormControlLabel as D, Checkbox as S, FormHelperText as y } from "@mui/material";
import { useFieldManager as L, getFieldHandler as M, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { getFieldLabel as j } from "./util.js";
import { a as H, b as T } from "../../../chunks/index3.js";
const E = k(function(t, c) {
  const r = L(t.attribute, t), { getError: f, getValue: m, setValue: h, mutateOptions: g } = r, C = c || d(null), b = t.autoFocus || !1, u = f(), i = d(null);
  O(C, () => ({
    ...M(r),
    focus() {
      i.current.checked = !0, i.current.focus();
    },
    setOptions(n) {
    },
    getOptions() {
    }
  }), [r]);
  var l = r.getFieldProps();
  function x(e, n) {
    const a = r.getValue() ? r.getValue().split(",") : [];
    var s = a.indexOf(e);
    n ? s < 0 && a.push(e) : s >= 0 && a.splice(s, 1);
  }
  l.onChange = (e, n) => {
    t.readOnly || (x(e.target.value, e.target.checked), h(e.target.value), t.onChange && t.onChange(e, n));
  };
  const F = (e) => m().includes(e);
  return /* @__PURE__ */ o(p, { children: !g.visible && /* @__PURE__ */ o(
    V,
    {
      label: j(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ v(R, { fullWidth: !0, style: { flexDirection: t.flexDirection }, error: u.status, ...l, children: [
        l.options ? Object.keys(l.options).map((e, n) => /* @__PURE__ */ o(
          D,
          {
            value: e,
            control: /* @__PURE__ */ o(
              S,
              {
                icon: /* @__PURE__ */ o(H, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ o(T, { style: { fontSize: "20px" } }),
                checked: F(e),
                autoFocus: b,
                disabled: t.readOnly,
                ...l,
                inputRef: (a) => {
                  n == 0 && (i.current = a);
                }
              }
            ),
            label: l.options[e]
          },
          n
        )) : /* @__PURE__ */ o("div", { children: "No options provided" }),
        /* @__PURE__ */ o(y, { className: "form-error-text", children: u.message })
      ] })
    }
  ) });
});
export {
  E as MuiCheckBoxGroup
};
