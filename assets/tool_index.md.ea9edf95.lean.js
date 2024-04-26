import { d as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, _ as _export_sfc, h as createVNode } from "./chunks/framework.4fa5a9ca.js";
const _hoisted_1 = {
  id: "iframe",
  class: "iframe"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Tool",
  setup(__props) {
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, "KAPI Tool");
    };
  }
});
const Tool_vue_vue_type_style_index_0_scoped_1256d3c3_lang = "";
const Tool = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1256d3c3"]]);
const __pageData = JSON.parse('{"title":"授权试用","description":"","frontmatter":{"page":true,"footer":false,"title":"授权试用"},"headers":[],"relativePath":"tool/index.md","filePath":"tool/index.md"}');
const __default__ = { name: "tool/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Tool)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
