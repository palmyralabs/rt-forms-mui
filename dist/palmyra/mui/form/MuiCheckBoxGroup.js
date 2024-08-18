import { jsx as r, Fragment as F, jsxs as p } from "react/jsx-runtime";
import { forwardRef as v, useRef as m, useImperativeHandle as O } from "react";
import { FormControl as R, FormControlLabel as k, Checkbox as D, FormHelperText as S } from "@mui/material";
import L from "./FieldDecorator.js";
import { useFieldManager as M, getFieldHandler as V } from "@palmyralabs/rt-forms";
import { getFieldLabel as j } from "./util.js";
import { b as y, c as H } from "../../../chunks/index3.js";
const w = v(function(t, c) {
  const o = M(t.attribute, t), { getError: f, getValue: u, setValue: h, mutateOptions: g } = o, C = c || m(null), d = f(), i = m(null);
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
  var a = o.getFieldProps();
  delete a.muiProps;
  function b(e, l) {
    const n = o.getValue() ? o.getValue().split(",") : [];
    var s = n.indexOf(e);
    l ? s < 0 && n.push(e) : s >= 0 && n.splice(s, 1);
  }
  a.onChange = (e) => {
    t.readOnly || (b(e.target.value, e.target.checked), h(e.target.value));
  };
  const x = (e) => u().includes(e);
  return /* @__PURE__ */ r(F, { children: !g.visible && /* @__PURE__ */ r(
    L,
    {
      label: j(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ p(
        R,
        {
          fullWidth: !0,
          style: { flexDirection: t.flexDirection },
          error: d.status,
          ...a,
          value: u(),
          children: [
            t.options ? Object.keys(t.options).map((e, l) => /* @__PURE__ */ r(
              k,
              {
                value: e,
                control: /* @__PURE__ */ r(
                  D,
                  {
                    icon: /* @__PURE__ */ r(y, { style: { fontSize: "20px" } }),
                    checkedIcon: /* @__PURE__ */ r(H, { style: { fontSize: "20px" } }),
                    checked: x(e),
                    disabled: t.readOnly,
                    inputRef: (n) => {
                      l == 0 && (i.current = n);
                    }
                  }
                ),
                label: t.options[e]
              },
              e
            )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
            /* @__PURE__ */ r(S, { className: "form-error-text", children: d.message })
          ]
        }
      )
    }
  ) });
});
export {
  w as MuiCheckBoxGroup
};
