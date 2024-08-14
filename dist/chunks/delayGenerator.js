const u = (t) => {
  if (t && t > 0) {
    var l;
    return function(n, ...e) {
      clearTimeout(l), l = setTimeout(n.bind(null, ...e), t);
    };
  } else
    return (n, ...e) => n.apply(null, e);
};
export {
  u as t
};
