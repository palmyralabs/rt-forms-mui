import { jsx as e, Fragment as p, jsxs as G } from "react/jsx-runtime";
import { forwardRef as I, useRef as m, useImperativeHandle as j } from "react";
import { FormControl as z, RadioGroup as L, FormHelperText as w, FormControlLabel as f, Radio as C } from "@mui/material";
import y from "./FieldDecorator.js";
import { useFieldManager as B, getFieldHandler as H } from "@palmyralabs/rt-forms";
import { getFieldLabel as k } from "./util.js";
import { b as g } from "../../../chunks/index3.js";
import { G as D } from "../../../chunks/iconBase.js";
function h(a) {
  return D({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }, child: [] }] })(a);
}
const J = I(function(t, c) {
  const o = B(t.attribute, t), { getError: b, getValue: v, setValue: F, mutateOptions: R } = o, x = c || m(null), s = b(), O = t.flexDirection != "column", n = m(null);
  j(x, () => ({
    ...H(o),
    focus() {
      n.current.focus();
    },
    setOptions(l) {
    },
    getOptions() {
    }
  }), [o]);
  var u = o.getFieldProps();
  u.onChange = (r) => {
    t.readOnly || F(r.target.value);
  };
  const M = (r) => {
    if (r) {
      if (r instanceof Array)
        return r.map((i, N) => /* @__PURE__ */ e(
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
      if (typeof r == "object")
        return Object.keys(r).map((l, d) => /* @__PURE__ */ e(
          f,
          {
            value: l,
            control: /* @__PURE__ */ e(
              C,
              {
                icon: /* @__PURE__ */ e(g, { size: 24 }),
                checkedIcon: /* @__PURE__ */ e(h, { size: 24 }),
                inputRef: n
              }
            ),
            label: r[l]
          },
          d
        ));
    }
    return /* @__PURE__ */ e("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ e(p, { children: !R.visible && /* @__PURE__ */ e(
    y,
    {
      label: k(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ G(z, { fullWidth: !0, error: s.status, children: [
        /* @__PURE__ */ e("div", { children: t.label }),
        /* @__PURE__ */ e(L, { icon: !0, row: O, ...u, value: v(), children: M(t.options) }),
        /* @__PURE__ */ e(w, { className: "form-error-text", children: s.message })
      ] })
    }
  ) });
});
export {
  J as MuiRadioGroup
};
