import { jsx as e, Fragment as d, jsxs as u } from "react/jsx-runtime";
import { useRef as w } from "react";
import { Table as x, TableHead as R, TableRow as c, TableBody as T, TableCell as f, TableFooter as v } from "@mui/material";
/* empty css                          */
import D from "./ColumnHeader.js";
import { useReactTable as y, flexRender as m } from "@tanstack/react-table";
import F from "./LoadingChild.js";
import { useBaseGridManager as B } from "./useBaseGridManager.js";
function L(n) {
  const { rowData: a, customizer: o } = n, { onColumnSort: h, options: g, EmptyChild: p, onRowClick: C } = B(n), G = o != null && o.getTableRef ? o == null ? void 0 : o.getTableRef() : w(), t = y(g);
  return G.current = t, /* @__PURE__ */ e(d, { children: /* @__PURE__ */ u("div", { className: n.className, children: [
    /* @__PURE__ */ u(x, { "aria-label": n["aria-label"], className: "plr-baseGrid", children: [
      /* @__PURE__ */ e(R, { className: "plr-baseGrid-header", children: t.getHeaderGroups().map((r) => /* @__PURE__ */ e(c, { className: "plr-baseGrid-header-row", children: r.headers.map((l) => l.isPlaceholder ? null : /* @__PURE__ */ e(
        D,
        {
          header: l,
          onSortChange: h,
          children: m(
            l.column.columnDef.header,
            l.getContext()
          )
        },
        l.id
      )) }, r.id)) }),
      a == null || a == null || a.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e(T, { children: t.getRowModel().rows.map((r, l) => {
        const N = "plr-baseGrid-data-row plr-baseGrid-data-row-" + (l % 2 == 1 ? "even" : "odd");
        return /* @__PURE__ */ e(c, { className: N, children: r.getVisibleCells().map((i) => {
          var b;
          const s = i.column.columnDef.meta;
          return /* @__PURE__ */ e(
            f,
            {
              className: "plr-baseGrid-data-cell",
              style: {
                ...((b = s == null ? void 0 : s.columnDef) == null ? void 0 : b.type) === "number" ? { textAlign: "end" } : {}
              },
              onClick: () => C(r.original),
              children: m(
                i.column.columnDef.cell,
                i.getContext()
              )
            },
            i.id
          );
        }) }, r.id);
      }) }),
      !n.showFooter || a == null || a == null || a.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e(v, { className: "plr-baseGrid-footer", children: t.getFooterGroups().map((r) => /* @__PURE__ */ e(c, { style: { textAlign: "end" }, className: "plr-baseGrid-footer-row", children: r.headers.map((l) => /* @__PURE__ */ e(f, { className: "plr-baseGrid-footer-cell", children: l.isPlaceholder ? null : m(
        l.column.columnDef.footer,
        l.getContext()
      ) }, l.id)) }, r.id)) })
    ] }),
    a == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(F, {}) }) : a == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : a.length == 0 ? /* @__PURE__ */ e(p, {}) : /* @__PURE__ */ e(d, {})
  ] }) });
}
export {
  L as default
};
