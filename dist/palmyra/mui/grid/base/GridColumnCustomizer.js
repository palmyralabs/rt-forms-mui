const b = (i, t) => ({
  formatCell: function(n, e) {
    const r = n.attribute;
    return i[r] ? i[r](e) : e;
  },
  formatHeader: function(n, e) {
    var u;
    const r = n.attribute;
    return (u = t == null ? void 0 : t.header) != null && u[r] ? t.header[r](n, e) : e;
  },
  formatFooter: function(n, e) {
    var u;
    const r = n.attribute;
    return (u = t == null ? void 0 : t.footer) != null && u[r] ? t.footer[r](n, e) : e;
  }
});
export {
  b as gridColumnCustomizer
};
