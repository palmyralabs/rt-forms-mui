import { jsx as e, Fragment as o, jsxs as s } from "react/jsx-runtime";
import { KeyboardArrowDown as f } from "@mui/icons-material";
import { ClickAwayListener as m, Button as u } from "@mui/material";
import { forwardRef as p, useState as w, useRef as y, useImperativeHandle as h } from "react";
import '../../../assets/DropdownButton.css';const D = p(function(t, i) {
  const [r, n] = w(!1), l = i || y();
  h(l, () => ({
    open() {
      n(!0);
    },
    close() {
      n(!1);
    }
  }), []);
  const a = t.arrowStyle || {
    transform: r ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, d = t.PrefixAdornment || /* @__PURE__ */ e(o, {}), c = /* @__PURE__ */ e(f, { style: a });
  return /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(m, { onClickAway: () => {
    n(!1);
  }, children: /* @__PURE__ */ e("div", { className: "py-dropdown-button", children: /* @__PURE__ */ s("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ s(
      u,
      {
        className: t.className,
        disableRipple: !0,
        disabled: t.disabled,
        style: { display: "flex", alignItems: "center", gap: "5px" },
        fullWidth: !1,
        onClick: () => n(!r),
        children: [
          d,
          /* @__PURE__ */ e("span", { children: t.title }),
          c
        ]
      }
    ),
    r && /* @__PURE__ */ e("div", { className: "py-dropdown-content", style: { position: "absolute" }, children: t.children })
  ] }) }) }) });
});
export {
  D as DropdownButton
};
