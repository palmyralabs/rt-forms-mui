import { jsx as n, Fragment as f, jsxs as u } from "react/jsx-runtime";
import { forwardRef as q, useRef as y, useState as C, useImperativeHandle as B, useEffect as P } from "react";
import { A as j } from "../../../chunks/index.js";
import { F as V, a as $, b as G, A as H } from "../../../chunks/AsyncTreeCrudDropDown.js";
import { I as U } from "../../../chunks/index2.js";
import { f as z, c as J } from "../../../chunks/AsyncTreeMenu.js";
import { ClickAwayListener as K } from "@mui/material";
const te = q(function(r, i) {
  const l = r.groupId, m = y(null), b = i || y(null);
  let w = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [h, I] = C([w]), [k, S] = C([]), A = r.storeFactory.getTreeStore({ endPointOptions: { groupId: l } }, r.endPoint);
  B(b, () => ({
    getValue() {
      return E();
    }
  }), [l, h, k]);
  const x = (a, c, e) => a.map((o) => (o.id === c && !o.loaded && (o.loaded = !0, o.children = e.filter((d) => c == d.parent).map((d) => d.id)), o)).concat(e), D = (a) => a.split(",").map((e) => parseInt(e)), O = (a, c) => a.map((t) => {
    const o = t.children || "";
    return {
      id: t.id,
      name: t.name,
      parent: t.parent ? t.parent : c,
      children: t.children ? D(t.children) : [],
      isBranch: o.length > 0,
      loaded: !0,
      metadata: { menuCode: t.code }
    };
  });
  P(() => {
    A.getRoot().then((a) => {
      let c = a.result.filter((o) => o.mask == 2).map((o) => o.id);
      var e = O(a.result, -1);
      const t = x(h, -1, e);
      I(t), S(c);
    });
  }, [l]);
  const E = () => {
    const a = {}, c = {
      name: "root",
      children: [],
      id: -1
    };
    return h.forEach((e) => {
      if (e.metadata?.selected == null)
        return;
      const t = e.parent > 0 ? e.parent : null;
      a[e.id] = {
        menuId: e.id,
        parent: t,
        name: e.name,
        mask: e.metadata?.selected,
        menuCode: e.metadata?.menuCode,
        children: []
      }, t == null && e.id > 0 && c.children.push(a[e.id]);
    }), h.forEach((e) => {
      const t = e.id, o = a[t];
      o && e.children && e.children.forEach((d) => {
        const g = a[d];
        g && o.children.push(g);
      });
    }), c;
  }, F = r.readOnly ? { color: "rgb( 230, 230, 230 )", backgroundColor: "white" } : { color: "rgb(44, 134, 213)", backgroundColor: "white" };
  return /* @__PURE__ */ n(f, { children: /* @__PURE__ */ u("div", { children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: "visually-hidden",
        ref: m,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ n("div", { className: "checkbox", children: /* @__PURE__ */ n(
      z,
      {
        data: h,
        selectedIds: k,
        "aria-label": "Checkbox tree",
        multiSelect: !0,
        propagateSelect: !0,
        togglableSelect: !0,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: a,
          isBranch: c,
          isExpanded: e,
          isSelected: t,
          isHalfSelected: o,
          getNodeProps: d,
          level: g,
          handleSelect: R,
          handleExpand: L
        }) => {
          const N = o ? 1 : t ? 2 : 0;
          a.metadata ? a.metadata.selected = N : a.metadata = { selected: N };
          const T = (p, v) => p && v.children.length === 0 ? /* @__PURE__ */ u(f, { children: [
            /* @__PURE__ */ u(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  v.name
                ]
              }
            ),
            /* @__PURE__ */ n(
              j,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ n(Q, { isOpen: p }), M = (p) => {
            r.readOnly || (R(p), p.stopPropagation);
          };
          return /* @__PURE__ */ u(
            "div",
            {
              ...d({ onClick: L }),
              children: [
                /* @__PURE__ */ n(
                  W,
                  {
                    className: "checkbox-icon",
                    onClick: M,
                    style: F,
                    variant: o ? "some" : t ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ u("div", { className: "menu-list", children: [
                  /* @__PURE__ */ n("div", { className: "text-icon", children: /* @__PURE__ */ n("span", { className: "menu-name", children: a.name }) }),
                  /* @__PURE__ */ n("div", { children: c ? T(e, a) : /* @__PURE__ */ n(f, { children: r.fineGrained ? "" : /* @__PURE__ */ n(X, { element: a, isSelected: t }) }) })
                ] })
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}), Q = (s) => {
  const { isOpen: r, className: i } = s, l = "arrow", m = J(
    l,
    { [`${l}--closed`]: !r },
    { [`${l}--open`]: r },
    i
  );
  return /* @__PURE__ */ n(U, { className: m });
}, W = ({ variant: s, ...r }) => {
  switch (s) {
    case "all":
      return /* @__PURE__ */ n(G, { style: { color: r.style.color, backgroundColor: r.style.backgroundColor }, ...r });
    case "none":
      return /* @__PURE__ */ n(
        $,
        {
          style: { color: "rgba(128, 128,128, 0.2)" },
          onClick: r.onClick,
          className: r.className
        }
      );
    case "some":
      return /* @__PURE__ */ n(V, { style: { color: r.style.color, backgroundColor: r.style.backgroundColor }, ...r });
    default:
      return null;
  }
}, X = (s) => {
  const [r, i] = C(!1), l = () => {
    i(!r);
  }, m = () => {
  };
  return /* @__PURE__ */ n(f, { children: /* @__PURE__ */ u("div", { className: "crud-dropdown-container", children: [
    /* @__PURE__ */ n("span", { className: "crud-dropdown-text", onClick: l, children: "crud" }),
    r && /* @__PURE__ */ n(K, { onClickAway: () => {
      i(!1);
    }, children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
      H,
      {
        isHalfSelected: s.isSelected,
        isSelected: s.isSelected,
        handleSelect: m
      }
    ) }) })
  ] }) });
};
export {
  te as AsyncTreeMenuEditor
};
