import { jsx as r, jsxs as n, Fragment as a } from "react/jsx-runtime";
import { styled as i, Tooltip as c, tooltipClasses as s } from "@mui/material";
import { B as p } from "../../../chunks/index.js";
const d = i(({ className: o, ...e }) => /* @__PURE__ */ r(c, { ...e, classes: { popper: o } }))(({ theme: o }) => ({
  [`& .${s.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 500,
    fontSize: o.typography.pxToRem(16),
    border: "1px solid #dadde9"
  },
  [`& .${s.arrow}`]: {
    color: "#f5f5f9",
    "&::before": {
      backgroundColor: "#f5f5f9",
      border: "1px solid #dadde9"
    }
  }
})), l = function() {
  return /* @__PURE__ */ r(p, { className: "header-info-icon" });
}, u = (o) => {
  if (o) {
    if (typeof o == "function")
      return o();
    if (typeof o == "object" && o.toolTip) {
      const t = o;
      return /* @__PURE__ */ n("div", { className: "info-header", children: [
        /* @__PURE__ */ r("span", { className: "header-content-text", children: t.title }),
        /* @__PURE__ */ r(d, { placement: "right", title: t.toolTip, arrow: !0, children: /* @__PURE__ */ r("span", { style: { paddingBottom: "2px" }, children: /* @__PURE__ */ r(l, {}) }) })
      ] });
    }
    const e = typeof o == "string" ? o : o.title;
    return /* @__PURE__ */ r("span", { className: "header-content-text", children: e });
  } else
    return /* @__PURE__ */ r(a, {});
};
export {
  l as InfoCircle,
  d as InfoTooltip,
  u as renderTitle
};
