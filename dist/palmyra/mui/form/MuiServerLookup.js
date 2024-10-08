import { jsx as r, Fragment as d, jsxs as m } from "react/jsx-runtime";
import { forwardRef as V, useState as k, useRef as f, useImperativeHandle as H, useEffect as M } from "react";
import { getFieldLabel as T } from "./util.js";
import { FormControl as q, Autocomplete as y, TextField as A, CircularProgress as E, FormHelperText as W } from "@mui/material";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { t as j } from "../../../chunks/delayGenerator.js";
import { useServerLookupFieldManager as w, getFieldHandler as z, FieldDecorator as D } from "@palmyralabs/rt-forms";
const h = j(100), Z = V(function(e, i) {
  const [l, a] = k(!1), u = f(null), o = w(e.attribute, e), {
    getError: g,
    getValue: C,
    setValue: O,
    hasValueInOptions: p,
    getOptionValue: F,
    setSearchText: b,
    refreshOptions: I,
    options: s,
    getFieldProps: L
  } = o, x = l && s.length < 1, v = C(), c = g(), P = i || f(null);
  H(P, () => ({
    ...z(o),
    focus() {
      u.current.focus();
    }
  }), [o]), M(() => {
    l && h(I);
  }, [l]);
  const R = {
    onChange: (t, n, S) => {
      O(n), e.onChange && e.onChange(t, n, S);
    },
    onInputChange: (t, n) => (l && h(b, n), !0)
  };
  return /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(
    D,
    {
      label: T(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ m(q, { fullWidth: !0, error: c.status, children: [
        /* @__PURE__ */ r(
          y,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readOnly,
            renderOption: e.renderOption,
            isOptionEqualToValue: p,
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
                  endAdornment: /* @__PURE__ */ m(d, { children: [
                    x ? /* @__PURE__ */ r(E, { color: "inherit", size: 18 }) : null,
                    t.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: (t) => F(t) + "",
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
        /* @__PURE__ */ r(W, { className: "form-error-text", children: c.message })
      ] })
    }
  ) });
});
export {
  Z as MuiServerLookup
};
