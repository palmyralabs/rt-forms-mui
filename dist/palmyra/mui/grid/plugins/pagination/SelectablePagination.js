import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { FormControl as b, Select as w, MenuItem as x, Pagination as y } from "@mui/material";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { o as m } from "../../../../../chunks/topic.js";
import { t as R } from "../../../../../chunks/delayGenerator.js";
import { useState as S, useEffect as C } from "react";
const I = R(10), E = (i) => {
  var h;
  const t = (h = i.queryRef) == null ? void 0 : h.current, [N, p] = S(0);
  C(() => {
    if (i.topic) {
      const n = m.subscribe(i.topic + "/data", () => {
        I(() => p((r) => r + 1));
      });
      return () => {
        m.unsubscribe(n);
      };
    }
  }, [i.topic]);
  const a = (t == null ? void 0 : t.getTotalRecords()) || 0, g = (t == null ? void 0 : t.getQueryLimit()) || { limit: 15 }, s = Array.isArray(i.pageSize) ? i.pageSize : [i.pageSize], o = (t == null ? void 0 : t.getPageNo()) || 0, l = g.limit || 25, d = Math.ceil(a / l), u = o * l + 1, f = Math.min((o + 1) * l, a), v = (n, r) => {
    t.gotoPage(r - 1);
  }, P = (n) => {
    const r = parseInt(n.target.value, 10);
    t.setPageSize(r);
  };
  return /* @__PURE__ */ e("div", { className: "grid-filter", children: !isNaN(d) && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
    /* @__PURE__ */ e("div", { style: { width: "50%" }, children: s && s.length > 1 ? /* @__PURE__ */ e(b, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        w,
        {
          labelId: "rows-per-page-select-label",
          id: "rows-per-page-select",
          defaultValue: s[0],
          onChange: P,
          label: "Rows per page",
          children: s.map((n) => /* @__PURE__ */ e(x, { value: n, children: n }, n))
        }
      ) }),
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ c("span", { children: [
        u,
        " - ",
        f,
        " of ",
        a,
        " Results"
      ] }) })
    ] }) }) : null }),
    /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
      y,
      {
        count: d,
        shape: "rounded",
        onChange: v,
        page: o + 1
      }
    ) })
  ] }) }) });
};
export {
  E as SelectablePagination
};
