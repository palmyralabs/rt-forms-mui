import { jsxs as c, jsx as o } from "react/jsx-runtime";
import { MuiTextField as n } from "../../../form/MuiTextField.js";
import { MuiDatePicker as l } from "../../../form/MuiDatePicker.js";
import { MuiSelect as a } from "../../../form/MuiSelect.js";
import { MuiServerLookup as u } from "../../../form/MuiServerLookup.js";
const d = (e) => {
  const { fieldDef: r } = e;
  return /* @__PURE__ */ c("div", { children: [
    "invalid type " + r.type,
    " "
  ] });
}, s = (e, r) => {
  const i = e.fieldDef;
  return /* @__PURE__ */ o(
    r,
    {
      ...i,
      label: e.title
    },
    i.title + i.attribute
  );
}, b = (e, r) => {
  const { type: i } = e, t = { fieldDef: e, title: r };
  switch (i) {
    case "string":
      return s(t, n);
    case "select":
      return s(t, a);
    case "date":
      return s(t, l);
    case "multiSelect":
      return s(t, a);
    case "serverlookup":
      return s(t, u);
    case "float":
    case "number":
    case "numbersOnly":
    case "integer":
    case "dateRange":
    case "autoComplete":
    default:
      return d(t);
  }
};
export {
  b as default
};
