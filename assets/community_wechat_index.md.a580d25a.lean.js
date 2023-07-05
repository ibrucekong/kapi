import { d as defineComponent, r as ref, i as onMounted, k as resolveComponent, o as openBlock, c as createElementBlock, u as unref, F as Fragment, f as renderList, h as createVNode, l as withCtx, w as withDirectives, m as createBlock, e as createBaseVNode, t as toDisplayString, s as vShow, p as pushScopeId, j as popScopeId, _ as _export_sfc } from "./chunks/framework.1251c745.js";
const _withScopeId = (n) => (pushScopeId("data-v-838c0697"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "case-container theme" };
const _hoisted_2 = { class: "grid-content bg-purple" };
const _hoisted_3 = { class: "status" };
const _hoisted_4 = {
  key: 1,
  class: "case-card"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "grid-content bg-purple null" }, " 暂无数据 ", -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WeChat",
  setup(__props) {
    let list = ref();
    let listLength = ref([]);
    onMounted(() => {
      list.value = [];
      listLength = list.value.length;
    });
    return (_ctx, _cache) => {
      const _component_el_image = resolveComponent("el-image");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        unref(listLength) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(list), (row, index) => {
          return openBlock(), createElementBlock("div", {
            class: "case-card",
            key: index
          }, [
            createVNode(_component_el_row, { gutter: 50 }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(row, (item, key) => {
                  return withDirectives((openBlock(), createBlock(_component_el_col, {
                    span: 6,
                    key: item.id,
                    title: item.name
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(_component_el_image, {
                          src: item.img,
                          fit: "cover"
                        }, null, 8, ["src"])
                      ]),
                      createBaseVNode("div", _hoisted_3, toDisplayString(item.status === 1 ? "扫码加入" : "此群已满"), 1)
                    ]),
                    _: 2
                  }, 1032, ["title"])), [
                    [vShow, !!item]
                  ]);
                }), 128))
              ]),
              _: 2
            }, 1024)
          ]);
        }), 128)) : (openBlock(), createElementBlock("div", _hoisted_4, [
          createVNode(_component_el_row, { gutter: 50 }, {
            default: withCtx(() => [
              createVNode(_component_el_col, { span: 6 }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]))
      ]);
    };
  }
});
const WeChat_vue_vue_type_style_index_0_scoped_838c0697_lang = "";
const WeChat = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-838c0697"]]);
const __pageData = JSON.parse('{"title":"微信群","description":"","frontmatter":{"page":true,"footer":false,"title":"微信群"},"headers":[],"relativePath":"community/wechat/index.md","filePath":"community/wechat/index.md"}');
const __default__ = { name: "community/wechat/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(WeChat)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
