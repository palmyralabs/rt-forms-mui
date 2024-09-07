import { jsx as t, Fragment as G, jsxs as I } from "react/jsx-runtime";
import { forwardRef as j, useRef as m, useImperativeHandle as z } from "react";
import { FormControl as L, RadioGroup as w, FormHelperText as y, FormControlLabel as f, Radio as C } from "@mui/material";
import { useFieldManager as B, getFieldHandler as H, FieldDecorator as k } from "@palmyralabs/rt-forms";
import { getFieldLabel as D } from "./util.js";
import { b } from "../../../chunks/index2.js";
import { G as N } from "../../../chunks/iconBase.js";
function g(c) {
  return N({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }, child: [] }] })(c);
}
const J = j(function(e, s) {
  const r = B(e.attribute, e), { getError: h, getValue: F, setValue: v, mutateOptions: R } = r, x = s || m(null), d = h(), O = e.flexDirection != "column", a = m(null);
  z(x, () => ({
    ...H(r),
    focus() {
      a.current.focus();
    },
    setOptions(o) {
    },
    getOptions() {
    }
  }), [r]);
  var n = r.getFieldProps();
  n.onChange = (l, o) => {
    e.readOnly || (v(l.target.value), e.onChange && e.onChange(l, o));
  };
  const M = (l) => {
    if (l) {
      if (l instanceof Array)
        return l.map((i, V) => /* @__PURE__ */ t(
          f,
          {
            value: i.value,
            control: /* @__PURE__ */ t(
              C,
              {
                icon: /* @__PURE__ */ t(b, { size: 24 }),
                checkedIcon: /* @__PURE__ */ t(g, { size: 24 }),
                inputRef: a
              }
            ),
            label: i.label,
            disabled: e.disabled
          },
          i.value
        ));
      if (typeof l == "object")
        return Object.keys(l).map((o, u) => /* @__PURE__ */ t(
          f,
          {
            value: o,
            control: /* @__PURE__ */ t(
              C,
              {
                icon: /* @__PURE__ */ t(b, { size: 24 }),
                checkedIcon: /* @__PURE__ */ t(g, { size: 24 }),
                inputRef: a
              }
            ),
            label: l[o],
            disabled: e.disabled
          },
          u
        ));
    }
    return /* @__PURE__ */ t("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ t(G, { children: !R.visible && /* @__PURE__ */ t(
    k,
    {
      label: D(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ I(L, { fullWidth: !0, error: d.status, children: [
        /* @__PURE__ */ t("div", { children: e.label }),
        /* @__PURE__ */ t(w, { row: O, ...n, value: F(), children: M(n.options) }),
        /* @__PURE__ */ t(y, { className: "form-error-text", children: d.message })
      ] })
    }
  ) });
});
export {
  J as MuiRadioGroup
};
