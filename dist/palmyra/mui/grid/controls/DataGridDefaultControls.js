import { jsxs as s, Fragment as d, jsx as o } from "react/jsx-runtime";
import { QuickSearch as l } from "./QuickSearch.js";
import { FilterButton as a } from "./FilterButton.js";
import { NewButton as n } from "./ActionButton.js";
import { ExportDataButton as p } from "./ExportDataButton.js";
const x = (r) => {
  const { getPluginOptions: i, ...e } = r, t = i ? i() : {};
  return /* @__PURE__ */ s(d, { children: [
    e.quickSearch && /* @__PURE__ */ o(
      l,
      {
        width: "200",
        queryRef: e.queryRef,
        columns: e.columns,
        ...t.quickSearch
      }
    ),
    /* @__PURE__ */ o(a, { ...e }),
    /* @__PURE__ */ o(
      n,
      {
        label: "Add",
        topic: e.topic,
        ...t.add,
        visible: t.add?.visible,
        disabled: t.add?.disabled
      }
    ),
    /* @__PURE__ */ o(
      p,
      {
        exportOption: { csv: "CSV" },
        visible: t.export?.visible,
        disabled: t.export?.disabled,
        queryRef: e.queryRef,
        ...t.export
      }
    )
  ] });
};
export {
  x as DataGridDefaultControls
};
