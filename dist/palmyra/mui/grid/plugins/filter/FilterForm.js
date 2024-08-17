import { jsxs as o, jsx as i } from "react/jsx-runtime";
import { Button as a } from "@mui/material";
import { PalmyraForm as h } from "@palmyralabs/rt-forms";
import { i as R } from "../../../../../chunks/accessor.js";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { useRef as g } from "react";
import { T as N, a as y } from "../../../../../chunks/index4.js";
import { convertToField as C } from "./GridFieldConverter.js";
import j from "./FieldGenerator.js";
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
import { FieldGroupContainer as v } from "../../../form/FieldGroupContainer.js";
const _ = (t) => {
  const l = {}, s = g(), c = t.defaultFilter || {}, p = C(t.columns), f = () => p.map((r, e) => j(r, r.label)), d = t.onClose || ((r) => {
  });
  Object.keys(c || {}).map((r) => {
    const e = c[r];
    R(r, l, e);
  });
  const n = (r) => {
    t.queryRef.current ? (t.queryRef.current.setFilter(r), d(r)) : console.warn("Query reference not found");
  }, u = () => {
    n({});
  }, F = () => {
    const r = s.current.getData();
    var e = {};
    Object.entries(r).map(([b, m]) => {
      m && m != "" && (e[b] = m);
    }), n && n(e);
  };
  return /* @__PURE__ */ o("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ i("div", { className: "grid-filter-content", children: /* @__PURE__ */ i(h, { formData: l, ref: s, children: /* @__PURE__ */ i(v, { columns: 2, children: f() }) }) }),
    /* @__PURE__ */ o("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ o(a, { className: "secondary-filled-button", disableRipple: !0, onClick: u, children: [
        /* @__PURE__ */ i(N, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ o(a, { className: "filled-button", disableRipple: !0, onClick: F, children: [
        /* @__PURE__ */ i(y, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
export {
  _ as FilterForm
};
