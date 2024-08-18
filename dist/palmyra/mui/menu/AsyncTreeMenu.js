import { jsx as n, Fragment as N, jsxs as p } from "react/jsx-runtime";
import { useRef as S, useState as L, useEffect as k } from "react";
import { f as j, A as B, c as M } from "../../../chunks/index.js";
import { useNavigate as U } from "react-router-dom";
import { a as V } from "../../../chunks/index2.js";
const E = "palmyra.rui.sidemenu.expanded", v = "palmyra.rui.sidemenu.expanded.selected";
function X(h) {
  const o = U(), g = S(null);
  let u = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [d, y] = L({ data: [u], expandedIds: [], selectedId: [] }), A = h.store, i = S([]), b = (e, r, a) => e.map((s) => (s.id === r && !s.loaded && (s.loaded = !0, s.children = a.filter((l) => r == l.parent).map((l) => l.id)), s)).concat(a), w = (e) => e.split(",").map((a) => parseInt(a)), C = (e, r) => e && Array.isArray(e) ? e.map((t) => {
    const s = t.children || "";
    return {
      id: t.id,
      name: t.name,
      parent: t.parent ? t.parent : r,
      children: t.children ? w(t.children) : [],
      isBranch: s.length > 0,
      loaded: !0,
      metadata: {
        code: t.code,
        action: t.action,
        target: t.target
      }
    };
  }) : [];
  function x(e) {
    return typeof e == "number" ? e : parseInt(e);
  }
  k(() => {
    A.getRoot().then((e) => {
      var r = C(e.result, -1);
      const a = b(d.data, -1, r), t = (localStorage.getItem(E) || "").split(",");
      i.current = t.map((c) => x(c)).filter((c) => r.some((m) => m.id == c));
      const l = (localStorage.getItem(v) || "").split(",").map((c) => x(c)).filter((c) => r.some((m) => m.id == c));
      y({ data: a, expandedIds: i.current, selectedId: l });
    });
  }, []);
  const O = () => {
    localStorage.setItem(E, i.current.join());
  }, R = (e) => {
    localStorage.setItem(v, e);
  }, T = (e) => {
    var r, a;
    if (!e.isBranch && ((r = e.metadata) != null && r.code)) {
      const t = e.metadata.code;
      o(t);
    } else if ((a = e.metadata) != null && a.target) {
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
    /* @__PURE__ */ n("div", { className: "checkbox", children: /* @__PURE__ */ n(
      j,
      {
        className: "async-tree-menu-container",
        data: d.data,
        "aria-label": "Checkbox tree",
        onExpand: (e) => {
          const r = e.isExpanded, a = e.element;
          if (r)
            a.id != "" && (i.current.includes(a.id) || i.current.push(a.id));
          else {
            const t = i.current.indexOf(a.id);
            t > -1 && i.current.splice(t, 1);
          }
          O();
        },
        onSelect: (e) => {
          const r = e.isSelected, a = e.element;
          r && !e.isHalfSelected && a.id !== "" && R(a.id);
        },
        propagateSelect: !1,
        togglableSelect: !0,
        multiSelect: !1,
        selectedIds: d.selectedId,
        expandedIds: d.expandedIds,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: e,
          isBranch: r,
          isExpanded: a,
          isSelected: t,
          isHalfSelected: s,
          getNodeProps: l,
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
              B,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ n(F, { isOpen: f });
          return /* @__PURE__ */ n(
            "div",
            {
              ...l({ onClick: _ }),
              style: { marginLeft: 5 * (c - 1) },
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: t ? "async-tree-menu-selected-list" : "async-tree-menu-list",
                  onClick: (f) => {
                    t || m(f), T(e);
                  },
                  children: [
                    /* @__PURE__ */ p("div", { className: "async-tree-menu-list-text-container", children: [
                      /* @__PURE__ */ n("div", { className: "menu-icon" }),
                      /* @__PURE__ */ n("span", { className: "menu-name", children: e.name })
                    ] }),
                    /* @__PURE__ */ n("div", { className: "async-tree-menu-list-arrow-container", children: r && D(a, e) })
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
  const { isOpen: o, className: g } = h, u = "arrow", d = M(
    u,
    { [`${u}--closed`]: !o },
    { [`${u}--open`]: o },
    g
  );
  return /* @__PURE__ */ n(V, { className: d });
};
export {
  X as default
};
