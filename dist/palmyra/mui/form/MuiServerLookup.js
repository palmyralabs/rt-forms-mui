import { jsx as r, Fragment as d, jsxs as f } from "react/jsx-runtime";
import { forwardRef as V, useState as k, useRef as m, useImperativeHandle as y, useEffect as H } from "react";
import { getFieldLabel as M } from "./util.js";
import { FormControl as T, Autocomplete as q, TextField as A, CircularProgress as E, FormHelperText as W } from "@mui/material";
import { delayGenerator as j } from "@palmyralabs/ts-utils";
import { useServerLookupFieldManager as w, getFieldHandler as z, FieldDecorator as D } from "@palmyralabs/rt-forms";
const h = j(100), X = V(function(e, a) {
  const [l, i] = k(!1), u = m(null), o = w(e.attribute, e), {
    getError: g,
    getValue: C,
    setValue: O,
    hasValueInOptions: F,
    getOptionValue: b,
    setSearchText: p,
    refreshOptions: I,
    options: s,
    getFieldProps: L
  } = o, x = l && s.length < 1, v = C(), c = g(), P = a || m(null);
  y(P, () => ({
    ...z(o),
    focus() {
      u.current.focus();
    }
  }), [o]), H(() => {
    l && h(I);
  }, [l]);
  const R = {
    onChange: (t, n, S) => {
      O(n), e.onChange && e.onChange(t, n, S);
    },
    onInputChange: (t, n) => (l && h(p, n), !0)
  };
  return /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(
    D,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ f(T, { fullWidth: !0, error: c.status, children: [
        /* @__PURE__ */ r(
          q,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readOnly,
            renderOption: e.renderOption,
            isOptionEqualToValue: F,
            filterOptions: (t) => t,
            renderInput: (t) => /* @__PURE__ */ r(
              A,
              {
                ...t,
                inputRef: (n) => {
                  u.current = n;
                },
                variant: e.variant || "standard",
                label: e.label,
                placeholder: e.placeholder,
                fullWidth: e.fullWidth || !0,
                required: e.required,
                InputProps: {
                  ...t.InputProps,
                  endAdornment: /* @__PURE__ */ f(d, { children: [
                    x ? /* @__PURE__ */ r(E, { color: "inherit", size: 18 }) : null,
                    t.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: (t) => b(t) + "",
            ...L(),
            value: v,
            options: s,
            open: l,
            onClose: () => {
              i(!1);
            },
            onOpen: (t) => {
              i(!0);
            },
            ...R
          }
        ),
        /* @__PURE__ */ r(W, { className: "form-error-text", children: c.message })
      ] })
    }
  ) });
});
export {
  X as MuiServerLookup
};
