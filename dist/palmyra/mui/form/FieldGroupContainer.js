import { jsx as e, Fragment as o } from "react/jsx-runtime";
const c = (n) => {
  const r = n.columns ? "py-field-group-container py-field-group-container-" + n.columns + "columns" : "py-field-group-container";
  return /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e("div", { className: r, children: n.children }) });
};
export {
  c as default
};
