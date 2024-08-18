import { jsx as r, Fragment as F, jsxs as p } from "react/jsx-runtime";
import { forwardRef as v, useRef as m, useImperativeHandle as O } from "react";
import { FormControl as R, FormControlLabel as k, Checkbox as D, FormHelperText as S } from "@mui/material";
import L from "./FieldDecorator.js";
import { useFieldManager as M, getFieldHandler as T } from "@palmyralabs/rt-forms";
import { getFieldLabel as V } from "./util.js";
import { T as j, a as y } from "../../../chunks/index3.js";
const w = v(function(t, c) {
  const o = M(t.attribute, t), { getError: f, getValue: u, setValue: h, mutateOptions: g } = o, C = c || m(null), d = f(), i = m(null);
  O(C, () => ({
    ...T(o),
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
  function x(e, l) {
    const n = o.getValue() ? o.getValue().split(",") : [];
    var s = n.indexOf(e);
    l ? s < 0 && n.push(e) : s >= 0 && n.splice(s, 1);
  }
  a.onChange = (e) => {
    t.readOnly || (x(e.target.value, e.target.checked), h(e.target.value));
  };
  const b = (e) => u().includes(e);
  return /* @__PURE__ */ r(F, { children: !g.visible && /* @__PURE__ */ r(
    L,
    {
      label: V(t),
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
                    icon: /* @__PURE__ */ r(j, { style: { fontSize: "20px" } }),
                    checkedIcon: /* @__PURE__ */ r(y, { style: { fontSize: "20px" } }),
                    checked: b(e),
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
