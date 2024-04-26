import { d as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, _ as _export_sfc, h as createVNode } from "./chunks/framework.4fa5a9ca.js";
const _hoisted_1 = {
  id: "iframe",
  class: "iframe"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Cli",
  setup(__props) {
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, "KAPI CLI");
    };
  }
});
const Cli_vue_vue_type_style_index_0_scoped_74a310cf_lang = "";
const Cli = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-74a310cf"]]);
const __pageData = JSON.parse('{"title":"CLI","description":"","frontmatter":{"page":true,"footer":false,"title":"CLI"},"headers":[],"relativePath":"cli/index.md","filePath":"cli/index.md"}');
const __default__ = { name: "cli/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Cli)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
