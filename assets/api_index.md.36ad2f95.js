import { d as defineComponent, r as ref, b as computed, o as openBlock, c as createElementBlock, e as createBaseVNode, t as toDisplayString, u as unref, w as withDirectives, v as vModelText, F as Fragment, f as renderList, g as createCommentVNode, _ as _export_sfc, h as createVNode } from "./chunks/framework.4fa5a9ca.js";
import { u as useConfig } from "./chunks/config.c72e478d.js";
import "./chunks/utils.7be6accc.js";
const data = JSON.parse('[{"text":"全局API","anchor":"全局api","items":[{"text":"实例","link":"/api/kapi","headers":[{"text":"build","anchor":"build"},{"text":"kapi.version","anchor":"kapi-version"},{"text":"kapi.ui","anchor":"kapi-ui"},{"text":"kapi.Scene()","anchor":"kapi-scene"},{"text":"kapi.Controller()","anchor":"kapi-controller"},{"text":"kapi.Camera()","anchor":"kapi-camera"},{"text":"kapi.Marker()","anchor":"kapi-marker"},{"text":"kapi.Measure()","anchor":"kapi-measure"},{"text":"kapi.Draw()","anchor":"kapi-draw"},{"text":"kapi.Analyze()","anchor":"kapi-analyze"},{"text":"kapi.Animation()","anchor":"kapi-animation"},{"text":"kapi.Coord()","anchor":"kapi-coord"},{"text":"kapi.Data()","anchor":"kapi-data"},{"text":"kapi.Iot()","anchor":"kapi-iot"},{"text":"kapi.Layer()","anchor":"kapi-layer"},{"text":"kapi.Event()","anchor":"kapi-event"},{"text":"kapi.Tool()","anchor":"kapi-tool"}]},{"text":"常量","link":"/api/kapi-const","headers":[{"text":"EVENT","anchor":"event"},{"text":"MEASURE","anchor":"measure"},{"text":"POINT_TYPE","anchor":"point-type"},{"text":"WEATHER","anchor":"weather"}]}]},{"text":"常规API","anchor":"常规api","items":[{"text":"场景","link":"/api/scene","headers":[{"text":"new Scene(id, options)","anchor":"new-scene-id-options"},{"text":"ready()","anchor":"ready"},{"text":"getResolution()","anchor":"getresolution"},{"text":"setResolution()","anchor":"setresolution"},{"text":"startEntrance()","anchor":"startentrance"},{"text":"pauseEntrance()","anchor":"pauseentrance"},{"text":"stopEntrance()","anchor":"stopentrance"},{"text":"showGrid()","anchor":"showgrid"},{"text":"hideGrid()","anchor":"hidegrid"},{"text":"mute()","anchor":"mute"},{"text":"unmute()","anchor":"unmute"},{"text":"destroy()","anchor":"destroy"}]},{"text":"控制","link":"/api/controller","headers":[{"text":"new Controller()","anchor":"new-controller"},{"text":"enableLightShow()","anchor":"enablelightshow"},{"text":"disableLightShow()","anchor":"disablelightshow"},{"text":"enableBoxSide()","anchor":"enableboxside"},{"text":"disableBoxSide()","anchor":"disableboxside"},{"text":"enableMouseInput()","anchor":"enablemouseinput"},{"text":"disableMouseInput()","anchor":"disablemouseinput"},{"text":"showCompass()","anchor":"showcompass"},{"text":"hideCompass()","anchor":"hidecompass"},{"text":"setSkyColorParam()","anchor":"setskycolorparam"},{"text":"setWeatherType()","anchor":"setweathertype"},{"text":"setRealWorldTime()","anchor":"setrealworldtime"},{"text":"setDateTime()","anchor":"setdatetime"},{"text":"setTimeSimulate()","anchor":"settimesimulate"},{"text":"enableFPS()","anchor":"enablefps"},{"text":"disableFPS()","anchor":"disablefps"},{"text":"FPSEventListener","anchor":"fpseventlistener"}]},{"text":"相机","link":"/api/camera","headers":[{"text":"new Camera()","anchor":"new-camera"},{"text":"getCameraInfo()","anchor":"getcamerainfo"},{"text":"flyTo()","anchor":"flyto"},{"text":"addBookmark()","anchor":"addbookmark"},{"text":"setRotationStatus()","anchor":"setrotationstatus"},{"text":"playRoute()","anchor":"playroute"},{"text":"stopRoute()","anchor":"stoproute"},{"text":"playRouteFree()","anchor":"playroutefree"},{"text":"stopRouteFree()","anchor":"stoproutefree"},{"text":"startPatrol()","anchor":"startpatrol"},{"text":"stopPatrol()","anchor":"stoppatrol"},{"text":"setCameraHeight()","anchor":"setcameraheight"},{"text":"setCameraSpeed()","anchor":"setcameraspeed"}]},{"text":"标注","link":"/api/marker","headers":[{"text":"new Marker()","anchor":"new-marker"},{"text":"createMarker()","anchor":"createmarker"},{"text":"add()","anchor":"add"},{"text":"remove()","anchor":"remove"},{"text":"clear()","anchor":"clear"},{"text":"update()","anchor":"update"},{"text":"updateByAttributes()","anchor":"updatebyattributes"},{"text":"show()","anchor":"show"},{"text":"hide()","anchor":"hide"},{"text":"showAll()","anchor":"showall"},{"text":"hideAll()","anchor":"hideall"},{"text":"flyToMarker()","anchor":"flytomarker"},{"text":"addMarkerFocus()","anchor":"addmarkerfocus"},{"text":"removeMarkerFocus()","anchor":"removemarkerfocus"},{"text":"clear()","anchor":"clear"},{"text":"MarkerClickEventListener","anchor":"markerclickeventlistener"}]},{"text":"测量","link":"/api/measure","headers":[{"text":"new Measure()","anchor":"new-measure"},{"text":"get2DLength()","anchor":"get2dlength"},{"text":"get2DArea()","anchor":"get2darea"},{"text":"get3DLength()","anchor":"get3dlength"},{"text":"get3DArea()","anchor":"get3darea"},{"text":"getHeight()","anchor":"getheight"},{"text":"clear()","anchor":"clear"}]},{"text":"绘制","link":"/api/draw","headers":[{"text":"new Draw()","anchor":"new-draw"},{"text":"openDrawPoint()","anchor":"opendrawpoint"},{"text":"drawPoint()","anchor":"drawpoint"},{"text":"showPoint()","anchor":"showpoint"},{"text":"hidePoint()","anchor":"hidepoint"},{"text":"deletePoint()","anchor":"deletepoint"},{"text":"getPointList()","anchor":"getpointlist"},{"text":"closeDrawPoint()","anchor":"closedrawpoint"},{"text":"drawPath()","anchor":"drawpath"},{"text":"clearPath()","anchor":"clearpath"},{"text":"drawDecal()","anchor":"drawdecal"},{"text":"removeDecal()","anchor":"removedecal"},{"text":"drawContour()","anchor":"drawcontour"},{"text":"removeContour()","anchor":"removecontour"},{"text":"drawCircularContour()","anchor":"drawcircularcontour"},{"text":"removeCircularContour()","anchor":"removecircularcontour"},{"text":"drawLightFlow()","anchor":"drawlightflow"},{"text":"removeLightFlow()","anchor":"removelightflow"},{"text":"closeDrawLightFlow()","anchor":"closedrawlightflow"},{"text":"getAllByWindow()","anchor":"getallbywindow"},{"text":"LightFlowEventListener","anchor":"lightfloweventlistener"}]},{"text":"坐标","link":"/api/coord","headers":[{"text":"new Coord()","anchor":"new-coord"},{"text":"ecefToGeographic()","anchor":"eceftogeographic"},{"text":"ecefToEngine()","anchor":"eceftoengine"},{"text":"ecefToProjection()","anchor":"eceftoprojection"},{"text":"geographicToECEF()","anchor":"geographictoecef"},{"text":"geographicToEngine()","anchor":"geographictoengine"},{"text":"geographicToProjection()","anchor":"geographictoprojection"},{"text":"engineToGeographic()","anchor":"enginetogeographic"},{"text":"engineToECEF()","anchor":"enginetoecef"},{"text":"engineToProjection()","anchor":"enginetoprojection"},{"text":"projectionToECEF()","anchor":"projectiontoecef"},{"text":"projectionToGeographic()","anchor":"projectiontogeographic"},{"text":"projectionToEngine()","anchor":"projectiontoengine"}]},{"text":"事件","link":"/api/event","headers":[{"text":"new Event()","anchor":"new-event"},{"text":"addEventListener()","anchor":"addeventlistener"},{"text":"removeEventListener()","anchor":"removeeventlistener"}]},{"text":"UI","link":"/api/ui","headers":[{"text":"showFullscreen()","anchor":"showfullscreen"},{"text":"hideFullscreen()","anchor":"hidefullscreen"},{"text":"showNetStatus()","anchor":"shownetstatus"},{"text":"hideNetStatus()","anchor":"hidenetstatus"}]}]},{"text":"高级API","anchor":"高级api","items":[{"text":"分析","link":"/api/analyze","headers":[{"text":"new Analyze()","anchor":"new-analyze"},{"text":"addHeatmap2D()","anchor":"addheatmap2d"},{"text":"removeHeatmap2D()","anchor":"removeheatmap2d"},{"text":"addMigrateMap()","anchor":"addmigratemap"},{"text":"removeMigrateMap()","anchor":"removemigratemap"},{"text":"addHighLight()","anchor":"addhighlight"},{"text":"removeHighLight()","anchor":"removehighlight"},{"text":"addWaterElectricityAlarm()","anchor":"addwaterelectricityalarm"},{"text":"removeWaterElectricityAlarm()","anchor":"removewaterelectricityalarm"},{"text":"openBuildingDismantling()","anchor":"openbuildingdismantling"},{"text":"closeBuildingDismantling()","anchor":"closebuildingdismantling"},{"text":"openSectioning()","anchor":"opensectioning"},{"text":"closeSectioning()","anchor":"closesectioning"},{"text":"addVisualField2D()","anchor":"addvisualfield2d"},{"text":"removeVisualField2D()","anchor":"removevisualfield2d"},{"text":"addStrategicMap()","anchor":"addstrategicmap"},{"text":"removeStrategicMap()","anchor":"removestrategicmap"},{"text":"addRadiationCircle()","anchor":"addradiationcircle"},{"text":"removeRadiationCircle()","anchor":"removeradiationcircle"},{"text":"toggleViewFloor()","anchor":"toggleviewfloor"}]},{"text":"动画","link":"/api/animation","headers":[{"text":"new Animation()","anchor":"new-animation"},{"text":"openLiftAnimation()","anchor":"openliftanimation"},{"text":"closeLiftAnimation()","anchor":"closeliftanimation"}]},{"text":"数据","link":"/api/data","headers":[{"text":"new Data()","anchor":"new-data"},{"text":"parseGeoJSON()","anchor":"parsegeojson"}]},{"text":"图层","link":"/api/layer","headers":[{"text":"new Layer()","anchor":"new-layer"},{"text":"add3DTiles()","anchor":"add3dtiles"},{"text":"removeLayer()","anchor":"removelayer"},{"text":"showLayer()","anchor":"showlayer"},{"text":"hideLayer()","anchor":"hidelayer"},{"text":"getAllLayers()","anchor":"getalllayers"}]},{"text":"工具","link":"/api/tool","headers":[{"text":"new Tool()","anchor":"new-tool"},{"text":"openGetPoint()","anchor":"opengetpoint"},{"text":"closeGetPoint()","anchor":"closegetpoint"},{"text":"GetPointListener","anchor":"getpointlistener"}]}]},{"text":"定制API","anchor":"定制api","items":[{"text":"物联网","link":"/api/iot","headers":[{"text":"new Iot()","anchor":"new-iot"},{"text":"openById()","anchor":"openbyid"},{"text":"setStatusById()","anchor":"setstatusbyid"},{"text":"closeById()","anchor":"closebyid"},{"text":"openByType()","anchor":"openbytype"},{"text":"setStatusByType()","anchor":"setstatusbytype"},{"text":"closeByType()","anchor":"closebytype"}]}]}]');
const _hoisted_1 = { id: "api-index" };
const _hoisted_2 = { class: "header" };
const _hoisted_3 = { class: "api-filter" };
const _hoisted_4 = { for: "api-filter" };
const _hoisted_5 = ["placeholder"];
const _hoisted_6 = ["id"];
const _hoisted_7 = { class: "api-groups" };
const _hoisted_8 = ["href"];
const _hoisted_9 = {
  key: 0,
  class: "no-match"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ApiIndex",
  setup(__props) {
    const { config } = useConfig();
    const query = ref("");
    const normalize = (s) => s.toLowerCase().replace(/-/g, " ");
    const filtered = computed(() => {
      const q = normalize(query.value);
      const matches = (text) => normalize(text).includes(q);
      return data.map((section) => {
        if (matches(section.text)) {
          return section;
        }
        const matchedGroups = section.items.map((item) => {
          if (matches(item.text)) {
            return item;
          }
          if (q.includes("ssr") && item.text.startsWith("Server")) {
            return item;
          }
          const matchedHeaders = item.headers.filter(
            ({ text, anchor }) => matches(text) || matches(anchor)
          );
          return matchedHeaders.length ? { text: item.text, link: item.link, headers: matchedHeaders } : null;
        }).filter((i) => i);
        return matchedGroups.length ? { text: section.text, items: matchedGroups } : null;
      }).filter((i) => i);
    });
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h1", null, toDisplayString(((_a = unref(config).i18n) == null ? void 0 : _a.apiReference) ?? "API Reference"), 1),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("label", _hoisted_4, toDisplayString(((_b = unref(config).i18n) == null ? void 0 : _b.filter) ?? "Filter"), 1),
            withDirectives(createBaseVNode("input", {
              type: "search",
              placeholder: ((_c = unref(config).i18n) == null ? void 0 : _c.enterKeyword) ?? "Enter keyword",
              id: "api-filter",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event)
            }, null, 8, _hoisted_5), [
              [vModelText, query.value]
            ])
          ])
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(filtered.value, (section) => {
          return openBlock(), createElementBlock("div", {
            key: section.text,
            class: "api-section"
          }, [
            createBaseVNode("h2", {
              id: section.anchor
            }, toDisplayString(section.text), 9, _hoisted_6),
            createBaseVNode("div", _hoisted_7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(section.items, (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.text,
                  class: "api-group"
                }, [
                  createBaseVNode("h3", null, toDisplayString(item.text), 1),
                  createBaseVNode("ul", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.headers, (h) => {
                      return openBlock(), createElementBlock("li", {
                        key: h.anchor
                      }, [
                        createBaseVNode("a", {
                          href: item.link + ".html#" + h.anchor
                        }, toDisplayString(h.text), 9, _hoisted_8)
                      ]);
                    }), 128))
                  ])
                ]);
              }), 128))
            ])
          ]);
        }), 128)),
        !filtered.value.length ? (openBlock(), createElementBlock("div", _hoisted_9, ' No API matching "' + toDisplayString(query.value) + '" found. ', 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
const ApiIndex_vue_vue_type_style_index_0_scoped_23037ca4_lang = "";
const ApiIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-23037ca4"]]);
const __pageData = JSON.parse('{"title":"API参考文档","description":"","frontmatter":{"title":"API参考文档","sidebar":false,"page":true,"footer":false},"headers":[],"relativePath":"api/index.md","filePath":"api/index.md"}');
const __default__ = { name: "api/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(ApiIndex)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
