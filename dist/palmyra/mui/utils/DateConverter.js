var s = Object.defineProperty;
var i = (e, r, t) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var a = (e, r, t) => i(e, typeof r != "symbol" ? r + "" : r, t);
import n from "dayjs";
class f {
  constructor(r, t) {
    a(this, "serverPattern");
    a(this, "displayPattern");
    a(this, "getDefaultValue", (r) => r || "");
    this.serverPattern = r.serverPattern || r.displayPattern || t, this.displayPattern = r.displayPattern;
  }
  format(r) {
    return r && n(r, this.serverPattern).format(this.displayPattern);
  }
  parse(r) {
    if (r) {
      if (r instanceof Date)
        return r;
      const t = Number(r);
      return !isNaN(t) && t.toString() === r.toString() ? new Date(t) : n(r, this.serverPattern).toDate();
    }
    return r;
  }
  convert(r) {
    const t = this.parse(r);
    return t && t instanceof Date && this.displayPattern ? n(t).format(this.displayPattern) : r;
  }
}
export {
  f as DateTimeConverter
};
