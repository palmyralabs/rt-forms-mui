import { jsx as i, Fragment as o, jsxs as n } from "react/jsx-runtime";
import { forwardRef as s, useRef as f, useMemo as h } from "react";
import { DropdownButton as g } from "../widget/DropdownButton.js";
import { a as u } from "../../../chunks/index3.js";
import { FilterForm as p } from "./plugins/filter/FilterForm.js";
import { DataGrid as y } from "./DataGrid.js";
import { SelectablePagination as F } from "./plugins/pagination/SelectablePagination.js";
import { renderTitle as G } from "../widget/InfoTooltip.js";
import '../../../assets/GridX.css';const w = s(function(r, d) {
  const t = d || f(), e = r.topic || h(() => "id" + Math.random(), []), a = {
    queryRef: t,
    columns: r.columns,
    pageSize: r.pageSize,
    topic: e
  }, m = r.DataGridControls || ((c) => /* @__PURE__ */ i(o, { children: /* @__PURE__ */ i(g, { title: "Filter", PrefixAdornment: /* @__PURE__ */ i(u, {}), children: /* @__PURE__ */ i(p, { ...c }) }) })), l = r.DataGridPagination || F;
  return /* @__PURE__ */ n(o, { children: [
    /* @__PURE__ */ n("div", { className: "py-datagrid-header", children: [
      /* @__PURE__ */ i("div", { className: "py-datagrid-header-right-container", children: /* @__PURE__ */ i("div", { className: "py-datagrid-title", children: G(r.title) }) }),
      /* @__PURE__ */ i("div", { className: "py-datagrid-header-left-container", children: /* @__PURE__ */ i(m, { ...a }) })
    ] }),
    /* @__PURE__ */ i(y, { ...r, topic: e, ref: t }),
    /* @__PURE__ */ i(l, { ...a })
  ] });
});
export {
  w as GridX
};
