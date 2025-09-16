import { jsx as e, jsxs as d } from "react/jsx-runtime";
import { FormControl as f, Select as v, MenuItem as P, Pagination as N } from "@mui/material";
import { delayGenerator as R, topic as p } from "@palmyralabs/ts-utils";
import { useState as w, useEffect as S } from "react";
import '../../../../../assets/SelectablePagination.css';const x = R(10), q = (a) => {
  const n = a.queryRef?.current, [C, g] = w(0);
  S(() => {
    if (a.topic) {
      const t = p.subscribe(a.topic + "/data", () => {
        x(() => g((i) => i + 1));
      });
      return () => {
        p.unsubscribe(t);
      };
    }
  }, [a.topic]);
  const s = n?.getTotalRecords() || 0, h = n?.getQueryLimit() || { limit: 15 }, r = Array.isArray(a.pageSize) ? a.pageSize : [a.pageSize], c = n?.getPageNo() || 0, l = h.limit || 25, o = Math.ceil(s / l), m = c * l + 1, u = Math.min((c + 1) * l, s), b = (t, i) => {
    n.gotoPage(i - 1);
  }, y = (t) => {
    const i = parseInt(t.target.value, 10);
    n.setPageSize(i);
  };
  return /* @__PURE__ */ e("div", { children: !isNaN(o) && o != 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ d("div", { className: "py-selectable-pagination-container", children: [
    /* @__PURE__ */ e("div", { className: "py-selectable-pagination-left-container", children: r && r.length > 1 ? /* @__PURE__ */ e(f, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ d("div", { className: "py-selectable-pagination-left-content-container", children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-select-field", children: /* @__PURE__ */ e(
        v,
        {
          labelId: "rows-per-page-select-label",
          id: "rows-per-page-select",
          defaultValue: r[0],
          onChange: y,
          label: "Rows per page",
          children: r.map((t) => /* @__PURE__ */ e(P, { value: t, children: t }, t))
        }
      ) }),
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-show-result", children: /* @__PURE__ */ d("span", { children: [
        m,
        " - ",
        u,
        " of ",
        s,
        " Results"
      ] }) })
    ] }) }) : null }),
    /* @__PURE__ */ e("div", { className: "py-selectable-pagination-right-container", children: /* @__PURE__ */ e(
      N,
      {
        count: o,
        shape: "rounded",
        onChange: b,
        page: c + 1
      }
    ) })
  ] }) }) });
};
export {
  q as SelectablePagination
};
