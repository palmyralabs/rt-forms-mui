import { jsx as r, Fragment as d, jsxs as m } from "react/jsx-runtime";
import { forwardRef as S, useState as V, useRef as f, useImperativeHandle as k, useEffect as H } from "react";
import { useServerLookupFieldManager as M, getFieldHandler as T } from "@palmyralabs/rt-forms";
import q from "./FieldDecorator.js";
import { getFieldLabel as y } from "./util.js";
import { FormControl as A, Autocomplete as E, TextField as j, CircularProgress as w, FormHelperText as z } from "@mui/material";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { t as D } from "../../../chunks/delayGenerator.js";
const p = D(100), Z = S(function(e, i) {
  const [n, u] = V(!1), s = f(null), l = M(e.attribute, e), {
    getError: g,
    getValue: h,
    setValue: C,
    hasValueInOptions: O,
    getOptionValue: F,
    setSearchText: b,
    refreshOptions: I,
    options: a,
    getFieldProps: L
  } = l, x = n && a.length < 1, v = h(), c = g(), P = i || f(null);
  k(P, () => ({
    ...T(l),
    focus() {
      s.current.focus();
    }
  }), [l]), H(() => {
    n && p(I);
  }, [n]);
  const R = {
    onChange: (t, o) => {
      C(o);
    },
    onInputChange: (t, o) => (n && p(b, o), !0)
  };
  return /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(
    q,
    {
      label: y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ m(A, { fullWidth: !0, error: c.status, children: [
        /* @__PURE__ */ r(
          E,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readOnly,
            renderOption: e.renderOption,
            isOptionEqualToValue: O,
            filterOptions: (t) => t,
            renderInput: (t) => /* @__PURE__ */ r(
              j,
              {
                ...t,
                inputRef: (o) => {
                  s.current = o;
                },
                variant: "standard",
                label: e.label,
                required: e.required,
                InputProps: {
                  ...t.InputProps,
                  endAdornment: /* @__PURE__ */ m(d, { children: [
                    x ? /* @__PURE__ */ r(w, { color: "inherit", size: 18 }) : null,
                    t.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: (t) => F(t) + "",
            ...L(),
            value: v,
            options: a,
            open: n,
            onClose: () => {
              u(!1);
            },
            onOpen: (t) => {
              u(!0);
            },
            ...R
          }
        ),
        /* @__PURE__ */ r(z, { className: "form-error-text", children: c.message })
      ] })
    }
  ) });
});
export {
  Z as MuiServerLookup
};
