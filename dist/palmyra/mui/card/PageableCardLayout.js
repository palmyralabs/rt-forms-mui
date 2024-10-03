import { jsxs as n, Fragment as c, jsx as m } from "react/jsx-runtime";
import { ServerCardLayout as f } from "@palmyralabs/rt-forms";
import { useRef as g } from "react";
import "../grid/DataGrid.js";
import "@mui/material";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { o as h } from "../../../chunks/topic.js";
import "../form/MuiTextField.js";
import "../form/MuiDatePicker.js";
import "../form/MuiSelect.js";
import "../form/MuiServerLookup.js";
import "../form/MuiCheckBox.js";
import "../form/MuiCheckBoxGroup.js";
import "../form/MuiDateTimePicker.js";
import "../form/MuiIntegerField.js";
import "../form/MuiNumberField.js";
import "../form/MuiPassword.js";
import "../form/MuiRadioGroup.js";
import "../form/MuiRating.js";
import "../form/MuiSwitch.js";
import "../form/MuiTextArea.js";
import '../../../assets/ExportDataButton.css';import '../../../assets/ColumnHeader.css';import '../../../assets/BaseTable.css';/* empty css                  */
import "../form/MuiOptionsView.js";
import "../form/MuiLookupView.js";
import "../form/MuiDateView.js";
import "../form/MuiDateRangePicker.js";
import "../grid/plugins/filter/FilterForm.js";
import { SelectablePagination as l } from "../grid/plugins/pagination/SelectablePagination.js";
/* empty css                        */
/* empty css                           */
import "@tanstack/react-table";
import "../widget/InfoTooltip.js";
import "../widget/DropdownButton.js";
/* empty css                               */
import "../grid/GridX.js";
import "../grid/PalmyraGrid.js";
import "../grid/StaticGrid.js";
const $ = (t) => {
  const o = t.queryRef || g(), e = (i, p) => {
    if (t.onDataChange)
      try {
        t.onDataChange(i, p);
      } catch (r) {
        console.error(r);
      }
    if (t.topic)
      try {
        h.publish(t.topic + "/data", i);
      } catch (r) {
        console.error(r);
      }
  }, a = t.CardPagination || l;
  return /* @__PURE__ */ n(c, { children: [
    /* @__PURE__ */ m(f, { Child: t.Child, store: t.store, ref: o, onDataChange: e, ...t }),
    /* @__PURE__ */ m(a, { pageSize: t.pageSize, queryRef: o, topic: t.topic, ...t })
  ] });
};
export {
  $ as PageableCardLayout
};
