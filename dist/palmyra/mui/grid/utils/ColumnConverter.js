import { jsx as l } from "react/jsx-runtime";
import { createColumnHelper as c } from "@tanstack/react-table";
import { formatColumn as d } from "./CellFormatter.js";
import { e as v } from "../../../../chunks/accessor.js";
import "../../../../chunks/NoopConverter.js";
import "dayjs";
import { getFormatConverter as b } from "../../utils/FormatterFactory.js";
import { NoopGridCustomizer as C } from "../base/NoopGridCustomizer.js";
const g = (r, o) => {
  var e = r.indexOf(o);
  return e >= 0;
}, h = (r) => g(r, "."), u = c();
function O(r, o) {
  const e = o || C;
  return r.every((t) => t.columnGroup == null) ? r.map((t) => p(t, e)) : G(r, e);
}
function G(r, o) {
  const e = new Array();
  var t = void 0;
  return r.map((n) => {
    const a = p(n, o);
    n.columnGroup ? ((!t || t.header != n.columnGroup) && (t = {}, t.header = n.columnGroup, t.columns = [], e.push(t)), t.columns.push(a)) : e.push(a);
  }), e;
}
function p(r, o) {
  const e = r.sortable, t = r.searchable;
  var n = r.cellRenderer;
  const a = o.formatHeader(r, F(r)), i = o.formatFooter(r, H());
  if (n)
    return u.display({
      id: s(r),
      meta: {
        attribute: r.attribute,
        columnDef: r
      },
      enableSorting: e,
      enableColumnFilter: t,
      header: a,
      footer: i,
      cell: n
    });
  let m = o.formatCell(r, d(r));
  return u.accessor(y(r), {
    id: s(r),
    meta: {
      attribute: r.attribute,
      columnDef: r
    },
    enableSorting: e,
    enableColumnFilter: t,
    header: a,
    footer: i,
    cell: m
  });
}
function y(r) {
  var o = r.attribute ? r.attribute : r.name;
  const e = b(r);
  return h(o) ? (t) => e.convert(v(o, t)) : (t) => e.convert(t[o]);
}
function s(r) {
  return r.name ? r.name : r.attribute;
}
function F(r) {
  return () => /* @__PURE__ */ l("span", { children: r.label });
}
function H(r) {
  return (o, e) => {
  };
}
export {
  O as generateColumns
};
