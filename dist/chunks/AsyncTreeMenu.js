import { g as mt } from "./_commonjsHelpers.js";
import oe, { useRef as Ee, useReducer as Lt, useEffect as se } from "react";
import '../assets/AsyncTreeMenu.css';var Ne = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var st;
function Ut() {
  return st || (st = 1, (function(t) {
    (function() {
      var e = {}.hasOwnProperty;
      function r() {
        for (var a = "", l = 0; l < arguments.length; l++) {
          var c = arguments[l];
          c && (a = s(a, n(c)));
        }
        return a;
      }
      function n(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return r.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var l = "";
        for (var c in a)
          e.call(a, c) && a[c] && (l = s(l, c));
        return l;
      }
      function s(a, l) {
        return l ? a ? a + " " + l : a + l : a;
      }
      t.exports ? (r.default = r, t.exports = r) : window.classNames = r;
    })();
  })(Ne)), Ne.exports;
}
var Nt = Ut();
const _e = /* @__PURE__ */ mt(Nt);
var xe = { exports: {} }, Ae = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function $t() {
  if (lt) return $;
  lt = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, d = t ? Symbol.for("react.async_mode") : 60111, g = t ? Symbol.for("react.concurrent_mode") : 60111, w = t ? Symbol.for("react.forward_ref") : 60112, I = t ? Symbol.for("react.suspense") : 60113, C = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, y = t ? Symbol.for("react.block") : 60121, D = t ? Symbol.for("react.fundamental") : 60117, k = t ? Symbol.for("react.responder") : 60118, L = t ? Symbol.for("react.scope") : 60119;
  function P(i) {
    if (typeof i == "object" && i !== null) {
      var W = i.$$typeof;
      switch (W) {
        case e:
          switch (i = i.type, i) {
            case d:
            case g:
            case n:
            case a:
            case s:
            case I:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case c:
                case w:
                case _:
                case E:
                case l:
                  return i;
                default:
                  return W;
              }
          }
        case r:
          return W;
      }
    }
  }
  function j(i) {
    return P(i) === g;
  }
  return $.AsyncMode = d, $.ConcurrentMode = g, $.ContextConsumer = c, $.ContextProvider = l, $.Element = e, $.ForwardRef = w, $.Fragment = n, $.Lazy = _, $.Memo = E, $.Portal = r, $.Profiler = a, $.StrictMode = s, $.Suspense = I, $.isAsyncMode = function(i) {
    return j(i) || P(i) === d;
  }, $.isConcurrentMode = j, $.isContextConsumer = function(i) {
    return P(i) === c;
  }, $.isContextProvider = function(i) {
    return P(i) === l;
  }, $.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === e;
  }, $.isForwardRef = function(i) {
    return P(i) === w;
  }, $.isFragment = function(i) {
    return P(i) === n;
  }, $.isLazy = function(i) {
    return P(i) === _;
  }, $.isMemo = function(i) {
    return P(i) === E;
  }, $.isPortal = function(i) {
    return P(i) === r;
  }, $.isProfiler = function(i) {
    return P(i) === a;
  }, $.isStrictMode = function(i) {
    return P(i) === s;
  }, $.isSuspense = function(i) {
    return P(i) === I;
  }, $.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === n || i === g || i === a || i === s || i === I || i === C || typeof i == "object" && i !== null && (i.$$typeof === _ || i.$$typeof === E || i.$$typeof === l || i.$$typeof === c || i.$$typeof === w || i.$$typeof === D || i.$$typeof === k || i.$$typeof === L || i.$$typeof === y);
  }, $.typeOf = P, $;
}
var F = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ot;
function Ft() {
  return ot || (ot = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, d = t ? Symbol.for("react.async_mode") : 60111, g = t ? Symbol.for("react.concurrent_mode") : 60111, w = t ? Symbol.for("react.forward_ref") : 60112, I = t ? Symbol.for("react.suspense") : 60113, C = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, y = t ? Symbol.for("react.block") : 60121, D = t ? Symbol.for("react.fundamental") : 60117, k = t ? Symbol.for("react.responder") : 60118, L = t ? Symbol.for("react.scope") : 60119;
    function P(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === n || f === g || f === a || f === s || f === I || f === C || typeof f == "object" && f !== null && (f.$$typeof === _ || f.$$typeof === E || f.$$typeof === l || f.$$typeof === c || f.$$typeof === w || f.$$typeof === D || f.$$typeof === k || f.$$typeof === L || f.$$typeof === y);
    }
    function j(f) {
      if (typeof f == "object" && f !== null) {
        var Q = f.$$typeof;
        switch (Q) {
          case e:
            var be = f.type;
            switch (be) {
              case d:
              case g:
              case n:
              case a:
              case s:
              case I:
                return be;
              default:
                var Se = be && be.$$typeof;
                switch (Se) {
                  case c:
                  case w:
                  case _:
                  case E:
                  case l:
                    return Se;
                  default:
                    return Q;
                }
            }
          case r:
            return Q;
        }
      }
    }
    var i = d, W = g, U = c, q = l, H = e, G = w, Y = n, N = _, M = E, x = r, z = a, B = s, X = I, ae = !1;
    function Z(f) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(f) || j(f) === d;
    }
    function o(f) {
      return j(f) === g;
    }
    function v(f) {
      return j(f) === c;
    }
    function h(f) {
      return j(f) === l;
    }
    function u(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function p(f) {
      return j(f) === w;
    }
    function S(f) {
      return j(f) === n;
    }
    function b(f) {
      return j(f) === _;
    }
    function m(f) {
      return j(f) === E;
    }
    function O(f) {
      return j(f) === r;
    }
    function A(f) {
      return j(f) === a;
    }
    function T(f) {
      return j(f) === s;
    }
    function R(f) {
      return j(f) === I;
    }
    F.AsyncMode = i, F.ConcurrentMode = W, F.ContextConsumer = U, F.ContextProvider = q, F.Element = H, F.ForwardRef = G, F.Fragment = Y, F.Lazy = N, F.Memo = M, F.Portal = x, F.Profiler = z, F.StrictMode = B, F.Suspense = X, F.isAsyncMode = Z, F.isConcurrentMode = o, F.isContextConsumer = v, F.isContextProvider = h, F.isElement = u, F.isForwardRef = p, F.isFragment = S, F.isLazy = b, F.isMemo = m, F.isPortal = O, F.isProfiler = A, F.isStrictMode = T, F.isSuspense = R, F.isValidElementType = P, F.typeOf = j;
  })()), F;
}
var ct;
function It() {
  return ct || (ct = 1, process.env.NODE_ENV === "production" ? Ae.exports = $t() : Ae.exports = Ft()), Ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var $e, dt;
function qt() {
  if (dt) return $e;
  dt = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var l = {}, c = 0; c < 10; c++)
        l["_" + String.fromCharCode(c)] = c;
      var d = Object.getOwnPropertyNames(l).map(function(w) {
        return l[w];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(w) {
        g[w] = w;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return $e = s() ? Object.assign : function(a, l) {
    for (var c, d = n(a), g, w = 1; w < arguments.length; w++) {
      c = Object(arguments[w]);
      for (var I in c)
        e.call(c, I) && (d[I] = c[I]);
      if (t) {
        g = t(c);
        for (var C = 0; C < g.length; C++)
          r.call(c, g[C]) && (d[g[C]] = c[g[C]]);
      }
    }
    return d;
  }, $e;
}
var Fe, ut;
function Je() {
  if (ut) return Fe;
  ut = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Fe = t, Fe;
}
var qe, ft;
function Et() {
  return ft || (ft = 1, qe = Function.call.bind(Object.prototype.hasOwnProperty)), qe;
}
var Ye, pt;
function Yt() {
  if (pt) return Ye;
  pt = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = /* @__PURE__ */ Je(), r = {}, n = /* @__PURE__ */ Et();
    t = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function s(a, l, c, d, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var w in a)
        if (n(a, w)) {
          var I;
          try {
            if (typeof a[w] != "function") {
              var C = Error(
                (d || "React class") + ": " + c + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw C.name = "Invariant Violation", C;
            }
            I = a[w](l, w, d, c, null, e);
          } catch (_) {
            I = _;
          }
          if (I && !(I instanceof Error) && t(
            (d || "React class") + ": type specification of " + c + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof I + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), I instanceof Error && !(I.message in r)) {
            r[I.message] = !0;
            var E = g ? g() : "";
            t(
              "Failed " + c + " type: " + I.message + (E ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ye = s, Ye;
}
var ze, yt;
function zt() {
  if (yt) return ze;
  yt = 1;
  var t = It(), e = qt(), r = /* @__PURE__ */ Je(), n = /* @__PURE__ */ Et(), s = /* @__PURE__ */ Yt(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var d = "Warning: " + c;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return ze = function(c, d) {
    var g = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
    function I(o) {
      var v = o && (g && o[g] || o[w]);
      if (typeof v == "function")
        return v;
    }
    var C = "<<anonymous>>", E = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: L(),
      arrayOf: P,
      element: j(),
      elementType: i(),
      instanceOf: W,
      node: G(),
      objectOf: q,
      oneOf: U,
      oneOfType: H,
      shape: N,
      exact: M
    };
    function _(o, v) {
      return o === v ? o !== 0 || 1 / o === 1 / v : o !== o && v !== v;
    }
    function y(o, v) {
      this.message = o, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function D(o) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, h = 0;
      function u(S, b, m, O, A, T, R) {
        if (O = O || C, T = T || m, R !== r) {
          if (d) {
            var f = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw f.name = "Invariant Violation", f;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = O + ":" + m;
            !v[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            h < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[Q] = !0, h++);
          }
        }
        return b[m] == null ? S ? b[m] === null ? new y("The " + A + " `" + T + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new y("The " + A + " `" + T + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : o(b, m, O, A, T);
      }
      var p = u.bind(null, !1);
      return p.isRequired = u.bind(null, !0), p;
    }
    function k(o) {
      function v(h, u, p, S, b, m) {
        var O = h[u], A = B(O);
        if (A !== o) {
          var T = X(O);
          return new y(
            "Invalid " + S + " `" + b + "` of type " + ("`" + T + "` supplied to `" + p + "`, expected ") + ("`" + o + "`."),
            { expectedType: o }
          );
        }
        return null;
      }
      return D(v);
    }
    function L() {
      return D(l);
    }
    function P(o) {
      function v(h, u, p, S, b) {
        if (typeof o != "function")
          return new y("Property `" + b + "` of component `" + p + "` has invalid PropType notation inside arrayOf.");
        var m = h[u];
        if (!Array.isArray(m)) {
          var O = B(m);
          return new y("Invalid " + S + " `" + b + "` of type " + ("`" + O + "` supplied to `" + p + "`, expected an array."));
        }
        for (var A = 0; A < m.length; A++) {
          var T = o(m, A, p, S, b + "[" + A + "]", r);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return D(v);
    }
    function j() {
      function o(v, h, u, p, S) {
        var b = v[h];
        if (!c(b)) {
          var m = B(b);
          return new y("Invalid " + p + " `" + S + "` of type " + ("`" + m + "` supplied to `" + u + "`, expected a single ReactElement."));
        }
        return null;
      }
      return D(o);
    }
    function i() {
      function o(v, h, u, p, S) {
        var b = v[h];
        if (!t.isValidElementType(b)) {
          var m = B(b);
          return new y("Invalid " + p + " `" + S + "` of type " + ("`" + m + "` supplied to `" + u + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return D(o);
    }
    function W(o) {
      function v(h, u, p, S, b) {
        if (!(h[u] instanceof o)) {
          var m = o.name || C, O = Z(h[u]);
          return new y("Invalid " + S + " `" + b + "` of type " + ("`" + O + "` supplied to `" + p + "`, expected ") + ("instance of `" + m + "`."));
        }
        return null;
      }
      return D(v);
    }
    function U(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function v(h, u, p, S, b) {
        for (var m = h[u], O = 0; O < o.length; O++)
          if (_(m, o[O]))
            return null;
        var A = JSON.stringify(o, function(R, f) {
          var Q = X(f);
          return Q === "symbol" ? String(f) : f;
        });
        return new y("Invalid " + S + " `" + b + "` of value `" + String(m) + "` " + ("supplied to `" + p + "`, expected one of " + A + "."));
      }
      return D(v);
    }
    function q(o) {
      function v(h, u, p, S, b) {
        if (typeof o != "function")
          return new y("Property `" + b + "` of component `" + p + "` has invalid PropType notation inside objectOf.");
        var m = h[u], O = B(m);
        if (O !== "object")
          return new y("Invalid " + S + " `" + b + "` of type " + ("`" + O + "` supplied to `" + p + "`, expected an object."));
        for (var A in m)
          if (n(m, A)) {
            var T = o(m, A, p, S, b + "." + A, r);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return D(v);
    }
    function H(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var v = 0; v < o.length; v++) {
        var h = o[v];
        if (typeof h != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(h) + " at index " + v + "."
          ), l;
      }
      function u(p, S, b, m, O) {
        for (var A = [], T = 0; T < o.length; T++) {
          var R = o[T], f = R(p, S, b, m, O, r);
          if (f == null)
            return null;
          f.data && n(f.data, "expectedType") && A.push(f.data.expectedType);
        }
        var Q = A.length > 0 ? ", expected one of type [" + A.join(", ") + "]" : "";
        return new y("Invalid " + m + " `" + O + "` supplied to " + ("`" + b + "`" + Q + "."));
      }
      return D(u);
    }
    function G() {
      function o(v, h, u, p, S) {
        return x(v[h]) ? null : new y("Invalid " + p + " `" + S + "` supplied to " + ("`" + u + "`, expected a ReactNode."));
      }
      return D(o);
    }
    function Y(o, v, h, u, p) {
      return new y(
        (o || "React class") + ": " + v + " type `" + h + "." + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + p + "`."
      );
    }
    function N(o) {
      function v(h, u, p, S, b) {
        var m = h[u], O = B(m);
        if (O !== "object")
          return new y("Invalid " + S + " `" + b + "` of type `" + O + "` " + ("supplied to `" + p + "`, expected `object`."));
        for (var A in o) {
          var T = o[A];
          if (typeof T != "function")
            return Y(p, S, b, A, X(T));
          var R = T(m, A, p, S, b + "." + A, r);
          if (R)
            return R;
        }
        return null;
      }
      return D(v);
    }
    function M(o) {
      function v(h, u, p, S, b) {
        var m = h[u], O = B(m);
        if (O !== "object")
          return new y("Invalid " + S + " `" + b + "` of type `" + O + "` " + ("supplied to `" + p + "`, expected `object`."));
        var A = e({}, h[u], o);
        for (var T in A) {
          var R = o[T];
          if (n(o, T) && typeof R != "function")
            return Y(p, S, b, T, X(R));
          if (!R)
            return new y(
              "Invalid " + S + " `" + b + "` key `" + T + "` supplied to `" + p + "`.\nBad object: " + JSON.stringify(h[u], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(o), null, "  ")
            );
          var f = R(m, T, p, S, b + "." + T, r);
          if (f)
            return f;
        }
        return null;
      }
      return D(v);
    }
    function x(o) {
      switch (typeof o) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !o;
        case "object":
          if (Array.isArray(o))
            return o.every(x);
          if (o === null || c(o))
            return !0;
          var v = I(o);
          if (v) {
            var h = v.call(o), u;
            if (v !== o.entries) {
              for (; !(u = h.next()).done; )
                if (!x(u.value))
                  return !1;
            } else
              for (; !(u = h.next()).done; ) {
                var p = u.value;
                if (p && !x(p[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function z(o, v) {
      return o === "symbol" ? !0 : v ? v["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && v instanceof Symbol : !1;
    }
    function B(o) {
      var v = typeof o;
      return Array.isArray(o) ? "array" : o instanceof RegExp ? "object" : z(v, o) ? "symbol" : v;
    }
    function X(o) {
      if (typeof o > "u" || o === null)
        return "" + o;
      var v = B(o);
      if (v === "object") {
        if (o instanceof Date)
          return "date";
        if (o instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function ae(o) {
      var v = X(o);
      switch (v) {
        case "array":
        case "object":
          return "an " + v;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + v;
        default:
          return v;
      }
    }
    function Z(o) {
      return !o.constructor || !o.constructor.name ? C : o.constructor.name;
    }
    return E.checkPropTypes = s, E.resetWarningCache = s.resetWarningCache, E.PropTypes = E, E;
  }, ze;
}
var Be, vt;
function Bt() {
  if (vt) return Be;
  vt = 1;
  var t = /* @__PURE__ */ Je();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, Be = function() {
    function n(l, c, d, g, w, I) {
      if (I !== t) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    n.isRequired = n;
    function s() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: s,
      element: n,
      elementType: n,
      instanceOf: s,
      node: n,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: r,
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, Be;
}
var ht;
function Ht() {
  if (ht) return xe.exports;
  if (ht = 1, process.env.NODE_ENV !== "production") {
    var t = It(), e = !0;
    xe.exports = /* @__PURE__ */ zt()(t.isElement, e);
  } else
    xe.exports = /* @__PURE__ */ Bt()();
  return xe.exports;
}
var Vt = /* @__PURE__ */ Ht();
const K = /* @__PURE__ */ mt(Vt);
function Ze(t) {
  return (Ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(t);
}
function He(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function wt(t, e) {
  return (function(r) {
    if (Array.isArray(r)) return r;
  })(t) || (function(r, n) {
    var s = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
    if (s != null) {
      var a, l, c = [], d = !0, g = !1;
      try {
        for (s = s.call(r); !(d = (a = s.next()).done) && (c.push(a.value), !n || c.length !== n); d = !0) ;
      } catch (w) {
        g = !0, l = w;
      } finally {
        try {
          d || s.return == null || s.return();
        } finally {
          if (g) throw l;
        }
      }
      return c;
    }
  })(t, e) || Qe(t, e) || (function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function le(t) {
  return (function(e) {
    if (Array.isArray(e)) return Ke(e);
  })(t) || (function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  })(t) || Qe(t) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function Qe(t, e) {
  if (t) {
    if (typeof t == "string") return Ke(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ke(t, e) : void 0;
  }
}
function Ke(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function ne(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = Qe(t)) || e) {
      r && (t = r);
      var n = 0, s = function() {
      };
      return { s, n: function() {
        return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
      }, e: function(d) {
        throw d;
      }, f: s };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a, l = !0, c = !1;
  return { s: function() {
    r = r.call(t);
  }, n: function() {
    var d = r.next();
    return l = d.done, d;
  }, e: function(d) {
    c = !0, a = d;
  }, f: function() {
    try {
      l || r.return == null || r.return();
    } finally {
      if (c) throw a;
    }
  } };
}
function et(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var s = 0;
    for (n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  }
  return r;
}
var bt = { root: "tree", node: "tree-node", branch: "tree-node__branch", branchWrapper: "tree-branch-wrapper", leafListItem: "tree-leaf-list-item", leaf: "tree-node__leaf", nodeGroup: "tree-node-group" }, ce = { select: "SELECT", focus: "FOCUS", exclusiveSelect: "EXCLUSIVE_SELECT" }, Kt = Object.freeze(Object.values(ce)), Gt = Object.freeze(Object.values({ check: "check", select: "select" })), tt = "COLLAPSE", We = "COLLAPSE_MANY", je = "EXPAND", Re = "EXPAND_MANY", rt = "HALF_SELECT", we = "SELECT", Tt = "DESELECT", Me = "TOGGLE", Pe = "TOGGLE_SELECT", ue = "SELECT_MANY", Ot = "EXCLUSIVE_CHANGE_SELECT_MANY", re = "FOCUS", xt = "CLEAR_FOCUS", At = "BLUR", Xt = "DISABLE", Jt = "ENABLE", Ct = "CLEAR_MANUALLY_TOGGLED", _t = "CONTROLLED_SELECT_MANY", jt = "UPDATE_TREE_STATE_WHEN_DATA_CHANGED", ge = function() {
}, Ve = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
  return function(n) {
    for (var s = 0, a = e; s < a.length; s++) {
      var l = a[s];
      if (l && l(n), n.defaultPrevented) break;
    }
  };
}, ye = function(t, e) {
  var r, n = /* @__PURE__ */ new Set(), s = ne(t);
  try {
    for (s.s(); !(r = s.n()).done; ) {
      var a = r.value;
      e.has(a) || n.add(a);
    }
  } catch (l) {
    s.e(l);
  } finally {
    s.f();
  }
  return n;
}, Ce = function(t, e) {
  return new Set([].concat(le(ye(t, e)), le(ye(e, t))));
}, St = function(t) {
  var e = Ee();
  return se((function() {
    e.current = t;
  }), [t]), e.current;
}, ee = function(t, e) {
  var r;
  return !!(!((r = V(t, e).children) === null || r === void 0) && r.length);
}, fe = function(t, e) {
  return V(t, e).parent;
}, Zt = function(t, e, r) {
  for (var n = e, s = []; ; ) {
    var a = fe(t, n);
    if (a === 0 || a == null || a != null && r.has(a)) break;
    s.push(a), n = a;
  }
  return s;
}, he = function(t, e, r) {
  var n = [];
  return (function s(a, l) {
    var c = V(a, l);
    if (c.children != null) {
      var d, g = ne(c.children.filter((function(I) {
        return !r.has(I);
      })));
      try {
        for (g.s(); !(d = g.n()).done; ) {
          var w = d.value;
          n.push(w), s(a, w);
        }
      } catch (I) {
        g.e(I);
      } finally {
        g.f();
      }
    }
  })(t, e), n;
}, Rt = function(t, e) {
  var r = V(t, e);
  return r.children == null ? [] : r.children;
}, Pt = function(t, e, r) {
  var n = fe(t, e);
  if (n != null) {
    var s = V(t, n), a = s.children.indexOf(e) + r;
    if (s.children[a]) return s.children[a];
  }
  return null;
}, Ge = function(t, e, r) {
  var n = V(t, e);
  for (ie(t).id === e && (n = V(t, V(t, e).children[V(t, e).children.length - 1])); r.has(n.id) && ee(t, n.id); ) n = V(t, n.children[n.children.length - 1]);
  return n.id;
}, Xe = function(t, e, r) {
  if (e === ie(t).children[0]) return null;
  var n = Pt(t, e, -1);
  return n == null ? fe(t, e) : Ge(t, n, r);
}, Ie = function(t, e, r) {
  var n = V(t, e).id;
  if (ee(t, n) && r.has(n)) return V(t, n).children[0];
  for (; ; ) {
    var s = Pt(t, n, 1);
    if (s != null) return s;
    if ((n = fe(t, n)) == null) return null;
  }
}, Wt = function(t) {
  var e = t.data, r = t.expandedIds, n = t.from, s = t.to, a = [], l = e.length, c = 0, d = n;
  if (a.push(n), n < s) for (; c < l && ((d = Ie(e, d, r)) != null && a.push(d), d != null && d !== s); ) c += 1;
  else if (n > s) for (; c < l && ((d = Xe(e, d, r)) != null && a.push(d), d != null && d !== s); ) c += 1;
  return a;
}, Qt = function(t) {
  var e = t.isSelected, r = t.isDisabled, n = t.multiSelect;
  return r || n ? e : !!e || void 0;
}, er = function(t) {
  var e = t.isSelected, r = t.isDisabled, n = t.isHalfSelected, s = t.multiSelect;
  return r ? e : n ? "mixed" : s ? e : !!e || void 0;
}, ve = function(t, e, r) {
  return e.concat.apply(e, le(e.filter((function(n) {
    return ee(t, n);
  })).map((function(n) {
    return he(t, n, r);
  }))));
}, tr = function(t, e, r) {
  e != null ? window.navigator.userAgent.match(/Trident/) ? setTimeout((function() {
    return !e.contains(document.activeElement) && r();
  }), 0) : !e.contains(t.nativeEvent.relatedTarget) && r() : console.warn("ref not set on <ul>");
}, rr = function(t, e, r) {
  var n = Rt(t, e);
  return ee(t, e) && !r.has(e) && n.length === 1 && n.every((function(s) {
    return r.has(s);
  }));
}, Mt = function(t, e, r, n) {
  var s = (function(l, c, d) {
    return ee(l, c) && d.has(c) && he(l, c, /* @__PURE__ */ new Set()).some((function(g) {
      return d.has(g);
    }));
  })(t, e, r), a = (function(l, c, d) {
    var g = Rt(l, c);
    return ee(l, c) && d.has(c) && g.length === 1 && g.every((function(w) {
      return d.has(w);
    }));
  })(t, e, r);
  return (function(l, c, d, g) {
    var w = he(l, c, /* @__PURE__ */ new Set());
    return ee(l, c) && d.has(c) && w.every((function(I) {
      return d.has(I);
    })) && w.every((function(I) {
      return !g.has(I);
    }));
  })(t, e, r, n) ? Pe : s && !a ? rt : Pe;
}, ie = function(t) {
  var e = t.find((function(r) {
    return r.parent === null;
  }));
  if (!e) throw Error("TreeView data must contain parent node.");
  return e;
}, V = function(t, e) {
  var r = t.find((function(n) {
    return n.id === e;
  }));
  if (r == null) throw Error("Node with id=".concat(e, " doesn't exist in the tree."));
  return r;
}, gt = function(t) {
  var e = Array.from(new Set(t));
  return t.length !== e.length;
}, nr = function(t, e) {
  switch (e.type) {
    case tt:
      var r = new Set(t.expandedIds);
      return r.delete(e.id), Object.assign(Object.assign({}, t), { expandedIds: r, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case We:
      var n, s = new Set(t.expandedIds), a = ne(e.ids);
      try {
        for (a.s(); !(n = a.n()).done; ) {
          var l = n.value;
          s.delete(l);
        }
      } catch (Z) {
        a.e(Z);
      } finally {
        a.f();
      }
      return Object.assign(Object.assign({}, t), { expandedIds: s, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case je:
      var c = new Set(t.expandedIds);
      return c.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: c, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Re:
      var d = new Set([].concat(le(t.expandedIds), le(e.ids)));
      return Object.assign(Object.assign({}, t), { expandedIds: d, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Me:
      var g = new Set(t.expandedIds);
      return t.expandedIds.has(e.id) ? g.delete(e.id) : g.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: g, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case rt:
      if (t.disabledIds.has(e.id)) return t;
      var w = new Set(t.halfSelectedIds), I = new Set(t.selectedIds);
      return w.add(e.id), I.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: I, halfSelectedIds: w, tabbableId: e.keepFocus ? t.tabbableId : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id });
    case we:
      if (!e.NotUserAction && t.disabledIds.has(e.id)) return t;
      var C;
      e.multiSelect ? (C = new Set(t.selectedIds)).add(e.id) : (C = /* @__PURE__ */ new Set()).add(e.id);
      var E = new Set(t.halfSelectedIds);
      E.delete(e.id);
      var _ = e.keepFocus ? t.tabbableId : e.id, y = _ === e.lastInteractedWith || e.NotUserAction !== !0;
      return Object.assign(Object.assign({}, t), { selectedIds: C, halfSelectedIds: E, tabbableId: _, isFocused: y, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case Tt:
      if (!e.NotUserAction && t.disabledIds.has(e.id)) return t;
      var D, k = new Set(t.selectedIds);
      return k.delete(e.id), e.multiSelect ? (D = new Set(t.halfSelectedIds)).delete(e.id) : D = /* @__PURE__ */ new Set(), Object.assign(Object.assign({}, t), { selectedIds: k, halfSelectedIds: D, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case Pe:
      if (t.disabledIds.has(e.id)) return t;
      var L, P = t.selectedIds.has(e.id);
      e.multiSelect ? (L = new Set(t.selectedIds), P ? L.delete(e.id) : L.add(e.id)) : (L = /* @__PURE__ */ new Set(), P || L.add(e.id));
      var j = new Set(t.halfSelectedIds);
      return j.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: L, halfSelectedIds: j, tabbableId: e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case ue:
      var i, W = e.ids.filter((function(Z) {
        return !t.disabledIds.has(Z);
      }));
      if (e.multiSelect) {
        i = e.select ? new Set([].concat(le(t.selectedIds), le(W))) : ye(t.selectedIds, new Set(W));
        var U = ye(t.halfSelectedIds, i);
        return Object.assign(Object.assign({}, t), { selectedIds: i, halfSelectedIds: U, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case Ot:
      var q, H = e.ids.filter((function(Z) {
        return !t.disabledIds.has(Z);
      }));
      if (e.multiSelect) {
        q = e.select ? new Set(H) : ye(t.selectedIds, new Set(H));
        var G = ye(t.halfSelectedIds, q);
        return Object.assign(Object.assign({}, t), { selectedIds: q, halfSelectedIds: G, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case _t:
      var Y, N = t.lastInteractedWith, M = t.tabbableId;
      if (e.multiSelect) Y = new Set(e.ids), e.ids.length && (N = e.ids[e.ids.length - 1], M = e.ids[e.ids.length - 1]);
      else {
        Y = /* @__PURE__ */ new Set(), e.ids.length > 1 && console.warn("Tree in singleSelect mode, only the first item from selectedIds will be selected.");
        var x = e.ids[0];
        x && Y.add(x), N = x ?? N, M = x ?? N;
      }
      var z = new Set(t.halfSelectedIds);
      e.ids.every((function(Z) {
        return z.delete(Z);
      }));
      var B = new Set(e.ids);
      return Object.assign(Object.assign({}, t), { selectedIds: Y, halfSelectedIds: z, controlledIds: B, isFocused: !0, lastAction: e.type, tabbableId: M, lastInteractedWith: N });
    case re:
      return Object.assign(Object.assign({}, t), { tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case At:
      return Object.assign(Object.assign({}, t), { isFocused: !1 });
    case xt:
      return Object.assign(Object.assign({}, t), { isFocused: !1, lastInteractedWith: null, tabbableId: e.id });
    case Xt:
      var X = new Set(t.disabledIds);
      return X.add(e.id), Object.assign(Object.assign({}, t), { disabledIds: X });
    case Jt:
      var ae = new Set(t.disabledIds);
      return ae.delete(e.id), Object.assign(Object.assign({}, t), { disabledIds: ae });
    case Ct:
      return Object.assign(Object.assign({}, t), { lastManuallyToggled: null });
    case jt:
      return Object.assign(Object.assign({}, t), { tabbableId: e.tabbableId, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.lastUserSelect });
    default:
      throw new Error("Invalid action passed to the reducer");
  }
}, Dt = function(t) {
  var e = t.element, r = t.dispatch, n = t.data, s = t.selectedIds, a = t.tabbableId, l = t.isFocused, c = t.expandedIds, d = t.disabledIds, g = t.halfSelectedIds, w = t.lastUserSelect, I = t.nodeRefs, C = t.leafRefs, E = t.baseClassNames, _ = t.nodeRenderer, y = t.nodeAction, D = t.setsize, k = t.posinset, L = t.level, P = t.propagateCollapse, j = t.propagateSelect, i = t.multiSelect, W = t.togglableSelect, U = t.clickAction, q = t.state, H = function(x) {
    if (!(x.ctrlKey || x.altKey || x.shiftKey)) if (c.has(e.id) && P) {
      var z = [e.id].concat(le(he(n, e.id, /* @__PURE__ */ new Set())));
      r({ type: We, ids: z, lastInteractedWith: e.id });
    } else r({ type: Me, id: e.id, lastInteractedWith: e.id });
  }, G = function() {
    return r({ type: re, id: e.id, lastInteractedWith: e.id });
  }, Y = function(x) {
    if (x.shiftKey) {
      var z = Wt({ data: n, expandedIds: c, from: w, to: e.id }).filter((function(B) {
        return !d.has(B);
      }));
      z = j ? ve(n, z, d) : z, r({ type: Ot, select: !0, multiSelect: i, ids: z, lastInteractedWith: e.id, lastManuallyToggled: e.id });
    } else x.ctrlKey || U === ce.select ? (r({ type: W ? Mt(n, e.id, s, d) : we, id: e.id, multiSelect: i, lastInteractedWith: e.id, lastManuallyToggled: e.id }), j && !d.has(e.id) && r({ type: ue, ids: ve(n, [e.id], d), select: !W || !s.has(e.id), multiSelect: i, lastInteractedWith: e.id, lastManuallyToggled: e.id })) : U === ce.exclusiveSelect ? r({ type: W ? Pe : we, id: e.id, multiSelect: !1, lastInteractedWith: e.id, lastManuallyToggled: e.id }) : U === ce.focus && r({ type: re, id: e.id, lastInteractedWith: e.id });
  }, N = function(x) {
    var z;
    return _e(x, (He(z = {}, "".concat(x, "--expanded"), c.has(e.id)), He(z, "".concat(x, "--selected"), s.has(e.id)), He(z, "".concat(x, "--focused"), a === e.id && l), z));
  }, M = y === "select" ? { "aria-selected": Qt({ isSelected: s.has(e.id), isDisabled: d.has(e.id), multiSelect: i }) } : { "aria-checked": er({ isSelected: s.has(e.id), isDisabled: d.has(e.id), isHalfSelected: g.has(e.id), multiSelect: i }) };
  return ee(n, e.id) || e.isBranch ? oe.createElement("li", Object.assign({ role: "treeitem", "aria-expanded": c.has(e.id), "aria-setsize": D, "aria-posinset": k, "aria-level": L, "aria-disabled": d.has(e.id), tabIndex: a === e.id ? 0 : -1, ref: function(x) {
    I?.current != null && x != null && (I.current[e.id] = x);
  }, className: E.branchWrapper }, M), oe.createElement(oe.Fragment, null, _({ element: e, isBranch: !0, isSelected: s.has(e.id), isHalfSelected: g.has(e.id), isExpanded: c.has(e.id), isDisabled: d.has(e.id), dispatch: r, getNodeProps: function() {
    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = x.onClick;
    return { onClick: z == null ? Ve(Y, H, G) : Ve(z, G), className: _e(N(E.node), E.branch), ref: function(B) {
      C?.current != null && (C.current[e.id] = B);
    } };
  }, setsize: D, posinset: k, level: L, handleSelect: Y, handleExpand: H, treeState: q }), oe.createElement(ar, Object.assign({ getClasses: N }, (function(x) {
    return x.setsize, x.posinset, et(x, ["setsize", "posinset"]);
  })(t))))) : oe.createElement("li", { role: "none", className: N(E.leafListItem) }, _({ element: e, isBranch: !1, isSelected: s.has(e.id), isHalfSelected: !1, isExpanded: !1, isDisabled: d.has(e.id), dispatch: r, getNodeProps: function() {
    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = x.onClick;
    return Object.assign({ role: "treeitem", tabIndex: a === e.id ? 0 : -1, onClick: Ve(z ?? Y, G), ref: function(B) {
      I?.current != null && C?.current != null && (I.current[e.id] = B, C.current[e.id] = B);
    }, className: _e(N(E.node), E.leaf), "aria-setsize": D, "aria-posinset": k, "aria-level": L, disabled: d.has(e.id), "aria-disabled": d.has(e.id) }, M);
  }, setsize: D, posinset: k, level: L, handleSelect: Y, handleExpand: ge, treeState: q }));
}, ar = function(t) {
  var e = t.data, r = t.element, n = t.expandedIds, s = t.getClasses, a = t.baseClassNames, l = t.level, c = et(t, ["data", "element", "expandedIds", "getClasses", "baseClassNames", "level"]);
  return oe.createElement("ul", { role: "group", className: s(a.nodeGroup) }, n.has(r.id) && r.children.length > 0 && r.children.map((function(d, g) {
    return oe.createElement(Dt, Object.assign({ data: e, expandedIds: n, baseClassNames: a, key: "".concat(d, "-").concat(Ze(d)), element: V(e, d), setsize: r.children.length, posinset: g + 1, level: l + 1 }, c));
  })));
}, ir = function(t) {
  var e = t.data, r = t.controlledSelectedIds, n = t.controlledExpandedIds, s = t.defaultExpandedIds, a = t.defaultSelectedIds, l = t.defaultDisabledIds, c = t.nodeRefs, d = t.leafRefs, g = t.onSelect, w = t.onNodeSelect, I = t.onExpand, C = t.onLoadData, E = t.togglableSelect, _ = t.multiSelect, y = t.propagateSelect, D = t.propagateSelectUpwards, k = t.treeRef, L = t.focusedId, P = ie(e), j = wt(Lt(nr, { selectedIds: new Set(r || a), controlledIds: new Set(r), tabbableId: P.children[0], isFocused: !1, expandedIds: new Set(n || s), halfSelectedIds: /* @__PURE__ */ new Set(), lastUserSelect: P.children[0], lastInteractedWith: null, lastManuallyToggled: null, disabledIds: new Set(l) }), 2), i = j[0], W = j[1], U = i.selectedIds, q = i.expandedIds, H = i.disabledIds, G = i.tabbableId, Y = i.halfSelectedIds, N = i.lastAction, M = i.lastInteractedWith, x = i.lastManuallyToggled, z = St(U) || /* @__PURE__ */ new Set(), B = Ce(U, z);
  se((function() {
    var h;
    if (g != null && g !== ge) {
      var u, p = ne(B);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value, b = ee(e, S) || !!(!((h = V(e, G)) === null || h === void 0) && h.isBranch);
          g({ element: V(e, S), isBranch: b, isExpanded: !!b && q.has(S), isSelected: U.has(S), isDisabled: H.has(S), isHalfSelected: !!b && Y.has(S), treeState: i });
        }
      } catch (m) {
        p.e(m);
      } finally {
        p.f();
      }
    }
  }), [e, U, q, H, Y, B, g, i]), se((function() {
    w != null && w !== ge && x != null && B.size && (w({ element: V(e, x), isSelected: U.has(x), isBranch: ee(e, x), treeState: i }), W({ type: Ct }));
  }), [x, U, B]);
  var X = St(q) || /* @__PURE__ */ new Set();
  se((function() {
    var h = Ce(q, X);
    if (I != null && I !== ge) {
      var u, p = ne(h);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value;
          I({ element: V(e, S), isExpanded: q.has(S), isSelected: U.has(S), isDisabled: H.has(S), isHalfSelected: Y.has(S), treeState: i });
        }
      } catch (b) {
        p.e(b);
      } finally {
        p.f();
      }
    }
  }), [e, U, q, H, Y, X, I, i]);
  var ae, Z, o = (ae = e, Z = Ee(), se((function() {
    Z.current = ae;
  })), Z.current || /* @__PURE__ */ new Map());
  se((function() {
    var h = Ce(q, X);
    if (C) {
      var u, p = ne(h);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value;
          C({ element: V(e, S), isExpanded: q.has(S), isSelected: U.has(S), isDisabled: H.has(S), isHalfSelected: Y.has(S), treeState: i });
        }
      } catch (A) {
        p.e(A);
      } finally {
        p.f();
      }
      if (o !== e && E && y) {
        var b, m = ne(q);
        try {
          for (m.s(); !(b = m.n()).done; ) {
            var O = b.value;
            U.has(O) && W({ type: ue, ids: ve(e, [O], H), select: !0, multiSelect: _, lastInteractedWith: O });
          }
        } catch (A) {
          m.e(A);
        } finally {
          m.f();
        }
      }
    }
  }), [e, U, q, H, Y, X, C, i]), se((function() {
    if (o !== e) {
      var h = ie(e);
      h.children.length && W({ type: jt, tabbableId: e.find((function(u) {
        return u.id === i.tabbableId;
      })) ? i.tabbableId : h.children[0], lastInteractedWith: e.find((function(u) {
        return u.id === i.lastInteractedWith;
      })) ? i.lastInteractedWith : null, lastManuallyToggled: e.find((function(u) {
        return u.id === i.lastManuallyToggled;
      })) ? i.lastManuallyToggled : null, lastUserSelect: e.find((function(u) {
        return u.id === i.lastUserSelect;
      })) ? i.lastUserSelect : h.children[0] });
    }
  }), [e]);
  var v = Ce(new Set(r), U);
  return se((function() {
    var h = r || a;
    if (r && v.size && W({ type: _t, ids: r, multiSelect: _ }), h) {
      var u, p = ne(h);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value;
          y && !H.has(S) && W({ type: ue, ids: ve(e, [S], H), select: !0, multiSelect: _, lastInteractedWith: S });
        }
      } catch (b) {
        p.e(b);
      } finally {
        p.f();
      }
    }
  }), [r]), se((function() {
    var h = new Set(n), u = ye(h, X), p = ye(X, h);
    if (p.size) {
      var S, b = ne(p);
      try {
        for (b.s(); !(S = b.n()).done; ) {
          var m = S.value;
          if (ee(e, m) || V(e, m).isBranch) {
            var O = [m].concat(le(he(e, m, /* @__PURE__ */ new Set())));
            W({ type: We, ids: O, lastInteractedWith: m });
          }
        }
      } catch (Q) {
        b.e(Q);
      } finally {
        b.f();
      }
    }
    if (u.size) {
      var A, T = ne(u);
      try {
        for (T.s(); !(A = T.n()).done; ) {
          var R = A.value;
          if (ee(e, R) || V(e, R).isBranch) {
            var f = fe(e, R);
            W(f ? { type: Re, ids: [R, f], lastInteractedWith: R } : { type: je, id: R, lastInteractedWith: R });
          }
        }
      } catch (Q) {
        T.e(Q);
      } finally {
        T.f();
      }
    }
  }), [n]), se((function() {
    if (D) {
      var h = new Set(le(B));
      M && N !== re && N !== tt && N !== je && N !== Me && h.add(M);
      var u = [];
      h.forEach((function(J) {
        e.find((function(me) {
          return me.id === J;
        })) || u.push(J);
      })), u.forEach((function(J) {
        return h.delete(J);
      }));
      var p = (function(J, me, ke, Te, nt, kt) {
        var at, pe = { every: /* @__PURE__ */ new Set(), some: /* @__PURE__ */ new Set(), none: /* @__PURE__ */ new Set() }, Oe = ne(me);
        try {
          for (Oe.s(); !(at = Oe.n()).done; ) for (var Le = at.value; ; ) {
            var de = fe(J, Le);
            if (de === 0 || de == null || de != null && Te.has(de)) break;
            var Ue = V(J, de).children.filter((function(te) {
              return !Te.has(te);
            }));
            if (Ue.length === 0) break;
            if (Ue.some((function(te) {
              return ke.has(te) || pe.some.has(te) && !pe.none.has(te) || nt.has(te) && !pe.none.has(te);
            }))) Ue.every((function(te) {
              return ke.has(te);
            })) ? pe.every.add(de) : pe.some.add(de);
            else {
              var it = Zt(J, Le, Te).find((function(te) {
                return ke.has(te);
              }));
              if (!kt && it) {
                he(J, it, Te).forEach((function(te) {
                  nt.has(te) && pe.none.add(te);
                }));
                break;
              }
              pe.none.add(de);
            }
            Le = de;
          }
        } catch (te) {
          Oe.e(te);
        } finally {
          Oe.f();
        }
        return pe;
      })(e, h, U, H, Y, _), S = p.every, b = p.some, m = p.none;
      r && h.forEach((function(J) {
        ee(e, J) && he(e, J, /* @__PURE__ */ new Set()).every((function(me) {
          return U.has(me);
        })) && S.add(J);
      }));
      var O, A = ne(S);
      try {
        for (A.s(); !(O = A.n()).done; ) {
          var T = O.value;
          U.has(T) || W({ type: we, id: T, multiSelect: _ || rr(e, T, U), keepFocus: !0, NotUserAction: !0, lastInteractedWith: M });
        }
      } catch (J) {
        A.e(J);
      } finally {
        A.f();
      }
      var R, f = ne(b);
      try {
        for (f.s(); !(R = f.n()).done; ) {
          var Q = R.value;
          Y.has(Q) || W({ type: rt, id: Q, lastInteractedWith: M, keepFocus: !0, NotUserAction: !0 });
        }
      } catch (J) {
        f.e(J);
      } finally {
        f.f();
      }
      var be, Se = ne(m);
      try {
        for (Se.s(); !(be = Se.n()).done; ) {
          var De = be.value;
          (U.has(De) || Y.has(De)) && W({ type: Tt, id: De, multiSelect: _, keepFocus: !0, NotUserAction: !0, lastInteractedWith: M, lastManuallyToggled: x });
        }
      } catch (J) {
        Se.e(J);
      } finally {
        Se.f();
      }
    }
  }), [e, _, D, U, q, H, Y, N, z, B, M, v]), se((function() {
    if (M != null && G != null && c?.current != null && d?.current != null && (k?.current == null || document.activeElement && k.current.contains(document.activeElement) || L)) {
      var h = c.current[G];
      (function(u) {
        u != null && u.scrollIntoView && u.scrollIntoView({ block: "nearest" });
      })(d.current[M]), (function(u) {
        u != null && u.focus && u.focus({ preventScroll: !0 });
      })(h);
    }
  }), [G, c, d, M]), se((function() {
    if (L || W({ type: xt, id: P.children[0] }), L && e.find((function(u) {
      return u.id === L;
    }))) {
      var h = (function u(p, S) {
        var b = fe(p, S), m = b && (ee(p, b) || V(p, b).isBranch);
        return b && m ? [b].concat(le(u(p, b))) : [];
      })(e, L);
      h.length && W({ type: Re, ids: h, lastInteractedWith: L }), W({ type: re, id: L, lastInteractedWith: L });
    }
  }), [L]), [i, W];
}, sr = oe.forwardRef((function(t, e) {
  var r = t.data, n = t.selectedIds, s = t.nodeRenderer, a = t.onSelect, l = a === void 0 ? ge : a, c = t.onNodeSelect, d = c === void 0 ? ge : c, g = t.onExpand, w = g === void 0 ? ge : g, I = t.onLoadData, C = t.className, E = C === void 0 ? "" : C, _ = t.multiSelect, y = _ !== void 0 && _, D = t.propagateSelect, k = D !== void 0 && D, L = t.propagateSelectUpwards, P = L !== void 0 && L, j = t.propagateCollapse, i = j !== void 0 && j, W = t.expandOnKeyboardSelect, U = W !== void 0 && W, q = t.togglableSelect, H = q !== void 0 && q, G = t.defaultExpandedIds, Y = G === void 0 ? [] : G, N = t.defaultSelectedIds, M = N === void 0 ? [] : N, x = t.defaultDisabledIds, z = x === void 0 ? [] : x, B = t.clickAction, X = B === void 0 ? ce.select : B, ae = t.nodeAction, Z = ae === void 0 ? "select" : ae, o = t.expandedIds, v = t.focusedId, h = t.onBlur, u = et(t, ["data", "selectedIds", "nodeRenderer", "onSelect", "onNodeSelect", "onExpand", "onLoadData", "className", "multiSelect", "propagateSelect", "propagateSelectUpwards", "propagateCollapse", "expandOnKeyboardSelect", "togglableSelect", "defaultExpandedIds", "defaultSelectedIds", "defaultDisabledIds", "clickAction", "nodeAction", "expandedIds", "focusedId", "onBlur"]);
  (function(T) {
    if (gt(T.map((function(R) {
      return R.id;
    })))) throw Error("Multiple TreeView nodes have the same ID. IDs must be unique.");
    if (T.forEach((function(R) {
      if (R.id === R.parent) throw Error("Node with id=".concat(R.id, " has parent reference to itself."));
      if (gt(R.children)) throw Error("Node with id=".concat(R.id, " contains duplicate ids in its children."));
    })), T.filter((function(R) {
      return R.parent === null;
    })).length === 0) throw Error("TreeView must have one root node.");
    if (T.filter((function(R) {
      return R.parent === null;
    })).length > 1) throw Error("TreeView can have only one root node.");
    ie(T).children.length || console.warn("TreeView have no nodes to display.");
  })(r);
  var p = Ee({}), S = Ee({}), b = Ee(null);
  e != null && (b = e);
  var m = wt(ir({ data: r, controlledSelectedIds: n, controlledExpandedIds: o, defaultExpandedIds: Y, defaultSelectedIds: M, defaultDisabledIds: z, nodeRefs: p, leafRefs: S, onSelect: l, onNodeSelect: d, onExpand: w, onLoadData: I, togglableSelect: H, multiSelect: y, propagateSelect: k, propagateSelectUpwards: P, treeRef: b, focusedId: v }), 2), O = m[0], A = m[1];
  return k = k && y, oe.createElement("ul", Object.assign({ className: _e(bt.root, E), role: "tree", "aria-multiselectable": Z === "select" ? y : void 0, ref: b, onBlur: function(T) {
    tr(T, b.current, (function() {
      h && h({ treeState: O, dispatch: A }), A({ type: At });
    }));
  }, onKeyDown: lr({ data: r, tabbableId: O.tabbableId, expandedIds: O.expandedIds, selectedIds: O.selectedIds, disabledIds: O.disabledIds, halfSelectedIds: O.halfSelectedIds, clickAction: X, dispatch: A, propagateCollapse: i, propagateSelect: k, multiSelect: y, expandOnKeyboardSelect: U, togglableSelect: H }) }, u), ie(r).children.map((function(T, R) {
    return oe.createElement(Dt, Object.assign({ key: "".concat(T, "-").concat(Ze(T)), data: r, element: V(r, T), setsize: ie(r).children.length, posinset: R + 1, level: 1 }, O, { state: O, dispatch: A, nodeRefs: p, leafRefs: S, baseClassNames: bt, nodeRenderer: s, propagateCollapse: i, propagateSelect: k, propagateSelectUpwards: P, multiSelect: y, togglableSelect: H, clickAction: X, nodeAction: Z }));
  })));
})), lr = function(t) {
  var e = t.data, r = t.expandedIds, n = t.selectedIds, s = t.disabledIds, a = t.tabbableId, l = t.dispatch, c = t.propagateCollapse, d = t.propagateSelect, g = t.multiSelect, w = t.expandOnKeyboardSelect, I = t.togglableSelect, C = t.clickAction;
  return function(E) {
    var _ = V(e, a), y = _.id;
    if (E.ctrlKey) {
      if (E.key === "a" && C !== ce.focus) {
        E.preventDefault();
        var D = e.filter((function(M) {
          return M.parent !== null;
        })).map((function(M) {
          return M.id;
        })).filter((function(M) {
          return !s.has(M);
        }));
        l({ type: ue, multiSelect: g, select: Array.from(n).filter((function(M) {
          return !s.has(M);
        })).length !== D.length, ids: D, lastInteractedWith: _.id });
      } else if (E.shiftKey && (E.key === "Home" || E.key === "End") && C !== ce.focus) {
        var k = E.key === "Home" ? ie(e).children[0] : Ge(e, y, r), L = Wt({ data: e, expandedIds: r, from: y, to: k }).filter((function(M) {
          return !s.has(M);
        }));
        l({ type: ue, multiSelect: g, select: !0, ids: d ? ve(e, L, s) : L }), l({ type: re, id: k, lastInteractedWith: k });
      }
    } else {
      if (E.shiftKey) switch (E.key) {
        case "ArrowUp":
          E.preventDefault();
          var P = Xe(e, y, r);
          return void (P == null || s.has(P) || (C !== ce.focus && l({ type: ue, ids: d ? ve(e, [P], s) : [P], select: !0, multiSelect: g, lastInteractedWith: P, lastManuallyToggled: P }), l({ type: re, id: P, lastInteractedWith: P })));
        case "ArrowDown":
          E.preventDefault();
          var j = Ie(e, y, r);
          return void (j == null || s.has(j) || (C !== ce.focus && l({ type: ue, ids: d ? ve(e, [j], s) : [j], multiSelect: g, select: !0, lastInteractedWith: j, lastManuallyToggled: j }), l({ type: re, id: j, lastInteractedWith: j })));
      }
      switch (E.key) {
        case "ArrowDown":
          E.preventDefault();
          var i = Ie(e, y, r);
          return void (i != null && l({ type: re, id: i, lastInteractedWith: i }));
        case "ArrowUp":
          E.preventDefault();
          var W = Xe(e, y, r);
          return void (W != null && l({ type: re, id: W, lastInteractedWith: W }));
        case "ArrowLeft":
          if (E.preventDefault(), (ee(e, y) || _.isBranch) && r.has(a)) if (c) {
            var U = [y].concat(le(he(e, y, /* @__PURE__ */ new Set())));
            l({ type: We, ids: U, lastInteractedWith: _.id });
          } else l({ type: tt, id: y, lastInteractedWith: y });
          else if (!ie(e).children.includes(y)) {
            var q = fe(e, y);
            if (q == null) throw new Error("parentId of root element is null");
            l({ type: re, id: q, lastInteractedWith: q });
          }
          return;
        case "ArrowRight":
          return E.preventDefault(), void ((ee(e, y) || _.isBranch) && (r.has(a) ? l({ type: re, id: _.children[0], lastInteractedWith: _.children[0] }) : l({ type: je, id: y, lastInteractedWith: y })));
        case "Home":
          E.preventDefault(), l({ type: re, id: ie(e).children[0], lastInteractedWith: ie(e).children[0] });
          break;
        case "End":
          E.preventDefault();
          var H = Ge(e, ie(e).id, r);
          return void l({ type: re, id: H, lastInteractedWith: H });
        case "*":
          E.preventDefault();
          var G = fe(e, y);
          if (G == null) throw new Error("parentId of element is null");
          var Y = V(e, G).children.filter((function(M) {
            return ee(e, M) || V(e, M).isBranch;
          }));
          return void l({ type: Re, ids: Y, lastInteractedWith: y });
        case "Enter":
        case " ":
        case "Spacebar":
          return E.preventDefault(), C === ce.focus ? void 0 : (l({ type: I ? Mt(e, y, n, s) : we, id: y, multiSelect: g, lastInteractedWith: y, lastManuallyToggled: y }), d && !s.has(_.id) && l({ type: ue, ids: ve(e, [y], s), select: !I || !n.has(y), multiSelect: g, lastInteractedWith: y, lastManuallyToggled: y }), void (w && l({ type: Me, id: y, lastInteractedWith: y })));
        default:
          if (E.key.length === 1) for (var N = Ie(e, y, r); N !== y; ) if (N != null) {
            if (V(e, N).name[0].toLowerCase() === E.key.toLowerCase()) return void l({ type: re, id: N, lastInteractedWith: y });
            N = Ie(e, N, r);
          } else N = ie(e).children[0];
          return;
      }
    }
  };
};
sr.propTypes = { data: K.array.isRequired, onSelect: K.func, onNodeSelect: K.func, onExpand: K.func, className: K.string, nodeRenderer: K.func.isRequired, defaultExpandedIds: K.array, defaultSelectedIds: K.array, expandedIds: K.array, selectedIds: K.array, defaultDisabledIds: K.array, propagateCollapse: K.bool, propagateSelect: K.bool, propagateSelectUpwards: K.bool, multiSelect: K.bool, expandOnKeyboardSelect: K.bool, togglableSelect: K.bool, nodeAction: K.oneOf(Gt), clickAction: K.oneOf(Kt), onBlur: K.func, onLoadData: K.func, focusedId: K.oneOfType([K.string, K.number]) };
export {
  _e as c,
  sr as f
};
