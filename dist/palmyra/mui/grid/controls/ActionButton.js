import { jsx as n, Fragment as s } from "react/jsx-runtime";
import { Button as o } from "@mui/material";
import { topic as r } from "@palmyralabs/ts-utils";
const p = (t, e) => {
  r.publish(t + "/" + e, {});
}, m = (t) => {
  const e = t.visible != !1;
  return /* @__PURE__ */ n(s, { children: e && /* @__PURE__ */ n(o, { ...t, onClick: () => p(t.topic, t.name), children: /* @__PURE__ */ n("span", { children: t.label }) }) });
}, i = (t) => {
  const e = t.props.visible != !1;
  return /* @__PURE__ */ n(s, { children: e && /* @__PURE__ */ n(
    o,
    {
      ...t.props,
      onClick: () => p(t.props.topic, t.name),
      className: "py-action-button",
      disableRipple: !0,
      children: /* @__PURE__ */ n("span", { children: t.props.label })
    }
  ) });
}, u = (t) => /* @__PURE__ */ n(i, { props: t, name: "new" }), b = (t) => /* @__PURE__ */ n(i, { props: t, name: "edit" }), d = (t) => /* @__PURE__ */ n(i, { props: t, name: "delete" });
export {
  m as ActionButton,
  d as DeleteButton,
  b as EditButton,
  u as NewButton
};
