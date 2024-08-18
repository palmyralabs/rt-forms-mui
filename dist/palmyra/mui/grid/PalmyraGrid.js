import { jsx as o, Fragment as u } from "react/jsx-runtime";
import { forwardRef as m, useRef as a, useEffect as d } from "react";
import { GridX as l } from "./GridX.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { o as t } from "../../../chunks/topic.js";
import { StoreFactoryContext as b } from "@palmyralabs/rt-forms";
const v = m(function(e, c) {
  const i = e.topic, r = c || a();
  return d(() => {
    if (e.topic) {
      const f = t.subscribe(i + "/refresh", () => {
        r.current && r.current.refresh();
      }), n = t.subscribe(i + "/filter", (h, s) => {
        r.current && r.current.setFilter(s);
      });
      return () => {
        t.unsubscribe(f), t.unsubscribe(n);
      };
    }
  }, [i]), /* @__PURE__ */ o(u, { children: /* @__PURE__ */ o(b.Provider, { value: e.store, children: /* @__PURE__ */ o(l, { ...e, ref: r }) }) });
});
export {
  v as PalmyraGrid
};
