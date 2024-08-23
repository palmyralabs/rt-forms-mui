import { jsx as n, Fragment as o } from "react/jsx-runtime";
import { Button as r } from "@mui/material";
import "../../../../chunks/NoopConverter.js";
import "dayjs";
import { o as s } from "../../../../chunks/topic.js";
const p = (t, e) => {
  s.publish(t + "/" + e, {});
}, u = (t) => {
  const e = t.visible != !1;
  return /* @__PURE__ */ n(o, { children: e && /* @__PURE__ */ n(r, { ...t, onClick: () => p(t.topic, t.name), children: /* @__PURE__ */ n("span", { children: t.label }) }) });
}, i = (t) => {
  const e = t.props.visible != !1;
  return /* @__PURE__ */ n(o, { children: e && /* @__PURE__ */ n(r, { ...t.props, onClick: () => p(t.props.topic, t.name), children: /* @__PURE__ */ n("span", { children: t.props.label }) }) });
}, b = (t) => /* @__PURE__ */ n(i, { props: t, name: "new" }), h = (t) => /* @__PURE__ */ n(i, { props: t, name: "edit" }), B = (t) => /* @__PURE__ */ n(i, { props: t, name: "delete" });
export {
  u as ActionButton,
  B as DeleteButton,
  h as EditButton,
  b as NewButton
};
