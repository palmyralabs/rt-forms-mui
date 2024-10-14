import { jsxs as n, Fragment as p, jsx as o } from "react/jsx-runtime";
import { QuickSearch as u } from "./QuickSearch.js";
import { FilterButton as c } from "./FilterButton.js";
import { NewButton as m } from "./ActionButton.js";
import { ExportDataButton as f } from "./ExportDataButton.js";
const g = (a) => {
  var r, s, d, l;
  const { getPluginOptions: i, ...e } = a, t = i ? i() : {};
  return /* @__PURE__ */ n(p, { children: [
    e.quickSearch && /* @__PURE__ */ o(
      u,
      {
        width: "200",
        queryRef: e.queryRef,
        columns: e.columns,
        ...t.quickSearch
      }
    ),
    /* @__PURE__ */ o(c, { ...e }),
    /* @__PURE__ */ o(
      m,
      {
        label: "Add",
        topic: e.topic,
        ...t.add,
        visible: (r = t.add) == null ? void 0 : r.visible,
        disabled: (s = t.add) == null ? void 0 : s.disabled
      }
    ),
    /* @__PURE__ */ o(
      f,
      {
        exportOption: { csv: "CSV" },
        visible: (d = t.export) == null ? void 0 : d.visible,
        disabled: (l = t.export) == null ? void 0 : l.disabled,
        queryRef: e.queryRef,
        ...t.export
      }
    )
  ] });
};
export {
  g as DataGridDefaultControls
};
