import { jsx as t, Fragment as n, jsxs as o } from "react/jsx-runtime";
import { forwardRef as s, useRef as f, useMemo as g } from "react";
import { DropdownButton as h } from "../widget/DropdownButton.js";
import { c as u } from "../../../chunks/index3.js";
import { FilterForm as P } from "./plugins/filter/FilterForm.js";
import { DataGrid as G } from "./DataGrid.js";
import { SelectablePagination as S } from "./plugins/pagination/SelectablePagination.js";
import { renderTitle as p } from "../widget/InfoTooltip.js";
import '../../../assets/GridX.css';const R = s(function(i, d) {
  const r = d || f(), e = i.topic || g(() => "id" + Math.random(), []), a = {
    ...i.DataGridControlProps,
    queryRef: r,
    columns: i.columns,
    getPluginOptions: i.getPluginOptions,
    pageSize: i.pageSize,
    topic: e,
    quickSearch: i.quickSearch
  }, c = i.DataGridControls || ((m) => /* @__PURE__ */ t(n, { children: /* @__PURE__ */ t(h, { title: "Filter", PrefixAdornment: /* @__PURE__ */ t(u, {}), children: /* @__PURE__ */ t(P, { ...m }) }) })), l = i.DataGridPagination || S;
  return /* @__PURE__ */ o(n, { children: [
    /* @__PURE__ */ o("div", { className: "py-datagrid-header", children: [
      /* @__PURE__ */ t("div", { className: "py-datagrid-header-right-container", children: /* @__PURE__ */ t("div", { className: "py-datagrid-title", children: p(i.title) }) }),
      /* @__PURE__ */ t("div", { className: "py-datagrid-header-left-container", children: /* @__PURE__ */ t(c, { ...a }) })
    ] }),
    /* @__PURE__ */ t(G, { ...i, topic: e, ref: r }),
    /* @__PURE__ */ t(l, { ...a })
  ] });
});
export {
  R as GridX
};
