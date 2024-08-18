import { jsxs as l, Fragment as h, jsx as n } from "react/jsx-runtime";
import { TextField as u, InputAdornment as m } from "@mui/material";
import { useState as p } from "react";
import { a as d } from "../../../../chunks/index.js";
const T = (r) => {
  const { width: c, queryRef: e } = r, [s, a] = p(""), i = r.visible != !1;
  return /* @__PURE__ */ l(h, { children: [
    " ",
    i && /* @__PURE__ */ n(
      u,
      {
        sx: { width: c },
        type: "text",
        value: s,
        onChange: (o) => {
          const t = o.target.value;
          a(t), e != null && e.current && (t && t.length > 0 ? e.current.setQuickSearch(t) : e.current.setQuickSearch(null));
        },
        style: { border: "0px" },
        size: "small",
        placeholder: "Quick Search",
        InputProps: {
          endAdornment: /* @__PURE__ */ n(m, { position: "end", children: /* @__PURE__ */ n(d, { className: "card-filter-icon" }) })
        },
        ...r
      }
    )
  ] });
};
export {
  T as QuickSearch
};
