import { jsx as e, Fragment as G, jsxs as I } from "react/jsx-runtime";
import { forwardRef as j, useRef as m, useImperativeHandle as z } from "react";
import { FormControl as L, RadioGroup as w, FormHelperText as y, FormControlLabel as f, Radio as C } from "@mui/material";
import { useFieldManager as B, getFieldHandler as H, FieldDecorator as k } from "@palmyralabs/rt-forms";
import { getFieldLabel as p } from "./util.js";
import { b as g } from "../../../chunks/index2.js";
import { G as D } from "../../../chunks/iconBase.js";
function h(c) {
  return D({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }, child: [] }] })(c);
}
const q = j(function(t, s) {
  const l = B(t.attribute, t), { getError: b, getValue: F, setValue: v, mutateOptions: R } = l, x = s || m(null), u = b(), O = t.flexDirection != "column", n = m(null);
  z(x, () => ({
    ...H(l),
    focus() {
      n.current.focus();
    },
    setOptions(r) {
    },
    getOptions() {
    }
  }), [l]);
  var a = l.getFieldProps();
  a.onChange = (o, r) => {
    t.readOnly || (v(o.target.value), t.onChange && t.onChange(o, r));
  };
  const M = (o) => {
    if (o) {
      if (o instanceof Array)
        return o.map((i, N) => /* @__PURE__ */ e(
          f,
          {
            value: i.value,
            control: /* @__PURE__ */ e(
              C,
              {
                icon: /* @__PURE__ */ e(g, { size: 24 }),
                checkedIcon: /* @__PURE__ */ e(h, { size: 24 }),
                inputRef: n
              }
            ),
            label: i.label
          },
          i.value
        ));
      if (typeof o == "object")
        return Object.keys(o).map((r, d) => /* @__PURE__ */ e(
          f,
          {
            value: r,
            control: /* @__PURE__ */ e(
              C,
              {
                icon: /* @__PURE__ */ e(g, { size: 24 }),
                checkedIcon: /* @__PURE__ */ e(h, { size: 24 }),
                inputRef: n
              }
            ),
            label: o[r]
          },
          d
        ));
    }
    return /* @__PURE__ */ e("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ e(G, { children: !R.visible && /* @__PURE__ */ e(
    k,
    {
      label: p(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ I(L, { fullWidth: !0, error: u.status, children: [
        /* @__PURE__ */ e("div", { children: t.label }),
        /* @__PURE__ */ e(w, { row: O, ...a, value: F(), children: M(a.options) }),
        /* @__PURE__ */ e(y, { className: "form-error-text", children: u.message })
      ] })
    }
  ) });
});
export {
  q as MuiRadioGroup
};
