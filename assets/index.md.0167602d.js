import { _ as _sfc_main$3 } from "./chunks/VPApp.vue_vue_type_style_index_0_scoped_546fa0b5_lang.162f1f63.js";
import { d as defineComponent, y as useData, o as openBlock, c as createElementBlock, e as createBaseVNode, F as Fragment, f as renderList, u as unref, t as toDisplayString, h as createVNode, l as withCtx, x as createTextVNode, i as onMounted, g as createCommentVNode, a as createStaticVNode, p as pushScopeId, j as popScopeId, _ as _export_sfc } from "./chunks/framework.9462e463.js";
import "./chunks/utils.eca1f110.js";
const _hoisted_1$1 = { id: "sitemap" };
const _hoisted_2$1 = { class: "container" };
const _hoisted_3$1 = { class: "sitemap-col" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("section", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), (col) => {
            return openBlock(), createElementBlock("div", _hoisted_3$1, [
              createBaseVNode("h4", null, toDisplayString(col.text), 1),
              createBaseVNode("ul", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(col.items, (row) => {
                  return openBlock(), createElementBlock("li", null, [
                    createVNode(unref(_sfc_main$3), {
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
const VueMasteryModal_vue_vue_type_style_index_0_scoped_d0f71de2_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-aec2d19a"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "hero" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "tagline" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "accent" }, "数字孪生"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode("JavaScript框架 ")
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "description" }, " 简单易用、超高性能、数据安全、功能强大的云渲染数字孪生框架 ", -1));
const _hoisted_4 = { class: "actions" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  class: "get-started",
  style: { "color": "white", "background": "#42b883" },
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
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  class: "setup",
  href: "/guide/installation.html"
}, "安装", -1));
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<section id="highlights" class="vt-box-container" data-v-aec2d19a><div class="vt-box" data-v-aec2d19a><h2 data-v-aec2d19a>高易用</h2><p data-v-aec2d19a> 框架提供丰富、易上手和对新手友好的开发文档，简单易用 </p></div><div class="vt-box" data-v-aec2d19a><h2 data-v-aec2d19a>高兼容</h2><p data-v-aec2d19a> 使用JavaScript编译，跨平台、跨终端，不挑前端框架 </p></div><div class="vt-box" data-v-aec2d19a><h2 data-v-aec2d19a>高性能</h2><p data-v-aec2d19a> 高吞吐、低延迟、高精细和强大的粒子可视化效果 </p></div><div class="vt-box" data-v-aec2d19a><h2 data-v-aec2d19a>高安全</h2><p data-v-aec2d19a> 数据完全云渲染，不被爬、不怕数据丢失，保障数据安全性 </p></div><div class="vt-box" data-v-aec2d19a><h2 data-v-aec2d19a>高逼真</h2><p data-v-aec2d19a> 对真实世界1:1复刻，实现孪生世界与真实世界的联动 </p></div><div class="vt-box" data-v-aec2d19a><h2 data-v-aec2d19a>高并发</h2><p data-v-aec2d19a> 实现多客户端的信息同步、画面同步、物联控制同步 </p></div></section>', 1);
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
            createCommentVNode("", true),
            _hoisted_5,
            _hoisted_6
          ])
        ]),
        _hoisted_7,
        createVNode(_sfc_main$2)
      ], 64);
    };
  }
});
const Home_vue_vue_type_style_index_0_scoped_aec2d19a_lang = "";
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-aec2d19a"]]);
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
