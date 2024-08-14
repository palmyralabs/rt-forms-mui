import { jsx as t, Fragment as R, jsxs as d } from "react/jsx-runtime";
import { FormControl as C, Select as I, MenuItem as N, Pagination as T } from "@mui/material";
import { A as i } from "./NoopConverter.js";
import "dayjs";
import { t as A } from "./delayGenerator.js";
import { useState as j, useEffect as z } from "react";
class M {
  subscribe(e, c) {
    const o = i.subscribe(e, c);
    if (o)
      return o;
    throw new Error("Not able to subscribe to topic " + e);
  }
  publish(e, c) {
    return i.publish(e, c);
  }
  unsubscribe(e) {
    i.unsubscribe(e);
  }
  unsubsribeTopic(e) {
    i.unsubscribe(e);
  }
  reset() {
    i.clearAllSubscriptions();
  }
}
const m = new M(), q = A(10), V = (r) => {
  var h;
  const e = (h = r.queryRef) == null ? void 0 : h.current, [c, o] = j(0);
  if (z(() => {
    if (r.pubsubTopic) {
      const s = m.subscribe(r.pubsubTopic, () => {
        q(() => o((n) => n + 1));
      });
      return () => {
        m.unsubscribe(s);
      };
    }
  }, [r.pubsubTopic]), !e)
    return /* @__PURE__ */ t(R, {});
  const l = e.getTotalRecords(), f = e.getQueryLimit(), a = Array.isArray(r.pageSize) ? r.pageSize : [r.pageSize], { gotoPage: y, getPageNo: p, setPageSize: v } = e, b = p(), u = f.limit || 25, g = Math.ceil(l / u), P = b * u + 1, w = Math.min((b + 1) * u, l), S = (s, n) => {
    y(n - 1);
  }, x = (s) => {
    const n = parseInt(s.target.value, 10);
    v(n);
  };
  return /* @__PURE__ */ t("div", { className: "grid-filter", children: !isNaN(g) && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
    /* @__PURE__ */ t("div", { style: { width: "50%" }, children: a && a.length > 1 ? /* @__PURE__ */ t(C, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { children: "Showing" }) }),
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        I,
        {
          labelId: "rows-per-page-select-label",
          id: "rows-per-page-select",
          defaultValue: a[0],
          onChange: x,
          label: "Rows per page",
          children: a.map((s) => /* @__PURE__ */ t(N, { value: s, children: s }, s))
        }
      ) }),
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ d("span", { children: [
        P,
        " - ",
        w,
        " of ",
        l,
        " Results"
      ] }) })
    ] }) }) : null }),
    /* @__PURE__ */ t("div", { style: {}, children: /* @__PURE__ */ t(
      T,
      {
        count: g,
        shape: "rounded",
        onChange: S,
        page: p() + 1
      }
    ) })
  ] }) }) });
};
export {
  V as S,
  m as o
};
