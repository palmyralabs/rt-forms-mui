import { jsx as e, Fragment as G, jsxs as I } from "react/jsx-runtime";
import { forwardRef as j, useRef as f, useImperativeHandle as z } from "react";
import { FormControl as L, RadioGroup as p, FormHelperText as w, FormControlLabel as C, Radio as g } from "@mui/material";
import y from "./FieldDecorator.js";
import { useFieldManager as B, getFieldHandler as H } from "@palmyralabs/rt-forms";
import { generateOptions as k, getFieldLabel as D } from "./util.js";
import { b as h } from "../../../chunks/index3.js";
import { G as N } from "../../../chunks/iconBase.js";
function b(c) {
  return N({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }, child: [] }] })(c);
}
const K = j(function(t, s) {
  const l = B(t.attribute, t), { getError: v, getValue: F, setValue: R, mutateOptions: u } = l, x = s || f(null), d = v(), O = t.flexDirection != "column", n = f(null);
  z(x, () => ({
    ...H(l),
    focus() {
      n.current.focus();
    },
    setOptions(o) {
    },
    getOptions() {
    }
  }), [l]);
  var i = k(t, u, F());
  delete i.muiProps, i.onChange = (r) => {
    t.readOnly || R(r.target.value);
  };
  const M = (r) => {
    if (r) {
      if (r instanceof Array)
        return r.map((a, P) => /* @__PURE__ */ e(
          C,
          {
            value: a.value,
            control: /* @__PURE__ */ e(
              g,
              {
                icon: /* @__PURE__ */ e(h, { size: 24 }),
                checkedIcon: /* @__PURE__ */ e(b, { size: 24 }),
                inputRef: n
              }
            ),
            label: a.label
          },
          a.value
        ));
      if (typeof r == "object")
        return Object.keys(r).map((o, m) => /* @__PURE__ */ e(
          C,
          {
            value: o,
            control: /* @__PURE__ */ e(
              g,
              {
                icon: /* @__PURE__ */ e(h, { size: 24 }),
                checkedIcon: /* @__PURE__ */ e(b, { size: 24 }),
                inputRef: n
              }
            ),
            label: r[o]
          },
          m
        ));
    }
    return /* @__PURE__ */ e("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ e(G, { children: !u.visible && /* @__PURE__ */ e(
    y,
    {
      label: D(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ I(L, { fullWidth: !0, error: d.status, children: [
        /* @__PURE__ */ e("div", { children: t.label }),
        /* @__PURE__ */ e(p, { icon: !0, row: O, ...t.muiProps, ...i, children: M(t.options) }),
        /* @__PURE__ */ e(w, { className: "form-error-text", children: d.message })
      ] })
    }
  ) });
});
export {
  K as MuiRadioGroup
};
