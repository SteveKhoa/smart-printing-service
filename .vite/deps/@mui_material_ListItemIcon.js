"use client";
import {
  ListContext_default
} from "./chunk-VGQR7LK5.js";
import {
  init_composeClasses
} from "./chunk-OJF47TFJ.js";
import {
  init_styled,
  styled_default
} from "./chunk-6CEGZ6UX.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx,
  init_esm,
  init_extends,
  init_generateUtilityClass,
  init_objectWithoutPropertiesLoose,
  init_useThemeProps,
  require_jsx_runtime,
  require_prop_types,
  useThemeProps
} from "./chunk-E3LREPM5.js";
import {
  __toESM,
  require_react
} from "./chunk-2FATVHAI.js";

// node_modules/@mui/material/ListItemIcon/ListItemIcon.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_styled();
init_useThemeProps();

// node_modules/@mui/material/ListItemIcon/listItemIconClasses.js
init_esm();
init_generateUtilityClass();
function getListItemIconUtilityClass(slot) {
  return generateUtilityClass("MuiListItemIcon", slot);
}
var listItemIconClasses = generateUtilityClasses("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
var listItemIconClasses_default = listItemIconClasses;

// node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className"];
var useUtilityClasses = (ownerState) => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ["root", alignItems === "flex-start" && "alignItemsFlexStart"]
  };
  return composeClasses(slots, getListItemIconUtilityClass, classes);
};
var ListItemIconRoot = styled_default("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.alignItems === "flex-start" && styles.alignItemsFlexStart];
  }
})(({
  theme,
  ownerState
}) => _extends({
  minWidth: 56,
  color: (theme.vars || theme).palette.action.active,
  flexShrink: 0,
  display: "inline-flex"
}, ownerState.alignItems === "flex-start" && {
  marginTop: 8
}));
var ListItemIcon = React.forwardRef(function ListItemIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiListItemIcon"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const context = React.useContext(ListContext_default);
  const ownerState = _extends({}, props, {
    alignItems: context.alignItems
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(ListItemIconRoot, _extends({
    className: clsx_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? ListItemIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var ListItemIcon_default = ListItemIcon;
export {
  ListItemIcon_default as default,
  getListItemIconUtilityClass,
  listItemIconClasses_default as listItemIconClasses
};
//# sourceMappingURL=@mui_material_ListItemIcon.js.map
