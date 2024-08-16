import { jsx as i, Fragment as o, jsxs as n } from "react/jsx-runtime";
import { useRef as c, useMemo as s } from "react";
import { DropdownButton as h } from "../widget/DropdownButton.js";
import { a as f } from "../../../chunks/index4.js";
import { FilterForm as g } from "./plugins/filter/FilterForm.js";
import { DataGrid as p } from "./DataGrid.js";
import { SelectablePagination as u } from "./plugins/pagination/SelectablePagination.js";
const P = (r) => {
  const t = c(), e = r.topic || s(() => "id" + Math.random(), []), a = {
    queryRef: t,
    columns: r.columns,
    pageSize: r.pageSize,
    topic: e
  }, d = r.DataGridControls || ((m) => /* @__PURE__ */ i(o, { children: /* @__PURE__ */ i(h, { title: "Filter", PrefixAdornment: /* @__PURE__ */ i(f, {}), children: /* @__PURE__ */ i(g, { ...m }) }) })), l = r.DataGridPagination || u;
  return /* @__PURE__ */ n(o, { children: [
    /* @__PURE__ */ n("div", { className: "py-datagrid-header", children: [
      /* @__PURE__ */ i("div", { className: "py-datagrid-header-right-container", children: /* @__PURE__ */ i("div", { className: "py-datagrid-title", children: "My Table " }) }),
      /* @__PURE__ */ i("div", { className: "py-datagrid-header-left-container", children: /* @__PURE__ */ i(d, { ...a }) })
    ] }),
    /* @__PURE__ */ i(p, { ...r, topic: e, ref: t }),
    /* @__PURE__ */ i(l, { ...a })
  ] });
};
export {
  P as GridX
};
