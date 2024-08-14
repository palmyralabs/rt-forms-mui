import "./NoopConverter.js";
import "dayjs";
const n = (r, i) => {
  if (!(i === void 0 || i == null)) {
    var t = r.indexOf(".");
    if (t < 0)
      return i[r];
    var s = r.substring(0, t), u = r.substring(t + 1);
    return n(u, i[s]);
  }
}, v = (r, i, t) => {
  var s = r.indexOf(".");
  if (s < 0) {
    i[r] = t;
    return;
  }
  var u = r.substring(0, s), e = r.substring(s + 1);
  return (i[u] === void 0 || i[u] == null) && (i[u] = {}), v(e, i[u], t);
};
export {
  n as e,
  v as i
};
