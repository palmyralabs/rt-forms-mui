import { AutoAwesomeMosaic as r, Dashboard as e, CreditCard as a, InsertChart as t, Feed as c, Home as d, TableView as i } from "@mui/icons-material";
const n = {
  grid: i,
  home: d,
  form: c,
  chart: t,
  card: a,
  dashboard: e,
  layout: r
};
class s {
  getIcon = (o) => n[o];
}
const l = new s();
export {
  l as SimpleIconProvider
};
