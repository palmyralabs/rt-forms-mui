import { jsx as e, jsxs as d } from "react/jsx-runtime";
import { FormControl as P, Select as N, MenuItem as y, Pagination as R } from "@mui/material";
import { delayGenerator as w, topic as g } from "@palmyralabs/ts-utils";
import { useState as S, useEffect as x } from "react";
import '../../../../../assets/SelectablePagination.css';const C = w(10), A = (a) => {
  var p;
  const t = (p = a.queryRef) == null ? void 0 : p.current, [z, h] = S(0);
  x(() => {
    if (a.topic) {
      const n = g.subscribe(a.topic + "/data", () => {
        C(() => h((i) => i + 1));
      });
      return () => {
        g.unsubscribe(n);
      };
    }
  }, [a.topic]);
  const c = (t == null ? void 0 : t.getTotalRecords()) || 0, m = (t == null ? void 0 : t.getQueryLimit()) || { limit: 15 }, s = Array.isArray(a.pageSize) ? a.pageSize : [a.pageSize], l = (t == null ? void 0 : t.getPageNo()) || 0, o = m.limit || 25, r = Math.ceil(c / o), u = l * o + 1, b = Math.min((l + 1) * o, c), f = (n, i) => {
    t.gotoPage(i - 1);
  }, v = (n) => {
    const i = parseInt(n.target.value, 10);
    t.setPageSize(i);
  };
  return /* @__PURE__ */ e("div", { children: !isNaN(r) && r != 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ d("div", { className: "py-selectable-pagination-container", children: [
    /* @__PURE__ */ e("div", { className: "py-selectable-pagination-left-container", children: s && s.length > 1 ? /* @__PURE__ */ e(P, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ d("div", { className: "py-selectable-pagination-left-content-container", children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-select-field", children: /* @__PURE__ */ e(
        N,
        {
          labelId: "rows-per-page-select-label",
          id: "rows-per-page-select",
          defaultValue: s[0],
          onChange: v,
          label: "Rows per page",
          children: s.map((n) => /* @__PURE__ */ e(y, { value: n, children: n }, n))
        }
      ) }),
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-show-result", children: /* @__PURE__ */ d("span", { children: [
        u,
        " - ",
        b,
        " of ",
        c,
        " Results"
      ] }) })
    ] }) }) : null }),
    /* @__PURE__ */ e("div", { className: "py-selectable-pagination-right-container", children: /* @__PURE__ */ e(
      R,
      {
        count: r,
        shape: "rounded",
        onChange: f,
        page: l + 1
      }
    ) })
  ] }) }) });
};
export {
  A as SelectablePagination
};
