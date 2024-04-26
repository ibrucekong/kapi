import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./chunks/framework.4fa5a9ca.js";
const __pageData = JSON.parse('{"title":"绘制模块","description":"","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"功能使用","slug":"功能使用","link":"#功能使用","children":[]}],"relativePath":"guide/tutorial/draw.md","filePath":"guide/tutorial/draw.md"}');
const _sfc_main = { name: "guide/tutorial/draw.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="绘制模块" tabindex="-1">绘制模块 <a class="header-anchor" href="#绘制模块" aria-label="Permalink to &quot;绘制模块&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>绘制模块主要是提供绘制点、线、贴花，以及这些实例的显隐功能，比如绘制点等，具体功能使用可以参考<a href="/api/draw.html">Draw API</a>。</p><h2 id="功能使用" tabindex="-1">功能使用 <a class="header-anchor" href="#功能使用" aria-label="Permalink to &quot;功能使用&quot;">​</a></h2><p>与在<a href="/guide/tutorial/scene.html">Scene</a>中提到的<code>也是区别于其他功能模块最重要的方法</code>，就是除了Scene类（还有<a href="/guide/tutorial/ui.html">ui</a>），其他的类库在使用时，需要先初始化示例，比如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 授权码</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> kapi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> KAPI</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">build</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Your Auth Token</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 加载云流场景服务</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scene </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> kapi</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scene</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">kapi-container</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Your Service URL</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 等待场景加载好</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> readyState </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ready</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> draw </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> kapi</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Draw</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(draw)</span></span></code></pre></div><p>实例化后的绘制模块，就可以执行绘制的功能，比如<code>绘制点</code>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> draw </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> kapi</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Draw</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 开启绘制点</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> status </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> draw</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">openDrawPoint</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 绘制点</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> draw</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">drawPoint</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 打印绘制结果</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(response)</span></span></code></pre></div><p>同样，可以执行<code>显示点</code>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> draw </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> kapi</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Draw</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 根据点的id控制点的显隐</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> draw</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showPoint</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(response)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>不同类库的功能在不断丰富完善</p></div>', 11);
const _hoisted_12 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_12);
}
const draw = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  draw as default
};