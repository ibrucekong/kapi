import { d as defineComponent, l as useData, b as computed, m as provide, n as h, q as inject } from "./framework.fabdbab1.js";
import { n as normalizeLink } from "./utils.78995eb0.js";
const configSymbol = Symbol("config");
function withConfigProvider(App) {
  return defineComponent({
    name: "VPConfigProvider",
    setup(_, { slots }) {
      const { theme } = useData();
      const config = computed(() => resolveConfig(theme.value));
      provide(configSymbol, config);
      return () => h(App, null, slots);
    }
  });
}
function useConfig() {
  return {
    config: inject(configSymbol)
  };
}
function resolveConfig(config) {
  var _a;
  return Object.assign(
    {
      appearance: true
    },
    config,
    {
      nav: (_a = config.nav) == null ? void 0 : _a.map(normalizeMenuItem),
      sidebar: config.sidebar && normalizeSideBar(config.sidebar)
    }
  );
}
function normalizeMenuItem(item) {
  if ("link" in item) {
    return Object.assign({}, item, {
      link: normalizeLink(item.link)
    });
  } else {
    return Object.assign({}, item, { items: item.items.map(normalizeMenuItem) });
  }
}
function normalizeSideBar(sidebar) {
  if (Array.isArray(sidebar)) {
    return sidebar.map(normalizeMenuItem);
  } else {
    const ret = {};
    for (const key in sidebar) {
      ret[key] = normalizeSideBar(sidebar[key]);
    }
    return ret;
  }
}
export {
  useConfig as u,
  withConfigProvider as w
};
