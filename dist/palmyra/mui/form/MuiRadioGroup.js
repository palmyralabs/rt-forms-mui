import { jsx as r, Fragment as G, jsxs as I } from "react/jsx-runtime";
import { forwardRef as j, useRef as m, useImperativeHandle as z } from "react";
import { FormControl as B, RadioGroup as L, FormHelperText as w, FormControlLabel as f, Radio as C } from "@mui/material";
import { useFieldManager as y, getFieldHandler as H, FieldDecorator as k } from "@palmyralabs/rt-forms";
import { getFieldLabel as D } from "./util.js";
import { b as h } from "../../../chunks/index2.js";
import { G as E } from "../../../chunks/iconBase.js";
function b(d) {
  return E({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }, child: [] }] })(d);
}
const K = j(function(e, u) {
  const o = y(e.attribute, e), { getError: g, getValue: F, setValue: R, mutateOptions: v, refreshError: x } = o, O = u || m(null), c = g(), M = e.flexDirection != "column", n = m(null);
  z(O, () => ({
    ...H(o),
    focus() {
      n.current.focus();
    },
    setOptions(l) {
    },
    getOptions() {
    }
  }), [o]);
  var i = o.getFieldProps();
  i.onChange = (t, l) => {
    e.readOnly || (R(t.target.value), e.onChange && e.onChange(t, l));
  }, i.onBlur = x;
  const q = (t) => {
    if (t) {
      if (t instanceof Array)
        return t.map((a, N) => /* @__PURE__ */ r(
          f,
          {
            value: a.value,
            control: /* @__PURE__ */ r(
              C,
              {
                required: e.required,
                icon: /* @__PURE__ */ r(h, { size: 24 }),
                checkedIcon: /* @__PURE__ */ r(b, { size: 24 }),
                inputRef: n
              }
            ),
            label: a.label,
            disabled: e.disabled
          },
          a.value
        ));
      if (typeof t == "object")
        return Object.keys(t).map((l, s) => /* @__PURE__ */ r(
          f,
          {
            value: l,
            control: /* @__PURE__ */ r(
              C,
              {
                required: e.required,
                icon: /* @__PURE__ */ r(h, { size: 24 }),
                checkedIcon: /* @__PURE__ */ r(b, { size: 24 }),
                inputRef: n
              }
            ),
            label: t[l],
            disabled: e.disabled
          },
          s
        ));
    }
    return /* @__PURE__ */ r("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ r(G, { children: !v.visible && /* @__PURE__ */ r(
    k,
    {
      label: D(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ I(B, { fullWidth: !0, error: c.status, required: e.required, children: [
        /* @__PURE__ */ r("div", { children: e.label }),
        /* @__PURE__ */ r(L, { row: M, ...i, value: F(), children: q(i.options) }),
        /* @__PURE__ */ r(w, { className: "form-error-text", children: c.message })
      ] })
    }
  ) });
});
export {
  K as MuiRadioGroup
};
