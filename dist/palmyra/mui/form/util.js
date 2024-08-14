import { jsx as r, Fragment as t, jsxs as i } from "react/jsx-runtime";
const a = (e) => {
  const l = e.labelMode == "title" ? e.label : "";
  return e.required && l ? /* @__PURE__ */ r(t, { children: /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: "3px" }, children: [
    l,
    /* @__PURE__ */ r("span", { style: { color: "red" }, children: "*" })
  ] }) }) : l;
};
export {
  a as getFieldLabel
};
