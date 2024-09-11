import { MuiTextField as m } from "../../../form/MuiTextField.js";
import { MuiDatePicker as s } from "../../../form/MuiDatePicker.js";
import { MuiSelect as o } from "../../../form/MuiSelect.js";
import { MuiServerLookup as c } from "../../../form/MuiServerLookup.js";
import { MuiCheckBox as n } from "../../../form/MuiCheckBox.js";
import "../../../form/MuiCheckBoxGroup.js";
import "../../../form/MuiDateTimePicker.js";
import { MuiIntegerField as p } from "../../../form/MuiIntegerField.js";
import { MuiNumberField as l } from "../../../form/MuiNumberField.js";
import { MuiPassword as d } from "../../../form/MuiPassword.js";
import { MuiRadioGroup as f } from "../../../form/MuiRadioGroup.js";
import { MuiRating as M } from "../../../form/MuiRating.js";
import { MuiSwitch as g } from "../../../form/MuiSwitch.js";
import { MuiTextArea as F } from "../../../form/MuiTextArea.js";
import "../../../form/MuiTextView.js";
import "../../../form/MuiOptionsView.js";
import { MuiDateRangePicker as k } from "../../../form/MuiDateRangePicker.js";
import { useFieldGenrator as x } from "@palmyralabs/rt-forms";
const j = (t, i) => {
  const { type: a } = t, r = { fieldDef: t, title: i }, { getReactField: e, getInvalidField: u } = x();
  switch (a) {
    case "string":
      return e(r, m);
    case "radio":
      return e(r, f);
    case "select":
      return e(r, o);
    case "date":
      return e(r, s);
    case "multiSelect":
      return e(r, o);
    case "checkbox":
      return e(r, n);
    case "serverlookup":
      return e(r, c);
    case "textarea":
      return e(r, F);
    case "switch":
      return e(r, g);
    case "password":
      return e(r, d);
    case "rating":
      return e(r, M);
    case "float":
    case "number":
    case "numbersOnly":
      return e(r, l);
    case "integer":
      return e(r, p);
    case "dateRange":
      return e(r, k);
    case "autoComplete":
    default:
      return u(r);
  }
};
export {
  j as default
};
