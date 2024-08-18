import { jsx as t, Fragment as i } from "react/jsx-runtime";
import { Button as r } from "@mui/material";
import "../../../../chunks/NoopConverter.js";
import "dayjs";
import { o as p } from "../../../../chunks/topic.js";
const s = (n, e) => {
  p.publish(n + "/" + e, {});
}, u = (n) => {
  const e = n.visible != !1;
  return /* @__PURE__ */ t(i, { children: e && /* @__PURE__ */ t(r, { ...n, onClick: () => s(n.topic, n.name), children: /* @__PURE__ */ t("span", { children: n.label }) }) });
}, o = (n) => {
  console.log(n);
  const e = n.props.visible != !1;
  return /* @__PURE__ */ t(i, { children: e && /* @__PURE__ */ t(r, { ...n.props, onClick: () => s(n.props.topic, n.name), children: /* @__PURE__ */ t("span", { children: n.props.label }) }) });
}, b = (n) => /* @__PURE__ */ t(o, { props: n, name: "new" }), h = (n) => /* @__PURE__ */ t(o, { props: n, name: "edit" }), B = (n) => /* @__PURE__ */ t(o, { props: n, name: "delete" });
export {
  u as ActionButton,
  B as DeleteButton,
  h as EditButton,
  b as NewButton
};
