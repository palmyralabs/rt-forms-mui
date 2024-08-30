import { jsx as l } from "react/jsx-runtime";
import { createColumnHelper as c } from "@tanstack/react-table";
import { formatColumn as d } from "./CellFormatter.js";
import { e as b } from "../../../../chunks/accessor.js";
import "../../../../chunks/NoopConverter.js";
import "dayjs";
import { o as v } from "../../../../chunks/StringUtil.js";
import { getFormatConverter as C } from "../../utils/FormatterFactory.js";
import { NoopGridCustomizer as g } from "../base/NoopGridCustomizer.js";
const u = c();
function R(r, o) {
  const e = o || g;
  return r.every((t) => t.columnGroup == null) ? r.map((t) => p(t, e)) : h(r, e);
}
function h(r, o) {
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
  const a = o.formatHeader(r, y(r)), i = o.formatFooter(r, F());
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
  return u.accessor(G(r), {
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
function G(r) {
  var o = r.attribute ? r.attribute : r.name;
  const e = C(r);
  return v(o) ? (t) => e.convert(b(o, t)) : (t) => e.convert(t[o]);
}
function s(r) {
  return r.name ? r.name : r.attribute;
}
function y(r) {
  return () => /* @__PURE__ */ l("span", { children: r.label });
}
function F(r) {
  return (o, e) => {
  };
}
export {
  R as generateColumns
};
