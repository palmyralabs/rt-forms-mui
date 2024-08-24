import { jsx as e, Fragment as l, jsxs as i } from "react/jsx-runtime";
import { Accordion as s, AccordionSummary as m, AccordionDetails as h } from "@mui/material";
import { ExpandMore as u } from "@mui/icons-material";
import { useState as x } from "react";
import { renderTitle as r } from "../widget/InfoTooltip.js";
import '../../../assets/SectionContainer.css';const y = (n) => {
  const c = n.title, a = n.customButton, t = n.hideTitle || !1, [o, d] = x(!0);
  return /* @__PURE__ */ e(l, { children: /* @__PURE__ */ e("div", { className: "section-container", children: c ? /* @__PURE__ */ i(s, { expanded: o, onChange: () => {
    d(!o);
  }, children: [
    /* @__PURE__ */ e(m, { className: "palmyra-form-section-header-container", expandIcon: /* @__PURE__ */ e(u, {}), children: /* @__PURE__ */ i("div", { className: "section-header", children: [
      c && !t ? /* @__PURE__ */ e("div", { className: "section-header-text", children: r(c) }) : null,
      /* @__PURE__ */ e("div", { className: "accordian-custom-btn-container", children: a })
    ] }) }),
    /* @__PURE__ */ e(h, { className: "section-container-child", children: n.children })
  ] }) : /* @__PURE__ */ i("div", { children: [
    c && !t ? /* @__PURE__ */ i("div", { className: "palmyra-form-section-header", children: [
      " ",
      r(c)
    ] }) : "",
    /* @__PURE__ */ e("div", { className: "section-container-child", children: n.children })
  ] }) }) });
};
export {
  y as SectionContainer
};
