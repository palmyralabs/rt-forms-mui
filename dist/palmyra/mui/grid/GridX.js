import { jsx as i, Fragment as o, jsxs as n } from "react/jsx-runtime";
import { forwardRef as s, useRef as f, useMemo as h } from "react";
import { DropdownButton as g } from "../widget/DropdownButton.js";
import { a as p } from "../../../chunks/index4.js";
import { FilterForm as u } from "./plugins/filter/FilterForm.js";
import { DataGrid as y } from "./DataGrid.js";
import { SelectablePagination as F } from "./plugins/pagination/SelectablePagination.js";
import '../../../assets/GridX.css';const M = s(function(r, d) {
  const t = d || f(), e = r.topic || h(() => "id" + Math.random(), []), a = {
    queryRef: t,
    columns: r.columns,
    pageSize: r.pageSize,
    topic: e
  }, c = r.DataGridControls || ((m) => /* @__PURE__ */ i(o, { children: /* @__PURE__ */ i(g, { title: "Filter", PrefixAdornment: /* @__PURE__ */ i(p, {}), children: /* @__PURE__ */ i(u, { ...m }) }) })), l = r.DataGridPagination || F;
  return /* @__PURE__ */ n(o, { children: [
    /* @__PURE__ */ n("div", { className: "py-datagrid-header", children: [
      /* @__PURE__ */ i("div", { className: "py-datagrid-header-right-container", children: /* @__PURE__ */ i("div", { className: "py-datagrid-title", children: "My Table " }) }),
      /* @__PURE__ */ i("div", { className: "py-datagrid-header-left-container", children: /* @__PURE__ */ i(c, { ...a }) })
    ] }),
    /* @__PURE__ */ i(y, { ...r, topic: e, ref: t }),
    /* @__PURE__ */ i(l, { ...a })
  ] });
});
export {
  M as GridX
};
