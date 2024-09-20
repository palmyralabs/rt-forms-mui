import M from "dayjs";
import { g as v, c as H } from "./_commonjsHelpers.js";
function K() {
  return K = Object.assign ? Object.assign.bind() : function(l) {
    for (var m = 1; m < arguments.length; m++) {
      var h = arguments[m];
      for (var t in h) ({}).hasOwnProperty.call(h, t) && (l[t] = h[t]);
    }
    return l;
  }, K.apply(null, arguments);
}
var nt = { exports: {} };
(function(l, m) {
  (function(h, t) {
    l.exports = t();
  })(H, function() {
    var h = "week", t = "year";
    return function(e, n, a) {
      var s = n.prototype;
      s.week = function(r) {
        if (r === void 0 && (r = null), r !== null) return this.add(7 * (r - this.week()), "day");
        var d = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var u = a(this).startOf(t).add(1, t).date(d), y = a(this).endOf(h);
          if (u.isBefore(y)) return 1;
        }
        var g = a(this).startOf(t).date(d).startOf(h).subtract(1, "millisecond"), A = this.diff(g, h, !0);
        return A < 0 ? a(this).startOf("week").week() : Math.ceil(A);
      }, s.weeks = function(r) {
        return r === void 0 && (r = null), this.week(r);
      };
    };
  });
})(nt);
var mt = nt.exports;
const Mt = /* @__PURE__ */ v(mt);
var it = { exports: {} };
(function(l, m) {
  (function(h, t) {
    l.exports = t();
  })(H, function() {
    var h = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, e = /\d/, n = /\d\d/, a = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, r = {}, d = function(i) {
      return (i = +i) + (i > 68 ? 1900 : 2e3);
    }, u = function(i) {
      return function(o) {
        this[i] = +o;
      };
    }, y = [/[+-]\d\d:?(\d\d)?|Z/, function(i) {
      (this.zone || (this.zone = {})).offset = function(o) {
        if (!o || o === "Z") return 0;
        var f = o.match(/([+-]|\d\d)/g), c = 60 * f[1] + (+f[2] || 0);
        return c === 0 ? 0 : f[0] === "+" ? -c : c;
      }(i);
    }], g = function(i) {
      var o = r[i];
      return o && (o.indexOf ? o : o.s.concat(o.f));
    }, A = function(i, o) {
      var f, c = r.meridiem;
      if (c) {
        for (var Y = 1; Y <= 24; Y += 1) if (i.indexOf(c(Y, 0, o)) > -1) {
          f = Y > 12;
          break;
        }
      } else f = i === (o ? "pm" : "PM");
      return f;
    }, N = { A: [s, function(i) {
      this.afternoon = A(i, !1);
    }], a: [s, function(i) {
      this.afternoon = A(i, !0);
    }], Q: [e, function(i) {
      this.month = 3 * (i - 1) + 1;
    }], S: [e, function(i) {
      this.milliseconds = 100 * +i;
    }], SS: [n, function(i) {
      this.milliseconds = 10 * +i;
    }], SSS: [/\d{3}/, function(i) {
      this.milliseconds = +i;
    }], s: [a, u("seconds")], ss: [a, u("seconds")], m: [a, u("minutes")], mm: [a, u("minutes")], H: [a, u("hours")], h: [a, u("hours")], HH: [a, u("hours")], hh: [a, u("hours")], D: [a, u("day")], DD: [n, u("day")], Do: [s, function(i) {
      var o = r.ordinal, f = i.match(/\d+/);
      if (this.day = f[0], o) for (var c = 1; c <= 31; c += 1) o(c).replace(/\[|\]/g, "") === i && (this.day = c);
    }], w: [a, u("week")], ww: [n, u("week")], M: [a, u("month")], MM: [n, u("month")], MMM: [s, function(i) {
      var o = g("months"), f = (g("monthsShort") || o.map(function(c) {
        return c.slice(0, 3);
      })).indexOf(i) + 1;
      if (f < 1) throw new Error();
      this.month = f % 12 || f;
    }], MMMM: [s, function(i) {
      var o = g("months").indexOf(i) + 1;
      if (o < 1) throw new Error();
      this.month = o % 12 || o;
    }], Y: [/[+-]?\d+/, u("year")], YY: [n, function(i) {
      this.year = d(i);
    }], YYYY: [/\d{4}/, u("year")], Z: y, ZZ: y };
    function U(i) {
      var o, f;
      o = i, f = r && r.formats;
      for (var c = (i = o.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(S, k, D) {
        var T = D && D.toUpperCase();
        return k || f[D] || h[D] || f[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(x, z, j) {
          return z || j.slice(1);
        });
      })).match(t), Y = c.length, w = 0; w < Y; w += 1) {
        var $ = c[w], b = N[$], O = b && b[0], L = b && b[1];
        c[w] = L ? { regex: O, parser: L } : $.replace(/^\[|\]$/g, "");
      }
      return function(S) {
        for (var k = {}, D = 0, T = 0; D < Y; D += 1) {
          var x = c[D];
          if (typeof x == "string") T += x.length;
          else {
            var z = x.regex, j = x.parser, W = S.slice(T), P = z.exec(W)[0];
            j.call(k, P), S = S.replace(P, "");
          }
        }
        return function(C) {
          var E = C.afternoon;
          if (E !== void 0) {
            var p = C.hours;
            E ? p < 12 && (C.hours += 12) : p === 12 && (C.hours = 0), delete C.afternoon;
          }
        }(k), k;
      };
    }
    return function(i, o, f) {
      f.p.customParseFormat = !0, i && i.parseTwoDigitYear && (d = i.parseTwoDigitYear);
      var c = o.prototype, Y = c.parse;
      c.parse = function(w) {
        var $ = w.date, b = w.utc, O = w.args;
        this.$u = b;
        var L = O[1];
        if (typeof L == "string") {
          var S = O[2] === !0, k = O[3] === !0, D = S || k, T = O[2];
          k && (T = O[2]), r = this.$locale(), !S && T && (r = f.Ls[T]), this.$d = function(W, P, C, E) {
            try {
              if (["x", "X"].indexOf(P) > -1) return new Date((P === "X" ? 1e3 : 1) * W);
              var p = U(P)(W), G = p.year, F = p.month, ut = p.day, dt = p.hours, ft = p.minutes, ct = p.seconds, lt = p.milliseconds, tt = p.zone, et = p.week, Z = /* @__PURE__ */ new Date(), V = ut || (G || F ? 1 : Z.getDate()), _ = G || Z.getFullYear(), B = 0;
              G && !F || (B = F > 0 ? F - 1 : Z.getMonth());
              var I, X = dt || 0, Q = ft || 0, R = ct || 0, q = lt || 0;
              return tt ? new Date(Date.UTC(_, B, V, X, Q, R, q + 60 * tt.offset * 1e3)) : C ? new Date(Date.UTC(_, B, V, X, Q, R, q)) : (I = new Date(_, B, V, X, Q, R, q), et && (I = E(I).week(et).toDate()), I);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }($, L, b, f), this.init(), T && T !== !0 && (this.$L = this.locale(T).$L), D && $ != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), r = {};
        } else if (L instanceof Array) for (var x = L.length, z = 1; z <= x; z += 1) {
          O[1] = L[z - 1];
          var j = f.apply(this, O);
          if (j.isValid()) {
            this.$d = j.$d, this.$L = j.$L, this.init();
            break;
          }
          z === x && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else Y.call(this, w);
      };
    };
  });
})(it);
var yt = it.exports;
const pt = /* @__PURE__ */ v(yt);
var at = { exports: {} };
(function(l, m) {
  (function(h, t) {
    l.exports = t();
  })(H, function() {
    var h = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, e, n) {
      var a = e.prototype, s = a.format;
      n.en.formats = h, a.format = function(r) {
        r === void 0 && (r = "YYYY-MM-DDTHH:mm:ssZ");
        var d = this.$locale().formats, u = function(y, g) {
          return y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(A, N, U) {
            var i = U && U.toUpperCase();
            return N || g[U] || h[U] || g[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(o, f, c) {
              return f || c.slice(1);
            });
          });
        }(r, d === void 0 ? {} : d);
        return s.call(this, u);
      };
    };
  });
})(at);
var gt = at.exports;
const Tt = /* @__PURE__ */ v(gt);
var ot = { exports: {} };
(function(l, m) {
  (function(h, t) {
    l.exports = t();
  })(H, function() {
    return function(h, t, e) {
      t.prototype.isBetween = function(n, a, s, r) {
        var d = e(n), u = e(a), y = (r = r || "()")[0] === "(", g = r[1] === ")";
        return (y ? this.isAfter(d, s) : !this.isBefore(d, s)) && (g ? this.isBefore(u, s) : !this.isAfter(u, s)) || (y ? this.isBefore(d, s) : !this.isAfter(d, s)) && (g ? this.isAfter(u, s) : !this.isBefore(u, s));
      };
    };
  });
})(ot);
var Dt = ot.exports;
const Yt = /* @__PURE__ */ v(Dt);
var ht = { exports: {} };
(function(l, m) {
  (function(h, t) {
    l.exports = t();
  })(H, function() {
    return function(h, t) {
      var e = t.prototype, n = e.format;
      e.format = function(a) {
        var s = this, r = this.$locale();
        if (!this.isValid()) return n.bind(this)(a);
        var d = this.$utils(), u = (a || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(y) {
          switch (y) {
            case "Q":
              return Math.ceil((s.$M + 1) / 3);
            case "Do":
              return r.ordinal(s.$D);
            case "gggg":
              return s.weekYear();
            case "GGGG":
              return s.isoWeekYear();
            case "wo":
              return r.ordinal(s.week(), "W");
            case "w":
            case "ww":
              return d.s(s.week(), y === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return d.s(s.isoWeek(), y === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return d.s(String(s.$H === 0 ? 24 : s.$H), y === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(s.$d.getTime() / 1e3);
            case "x":
              return s.$d.getTime();
            case "z":
              return "[" + s.offsetName() + "]";
            case "zzz":
              return "[" + s.offsetName("long") + "]";
            default:
              return y;
          }
        });
        return n.bind(this)(u);
      };
    };
  });
})(ht);
var wt = ht.exports;
const Ot = /* @__PURE__ */ v(wt), st = /* @__PURE__ */ new Set();
function Lt(l, m = "warning") {
  if (process.env.NODE_ENV === "production")
    return;
  const h = Array.isArray(l) ? l.join(`
`) : l;
  st.has(h) || (st.add(h), m === "error" ? console.error(h) : console.warn(h));
}
M.extend(Tt);
M.extend(Mt);
M.extend(Yt);
M.extend(Ot);
const kt = {
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
}, xt = {
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
}, J = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`), rt = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`), zt = (l, m) => m ? (...h) => l(...h).locale(m) : l;
class Ct {
  constructor({
    locale: m,
    formats: h
  } = {}) {
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "dayjs", this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "[",
      end: "]"
    }, this.formatTokenMap = kt, this.setLocaleToValue = (t) => {
      const e = this.getCurrentLocaleCode();
      return e === t.locale() ? t : t.locale(e);
    }, this.hasUTCPlugin = () => typeof M.utc < "u", this.hasTimezonePlugin = () => typeof M.tz < "u", this.isSame = (t, e, n) => {
      const a = this.setTimezone(e, this.getTimezone(t));
      return t.format(n) === a.format(n);
    }, this.cleanTimezone = (t) => {
      switch (t) {
        case "default":
          return;
        case "system":
          return M.tz.guess();
        default:
          return t;
      }
    }, this.createSystemDate = (t) => {
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const e = M.tz.guess();
        return e !== "UTC" ? M.tz(t, e) : M(t);
      }
      return M(t);
    }, this.createUTCDate = (t) => {
      if (!this.hasUTCPlugin())
        throw new Error(J);
      return M.utc(t);
    }, this.createTZDate = (t, e) => {
      if (!this.hasUTCPlugin())
        throw new Error(J);
      if (!this.hasTimezonePlugin())
        throw new Error(rt);
      const n = t !== void 0 && !t.endsWith("Z");
      return M(t).tz(this.cleanTimezone(e), n);
    }, this.getLocaleFormats = () => {
      const t = M.Ls, e = this.locale || "en";
      let n = t[e];
      return n === void 0 && (process.env.NODE_ENV !== "production" && Lt(["MUI X: Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale."]), n = t.en), n.formats;
    }, this.adjustOffset = (t) => {
      if (!this.hasTimezonePlugin())
        return t;
      const e = this.getTimezone(t);
      if (e !== "UTC") {
        const n = t.tz(this.cleanTimezone(e), !0);
        if (n.$offset === (t.$offset ?? 0))
          return t;
        t.$offset = n.$offset;
      }
      return t;
    }, this.date = (t, e = "default") => {
      if (t === null)
        return null;
      let n;
      return e === "UTC" ? n = this.createUTCDate(t) : e === "system" || e === "default" && !this.hasTimezonePlugin() ? n = this.createSystemDate(t) : n = this.createTZDate(t, e), this.locale === void 0 ? n : n.locale(this.locale);
    }, this.getInvalidDate = () => M(/* @__PURE__ */ new Date("Invalid date")), this.getTimezone = (t) => {
      var e;
      if (this.hasTimezonePlugin()) {
        const n = (e = t.$x) == null ? void 0 : e.$timezone;
        if (n)
          return n;
      }
      return this.hasUTCPlugin() && t.isUTC() ? "UTC" : "system";
    }, this.setTimezone = (t, e) => {
      if (this.getTimezone(t) === e)
        return t;
      if (e === "UTC") {
        if (!this.hasUTCPlugin())
          throw new Error(J);
        return t.utc();
      }
      if (e === "system")
        return t.local();
      if (!this.hasTimezonePlugin()) {
        if (e === "default")
          return t;
        throw new Error(rt);
      }
      return M.tz(t, this.cleanTimezone(e));
    }, this.toJsDate = (t) => t.toDate(), this.parse = (t, e) => t === "" ? null : this.dayjs(t, e, this.locale, !0), this.getCurrentLocaleCode = () => this.locale || "en", this.is12HourCycleInCurrentLocale = () => /A|a/.test(this.getLocaleFormats().LT || ""), this.expandFormat = (t) => {
      const e = this.getLocaleFormats(), n = (a) => a.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (s, r, d) => r || d.slice(1));
      return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (a, s, r) => {
        const d = r && r.toUpperCase();
        return s || e[r] || n(e[d]);
      });
    }, this.isValid = (t) => t == null ? !1 : t.isValid(), this.format = (t, e) => this.formatByString(t, this.formats[e]), this.formatByString = (t, e) => this.dayjs(t).format(e), this.formatNumber = (t) => t, this.isEqual = (t, e) => t === null && e === null ? !0 : t === null || e === null ? !1 : t.toDate().getTime() === e.toDate().getTime(), this.isSameYear = (t, e) => this.isSame(t, e, "YYYY"), this.isSameMonth = (t, e) => this.isSame(t, e, "YYYY-MM"), this.isSameDay = (t, e) => this.isSame(t, e, "YYYY-MM-DD"), this.isSameHour = (t, e) => t.isSame(e, "hour"), this.isAfter = (t, e) => t > e, this.isAfterYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() > e.utc() : t.isAfter(e, "year"), this.isAfterDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() > e.utc() : t.isAfter(e, "day"), this.isBefore = (t, e) => t < e, this.isBeforeYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() < e.utc() : t.isBefore(e, "year"), this.isBeforeDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() < e.utc() : t.isBefore(e, "day"), this.isWithinRange = (t, [e, n]) => t >= e && t <= n, this.startOfYear = (t) => this.adjustOffset(t.startOf("year")), this.startOfMonth = (t) => this.adjustOffset(t.startOf("month")), this.startOfWeek = (t) => this.adjustOffset(this.setLocaleToValue(t).startOf("week")), this.startOfDay = (t) => this.adjustOffset(t.startOf("day")), this.endOfYear = (t) => this.adjustOffset(t.endOf("year")), this.endOfMonth = (t) => this.adjustOffset(t.endOf("month")), this.endOfWeek = (t) => this.adjustOffset(this.setLocaleToValue(t).endOf("week")), this.endOfDay = (t) => this.adjustOffset(t.endOf("day")), this.addYears = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "year") : t.add(e, "year")), this.addMonths = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "month") : t.add(e, "month")), this.addWeeks = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "week") : t.add(e, "week")), this.addDays = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "day") : t.add(e, "day")), this.addHours = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "hour") : t.add(e, "hour")), this.addMinutes = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "minute") : t.add(e, "minute")), this.addSeconds = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "second") : t.add(e, "second")), this.getYear = (t) => t.year(), this.getMonth = (t) => t.month(), this.getDate = (t) => t.date(), this.getHours = (t) => t.hour(), this.getMinutes = (t) => t.minute(), this.getSeconds = (t) => t.second(), this.getMilliseconds = (t) => t.millisecond(), this.setYear = (t, e) => this.adjustOffset(t.set("year", e)), this.setMonth = (t, e) => this.adjustOffset(t.set("month", e)), this.setDate = (t, e) => this.adjustOffset(t.set("date", e)), this.setHours = (t, e) => this.adjustOffset(t.set("hour", e)), this.setMinutes = (t, e) => this.adjustOffset(t.set("minute", e)), this.setSeconds = (t, e) => this.adjustOffset(t.set("second", e)), this.setMilliseconds = (t, e) => this.adjustOffset(t.set("millisecond", e)), this.getDaysInMonth = (t) => t.daysInMonth(), this.getWeekArray = (t) => {
      const e = this.startOfWeek(this.startOfMonth(t)), n = this.endOfWeek(this.endOfMonth(t));
      let a = 0, s = e;
      const r = [];
      for (; s < n; ) {
        const d = Math.floor(a / 7);
        r[d] = r[d] || [], r[d].push(s), s = this.addDays(s, 1), a += 1;
      }
      return r;
    }, this.getWeekNumber = (t) => t.week(), this.getYearRange = ([t, e]) => {
      const n = this.startOfYear(t), a = this.endOfYear(e), s = [];
      let r = n;
      for (; this.isBefore(r, a); )
        s.push(r), r = this.addYears(r, 1);
      return s;
    }, this.dayjs = zt(M, m), this.locale = m, this.formats = K({}, xt, h), M.extend(pt);
  }
  getDayOfWeek(m) {
    return m.day() + 1;
  }
}
export {
  Ct as A
};
