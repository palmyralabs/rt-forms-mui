import { jsxs as u, jsx as a } from "react/jsx-runtime";
import { MuiTextField as s } from "../../../form/MuiTextField.js";
import { MuiDatePicker as c } from "../../../form/MuiDatePicker.js";
import { MuiSelect as m } from "../../../form/MuiSelect.js";
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
import "../../utils/ColumnConverter.js";
import "react";
import "@mui/material";
/* empty css                             */
import "@tanstack/react-table";
import "../../../../../chunks/AsyncTreeMenu.js";
import "react-router-dom";
import "../../../menu/AsyncTreeMenuEditor.js";
import "@mui/icons-material";
import "../../../widget/InfoTooltip.js";
const h = (t) => {
  const { fieldDef: i } = t;
  return /* @__PURE__ */ u("div", { children: [
    "invalid type " + i.type,
    " "
  ] });
}, e = (t, i) => {
  const o = t.fieldDef;
  return /* @__PURE__ */ a(
    i,
    {
      ...o,
      label: t.title
    },
    o.title + o.attribute
  );
}, Q = (t, i) => {
  const { type: o } = t, r = { fieldDef: t, title: i };
  switch (o) {
    case "string":
      return e(r, s);
    case "radio":
      return e(r, M);
    case "select":
      return e(r, m);
    case "date":
      return e(r, c);
    case "multiSelect":
      return e(r, m);
    case "checkbox":
      return e(r, p);
    case "serverlookup":
      return e(r, n);
    case "textarea":
      return e(r, b);
    case "switch":
      return e(r, x);
    case "password":
      return e(r, d);
    case "rating":
      return e(r, g);
    case "float":
    case "number":
    case "numbersOnly":
      return e(r, f);
    case "integer":
      return e(r, l);
    case "autoComplete":
    default:
      return h(r);
  }
};
export {
  Q as default
};
