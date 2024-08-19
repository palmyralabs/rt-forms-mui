import { jsx as o, Fragment as F, jsxs as v } from "react/jsx-runtime";
import { forwardRef as O, useRef as m, useImperativeHandle as R } from "react";
import { FormControl as k, FormControlLabel as p, Checkbox as D, FormHelperText as S } from "@mui/material";
import L from "./FieldDecorator.js";
import { useFieldManager as M, getFieldHandler as T } from "@palmyralabs/rt-forms";
import { getFieldLabel as V } from "./util.js";
import { T as j, a as y } from "../../../chunks/index3.js";
const w = O(function(e, c) {
  const n = M(e.attribute, e), { getError: f, getValue: u, setValue: h, mutateOptions: g } = n, C = c || m(null), d = f(), i = m(null);
  R(C, () => ({
    ...T(n),
    focus() {
      i.current.checked = !0, i.current.focus();
    },
    setOptions(r) {
    },
    getOptions() {
    }
  }), [n]);
  var a = n.getFieldProps();
  delete a.muiProps;
  function x(t, r) {
    const l = n.getValue() ? n.getValue().split(",") : [];
    var s = l.indexOf(t);
    r ? s < 0 && l.push(t) : s >= 0 && l.splice(s, 1);
  }
  a.onChange = (t, r) => {
    e.readOnly || (x(t.target.value, t.target.checked), h(t.target.value), e.onChange && e.onChange(t, r));
  };
  const b = (t) => u().includes(t);
  return /* @__PURE__ */ o(F, { children: !g.visible && /* @__PURE__ */ o(
    L,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ v(
        k,
        {
          fullWidth: !0,
          style: { flexDirection: e.flexDirection },
          error: d.status,
          ...a,
          value: u(),
          children: [
            e.options ? Object.keys(e.options).map((t, r) => /* @__PURE__ */ o(
              p,
              {
                value: t,
                control: /* @__PURE__ */ o(
                  D,
                  {
                    icon: /* @__PURE__ */ o(j, { style: { fontSize: "20px" } }),
                    checkedIcon: /* @__PURE__ */ o(y, { style: { fontSize: "20px" } }),
                    checked: b(t),
                    disabled: e.readOnly,
                    inputRef: (l) => {
                      r == 0 && (i.current = l);
                    }
                  }
                ),
                label: e.options[t]
              },
              t
            )) : /* @__PURE__ */ o("div", { children: "No options provided" }),
            /* @__PURE__ */ o(S, { className: "form-error-text", children: d.message })
          ]
        }
      )
    }
  ) });
});
export {
  w as MuiCheckBoxGroup
};
