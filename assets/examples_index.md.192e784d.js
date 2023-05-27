import { d as defineComponent, r as ref, i as onMounted, o as openBlock, c as createElementBlock, w as withDirectives, k as vShow, u as unref, e as createBaseVNode, F as Fragment, p as pushScopeId, l as popScopeId, _ as _export_sfc, h as createVNode } from "./chunks/framework.62423cd8.js";
const _imports_0 = "/img/puff.svg";
const _withScopeId = (n) => (pushScopeId("data-v-f4b82b45"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "mask" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  width: "50",
  alt: ""
}, null, -1));
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("iframe", {
  id: "iframe",
  class: "iframe",
  src: "/sandbox/index.html"
}, null, -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Examples",
  setup(__props) {
    let show = ref(true);
    onMounted(() => {
      const iframe = document.getElementById("iframe");
      if (!iframe) {
        return;
      }
      iframe.onload = () => {
        show.value = false;
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        withDirectives(createBaseVNode("div", _hoisted_1, _hoisted_3, 512), [
          [vShow, unref(show)]
        ]),
        _hoisted_4
      ], 64);
    };
  }
});
const Examples_vue_vue_type_style_index_0_scoped_f4b82b45_lang = "";
const Examples = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f4b82b45"]]);
const __pageData = JSON.parse('{"title":"功能示例","description":"","frontmatter":{"page":true,"footer":false,"title":"功能示例"},"headers":[],"relativePath":"examples/index.md"}');
const __default__ = { name: "examples/index.md" };
const _sfc_main = Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Examples)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
