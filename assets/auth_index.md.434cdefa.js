import { _ as _imports_0 } from "./chunks/puff.fe70d5e4.js";
import { d as defineComponent, r as ref, i as onMounted, u as unref, o as openBlock, c as createElementBlock, t as toDisplayString, g as createCommentVNode, p as pushScopeId, j as popScopeId, e as createBaseVNode, _ as _export_sfc, h as createVNode } from "./chunks/framework.4fa5a9ca.js";
const _withScopeId = (n) => (pushScopeId("data-v-b2a278fe"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "tip"
};
const _hoisted_2 = { key: 1 };
const _hoisted_3 = {
  key: 0,
  class: "mask"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  width: "50",
  alt: ""
}, null, -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("iframe", {
  id: "iframe",
  class: "iframe",
  src: "/authorization/index.html"
}, null, -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Auth",
  setup(__props) {
    let show = ref(true);
    let mobile = ref(false);
    let tip = ref();
    function isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag != null;
    }
    onMounted(() => {
      if (isMobile()) {
        tip.value = "当前页面不支持移动端查看，请在PC端浏览";
        show.value = false;
        mobile.value = true;
        return false;
      }
      const iframe = document.getElementById("iframe");
      if (!iframe) {
        return;
      }
      iframe.onload = () => {
        show.value = false;
      };
    });
    return (_ctx, _cache) => {
      return unref(mobile) ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(unref(tip)), 1)) : (openBlock(), createElementBlock("div", _hoisted_2, [
        unref(show) ? (openBlock(), createElementBlock("div", _hoisted_3, _hoisted_5)) : createCommentVNode("", true),
        _hoisted_6
      ]));
    };
  }
});
const Auth_vue_vue_type_style_index_0_scoped_b2a278fe_lang = "";
const Auth = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b2a278fe"]]);
const __pageData = JSON.parse('{"title":"授权试用","description":"","frontmatter":{"page":true,"footer":false,"title":"授权试用"},"headers":[],"relativePath":"auth/index.md","filePath":"auth/index.md"}');
const __default__ = { name: "auth/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Auth)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
