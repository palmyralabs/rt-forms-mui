import { jsx as e, Fragment as y, jsxs as l } from "react/jsx-runtime";
import { FormControl as P, Select as f, MenuItem as x, Stack as S, Pagination as w } from "@mui/material";
import { useServerQuery as I } from "@palmyralabs/rt-forms";
const j = (i) => {
  const { getTotalRecords: s, gotoPage: c, setPageSize: d, getPageNo: g, setQueryLimit: h } = I(i), p = (n) => {
    const r = parseInt(n.target.value, 10);
    d(r);
  }, m = (n, r) => {
    c(r - 1);
  }, u = !!i.pageSize, v = (n) => h(n.limit), o = Math.ceil(s() / v || 15), t = i.pageSize, a = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ e(y, { children: /* @__PURE__ */ e("div", { className: "card-pagination", children: u && o !== 0 && /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
    /* @__PURE__ */ e("div", { children: a && a.length > 1 ? /* @__PURE__ */ e(P, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        f,
        {
          labelId: "rows-per-page-select-label",
          id: "rows-per-page-select",
          defaultValue: t[0],
          onChange: p,
          label: "Rows per page",
          children: a.map((n) => /* @__PURE__ */ e(x, { value: n, children: n }, n))
        }
      ) }),
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ l("span", { children: [
        "of ",
        s(),
        " Results"
      ] }) })
    ] }) }) : null }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(S, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
      w,
      {
        count: o,
        shape: "rounded",
        onChange: m,
        page: g() + 1
      }
    ) }) })
  ] }) }) });
};
export {
  j as ServerPagination
};
