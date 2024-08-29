import { jsx as n, Fragment as g, jsxs as m } from "react/jsx-runtime";
import { forwardRef as q, useRef as y, useState as C, useImperativeHandle as B, useEffect as P } from "react";
import { A as j } from "../../../chunks/index.js";
import { F as V, a as $, b as G, A as H } from "../../../chunks/AsyncTreeCrudDropDown.js";
import { I as U } from "../../../chunks/index2.js";
import { f as z, c as J } from "../../../chunks/AsyncTreeMenu.js";
import { ClickAwayListener as K } from "@mui/material";
const te = q(function(r, d) {
  const s = r.groupId, h = y(null), b = d || y(null);
  let w = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [p, I] = C([w]), [k, S] = C([]), A = r.storeFactory.getTreeStore({ endPointOptions: { groupId: s } }, r.endPoint);
  B(b, () => ({
    getValue() {
      return E();
    }
  }), [s, p, k]);
  const x = (a, c, e) => a.map((o) => (o.id === c && !o.loaded && (o.loaded = !0, o.children = e.filter((l) => c == l.parent).map((l) => l.id)), o)).concat(e), D = (a) => a.split(",").map((e) => parseInt(e)), O = (a, c) => a.map((t) => {
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
      const t = x(p, -1, e);
      I(t), S(c);
    });
  }, [s]);
  const E = () => {
    const a = {}, c = {
      name: "root",
      children: [],
      id: -1
    };
    return p.forEach((e) => {
      var o, l, u;
      if (((o = e.metadata) == null ? void 0 : o.selected) == null)
        return;
      const t = e.parent > 0 ? e.parent : null;
      a[e.id] = {
        menuId: e.id,
        parent: t,
        name: e.name,
        mask: (l = e.metadata) == null ? void 0 : l.selected,
        menuCode: (u = e.metadata) == null ? void 0 : u.menuCode,
        children: []
      }, t == null && e.id > 0 && c.children.push(a[e.id]);
    }), p.forEach((e) => {
      const t = e.id, o = a[t];
      o && e.children && e.children.forEach((l) => {
        const u = a[l];
        u && o.children.push(u);
      });
    }), c;
  }, F = r.readOnly ? { color: "rgb( 230, 230, 230 )", backgroundColor: "white" } : { color: "rgb(44, 134, 213)", backgroundColor: "white" };
  return /* @__PURE__ */ n(g, { children: /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: "visually-hidden",
        ref: h,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ n("div", { className: "checkbox", children: /* @__PURE__ */ n(
      z,
      {
        data: p,
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
          getNodeProps: l,
          level: u,
          handleSelect: R,
          handleExpand: L
        }) => {
          const N = o ? 1 : t ? 2 : 0;
          a.metadata ? a.metadata.selected = N : a.metadata = { selected: N };
          const T = (f, v) => f && v.children.length === 0 ? /* @__PURE__ */ m(g, { children: [
            /* @__PURE__ */ m(
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
          ] }) : /* @__PURE__ */ n(Q, { isOpen: f }), M = (f) => {
            r.readOnly || (R(f), f.stopPropagation);
          };
          return /* @__PURE__ */ m(
            "div",
            {
              ...l({ onClick: L }),
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
                /* @__PURE__ */ m("div", { className: "menu-list", children: [
                  /* @__PURE__ */ n("div", { className: "text-icon", children: /* @__PURE__ */ n("span", { className: "menu-name", children: a.name }) }),
                  /* @__PURE__ */ n("div", { children: c ? T(e, a) : /* @__PURE__ */ n(g, { children: r.fineGrained ? "" : /* @__PURE__ */ n(X, { element: a, isSelected: t }) }) })
                ] })
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}), Q = (i) => {
  const { isOpen: r, className: d } = i, s = "arrow", h = J(
    s,
    { [`${s}--closed`]: !r },
    { [`${s}--open`]: r },
    d
  );
  return /* @__PURE__ */ n(U, { className: h });
}, W = ({ variant: i, ...r }) => {
  switch (i) {
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
}, X = (i) => {
  const [r, d] = C(!1), s = () => {
    d(!r);
  }, h = () => {
  };
  return /* @__PURE__ */ n(g, { children: /* @__PURE__ */ m("div", { className: "crud-dropdown-container", children: [
    /* @__PURE__ */ n("span", { className: "crud-dropdown-text", onClick: s, children: "crud" }),
    r && /* @__PURE__ */ n(K, { onClickAway: () => {
      d(!1);
    }, children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
      H,
      {
        isHalfSelected: i.isSelected,
        isSelected: i.isSelected,
        handleSelect: h
      }
    ) }) })
  ] }) });
};
export {
  te as AsyncTreeMenuEditor
};
