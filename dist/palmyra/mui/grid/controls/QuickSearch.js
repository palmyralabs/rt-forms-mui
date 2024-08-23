import { jsxs as h, Fragment as u, jsx as r } from "react/jsx-runtime";
import { TextField as m, InputAdornment as p } from "@mui/material";
import { useState as d } from "react";
import { a as x } from "../../../../chunks/index.js";
const k = (c) => {
  const { width: o, queryRef: e, ...n } = c, [s, a] = d(""), i = n.visible != !1;
  return /* @__PURE__ */ h(u, { children: [
    " ",
    i && /* @__PURE__ */ r(
      m,
      {
        sx: { width: o },
        type: "text",
        value: s,
        onChange: (l) => {
          const t = l.target.value;
          a(t), e != null && e.current && (t && t.length > 0 ? e.current.setQuickSearch(t) : e.current.setQuickSearch(null));
        },
        style: { border: "0px" },
        size: "small",
        placeholder: "Quick Search",
        InputProps: {
          endAdornment: /* @__PURE__ */ r(p, { position: "end", children: /* @__PURE__ */ r(x, { className: "card-filter-icon" }) })
        },
        ...n
      }
    )
  ] });
};
export {
  k as QuickSearch
};
