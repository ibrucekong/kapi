import { d as defineComponent, r as ref, i as onMounted, k as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, F as Fragment, f as renderList, u as unref, n as normalizeClass, g as createCommentVNode, h as createVNode, l as withCtx, w as withDirectives, m as createBlock, q as createTextVNode, p as pushScopeId, j as popScopeId, s as nextTick, x as vShow, _ as _export_sfc } from "./chunks/framework.b5056c03.js";
import { _ as _imports_0 } from "./chunks/puff.fe70d5e4.js";
const _withScopeId = (n) => (pushScopeId("data-v-579b357d"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "case-container" };
const _hoisted_2 = { class: "grid-content bg-purple" };
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
const _hoisted_6 = { class: "back" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("iframe", {
  id: "iframe",
  class: "iframe",
  src: ""
}, null, -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Case",
  setup(__props) {
    let dark = ref(false);
    let show = ref(false);
    let showIframe = ref(false);
    let list = ref();
    onMounted(() => {
      list.value = [[{
        id: 0,
        name: "数字孪生仿真可视化大屏",
        url: "/case/screen/index.html",
        img: "/img/screen.png",
        outerLink: false
      }, {
        id: 1,
        name: "授权",
        url: "/authorization/index.html",
        img: "/img/screen.png",
        outerLink: false
      }, {
        id: 2,
        name: "功能示例",
        url: "/sandbox/index.html",
        img: "/img/screen.png",
        outerLink: false
      }], [{
        id: 3,
        name: "测试外链",
        url: "https://www.baidu.com",
        img: "/img/screen.png",
        outerLink: true
      }, {
        id: 4,
        name: "外链官网",
        url: "https://kapi.brucekong.com",
        img: "/img/screen.png",
        outerLink: true
      }]];
    });
    const gotoPreview = async (item) => {
      if (item.outerLink) {
        window.open(item.url, "blank");
        return;
      }
      showIframe.value = true;
      show.value = true;
      dark.value = document.body.classList.contains("dark");
      await nextTick();
      let iframe = document.getElementById("iframe");
      if (!iframe) {
        return;
      }
      document.body.style.overflow = "hidden";
      iframe.src = item.url;
      iframe.onload = () => {
        show.value = false;
      };
    };
    const back = () => {
      document.body.style.overflow = "auto";
      showIframe.value = false;
      show.value = false;
      let iframe = document.getElementById("iframe");
      if (!iframe) {
        return;
      }
      iframe.src = "";
    };
    return (_ctx, _cache) => {
      const _component_el_image = resolveComponent("el-image");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_button = resolveComponent("el-button");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (row, index) => {
            return openBlock(), createElementBlock("div", {
              class: "case-card",
              key: index
            }, [
              createVNode(_component_el_row, { gutter: 50 }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(row, (item, key) => {
                    return withDirectives((openBlock(), createBlock(_component_el_col, {
                      span: 8,
                      key: item.id,
                      onClick: ($event) => gotoPreview(item),
                      title: item.name
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_2, [
                          createVNode(_component_el_image, {
                            src: item.img,
                            fit: "cover"
                          }, null, 8, ["src"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["onClick", "title"])), [
                      [vShow, !!item]
                    ]);
                  }), 128))
                ]),
                _: 2
              }, 1024)
            ]);
          }), 128))
        ]),
        unref(showIframe) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["case-preview", unref(dark) ? "dark" : "white"])
        }, [
          unref(show) ? (openBlock(), createElementBlock("div", _hoisted_3, _hoisted_5)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_el_button, {
              type: "primary",
              title: "返回",
              onClick: back,
              round: ""
            }, {
              default: withCtx(() => [
                createTextVNode("返回")
              ]),
              _: 1
            })
          ]),
          _hoisted_7
        ], 2)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const Case_vue_vue_type_style_index_0_scoped_579b357d_lang = "";
const Case = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-579b357d"]]);
const __pageData = JSON.parse('{"title":"功能示例","description":"","frontmatter":{"page":true,"footer":false,"title":"功能示例"},"headers":[],"relativePath":"case/index.md","filePath":"case/index.md"}');
const __default__ = { name: "case/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Case)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
