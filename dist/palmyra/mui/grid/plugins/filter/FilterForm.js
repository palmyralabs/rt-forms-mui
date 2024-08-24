import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { Button as a } from "@mui/material";
import { PalmyraForm as R } from "@palmyralabs/rt-forms";
import { i as g } from "../../../../../chunks/accessor.js";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { useRef as C } from "react";
import { b as N, c as y } from "../../../../../chunks/index3.js";
import { convertToField as j } from "./GridFieldConverter.js";
import v from "./FieldGenerator.js";
import "../../../form/MuiTextField.js";
import "../../../form/MuiDatePicker.js";
import "../../../form/MuiSelect.js";
import "../../../form/MuiServerLookup.js";
import "../../../form/MuiCheckBox.js";
import "../../../form/MuiCheckBoxGroup.js";
import "../../../form/MuiDateTimePicker.js";
import "../../../form/MuiIntegerField.js";
import "../../../form/MuiNumberField.js";
import "../../../form/MuiPassword.js";
import "../../../form/MuiRadioGroup.js";
import "../../../form/MuiRating.js";
import "../../../form/MuiSwitch.js";
import "../../../form/MuiTextArea.js";
import "../../../form/MuiTextView.js";
import "../../../form/MuiOptionsView.js";
import "../../../form/MuiDateRangePicker.js";
import { FieldGroupContainer as x } from "../../../form/FieldGroupContainer.js";
const rr = (t) => {
  const l = {}, s = C(), c = t.defaultFilter || {}, p = j(t.columns), f = () => p.map((r, e) => v(r, r.label)), d = t.onClose || ((r) => {
  });
  Object.keys(c || {}).map((r) => {
    const e = c[r];
    g(r, l, e);
  });
  const n = (r) => {
    t.queryRef.current ? (t.queryRef.current.setFilter(r), d(r)) : console.warn("Query reference not found");
  }, u = () => {
    n({});
  }, F = () => {
    const r = s.current.getData();
    var e = {};
    Object.entries(r).map(([h, m]) => {
      m && m != "" && (e[h] = m);
    }), n && n(e);
  }, b = t.column || 2;
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ o("div", { className: "grid-filter-content", children: /* @__PURE__ */ o(R, { formData: l, ref: s, children: /* @__PURE__ */ o(x, { columns: b, children: f() }) }) }),
    /* @__PURE__ */ i("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ i(a, { className: "secondary-filled-button", disableRipple: !0, onClick: u, children: [
        /* @__PURE__ */ o(N, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ i(a, { className: "filled-button", disableRipple: !0, onClick: F, children: [
        /* @__PURE__ */ o(y, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
export {
  rr as FilterForm
};
