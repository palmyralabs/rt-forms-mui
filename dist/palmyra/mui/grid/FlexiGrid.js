import { jsxs as a, Fragment as d, jsx as e } from "react/jsx-runtime";
import { useRef as o } from "react";
import { S as t } from "../../../chunks/SelectablePagination.js";
import { ServerDataGrid as l } from "./ServerDataGrid.js";
const f = (r) => {
  const i = o(null);
  return /* @__PURE__ */ a(d, { children: [
    /* @__PURE__ */ e("div", { className: "grid-header", children: "Header" }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(l, { ...r, ref: i }) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e(t, { pageSize: r.pageSize, queryRef: i }) })
  ] });
};
export {
  f as FlexiGrid
};
