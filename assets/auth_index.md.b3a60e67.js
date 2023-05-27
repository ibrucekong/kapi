import { d as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, _ as _export_sfc, h as createVNode } from "./chunks/framework.c3f5e592.js";
const _hoisted_1 = {
  class: "iframe",
  src: "/auth/index.html"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Auth",
  setup(__props) {
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("iframe", _hoisted_1);
    };
  }
});
const Auth_vue_vue_type_style_index_0_scoped_184fe3a8_lang = "";
const Auth = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-184fe3a8"]]);
const __pageData = JSON.parse('{"title":"授权试用","description":"","frontmatter":{"page":true,"footer":false,"title":"授权试用"},"headers":[],"relativePath":"auth/index.md"}');
const __default__ = { name: "auth/index.md" };
const _sfc_main = Object.assign(__default__, {
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
