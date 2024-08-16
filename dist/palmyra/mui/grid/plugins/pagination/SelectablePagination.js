import { jsx as e, Fragment as x, jsxs as l } from "react/jsx-runtime";
import { FormControl as R, Select as S, MenuItem as C, Pagination as I } from "@mui/material";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { o as h } from "../../../../../chunks/topic.js";
import { t as N } from "../../../../../chunks/delayGenerator.js";
import { useState as j, useEffect as z } from "react";
const M = N(10), T = (n) => {
  var p;
  const i = (p = n.queryRef) == null ? void 0 : p.current, [q, m] = j(0);
  if (z(() => {
    if (n.topic) {
      const t = h.subscribe(n.topic + "/data", () => {
        M(() => m((r) => r + 1));
      });
      return () => {
        h.unsubscribe(t);
      };
    }
  }, [n.topic]), !i)
    return /* @__PURE__ */ e(x, {});
  const s = i.getTotalRecords(), u = i.getQueryLimit(), a = Array.isArray(n.pageSize) ? n.pageSize : [n.pageSize], { gotoPage: f, getPageNo: c, setPageSize: y } = i, d = c(), o = u.limit || 25, g = Math.ceil(s / o), v = d * o + 1, P = Math.min((d + 1) * o, s), b = (t, r) => {
    f(r - 1);
  }, w = (t) => {
    const r = parseInt(t.target.value, 10);
    y(r);
  };
  return /* @__PURE__ */ e("div", { className: "grid-filter", children: !isNaN(g) && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
    /* @__PURE__ */ e("div", { style: { width: "50%" }, children: a && a.length > 1 ? /* @__PURE__ */ e(R, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        S,
        {
          labelId: "rows-per-page-select-label",
          id: "rows-per-page-select",
          defaultValue: a[0],
          onChange: w,
          label: "Rows per page",
          children: a.map((t) => /* @__PURE__ */ e(C, { value: t, children: t }, t))
        }
      ) }),
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ l("span", { children: [
        v,
        " - ",
        P,
        " of ",
        s,
        " Results"
      ] }) })
    ] }) }) : null }),
    /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
      I,
      {
        count: g,
        shape: "rounded",
        onChange: b,
        page: c() + 1
      }
    ) })
  ] }) }) });
};
export {
  T as SelectablePagination
};
