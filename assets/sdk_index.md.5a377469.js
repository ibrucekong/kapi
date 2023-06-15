import { d as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, _ as _export_sfc, h as createVNode } from "./chunks/framework.b5056c03.js";
const _hoisted_1 = {
  id: "iframe",
  class: "iframe"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SDK",
  setup(__props) {
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, "KAPI SDK");
    };
  }
});
const SDK_vue_vue_type_style_index_0_scoped_90a15c98_lang = "";
const SDK = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-90a15c98"]]);
const __pageData = JSON.parse('{"title":"授权试用","description":"","frontmatter":{"page":true,"footer":false,"title":"授权试用"},"headers":[],"relativePath":"sdk/index.md","filePath":"sdk/index.md"}');
const __default__ = { name: "sdk/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(SDK)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
