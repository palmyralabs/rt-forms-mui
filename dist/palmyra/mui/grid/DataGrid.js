import { jsx as a, Fragment as c } from "react/jsx-runtime";
import { forwardRef as f, useRef as m } from "react";
import { ApiDataTable as h } from "./base/ApiDataTable.js";
import { topic as l } from "@palmyralabs/ts-utils";
const y = f(function(r, e) {
  const n = e || m(null);
  return /* @__PURE__ */ a(c, { children: /* @__PURE__ */ a(h, { ...r, onDataChange: (t, i) => {
    if (r.onDataChange)
      try {
        r.onDataChange(t, i);
      } catch (o) {
        console.error(o);
      }
    if (r.topic)
      try {
        l.publish(r.topic + "/data", t);
      } catch (o) {
        console.error(o);
      }
  }, ref: n }) });
});
export {
  y as DataGrid
};
