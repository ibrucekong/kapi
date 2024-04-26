import { _ as _export_sfc, o as openBlock, c as createElementBlock, e as createBaseVNode, r as ref, D as watch, E as onUnmounted, G as readonly, d as defineComponent, b as computed, m as createBlock, l as withCtx, H as renderSlot, g as createCommentVNode, n as normalizeClass, I as resolveDynamicComponent } from "./framework.4fa5a9ca.js";
const _sfc_main$1 = {};
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" }, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
const VTIconExternalLink = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFocusContainer(options) {
  const containsFocus = ref(false);
  if (typeof window !== "undefined") {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.elRef.value || ((_a = options.elRef.value) == null ? void 0 : _a.contains(el))) {
        containsFocus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        containsFocus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(containsFocus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VTLink",
  props: {
    href: {},
    noIcon: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isExternal = computed(() => props.href && /^[a-z]+:/i.test(props.href));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.href ? "a" : "span"), {
        class: normalizeClass(["vt-link", { link: _ctx.href }]),
        href: _ctx.href,
        target: isExternal.value ? "_blank" : void 0,
        rel: isExternal.value ? "noopener noreferrer" : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default"),
          isExternal.value && !_ctx.noIcon ? (openBlock(), createBlock(VTIconExternalLink, {
            key: 0,
            class: "vt-link-icon"
          })) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const index = "";
const VPNavBarTitle_vue_vue_type_style_index_0_scoped_353d6423_lang = "";
const style = "";
const VPNavBarSearch_vue_vue_type_style_index_0_lang = "";
const VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_aa88a0dc_lang = "";
const VPNavBarMenuGroup_vue_vue_type_style_index_0_scoped_fc428cac_lang = "";
const VPNavBarLocaleJoin_vue_vue_type_style_index_0_scoped_840651a1_lang = "";
const VPNavBarLocale_vue_vue_type_style_index_0_scoped_b1c13d91_lang = "";
const VPNavBarMenu_vue_vue_type_style_index_0_scoped_51939d87_lang = "";
const VPNavBarAppearance_vue_vue_type_style_index_0_scoped_d2368038_lang = "";
const VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_ab49ad7f_lang = "";
const VPNavBarExtra_vue_vue_type_style_index_0_scoped_49eface8_lang = "";
const VPNavBarHamburger_vue_vue_type_style_index_0_scoped_f9d36716_lang = "";
const VPNavBar_vue_vue_type_style_index_0_scoped_2adf29eb_lang = "";
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;
var allowTouchMove = function allowTouchMove2(el) {
  return locks.some(function(lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }
    return false;
  });
};
var preventDefault = function preventDefault2(rawEvent) {
  var e = rawEvent || window.event;
  if (allowTouchMove(e.target)) {
    return true;
  }
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
};
var setOverflowHidden = function setOverflowHidden2(options) {
  if (previousBodyPaddingRight === void 0) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + "px";
    }
  }
  if (previousBodyOverflowSetting === void 0) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};
var restoreOverflowSetting = function restoreOverflowSetting2() {
  if (previousBodyPaddingRight !== void 0) {
    document.body.style.paddingRight = previousBodyPaddingRight;
    previousBodyPaddingRight = void 0;
  }
  if (previousBodyOverflowSetting !== void 0) {
    document.body.style.overflow = previousBodyOverflowSetting;
    previousBodyOverflowSetting = void 0;
  }
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled2(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll2(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
var disableBodyScroll = function disableBodyScroll2(targetElement, options) {
  if (!targetElement) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (locks.some(function(lock2) {
    return lock2.targetElement === targetElement;
  })) {
    return;
  }
  var lock = {
    targetElement,
    options: options || {}
  };
  locks = [].concat(_toConsumableArray(locks), [lock]);
  if (isIosDevice) {
    targetElement.ontouchstart = function(event) {
      if (event.targetTouches.length === 1) {
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function(event) {
      if (event.targetTouches.length === 1) {
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};
var clearAllBodyScrollLocks = function clearAllBodyScrollLocks2() {
  if (isIosDevice) {
    locks.forEach(function(lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });
    if (documentListenerAdded) {
      document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = false;
    }
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }
  locks = [];
};
const VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_9c5be8e2_lang = "";
const VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_80aec27e_lang = "";
const VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_5ef86d5e_lang = "";
const VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_bc44f27a_lang = "";
const VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_300036c1_lang = "";
const VPNavBarScreenLocale_vue_vue_type_style_index_0_scoped_b9a7ee3d_lang = "";
const VPNavScreen_vue_vue_type_style_index_0_scoped_115156a1_lang = "";
const VPNav_vue_vue_type_style_index_0_scoped_874fb334_lang = "";
const VPDocOutlineItem_vue_vue_type_style_index_0_scoped_5d2e21ea_lang = "";
const VPLocalNavOutlineDropdown_vue_vue_type_style_index_0_scoped_2d721214_lang = "";
const VPLocalNav_vue_vue_type_style_index_0_scoped_02bd58d2_lang = "";
const VPSkipLink_vue_vue_type_style_index_0_scoped_ebeb70c7_lang = "";
const VPSidebarLink_vue_vue_type_style_index_0_scoped_ea5df38d_lang = "";
const VPSidebarGroup_vue_vue_type_style_index_0_scoped_669bcce6_lang = "";
const VPSidebar_vue_vue_type_style_index_0_scoped_dd98f903_lang = "";
const VPFooter_vue_vue_type_style_index_0_scoped_850c6e7d_lang = "";
const VPContentDocOutline_vue_vue_type_style_index_0_scoped_3a638cf2_lang = "";
const VPContentDocFooter_vue_vue_type_style_index_0_scoped_2bf5b381_lang = "";
const VPCarbonAds_vue_vue_type_style_index_0_lang = "";
const VPContentDoc_vue_vue_type_style_index_0_scoped_216d35dd_lang = "";
const VPNotFound_vue_vue_type_style_index_0_scoped_66264c83_lang = "";
const VPContent_vue_vue_type_style_index_0_scoped_bfc83ba5_lang = "";
const VPApp_vue_vue_type_style_index_0_scoped_546fa0b5_lang = "";
export {
  VTIconExternalLink as V,
  _sfc_main as _,
  clearAllBodyScrollLocks as c,
  disableBodyScroll as d,
  useFocusContainer as u
};
