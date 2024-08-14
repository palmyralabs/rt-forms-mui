import { jsx as r, Fragment as F, jsxs as p } from "react/jsx-runtime";
import { forwardRef as v, useRef as f, useImperativeHandle as O } from "react";
import { FormControl as R, FormControlLabel as k, Checkbox as D, FormHelperText as S } from "@mui/material";
import L from "./FieldDecorator.js";
import { useFieldManager as M, getFieldHandler as V } from "@palmyralabs/rt-forms";
import { generateOptions as j, getFieldLabel as y } from "./util.js";
import { b as H, c as T } from "../../../chunks/index3.js";
const P = v(function(e, c) {
  const o = M(e.attribute, e), { getError: h, getValue: u, setValue: g, mutateOptions: d } = o, C = c || f(null), m = h(), i = f(null);
  O(C, () => ({
    ...V(o),
    focus() {
      i.current.checked = !0, i.current.focus();
    },
    setOptions(l) {
    },
    getOptions() {
    }
  }), [o]);
  var a = j(e, d, u());
  delete a.muiProps;
  function b(t, l) {
    const n = o.getValue() ? o.getValue().split(",") : [];
    var s = n.indexOf(t);
    l ? s < 0 && n.push(t) : s >= 0 && n.splice(s, 1);
  }
  a.onChange = (t) => {
    e.readOnly || (b(t.target.value, t.target.checked), g(t.target.value));
  };
  const x = (t) => u().includes(t);
  return /* @__PURE__ */ r(F, { children: !d.visible && /* @__PURE__ */ r(
    L,
    {
      label: y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ p(R, { fullWidth: !0, error: m.status, ...a, style: { flexDirection: e.flexDirection }, children: [
        e.options ? Object.keys(e.options).map((t, l) => /* @__PURE__ */ r(
          k,
          {
            value: t,
            control: /* @__PURE__ */ r(
              D,
              {
                icon: /* @__PURE__ */ r(H, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ r(T, { style: { fontSize: "20px" } }),
                checked: x(t),
                disabled: e.readOnly,
                inputRef: (n) => {
                  l == 0 && (i.current = n);
                }
              }
            ),
            label: e.options[t]
          },
          t
        )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
        /* @__PURE__ */ r(S, { className: "form-error-text", children: m.message })
      ] })
    }
  ) });
});
export {
  P as MuiCheckBoxGroup
};
