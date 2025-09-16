import { jsx as e, Fragment as i, jsxs as c } from "react/jsx-runtime";
import { useRef as N } from "react";
import { Table as T, TableHead as w, TableRow as d, TableBody as R, TableCell as u, TableFooter as v } from "@mui/material";
import '../../../../assets/BaseTable.css';/* empty css                           */
import x from "./ColumnHeader.js";
import { useReactTable as D, flexRender as m } from "@tanstack/react-table";
import F from "./LoadingChild.js";
import { useBaseGridManager as B } from "@palmyralabs/rt-forms";
function V(r) {
  const { rowData: a, customizer: s, EmptyChild: g } = r, { onColumnSort: p, options: f, onRowClick: h } = B(r), b = s?.getTableRef ? s?.getTableRef() : N(null), t = D(f);
  return b.current = t, /* @__PURE__ */ e(i, { children: /* @__PURE__ */ c("div", { className: r.className, children: [
    /* @__PURE__ */ c(T, { "aria-label": r["aria-label"], className: "py-baseGrid", children: [
      /* @__PURE__ */ e(w, { className: "py-grid-header", children: t.getHeaderGroups().map((o) => /* @__PURE__ */ e(d, { className: "py-grid-header-row", children: o.headers.map((l) => l.isPlaceholder ? null : /* @__PURE__ */ e(
        x,
        {
          header: l,
          onSortChange: p,
          children: m(
            l.column.columnDef.header,
            l.getContext()
          )
        },
        l.id
      )) }, o.id)) }),
      a == null || a == null || a.length == 0 ? /* @__PURE__ */ e(i, {}) : /* @__PURE__ */ e(R, { children: t.getRowModel().rows.map((o, l) => {
        const y = "py-grid-data-row py-grid-data-row-" + (l % 2 == 1 ? "even" : "odd");
        return /* @__PURE__ */ e(d, { className: y, children: o.getVisibleCells().map((n) => {
          const C = "py-grid-data-cell " + (n.column.columnDef.meta?.columnDef?.type === "number" ? " py-grid-data-cell-type-number" : "");
          return /* @__PURE__ */ e(
            u,
            {
              className: C,
              onClick: () => h(o.original),
              children: m(
                n.column.columnDef.cell,
                n.getContext()
              )
            },
            n.id
          );
        }) }, o.id);
      }) }),
      !r.showFooter || a == null || a == null || a.length == 0 ? /* @__PURE__ */ e(i, {}) : /* @__PURE__ */ e(v, { className: "py-grid-footer", children: t.getFooterGroups().map((o) => /* @__PURE__ */ e(d, { className: "py-grid-footer-row", children: o.headers.map((l) => /* @__PURE__ */ e(u, { className: "py-grid-footer-cell", children: l.isPlaceholder ? null : m(
        l.column.columnDef.footer,
        l.getContext()
      ) }, l.id)) }, o.id)) })
    ] }),
    a == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(F, {}) }) : a == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : a.length == 0 ? /* @__PURE__ */ e(g, {}) : /* @__PURE__ */ e(i, {})
  ] }) });
}
export {
  V as default
};
