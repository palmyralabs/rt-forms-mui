import { jsxs as f, Fragment as m, jsx as r } from "react/jsx-runtime";
import { forwardRef as c, useRef as l } from "react";
import { ApiGrid as s } from "./base/ApiGrid.js";
import { S as u, o as d } from "../../../chunks/SelectablePagination.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import p from "./plugins/filter/Filter.js";
const T = c(function(e, g) {
  const o = l(), i = e.endPoint + "hello", t = (a) => {
    d.publish(i, a);
  }, n = e.filterTopic || e.endPoint + "filter";
  return /* @__PURE__ */ f(m, { children: [
    /* @__PURE__ */ r(p, { columns: e.columns, onClose: () => {
    }, queryRef: o }),
    /* @__PURE__ */ r(s, { ...e, onDataChange: t, filterTopic: n, ref: o }),
    /* @__PURE__ */ r(u, { pubsubTopic: i, pageSize: e.pageSize, queryRef: o })
  ] });
});
export {
  T as ServerDataGrid
};
