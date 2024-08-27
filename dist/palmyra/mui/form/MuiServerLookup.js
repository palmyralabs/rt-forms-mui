import { jsx as r, Fragment as d, jsxs as m } from "react/jsx-runtime";
import { forwardRef as S, useState as k, useRef as f, useImperativeHandle as H, useEffect as M } from "react";
import { useServerLookupFieldManager as T, getFieldHandler as V } from "@palmyralabs/rt-forms";
import q from "./FieldDecorator.js";
import { getFieldLabel as y } from "./util.js";
import { FormControl as A, Autocomplete as E, TextField as W, CircularProgress as j, FormHelperText as w } from "@mui/material";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { t as z } from "../../../chunks/delayGenerator.js";
const h = z(100), Z = S(function(e, i) {
  const [o, u] = k(!1), a = f(null), l = T(e.attribute, e), {
    getError: g,
    /* getValue, */
    setValue: C,
    hasValueInOptions: p,
    getOptionValue: O,
    setSearchText: F,
    refreshOptions: b,
    options: s,
    getFieldProps: I
  } = l, L = o && s.length < 1, c = g(), x = i || f(null);
  H(x, () => ({
    ...V(l),
    focus() {
      a.current.focus();
    }
  }), [l]), M(() => {
    o && h(b);
  }, [o]);
  const v = {
    onChange: (t, n, P, R) => {
      C(n), e.onChange && e.onChange(t, n, P, R);
    },
    onInputChange: (t, n) => (o && h(F, n), !0)
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
            isOptionEqualToValue: p,
            filterOptions: (t) => t,
            renderInput: (t) => /* @__PURE__ */ r(
              W,
              {
                ...t,
                inputRef: (n) => {
                  a.current = n;
                },
                variant: e.variant || "standard",
                label: e.label,
                fullWidth: e.fullWidth || !0,
                required: e.required,
                InputProps: {
                  ...t.InputProps,
                  endAdornment: /* @__PURE__ */ m(d, { children: [
                    L ? /* @__PURE__ */ r(j, { color: "inherit", size: 18 }) : null,
                    t.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: (t) => O(t) + "",
            ...I(),
            options: s,
            open: o,
            onClose: () => {
              u(!1);
            },
            onOpen: (t) => {
              u(!0);
            },
            ...v
          }
        ),
        /* @__PURE__ */ r(w, { className: "form-error-text", children: c.message })
      ] })
    }
  ) });
});
export {
  Z as MuiServerLookup
};
