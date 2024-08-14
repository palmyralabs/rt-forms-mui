import m from "dayjs";
import { c as $, g as H } from "./_commonjsHelpers.js";
function R() {
  return R = Object.assign ? Object.assign.bind() : function(c) {
    for (var l = 1; l < arguments.length; l++) {
      var h = arguments[l];
      for (var t in h) ({}).hasOwnProperty.call(h, t) && (c[t] = h[t]);
    }
    return c;
  }, R.apply(null, arguments);
}
var tt = { exports: {} };
(function(c, l) {
  (function(h, t) {
    c.exports = t();
  })($, function() {
    var h = "week", t = "year";
    return function(e, s, u) {
      var r = s.prototype;
      r.week = function(i) {
        if (i === void 0 && (i = null), i !== null) return this.add(7 * (i - this.week()), "day");
        var a = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var M = u(this).startOf(t).add(1, t).date(a), y = u(this).endOf(h);
          if (M.isBefore(y)) return 1;
        }
        var D = u(this).startOf(t).date(a).startOf(h).subtract(1, "millisecond"), P = this.diff(D, h, !0);
        return P < 0 ? u(this).startOf("week").week() : Math.ceil(P);
      }, r.weeks = function(i) {
        return i === void 0 && (i = null), this.week(i);
      };
    };
  });
})(tt);
var dt = tt.exports;
const ft = /* @__PURE__ */ H(dt);
var et = { exports: {} };
(function(c, l) {
  (function(h, t) {
    c.exports = t();
  })($, function() {
    var h = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, e = /\d\d/, s = /\d\d?/, u = /\d*[^-_:/,()\s\d]+/, r = {}, i = function(n) {
      return (n = +n) + (n > 68 ? 1900 : 2e3);
    }, a = function(n) {
      return function(o) {
        this[n] = +o;
      };
    }, M = [/[+-]\d\d:?(\d\d)?|Z/, function(n) {
      (this.zone || (this.zone = {})).offset = function(o) {
        if (!o || o === "Z") return 0;
        var f = o.match(/([+-]|\d\d)/g), d = 60 * f[1] + (+f[2] || 0);
        return d === 0 ? 0 : f[0] === "+" ? -d : d;
      }(n);
    }], y = function(n) {
      var o = r[n];
      return o && (o.indexOf ? o : o.s.concat(o.f));
    }, D = function(n, o) {
      var f, d = r.meridiem;
      if (d) {
        for (var p = 1; p <= 24; p += 1) if (n.indexOf(d(p, 0, o)) > -1) {
          f = p > 12;
          break;
        }
      } else f = n === (o ? "pm" : "PM");
      return f;
    }, P = { A: [u, function(n) {
      this.afternoon = D(n, !1);
    }], a: [u, function(n) {
      this.afternoon = D(n, !0);
    }], S: [/\d/, function(n) {
      this.milliseconds = 100 * +n;
    }], SS: [e, function(n) {
      this.milliseconds = 10 * +n;
    }], SSS: [/\d{3}/, function(n) {
      this.milliseconds = +n;
    }], s: [s, a("seconds")], ss: [s, a("seconds")], m: [s, a("minutes")], mm: [s, a("minutes")], H: [s, a("hours")], h: [s, a("hours")], HH: [s, a("hours")], hh: [s, a("hours")], D: [s, a("day")], DD: [e, a("day")], Do: [u, function(n) {
      var o = r.ordinal, f = n.match(/\d+/);
      if (this.day = f[0], o) for (var d = 1; d <= 31; d += 1) o(d).replace(/\[|\]/g, "") === n && (this.day = d);
    }], M: [s, a("month")], MM: [e, a("month")], MMM: [u, function(n) {
      var o = y("months"), f = (y("monthsShort") || o.map(function(d) {
        return d.slice(0, 3);
      })).indexOf(n) + 1;
      if (f < 1) throw new Error();
      this.month = f % 12 || f;
    }], MMMM: [u, function(n) {
      var o = y("months").indexOf(n) + 1;
      if (o < 1) throw new Error();
      this.month = o % 12 || o;
    }], Y: [/[+-]?\d+/, a("year")], YY: [e, function(n) {
      this.year = i(n);
    }], YYYY: [/\d{4}/, a("year")], Z: M, ZZ: M };
    function B(n) {
      var o, f;
      o = n, f = r && r.formats;
      for (var d = (n = o.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(S, x, Y) {
        var g = Y && Y.toUpperCase();
        return x || f[Y] || h[Y] || f[g].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, z, j) {
          return z || j.slice(1);
        });
      })).match(t), p = d.length, w = 0; w < p; w += 1) {
        var v = d[w], b = P[v], O = b && b[0], L = b && b[1];
        d[w] = L ? { regex: O, parser: L } : v.replace(/^\[|\]$/g, "");
      }
      return function(S) {
        for (var x = {}, Y = 0, g = 0; Y < p; Y += 1) {
          var k = d[Y];
          if (typeof k == "string") g += k.length;
          else {
            var z = k.regex, j = k.parser, W = S.slice(g), A = z.exec(W)[0];
            j.call(x, A), S = S.replace(A, "");
          }
        }
        return function(C) {
          var T = C.afternoon;
          if (T !== void 0) {
            var U = C.hours;
            T ? U < 12 && (C.hours += 12) : U === 12 && (C.hours = 0), delete C.afternoon;
          }
        }(x), x;
      };
    }
    return function(n, o, f) {
      f.p.customParseFormat = !0, n && n.parseTwoDigitYear && (i = n.parseTwoDigitYear);
      var d = o.prototype, p = d.parse;
      d.parse = function(w) {
        var v = w.date, b = w.utc, O = w.args;
        this.$u = b;
        var L = O[1];
        if (typeof L == "string") {
          var S = O[2] === !0, x = O[3] === !0, Y = S || x, g = O[2];
          x && (g = O[2]), r = this.$locale(), !S && g && (r = f.Ls[g]), this.$d = function(W, A, C) {
            try {
              if (["x", "X"].indexOf(A) > -1) return new Date((A === "X" ? 1e3 : 1) * W);
              var T = B(A)(W), U = T.year, E = T.month, it = T.day, at = T.hours, ot = T.minutes, ht = T.seconds, ut = T.milliseconds, q = T.zone, I = /* @__PURE__ */ new Date(), N = it || (U || E ? 1 : I.getDate()), G = U || I.getFullYear(), F = 0;
              U && !E || (F = E > 0 ? E - 1 : I.getMonth());
              var Z = at || 0, V = ot || 0, _ = ht || 0, X = ut || 0;
              return q ? new Date(Date.UTC(G, F, N, Z, V, _, X + 60 * q.offset * 1e3)) : C ? new Date(Date.UTC(G, F, N, Z, V, _, X)) : new Date(G, F, N, Z, V, _, X);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(v, L, b), this.init(), g && g !== !0 && (this.$L = this.locale(g).$L), Y && v != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), r = {};
        } else if (L instanceof Array) for (var k = L.length, z = 1; z <= k; z += 1) {
          O[1] = L[z - 1];
          var j = f.apply(this, O);
          if (j.isValid()) {
            this.$d = j.$d, this.$L = j.$L, this.init();
            break;
          }
          z === k && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else p.call(this, w);
      };
    };
  });
})(et);
var ct = et.exports;
const lt = /* @__PURE__ */ H(ct);
var st = { exports: {} };
(function(c, l) {
  (function(h, t) {
    c.exports = t();
  })($, function() {
    var h = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, e, s) {
      var u = e.prototype, r = u.format;
      s.en.formats = h, u.format = function(i) {
        i === void 0 && (i = "YYYY-MM-DDTHH:mm:ssZ");
        var a = this.$locale().formats, M = function(y, D) {
          return y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(P, B, n) {
            var o = n && n.toUpperCase();
            return B || D[n] || h[n] || D[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(f, d, p) {
              return d || p.slice(1);
            });
          });
        }(i, a === void 0 ? {} : a);
        return r.call(this, M);
      };
    };
  });
})(st);
var mt = st.exports;
const Mt = /* @__PURE__ */ H(mt);
var rt = { exports: {} };
(function(c, l) {
  (function(h, t) {
    c.exports = t();
  })($, function() {
    return function(h, t, e) {
      t.prototype.isBetween = function(s, u, r, i) {
        var a = e(s), M = e(u), y = (i = i || "()")[0] === "(", D = i[1] === ")";
        return (y ? this.isAfter(a, r) : !this.isBefore(a, r)) && (D ? this.isBefore(M, r) : !this.isAfter(M, r)) || (y ? this.isBefore(a, r) : !this.isAfter(a, r)) && (D ? this.isAfter(M, r) : !this.isBefore(M, r));
      };
    };
  });
})(rt);
var yt = rt.exports;
const pt = /* @__PURE__ */ H(yt);
var nt = { exports: {} };
(function(c, l) {
  (function(h, t) {
    c.exports = t();
  })($, function() {
    return function(h, t) {
      var e = t.prototype, s = e.format;
      e.format = function(u) {
        var r = this, i = this.$locale();
        if (!this.isValid()) return s.bind(this)(u);
        var a = this.$utils(), M = (u || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(y) {
          switch (y) {
            case "Q":
              return Math.ceil((r.$M + 1) / 3);
            case "Do":
              return i.ordinal(r.$D);
            case "gggg":
              return r.weekYear();
            case "GGGG":
              return r.isoWeekYear();
            case "wo":
              return i.ordinal(r.week(), "W");
            case "w":
            case "ww":
              return a.s(r.week(), y === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return a.s(r.isoWeek(), y === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return a.s(String(r.$H === 0 ? 24 : r.$H), y === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(r.$d.getTime() / 1e3);
            case "x":
              return r.$d.getTime();
            case "z":
              return "[" + r.offsetName() + "]";
            case "zzz":
              return "[" + r.offsetName("long") + "]";
            default:
              return y;
          }
        });
        return s.bind(this)(M);
      };
    };
  });
})(nt);
var gt = nt.exports;
const Tt = /* @__PURE__ */ H(gt), J = /* @__PURE__ */ new Set();
function Dt(c, l = "warning") {
  if (process.env.NODE_ENV === "production")
    return;
  const h = Array.isArray(c) ? c.join(`
`) : c;
  J.has(h) || (J.add(h), l === "error" ? console.error(h) : console.warn(h));
}
m.extend(Mt);
m.extend(ft);
m.extend(pt);
m.extend(Tt);
const Yt = {
  // Year
  YY: "year",
  YYYY: {
    sectionType: "year",
    contentType: "digit",
    maxLength: 4
  },
  // Month
  M: {
    sectionType: "month",
    contentType: "digit",
    maxLength: 2
  },
  MM: "month",
  MMM: {
    sectionType: "month",
    contentType: "letter"
  },
  MMMM: {
    sectionType: "month",
    contentType: "letter"
  },
  // Day of the month
  D: {
    sectionType: "day",
    contentType: "digit",
    maxLength: 2
  },
  DD: "day",
  Do: {
    sectionType: "day",
    contentType: "digit-with-letter"
  },
  // Day of the week
  d: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 2
  },
  dd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  ddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  dddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  // Meridiem
  A: "meridiem",
  a: "meridiem",
  // Hours
  H: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  HH: "hours",
  h: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  hh: "hours",
  // Minutes
  m: {
    sectionType: "minutes",
    contentType: "digit",
    maxLength: 2
  },
  mm: "minutes",
  // Seconds
  s: {
    sectionType: "seconds",
    contentType: "digit",
    maxLength: 2
  },
  ss: "seconds"
}, wt = {
  year: "YYYY",
  month: "MMMM",
  monthShort: "MMM",
  dayOfMonth: "D",
  dayOfMonthFull: "Do",
  weekday: "dddd",
  weekdayShort: "dd",
  hours24h: "HH",
  hours12h: "hh",
  meridiem: "A",
  minutes: "mm",
  seconds: "ss",
  fullDate: "ll",
  keyboardDate: "L",
  shortDate: "MMM D",
  normalDate: "D MMMM",
  normalDateWithWeekday: "ddd, MMM D",
  fullTime: "LT",
  fullTime12h: "hh:mm A",
  fullTime24h: "HH:mm",
  keyboardDateTime: "L LT",
  keyboardDateTime12h: "L hh:mm A",
  keyboardDateTime24h: "L HH:mm"
}, Q = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`), K = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`), Ot = (c, l) => l ? (...h) => c(...h).locale(l) : c;
class zt {
  constructor({
    locale: l,
    formats: h
  } = {}) {
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "dayjs", this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "[",
      end: "]"
    }, this.formatTokenMap = Yt, this.setLocaleToValue = (t) => {
      const e = this.getCurrentLocaleCode();
      return e === t.locale() ? t : t.locale(e);
    }, this.hasUTCPlugin = () => typeof m.utc < "u", this.hasTimezonePlugin = () => typeof m.tz < "u", this.isSame = (t, e, s) => {
      const u = this.setTimezone(e, this.getTimezone(t));
      return t.format(s) === u.format(s);
    }, this.cleanTimezone = (t) => {
      switch (t) {
        case "default":
          return;
        case "system":
          return m.tz.guess();
        default:
          return t;
      }
    }, this.createSystemDate = (t) => {
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const e = m.tz.guess();
        return e !== "UTC" ? m.tz(t, e) : m(t);
      }
      return m(t);
    }, this.createUTCDate = (t) => {
      if (!this.hasUTCPlugin())
        throw new Error(Q);
      return m.utc(t);
    }, this.createTZDate = (t, e) => {
      if (!this.hasUTCPlugin())
        throw new Error(Q);
      if (!this.hasTimezonePlugin())
        throw new Error(K);
      const s = t !== void 0 && !t.endsWith("Z");
      return m(t).tz(this.cleanTimezone(e), s);
    }, this.getLocaleFormats = () => {
      const t = m.Ls, e = this.locale || "en";
      let s = t[e];
      return s === void 0 && (process.env.NODE_ENV !== "production" && Dt(["MUI X: Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale."]), s = t.en), s.formats;
    }, this.adjustOffset = (t) => {
      if (!this.hasTimezonePlugin())
        return t;
      const e = this.getTimezone(t);
      if (e !== "UTC") {
        const s = t.tz(this.cleanTimezone(e), !0);
        if (s.$offset === (t.$offset ?? 0))
          return t;
        t.$offset = s.$offset;
      }
      return t;
    }, this.date = (t, e = "default") => {
      if (t === null)
        return null;
      let s;
      return e === "UTC" ? s = this.createUTCDate(t) : e === "system" || e === "default" && !this.hasTimezonePlugin() ? s = this.createSystemDate(t) : s = this.createTZDate(t, e), this.locale === void 0 ? s : s.locale(this.locale);
    }, this.getInvalidDate = () => m(/* @__PURE__ */ new Date("Invalid date")), this.getTimezone = (t) => {
      var e;
      if (this.hasTimezonePlugin()) {
        const s = (e = t.$x) == null ? void 0 : e.$timezone;
        if (s)
          return s;
      }
      return this.hasUTCPlugin() && t.isUTC() ? "UTC" : "system";
    }, this.setTimezone = (t, e) => {
      if (this.getTimezone(t) === e)
        return t;
      if (e === "UTC") {
        if (!this.hasUTCPlugin())
          throw new Error(Q);
        return t.utc();
      }
      if (e === "system")
        return t.local();
      if (!this.hasTimezonePlugin()) {
        if (e === "default")
          return t;
        throw new Error(K);
      }
      return m.tz(t, this.cleanTimezone(e));
    }, this.toJsDate = (t) => t.toDate(), this.parse = (t, e) => t === "" ? null : this.dayjs(t, e, this.locale, !0), this.getCurrentLocaleCode = () => this.locale || "en", this.is12HourCycleInCurrentLocale = () => /A|a/.test(this.getLocaleFormats().LT || ""), this.expandFormat = (t) => {
      const e = this.getLocaleFormats(), s = (u) => u.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (r, i, a) => i || a.slice(1));
      return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (u, r, i) => {
        const a = i && i.toUpperCase();
        return r || e[i] || s(e[a]);
      });
    }, this.isValid = (t) => t == null ? !1 : t.isValid(), this.format = (t, e) => this.formatByString(t, this.formats[e]), this.formatByString = (t, e) => this.dayjs(t).format(e), this.formatNumber = (t) => t, this.isEqual = (t, e) => t === null && e === null ? !0 : t === null || e === null ? !1 : t.toDate().getTime() === e.toDate().getTime(), this.isSameYear = (t, e) => this.isSame(t, e, "YYYY"), this.isSameMonth = (t, e) => this.isSame(t, e, "YYYY-MM"), this.isSameDay = (t, e) => this.isSame(t, e, "YYYY-MM-DD"), this.isSameHour = (t, e) => t.isSame(e, "hour"), this.isAfter = (t, e) => t > e, this.isAfterYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() > e.utc() : t.isAfter(e, "year"), this.isAfterDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() > e.utc() : t.isAfter(e, "day"), this.isBefore = (t, e) => t < e, this.isBeforeYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() < e.utc() : t.isBefore(e, "year"), this.isBeforeDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() < e.utc() : t.isBefore(e, "day"), this.isWithinRange = (t, [e, s]) => t >= e && t <= s, this.startOfYear = (t) => this.adjustOffset(t.startOf("year")), this.startOfMonth = (t) => this.adjustOffset(t.startOf("month")), this.startOfWeek = (t) => this.adjustOffset(t.startOf("week")), this.startOfDay = (t) => this.adjustOffset(t.startOf("day")), this.endOfYear = (t) => this.adjustOffset(t.endOf("year")), this.endOfMonth = (t) => this.adjustOffset(t.endOf("month")), this.endOfWeek = (t) => this.adjustOffset(t.endOf("week")), this.endOfDay = (t) => this.adjustOffset(t.endOf("day")), this.addYears = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "year") : t.add(e, "year")), this.addMonths = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "month") : t.add(e, "month")), this.addWeeks = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "week") : t.add(e, "week")), this.addDays = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "day") : t.add(e, "day")), this.addHours = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "hour") : t.add(e, "hour")), this.addMinutes = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "minute") : t.add(e, "minute")), this.addSeconds = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "second") : t.add(e, "second")), this.getYear = (t) => t.year(), this.getMonth = (t) => t.month(), this.getDate = (t) => t.date(), this.getHours = (t) => t.hour(), this.getMinutes = (t) => t.minute(), this.getSeconds = (t) => t.second(), this.getMilliseconds = (t) => t.millisecond(), this.setYear = (t, e) => this.adjustOffset(t.set("year", e)), this.setMonth = (t, e) => this.adjustOffset(t.set("month", e)), this.setDate = (t, e) => this.adjustOffset(t.set("date", e)), this.setHours = (t, e) => this.adjustOffset(t.set("hour", e)), this.setMinutes = (t, e) => this.adjustOffset(t.set("minute", e)), this.setSeconds = (t, e) => this.adjustOffset(t.set("second", e)), this.setMilliseconds = (t, e) => this.adjustOffset(t.set("millisecond", e)), this.getDaysInMonth = (t) => t.daysInMonth(), this.getWeekArray = (t) => {
      const e = this.setLocaleToValue(t), s = this.startOfWeek(this.startOfMonth(e)), u = this.endOfWeek(this.endOfMonth(e));
      let r = 0, i = s;
      const a = [];
      for (; i < u; ) {
        const M = Math.floor(r / 7);
        a[M] = a[M] || [], a[M].push(i), i = this.addDays(i, 1), r += 1;
      }
      return a;
    }, this.getWeekNumber = (t) => t.week(), this.getYearRange = ([t, e]) => {
      const s = this.startOfYear(t), u = this.endOfYear(e), r = [];
      let i = s;
      for (; this.isBefore(i, u); )
        r.push(i), i = this.addYears(i, 1);
      return r;
    }, this.dayjs = Ot(m, l), this.locale = l, this.formats = R({}, wt, h), m.extend(lt);
  }
  getDayOfWeek(l) {
    return l.day() + 1;
  }
}
export {
  zt as A
};
