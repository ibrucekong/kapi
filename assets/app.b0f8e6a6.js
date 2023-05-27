import { r as ref, d as defineComponent, G as useRoute, b as computed, g as createCommentVNode, s as inject, _ as _export_sfc, o as openBlock, c as createElementBlock, e as createBaseVNode, h as createVNode, u as unref, p as pushScopeId, k as popScopeId, j as createTextVNode, n as h, Y as inBrowser, Z as useUpdateHead, m as useData, i as onMounted, X as watchEffect, $ as usePrefetch, a0 as useCopyCode, a1 as useCodeGroups, a2 as RouterSymbol, a3 as initData, a4 as dataSymbol, a5 as Content, a6 as ClientOnly, a7 as siteDataRef, a8 as createSSRApp, a9 as createRouter, aa as pathToFile, J as __vitePreload } from "./chunks/framework.57b17dd8.js";
import { V as VTIconPlus, a as VPTheme } from "./chunks/index.cbe31e39.js";
import "./chunks/config.1947f841.js";
const hasStorage = typeof localStorage !== "undefined";
const get = (key, defaultValue = false) => hasStorage ? JSON.parse(localStorage.getItem(key) || String(defaultValue)) : defaultValue;
const preferCompositionKey = "vue-docs-prefer-composition";
const preferComposition = ref(get(preferCompositionKey));
const preferSFCKey = "vue-docs-prefer-sfc";
const preferSFC = ref(get(preferSFCKey, true));
function filterHeadersByPreference(h2) {
  return preferComposition.value ? !h2.optionsOnly : !h2.compositionOnly;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PreferenceSwitch",
  setup(__props) {
    const route = useRoute();
    computed(
      () => /^\/(guide|tutorial|examples|style-guide)\//.test(route.path)
    );
    computed(() => !/^\/guide|style-guide/.test(route.path));
    ref(true);
    useToggleFn(
      preferCompositionKey,
      preferComposition,
      "prefer-composition"
    );
    useToggleFn(preferSFCKey, preferSFC, "prefer-sfc");
    inject("close-sidebar");
    function useToggleFn(storageKey, state, className) {
      if (typeof localStorage === "undefined") {
        return () => {
        };
      }
      const classList = document.documentElement.classList;
      return (value = !state.value) => {
        if (state.value = value) {
          classList.add(className);
        } else {
          classList.remove(className);
        }
        localStorage.setItem(storageKey, String(state.value));
      };
    }
    return (_ctx, _cache) => {
      return createCommentVNode("", true);
    };
  }
});
const PreferenceSwitch_vue_vue_type_style_index_0_scoped_deb35952_lang = "";
const PreferenceSwitch_vue_vue_type_style_index_1_lang = "";
const PreferenceSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-deb35952"]]);
const Banner_vue_vue_type_style_index_0_lang = "";
const Banner_vue_vue_type_style_index_1_scoped_3390fd66_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-3390fd66"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "banner"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "http://vueconf.us/",
  target: "_blank"
}, [
  /* @__PURE__ */ createBaseVNode("span", null, "Upcoming: "),
  /* @__PURE__ */ createTextVNode("VueConf US - New Orleans - May 24-26")
], -1));
const _sfc_main = {
  __name: "Banner",
  setup(__props) {
    const open = ref(true);
    dismiss();
    function dismiss() {
      open.value = false;
      document.documentElement.classList.add("banner-dismissed");
    }
    return (_ctx, _cache) => {
      return open.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("button", { onClick: dismiss }, [
          createVNode(unref(VTIconPlus), { class: "close" })
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3390fd66"]]);
const RawTheme = {
  ...VPTheme,
  Layout() {
    return h(VPTheme.Layout, null, {
      banner: () => h(Banner),
      "sidebar-top": () => h(PreferenceSwitch)
      // 'aside-mid': () => h(SponsorsAside)
    });
  },
  enhanceApp({ app }) {
    app.provide("prefer-composition", preferComposition);
    app.provide("prefer-sfc", preferSFC);
    app.provide("filter-headers", filterHeadersByPreference);
  }
};
function resolveThemeExtends(theme) {
  if (theme.extends) {
    const base = resolveThemeExtends(theme.extends);
    return {
      ...base,
      ...theme,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme.enhanceApp)
          await theme.enhanceApp(ctx);
      }
    };
  }
  return theme;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = site.value.lang;
        document.documentElement.dir = site.value.dir;
      });
    });
    {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return __vitePreload(() => import(
      /*@vite-ignore*/
      pageFilePath
    ), true ? [] : void 0);
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
export {
  createApp
};
