var t = Object.defineProperty;
var c = (r, o, e) => o in r ? t(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e;
var a = (r, o, e) => c(r, typeof o != "symbol" ? o + "" : o, e);
import { AutoAwesomeMosaic as d, Dashboard as i, CreditCard as n, InsertChart as s, Feed as m, Home as h, TableView as l } from "@mui/icons-material";
const p = {
  grid: l,
  home: h,
  form: m,
  chart: s,
  card: n,
  dashboard: i,
  layout: d
};
class I {
  constructor() {
    a(this, "getIcon", (o) => p[o]);
  }
}
const w = new I();
export {
  w as SimpleIconProvider
};
