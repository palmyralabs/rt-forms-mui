import { jsxs as h, Fragment as d, jsx as r } from "react/jsx-runtime";
import { TextField as m, InputAdornment as u } from "@mui/material";
import { useState as p } from "react";
import { a as x } from "../../../../chunks/index.js";
const k = (n) => {
  const { width: c, queryRef: e, ...a } = n, [s, i] = p(""), o = a.visible != !1;
  return /* @__PURE__ */ h(d, { children: [
    " ",
    o && /* @__PURE__ */ r(
      m,
      {
        sx: { width: c },
        type: "text",
        value: s,
        onChange: (l) => {
          const t = l.target.value;
          i(t), e != null && e.current && (t && t.length > 0 ? e.current.setQuickSearch(t) : e.current.setQuickSearch(null));
        },
        className: "py-dataGrid-search-field",
        size: "small",
        placeholder: "Quick Search",
        InputProps: {
          endAdornment: /* @__PURE__ */ r(u, { position: "end", children: /* @__PURE__ */ r(x, { className: "py-dataGrid-search-icon" }) })
        },
        ...a
      }
    )
  ] });
};
export {
  k as QuickSearch
};
