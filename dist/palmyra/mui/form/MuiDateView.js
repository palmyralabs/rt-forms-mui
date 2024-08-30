import '../../../assets/TextView.css';var pe = Object.defineProperty;
var Me = (r, n, e) => n in r ? pe(r, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[n] = e;
var o = (r, n, e) => Me(r, typeof n != "symbol" ? n + "" : n, e);
import { jsx as I, Fragment as Pe, jsxs as Te } from "react/jsx-runtime";
import { forwardRef as De, useRef as te, useImperativeHandle as ke } from "react";
/* empty css                       */
import { useFieldManager as Oe, getFieldHandler as ve, FieldDecorator as Ye } from "@palmyralabs/rt-forms";
import { getFieldLabel as Ee } from "./util.js";
function T(r) {
  const n = Object.prototype.toString.call(r);
  return r instanceof Date || typeof r == "object" && n === "[object Date]" ? new r.constructor(+r) : typeof r == "number" || n === "[object Number]" || typeof r == "string" || n === "[object String]" ? new Date(r) : /* @__PURE__ */ new Date(NaN);
}
function b(r, n) {
  return r instanceof Date ? new r.constructor(n) : new Date(n);
}
function ie(r, n) {
  const e = T(r);
  return isNaN(n) ? b(r, NaN) : (n && e.setDate(e.getDate() + n), e);
}
const ue = 6048e5, We = 864e5, _e = 6e4, Ne = 36e5, He = 1e3;
let qe = {};
function L() {
  return qe;
}
function N(r, n) {
  var u, d, h, P;
  const e = L(), t = (n == null ? void 0 : n.weekStartsOn) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? e.weekStartsOn ?? ((P = (h = e.locale) == null ? void 0 : h.options) == null ? void 0 : P.weekStartsOn) ?? 0, a = T(r), s = a.getDay(), i = (s < t ? 7 : 0) + s - t;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function F(r) {
  return N(r, { weekStartsOn: 1 });
}
function ce(r) {
  const n = T(r), e = n.getFullYear(), t = b(r, 0);
  t.setFullYear(e + 1, 0, 4), t.setHours(0, 0, 0, 0);
  const a = F(t), s = b(r, 0);
  s.setFullYear(e, 0, 4), s.setHours(0, 0, 0, 0);
  const i = F(s);
  return n.getTime() >= a.getTime() ? e + 1 : n.getTime() >= i.getTime() ? e : e - 1;
}
function ne(r) {
  const n = T(r);
  return n.setHours(0, 0, 0, 0), n;
}
function G(r) {
  const n = T(r), e = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return e.setUTCFullYear(n.getFullYear()), +r - +e;
}
function Ce(r, n) {
  const e = ne(r), t = ne(n), a = +e - G(e), s = +t - G(t);
  return Math.round((a - s) / We);
}
function Fe(r) {
  const n = ce(r), e = b(r, 0);
  return e.setFullYear(n, 0, 4), e.setHours(0, 0, 0, 0), F(e);
}
function Le(r) {
  return r instanceof Date || typeof r == "object" && Object.prototype.toString.call(r) === "[object Date]";
}
function V(r) {
  if (!Le(r) && typeof r != "number")
    return !1;
  const n = T(r);
  return !isNaN(Number(n));
}
function Ie(r) {
  const n = T(r), e = b(r, 0);
  return e.setFullYear(n.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
const Qe = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Re = (r, n, e) => {
  let t;
  const a = Qe[r];
  return typeof a == "string" ? t = a : n === 1 ? t = a.one : t = a.other.replace("{{count}}", n.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + t : t + " ago" : t;
};
function j(r) {
  return (n = {}) => {
    const e = n.width ? String(n.width) : r.defaultWidth;
    return r.formats[e] || r.formats[r.defaultWidth];
  };
}
const Xe = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ge = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Be = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ae = {
  date: j({
    formats: Xe,
    defaultWidth: "full"
  }),
  time: j({
    formats: Ge,
    defaultWidth: "full"
  }),
  dateTime: j({
    formats: Be,
    defaultWidth: "full"
  })
}, je = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ve = (r, n, e, t) => je[r];
function Q(r) {
  return (n, e) => {
    const t = e != null && e.context ? String(e.context) : "standalone";
    let a;
    if (t === "formatting" && r.formattingValues) {
      const i = r.defaultFormattingWidth || r.defaultWidth, u = e != null && e.width ? String(e.width) : i;
      a = r.formattingValues[u] || r.formattingValues[i];
    } else {
      const i = r.defaultWidth, u = e != null && e.width ? String(e.width) : r.defaultWidth;
      a = r.values[u] || r.values[i];
    }
    const s = r.argumentCallback ? r.argumentCallback(n) : n;
    return a[s];
  };
}
const $e = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ze = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Je = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Ze = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Ke = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Ue = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Se = (r, n) => {
  const e = Number(r), t = e % 100;
  if (t > 20 || t < 10)
    switch (t % 10) {
      case 1:
        return e + "st";
      case 2:
        return e + "nd";
      case 3:
        return e + "rd";
    }
  return e + "th";
}, et = {
  ordinalNumber: Se,
  era: Q({
    values: $e,
    defaultWidth: "wide"
  }),
  quarter: Q({
    values: ze,
    defaultWidth: "wide",
    argumentCallback: (r) => r - 1
  }),
  month: Q({
    values: Je,
    defaultWidth: "wide"
  }),
  day: Q({
    values: Ze,
    defaultWidth: "wide"
  }),
  dayPeriod: Q({
    values: Ke,
    defaultWidth: "wide",
    formattingValues: Ue,
    defaultFormattingWidth: "wide"
  })
};
function R(r) {
  return (n, e = {}) => {
    const t = e.width, a = t && r.matchPatterns[t] || r.matchPatterns[r.defaultMatchWidth], s = n.match(a);
    if (!s)
      return null;
    const i = s[0], u = t && r.parsePatterns[t] || r.parsePatterns[r.defaultParseWidth], d = Array.isArray(u) ? nt(u, (D) => D.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      tt(u, (D) => D.test(i))
    );
    let h;
    h = r.valueCallback ? r.valueCallback(d) : d, h = e.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      e.valueCallback(h)
    ) : h;
    const P = n.slice(i.length);
    return { value: h, rest: P };
  };
}
function tt(r, n) {
  for (const e in r)
    if (Object.prototype.hasOwnProperty.call(r, e) && n(r[e]))
      return e;
}
function nt(r, n) {
  for (let e = 0; e < r.length; e++)
    if (n(r[e]))
      return e;
}
function rt(r) {
  return (n, e = {}) => {
    const t = n.match(r.matchPattern);
    if (!t) return null;
    const a = t[0], s = n.match(r.parsePattern);
    if (!s) return null;
    let i = r.valueCallback ? r.valueCallback(s[0]) : s[0];
    i = e.valueCallback ? e.valueCallback(i) : i;
    const u = n.slice(a.length);
    return { value: i, rest: u };
  };
}
const at = /^(\d+)(th|st|nd|rd)?/i, st = /\d+/i, ot = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, it = {
  any: [/^b/i, /^(a|c)/i]
}, ut = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ct = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, dt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, lt = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, ft = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ht = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, mt = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, wt = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, yt = {
  ordinalNumber: rt({
    matchPattern: at,
    parsePattern: st,
    valueCallback: (r) => parseInt(r, 10)
  }),
  era: R({
    matchPatterns: ot,
    defaultMatchWidth: "wide",
    parsePatterns: it,
    defaultParseWidth: "any"
  }),
  quarter: R({
    matchPatterns: ut,
    defaultMatchWidth: "wide",
    parsePatterns: ct,
    defaultParseWidth: "any",
    valueCallback: (r) => r + 1
  }),
  month: R({
    matchPatterns: dt,
    defaultMatchWidth: "wide",
    parsePatterns: lt,
    defaultParseWidth: "any"
  }),
  day: R({
    matchPatterns: ft,
    defaultMatchWidth: "wide",
    parsePatterns: ht,
    defaultParseWidth: "any"
  }),
  dayPeriod: R({
    matchPatterns: mt,
    defaultMatchWidth: "any",
    parsePatterns: wt,
    defaultParseWidth: "any"
  })
}, de = {
  code: "en-US",
  formatDistance: Re,
  formatLong: Ae,
  formatRelative: Ve,
  localize: et,
  match: yt,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function bt(r) {
  const n = T(r);
  return Ce(n, Ie(n)) + 1;
}
function le(r) {
  const n = T(r), e = +F(n) - +Fe(n);
  return Math.round(e / ue) + 1;
}
function J(r, n) {
  var P, D, v, k;
  const e = T(r), t = e.getFullYear(), a = L(), s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((D = (P = n == null ? void 0 : n.locale) == null ? void 0 : P.options) == null ? void 0 : D.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((k = (v = a.locale) == null ? void 0 : v.options) == null ? void 0 : k.firstWeekContainsDate) ?? 1, i = b(r, 0);
  i.setFullYear(t + 1, 0, s), i.setHours(0, 0, 0, 0);
  const u = N(i, n), d = b(r, 0);
  d.setFullYear(t, 0, s), d.setHours(0, 0, 0, 0);
  const h = N(d, n);
  return e.getTime() >= u.getTime() ? t + 1 : e.getTime() >= h.getTime() ? t : t - 1;
}
function gt(r, n) {
  var u, d, h, P;
  const e = L(), t = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((P = (h = e.locale) == null ? void 0 : h.options) == null ? void 0 : P.firstWeekContainsDate) ?? 1, a = J(r, n), s = b(r, 0);
  return s.setFullYear(a, 0, t), s.setHours(0, 0, 0, 0), N(s, n);
}
function fe(r, n) {
  const e = T(r), t = +N(e, n) - +gt(e, n);
  return Math.round(t / ue) + 1;
}
function f(r, n) {
  const e = r < 0 ? "-" : "", t = Math.abs(r).toString().padStart(n, "0");
  return e + t;
}
const _ = {
  // Year
  y(r, n) {
    const e = r.getFullYear(), t = e > 0 ? e : 1 - e;
    return f(n === "yy" ? t % 100 : t, n.length);
  },
  // Month
  M(r, n) {
    const e = r.getMonth();
    return n === "M" ? String(e + 1) : f(e + 1, 2);
  },
  // Day of the month
  d(r, n) {
    return f(r.getDate(), n.length);
  },
  // AM or PM
  a(r, n) {
    const e = r.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return e.toUpperCase();
      case "aaa":
        return e;
      case "aaaaa":
        return e[0];
      case "aaaa":
      default:
        return e === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(r, n) {
    return f(r.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(r, n) {
    return f(r.getHours(), n.length);
  },
  // Minute
  m(r, n) {
    return f(r.getMinutes(), n.length);
  },
  // Second
  s(r, n) {
    return f(r.getSeconds(), n.length);
  },
  // Fraction of second
  S(r, n) {
    const e = n.length, t = r.getMilliseconds(), a = Math.trunc(
      t * Math.pow(10, e - 3)
    );
    return f(a, n.length);
  }
}, C = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, re = {
  // Era
  G: function(r, n, e) {
    const t = r.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return e.era(t, { width: "abbreviated" });
      case "GGGGG":
        return e.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return e.era(t, { width: "wide" });
    }
  },
  // Year
  y: function(r, n, e) {
    if (n === "yo") {
      const t = r.getFullYear(), a = t > 0 ? t : 1 - t;
      return e.ordinalNumber(a, { unit: "year" });
    }
    return _.y(r, n);
  },
  // Local week-numbering year
  Y: function(r, n, e, t) {
    const a = J(r, t), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      const i = s % 100;
      return f(i, 2);
    }
    return n === "Yo" ? e.ordinalNumber(s, { unit: "year" }) : f(s, n.length);
  },
  // ISO week-numbering year
  R: function(r, n) {
    const e = ce(r);
    return f(e, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(r, n) {
    const e = r.getFullYear();
    return f(e, n.length);
  },
  // Quarter
  Q: function(r, n, e) {
    const t = Math.ceil((r.getMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(t);
      case "QQ":
        return f(t, 2);
      case "Qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return e.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return e.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(r, n, e) {
    const t = Math.ceil((r.getMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(t);
      case "qq":
        return f(t, 2);
      case "qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return e.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return e.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(r, n, e) {
    const t = r.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return _.M(r, n);
      case "Mo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      case "MMM":
        return e.month(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return e.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return e.month(t, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(r, n, e) {
    const t = r.getMonth();
    switch (n) {
      case "L":
        return String(t + 1);
      case "LL":
        return f(t + 1, 2);
      case "Lo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      case "LLL":
        return e.month(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return e.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return e.month(t, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(r, n, e, t) {
    const a = fe(r, t);
    return n === "wo" ? e.ordinalNumber(a, { unit: "week" }) : f(a, n.length);
  },
  // ISO week of year
  I: function(r, n, e) {
    const t = le(r);
    return n === "Io" ? e.ordinalNumber(t, { unit: "week" }) : f(t, n.length);
  },
  // Day of the month
  d: function(r, n, e) {
    return n === "do" ? e.ordinalNumber(r.getDate(), { unit: "date" }) : _.d(r, n);
  },
  // Day of year
  D: function(r, n, e) {
    const t = bt(r);
    return n === "Do" ? e.ordinalNumber(t, { unit: "dayOfYear" }) : f(t, n.length);
  },
  // Day of week
  E: function(r, n, e) {
    const t = r.getDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(r, n, e, t) {
    const a = r.getDay(), s = (a - t.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(s);
      case "ee":
        return f(s, 2);
      case "eo":
        return e.ordinalNumber(s, { unit: "day" });
      case "eee":
        return e.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return e.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return e.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return e.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(r, n, e, t) {
    const a = r.getDay(), s = (a - t.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(s);
      case "cc":
        return f(s, n.length);
      case "co":
        return e.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return e.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return e.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return e.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return e.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(r, n, e) {
    const t = r.getDay(), a = t === 0 ? 7 : t;
    switch (n) {
      case "i":
        return String(a);
      case "ii":
        return f(a, n.length);
      case "io":
        return e.ordinalNumber(a, { unit: "day" });
      case "iii":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(r, n, e) {
    const a = r.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(r, n, e) {
    const t = r.getHours();
    let a;
    switch (t === 12 ? a = C.noon : t === 0 ? a = C.midnight : a = t / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(r, n, e) {
    const t = r.getHours();
    let a;
    switch (t >= 17 ? a = C.evening : t >= 12 ? a = C.afternoon : t >= 4 ? a = C.morning : a = C.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(r, n, e) {
    if (n === "ho") {
      let t = r.getHours() % 12;
      return t === 0 && (t = 12), e.ordinalNumber(t, { unit: "hour" });
    }
    return _.h(r, n);
  },
  // Hour [0-23]
  H: function(r, n, e) {
    return n === "Ho" ? e.ordinalNumber(r.getHours(), { unit: "hour" }) : _.H(r, n);
  },
  // Hour [0-11]
  K: function(r, n, e) {
    const t = r.getHours() % 12;
    return n === "Ko" ? e.ordinalNumber(t, { unit: "hour" }) : f(t, n.length);
  },
  // Hour [1-24]
  k: function(r, n, e) {
    let t = r.getHours();
    return t === 0 && (t = 24), n === "ko" ? e.ordinalNumber(t, { unit: "hour" }) : f(t, n.length);
  },
  // Minute
  m: function(r, n, e) {
    return n === "mo" ? e.ordinalNumber(r.getMinutes(), { unit: "minute" }) : _.m(r, n);
  },
  // Second
  s: function(r, n, e) {
    return n === "so" ? e.ordinalNumber(r.getSeconds(), { unit: "second" }) : _.s(r, n);
  },
  // Fraction of second
  S: function(r, n) {
    return _.S(r, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(r, n, e) {
    const t = r.getTimezoneOffset();
    if (t === 0)
      return "Z";
    switch (n) {
      case "X":
        return se(t);
      case "XXXX":
      case "XX":
        return q(t);
      case "XXXXX":
      case "XXX":
      default:
        return q(t, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(r, n, e) {
    const t = r.getTimezoneOffset();
    switch (n) {
      case "x":
        return se(t);
      case "xxxx":
      case "xx":
        return q(t);
      case "xxxxx":
      case "xxx":
      default:
        return q(t, ":");
    }
  },
  // Timezone (GMT)
  O: function(r, n, e) {
    const t = r.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ae(t, ":");
      case "OOOO":
      default:
        return "GMT" + q(t, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(r, n, e) {
    const t = r.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ae(t, ":");
      case "zzzz":
      default:
        return "GMT" + q(t, ":");
    }
  },
  // Seconds timestamp
  t: function(r, n, e) {
    const t = Math.trunc(r.getTime() / 1e3);
    return f(t, n.length);
  },
  // Milliseconds timestamp
  T: function(r, n, e) {
    const t = r.getTime();
    return f(t, n.length);
  }
};
function ae(r, n = "") {
  const e = r > 0 ? "-" : "+", t = Math.abs(r), a = Math.trunc(t / 60), s = t % 60;
  return s === 0 ? e + String(a) : e + String(a) + n + f(s, 2);
}
function se(r, n) {
  return r % 60 === 0 ? (r > 0 ? "-" : "+") + f(Math.abs(r) / 60, 2) : q(r, n);
}
function q(r, n = "") {
  const e = r > 0 ? "-" : "+", t = Math.abs(r), a = f(Math.trunc(t / 60), 2), s = f(t % 60, 2);
  return e + a + n + s;
}
const oe = (r, n) => {
  switch (r) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, he = (r, n) => {
  switch (r) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, xt = (r, n) => {
  const e = r.match(/(P+)(p+)?/) || [], t = e[1], a = e[2];
  if (!a)
    return oe(r, n);
  let s;
  switch (t) {
    case "P":
      s = n.dateTime({ width: "short" });
      break;
    case "PP":
      s = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = n.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", oe(t, n)).replace("{{time}}", he(a, n));
}, $ = {
  p: he,
  P: xt
}, pt = /^D+$/, Mt = /^Y+$/, Pt = ["D", "DD", "YY", "YYYY"];
function me(r) {
  return pt.test(r);
}
function we(r) {
  return Mt.test(r);
}
function z(r, n, e) {
  const t = Tt(r, n, e);
  if (console.warn(t), Pt.includes(r)) throw new RangeError(t);
}
function Tt(r, n, e) {
  const t = r[0] === "Y" ? "years" : "days of the month";
  return `Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${n}\`) for formatting ${t} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Dt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, kt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ot = /^'([^]*?)'?$/, vt = /''/g, Yt = /[a-zA-Z]/;
function Et(r, n, e) {
  var P, D, v, k;
  const t = L(), a = t.locale ?? de, s = t.firstWeekContainsDate ?? ((D = (P = t.locale) == null ? void 0 : P.options) == null ? void 0 : D.firstWeekContainsDate) ?? 1, i = t.weekStartsOn ?? ((k = (v = t.locale) == null ? void 0 : v.options) == null ? void 0 : k.weekStartsOn) ?? 0, u = T(r);
  if (!V(u))
    throw new RangeError("Invalid time value");
  let d = n.match(kt).map((w) => {
    const x = w[0];
    if (x === "p" || x === "P") {
      const O = $[x];
      return O(w, a.formatLong);
    }
    return w;
  }).join("").match(Dt).map((w) => {
    if (w === "''")
      return { isToken: !1, value: "'" };
    const x = w[0];
    if (x === "'")
      return { isToken: !1, value: Wt(w) };
    if (re[x])
      return { isToken: !0, value: w };
    if (x.match(Yt))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: w };
  });
  a.localize.preprocessor && (d = a.localize.preprocessor(u, d));
  const h = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: a
  };
  return d.map((w) => {
    if (!w.isToken) return w.value;
    const x = w.value;
    (we(x) || me(x)) && z(x, n, String(r));
    const O = re[x[0]];
    return O(u, x, a.localize, h);
  }).join("");
}
function Wt(r) {
  const n = r.match(Ot);
  return n ? n[1].replace(vt, "'") : r;
}
function _t() {
  return Object.assign({}, L());
}
function Nt(r) {
  let e = T(r).getDay();
  return e === 0 && (e = 7), e;
}
function Ht(r, n) {
  const e = n instanceof Date ? b(n, 0) : new n(0);
  return e.setFullYear(
    r.getFullYear(),
    r.getMonth(),
    r.getDate()
  ), e.setHours(
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ), e;
}
const qt = 10;
class ye {
  constructor() {
    o(this, "subPriority", 0);
  }
  validate(n, e) {
    return !0;
  }
}
class Ct extends ye {
  constructor(n, e, t, a, s) {
    super(), this.value = n, this.validateValue = e, this.setValue = t, this.priority = a, s && (this.subPriority = s);
  }
  validate(n, e) {
    return this.validateValue(n, this.value, e);
  }
  set(n, e, t) {
    return this.setValue(n, e, this.value, t);
  }
}
class Ft extends ye {
  constructor() {
    super(...arguments);
    o(this, "priority", qt);
    o(this, "subPriority", -1);
  }
  set(e, t) {
    return t.timestampIsSet ? e : b(e, Ht(e, Date));
  }
}
class l {
  run(n, e, t, a) {
    const s = this.parse(n, e, t, a);
    return s ? {
      setter: new Ct(
        s.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: s.rest
    } : null;
  }
  validate(n, e, t) {
    return !0;
  }
}
class Lt extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 140);
    o(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(e, { width: "abbreviated" }) || a.era(e, { width: "narrow" });
      case "GGGGG":
        return a.era(e, { width: "narrow" });
      case "GGGG":
      default:
        return a.era(e, { width: "wide" }) || a.era(e, { width: "abbreviated" }) || a.era(e, { width: "narrow" });
    }
  }
  set(e, t, a) {
    return t.era = a, e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
const p = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, E = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function M(r, n) {
  return r && {
    value: n(r.value),
    rest: r.rest
  };
}
function m(r, n) {
  const e = n.match(r);
  return e ? {
    value: parseInt(e[0], 10),
    rest: n.slice(e[0].length)
  } : null;
}
function W(r, n) {
  const e = n.match(r);
  if (!e)
    return null;
  if (e[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  const t = e[1] === "+" ? 1 : -1, a = e[2] ? parseInt(e[2], 10) : 0, s = e[3] ? parseInt(e[3], 10) : 0, i = e[5] ? parseInt(e[5], 10) : 0;
  return {
    value: t * (a * Ne + s * _e + i * He),
    rest: n.slice(e[0].length)
  };
}
function be(r) {
  return m(p.anyDigitsSigned, r);
}
function g(r, n) {
  switch (r) {
    case 1:
      return m(p.singleDigit, n);
    case 2:
      return m(p.twoDigits, n);
    case 3:
      return m(p.threeDigits, n);
    case 4:
      return m(p.fourDigits, n);
    default:
      return m(new RegExp("^\\d{1," + r + "}"), n);
  }
}
function B(r, n) {
  switch (r) {
    case 1:
      return m(p.singleDigitSigned, n);
    case 2:
      return m(p.twoDigitsSigned, n);
    case 3:
      return m(p.threeDigitsSigned, n);
    case 4:
      return m(p.fourDigitsSigned, n);
    default:
      return m(new RegExp("^-?\\d{1," + r + "}"), n);
  }
}
function Z(r) {
  switch (r) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function ge(r, n) {
  const e = n > 0, t = e ? n : 1 - n;
  let a;
  if (t <= 50)
    a = r || 100;
  else {
    const s = t + 50, i = Math.trunc(s / 100) * 100, u = r >= s % 100;
    a = r + i - (u ? 100 : 0);
  }
  return e ? a : 1 - a;
}
function xe(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
class It extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, a) {
    const s = (i) => ({
      year: i,
      isTwoDigitYear: t === "yy"
    });
    switch (t) {
      case "y":
        return M(g(4, e), s);
      case "yo":
        return M(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          s
        );
      default:
        return M(g(t.length, e), s);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, a) {
    const s = e.getFullYear();
    if (a.isTwoDigitYear) {
      const u = ge(
        a.year,
        s
      );
      return e.setFullYear(u, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const i = !("era" in t) || t.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class Qt extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    const s = (i) => ({
      year: i,
      isTwoDigitYear: t === "YY"
    });
    switch (t) {
      case "Y":
        return M(g(4, e), s);
      case "Yo":
        return M(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          s
        );
      default:
        return M(g(t.length, e), s);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, a, s) {
    const i = J(e, s);
    if (a.isTwoDigitYear) {
      const d = ge(
        a.year,
        i
      );
      return e.setFullYear(
        d,
        0,
        s.firstWeekContainsDate
      ), e.setHours(0, 0, 0, 0), N(e, s);
    }
    const u = !("era" in t) || t.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(u, 0, s.firstWeekContainsDate), e.setHours(0, 0, 0, 0), N(e, s);
  }
}
class Rt extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t) {
    return B(t === "R" ? 4 : t.length, e);
  }
  set(e, t, a) {
    const s = b(e, 0);
    return s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0), F(s);
  }
}
class Xt extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t) {
    return B(t === "u" ? 4 : t.length, e);
  }
  set(e, t, a) {
    return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class Gt extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 120);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "Q":
      case "QQ":
        return g(t.length, e);
      case "Qo":
        return a.ordinalNumber(e, { unit: "quarter" });
      case "QQQ":
        return a.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(e, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class Bt extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 120);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "q":
      case "qq":
        return g(t.length, e);
      case "qo":
        return a.ordinalNumber(e, { unit: "quarter" });
      case "qqq":
        return a.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(e, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class At extends l {
  constructor() {
    super(...arguments);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    o(this, "priority", 110);
  }
  parse(e, t, a) {
    const s = (i) => i - 1;
    switch (t) {
      case "M":
        return M(
          m(p.month, e),
          s
        );
      case "MM":
        return M(g(2, e), s);
      case "Mo":
        return M(
          a.ordinalNumber(e, {
            unit: "month"
          }),
          s
        );
      case "MMM":
        return a.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(e, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return a.month(e, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(e, { width: "wide", context: "formatting" }) || a.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class jt extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 110);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    const s = (i) => i - 1;
    switch (t) {
      case "L":
        return M(
          m(p.month, e),
          s
        );
      case "LL":
        return M(g(2, e), s);
      case "Lo":
        return M(
          a.ordinalNumber(e, {
            unit: "month"
          }),
          s
        );
      case "LLL":
        return a.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(e, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return a.month(e, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(e, { width: "wide", context: "standalone" }) || a.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
function Vt(r, n, e) {
  const t = T(r), a = fe(t, e) - n;
  return t.setDate(t.getDate() - a * 7), t;
}
class $t extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 100);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "w":
        return m(p.week, e);
      case "wo":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return g(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, a, s) {
    return N(Vt(e, a, s), s);
  }
}
function zt(r, n) {
  const e = T(r), t = le(e) - n;
  return e.setDate(e.getDate() - t * 7), e;
}
class Jt extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 100);
    o(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "I":
        return m(p.week, e);
      case "Io":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return g(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, a) {
    return F(zt(e, a));
  }
}
const Zt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Kt = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class Ut extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "subPriority", 1);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "d":
        return m(p.date, e);
      case "do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return g(t.length, e);
    }
  }
  validate(e, t) {
    const a = e.getFullYear(), s = xe(a), i = e.getMonth();
    return s ? t >= 1 && t <= Kt[i] : t >= 1 && t <= Zt[i];
  }
  set(e, t, a) {
    return e.setDate(a), e.setHours(0, 0, 0, 0), e;
  }
}
class St extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "subpriority", 1);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "D":
      case "DD":
        return m(p.dayOfYear, e);
      case "Do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return g(t.length, e);
    }
  }
  validate(e, t) {
    const a = e.getFullYear();
    return xe(a) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
  }
  set(e, t, a) {
    return e.setMonth(0, a), e.setHours(0, 0, 0, 0), e;
  }
}
function K(r, n, e) {
  var D, v, k, w;
  const t = L(), a = (e == null ? void 0 : e.weekStartsOn) ?? ((v = (D = e == null ? void 0 : e.locale) == null ? void 0 : D.options) == null ? void 0 : v.weekStartsOn) ?? t.weekStartsOn ?? ((w = (k = t.locale) == null ? void 0 : k.options) == null ? void 0 : w.weekStartsOn) ?? 0, s = T(r), i = s.getDay(), d = (n % 7 + 7) % 7, h = 7 - a, P = n < 0 || n > 6 ? n - (i + h) % 7 : (d + h) % 7 - (i + h) % 7;
  return ie(s, P);
}
class en extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return a.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return a.day(e, { width: "wide", context: "formatting" }) || a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = K(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
class tn extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a, s) {
    const i = (u) => {
      const d = Math.floor((u - 1) / 7) * 7;
      return (u + s.weekStartsOn + 6) % 7 + d;
    };
    switch (t) {
      case "e":
      case "ee":
        return M(g(t.length, e), i);
      case "eo":
        return M(
          a.ordinalNumber(e, {
            unit: "day"
          }),
          i
        );
      case "eee":
        return a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "eeeee":
        return a.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return a.day(e, { width: "wide", context: "formatting" }) || a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = K(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
class nn extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(e, t, a, s) {
    const i = (u) => {
      const d = Math.floor((u - 1) / 7) * 7;
      return (u + s.weekStartsOn + 6) % 7 + d;
    };
    switch (t) {
      case "c":
      case "cc":
        return M(g(t.length, e), i);
      case "co":
        return M(
          a.ordinalNumber(e, {
            unit: "day"
          }),
          i
        );
      case "ccc":
        return a.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
      case "ccccc":
        return a.day(e, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return a.day(e, { width: "wide", context: "standalone" }) || a.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = K(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
function rn(r, n) {
  const e = T(r), t = Nt(e), a = n - t;
  return ie(e, a);
}
class an extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    const s = (i) => i === 0 ? 7 : i;
    switch (t) {
      case "i":
      case "ii":
        return g(t.length, e);
      case "io":
        return a.ordinalNumber(e, { unit: "day" });
      case "iii":
        return M(
          a.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiii":
        return M(
          a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiiii":
        return M(
          a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiii":
      default:
        return M(
          a.day(e, {
            width: "wide",
            context: "formatting"
          }) || a.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 7;
  }
  set(e, t, a) {
    return e = rn(e, a), e.setHours(0, 0, 0, 0), e;
  }
}
class sn extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, a) {
    return e.setHours(Z(a), 0, 0, 0), e;
  }
}
class on extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, a) {
    return e.setHours(Z(a), 0, 0, 0), e;
  }
}
class un extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, a) {
    return e.setHours(Z(a), 0, 0, 0), e;
  }
}
class cn extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "h":
        return m(p.hour12h, e);
      case "ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return g(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 12;
  }
  set(e, t, a) {
    const s = e.getHours() >= 12;
    return s && a < 12 ? e.setHours(a + 12, 0, 0, 0) : !s && a === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class dn extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "H":
        return m(p.hour23h, e);
      case "Ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return g(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 23;
  }
  set(e, t, a) {
    return e.setHours(a, 0, 0, 0), e;
  }
}
class ln extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "K":
        return m(p.hour11h, e);
      case "Ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return g(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.getHours() >= 12 && a < 12 ? e.setHours(a + 12, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class fn extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "k":
        return m(p.hour24h, e);
      case "ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return g(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 24;
  }
  set(e, t, a) {
    const s = a <= 24 ? a % 24 : a;
    return e.setHours(s, 0, 0, 0), e;
  }
}
class hn extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 60);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "m":
        return m(p.minute, e);
      case "mo":
        return a.ordinalNumber(e, { unit: "minute" });
      default:
        return g(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, a) {
    return e.setMinutes(a, 0, 0), e;
  }
}
class mn extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 50);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "s":
        return m(p.second, e);
      case "so":
        return a.ordinalNumber(e, { unit: "second" });
      default:
        return g(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, a) {
    return e.setSeconds(a, 0), e;
  }
}
class wn extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 30);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t) {
    const a = (s) => Math.trunc(s * Math.pow(10, -t.length + 3));
    return M(g(t.length, e), a);
  }
  set(e, t, a) {
    return e.setMilliseconds(a), e;
  }
}
class yn extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 10);
    o(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(e, t) {
    switch (t) {
      case "X":
        return W(
          E.basicOptionalMinutes,
          e
        );
      case "XX":
        return W(E.basic, e);
      case "XXXX":
        return W(
          E.basicOptionalSeconds,
          e
        );
      case "XXXXX":
        return W(
          E.extendedOptionalSeconds,
          e
        );
      case "XXX":
      default:
        return W(E.extended, e);
    }
  }
  set(e, t, a) {
    return t.timestampIsSet ? e : b(
      e,
      e.getTime() - G(e) - a
    );
  }
}
class bn extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 10);
    o(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(e, t) {
    switch (t) {
      case "x":
        return W(
          E.basicOptionalMinutes,
          e
        );
      case "xx":
        return W(E.basic, e);
      case "xxxx":
        return W(
          E.basicOptionalSeconds,
          e
        );
      case "xxxxx":
        return W(
          E.extendedOptionalSeconds,
          e
        );
      case "xxx":
      default:
        return W(E.extended, e);
    }
  }
  set(e, t, a) {
    return t.timestampIsSet ? e : b(
      e,
      e.getTime() - G(e) - a
    );
  }
}
class gn extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 40);
    o(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return be(e);
  }
  set(e, t, a) {
    return [b(e, a * 1e3), { timestampIsSet: !0 }];
  }
}
class xn extends l {
  constructor() {
    super(...arguments);
    o(this, "priority", 20);
    o(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return be(e);
  }
  set(e, t, a) {
    return [b(e, a), { timestampIsSet: !0 }];
  }
}
const pn = {
  G: new Lt(),
  y: new It(),
  Y: new Qt(),
  R: new Rt(),
  u: new Xt(),
  Q: new Gt(),
  q: new Bt(),
  M: new At(),
  L: new jt(),
  w: new $t(),
  I: new Jt(),
  d: new Ut(),
  D: new St(),
  E: new en(),
  e: new tn(),
  c: new nn(),
  i: new an(),
  a: new sn(),
  b: new on(),
  B: new un(),
  h: new cn(),
  H: new dn(),
  K: new ln(),
  k: new fn(),
  m: new hn(),
  s: new mn(),
  S: new wn(),
  X: new yn(),
  x: new bn(),
  t: new gn(),
  T: new xn()
}, Mn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Pn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Tn = /^'([^]*?)'?$/, Dn = /''/g, kn = /\S/, On = /[a-zA-Z]/;
function vn(r, n, e, t) {
  var x, O, H, X;
  const a = _t(), s = a.locale ?? de, i = a.firstWeekContainsDate ?? ((O = (x = a.locale) == null ? void 0 : x.options) == null ? void 0 : O.firstWeekContainsDate) ?? 1, u = a.weekStartsOn ?? ((X = (H = a.locale) == null ? void 0 : H.options) == null ? void 0 : X.weekStartsOn) ?? 0;
  if (n === "")
    return r === "" ? T(e) : b(e, NaN);
  const d = {
    firstWeekContainsDate: i,
    weekStartsOn: u,
    locale: s
  }, h = [new Ft()], P = n.match(Pn).map((c) => {
    const y = c[0];
    if (y in $) {
      const Y = $[y];
      return Y(c, s.formatLong);
    }
    return c;
  }).join("").match(Mn), D = [];
  for (let c of P) {
    we(c) && z(c, n, r), me(c) && z(c, n, r);
    const y = c[0], Y = pn[y];
    if (Y) {
      const { incompatibleTokens: U } = Y;
      if (Array.isArray(U)) {
        const S = D.find(
          (ee) => U.includes(ee.token) || ee.token === y
        );
        if (S)
          throw new RangeError(
            `The format string mustn't contain \`${S.fullToken}\` and \`${c}\` at the same time`
          );
      } else if (Y.incompatibleTokens === "*" && D.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${c}\` and any other token at the same time`
        );
      D.push({ token: y, fullToken: c });
      const A = Y.run(
        r,
        c,
        s.match,
        d
      );
      if (!A)
        return b(e, NaN);
      h.push(A.setter), r = A.rest;
    } else {
      if (y.match(On))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + y + "`"
        );
      if (c === "''" ? c = "'" : y === "'" && (c = Yn(c)), r.indexOf(c) === 0)
        r = r.slice(c.length);
      else
        return b(e, NaN);
    }
  }
  if (r.length > 0 && kn.test(r))
    return b(e, NaN);
  const v = h.map((c) => c.priority).sort((c, y) => y - c).filter((c, y, Y) => Y.indexOf(c) === y).map(
    (c) => h.filter((y) => y.priority === c).sort((y, Y) => Y.subPriority - y.subPriority)
  ).map((c) => c[0]);
  let k = T(e);
  if (isNaN(k.getTime()))
    return b(e, NaN);
  const w = {};
  for (const c of v) {
    if (!c.validate(k, d))
      return b(e, NaN);
    const y = c.set(k, w, d);
    Array.isArray(y) ? (k = y[0], Object.assign(w, y[1])) : k = y;
  }
  return b(e, k);
}
function Yn(r) {
  return r.match(Tn)[1].replace(Dn, "'");
}
const Cn = De(function(n, e) {
  const t = Oe(n.attribute, n), { getValue: a, setValue: s, mutateOptions: i } = t, u = e || te(null), d = a(), h = n.textAlign || "left", P = n.variant || "standard", D = n.displayPattern || "dd-MM-yyyy", v = te(null);
  ke(u, () => ({
    ...ve(t),
    focus() {
      v.current.focus();
    }
  }), [t]);
  const k = (O) => {
    const H = [
      "yyyy-MM-dd",
      "dd-MM-yyyy",
      "MM-dd-yyyy",
      "dd-yyyy-MM",
      "yyyy/MM/dd",
      "dd/MM/yyyy",
      "yyyy-MM-dd'T'HH:mm:ss",
      "dd-MM-yyyy HH:mm",
      "MM-dd-yyyy h:mm a",
      "yyyy/MM/dd HH:mm:ss",
      "dd/MM/yyyy HH:mm"
    ];
    for (const X of H) {
      const c = vn(O, X, /* @__PURE__ */ new Date());
      if (V(c))
        return c;
    }
    return null;
  }, w = (O) => {
    if (!O)
      return "";
    if (O) {
      const H = k(O);
      return V(H) ? Et(H, D) : (console.error("Invalid date provided:", O), "");
    }
  };
  var x = t.getFieldProps();
  return x.onChange = (O) => {
    n.readOnly || s(O.target.value);
  }, /* @__PURE__ */ I(Pe, { children: !i.visible && /* @__PURE__ */ I(
    Ye,
    {
      label: Ee(n),
      customContainerClass: n.customContainerClass,
      colspan: n.colspan,
      customFieldClass: n.customFieldClass,
      customLabelClass: n.customLabelClass,
      children: n.label ? /* @__PURE__ */ Te("div", { ...x, className: "text-view-field-container", children: [
        /* @__PURE__ */ I("div", { className: "text-view-label", children: n.label }),
        /* @__PURE__ */ I("div", { className: P == "standard" ? "text-view-value" : "text-view-value-outlined", children: w(d) })
      ] }) : /* @__PURE__ */ I("div", { ...x, style: { textAlign: h }, children: w(d) })
    }
  ) });
});
export {
  Cn as default
};
