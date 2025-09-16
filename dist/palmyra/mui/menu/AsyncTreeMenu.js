import { jsx as n, Fragment as N, jsxs as p } from "react/jsx-runtime";
import { useRef as S, useState as L, useEffect as k } from "react";
import { f as j, c as B } from "../../../chunks/AsyncTreeMenu.js";
import { useNavigate as M } from "react-router-dom";
import { A as U } from "../../../chunks/index.js";
import { a as V } from "../../../chunks/index2.js";
const E = "palmyra.rui.sidemenu.expanded", v = "palmyra.rui.sidemenu.expanded.selected";
function q(h) {
  const o = M(), g = S(null);
  let u = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [i, y] = L({ data: [u], expandedIds: [], selectedId: [] }), A = h.store, l = S([]), b = (e, t, r) => e.map((s) => (s.id === t && !s.loaded && (s.loaded = !0, s.children = r.filter((d) => t == d.parent).map((d) => d.id)), s)).concat(r), w = (e) => e.split(",").map((r) => parseInt(r)), C = (e, t) => e && Array.isArray(e) ? e.map((a) => {
    const s = a.children || "";
    return {
      id: a.id,
      name: a.name,
      parent: a.parent ? a.parent : t,
      children: a.children ? w(a.children) : [],
      isBranch: s.length > 0,
      loaded: !0,
      metadata: {
        code: a.code,
        action: a.action,
        target: a.target
      }
    };
  }) : [];
  function x(e) {
    return typeof e == "number" ? e : parseInt(e);
  }
  k(() => {
    A.getRoot().then((e) => {
      var t = C(e.result, -1);
      const r = b(i.data, -1, t), a = (localStorage.getItem(E) || "").split(",");
      l.current = a.map((c) => x(c)).filter((c) => t.some((m) => m.id == c));
      const d = (localStorage.getItem(v) || "").split(",").map((c) => x(c)).filter((c) => t.some((m) => m.id == c));
      y({ data: r, expandedIds: l.current, selectedId: d });
    });
  }, []);
  const O = () => {
    localStorage.setItem(E, l.current.join());
  }, R = (e) => {
    localStorage.setItem(v, e);
  }, T = (e) => {
    if (!e.isBranch && e.metadata?.code) {
      const t = e.metadata.code;
      o(t);
    } else if (e.metadata?.target) {
      const t = e.metadata.target;
      o(t);
    }
  };
  return /* @__PURE__ */ n(N, { children: /* @__PURE__ */ p("div", { className: "sidebar-asyn-menu", children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: "visually-hidden",
        ref: g,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ n("div", { className: "checkbox", children: i.data.length > 1 && /* @__PURE__ */ n(
      j,
      {
        className: "async-tree-menu-container",
        data: i.data,
        "aria-label": "Checkbox tree",
        onExpand: (e) => {
          const t = e.isExpanded, r = e.element;
          if (t)
            r.id != "" && (l.current.includes(r.id) || l.current.push(r.id));
          else {
            const a = l.current.indexOf(r.id);
            a > -1 && l.current.splice(a, 1);
          }
          O();
        },
        onSelect: (e) => {
          const t = e.isSelected, r = e.element;
          t && !e.isHalfSelected && r.id !== "" && R(r.id);
        },
        propagateSelect: !1,
        togglableSelect: !0,
        multiSelect: !1,
        selectedIds: i.selectedId,
        expandedIds: i.expandedIds,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: e,
          isBranch: t,
          isExpanded: r,
          isSelected: a,
          isHalfSelected: s,
          getNodeProps: d,
          level: c,
          handleSelect: m,
          handleExpand: _
        }) => {
          const D = (f, I) => f && I.children.length === 0 ? /* @__PURE__ */ p(N, { children: [
            /* @__PURE__ */ p(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  I.name
                ]
              }
            ),
            /* @__PURE__ */ n(
              U,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ n(F, { isOpen: f });
          return /* @__PURE__ */ n(
            "div",
            {
              ...d({ onClick: _ }),
              style: { marginLeft: 5 * (c - 1) },
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: a ? "async-tree-menu-selected-list" : "async-tree-menu-list",
                  onClick: (f) => {
                    a || m(f), T(e);
                  },
                  children: [
                    /* @__PURE__ */ p("div", { className: "async-tree-menu-list-text-container", children: [
                      /* @__PURE__ */ n("div", { className: "menu-icon" }),
                      /* @__PURE__ */ n("span", { className: "menu-name", children: e.name })
                    ] }),
                    /* @__PURE__ */ n("div", { className: "async-tree-menu-list-arrow-container", children: t && D(r, e) })
                  ]
                }
              )
            }
          );
        }
      }
    ) })
  ] }) });
}
const F = (h) => {
  const { isOpen: o, className: g } = h, u = "arrow", i = B(
    u,
    { [`${u}--closed`]: !o },
    { [`${u}--open`]: o },
    g
  );
  return /* @__PURE__ */ n(V, { className: i });
};
export {
  q as default
};
