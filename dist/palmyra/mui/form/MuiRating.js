import { jsx as t, Fragment as M } from "react/jsx-runtime";
import { forwardRef as L, useRef as C, useImperativeHandle as z } from "react";
import { Rating as E } from "@mui/material";
import H from "./FieldDecorator.js";
import { useFieldManager as S, getFieldHandler as V } from "@palmyralabs/rt-forms";
import { generateOptions as j, getFieldLabel as k } from "./util.js";
import { Star as w, StarOutline as D } from "@mui/icons-material";
const U = L(function(e, l) {
  var m, o, r, d, s, f;
  const n = S(e.attribute, e), { getError: F, getValue: b, setValue: O, mutateOptions: c } = n, P = l || C(null), u = F(), a = C(null), h = e.variant || "standard", R = ((m = e == null ? void 0 : e.muiProps) == null ? void 0 : m.autoFocus) || !1, v = ((o = e == null ? void 0 : e.muiProps) == null ? void 0 : o.precision) || 1, y = ((r = e == null ? void 0 : e.muiProps) == null ? void 0 : r.max) || 5, x = ((d = e == null ? void 0 : e.muiProps) == null ? void 0 : d.icon) || w, I = ((s = e == null ? void 0 : e.muiProps) == null ? void 0 : s.emptyIcon) || D;
  z(P, () => ({
    ...V(n),
    focus() {
      a.current.checked = !0, a.current.focus();
    },
    getOptions() {
    },
    setOptions(q) {
    }
  }), [n]);
  var i = j(e, c, b());
  return delete i.muiProps, i.onChange = (g) => {
    e.readOnly || O(g.target.value);
  }, /* @__PURE__ */ t(M, { children: !c.visible && /* @__PURE__ */ t(
    H,
    {
      label: k(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ t(
        E,
        {
          ...i,
          variant: h,
          precision: v,
          readOnly: e.readOnly,
          disabled: e.disabled,
          inputRef: a,
          size: (f = e == null ? void 0 : e.fieldProps) == null ? void 0 : f.size,
          icon: /* @__PURE__ */ t(x, {}),
          emptyIcon: /* @__PURE__ */ t(I, {}),
          max: y,
          ...e.muiProps,
          error: u.status,
          helperText: u.message,
          autoFocus: R
        }
      )
    }
  ) });
});
export {
  U as MuiRating
};
