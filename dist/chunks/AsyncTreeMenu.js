import { g as bt } from "./_commonjsHelpers.js";
import oe, { useRef as Ie, useReducer as Dt, useEffect as ae } from "react";
import '../assets/AsyncTreeMenu.css';var St = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function r() {
      for (var a = "", l = 0; l < arguments.length; l++) {
        var c = arguments[l];
        c && (a = i(a, n(c)));
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
        e.call(a, c) && a[c] && (l = i(l, c));
      return l;
    }
    function i(a, l) {
      return l ? a ? a + " " + l : a + l : a;
    }
    t.exports ? (r.default = r, t.exports = r) : window.classNames = r;
  })();
})(St);
var kt = St.exports;
const Ae = /* @__PURE__ */ bt(kt);
var Ve = { exports: {} }, Oe = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var it;
function Lt() {
  if (it) return F;
  it = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, d = t ? Symbol.for("react.async_mode") : 60111, b = t ? Symbol.for("react.concurrent_mode") : 60111, w = t ? Symbol.for("react.forward_ref") : 60112, I = t ? Symbol.for("react.suspense") : 60113, A = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, y = t ? Symbol.for("react.block") : 60121, W = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, q = t ? Symbol.for("react.scope") : 60119;
  function j(s) {
    if (typeof s == "object" && s !== null) {
      var M = s.$$typeof;
      switch (M) {
        case e:
          switch (s = s.type, s) {
            case d:
            case b:
            case n:
            case a:
            case i:
            case I:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case c:
                case w:
                case _:
                case E:
                case l:
                  return s;
                default:
                  return M;
              }
          }
        case r:
          return M;
      }
    }
  }
  function P(s) {
    return j(s) === b;
  }
  return F.AsyncMode = d, F.ConcurrentMode = b, F.ContextConsumer = c, F.ContextProvider = l, F.Element = e, F.ForwardRef = w, F.Fragment = n, F.Lazy = _, F.Memo = E, F.Portal = r, F.Profiler = a, F.StrictMode = i, F.Suspense = I, F.isAsyncMode = function(s) {
    return P(s) || j(s) === d;
  }, F.isConcurrentMode = P, F.isContextConsumer = function(s) {
    return j(s) === c;
  }, F.isContextProvider = function(s) {
    return j(s) === l;
  }, F.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }, F.isForwardRef = function(s) {
    return j(s) === w;
  }, F.isFragment = function(s) {
    return j(s) === n;
  }, F.isLazy = function(s) {
    return j(s) === _;
  }, F.isMemo = function(s) {
    return j(s) === E;
  }, F.isPortal = function(s) {
    return j(s) === r;
  }, F.isProfiler = function(s) {
    return j(s) === a;
  }, F.isStrictMode = function(s) {
    return j(s) === i;
  }, F.isSuspense = function(s) {
    return j(s) === I;
  }, F.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === b || s === a || s === i || s === I || s === A || typeof s == "object" && s !== null && (s.$$typeof === _ || s.$$typeof === E || s.$$typeof === l || s.$$typeof === c || s.$$typeof === w || s.$$typeof === W || s.$$typeof === D || s.$$typeof === q || s.$$typeof === y);
  }, F.typeOf = j, F;
}
var Y = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function Ut() {
  return st || (st = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, d = t ? Symbol.for("react.async_mode") : 60111, b = t ? Symbol.for("react.concurrent_mode") : 60111, w = t ? Symbol.for("react.forward_ref") : 60112, I = t ? Symbol.for("react.suspense") : 60113, A = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, y = t ? Symbol.for("react.block") : 60121, W = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, q = t ? Symbol.for("react.scope") : 60119;
    function j(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === n || f === b || f === a || f === i || f === I || f === A || typeof f == "object" && f !== null && (f.$$typeof === _ || f.$$typeof === E || f.$$typeof === l || f.$$typeof === c || f.$$typeof === w || f.$$typeof === W || f.$$typeof === D || f.$$typeof === q || f.$$typeof === y);
    }
    function P(f) {
      if (typeof f == "object" && f !== null) {
        var J = f.$$typeof;
        switch (J) {
          case e:
            var he = f.type;
            switch (he) {
              case d:
              case b:
              case n:
              case a:
              case i:
              case I:
                return he;
              default:
                var be = he && he.$$typeof;
                switch (be) {
                  case c:
                  case w:
                  case _:
                  case E:
                  case l:
                    return be;
                  default:
                    return J;
                }
            }
          case r:
            return J;
        }
      }
    }
    var s = d, M = b, L = c, V = l, N = e, G = w, B = n, U = _, k = E, C = r, z = a, $ = i, K = I, se = !1;
    function le(f) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(f) || P(f) === d;
    }
    function o(f) {
      return P(f) === b;
    }
    function v(f) {
      return P(f) === c;
    }
    function h(f) {
      return P(f) === l;
    }
    function u(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function p(f) {
      return P(f) === w;
    }
    function S(f) {
      return P(f) === n;
    }
    function g(f) {
      return P(f) === _;
    }
    function m(f) {
      return P(f) === E;
    }
    function O(f) {
      return P(f) === r;
    }
    function x(f) {
      return P(f) === a;
    }
    function T(f) {
      return P(f) === i;
    }
    function R(f) {
      return P(f) === I;
    }
    Y.AsyncMode = s, Y.ConcurrentMode = M, Y.ContextConsumer = L, Y.ContextProvider = V, Y.Element = N, Y.ForwardRef = G, Y.Fragment = B, Y.Lazy = U, Y.Memo = k, Y.Portal = C, Y.Profiler = z, Y.StrictMode = $, Y.Suspense = K, Y.isAsyncMode = le, Y.isConcurrentMode = o, Y.isContextConsumer = v, Y.isContextProvider = h, Y.isElement = u, Y.isForwardRef = p, Y.isFragment = S, Y.isLazy = g, Y.isMemo = m, Y.isPortal = O, Y.isProfiler = x, Y.isStrictMode = T, Y.isSuspense = R, Y.isValidElementType = j, Y.typeOf = P;
  }()), Y;
}
var lt;
function gt() {
  return lt || (lt = 1, process.env.NODE_ENV === "production" ? Oe.exports = Lt() : Oe.exports = Ut()), Oe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ue, ot;
function Nt() {
  if (ot) return Ue;
  ot = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
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
      var b = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(w) {
        b[w] = w;
      }), Object.keys(Object.assign({}, b)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ue = i() ? Object.assign : function(a, l) {
    for (var c, d = n(a), b, w = 1; w < arguments.length; w++) {
      c = Object(arguments[w]);
      for (var I in c)
        e.call(c, I) && (d[I] = c[I]);
      if (t) {
        b = t(c);
        for (var A = 0; A < b.length; A++)
          r.call(c, b[A]) && (d[b[A]] = c[b[A]]);
      }
    }
    return d;
  }, Ue;
}
var Ne, ct;
function Xe() {
  if (ct) return Ne;
  ct = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ne = t, Ne;
}
var $e, dt;
function mt() {
  return dt || (dt = 1, $e = Function.call.bind(Object.prototype.hasOwnProperty)), $e;
}
var Fe, ut;
function $t() {
  if (ut) return Fe;
  ut = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Xe(), r = {}, n = mt();
    t = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(a, l, c, d, b) {
    if (process.env.NODE_ENV !== "production") {
      for (var w in a)
        if (n(a, w)) {
          var I;
          try {
            if (typeof a[w] != "function") {
              var A = Error(
                (d || "React class") + ": " + c + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw A.name = "Invariant Violation", A;
            }
            I = a[w](l, w, d, c, null, e);
          } catch (_) {
            I = _;
          }
          if (I && !(I instanceof Error) && t(
            (d || "React class") + ": type specification of " + c + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof I + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), I instanceof Error && !(I.message in r)) {
            r[I.message] = !0;
            var E = b ? b() : "";
            t(
              "Failed " + c + " type: " + I.message + (E ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Fe = i, Fe;
}
var Ye, ft;
function Ft() {
  if (ft) return Ye;
  ft = 1;
  var t = gt(), e = Nt(), r = Xe(), n = mt(), i = $t(), a = function() {
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
  return Ye = function(c, d) {
    var b = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
    function I(o) {
      var v = o && (b && o[b] || o[w]);
      if (typeof v == "function")
        return v;
    }
    var A = "<<anonymous>>", E = {
      array: D("array"),
      bigint: D("bigint"),
      bool: D("boolean"),
      func: D("function"),
      number: D("number"),
      object: D("object"),
      string: D("string"),
      symbol: D("symbol"),
      any: q(),
      arrayOf: j,
      element: P(),
      elementType: s(),
      instanceOf: M,
      node: G(),
      objectOf: V,
      oneOf: L,
      oneOfType: N,
      shape: U,
      exact: k
    };
    function _(o, v) {
      return o === v ? o !== 0 || 1 / o === 1 / v : o !== o && v !== v;
    }
    function y(o, v) {
      this.message = o, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function W(o) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, h = 0;
      function u(S, g, m, O, x, T, R) {
        if (O = O || A, T = T || m, R !== r) {
          if (d) {
            var f = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw f.name = "Invariant Violation", f;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var J = O + ":" + m;
            !v[J] && // Avoid spamming the console because they are often not actionable except for lib authors
            h < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[J] = !0, h++);
          }
        }
        return g[m] == null ? S ? g[m] === null ? new y("The " + x + " `" + T + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new y("The " + x + " `" + T + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : o(g, m, O, x, T);
      }
      var p = u.bind(null, !1);
      return p.isRequired = u.bind(null, !0), p;
    }
    function D(o) {
      function v(h, u, p, S, g, m) {
        var O = h[u], x = $(O);
        if (x !== o) {
          var T = K(O);
          return new y(
            "Invalid " + S + " `" + g + "` of type " + ("`" + T + "` supplied to `" + p + "`, expected ") + ("`" + o + "`."),
            { expectedType: o }
          );
        }
        return null;
      }
      return W(v);
    }
    function q() {
      return W(l);
    }
    function j(o) {
      function v(h, u, p, S, g) {
        if (typeof o != "function")
          return new y("Property `" + g + "` of component `" + p + "` has invalid PropType notation inside arrayOf.");
        var m = h[u];
        if (!Array.isArray(m)) {
          var O = $(m);
          return new y("Invalid " + S + " `" + g + "` of type " + ("`" + O + "` supplied to `" + p + "`, expected an array."));
        }
        for (var x = 0; x < m.length; x++) {
          var T = o(m, x, p, S, g + "[" + x + "]", r);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return W(v);
    }
    function P() {
      function o(v, h, u, p, S) {
        var g = v[h];
        if (!c(g)) {
          var m = $(g);
          return new y("Invalid " + p + " `" + S + "` of type " + ("`" + m + "` supplied to `" + u + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(o);
    }
    function s() {
      function o(v, h, u, p, S) {
        var g = v[h];
        if (!t.isValidElementType(g)) {
          var m = $(g);
          return new y("Invalid " + p + " `" + S + "` of type " + ("`" + m + "` supplied to `" + u + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(o);
    }
    function M(o) {
      function v(h, u, p, S, g) {
        if (!(h[u] instanceof o)) {
          var m = o.name || A, O = le(h[u]);
          return new y("Invalid " + S + " `" + g + "` of type " + ("`" + O + "` supplied to `" + p + "`, expected ") + ("instance of `" + m + "`."));
        }
        return null;
      }
      return W(v);
    }
    function L(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function v(h, u, p, S, g) {
        for (var m = h[u], O = 0; O < o.length; O++)
          if (_(m, o[O]))
            return null;
        var x = JSON.stringify(o, function(R, f) {
          var J = K(f);
          return J === "symbol" ? String(f) : f;
        });
        return new y("Invalid " + S + " `" + g + "` of value `" + String(m) + "` " + ("supplied to `" + p + "`, expected one of " + x + "."));
      }
      return W(v);
    }
    function V(o) {
      function v(h, u, p, S, g) {
        if (typeof o != "function")
          return new y("Property `" + g + "` of component `" + p + "` has invalid PropType notation inside objectOf.");
        var m = h[u], O = $(m);
        if (O !== "object")
          return new y("Invalid " + S + " `" + g + "` of type " + ("`" + O + "` supplied to `" + p + "`, expected an object."));
        for (var x in m)
          if (n(m, x)) {
            var T = o(m, x, p, S, g + "." + x, r);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return W(v);
    }
    function N(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var v = 0; v < o.length; v++) {
        var h = o[v];
        if (typeof h != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(h) + " at index " + v + "."
          ), l;
      }
      function u(p, S, g, m, O) {
        for (var x = [], T = 0; T < o.length; T++) {
          var R = o[T], f = R(p, S, g, m, O, r);
          if (f == null)
            return null;
          f.data && n(f.data, "expectedType") && x.push(f.data.expectedType);
        }
        var J = x.length > 0 ? ", expected one of type [" + x.join(", ") + "]" : "";
        return new y("Invalid " + m + " `" + O + "` supplied to " + ("`" + g + "`" + J + "."));
      }
      return W(u);
    }
    function G() {
      function o(v, h, u, p, S) {
        return C(v[h]) ? null : new y("Invalid " + p + " `" + S + "` supplied to " + ("`" + u + "`, expected a ReactNode."));
      }
      return W(o);
    }
    function B(o, v, h, u, p) {
      return new y(
        (o || "React class") + ": " + v + " type `" + h + "." + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + p + "`."
      );
    }
    function U(o) {
      function v(h, u, p, S, g) {
        var m = h[u], O = $(m);
        if (O !== "object")
          return new y("Invalid " + S + " `" + g + "` of type `" + O + "` " + ("supplied to `" + p + "`, expected `object`."));
        for (var x in o) {
          var T = o[x];
          if (typeof T != "function")
            return B(p, S, g, x, K(T));
          var R = T(m, x, p, S, g + "." + x, r);
          if (R)
            return R;
        }
        return null;
      }
      return W(v);
    }
    function k(o) {
      function v(h, u, p, S, g) {
        var m = h[u], O = $(m);
        if (O !== "object")
          return new y("Invalid " + S + " `" + g + "` of type `" + O + "` " + ("supplied to `" + p + "`, expected `object`."));
        var x = e({}, h[u], o);
        for (var T in x) {
          var R = o[T];
          if (n(o, T) && typeof R != "function")
            return B(p, S, g, T, K(R));
          if (!R)
            return new y(
              "Invalid " + S + " `" + g + "` key `" + T + "` supplied to `" + p + "`.\nBad object: " + JSON.stringify(h[u], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(o), null, "  ")
            );
          var f = R(m, T, p, S, g + "." + T, r);
          if (f)
            return f;
        }
        return null;
      }
      return W(v);
    }
    function C(o) {
      switch (typeof o) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !o;
        case "object":
          if (Array.isArray(o))
            return o.every(C);
          if (o === null || c(o))
            return !0;
          var v = I(o);
          if (v) {
            var h = v.call(o), u;
            if (v !== o.entries) {
              for (; !(u = h.next()).done; )
                if (!C(u.value))
                  return !1;
            } else
              for (; !(u = h.next()).done; ) {
                var p = u.value;
                if (p && !C(p[1]))
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
    function $(o) {
      var v = typeof o;
      return Array.isArray(o) ? "array" : o instanceof RegExp ? "object" : z(v, o) ? "symbol" : v;
    }
    function K(o) {
      if (typeof o > "u" || o === null)
        return "" + o;
      var v = $(o);
      if (v === "object") {
        if (o instanceof Date)
          return "date";
        if (o instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function se(o) {
      var v = K(o);
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
    function le(o) {
      return !o.constructor || !o.constructor.name ? A : o.constructor.name;
    }
    return E.checkPropTypes = i, E.resetWarningCache = i.resetWarningCache, E.PropTypes = E, E;
  }, Ye;
}
var qe, pt;
function Yt() {
  if (pt) return qe;
  pt = 1;
  var t = Xe();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, qe = function() {
    function n(l, c, d, b, w, I) {
      if (I !== t) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
      }
    }
    n.isRequired = n;
    function i() {
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
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, qe;
}
if (process.env.NODE_ENV !== "production") {
  var qt = gt(), zt = !0;
  Ve.exports = Ft()(qt.isElement, zt);
} else
  Ve.exports = Yt()();
var Bt = Ve.exports;
const X = /* @__PURE__ */ bt(Bt);
function Je(t) {
  return (Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(t);
}
function ze(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function It(t, e) {
  return function(r) {
    if (Array.isArray(r)) return r;
  }(t) || function(r, n) {
    var i = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
    if (i != null) {
      var a, l, c = [], d = !0, b = !1;
      try {
        for (i = i.call(r); !(d = (a = i.next()).done) && (c.push(a.value), !n || c.length !== n); d = !0) ;
      } catch (w) {
        b = !0, l = w;
      } finally {
        try {
          d || i.return == null || i.return();
        } finally {
          if (b) throw l;
        }
      }
      return c;
    }
  }(t, e) || Ze(t, e) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function ie(t) {
  return function(e) {
    if (Array.isArray(e)) return He(e);
  }(t) || function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  }(t) || Ze(t) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Ze(t, e) {
  if (t) {
    if (typeof t == "string") return He(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? He(t, e) : void 0;
  }
}
function He(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function re(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = Ze(t)) || e) {
      r && (t = r);
      var n = 0, i = function() {
      };
      return { s: i, n: function() {
        return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
      }, e: function(d) {
        throw d;
      }, f: i };
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
function Qe(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  }
  return r;
}
var yt = { root: "tree", node: "tree-node", branch: "tree-node__branch", branchWrapper: "tree-branch-wrapper", leafListItem: "tree-leaf-list-item", leaf: "tree-node__leaf", nodeGroup: "tree-node-group" }, ce = { select: "SELECT", focus: "FOCUS", exclusiveSelect: "EXCLUSIVE_SELECT" }, Vt = Object.freeze(Object.values(ce)), Ht = Object.freeze(Object.values({ check: "check", select: "select" })), et = "COLLAPSE", Pe = "COLLAPSE_MANY", Ce = "EXPAND", _e = "EXPAND_MANY", tt = "HALF_SELECT", Ee = "SELECT", Et = "DESELECT", Re = "TOGGLE", je = "TOGGLE_SELECT", ue = "SELECT_MANY", wt = "EXCLUSIVE_CHANGE_SELECT_MANY", te = "FOCUS", Tt = "CLEAR_FOCUS", Ot = "BLUR", Kt = "DISABLE", Gt = "ENABLE", xt = "CLEAR_MANUALLY_TOGGLED", At = "CONTROLLED_SELECT_MANY", Ct = "UPDATE_TREE_STATE_WHEN_DATA_CHANGED", Se = function() {
}, Be = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
  return function(n) {
    for (var i = 0, a = e; i < a.length; i++) {
      var l = a[i];
      if (l && l(n), n.defaultPrevented) break;
    }
  };
}, ye = function(t, e) {
  var r, n = /* @__PURE__ */ new Set(), i = re(t);
  try {
    for (i.s(); !(r = i.n()).done; ) {
      var a = r.value;
      e.has(a) || n.add(a);
    }
  } catch (l) {
    i.e(l);
  } finally {
    i.f();
  }
  return n;
}, xe = function(t, e) {
  return new Set([].concat(ie(ye(t, e)), ie(ye(e, t))));
}, vt = function(t) {
  var e = Ie();
  return ae(function() {
    e.current = t;
  }, [t]), e.current;
}, Q = function(t, e) {
  var r;
  return !!(!((r = H(t, e).children) === null || r === void 0) && r.length);
}, fe = function(t, e) {
  return H(t, e).parent;
}, Xt = function(t, e, r) {
  for (var n = e, i = []; ; ) {
    var a = fe(t, n);
    if (a === 0 || a == null || a != null && r.has(a)) break;
    i.push(a), n = a;
  }
  return i;
}, ge = function(t, e, r) {
  var n = [];
  return function i(a, l) {
    var c = H(a, l);
    if (c.children != null) {
      var d, b = re(c.children.filter(function(I) {
        return !r.has(I);
      }));
      try {
        for (b.s(); !(d = b.n()).done; ) {
          var w = d.value;
          n.push(w), i(a, w);
        }
      } catch (I) {
        b.e(I);
      } finally {
        b.f();
      }
    }
  }(t, e), n;
}, _t = function(t, e) {
  var r = H(t, e);
  return r.children == null ? [] : r.children;
}, jt = function(t, e, r) {
  var n = fe(t, e);
  if (n != null) {
    var i = H(t, n), a = i.children.indexOf(e) + r;
    if (i.children[a]) return i.children[a];
  }
  return null;
}, Ke = function(t, e, r) {
  var n = H(t, e);
  for (ne(t).id === e && (n = H(t, H(t, e).children[H(t, e).children.length - 1])); r.has(n.id) && Q(t, n.id); ) n = H(t, n.children[n.children.length - 1]);
  return n.id;
}, Ge = function(t, e, r) {
  if (e === ne(t).children[0]) return null;
  var n = jt(t, e, -1);
  return n == null ? fe(t, e) : Ke(t, n, r);
}, me = function(t, e, r) {
  var n = H(t, e).id;
  if (Q(t, n) && r.has(n)) return H(t, n).children[0];
  for (; ; ) {
    var i = jt(t, n, 1);
    if (i != null) return i;
    if ((n = fe(t, n)) == null) return null;
  }
}, Pt = function(t) {
  var e = t.data, r = t.expandedIds, n = t.from, i = t.to, a = [], l = e.length, c = 0, d = n;
  if (a.push(n), n < i) for (; c < l && ((d = me(e, d, r)) != null && a.push(d), d != null && d !== i); ) c += 1;
  else if (n > i) for (; c < l && ((d = Ge(e, d, r)) != null && a.push(d), d != null && d !== i); ) c += 1;
  return a;
}, Jt = function(t) {
  var e = t.isSelected, r = t.isDisabled, n = t.multiSelect;
  return r || n ? e : !!e || void 0;
}, Zt = function(t) {
  var e = t.isSelected, r = t.isDisabled, n = t.isHalfSelected, i = t.multiSelect;
  return r ? e : n ? "mixed" : i ? e : !!e || void 0;
}, ve = function(t, e, r) {
  return e.concat.apply(e, ie(e.filter(function(n) {
    return Q(t, n);
  }).map(function(n) {
    return ge(t, n, r);
  })));
}, Qt = function(t, e, r) {
  e != null ? window.navigator.userAgent.match(/Trident/) ? setTimeout(function() {
    return !e.contains(document.activeElement) && r();
  }, 0) : !e.contains(t.nativeEvent.relatedTarget) && r() : console.warn("ref not set on <ul>");
}, er = function(t, e, r) {
  var n = _t(t, e);
  return Q(t, e) && !r.has(e) && n.length === 1 && n.every(function(i) {
    return r.has(i);
  });
}, Rt = function(t, e, r, n) {
  var i = function(l, c, d) {
    return Q(l, c) && d.has(c) && ge(l, c, /* @__PURE__ */ new Set()).some(function(b) {
      return d.has(b);
    });
  }(t, e, r), a = function(l, c, d) {
    var b = _t(l, c);
    return Q(l, c) && d.has(c) && b.length === 1 && b.every(function(w) {
      return d.has(w);
    });
  }(t, e, r);
  return function(l, c, d, b) {
    var w = ge(l, c, /* @__PURE__ */ new Set());
    return Q(l, c) && d.has(c) && w.every(function(I) {
      return d.has(I);
    }) && w.every(function(I) {
      return !b.has(I);
    });
  }(t, e, r, n) ? je : i && !a ? tt : je;
}, ne = function(t) {
  var e = t.find(function(r) {
    return r.parent === null;
  });
  if (!e) throw Error("TreeView data must contain parent node.");
  return e;
}, H = function(t, e) {
  var r = t.find(function(n) {
    return n.id === e;
  });
  if (r == null) throw Error("Node with id=".concat(e, " doesn't exist in the tree."));
  return r;
}, ht = function(t) {
  var e = Array.from(new Set(t));
  return t.length !== e.length;
}, tr = function(t, e) {
  switch (e.type) {
    case et:
      var r = new Set(t.expandedIds);
      return r.delete(e.id), Object.assign(Object.assign({}, t), { expandedIds: r, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Pe:
      var n, i = new Set(t.expandedIds), a = re(e.ids);
      try {
        for (a.s(); !(n = a.n()).done; ) {
          var l = n.value;
          i.delete(l);
        }
      } catch (K) {
        a.e(K);
      } finally {
        a.f();
      }
      return Object.assign(Object.assign({}, t), { expandedIds: i, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Ce:
      var c = new Set(t.expandedIds);
      return c.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: c, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case _e:
      var d = new Set([].concat(ie(t.expandedIds), ie(e.ids)));
      return Object.assign(Object.assign({}, t), { expandedIds: d, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Re:
      var b = new Set(t.expandedIds);
      return t.expandedIds.has(e.id) ? b.delete(e.id) : b.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: b, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case tt:
      if (t.disabledIds.has(e.id)) return t;
      var w = new Set(t.halfSelectedIds), I = new Set(t.selectedIds);
      return w.add(e.id), I.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: I, halfSelectedIds: w, tabbableId: e.keepFocus ? t.tabbableId : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id });
    case Ee:
      if (!e.NotUserAction && t.disabledIds.has(e.id)) return t;
      var A;
      e.multiSelect ? (A = new Set(t.selectedIds)).add(e.id) : (A = /* @__PURE__ */ new Set()).add(e.id);
      var E = new Set(t.halfSelectedIds);
      return E.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: A, halfSelectedIds: E, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: e.NotUserAction !== !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case Et:
      if (!e.NotUserAction && t.disabledIds.has(e.id)) return t;
      var _, y = new Set(t.selectedIds);
      return y.delete(e.id), e.multiSelect ? (_ = new Set(t.halfSelectedIds)).delete(e.id) : _ = /* @__PURE__ */ new Set(), Object.assign(Object.assign({}, t), { selectedIds: y, halfSelectedIds: _, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case je:
      if (t.disabledIds.has(e.id)) return t;
      var W, D = t.selectedIds.has(e.id);
      e.multiSelect ? (W = new Set(t.selectedIds), D ? W.delete(e.id) : W.add(e.id)) : (W = /* @__PURE__ */ new Set(), D || W.add(e.id));
      var q = new Set(t.halfSelectedIds);
      return q.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: W, halfSelectedIds: q, tabbableId: e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case ue:
      var j, P = e.ids.filter(function(K) {
        return !t.disabledIds.has(K);
      });
      if (e.multiSelect) {
        j = e.select ? new Set([].concat(ie(t.selectedIds), ie(P))) : ye(t.selectedIds, new Set(P));
        var s = ye(t.halfSelectedIds, j);
        return Object.assign(Object.assign({}, t), { selectedIds: j, halfSelectedIds: s, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case wt:
      var M, L = e.ids.filter(function(K) {
        return !t.disabledIds.has(K);
      });
      if (e.multiSelect) {
        M = e.select ? new Set(L) : ye(t.selectedIds, new Set(L));
        var V = ye(t.halfSelectedIds, M);
        return Object.assign(Object.assign({}, t), { selectedIds: M, halfSelectedIds: V, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case At:
      var N, G = t.lastInteractedWith, B = t.tabbableId;
      if (e.multiSelect) N = new Set(e.ids), e.ids.length && (G = e.ids[e.ids.length - 1], B = e.ids[e.ids.length - 1]);
      else {
        N = /* @__PURE__ */ new Set(), e.ids.length > 1 && console.warn("Tree in singleSelect mode, only the first item from selectedIds will be selected.");
        var U = e.ids[0];
        U && N.add(U), G = U ?? G, B = U ?? G;
      }
      var k = new Set(t.halfSelectedIds);
      e.ids.every(function(K) {
        return k.delete(K);
      });
      var C = new Set(e.ids);
      return Object.assign(Object.assign({}, t), { selectedIds: N, halfSelectedIds: k, controlledIds: C, isFocused: !0, lastAction: e.type, tabbableId: B, lastInteractedWith: G });
    case te:
      return Object.assign(Object.assign({}, t), { tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Ot:
      return Object.assign(Object.assign({}, t), { isFocused: !1 });
    case Tt:
      return Object.assign(Object.assign({}, t), { isFocused: !1, lastInteractedWith: null, tabbableId: e.id });
    case Kt:
      var z = new Set(t.disabledIds);
      return z.add(e.id), Object.assign(Object.assign({}, t), { disabledIds: z });
    case Gt:
      var $ = new Set(t.disabledIds);
      return $.delete(e.id), Object.assign(Object.assign({}, t), { disabledIds: $ });
    case xt:
      return Object.assign(Object.assign({}, t), { lastManuallyToggled: null });
    case Ct:
      return Object.assign(Object.assign({}, t), { tabbableId: e.tabbableId, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.lastUserSelect });
    default:
      throw new Error("Invalid action passed to the reducer");
  }
}, Wt = function(t) {
  var e = t.element, r = t.dispatch, n = t.data, i = t.selectedIds, a = t.tabbableId, l = t.isFocused, c = t.expandedIds, d = t.disabledIds, b = t.halfSelectedIds, w = t.lastUserSelect, I = t.nodeRefs, A = t.leafRefs, E = t.baseClassNames, _ = t.nodeRenderer, y = t.nodeAction, W = t.setsize, D = t.posinset, q = t.level, j = t.propagateCollapse, P = t.propagateSelect, s = t.multiSelect, M = t.togglableSelect, L = t.clickAction, V = t.state, N = function(C) {
    if (!(C.ctrlKey || C.altKey || C.shiftKey)) if (c.has(e.id) && j) {
      var z = [e.id].concat(ie(ge(n, e.id, /* @__PURE__ */ new Set())));
      r({ type: Pe, ids: z, lastInteractedWith: e.id });
    } else r({ type: Re, id: e.id, lastInteractedWith: e.id });
  }, G = function() {
    return r({ type: te, id: e.id, lastInteractedWith: e.id });
  }, B = function(C) {
    if (C.shiftKey) {
      var z = Pt({ data: n, expandedIds: c, from: w, to: e.id }).filter(function($) {
        return !d.has($);
      });
      z = P ? ve(n, z, d) : z, r({ type: wt, select: !0, multiSelect: s, ids: z, lastInteractedWith: e.id, lastManuallyToggled: e.id });
    } else C.ctrlKey || L === ce.select ? (r({ type: M ? Rt(n, e.id, i, d) : Ee, id: e.id, multiSelect: s, lastInteractedWith: e.id, lastManuallyToggled: e.id }), P && !d.has(e.id) && r({ type: ue, ids: ve(n, [e.id], d), select: !M || !i.has(e.id), multiSelect: s, lastInteractedWith: e.id, lastManuallyToggled: e.id })) : L === ce.exclusiveSelect ? r({ type: M ? je : Ee, id: e.id, multiSelect: !1, lastInteractedWith: e.id, lastManuallyToggled: e.id }) : L === ce.focus && r({ type: te, id: e.id, lastInteractedWith: e.id });
  }, U = function(C) {
    var z;
    return Ae(C, (ze(z = {}, "".concat(C, "--expanded"), c.has(e.id)), ze(z, "".concat(C, "--selected"), i.has(e.id)), ze(z, "".concat(C, "--focused"), a === e.id && l), z));
  }, k = y === "select" ? { "aria-selected": Jt({ isSelected: i.has(e.id), isDisabled: d.has(e.id), multiSelect: s }) } : { "aria-checked": Zt({ isSelected: i.has(e.id), isDisabled: d.has(e.id), isHalfSelected: b.has(e.id), multiSelect: s }) };
  return Q(n, e.id) || e.isBranch ? oe.createElement("li", Object.assign({ role: "treeitem", "aria-expanded": c.has(e.id), "aria-setsize": W, "aria-posinset": D, "aria-level": q, "aria-disabled": d.has(e.id), tabIndex: a === e.id ? 0 : -1, ref: function(C) {
    (I == null ? void 0 : I.current) != null && C != null && (I.current[e.id] = C);
  }, className: E.branchWrapper }, k), oe.createElement(oe.Fragment, null, _({ element: e, isBranch: !0, isSelected: i.has(e.id), isHalfSelected: b.has(e.id), isExpanded: c.has(e.id), isDisabled: d.has(e.id), dispatch: r, getNodeProps: function() {
    var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = C.onClick;
    return { onClick: z == null ? Be(B, N, G) : Be(z, G), className: Ae(U(E.node), E.branch), ref: function($) {
      (A == null ? void 0 : A.current) != null && (A.current[e.id] = $);
    } };
  }, setsize: W, posinset: D, level: q, handleSelect: B, handleExpand: N, treeState: V }), oe.createElement(rr, Object.assign({ getClasses: U }, function(C) {
    return C.setsize, C.posinset, Qe(C, ["setsize", "posinset"]);
  }(t))))) : oe.createElement("li", { role: "none", className: U(E.leafListItem) }, _({ element: e, isBranch: !1, isSelected: i.has(e.id), isHalfSelected: !1, isExpanded: !1, isDisabled: d.has(e.id), dispatch: r, getNodeProps: function() {
    var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = C.onClick;
    return Object.assign({ role: "treeitem", tabIndex: a === e.id ? 0 : -1, onClick: Be(z ?? B, G), ref: function($) {
      (I == null ? void 0 : I.current) != null && (A == null ? void 0 : A.current) != null && (I.current[e.id] = $, A.current[e.id] = $);
    }, className: Ae(U(E.node), E.leaf), "aria-setsize": W, "aria-posinset": D, "aria-level": q, disabled: d.has(e.id), "aria-disabled": d.has(e.id) }, k);
  }, setsize: W, posinset: D, level: q, handleSelect: B, handleExpand: Se, treeState: V }));
}, rr = function(t) {
  var e = t.data, r = t.element, n = t.expandedIds, i = t.getClasses, a = t.baseClassNames, l = t.level, c = Qe(t, ["data", "element", "expandedIds", "getClasses", "baseClassNames", "level"]);
  return oe.createElement("ul", { role: "group", className: i(a.nodeGroup) }, n.has(r.id) && r.children.length > 0 && r.children.map(function(d, b) {
    return oe.createElement(Wt, Object.assign({ data: e, expandedIds: n, baseClassNames: a, key: "".concat(d, "-").concat(Je(d)), element: H(e, d), setsize: r.children.length, posinset: b + 1, level: l + 1 }, c));
  }));
}, nr = function(t) {
  var e = t.data, r = t.controlledSelectedIds, n = t.controlledExpandedIds, i = t.defaultExpandedIds, a = t.defaultSelectedIds, l = t.defaultDisabledIds, c = t.nodeRefs, d = t.leafRefs, b = t.onSelect, w = t.onNodeSelect, I = t.onExpand, A = t.onLoadData, E = t.togglableSelect, _ = t.multiSelect, y = t.propagateSelect, W = t.propagateSelectUpwards, D = t.treeRef, q = t.focusedId, j = ne(e), P = It(Dt(tr, { selectedIds: new Set(r || a), controlledIds: new Set(r), tabbableId: j.children[0], isFocused: !1, expandedIds: new Set(n || i), halfSelectedIds: /* @__PURE__ */ new Set(), lastUserSelect: j.children[0], lastInteractedWith: null, lastManuallyToggled: null, disabledIds: new Set(l) }), 2), s = P[0], M = P[1], L = s.selectedIds, V = s.expandedIds, N = s.disabledIds, G = s.tabbableId, B = s.halfSelectedIds, U = s.lastAction, k = s.lastInteractedWith, C = s.lastManuallyToggled, z = vt(L) || /* @__PURE__ */ new Set(), $ = xe(L, z);
  ae(function() {
    var h;
    if (b != null && b !== Se) {
      var u, p = re($);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value, g = Q(e, S) || !!(!((h = H(e, G)) === null || h === void 0) && h.isBranch);
          b({ element: H(e, S), isBranch: g, isExpanded: !!g && V.has(S), isSelected: L.has(S), isDisabled: N.has(S), isHalfSelected: !!g && B.has(S), treeState: s });
        }
      } catch (m) {
        p.e(m);
      } finally {
        p.f();
      }
    }
  }, [e, L, V, N, B, $, b, s]), ae(function() {
    w != null && w !== Se && C != null && $.size && (w({ element: H(e, C), isSelected: L.has(C), isBranch: Q(e, C), treeState: s }), M({ type: xt }));
  }, [C, L, $]);
  var K = vt(V) || /* @__PURE__ */ new Set();
  ae(function() {
    var h = xe(V, K);
    if (I != null && I !== Se) {
      var u, p = re(h);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value;
          I({ element: H(e, S), isExpanded: V.has(S), isSelected: L.has(S), isDisabled: N.has(S), isHalfSelected: B.has(S), treeState: s });
        }
      } catch (g) {
        p.e(g);
      } finally {
        p.f();
      }
    }
  }, [e, L, V, N, B, K, I, s]);
  var se, le, o = (se = e, le = Ie(), ae(function() {
    le.current = se;
  }), le.current || /* @__PURE__ */ new Map());
  ae(function() {
    var h = xe(V, K);
    if (A) {
      var u, p = re(h);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value;
          A({ element: H(e, S), isExpanded: V.has(S), isSelected: L.has(S), isDisabled: N.has(S), isHalfSelected: B.has(S), treeState: s });
        }
      } catch (x) {
        p.e(x);
      } finally {
        p.f();
      }
      if (o !== e && E && y) {
        var g, m = re(V);
        try {
          for (m.s(); !(g = m.n()).done; ) {
            var O = g.value;
            L.has(O) && M({ type: ue, ids: ve(e, [O], N), select: !0, multiSelect: _, lastInteractedWith: O });
          }
        } catch (x) {
          m.e(x);
        } finally {
          m.f();
        }
      }
    }
  }, [e, L, V, N, B, K, A, s]), ae(function() {
    if (o !== e) {
      var h = ne(e);
      h.children.length && M({ type: Ct, tabbableId: e.find(function(u) {
        return u.id === s.tabbableId;
      }) ? s.tabbableId : h.children[0], lastInteractedWith: e.find(function(u) {
        return u.id === s.lastInteractedWith;
      }) ? s.lastInteractedWith : null, lastManuallyToggled: e.find(function(u) {
        return u.id === s.lastManuallyToggled;
      }) ? s.lastManuallyToggled : null, lastUserSelect: e.find(function(u) {
        return u.id === s.lastUserSelect;
      }) ? s.lastUserSelect : h.children[0] });
    }
  }, [e]);
  var v = xe(new Set(r), L);
  return ae(function() {
    if (r) {
      v.size && M({ type: At, ids: r, multiSelect: _ });
      var h, u = re(r);
      try {
        for (u.s(); !(h = u.n()).done; ) {
          var p = h.value;
          y && !N.has(p) && M({ type: ue, ids: ve(e, [p], N), select: !0, multiSelect: _, lastInteractedWith: p });
        }
      } catch (S) {
        u.e(S);
      } finally {
        u.f();
      }
    }
  }, [r]), ae(function() {
    var h = new Set(n), u = ye(h, K), p = ye(K, h);
    if (p.size) {
      var S, g = re(p);
      try {
        for (g.s(); !(S = g.n()).done; ) {
          var m = S.value;
          if (Q(e, m) || H(e, m).isBranch) {
            var O = [m].concat(ie(ge(e, m, /* @__PURE__ */ new Set())));
            M({ type: Pe, ids: O, lastInteractedWith: m });
          }
        }
      } catch (J) {
        g.e(J);
      } finally {
        g.f();
      }
    }
    if (u.size) {
      var x, T = re(u);
      try {
        for (T.s(); !(x = T.n()).done; ) {
          var R = x.value;
          if (Q(e, R) || H(e, R).isBranch) {
            var f = fe(e, R);
            M(f ? { type: _e, ids: [R, f], lastInteractedWith: R } : { type: Ce, id: R, lastInteractedWith: R });
          }
        }
      } catch (J) {
        T.e(J);
      } finally {
        T.f();
      }
    }
  }, [n]), ae(function() {
    if (W) {
      var h = new Set(ie($));
      k && U !== te && U !== et && U !== Ce && U !== Re && h.add(k);
      var u = [];
      h.forEach(function(ee) {
        e.find(function(Me) {
          return Me.id === ee;
        }) || u.push(ee);
      }), u.forEach(function(ee) {
        return h.delete(ee);
      });
      var p, S = function(ee, Me, De, we, rt, Mt) {
        var nt, pe = { every: /* @__PURE__ */ new Set(), some: /* @__PURE__ */ new Set(), none: /* @__PURE__ */ new Set() }, Te = re(Me);
        try {
          for (Te.s(); !(nt = Te.n()).done; ) for (var ke = nt.value; ; ) {
            var de = fe(ee, ke);
            if (de === 0 || de == null || de != null && we.has(de)) break;
            var Le = H(ee, de).children.filter(function(Z) {
              return !we.has(Z);
            });
            if (Le.length === 0) break;
            if (Le.some(function(Z) {
              return De.has(Z) || pe.some.has(Z) && !pe.none.has(Z) || rt.has(Z) && !pe.none.has(Z);
            })) Le.every(function(Z) {
              return De.has(Z);
            }) ? pe.every.add(de) : pe.some.add(de);
            else {
              var at = Xt(ee, ke, we).find(function(Z) {
                return De.has(Z);
              });
              if (!Mt && at) {
                ge(ee, at, we).forEach(function(Z) {
                  rt.has(Z) && pe.none.add(Z);
                });
                break;
              }
              pe.none.add(de);
            }
            ke = de;
          }
        } catch (Z) {
          Te.e(Z);
        } finally {
          Te.f();
        }
        return pe;
      }(e, h, L, N, B, _), g = S.every, m = S.some, O = S.none, x = re(g);
      try {
        for (x.s(); !(p = x.n()).done; ) {
          var T = p.value;
          L.has(T) || M({ type: Ee, id: T, multiSelect: _ || er(e, T, L), keepFocus: !0, NotUserAction: !0, lastInteractedWith: k });
        }
      } catch (ee) {
        x.e(ee);
      } finally {
        x.f();
      }
      var R, f = re(m);
      try {
        for (f.s(); !(R = f.n()).done; ) {
          var J = R.value;
          B.has(J) || M({ type: tt, id: J, lastInteractedWith: k, keepFocus: !0, NotUserAction: !0 });
        }
      } catch (ee) {
        f.e(ee);
      } finally {
        f.f();
      }
      var he, be = re(O);
      try {
        for (be.s(); !(he = be.n()).done; ) {
          var We = he.value;
          (L.has(We) || B.has(We)) && M({ type: Et, id: We, multiSelect: _, keepFocus: !0, NotUserAction: !0, lastInteractedWith: k, lastManuallyToggled: C });
        }
      } catch (ee) {
        be.e(ee);
      } finally {
        be.f();
      }
    }
  }, [e, _, W, L, V, N, B, U, z, $, k, v]), ae(function() {
    if (k != null && G != null && (c == null ? void 0 : c.current) != null && (d == null ? void 0 : d.current) != null && ((D == null ? void 0 : D.current) == null || document.activeElement && D.current.contains(document.activeElement) || q)) {
      var h = c.current[G];
      (function(u) {
        u != null && u.scrollIntoView && u.scrollIntoView({ block: "nearest" });
      })(d.current[k]), function(u) {
        u != null && u.focus && u.focus({ preventScroll: !0 });
      }(h);
    }
  }, [G, c, d, k]), ae(function() {
    if (q || M({ type: Tt, id: j.children[0] }), q && e.find(function(u) {
      return u.id === q;
    })) {
      var h = function u(p, S) {
        var g = fe(p, S), m = g && (Q(p, g) || H(p, g).isBranch);
        return g && m ? [g].concat(ie(u(p, g))) : [];
      }(e, q);
      h.length && M({ type: _e, ids: h, lastInteractedWith: q }), M({ type: te, id: q, lastInteractedWith: q });
    }
  }, [q]), [s, M];
}, ar = oe.forwardRef(function(t, e) {
  var r = t.data, n = t.selectedIds, i = t.nodeRenderer, a = t.onSelect, l = a === void 0 ? Se : a, c = t.onNodeSelect, d = c === void 0 ? Se : c, b = t.onExpand, w = b === void 0 ? Se : b, I = t.onLoadData, A = t.className, E = A === void 0 ? "" : A, _ = t.multiSelect, y = _ !== void 0 && _, W = t.propagateSelect, D = W !== void 0 && W, q = t.propagateSelectUpwards, j = q !== void 0 && q, P = t.propagateCollapse, s = P !== void 0 && P, M = t.expandOnKeyboardSelect, L = M !== void 0 && M, V = t.togglableSelect, N = V !== void 0 && V, G = t.defaultExpandedIds, B = G === void 0 ? [] : G, U = t.defaultSelectedIds, k = U === void 0 ? [] : U, C = t.defaultDisabledIds, z = C === void 0 ? [] : C, $ = t.clickAction, K = $ === void 0 ? ce.select : $, se = t.nodeAction, le = se === void 0 ? "select" : se, o = t.expandedIds, v = t.focusedId, h = t.onBlur, u = Qe(t, ["data", "selectedIds", "nodeRenderer", "onSelect", "onNodeSelect", "onExpand", "onLoadData", "className", "multiSelect", "propagateSelect", "propagateSelectUpwards", "propagateCollapse", "expandOnKeyboardSelect", "togglableSelect", "defaultExpandedIds", "defaultSelectedIds", "defaultDisabledIds", "clickAction", "nodeAction", "expandedIds", "focusedId", "onBlur"]);
  (function(T) {
    if (ht(T.map(function(R) {
      return R.id;
    }))) throw Error("Multiple TreeView nodes have the same ID. IDs must be unique.");
    if (T.forEach(function(R) {
      if (R.id === R.parent) throw Error("Node with id=".concat(R.id, " has parent reference to itself."));
      if (ht(R.children)) throw Error("Node with id=".concat(R.id, " contains duplicate ids in its children."));
    }), T.filter(function(R) {
      return R.parent === null;
    }).length === 0) throw Error("TreeView must have one root node.");
    if (T.filter(function(R) {
      return R.parent === null;
    }).length > 1) throw Error("TreeView can have only one root node.");
    ne(T).children.length || console.warn("TreeView have no nodes to display.");
  })(r);
  var p = Ie({}), S = Ie({}), g = Ie(null);
  e != null && (g = e);
  var m = It(nr({ data: r, controlledSelectedIds: n, controlledExpandedIds: o, defaultExpandedIds: B, defaultSelectedIds: k, defaultDisabledIds: z, nodeRefs: p, leafRefs: S, onSelect: l, onNodeSelect: d, onExpand: w, onLoadData: I, togglableSelect: N, multiSelect: y, propagateSelect: D, propagateSelectUpwards: j, treeRef: g, focusedId: v }), 2), O = m[0], x = m[1];
  return D = D && y, oe.createElement("ul", Object.assign({ className: Ae(yt.root, E), role: "tree", "aria-multiselectable": le === "select" ? y : void 0, ref: g, onBlur: function(T) {
    Qt(T, g.current, function() {
      h && h({ treeState: O, dispatch: x }), x({ type: Ot });
    });
  }, onKeyDown: ir({ data: r, tabbableId: O.tabbableId, expandedIds: O.expandedIds, selectedIds: O.selectedIds, disabledIds: O.disabledIds, halfSelectedIds: O.halfSelectedIds, clickAction: K, dispatch: x, propagateCollapse: s, propagateSelect: D, multiSelect: y, expandOnKeyboardSelect: L, togglableSelect: N }) }, u), ne(r).children.map(function(T, R) {
    return oe.createElement(Wt, Object.assign({ key: "".concat(T, "-").concat(Je(T)), data: r, element: H(r, T), setsize: ne(r).children.length, posinset: R + 1, level: 1 }, O, { state: O, dispatch: x, nodeRefs: p, leafRefs: S, baseClassNames: yt, nodeRenderer: i, propagateCollapse: s, propagateSelect: D, propagateSelectUpwards: j, multiSelect: y, togglableSelect: N, clickAction: K, nodeAction: le }));
  }));
}), ir = function(t) {
  var e = t.data, r = t.expandedIds, n = t.selectedIds, i = t.disabledIds, a = t.tabbableId, l = t.dispatch, c = t.propagateCollapse, d = t.propagateSelect, b = t.multiSelect, w = t.expandOnKeyboardSelect, I = t.togglableSelect, A = t.clickAction;
  return function(E) {
    var _ = H(e, a), y = _.id;
    if (E.ctrlKey) {
      if (E.key === "a" && A !== ce.focus) {
        E.preventDefault();
        var W = e.filter(function(k) {
          return k.parent !== null;
        }).map(function(k) {
          return k.id;
        }).filter(function(k) {
          return !i.has(k);
        });
        l({ type: ue, multiSelect: b, select: Array.from(n).filter(function(k) {
          return !i.has(k);
        }).length !== W.length, ids: W, lastInteractedWith: _.id });
      } else if (E.shiftKey && (E.key === "Home" || E.key === "End") && A !== ce.focus) {
        var D = E.key === "Home" ? ne(e).children[0] : Ke(e, y, r), q = Pt({ data: e, expandedIds: r, from: y, to: D }).filter(function(k) {
          return !i.has(k);
        });
        l({ type: ue, multiSelect: b, select: !0, ids: d ? ve(e, q, i) : q }), l({ type: te, id: D, lastInteractedWith: D });
      }
    } else {
      if (E.shiftKey) switch (E.key) {
        case "ArrowUp":
          E.preventDefault();
          var j = Ge(e, y, r);
          return void (j == null || i.has(j) || (A !== ce.focus && l({ type: ue, ids: d ? ve(e, [j], i) : [j], select: !0, multiSelect: b, lastInteractedWith: j, lastManuallyToggled: j }), l({ type: te, id: j, lastInteractedWith: j })));
        case "ArrowDown":
          E.preventDefault();
          var P = me(e, y, r);
          return void (P == null || i.has(P) || (A !== ce.focus && l({ type: ue, ids: d ? ve(e, [P], i) : [P], multiSelect: b, select: !0, lastInteractedWith: P, lastManuallyToggled: P }), l({ type: te, id: P, lastInteractedWith: P })));
      }
      switch (E.key) {
        case "ArrowDown":
          E.preventDefault();
          var s = me(e, y, r);
          return void (s != null && l({ type: te, id: s, lastInteractedWith: s }));
        case "ArrowUp":
          E.preventDefault();
          var M = Ge(e, y, r);
          return void (M != null && l({ type: te, id: M, lastInteractedWith: M }));
        case "ArrowLeft":
          if (E.preventDefault(), (Q(e, y) || _.isBranch) && r.has(a)) if (c) {
            var L = [y].concat(ie(ge(e, y, /* @__PURE__ */ new Set())));
            l({ type: Pe, ids: L, lastInteractedWith: _.id });
          } else l({ type: et, id: y, lastInteractedWith: y });
          else if (!ne(e).children.includes(y)) {
            var V = fe(e, y);
            if (V == null) throw new Error("parentId of root element is null");
            l({ type: te, id: V, lastInteractedWith: V });
          }
          return;
        case "ArrowRight":
          return E.preventDefault(), void ((Q(e, y) || _.isBranch) && (r.has(a) ? l({ type: te, id: _.children[0], lastInteractedWith: _.children[0] }) : l({ type: Ce, id: y, lastInteractedWith: y })));
        case "Home":
          E.preventDefault(), l({ type: te, id: ne(e).children[0], lastInteractedWith: ne(e).children[0] });
          break;
        case "End":
          E.preventDefault();
          var N = Ke(e, ne(e).id, r);
          return void l({ type: te, id: N, lastInteractedWith: N });
        case "*":
          E.preventDefault();
          var G = fe(e, y);
          if (G == null) throw new Error("parentId of element is null");
          var B = H(e, G).children.filter(function(k) {
            return Q(e, k) || H(e, k).isBranch;
          });
          return void l({ type: _e, ids: B, lastInteractedWith: y });
        case "Enter":
        case " ":
        case "Spacebar":
          return E.preventDefault(), A === ce.focus ? void 0 : (l({ type: I ? Rt(e, y, n, i) : Ee, id: y, multiSelect: b, lastInteractedWith: y, lastManuallyToggled: y }), d && !i.has(_.id) && l({ type: ue, ids: ve(e, [y], i), select: !I || !n.has(y), multiSelect: b, lastInteractedWith: y, lastManuallyToggled: y }), void (w && l({ type: Re, id: y, lastInteractedWith: y })));
        default:
          if (E.key.length === 1) for (var U = me(e, y, r); U !== y; ) if (U != null) {
            if (H(e, U).name[0].toLowerCase() === E.key.toLowerCase()) return void l({ type: te, id: U, lastInteractedWith: y });
            U = me(e, U, r);
          } else U = ne(e).children[0];
          return;
      }
    }
  };
};
ar.propTypes = { data: X.array.isRequired, onSelect: X.func, onNodeSelect: X.func, onExpand: X.func, className: X.string, nodeRenderer: X.func.isRequired, defaultExpandedIds: X.array, defaultSelectedIds: X.array, expandedIds: X.array, selectedIds: X.array, defaultDisabledIds: X.array, propagateCollapse: X.bool, propagateSelect: X.bool, propagateSelectUpwards: X.bool, multiSelect: X.bool, expandOnKeyboardSelect: X.bool, togglableSelect: X.bool, nodeAction: X.oneOf(Ht), clickAction: X.oneOf(Vt), onBlur: X.func, onLoadData: X.func, focusedId: X.oneOfType([X.string, X.number]) };
export {
  Ae as c,
  ar as f
};
