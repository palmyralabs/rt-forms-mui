import { jsx as n, Fragment as H, jsxs as h } from "react/jsx-runtime";
import x from "dayjs";
import { forwardRef as C, useRef as o, useImperativeHandle as w } from "react";
import '../../../assets/TextView.css';/* empty css                       */
import { useFieldManager as D, getFieldHandler as L, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as V } from "./util.js";
const T = C(function(t, d) {
  const a = D(t.attribute, t), { getValue: c, mutateOptions: m } = a, u = d || o(null), i = c(), M = t.textAlign || "left", f = t.variant || "standard", v = t.displayPattern || "dd-MM-yyyy", b = o(null);
  w(u, () => ({
    ...L(a),
    focus() {
      b.current.focus();
    }
  }), [a]);
  const g = (e) => {
    const l = [
      "yyyy-MM-dd",
      "dd-MM-yyyy",
      "MM-dd-yyyy",
      "dd-yyyy-MM",
      "yyyy/MM/dd",
      "dd/MM/yyyy",
      "yyyy-MM-dd'T'HH:mm:ss",
      "dd-MM-yyyy HH:mm",
      "MM-dd-yyyy h:mm a",
      "yyyy/MM/dd HH:mm:ss",
      "dd/MM/yyyy HH:mm"
    ];
    if (e == null || e == null || e == "")
      return null;
    for (const F of l) {
      const y = x(e, F);
      if (y.isValid())
        return y;
    }
    return null;
  }, r = (e) => {
    if (!e)
      return "";
    if (e) {
      const l = g(e);
      return l != null ? l.format(v) : (console.error("Invalid date provided:", e), "");
    }
  };
  var s = a.getFieldProps();
  return /* @__PURE__ */ n(H, { children: !m.visible && /* @__PURE__ */ n(
    R,
    {
      label: V(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: t.label ? /* @__PURE__ */ h("div", { ...s, className: "text-view-field-container", children: [
        /* @__PURE__ */ n("div", { className: "text-view-label", children: t.label }),
        /* @__PURE__ */ n("div", { className: f == "standard" ? "text-view-value" : "text-view-value-outlined", children: r(i) })
      ] }) : /* @__PURE__ */ n("div", { ...s, style: { textAlign: M }, children: r(i) })
    }
  ) });
});
export {
  T as MuiDateView
};
