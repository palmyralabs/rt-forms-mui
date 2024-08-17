import { jsx as e, Fragment as d, jsxs as u } from "react/jsx-runtime";
import { useRef as T } from "react";
import { Table as x, TableHead as R, TableRow as c, TableBody as v, TableCell as f, TableFooter as D } from "@mui/material";
import '../../../../assets/BaseTable.css';/* empty css                           */
import y from "./ColumnHeader.js";
import { useReactTable as F, flexRender as m } from "@tanstack/react-table";
import B from "./LoadingChild.js";
import { useBaseGridManager as H } from "./useBaseGridManager.js";
function L(n) {
  const { rowData: r, customizer: o } = n, { onColumnSort: h, options: p, EmptyChild: b, onRowClick: C } = H(n), N = o != null && o.getTableRef ? o == null ? void 0 : o.getTableRef() : T(), t = F(p);
  return N.current = t, /* @__PURE__ */ e(d, { children: /* @__PURE__ */ u("div", { className: n.className, children: [
    /* @__PURE__ */ u(x, { "aria-label": n["aria-label"], className: "plr-baseGrid", children: [
      /* @__PURE__ */ e(R, { className: "plr-grid-header", children: t.getHeaderGroups().map((a) => /* @__PURE__ */ e(c, { className: "plr-grid-header-row", children: a.headers.map((l) => l.isPlaceholder ? null : /* @__PURE__ */ e(
        y,
        {
          header: l,
          onSortChange: h,
          children: m(
            l.column.columnDef.header,
            l.getContext()
          )
        },
        l.id
      )) }, a.id)) }),
      r == null || r == null || r.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e(v, { children: t.getRowModel().rows.map((a, l) => {
        const w = "plr-grid-data-row plr-grid-data-row-" + (l % 2 == 1 ? "even" : "odd");
        return /* @__PURE__ */ e(c, { className: w, children: a.getVisibleCells().map((i) => {
          var g;
          const s = i.column.columnDef.meta;
          return /* @__PURE__ */ e(
            f,
            {
              className: "plr-grid-data-cell",
              style: {
                ...((g = s == null ? void 0 : s.columnDef) == null ? void 0 : g.type) === "number" ? { textAlign: "end" } : {}
              },
              onClick: () => C(a.original),
              children: m(
                i.column.columnDef.cell,
                i.getContext()
              )
            },
            i.id
          );
        }) }, a.id);
      }) }),
      !n.showFooter || r == null || r == null || r.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e(D, { className: "plr-grid-footer", children: t.getFooterGroups().map((a) => /* @__PURE__ */ e(c, { style: { textAlign: "end" }, className: "plr-grid-footer-row", children: a.headers.map((l) => /* @__PURE__ */ e(f, { className: "plr-grid-footer-cell", children: l.isPlaceholder ? null : m(
        l.column.columnDef.footer,
        l.getContext()
      ) }, l.id)) }, a.id)) })
    ] }),
    r == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(B, {}) }) : r == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : r.length == 0 ? /* @__PURE__ */ e(b, {}) : /* @__PURE__ */ e(d, {})
  ] }) });
}
export {
  L as default
};
