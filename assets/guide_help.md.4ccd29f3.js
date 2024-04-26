import { d as defineComponent, r as ref, i as onMounted, o as openBlock, c as createElementBlock, x as createTextVNode, g as createCommentVNode, _ as _export_sfc, h as createVNode } from "./chunks/framework.4fa5a9ca.js";
const _hoisted_1 = { class: "help-container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Help",
  setup(__props) {
    let dark = ref(false);
    onMounted(() => {
      dark.value = document.body.classList.contains("dark");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createTextVNode(" 正在编制中 "),
        createCommentVNode("", true)
      ]);
    };
  }
});
const Help_vue_vue_type_style_index_0_scoped_8dfab88e_lang = "";
const Help = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8dfab88e"]]);
const __pageData = JSON.parse('{"title":"帮助","description":"","frontmatter":{"page":true,"footer":false,"title":"帮助"},"headers":[],"relativePath":"guide/help.md","filePath":"guide/help.md"}');
const __default__ = { name: "guide/help.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Help)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
