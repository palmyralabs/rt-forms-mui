import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { Button as p } from "@mui/material";
import { PalmyraForm as h } from "@palmyralabs/rt-forms";
import { i as R } from "../../../../../chunks/accessor.js";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { useRef as C } from "react";
import { c as N, b as g } from "../../../../../chunks/index3.js";
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
import '../../../../../assets/FilterForm.css';const tt = (r) => {
  const l = {}, s = C(), c = r.defaultFilter || {}, a = j(r.columns), f = () => a.map((t, e) => v(t, t.label)), u = r.onClose || ((t) => {
  });
  Object.keys(c || {}).map((t) => {
    const e = c[t];
    R(t, l, e);
  });
  const n = (t) => {
    r.queryRef.current ? (r.queryRef.current.setFilter(t), u(t)) : console.warn("Query reference not found");
  }, d = () => {
    n({});
  }, F = () => {
    const t = s.current.getData();
    var e = {};
    Object.entries(t).map(([y, m]) => {
      m && m != "" && (e[y] = m);
    }), n && n(e);
  }, b = r.column || 2;
  return /* @__PURE__ */ i("div", { className: "py-filter-container", children: [
    /* @__PURE__ */ o("div", { className: "py-filter-content", children: /* @__PURE__ */ o(h, { formData: l, ref: s, children: /* @__PURE__ */ o(x, { columns: b, children: f() }) }) }),
    /* @__PURE__ */ i("div", { className: "py-filter-button-container", children: [
      /* @__PURE__ */ i(p, { className: "py-reset-button", disableRipple: !0, onClick: d, children: [
        /* @__PURE__ */ o(N, { className: "py-button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ i(p, { className: "py-filter-button", disableRipple: !0, onClick: F, children: [
        /* @__PURE__ */ o(g, { className: "py-button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
export {
  tt as FilterForm
};
