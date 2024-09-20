import { jsx as r, Fragment as d, jsxs as m } from "react/jsx-runtime";
import { forwardRef as S, useState as V, useRef as f, useImperativeHandle as k, useEffect as H } from "react";
import { getFieldLabel as M } from "./util.js";
import { FormControl as T, Autocomplete as q, TextField as y, CircularProgress as A, FormHelperText as E } from "@mui/material";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { t as W } from "../../../chunks/delayGenerator.js";
import { useServerLookupFieldManager as j, getFieldHandler as w, FieldDecorator as z } from "@palmyralabs/rt-forms";
const h = W(100), Y = S(function(e, i) {
  const [n, u] = V(!1), a = f(null), o = j(e.attribute, e), {
    getError: g,
    getValue: p,
    setValue: C,
    hasValueInOptions: O,
    getOptionValue: F,
    setSearchText: b,
    refreshOptions: I,
    options: s,
    getFieldProps: L
  } = o, v = n && s.length < 1, x = p(), c = g(), P = i || f(null);
  k(P, () => ({
    ...w(o),
    focus() {
      a.current.focus();
    }
  }), [o]), H(() => {
    n && h(I);
  }, [n]);
  const R = {
    onChange: (t, l) => {
      C(l);
    },
    onInputChange: (t, l) => (n && h(b, l), !0)
  };
  return /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(
    z,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ m(T, { fullWidth: !0, error: c.status, children: [
        /* @__PURE__ */ r(
          q,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readOnly,
            renderOption: e.renderOption,
            isOptionEqualToValue: O,
            filterOptions: (t) => t,
            renderInput: (t) => /* @__PURE__ */ r(
              y,
              {
                ...t,
                inputRef: (l) => {
                  a.current = l;
                },
                variant: e.variant || "standard",
                label: e.label,
                placeholder: e.placeholder,
                fullWidth: e.fullWidth || !0,
                required: e.required,
                InputProps: {
                  ...t.InputProps,
                  endAdornment: /* @__PURE__ */ m(d, { children: [
                    v ? /* @__PURE__ */ r(A, { color: "inherit", size: 18 }) : null,
                    t.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: (t) => F(t) + "",
            ...L(),
            value: x,
            options: s,
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
        /* @__PURE__ */ r(E, { className: "form-error-text", children: c.message })
      ] })
    }
  ) });
});
export {
  Y as MuiServerLookup
};
