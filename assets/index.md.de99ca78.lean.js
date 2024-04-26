import { _ as _sfc_main$4 } from "./chunks/VPApp.vue_vue_type_style_index_0_scoped_546fa0b5_lang.f7300a37.js";
import { d as defineComponent, y as useData, o as openBlock, c as createElementBlock, e as createBaseVNode, F as Fragment, f as renderList, u as unref, t as toDisplayString, h as createVNode, l as withCtx, x as createTextVNode, r as ref, D as watch, m as createBlock, T as Teleport, g as createCommentVNode, p as pushScopeId, j as popScopeId, _ as _export_sfc, i as onMounted, a as createStaticVNode } from "./chunks/framework.4fa5a9ca.js";
import "./chunks/utils.7be6accc.js";
const _hoisted_1$2 = { id: "sitemap" };
const _hoisted_2$1 = { class: "container" };
const _hoisted_3$1 = { class: "sitemap-col" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SiteMap",
  setup(__props) {
    const data = useData();
    const nav = data.site.value.themeConfig.nav;
    const ecosystem = nav.find((i) => {
      var _a;
      return (_a = i.activeMatch) == null ? void 0 : _a.includes("ecosystem");
    });
    const community = nav.find((i) => {
      var _a;
      return (_a = i.activeMatch) == null ? void 0 : _a.includes("community");
    });
    let items = nav.filter((i) => i !== ecosystem && i.items).concat(ecosystem.items);
    items = items.filter((i) => i !== community && i.items).concat(community.items);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), (col) => {
            return openBlock(), createElementBlock("div", _hoisted_3$1, [
              createBaseVNode("h4", null, toDisplayString(col.text), 1),
              createBaseVNode("ul", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(col.items, (row) => {
                  return openBlock(), createElementBlock("li", null, [
                    createVNode(unref(_sfc_main$4), {
                      href: row.link
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.text), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ]);
                }), 256))
              ])
            ]);
          }), 256))
        ])
      ]);
    };
  }
});
const SiteMap_vue_vue_type_style_index_0_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-cc331419"), n = n(), popScopeId(), n);
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "icon-play",
  "aria-labelledby": "simpleicons-play-icon",
  role: "img",
  viewBox: "0 0 100 125",
  fill: "#FFFFFF"
}, [
  /* @__PURE__ */ createBaseVNode("title", {
    id: "simpleicons-play-icon",
    lang: "en"
  }, "了解我们"),
  /* @__PURE__ */ createBaseVNode("path", { d: "M50,3.8C24.5,3.8,3.8,24.5,3.8,50S24.5,96.2,50,96.2S96.2,75.5,96.2,50S75.5,3.8,50,3.8z M71.2,53.3l-30.8,18  c-0.6,0.4-1.3,0.5-1.9,0.5c-0.6,0-1.3-0.1-1.9-0.5c-1.2-0.6-1.9-1.9-1.9-3.3V32c0-1.4,0.8-2.7,1.9-3.3c1.2-0.6,2.7-0.6,3.8,0  l30.8,18c1.2,0.6,1.9,1.9,1.9,3.3S72.3,52.7,71.2,53.3z" })
], -1));
const VIDEO_SOURCE = "https://share.plvideo.cn/front/video/preview?vid=964b059147d69b9fe200a4fb36941f62_9";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VueMasteryModal",
  setup(__props) {
    const showWhyVue = ref(false);
    watch(
      () => showWhyVue,
      (value) => {
        value ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = "auto";
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("a", {
          id: "vuemastery-action",
          class: "why-vue",
          onClick: _cache[0] || (_cache[0] = ($event) => showWhyVue.value = true),
          href: "javascript:;"
        }, [
          _hoisted_1$1,
          createTextVNode(" 了解我们 ")
        ]),
        showWhyVue.value ? (openBlock(), createBlock(Teleport, {
          key: 0,
          to: "body"
        }, [
          createBaseVNode("div", {
            onClick: _cache[1] || (_cache[1] = ($event) => showWhyVue.value = false),
            class: "vuemastery-modal-mask"
          }, [
            createBaseVNode("div", { class: "vuemastery-modal-wrapper" }, [
              createBaseVNode("div", { class: "vuemastery-modal-container" }, [
                createBaseVNode("div", { class: "vuemastery-modal-content" }, [
                  createBaseVNode("div", { class: "vuemastery-video-space" }, [
                    createBaseVNode("iframe", {
                      src: VIDEO_SOURCE,
                      style: { "height": "100%", "left": "0", "position": "absolute", "top": "0", "width": "100%", "border-radius": "6px" },
                      frameborder: "0",
                      webkitallowfullscreen: "",
                      mozallowfullscreen: "",
                      allowfullscreen: "",
                      allow: "autoplay"
                    })
                  ])
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const VueMasteryModal_vue_vue_type_style_index_0_scoped_cc331419_lang = "";
const VueMasteryModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-cc331419"]]);
const _withScopeId = (n) => (pushScopeId("data-v-6dcdfd89"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "hero" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "tagline" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "accent" }, "数字孪生"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode("JavaScript框架 ")
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "description" }, " 简单易用、超高性能、数据安全、功能强大的云渲染数字孪生框架 ", -1));
const _hoisted_4 = { class: "actions" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  class: "setup",
  style: { "font-size": "16px" },
  href: "/guide/quick-start.html"
}, [
  /* @__PURE__ */ createTextVNode(" 快速上手 "),
  /* @__PURE__ */ createBaseVNode("svg", {
    class: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" })
  ])
], -1));
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<section id="highlights" class="vt-box-container" data-v-6dcdfd89><div class="vt-box" data-v-6dcdfd89><h2 data-v-6dcdfd89>高易用</h2><p data-v-6dcdfd89> 框架提供丰富、易上手和对新手友好的开发文档，简单易用 </p></div><div class="vt-box" data-v-6dcdfd89><h2 data-v-6dcdfd89>高兼容</h2><p data-v-6dcdfd89> 使用JavaScript编译，跨平台、跨终端，不挑前端框架 </p></div><div class="vt-box" data-v-6dcdfd89><h2 data-v-6dcdfd89>高性能</h2><p data-v-6dcdfd89> 高吞吐、低延迟、高精细和强大的粒子可视化效果 </p></div><div class="vt-box" data-v-6dcdfd89><h2 data-v-6dcdfd89>高安全</h2><p data-v-6dcdfd89> 数据完全云渲染，不被爬、不怕数据丢失，保障数据安全性 </p></div><div class="vt-box" data-v-6dcdfd89><h2 data-v-6dcdfd89>高逼真</h2><p data-v-6dcdfd89> 对真实世界1:1复刻，实现孪生世界与真实世界的联动 </p></div><div class="vt-box" data-v-6dcdfd89><h2 data-v-6dcdfd89>高并发</h2><p data-v-6dcdfd89> 实现多客户端的信息同步、画面同步、物联控制同步 </p></div></section>', 1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Home",
  setup(__props) {
    onMounted(async () => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("section", _hoisted_1, [
          _hoisted_2,
          _hoisted_3,
          createBaseVNode("p", _hoisted_4, [
            (openBlock(), createBlock(VueMasteryModal, { key: 0 })),
            _hoisted_5,
            createCommentVNode("", true)
          ])
        ]),
        _hoisted_7,
        createVNode(_sfc_main$3)
      ], 64);
    };
  }
});
const Home_vue_vue_type_style_index_0_scoped_6dcdfd89_lang = "";
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6dcdfd89"]]);
const __pageData = JSON.parse('{"title":"KAPI - 简单易用、超高性能、数据安全、功能强大的云渲染数字孪生框架","description":"","frontmatter":{"page":true,"title":"KAPI - 简单易用、超高性能、数据安全、功能强大的云渲染数字孪生框架"},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Home)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
