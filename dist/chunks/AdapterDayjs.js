import l from "dayjs";
import { g as F } from "./_commonjsHelpers.js";
function ne() {
  return ne = Object.assign ? Object.assign.bind() : function(m) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (m[r] = t[r]);
    }
    return m;
  }, ne.apply(null, arguments);
}
var I = { exports: {} }, ge = I.exports, oe;
function Te() {
  return oe || (oe = 1, (function(m, e) {
    (function(t, r) {
      m.exports = r();
    })(ge, (function() {
      var t = "week", r = "year";
      return function(c, f, a) {
        var s = f.prototype;
        s.week = function(i) {
          if (i === void 0 && (i = null), i !== null) return this.add(7 * (i - this.week()), "day");
          var p = this.$locale().yearStart || 1;
          if (this.month() === 11 && this.date() > 25) {
            var u = a(this).startOf(r).add(1, r).date(p), M = a(this).endOf(t);
            if (u.isBefore(M)) return 1;
          }
          var g = a(this).startOf(r).date(p).startOf(t).subtract(1, "millisecond"), A = this.diff(g, t, !0);
          return A < 0 ? a(this).startOf("week").week() : Math.ceil(A);
        }, s.weeks = function(i) {
          return i === void 0 && (i = null), this.week(i);
        };
      };
    }));
  })(I)), I.exports;
}
var Ye = Te();
const De = /* @__PURE__ */ F(Ye);
var V = { exports: {} }, we = V.exports, ie;
function Oe() {
  return ie || (ie = 1, (function(m, e) {
    (function(t, r) {
      m.exports = r();
    })(we, (function() {
      var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, c = /\d/, f = /\d\d/, a = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, i = {}, p = function(n) {
        return (n = +n) + (n > 68 ? 1900 : 2e3);
      }, u = function(n) {
        return function(o) {
          this[n] = +o;
        };
      }, M = [/[+-]\d\d:?(\d\d)?|Z/, function(n) {
        (this.zone || (this.zone = {})).offset = (function(o) {
          if (!o || o === "Z") return 0;
          var d = o.match(/([+-]|\d\d)/g), h = 60 * d[1] + (+d[2] || 0);
          return h === 0 ? 0 : d[0] === "+" ? -h : h;
        })(n);
      }], g = function(n) {
        var o = i[n];
        return o && (o.indexOf ? o : o.s.concat(o.f));
      }, A = function(n, o) {
        var d, h = i.meridiem;
        if (h) {
          for (var D = 1; D <= 24; D += 1) if (n.indexOf(h(D, 0, o)) > -1) {
            d = D > 12;
            break;
          }
        } else d = n === (o ? "pm" : "PM");
        return d;
      }, q = { A: [s, function(n) {
        this.afternoon = A(n, !1);
      }], a: [s, function(n) {
        this.afternoon = A(n, !0);
      }], Q: [c, function(n) {
        this.month = 3 * (n - 1) + 1;
      }], S: [c, function(n) {
        this.milliseconds = 100 * +n;
      }], SS: [f, function(n) {
        this.milliseconds = 10 * +n;
      }], SSS: [/\d{3}/, function(n) {
        this.milliseconds = +n;
      }], s: [a, u("seconds")], ss: [a, u("seconds")], m: [a, u("minutes")], mm: [a, u("minutes")], H: [a, u("hours")], h: [a, u("hours")], HH: [a, u("hours")], hh: [a, u("hours")], D: [a, u("day")], DD: [f, u("day")], Do: [s, function(n) {
        var o = i.ordinal, d = n.match(/\d+/);
        if (this.day = d[0], o) for (var h = 1; h <= 31; h += 1) o(h).replace(/\[|\]/g, "") === n && (this.day = h);
      }], w: [a, u("week")], ww: [f, u("week")], M: [a, u("month")], MM: [f, u("month")], MMM: [s, function(n) {
        var o = g("months"), d = (g("monthsShort") || o.map((function(h) {
          return h.slice(0, 3);
        }))).indexOf(n) + 1;
        if (d < 1) throw new Error();
        this.month = d % 12 || d;
      }], MMMM: [s, function(n) {
        var o = g("months").indexOf(n) + 1;
        if (o < 1) throw new Error();
        this.month = o % 12 || o;
      }], Y: [/[+-]?\d+/, u("year")], YY: [f, function(n) {
        this.year = p(n);
      }], YYYY: [/\d{4}/, u("year")], Z: M, ZZ: M };
      function P(n) {
        var o, d;
        o = n, d = i && i.formats;
        for (var h = (n = o.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(S, L, Y) {
          var T = Y && Y.toUpperCase();
          return L || d[Y] || t[Y] || d[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(k, z, j) {
            return z || j.slice(1);
          }));
        }))).match(r), D = h.length, w = 0; w < D; w += 1) {
          var U = h[w], v = q[U], O = v && v[0], x = v && v[1];
          h[w] = x ? { regex: O, parser: x } : U.replace(/^\[|\]$/g, "");
        }
        return function(S) {
          for (var L = {}, Y = 0, T = 0; Y < D; Y += 1) {
            var k = h[Y];
            if (typeof k == "string") T += k.length;
            else {
              var z = k.regex, j = k.parser, b = S.slice(T), $ = z.exec(b)[0];
              j.call(L, $), S = S.replace($, "");
            }
          }
          return (function(C) {
            var H = C.afternoon;
            if (H !== void 0) {
              var y = C.hours;
              H ? y < 12 && (C.hours += 12) : y === 12 && (C.hours = 0), delete C.afternoon;
            }
          })(L), L;
        };
      }
      return function(n, o, d) {
        d.p.customParseFormat = !0, n && n.parseTwoDigitYear && (p = n.parseTwoDigitYear);
        var h = o.prototype, D = h.parse;
        h.parse = function(w) {
          var U = w.date, v = w.utc, O = w.args;
          this.$u = v;
          var x = O[1];
          if (typeof x == "string") {
            var S = O[2] === !0, L = O[3] === !0, Y = S || L, T = O[2];
            L && (T = O[2]), i = this.$locale(), !S && T && (i = d.Ls[T]), this.$d = (function(b, $, C, H) {
              try {
                if (["x", "X"].indexOf($) > -1) return new Date(($ === "X" ? 1e3 : 1) * b);
                var y = P($)(b), _ = y.year, W = y.month, le = y.day, me = y.hours, pe = y.minutes, Me = y.seconds, ye = y.milliseconds, se = y.zone, ae = y.week, R = /* @__PURE__ */ new Date(), X = le || (_ || W ? 1 : R.getDate()), Q = _ || R.getFullYear(), E = 0;
                _ && !W || (E = W > 0 ? W - 1 : R.getMonth());
                var B, J = me || 0, K = pe || 0, ee = Me || 0, te = ye || 0;
                return se ? new Date(Date.UTC(Q, E, X, J, K, ee, te + 60 * se.offset * 1e3)) : C ? new Date(Date.UTC(Q, E, X, J, K, ee, te)) : (B = new Date(Q, E, X, J, K, ee, te), ae && (B = H(B).week(ae).toDate()), B);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(U, x, v, d), this.init(), T && T !== !0 && (this.$L = this.locale(T).$L), Y && U != this.format(x) && (this.$d = /* @__PURE__ */ new Date("")), i = {};
          } else if (x instanceof Array) for (var k = x.length, z = 1; z <= k; z += 1) {
            O[1] = x[z - 1];
            var j = d.apply(this, O);
            if (j.isValid()) {
              this.$d = j.$d, this.$L = j.$L, this.init();
              break;
            }
            z === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else D.call(this, w);
        };
      };
    }));
  })(V)), V.exports;
}
var xe = Oe();
const Le = /* @__PURE__ */ F(xe);
var N = { exports: {} }, ke = N.exports, ue;
function ze() {
  return ue || (ue = 1, (function(m, e) {
    (function(t, r) {
      m.exports = r();
    })(ke, (function() {
      var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(r, c, f) {
        var a = c.prototype, s = a.format;
        f.en.formats = t, a.format = function(i) {
          i === void 0 && (i = "YYYY-MM-DDTHH:mm:ssZ");
          var p = this.$locale().formats, u = (function(M, g) {
            return M.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(A, q, P) {
              var n = P && P.toUpperCase();
              return q || g[P] || t[P] || g[n].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(o, d, h) {
                return d || h.slice(1);
              }));
            }));
          })(i, p === void 0 ? {} : p);
          return s.call(this, u);
        };
      };
    }));
  })(N)), N.exports;
}
var ve = ze();
const Se = /* @__PURE__ */ F(ve);
var Z = { exports: {} }, je = Z.exports, fe;
function Ce() {
  return fe || (fe = 1, (function(m, e) {
    (function(t, r) {
      m.exports = r();
    })(je, (function() {
      return function(t, r, c) {
        r.prototype.isBetween = function(f, a, s, i) {
          var p = c(f), u = c(a), M = (i = i || "()")[0] === "(", g = i[1] === ")";
          return (M ? this.isAfter(p, s) : !this.isBefore(p, s)) && (g ? this.isBefore(u, s) : !this.isAfter(u, s)) || (M ? this.isBefore(p, s) : !this.isAfter(p, s)) && (g ? this.isAfter(u, s) : !this.isBefore(u, s));
        };
      };
    }));
  })(Z)), Z.exports;
}
var Ae = Ce();
const Pe = /* @__PURE__ */ F(Ae);
var G = { exports: {} }, $e = G.exports, de;
function Ue() {
  return de || (de = 1, (function(m, e) {
    (function(t, r) {
      m.exports = r();
    })($e, (function() {
      return function(t, r) {
        var c = r.prototype, f = c.format;
        c.format = function(a) {
          var s = this, i = this.$locale();
          if (!this.isValid()) return f.bind(this)(a);
          var p = this.$utils(), u = (a || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(M) {
            switch (M) {
              case "Q":
                return Math.ceil((s.$M + 1) / 3);
              case "Do":
                return i.ordinal(s.$D);
              case "gggg":
                return s.weekYear();
              case "GGGG":
                return s.isoWeekYear();
              case "wo":
                return i.ordinal(s.week(), "W");
              case "w":
              case "ww":
                return p.s(s.week(), M === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return p.s(s.isoWeek(), M === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return p.s(String(s.$H === 0 ? 24 : s.$H), M === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(s.$d.getTime() / 1e3);
              case "x":
                return s.$d.getTime();
              case "z":
                return "[" + s.offsetName() + "]";
              case "zzz":
                return "[" + s.offsetName("long") + "]";
              default:
                return M;
            }
          }));
          return f.bind(this)(u);
        };
      };
    }));
  })(G)), G.exports;
}
var Fe = Ue();
const be = /* @__PURE__ */ F(Fe), he = /* @__PURE__ */ new Set();
function He(m, e = "warning") {
  if (process.env.NODE_ENV === "production")
    return;
  const t = Array.isArray(m) ? m.join(`
`) : m;
  he.has(t) || (he.add(t), e === "error" ? console.error(t) : console.warn(t));
}
l.extend(Se);
l.extend(De);
l.extend(Pe);
l.extend(be);
const We = {
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
}, Ee = {
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
  fullTime12h: "hh:mm A",
  fullTime24h: "HH:mm",
  keyboardDateTime12h: "L hh:mm A",
  keyboardDateTime24h: "L HH:mm"
}, re = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`), ce = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`);
class Ne {
  isMUIAdapter = !0;
  isTimezoneCompatible = !0;
  lib = "dayjs";
  escapedCharacters = {
    start: "[",
    end: "]"
  };
  formatTokenMap = We;
  constructor({
    locale: e,
    formats: t
  } = {}) {
    this.locale = e, this.formats = ne({}, Ee, t), l.extend(Le);
  }
  setLocaleToValue = (e) => {
    const t = this.getCurrentLocaleCode();
    return t === e.locale() ? e : e.locale(t);
  };
  hasUTCPlugin = () => typeof l.utc < "u";
  hasTimezonePlugin = () => typeof l.tz < "u";
  isSame = (e, t, r) => {
    const c = this.setTimezone(t, this.getTimezone(e));
    return e.format(r) === c.format(r);
  };
  /**
   * Replaces "default" by undefined and "system" by the system timezone before passing it to `dayjs`.
   */
  cleanTimezone = (e) => {
    switch (e) {
      case "default":
        return;
      case "system":
        return l.tz.guess();
      default:
        return e;
    }
  };
  createSystemDate = (e) => {
    let t;
    if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
      const r = l.tz.guess();
      r === "UTC" ? t = l(e) : t = l.tz(e, r);
    } else
      t = l(e);
    return this.setLocaleToValue(t);
  };
  createUTCDate = (e) => {
    if (!this.hasUTCPlugin())
      throw new Error(re);
    return this.setLocaleToValue(l.utc(e));
  };
  createTZDate = (e, t) => {
    if (!this.hasUTCPlugin())
      throw new Error(re);
    if (!this.hasTimezonePlugin())
      throw new Error(ce);
    const r = e !== void 0 && !e.endsWith("Z");
    return this.setLocaleToValue(l(e).tz(this.cleanTimezone(t), r));
  };
  getLocaleFormats = () => {
    const e = l.Ls, t = this.locale || "en";
    let r = e[t];
    return r === void 0 && (process.env.NODE_ENV !== "production" && He(["MUI X: Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale."]), r = e.en), r.formats;
  };
  /**
   * If the new day does not have the same offset as the old one (when switching to summer day time for example),
   * Then dayjs will not automatically adjust the offset (moment does).
   * We have to parse again the value to make sure the `fixOffset` method is applied.
   * See https://github.com/iamkun/dayjs/blob/b3624de619d6e734cd0ffdbbd3502185041c1b60/src/plugin/timezone/index.js#L72
   */
  adjustOffset = (e) => {
    if (!this.hasTimezonePlugin())
      return e;
    const t = this.getTimezone(e);
    if (t !== "UTC") {
      const r = e.tz(this.cleanTimezone(t), !0);
      if (r.$offset === (e.$offset ?? 0))
        return e;
      e.$offset = r.$offset;
    }
    return e;
  };
  date = (e, t = "default") => e === null ? null : t === "UTC" ? this.createUTCDate(e) : t === "system" || t === "default" && !this.hasTimezonePlugin() ? this.createSystemDate(e) : this.createTZDate(e, t);
  getInvalidDate = () => l(/* @__PURE__ */ new Date("Invalid date"));
  getTimezone = (e) => {
    if (this.hasTimezonePlugin()) {
      const t = e.$x?.$timezone;
      if (t)
        return t;
    }
    return this.hasUTCPlugin() && e.isUTC() ? "UTC" : "system";
  };
  setTimezone = (e, t) => {
    if (this.getTimezone(e) === t)
      return e;
    if (t === "UTC") {
      if (!this.hasUTCPlugin())
        throw new Error(re);
      return e.utc();
    }
    if (t === "system")
      return e.local();
    if (!this.hasTimezonePlugin()) {
      if (t === "default")
        return e;
      throw new Error(ce);
    }
    return this.setLocaleToValue(l.tz(e, this.cleanTimezone(t)));
  };
  toJsDate = (e) => e.toDate();
  parse = (e, t) => e === "" ? null : l(e, t, this.locale, !0);
  getCurrentLocaleCode = () => this.locale || "en";
  is12HourCycleInCurrentLocale = () => /A|a/.test(this.getLocaleFormats().LT || "");
  expandFormat = (e) => {
    const t = this.getLocaleFormats(), r = (c) => c.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (f, a, s) => a || s.slice(1));
    return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (c, f, a) => {
      const s = a && a.toUpperCase();
      return f || t[a] || r(t[s]);
    });
  };
  isValid = (e) => e == null ? !1 : e.isValid();
  format = (e, t) => this.formatByString(e, this.formats[t]);
  formatByString = (e, t) => this.setLocaleToValue(e).format(t);
  formatNumber = (e) => e;
  isEqual = (e, t) => e === null && t === null ? !0 : e === null || t === null ? !1 : e.toDate().getTime() === t.toDate().getTime();
  isSameYear = (e, t) => this.isSame(e, t, "YYYY");
  isSameMonth = (e, t) => this.isSame(e, t, "YYYY-MM");
  isSameDay = (e, t) => this.isSame(e, t, "YYYY-MM-DD");
  isSameHour = (e, t) => e.isSame(t, "hour");
  isAfter = (e, t) => e > t;
  isAfterYear = (e, t) => this.hasUTCPlugin() ? !this.isSameYear(e, t) && e.utc() > t.utc() : e.isAfter(t, "year");
  isAfterDay = (e, t) => this.hasUTCPlugin() ? !this.isSameDay(e, t) && e.utc() > t.utc() : e.isAfter(t, "day");
  isBefore = (e, t) => e < t;
  isBeforeYear = (e, t) => this.hasUTCPlugin() ? !this.isSameYear(e, t) && e.utc() < t.utc() : e.isBefore(t, "year");
  isBeforeDay = (e, t) => this.hasUTCPlugin() ? !this.isSameDay(e, t) && e.utc() < t.utc() : e.isBefore(t, "day");
  isWithinRange = (e, [t, r]) => e >= t && e <= r;
  startOfYear = (e) => this.adjustOffset(e.startOf("year"));
  startOfMonth = (e) => this.adjustOffset(e.startOf("month"));
  startOfWeek = (e) => this.adjustOffset(this.setLocaleToValue(e).startOf("week"));
  startOfDay = (e) => this.adjustOffset(e.startOf("day"));
  endOfYear = (e) => this.adjustOffset(e.endOf("year"));
  endOfMonth = (e) => this.adjustOffset(e.endOf("month"));
  endOfWeek = (e) => this.adjustOffset(this.setLocaleToValue(e).endOf("week"));
  endOfDay = (e) => this.adjustOffset(e.endOf("day"));
  addYears = (e, t) => this.adjustOffset(e.add(t, "year"));
  addMonths = (e, t) => this.adjustOffset(e.add(t, "month"));
  addWeeks = (e, t) => this.adjustOffset(e.add(t, "week"));
  addDays = (e, t) => this.adjustOffset(e.add(t, "day"));
  addHours = (e, t) => this.adjustOffset(e.add(t, "hour"));
  addMinutes = (e, t) => this.adjustOffset(e.add(t, "minute"));
  addSeconds = (e, t) => this.adjustOffset(e.add(t, "second"));
  getYear = (e) => e.year();
  getMonth = (e) => e.month();
  getDate = (e) => e.date();
  getHours = (e) => e.hour();
  getMinutes = (e) => e.minute();
  getSeconds = (e) => e.second();
  getMilliseconds = (e) => e.millisecond();
  setYear = (e, t) => this.adjustOffset(e.set("year", t));
  setMonth = (e, t) => this.adjustOffset(e.set("month", t));
  setDate = (e, t) => this.adjustOffset(e.set("date", t));
  setHours = (e, t) => this.adjustOffset(e.set("hour", t));
  setMinutes = (e, t) => this.adjustOffset(e.set("minute", t));
  setSeconds = (e, t) => this.adjustOffset(e.set("second", t));
  setMilliseconds = (e, t) => this.adjustOffset(e.set("millisecond", t));
  getDaysInMonth = (e) => e.daysInMonth();
  getWeekArray = (e) => {
    const t = this.startOfWeek(this.startOfMonth(e)), r = this.endOfWeek(this.endOfMonth(e));
    let c = 0, f = t;
    const a = [];
    for (; f < r; ) {
      const s = Math.floor(c / 7);
      a[s] = a[s] || [], a[s].push(f), f = this.addDays(f, 1), c += 1;
    }
    return a;
  };
  getWeekNumber = (e) => e.week();
  getDayOfWeek(e) {
    return e.day() + 1;
  }
  getYearRange = ([e, t]) => {
    const r = this.startOfYear(e), c = this.endOfYear(t), f = [];
    let a = r;
    for (; this.isBefore(a, c); )
      f.push(a), a = this.addYears(a, 1);
    return f;
  };
}
export {
  Ne as A
};
