import { jsx as e, Fragment as t, jsxs as d } from "react/jsx-runtime";
import { KeyboardArrowDown as f } from "@mui/icons-material";
import { ClickAwayListener as m, Button as p } from "@mui/material";
import { forwardRef as u, useState as w, useRef as h, useImperativeHandle as b } from "react";
import '../../../assets/DropdownButton.css';const R = u(function(n, i) {
  const [r, o] = w(!1), s = i || h(), a = n.className || "py-dropdown-button";
  b(s, () => ({
    open() {
      o(!0);
    },
    close() {
      o(!1);
    }
  }), []);
  const l = n.PrefixAdornment || /* @__PURE__ */ e(t, {}), c = /* @__PURE__ */ e(
    f,
    {
      className: `py-dropdown-button-arrow ${r ? "open" : ""} `
    }
  );
  return /* @__PURE__ */ e(t, { children: /* @__PURE__ */ e(m, { onClickAway: () => {
    o(!1);
  }, children: /* @__PURE__ */ d("div", { className: "py-dropdown-button-container", children: [
    /* @__PURE__ */ d(
      p,
      {
        className: a,
        disableRipple: !0,
        disabled: n.disabled,
        fullWidth: !1,
        onClick: () => o(!r),
        children: [
          l,
          /* @__PURE__ */ e("span", { children: n.title }),
          c
        ]
      }
    ),
    r && /* @__PURE__ */ e("div", { className: "py-dropdown-content", children: n.children })
  ] }) }) });
});
export {
  R as DropdownButton
};
