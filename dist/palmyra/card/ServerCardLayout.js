import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { forwardRef as N, useRef as o, useImperativeHandle as P } from "react";
import { a as x } from "../../chunks/index.js";
import { TextField as C, InputAdornment as b } from "@mui/material";
import R from "./CardLayout.js";
import { useServerQuery as z } from "@palmyralabs/rt-forms";
import { renderTitle as A } from "../widget/InfoTooltip.js";
import { S as F } from "../../chunks/SelectablePagination.js";
const T = N(function(r, n) {
  const { title: l, Child: s, childProps: m, customButton: d } = r, u = n || o(null), i = z(r), h = o(i), v = r.listKeyProvider || ((a, t) => t);
  P(u, () => i, [i]);
  const { setQuickSearch: f, getCurrentData: p } = i, y = (a) => {
    const t = a.target.value;
    f(t);
  }, S = 200, g = !!r.quickSearch;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ c("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: A(l) }),
      /* @__PURE__ */ c("div", { className: "card-right-content", children: [
        g && /* @__PURE__ */ e(
          C,
          {
            sx: { width: S },
            type: "text",
            onChange: y,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(b, { position: "end", children: /* @__PURE__ */ e(x, { className: "card-filter-icon" }) })
            }
          }
        ),
        d && d.map((a, t) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: a }, t))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      R,
      {
        Child: s,
        childKeyProvider: v,
        preProcess: r.preProcess,
        dataList: p(),
        childProps: m,
        EmptyChild: r.EmptyChild
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "card-pagination", children: /* @__PURE__ */ e(F, { pageSize: r.pageSize, queryRef: h }) })
  ] }) }) });
});
export {
  T as default
};
