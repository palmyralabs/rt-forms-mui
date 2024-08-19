import { jsx as r, Fragment as d, jsxs as m } from "react/jsx-runtime";
import { forwardRef as k, useState as H, useRef as f, useImperativeHandle as M, useEffect as T } from "react";
import { useServerLookupFieldManager as q, getFieldHandler as y } from "@palmyralabs/rt-forms";
import A from "./FieldDecorator.js";
import { getFieldLabel as E } from "./util.js";
import { FormControl as j, Autocomplete as w, TextField as z, CircularProgress as D, FormHelperText as N } from "@mui/material";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { t as W } from "../../../chunks/delayGenerator.js";
const g = W(100), $ = k(function(e, i) {
  const [o, u] = H(!1), a = f(null), l = q(e.attribute, e), {
    getError: h,
    getValue: p,
    setValue: C,
    hasValueInOptions: O,
    getOptionValue: F,
    setSearchText: b,
    refreshOptions: I,
    options: s,
    getFieldProps: L
  } = l, x = o && s.length < 1, v = p(), c = h(), P = i || f(null);
  M(P, () => ({
    ...y(l),
    focus() {
      a.current.focus();
    }
  }), [l]), T(() => {
    o && g(I);
  }, [o]);
  const R = {
    onChange: (t, n, S, V) => {
      C(n), e.onChange && e.onChange(t, n, S, V);
    },
    onInputChange: (t, n) => (o && g(b, n), !0)
  };
  return /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(
    A,
    {
      label: E(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ m(j, { fullWidth: !0, error: c.status, children: [
        /* @__PURE__ */ r(
          w,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readOnly,
            renderOption: e.renderOption,
            isOptionEqualToValue: O,
            filterOptions: (t) => t,
            renderInput: (t) => /* @__PURE__ */ r(
              z,
              {
                ...t,
                inputRef: (n) => {
                  a.current = n;
                },
                variant: "standard",
                label: e.label,
                required: e.required,
                InputProps: {
                  ...t.InputProps,
                  endAdornment: /* @__PURE__ */ m(d, { children: [
                    x ? /* @__PURE__ */ r(D, { color: "inherit", size: 18 }) : null,
                    t.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: (t) => F(t) + "",
            ...L(),
            value: v,
            options: s,
            open: o,
            onClose: () => {
              u(!1);
            },
            onOpen: (t) => {
              u(!0);
            },
            ...R
          }
        ),
        /* @__PURE__ */ r(N, { className: "form-error-text", children: c.message })
      ] })
    }
  ) });
});
export {
  $ as MuiServerLookup
};
