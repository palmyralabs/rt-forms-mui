import { jsx as t, Fragment as a, jsxs as i } from "react/jsx-runtime";
const d = (e, l, n) => {
  var r = { ...e, ...l };
  return r.value = n, r;
}, c = (e) => {
  const l = e.labelMode == "title" ? e.label : "";
  return e.required && l ? /* @__PURE__ */ t(a, { children: /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: "3px" }, children: [
    l,
    /* @__PURE__ */ t("span", { style: { color: "red" }, children: "*" })
  ] }) }) : l;
};
export {
  d as generateOptions,
  c as getFieldLabel
};
