import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { FormControl as P, Select as N, MenuItem as R, Pagination as w } from "@mui/material";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { o as m } from "../../../../../chunks/topic.js";
import { t as y } from "../../../../../chunks/delayGenerator.js";
import { useState as S, useEffect as x } from "react";
import '../../../../../assets/SelectablePagination.css';const C = y(10), E = (a) => {
  var p;
  const t = (p = a.queryRef) == null ? void 0 : p.current, [z, g] = S(0);
  x(() => {
    if (a.topic) {
      const n = m.subscribe(a.topic + "/data", () => {
        C(() => g((i) => i + 1));
      });
      return () => {
        m.unsubscribe(n);
      };
    }
  }, [a.topic]);
  const o = (t == null ? void 0 : t.getTotalRecords()) || 0, h = (t == null ? void 0 : t.getQueryLimit()) || { limit: 15 }, s = Array.isArray(a.pageSize) ? a.pageSize : [a.pageSize], c = (t == null ? void 0 : t.getPageNo()) || 0, l = h.limit || 25, d = Math.ceil(o / l), u = c * l + 1, b = Math.min((c + 1) * l, o), f = (n, i) => {
    t.gotoPage(i - 1);
  }, v = (n) => {
    const i = parseInt(n.target.value, 10);
    t.setPageSize(i);
  };
  return /* @__PURE__ */ e("div", { children: !isNaN(d) && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ r("div", { className: "py-selectable-pagination-container", children: [
    /* @__PURE__ */ e("div", { className: "py-selectable-pagination-left-container", children: s && s.length > 1 ? /* @__PURE__ */ e(P, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ r("div", { className: "py-selectable-pagination-left-content-container", children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-select-field", children: /* @__PURE__ */ e(
        N,
        {
          labelId: "rows-per-page-select-label",
          id: "rows-per-page-select",
          defaultValue: s[0],
          onChange: v,
          label: "Rows per page",
          children: s.map((n) => /* @__PURE__ */ e(R, { value: n, children: n }, n))
        }
      ) }),
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-show-result", children: /* @__PURE__ */ r("span", { children: [
        u,
        " - ",
        b,
        " of ",
        o,
        " Results"
      ] }) })
    ] }) }) : null }),
    /* @__PURE__ */ e("div", { className: "py-selectable-pagination-right-container", children: /* @__PURE__ */ e(
      w,
      {
        count: d,
        shape: "rounded",
        onChange: f,
        page: c + 1
      }
    ) })
  ] }) }) });
};
export {
  E as SelectablePagination
};
