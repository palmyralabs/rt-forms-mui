import { jsx as i, Fragment as n, jsxs as o } from "react/jsx-runtime";
import { forwardRef as s, useRef as f, useMemo as g } from "react";
import { DropdownButton as h } from "../widget/DropdownButton.js";
import { c as u } from "../../../chunks/index3.js";
import { FilterForm as p } from "./plugins/filter/FilterForm.js";
import { DataGrid as P } from "./DataGrid.js";
import { SelectablePagination as S } from "./plugins/pagination/SelectablePagination.js";
import { renderTitle as y } from "../widget/InfoTooltip.js";
import '../../../assets/GridX.css';const b = s(function(t, d) {
  const e = d || f(), r = t.topic || g(() => "id" + Math.random(), []), a = {
    queryRef: e,
    columns: t.columns,
    getPluginOptions: t.getPluginOptions,
    pageSize: t.pageSize,
    topic: r,
    quickSearch: t.quickSearch
  }, c = t.DataGridControls || ((m) => /* @__PURE__ */ i(n, { children: /* @__PURE__ */ i(h, { title: "Filter", PrefixAdornment: /* @__PURE__ */ i(u, {}), children: /* @__PURE__ */ i(p, { ...m }) }) })), l = t.DataGridPagination || S;
  return /* @__PURE__ */ o(n, { children: [
    /* @__PURE__ */ o("div", { className: "py-datagrid-header", children: [
      /* @__PURE__ */ i("div", { className: "py-datagrid-header-right-container", children: /* @__PURE__ */ i("div", { className: "py-datagrid-title", children: y(t.title) }) }),
      /* @__PURE__ */ i("div", { className: "py-datagrid-header-left-container", children: /* @__PURE__ */ i(c, { ...a }) })
    ] }),
    /* @__PURE__ */ i(P, { ...t, topic: r, ref: e }),
    /* @__PURE__ */ i(l, { ...a })
  ] });
});
export {
  b as GridX
};
