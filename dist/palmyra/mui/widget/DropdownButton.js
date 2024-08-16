import { jsx as e, Fragment as r, jsxs as i } from "react/jsx-runtime";
import { KeyboardArrowDown as d } from "@mui/icons-material";
import { ClickAwayListener as c, Button as m } from "@mui/material";
import { useState as f } from "react";
const u = (t) => {
  const [n, o] = f(!1), l = t.arrowStyle || {
    transform: n ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, s = t.PrefixAdornment || /* @__PURE__ */ e(r, {}), a = /* @__PURE__ */ e(d, { style: l });
  return /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e(c, { onClickAway: () => {
    o(!1);
  }, children: /* @__PURE__ */ e("div", { className: "py-dropdown-button", children: /* @__PURE__ */ i("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ i(
      m,
      {
        className: t.className,
        disableRipple: !0,
        disabled: t.disabled,
        style: { display: "flex", alignItems: "center", gap: "5px" },
        fullWidth: !1,
        onClick: () => o(!n),
        children: [
          s,
          /* @__PURE__ */ e("span", { children: t.title }),
          a
        ]
      }
    ),
    n && /* @__PURE__ */ e("div", { className: "py-dropdown-content", style: { position: "absolute" }, children: t.children })
  ] }) }) }) });
};
export {
  u as DropdownButton
};
