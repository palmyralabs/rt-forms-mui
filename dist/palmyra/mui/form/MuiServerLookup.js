import { jsx as r, Fragment as d, jsxs as f } from "react/jsx-runtime";
import { forwardRef as V, useState as k, useRef as m, useImperativeHandle as y, useEffect as H } from "react";
import { getFieldLabel as M } from "./util.js";
import { FormControl as T, Autocomplete as q, TextField as z, CircularProgress as A, FormHelperText as E } from "@mui/material";
import { delayGenerator as W } from "@palmyralabs/ts-utils";
import { useServerLookupFieldManager as j, getFieldHandler as w, FieldDecorator as D } from "@palmyralabs/rt-forms";
const h = W(100), X = V(function(e, i) {
  const [l, a] = k(!1), u = m(null), o = j(e.attribute, e), {
    getError: g,
    getValue: C,
    setValue: O,
    hasValueInOptions: F,
    getOptionValue: b,
    setSearchText: I,
    refreshOptions: p,
    options: s,
    getFieldProps: L
  } = o, x = l && s.length < 1, v = C(), c = g(), P = i || m(null);
  y(P, () => ({
    ...w(o),
    focus() {
      u.current.focus();
    }
  }), [o]), H(() => {
    l && h(p);
  }, [l]);
  const R = {
    onChange: (t, n, S) => {
      O(n), e.onChange && e.onChange(t, n, S);
    },
    onInputChange: (t, n) => (l && h(I, n), !0)
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
            size: e?.fieldProps?.size,
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readOnly,
            renderOption: e.renderOption,
            isOptionEqualToValue: F,
            filterOptions: (t) => t,
            renderInput: (t) => /* @__PURE__ */ r(
              z,
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
                    x ? /* @__PURE__ */ r(A, { color: "inherit", size: 18 }) : null,
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
              a(!1);
            },
            onOpen: (t) => {
              a(!0);
            },
            ...R
          }
        ),
        /* @__PURE__ */ r(E, { className: "form-error-text", children: c.message })
      ] })
    }
  ) });
});
export {
  X as MuiServerLookup
};
