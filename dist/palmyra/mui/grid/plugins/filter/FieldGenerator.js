import { jsxs as u, jsx as s } from "react/jsx-runtime";
import { MuiTextField as c } from "../../../form/MuiTextField.js";
import { MuiDatePicker as m } from "../../../form/MuiDatePicker.js";
import { MuiSelect as a } from "../../../form/MuiSelect.js";
import { MuiServerLookup as n } from "../../../form/MuiServerLookup.js";
import { MuiCheckBox as p } from "../../../form/MuiCheckBox.js";
import "../../../form/MuiCheckBoxGroup.js";
import "../../../form/MuiDateTimePicker.js";
import { MuiIntegerField as l } from "../../../form/MuiIntegerField.js";
import { MuiNumberField as f } from "../../../form/MuiNumberField.js";
import { MuiPassword as d } from "../../../form/MuiPassword.js";
import { MuiRadioGroup as M } from "../../../form/MuiRadioGroup.js";
import { MuiRating as g } from "../../../form/MuiRating.js";
import { MuiSwitch as x } from "../../../form/MuiSwitch.js";
import { MuiTextArea as b } from "../../../form/MuiTextArea.js";
import "../../../form/MuiTextView.js";
import "../../../form/MuiOptionsView.js";
import { MuiDateRangePicker as h } from "../../../form/MuiDateRangePicker.js";
const k = (t) => {
  const { fieldDef: i } = t;
  return /* @__PURE__ */ u("div", { children: [
    "invalid type " + i.type,
    " "
  ] });
}, r = (t, i) => {
  const o = t.fieldDef;
  return /* @__PURE__ */ s(
    i,
    {
      ...o,
      label: t.title
    },
    o.title + o.attribute
  );
}, q = (t, i) => {
  const { type: o } = t, e = { fieldDef: t, title: i };
  switch (o) {
    case "string":
      return r(e, c);
    case "radio":
      return r(e, M);
    case "select":
      return r(e, a);
    case "date":
      return r(e, m);
    case "multiSelect":
      return r(e, a);
    case "checkbox":
      return r(e, p);
    case "serverlookup":
      return r(e, n);
    case "textarea":
      return r(e, b);
    case "switch":
      return r(e, x);
    case "password":
      return r(e, d);
    case "rating":
      return r(e, g);
    case "float":
    case "number":
    case "numbersOnly":
      return r(e, f);
    case "integer":
      return r(e, l);
    case "dateRange":
      return r(e, h);
    case "autoComplete":
    default:
      return k(e);
  }
};
export {
  q as default
};
