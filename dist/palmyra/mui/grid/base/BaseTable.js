import { jsx as e, Fragment as d, jsxs as u } from "react/jsx-runtime";
import { useRef as w } from "react";
import { Table as R, TableHead as v, TableRow as c, TableBody as x, TableCell as p, TableFooter as D } from "@mui/material";
import '../../../../assets/BaseTable.css';/* empty css                           */
import F from "./ColumnHeader.js";
import { useReactTable as B, flexRender as m } from "@tanstack/react-table";
import H from "./LoadingChild.js";
import { useBaseGridManager as j } from "./useBaseGridManager.js";
function A(n) {
  const { rowData: a, customizer: r } = n, { onColumnSort: f, options: h, EmptyChild: b, onRowClick: y } = j(n), C = r != null && r.getTableRef ? r == null ? void 0 : r.getTableRef() : w(), i = B(h);
  return C.current = i, /* @__PURE__ */ e(d, { children: /* @__PURE__ */ u("div", { className: n.className, children: [
    /* @__PURE__ */ u(R, { "aria-label": n["aria-label"], className: "py-baseGrid", children: [
      /* @__PURE__ */ e(v, { className: "py-grid-header", children: i.getHeaderGroups().map((o) => /* @__PURE__ */ e(c, { className: "py-grid-header-row", children: o.headers.map((l) => l.isPlaceholder ? null : /* @__PURE__ */ e(
        F,
        {
          header: l,
          onSortChange: f,
          children: m(
            l.column.columnDef.header,
            l.getContext()
          )
        },
        l.id
      )) }, o.id)) }),
      a == null || a == null || a.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e(x, { children: i.getRowModel().rows.map((o, l) => {
        const N = "py-grid-data-row py-grid-data-row-" + (l % 2 == 1 ? "even" : "odd");
        return /* @__PURE__ */ e(c, { className: N, children: o.getVisibleCells().map((t) => {
          var g;
          const s = t.column.columnDef.meta, T = "py-grid-data-cell " + (((g = s == null ? void 0 : s.columnDef) == null ? void 0 : g.type) === "number" ? " py-grid-data-cell-type-number" : "");
          return /* @__PURE__ */ e(
            p,
            {
              className: T,
              onClick: () => y(o.original),
              children: m(
                t.column.columnDef.cell,
                t.getContext()
              )
            },
            t.id
          );
        }) }, o.id);
      }) }),
      !n.showFooter || a == null || a == null || a.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e(D, { className: "py-grid-footer", children: i.getFooterGroups().map((o) => /* @__PURE__ */ e(c, { className: "py-grid-footer-row", children: o.headers.map((l) => /* @__PURE__ */ e(p, { className: "py-grid-footer-cell", children: l.isPlaceholder ? null : m(
        l.column.columnDef.footer,
        l.getContext()
      ) }, l.id)) }, o.id)) })
    ] }),
    a == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(H, {}) }) : a == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : a.length == 0 ? /* @__PURE__ */ e(b, {}) : /* @__PURE__ */ e(d, {})
  ] }) });
}
export {
  A as default
};
