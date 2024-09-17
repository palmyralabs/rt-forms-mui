import { jsx as t, Fragment as I, jsxs as j } from "react/jsx-runtime";
import { forwardRef as z, useRef as m, useImperativeHandle as B } from "react";
import { FormControl as L, RadioGroup as w, FormHelperText as y, FormControlLabel as f, Radio as C } from "@mui/material";
import { useFieldManager as H, getFieldHandler as k, FieldDecorator as D } from "@palmyralabs/rt-forms";
import { getFieldLabel as E } from "./util.js";
import { b as h } from "../../../chunks/index2.js";
import { G as N } from "../../../chunks/iconBase.js";
function b(s) {
  return N({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }, child: [] }] })(s);
}
const K = z(function(e, c) {
  const l = H(e.attribute, e), { getError: g, getValue: F, setValue: v, mutateOptions: R, refreshError: x } = l, O = c || m(null), d = g(), M = e.flexDirection != "column", a = m(null);
  B(O, () => ({
    ...k(l),
    focus() {
      a.current.focus();
    },
    setOptions(o) {
    },
    getOptions() {
    }
  }), [l]);
  var n = l.getFieldProps();
  n.onChange = (r, o) => {
    e.readOnly || (v(r.target.value), e.onChange && e.onChange(r, o));
  }, n.onBlur = x;
  const G = (r) => {
    if (r) {
      if (r instanceof Array)
        return r.map((i, V) => /* @__PURE__ */ t(
          f,
          {
            value: i.value,
            control: /* @__PURE__ */ t(
              C,
              {
                icon: /* @__PURE__ */ t(h, { size: 24 }),
                checkedIcon: /* @__PURE__ */ t(b, { size: 24 }),
                inputRef: a
              }
            ),
            label: i.label,
            disabled: e.disabled
          },
          i.value
        ));
      if (typeof r == "object")
        return Object.keys(r).map((o, u) => /* @__PURE__ */ t(
          f,
          {
            value: o,
            control: /* @__PURE__ */ t(
              C,
              {
                icon: /* @__PURE__ */ t(h, { size: 24 }),
                checkedIcon: /* @__PURE__ */ t(b, { size: 24 }),
                inputRef: a
              }
            ),
            label: r[o],
            disabled: e.disabled
          },
          u
        ));
    }
    return /* @__PURE__ */ t("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ t(I, { children: !R.visible && /* @__PURE__ */ t(
    D,
    {
      label: E(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ j(L, { fullWidth: !0, error: d.status, children: [
        /* @__PURE__ */ t("div", { children: e.label }),
        /* @__PURE__ */ t(w, { row: M, ...n, value: F(), children: G(n.options) }),
        /* @__PURE__ */ t(y, { className: "form-error-text", children: d.message })
      ] })
    }
  ) });
});
export {
  K as MuiRadioGroup
};
