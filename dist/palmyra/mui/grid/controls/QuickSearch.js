import { jsxs as h, Fragment as u, jsx as r } from "react/jsx-runtime";
import { TextField as d, InputAdornment as m } from "@mui/material";
import { useState as p } from "react";
import { a as x } from "../../../../chunks/index.js";
const k = (n) => {
  const { width: c, queryRef: t, ...a } = n, [s, i] = p(""), o = a.visible != !1;
  return /* @__PURE__ */ h(u, { children: [
    " ",
    o && /* @__PURE__ */ r(
      d,
      {
        sx: { width: c },
        type: "text",
        value: s,
        onChange: (l) => {
          const e = l.target.value;
          i(e), t?.current && (e && e.length > 0 ? t.current.setQuickSearch(e) : t.current.setQuickSearch(null));
        },
        className: "py-dataGrid-search-field",
        size: "small",
        placeholder: "Quick Search",
        InputProps: {
          endAdornment: /* @__PURE__ */ r(m, { position: "end", children: /* @__PURE__ */ r(x, { className: "py-dataGrid-search-icon" }) })
        },
        ...a
      }
    )
  ] });
};
export {
  k as QuickSearch
};
