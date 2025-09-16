import { jsx as c, Fragment as u } from "react/jsx-runtime";
import { forwardRef as m, useRef as l, useEffect as a } from "react";
import { GridX as b } from "./GridX.js";
import { topic as e } from "@palmyralabs/ts-utils";
const g = m(function(t, f) {
  const i = t.topic, r = f || l(null);
  return a(() => {
    if (t.topic) {
      const n = e.subscribe(i + "/refresh", () => {
        r.current && r.current.refresh();
      }), o = e.subscribe(i + "/filter", (p, s) => {
        r.current && r.current.setFilter(s);
      });
      return () => {
        e.unsubscribe(n), e.unsubscribe(o);
      };
    }
  }, [i]), /* @__PURE__ */ c(u, { children: /* @__PURE__ */ c(b, { ...t, ref: r }) });
});
export {
  g as PalmyraGrid
};
