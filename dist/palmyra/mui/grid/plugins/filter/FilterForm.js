import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { Button as p } from "@mui/material";
import { PalmyraForm as y } from "@palmyralabs/rt-forms";
import { i as h } from "../../../../../chunks/accessor.js";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { useRef as R } from "react";
import { c as N, b as C } from "../../../../../chunks/index3.js";
import { convertToField as g } from "./GridFieldConverter.js";
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
import '../../../../../assets/FilterForm.css';const _ = (r) => {
  const s = {}, l = R(), c = r.defaultFilter || {}, a = g(r.columns), f = () => a.map((t, e) => j(t, t.label)), u = r.onClose || ((t) => {
  });
  Object.keys(c || {}).map((t) => {
    const e = c[t];
    h(t, s, e);
  });
  const n = (t) => {
    r.queryRef.current ? (r.queryRef.current.setFilter(t), u(t)) : console.warn("Query reference not found");
  }, d = () => {
    n({});
  }, F = () => {
    const t = l.current.getData();
    var e = {};
    Object.entries(t).map(([b, m]) => {
      m && m != "" && (e[b] = m);
    }), n && n(e);
  };
  return /* @__PURE__ */ i("div", { className: "py-filter-container", children: [
    /* @__PURE__ */ o("div", { className: "py-filter-content", children: /* @__PURE__ */ o(y, { formData: s, ref: l, children: /* @__PURE__ */ o(v, { columns: 2, children: f() }) }) }),
    /* @__PURE__ */ i("div", { className: "py-filter-button-container", children: [
      /* @__PURE__ */ i(p, { className: "py-reset-button", disableRipple: !0, onClick: d, children: [
        /* @__PURE__ */ o(N, { className: "py-button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ i(p, { className: "py-filter-button", disableRipple: !0, onClick: F, children: [
        /* @__PURE__ */ o(C, { className: "py-button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
export {
  _ as FilterForm
};
