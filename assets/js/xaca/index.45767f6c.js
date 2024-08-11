// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
    /* eslint-disable no-undef */
    var globalObject =
      typeof globalThis !== 'undefined'
        ? globalThis
        : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
        ? window
        : typeof global !== 'undefined'
        ? global
        : {};
    /* eslint-enable no-undef */
  
    // Save the require from previous bundle to this closure if any
    var previousRequire =
      typeof globalObject[parcelRequireName] === 'function' &&
      globalObject[parcelRequireName];
  
    var cache = previousRequire.cache || {};
    // Do not use `require` to prevent Webpack from trying to bundle this call
    var nodeRequire =
      typeof module !== 'undefined' &&
      typeof module.require === 'function' &&
      module.require.bind(module);
  
    function newRequire(name, jumped) {
      if (!cache[name]) {
        if (!modules[name]) {
          // if we cannot find the module within our internal map or
          // cache jump to the current global require ie. the last bundle
          // that was added to the page.
          var currentRequire =
            typeof globalObject[parcelRequireName] === 'function' &&
            globalObject[parcelRequireName];
          if (!jumped && currentRequire) {
            return currentRequire(name, true);
          }
  
          // If there are other bundles on this page the require from the
          // previous one is saved to 'previousRequire'. Repeat this as
          // many times as there are bundles until the module is found or
          // we exhaust the require chain.
          if (previousRequire) {
            return previousRequire(name, true);
          }
  
          // Try the node require function if it exists.
          if (nodeRequire && typeof name === 'string') {
            return nodeRequire(name);
          }
  
          var err = new Error("Cannot find module '" + name + "'");
          err.code = 'MODULE_NOT_FOUND';
          throw err;
        }
  
        localRequire.resolve = resolve;
        localRequire.cache = {};
  
        var module = (cache[name] = new newRequire.Module(name));
  
        modules[name][0].call(
          module.exports,
          localRequire,
          module,
          module.exports,
          this
        );
      }
  
      return cache[name].exports;
  
      function localRequire(x) {
        var res = localRequire.resolve(x);
        return res === false ? {} : newRequire(res);
      }
  
      function resolve(x) {
        var id = modules[name][1][x];
        return id != null ? id : x;
      }
    }
  
    function Module(moduleName) {
      this.id = moduleName;
      this.bundle = newRequire;
      this.exports = {};
    }
  
    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function (id, exports) {
      modules[id] = [
        function (require, module) {
          module.exports = exports;
        },
        {},
      ];
    };
  
    Object.defineProperty(newRequire, 'root', {
      get: function () {
        return globalObject[parcelRequireName];
      },
    });
  
    globalObject[parcelRequireName] = newRequire;
  
    for (var i = 0; i < entry.length; i++) {
      newRequire(entry[i]);
    }
  
    if (mainEntry) {
      // Expose entry point to Node, AMD or browser globals
      // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
      var mainExports = newRequire(mainEntry);
  
      // CommonJS
      if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = mainExports;
  
        // RequireJS
      } else if (typeof define === 'function' && define.amd) {
        define(function () {
          return mainExports;
        });
  
        // <script>
      } else if (globalName) {
        this[globalName] = mainExports;
      }
    }
  })({"3Z3vu":[function(require,module,exports) {
  var global = arguments[3];
  var HMR_HOST = null;
  var HMR_PORT = null;
  var HMR_SECURE = false;
  var HMR_ENV_HASH = "d6ea1d42532a7575";
  var HMR_USE_SSE = false;
  module.bundle.HMR_BUNDLE_ID = "76a6abdd8e127e5a";
  "use strict";
  /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
  import type {
    HMRAsset,
    HMRMessage,
  } from '@parcel/reporter-dev-server/src/HMRServer.js';
  interface ParcelRequire {
    (string): mixed;
    cache: {|[string]: ParcelModule|};
    hotData: {|[string]: mixed|};
    Module: any;
    parent: ?ParcelRequire;
    isParcelRequire: true;
    modules: {|[string]: [Function, {|[string]: string|}]|};
    HMR_BUNDLE_ID: string;
    root: ParcelRequire;
  }
  interface ParcelModule {
    hot: {|
      data: mixed,
      accept(cb: (Function) => void): void,
      dispose(cb: (mixed) => void): void,
      // accept(deps: Array<string> | string, cb: (Function) => void): void,
      // decline(): void,
      _acceptCallbacks: Array<(Function) => void>,
      _disposeCallbacks: Array<(mixed) => void>,
    |};
  }
  interface ExtensionContext {
    runtime: {|
      reload(): void,
      getURL(url: string): string;
      getManifest(): {manifest_version: number, ...};
    |};
  }
  declare var module: {bundle: ParcelRequire, ...};
  declare var HMR_HOST: string;
  declare var HMR_PORT: string;
  declare var HMR_ENV_HASH: string;
  declare var HMR_SECURE: boolean;
  declare var HMR_USE_SSE: boolean;
  declare var chrome: ExtensionContext;
  declare var browser: ExtensionContext;
  declare var __parcel__import__: (string) => Promise<void>;
  declare var __parcel__importScripts__: (string) => Promise<void>;
  declare var globalThis: typeof self;
  declare var ServiceWorkerGlobalScope: Object;
  */ var OVERLAY_ID = "__parcel__error__overlay__";
  var OldModule = module.bundle.Module;
  function Module(moduleName) {
      OldModule.call(this, moduleName);
      this.hot = {
          data: module.bundle.hotData[moduleName],
          _acceptCallbacks: [],
          _disposeCallbacks: [],
          accept: function(fn) {
              this._acceptCallbacks.push(fn || function() {});
          },
          dispose: function(fn) {
              this._disposeCallbacks.push(fn);
          }
      };
      module.bundle.hotData[moduleName] = undefined;
  }
  module.bundle.Module = Module;
  module.bundle.hotData = {};
  var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
  function getHostname() {
      return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
  }
  function getPort() {
      return HMR_PORT || location.port;
  }
  // eslint-disable-next-line no-redeclare
  var parent = module.bundle.parent;
  if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
      var hostname = getHostname();
      var port = getPort();
      var protocol = HMR_SECURE || location.protocol == "https:" && ![
          "localhost",
          "127.0.0.1",
          "0.0.0.0"
      ].includes(hostname) ? "wss" : "ws";
      var ws;
      if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
      else try {
          ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
      } catch (err) {
          if (err.message) console.error(err.message);
          ws = {};
      }
      // Web extension context
      var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
      // Safari doesn't support sourceURL in error stacks.
      // eval may also be disabled via CSP, so do a quick check.
      var supportsSourceURL = false;
      try {
          (0, eval)('throw new Error("test"); //# sourceURL=test.js');
      } catch (err) {
          supportsSourceURL = err.stack.includes("test.js");
      }
      // $FlowFixMe
      ws.onmessage = async function(event /*: {data: string, ...} */ ) {
          checkedAssets = {} /*: {|[string]: boolean|} */ ;
          assetsToAccept = [];
          assetsToDispose = [];
          var data /*: HMRMessage */  = JSON.parse(event.data);
          if (data.type === "update") {
              // Remove error overlay if there is one
              if (typeof document !== "undefined") removeErrorOverlay();
              let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
              // Handle HMR Update
              let handled = assets.every((asset)=>{
                  return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
              });
              if (handled) {
                  console.clear();
                  // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                  if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                  await hmrApplyUpdates(assets);
                  // Dispose all old assets.
                  let processedAssets = {} /*: {|[string]: boolean|} */ ;
                  for(let i = 0; i < assetsToDispose.length; i++){
                      let id = assetsToDispose[i][1];
                      if (!processedAssets[id]) {
                          hmrDispose(assetsToDispose[i][0], id);
                          processedAssets[id] = true;
                      }
                  }
                  // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                  processedAssets = {};
                  for(let i = 0; i < assetsToAccept.length; i++){
                      let id = assetsToAccept[i][1];
                      if (!processedAssets[id]) {
                          hmrAccept(assetsToAccept[i][0], id);
                          processedAssets[id] = true;
                      }
                  }
              } else fullReload();
          }
          if (data.type === "error") {
              // Log parcel errors to console
              for (let ansiDiagnostic of data.diagnostics.ansi){
                  let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                  console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
              }
              if (typeof document !== "undefined") {
                  // Render the fancy html overlay
                  removeErrorOverlay();
                  var overlay = createErrorOverlay(data.diagnostics.html);
                  // $FlowFixMe
                  document.body.appendChild(overlay);
              }
          }
      };
      if (ws instanceof WebSocket) {
          ws.onerror = function(e) {
              if (e.message) console.error(e.message);
          };
          ws.onclose = function() {
              console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
          };
      }
  }
  function removeErrorOverlay() {
      var overlay = document.getElementById(OVERLAY_ID);
      if (overlay) {
          overlay.remove();
          console.log("[parcel] \u2728 Error resolved");
      }
  }
  function createErrorOverlay(diagnostics) {
      var overlay = document.createElement("div");
      overlay.id = OVERLAY_ID;
      let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
      for (let diagnostic of diagnostics){
          let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
              return `${p}
  <a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
  ${frame.code}`;
          }, "") : diagnostic.stack;
          errorHTML += `
        <div>
          <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
            \u{1F6A8} ${diagnostic.message}
          </div>
          <pre>${stack}</pre>
          <div>
            ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
          </div>
          ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
        </div>
      `;
      }
      errorHTML += "</div>";
      overlay.innerHTML = errorHTML;
      return overlay;
  }
  function fullReload() {
      if ("reload" in location) location.reload();
      else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
  }
  function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
      var modules = bundle.modules;
      if (!modules) return [];
      var parents = [];
      var k, d, dep;
      for(k in modules)for(d in modules[k][1]){
          dep = modules[k][1][d];
          if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
              bundle,
              k
          ]);
      }
      if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
      return parents;
  }
  function updateLink(link) {
      var href = link.getAttribute("href");
      if (!href) return;
      var newLink = link.cloneNode();
      newLink.onload = function() {
          if (link.parentNode !== null) // $FlowFixMe
          link.parentNode.removeChild(link);
      };
      newLink.setAttribute("href", // $FlowFixMe
      href.split("?")[0] + "?" + Date.now());
      // $FlowFixMe
      link.parentNode.insertBefore(newLink, link.nextSibling);
  }
  var cssTimeout = null;
  function reloadCSS() {
      if (cssTimeout) return;
      cssTimeout = setTimeout(function() {
          var links = document.querySelectorAll('link[rel="stylesheet"]');
          for(var i = 0; i < links.length; i++){
              // $FlowFixMe[incompatible-type]
              var href /*: string */  = links[i].getAttribute("href");
              var hostname = getHostname();
              var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
              var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
              if (!absolute) updateLink(links[i]);
          }
          cssTimeout = null;
      }, 50);
  }
  function hmrDownload(asset) {
      if (asset.type === "js") {
          if (typeof document !== "undefined") {
              let script = document.createElement("script");
              script.src = asset.url + "?t=" + Date.now();
              if (asset.outputFormat === "esmodule") script.type = "module";
              return new Promise((resolve, reject)=>{
                  var _document$head;
                  script.onload = ()=>resolve(script);
                  script.onerror = reject;
                  (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
              });
          } else if (typeof importScripts === "function") {
              // Worker scripts
              if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
              else return new Promise((resolve, reject)=>{
                  try {
                      importScripts(asset.url + "?t=" + Date.now());
                      resolve();
                  } catch (err) {
                      reject(err);
                  }
              });
          }
      }
  }
  async function hmrApplyUpdates(assets) {
      global.parcelHotUpdate = Object.create(null);
      let scriptsToRemove;
      try {
          // If sourceURL comments aren't supported in eval, we need to load
          // the update from the dev server over HTTP so that stack traces
          // are correct in errors/logs. This is much slower than eval, so
          // we only do it if needed (currently just Safari).
          // https://bugs.webkit.org/show_bug.cgi?id=137297
          // This path is also taken if a CSP disallows eval.
          if (!supportsSourceURL) {
              let promises = assets.map((asset)=>{
                  var _hmrDownload;
                  return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                      // Web extension fix
                      if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                          extCtx.runtime.reload();
                          return;
                      }
                      throw err;
                  });
              });
              scriptsToRemove = await Promise.all(promises);
          }
          assets.forEach(function(asset) {
              hmrApply(module.bundle.root, asset);
          });
      } finally{
          delete global.parcelHotUpdate;
          if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
              if (script) {
                  var _document$head2;
                  (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
              }
          });
      }
  }
  function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
      var modules = bundle.modules;
      if (!modules) return;
      if (asset.type === "css") reloadCSS();
      else if (asset.type === "js") {
          let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
          if (deps) {
              if (modules[asset.id]) {
                  // Remove dependencies that are removed and will become orphaned.
                  // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                  let oldDeps = modules[asset.id][1];
                  for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                      let id = oldDeps[dep];
                      let parents = getParents(module.bundle.root, id);
                      if (parents.length === 1) hmrDelete(module.bundle.root, id);
                  }
              }
              if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
              // support for source maps is better with eval.
              (0, eval)(asset.output);
              // $FlowFixMe
              let fn = global.parcelHotUpdate[asset.id];
              modules[asset.id] = [
                  fn,
                  deps
              ];
          } else if (bundle.parent) hmrApply(bundle.parent, asset);
      }
  }
  function hmrDelete(bundle, id) {
      let modules = bundle.modules;
      if (!modules) return;
      if (modules[id]) {
          // Collect dependencies that will become orphaned when this module is deleted.
          let deps = modules[id][1];
          let orphans = [];
          for(let dep in deps){
              let parents = getParents(module.bundle.root, deps[dep]);
              if (parents.length === 1) orphans.push(deps[dep]);
          }
          // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
          delete modules[id];
          delete bundle.cache[id];
          // Now delete the orphans.
          orphans.forEach((id)=>{
              hmrDelete(module.bundle.root, id);
          });
      } else if (bundle.parent) hmrDelete(bundle.parent, id);
  }
  function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
      if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
      // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
      let parents = getParents(module.bundle.root, id);
      let accepted = false;
      while(parents.length > 0){
          let v = parents.shift();
          let a = hmrAcceptCheckOne(v[0], v[1], null);
          if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
          accepted = true;
          else {
              // Otherwise, queue the parents in the next level upward.
              let p = getParents(module.bundle.root, v[1]);
              if (p.length === 0) {
                  // If there are no parents, then we've reached an entry without accepting. Reload.
                  accepted = false;
                  break;
              }
              parents.push(...p);
          }
      }
      return accepted;
  }
  function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
      var modules = bundle.modules;
      if (!modules) return;
      if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
          // If we reached the root bundle without finding where the asset should go,
          // there's nothing to do. Mark as "accepted" so we don't reload the page.
          if (!bundle.parent) return true;
          return hmrAcceptCheck(bundle.parent, id, depsByBundle);
      }
      if (checkedAssets[id]) return true;
      checkedAssets[id] = true;
      var cached = bundle.cache[id];
      assetsToDispose.push([
          bundle,
          id
      ]);
      if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
          assetsToAccept.push([
              bundle,
              id
          ]);
          return true;
      }
  }
  function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
      var cached = bundle.cache[id];
      bundle.hotData[id] = {};
      if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
      if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
          cb(bundle.hotData[id]);
      });
      delete bundle.cache[id];
  }
  function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
      // Execute the module.
      bundle(id);
      // Run the accept callbacks in the new version of the module.
      var cached = bundle.cache[id];
      if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
          var assetsToAlsoAccept = cb(function() {
              return getParents(module.bundle.root, id);
          });
          if (assetsToAlsoAccept && assetsToAccept.length) {
              assetsToAlsoAccept.forEach(function(a) {
                  hmrDispose(a[0], a[1]);
              });
              // $FlowFixMe[method-unbinding]
              assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
          }
      });
  }
  
  },{}],"6Ai1m":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  parcelHelpers.export(exports, "control_idioma", ()=>control_idioma);
  parcelHelpers.export(exports, "cambiarIdioma", ()=>cambiarIdioma);
  parcelHelpers.export(exports, "isSpanish", ()=>isSpanish);
  var _nodePolyglot = require("node-polyglot");
  var _nodePolyglotDefault = parcelHelpers.interopDefault(_nodePolyglot);
  // import your language objects
  var _enJs = require("./locale/en/en.js");
  var _enJsDefault = parcelHelpers.interopDefault(_enJs);
  var _esJs = require("./locale/es/es.js");
  var _esJsDefault = parcelHelpers.interopDefault(_esJs);
  //https://codesandbox.io/s/q8jj39jmp4?file=/src/index.js:1754-1779
  let polyglot;
  let btn_es, btn_en;
  let idioma;
  window.onload = function() {
      btn_en = document.getElementById("btn_en");
      btn_es = document.getElementById("btn_es");
      control_idioma();
      btn_en.addEventListener("click", actualizarIdioma);
      btn_es.addEventListener("click", actualizarIdioma);
      idioma = localStorage.getItem("idioma");
      if(idioma)
      {
        cambiarIdioma(idioma);
      }
  };
  function actualizarIdioma(event) {
      //console.log(event.target.attributes[1].nodeValue);
      cambiarIdioma(event.target.attributes[1].nodeValue);
  }
  function control_idioma() {
      polyglot = new (0, _nodePolyglotDefault.default)();
      polyglot.extend(getLocale());
  }
  function cambiarIdioma(locale) {
      idioma = locale;
      localStorage.setItem("idioma",idioma);
      if (locale == "en") {
          polyglot.locale("en");
          polyglot.extend((0, _enJsDefault.default));
      }
      if (locale == "es") {
          polyglot.locale("es");
          polyglot.extend((0, _esJsDefault.default));
      }
      cargarTextos();
  }
  function isSpanish() {
      // Define the users location with the object the browser provides for you
      const userLanguage = navigator.language;
      // Stores the other language you support
      const spanish = "es";
      return userLanguage.includes(spanish);
  }
  // Locale function - gets the users language preferences
  function getLocale() {
      // Define the language object you'll be returning
      let languageObj;
      if (isSpanish()) languageObj = (0, _esJsDefault.default);
      else languageObj = (0, _enJsDefault.default);
      return languageObj;
  }
  /* Reemplaza varios elementos con la misma clase, se usa por ejemplo para reemplazar botones */
  function cambiarClase(obj){
    var btns = document.querySelectorAll(obj.class);
    if(btns.length)
    {
        for(var i in btns)
        {
            if(!isNaN(Number(i)))
            {
                if(obj.placeholder)
                {
                    btns[i].placeholder = obj.txt;
                }
                else
                {
                    btns[i].innerHTML = obj.txt;
                }
            }
        }
    }
  }
  function cargarTextos() {
      try {
          /* Menu */
          
            cambiarClase({
                class:".tp_menu_1",
                txt:polyglot.t("tp_menu_1")
            });
            cambiarClase({
                class:".tp_menu_2",
                txt:polyglot.t("tp_menu_2")
            });
            cambiarClase({
                class:".tp_menu_3",
                txt:polyglot.t("tp_menu_3")
            });
            cambiarClase({
                class:".tp_menu_4",
                txt:polyglot.t("tp_menu_4")
            });

          
          /* Botones */
            cambiarClase({
                class:".tp-btn",
                txt:polyglot.t("tp-btn")
            });
            cambiarClase({
            class:".tp-btn-send",
            txt:polyglot.t("tp-btn")
            });
          
          /* Home */
          if(document.getElementById("tp-bn-h4-1"))
          {
            document.getElementById("tp-bn-h4-1").innerHTML = polyglot.t("tp-bn-h4-1");
            document.getElementById("tp-bn-h4-2").innerHTML = polyglot.t("tp-bn-h4-2");
            document.getElementById("tp-bn-h4-3").innerHTML = polyglot.t("tp-bn-h4-3");
            document.getElementById("tp-bn-p-1").innerHTML = polyglot.t("tp-bn-p-2");
            document.getElementById("tp-bn-p-3").innerHTML = polyglot.t("tp-bn-p-3");
            document.getElementById("tp-form-1").innerHTML = polyglot.t("tp-form-1");
            document.getElementById("tp-txt-form").innerHTML = polyglot.t("tp-txt-form");
            document.getElementById("tp-service-hd-title").innerHTML = polyglot.t("tp-service-hd-title");
            document.getElementById("tp-service-hd-span").innerHTML = polyglot.t("tp-service-hd-span");
            document.getElementById("tp-service-hd-title-1").innerHTML = polyglot.t("tp-service-hd-title-1");
            document.getElementById("tp-service-hd-title-2").innerHTML = polyglot.t("tp-service-hd-title-2");
            document.getElementById("tp-service-hd-title-3").innerHTML = polyglot.t("tp-service-hd-title-3");
            document.getElementById("tp-hd-more-info-title").innerHTML = polyglot.t("tp-hd-more-info-title");
            document.getElementById("tp-hd-more-info-p").innerHTML = polyglot.t("tp-hd-more-info-p");
            document.getElementById("tp-conf-title").innerHTML = polyglot.t("tp-conf-title");
            document.getElementById("tp-btn-contact-bn").innerHTML = polyglot.t("tp-btn-contact-bn");
        }
        
        /* Formulario de contacto */
        if(document.getElementById("tp-callback-title"))
        {
            document.getElementById("tp-callback-title").innerHTML = polyglot.t("tp-callback-title");
            document.getElementById("tp-callback-p").innerHTML = polyglot.t("tp-callback-p");
        }

        /* About */
        if(document.getElementById("tp-more-info-title"))
        {
            document.getElementById("tp-more-info-title").innerHTML = polyglot.t("tp-more-info-title");
            document.getElementById("tp-more-info-p").innerHTML = polyglot.t("tp-more-info-p");
            document.getElementById("tp-team-section-heading-title").innerHTML = polyglot.t("tp-team-section-heading-title");
            document.getElementById("tp-team-section-heading-span").innerHTML = polyglot.t("tp-team-section-heading-span");
            document.getElementById("tp-team-item-h4-1").innerHTML = polyglot.t("tp-team-item-h4-1");
            document.getElementById("tp-team-item-span-1").innerHTML = polyglot.t("tp-team-item-span-1");
            document.getElementById("tp-team-item-p-1").innerHTML = polyglot.t("tp-team-item-p-1");
            document.getElementById("tp-team-item-h4-2").innerHTML = polyglot.t("tp-team-item-h4-2");
            document.getElementById("tp-team-item-span-2").innerHTML = polyglot.t("tp-team-item-span-2");
            document.getElementById("tp-team-item-p-2").innerHTML = polyglot.t("tp-team-item-p-2");
            document.getElementById("tp-team-item-h4-3").innerHTML = polyglot.t("tp-team-item-h4-3");
            document.getElementById("tp-team-item-span-3").innerHTML = polyglot.t("tp-team-item-span-3");
            document.getElementById("tp-team-item-p-3").innerHTML = polyglot.t("tp-team-item-p-3");
        }
        /* Services */
        if(document.getElementById("tp-single-services-title-h1"))
        { 
            document.getElementById("tp-single-services-title-h1").innerHTML = polyglot.t("tp-single-services-title-h1");
            /*document.getElementById("tp-single-services-title-1").innerHTML = polyglot.t("tp-single-services-title-1");
            document.getElementById("tp-single-services-title-2").innerHTML = polyglot.t("tp-single-services-title-2");
            document.getElementById("tp-single-services-title-3").innerHTML = polyglot.t("tp-single-services-title-3");*/

            cambiarClase({
                class:".tp-single-services-title-1",
                txt:polyglot.t("tp-single-services-title-1")
            });
            cambiarClase({
                class:".tp-single-services-title-2",
                txt:polyglot.t("tp-single-services-title-2")
            });
            cambiarClase({
                class:".tp-single-services-title-3",
                txt:polyglot.t("tp-single-services-title-3")
            });

            document.getElementById("tp-single-services-tab-1-li-1").innerHTML = polyglot.t("tp-single-services-tab-1-li-1");
            document.getElementById("tp-single-services-tab-1-li-2").innerHTML = polyglot.t("tp-single-services-tab-1-li-2");
            document.getElementById("tp-single-services-tab-1-li-3").innerHTML = polyglot.t("tp-single-services-tab-1-li-3");
            document.getElementById("tp-single-services-tab-1-li-4").innerHTML = polyglot.t("tp-single-services-tab-1-li-4");
            document.getElementById("tp-single-services-tab-1-li-5").innerHTML = polyglot.t("tp-single-services-tab-1-li-5");
            document.getElementById("tp-single-services-tab-1-li-6").innerHTML = polyglot.t("tp-single-services-tab-1-li-6");
            document.getElementById("tp-single-services-tab-1-li-7").innerHTML = polyglot.t("tp-single-services-tab-1-li-7");
            document.getElementById("tp-single-services-tab-2-li-1").innerHTML = polyglot.t("tp-single-services-tab-2-li-1");
            document.getElementById("tp-single-services-tab-2-li-2").innerHTML = polyglot.t("tp-single-services-tab-2-li-2");
            document.getElementById("tp-single-services-tab-2-li-3").innerHTML = polyglot.t("tp-single-services-tab-2-li-3");
            document.getElementById("tp-single-services-tab-2-li-4").innerHTML = polyglot.t("tp-single-services-tab-2-li-4");
            document.getElementById("tp-single-services-tab-2-li-5").innerHTML = polyglot.t("tp-single-services-tab-2-li-5");
            document.getElementById("tp-single-services-tab-3-li-1").innerHTML = polyglot.t("tp-single-services-tab-3-li-1");
            document.getElementById("tp-single-services-tab-3-li-2").innerHTML = polyglot.t("tp-single-services-tab-3-li-2");
            document.getElementById("tp-single-services-tab-3-li-3").innerHTML = polyglot.t("tp-single-services-tab-3-li-3");
        }
        /* Contact */
        if(document.getElementById("tp-contact-title"))
        {
            document.getElementById("tp-contact-title").innerHTML = polyglot.t("tp-contact-title");
            document.getElementById("tp-contact-span").innerHTML = polyglot.t("tp-contact-span");
            document.getElementById("tp-contact-item-p").innerHTML = polyglot.t("tp-contact-item-p");
            document.getElementById("tp-contact-item-h4").innerHTML = polyglot.t("tp-contact-item-h4");
            /*document.getElementById("tp-form-name").placeholder = polyglot.t("tp-form-name");
            document.getElementById("tp-form-email").placeholder  = polyglot.t("tp-form-email");
            document.getElementById("tp-form-message").placeholder  = polyglot.t("tp-form-message");
            document.getElementById("tp-form-submit").innerHTML = polyglot.t("tp-form-submit");
            document.getElementById("tp-footer-contact-title").innerHTML = polyglot.t("tp-footer-contact-title");*/
            document.getElementById("tp-footer-contact-p").innerHTML = polyglot.t("tp-footer-contact-p");
        }
        
        cambiarClase({
            class:".tp-footer-contact-title",
            txt:polyglot.t("tp-footer-contact-title")
        });
        cambiarClase({
            class:".tp-form-name",
            txt:polyglot.t("tp-form-name"),
            placeholder:true
        });
        cambiarClase({
            class:".tp-form-email",
            txt:polyglot.t("tp-form-email"),
            placeholder:true
        });
        cambiarClase({
            class:".tp-form-message",
            txt:polyglot.t("tp-form-message"),
            placeholder:true
        });
        cambiarClase({
            class:".tp-form-submit",
            txt:polyglot.t("tp-form-submit"),
            placeholder:true
        });
        cambiarClase({
            class:".tp-btn-send",
            txt:polyglot.t("tp-btn-send")
        });
          
      } catch (e) {
          console.warn("Polyglot", e);
      }
  }
  
  },{"node-polyglot":"4i0K9","./locale/en/en.js":"g70v7","./locale/es/es.js":"jWmdd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4i0K9":[function(require,module,exports) {
  //     (c) 2012-2018 Airbnb, Inc.
  //
  //     polyglot.js may be freely distributed under the terms of the BSD
  //     license. For all licensing information, details, and documentation:
  //     http://airbnb.github.com/polyglot.js
  //
  //
  // Polyglot.js is an I18n helper library written in JavaScript, made to
  // work both in the browser and in Node. It provides a simple solution for
  // interpolation and pluralization, based off of Airbnb's
  // experience adding I18n functionality to its Backbone.js and Node apps.
  //
  // Polylglot is agnostic to your translation backend. It doesn't perform any
  // translation; it simply gives you a way to manage translated phrases from
  // your client- or server-side JavaScript application.
  //
  "use strict";
  var entries = require("34c32d9ae02c8907");
  var warning = require("2d29ff90c14f977f");
  var has = require("bef9436e6309577e");
  var warn = function warn(message) {
      warning(false, message);
  };
  var defaultReplace = String.prototype.replace;
  var split = String.prototype.split;
  // #### Pluralization methods
  // The string that separates the different phrase possibilities.
  var delimiter = "||||";
  var russianPluralGroups = function(n) {
      var lastTwo = n % 100;
      var end = lastTwo % 10;
      if (lastTwo !== 11 && end === 1) return 0;
      if (2 <= end && end <= 4 && !(lastTwo >= 12 && lastTwo <= 14)) return 1;
      return 2;
  };
  var defaultPluralRules = {
      // Mapping from pluralization group plural logic.
      pluralTypes: {
          arabic: function(n) {
              // http://www.arabeyes.org/Plural_Forms
              if (n < 3) return n;
              var lastTwo = n % 100;
              if (lastTwo >= 3 && lastTwo <= 10) return 3;
              return lastTwo >= 11 ? 4 : 5;
          },
          bosnian_serbian: russianPluralGroups,
          chinese: function() {
              return 0;
          },
          croatian: russianPluralGroups,
          french: function(n) {
              return n >= 2 ? 1 : 0;
          },
          german: function(n) {
              return n !== 1 ? 1 : 0;
          },
          russian: russianPluralGroups,
          lithuanian: function(n) {
              if (n % 10 === 1 && n % 100 !== 11) return 0;
              return n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19) ? 1 : 2;
          },
          czech: function(n) {
              if (n === 1) return 0;
              return n >= 2 && n <= 4 ? 1 : 2;
          },
          polish: function(n) {
              if (n === 1) return 0;
              var end = n % 10;
              return 2 <= end && end <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
          },
          icelandic: function(n) {
              return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
          },
          slovenian: function(n) {
              var lastTwo = n % 100;
              if (lastTwo === 1) return 0;
              if (lastTwo === 2) return 1;
              if (lastTwo === 3 || lastTwo === 4) return 2;
              return 3;
          },
          romanian: function(n) {
              if (n === 1) return 0;
              var lastTwo = n % 100;
              if (n === 0 || lastTwo >= 2 && lastTwo <= 19) return 1;
              return 2;
          },
          ukrainian: russianPluralGroups
      },
      // Mapping from pluralization group to individual language codes/locales.
      // Will look up based on exact match, if not found and it's a locale will parse the locale
      // for language code, and if that does not exist will default to 'en'
      pluralTypeToLanguages: {
          arabic: [
              "ar"
          ],
          bosnian_serbian: [
              "bs-Latn-BA",
              "bs-Cyrl-BA",
              "srl-RS",
              "sr-RS"
          ],
          chinese: [
              "id",
              "id-ID",
              "ja",
              "ko",
              "ko-KR",
              "lo",
              "ms",
              "th",
              "th-TH",
              "zh"
          ],
          croatian: [
              "hr",
              "hr-HR"
          ],
          german: [
              "fa",
              "da",
              "de",
              "en",
              "es",
              "fi",
              "el",
              "he",
              "hi-IN",
              "hu",
              "hu-HU",
              "it",
              "nl",
              "no",
              "pt",
              "sv",
              "tr"
          ],
          french: [
              "fr",
              "tl",
              "pt-br"
          ],
          russian: [
              "ru",
              "ru-RU"
          ],
          lithuanian: [
              "lt"
          ],
          czech: [
              "cs",
              "cs-CZ",
              "sk"
          ],
          polish: [
              "pl"
          ],
          icelandic: [
              "is",
              "mk"
          ],
          slovenian: [
              "sl-SL"
          ],
          romanian: [
              "ro"
          ],
          ukrainian: [
              "uk",
              "ua"
          ]
      }
  };
  function langToTypeMap(mapping) {
      var ret = {};
      var mappingEntries = entries(mapping);
      for(var i = 0; i < mappingEntries.length; i += 1){
          var type = mappingEntries[i][0];
          var langs = mappingEntries[i][1];
          for(var j = 0; j < langs.length; j += 1)ret[langs[j]] = type;
      }
      return ret;
  }
  function pluralTypeName(pluralRules, locale) {
      var langToPluralType = langToTypeMap(pluralRules.pluralTypeToLanguages);
      return langToPluralType[locale] || langToPluralType[split.call(locale, /-/, 1)[0]] || langToPluralType.en;
  }
  function pluralTypeIndex(pluralRules, pluralType, count) {
      return pluralRules.pluralTypes[pluralType](count);
  }
  function createMemoizedPluralTypeNameSelector() {
      var localePluralTypeStorage = {};
      return function(pluralRules, locale) {
          var pluralType = localePluralTypeStorage[locale];
          if (pluralType && !pluralRules.pluralTypes[pluralType]) {
              pluralType = null;
              localePluralTypeStorage[locale] = pluralType;
          }
          if (!pluralType) {
              pluralType = pluralTypeName(pluralRules, locale);
              if (pluralType) localePluralTypeStorage[locale] = pluralType;
          }
          return pluralType;
      };
  }
  function escape(token) {
      return token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function constructTokenRegex(opts) {
      var prefix = opts && opts.prefix || "%{";
      var suffix = opts && opts.suffix || "}";
      if (prefix === delimiter || suffix === delimiter) throw new RangeError('"' + delimiter + '" token is reserved for pluralization');
      return new RegExp(escape(prefix) + "(.*?)" + escape(suffix), "g");
  }
  var memoizedPluralTypeName = createMemoizedPluralTypeNameSelector();
  var defaultTokenRegex = /%\{(.*?)\}/g;
  // ### transformPhrase(phrase, substitutions, locale)
  //
  // Takes a phrase string and transforms it by choosing the correct
  // plural form and interpolating it.
  //
  //     transformPhrase('Hello, %{name}!', {name: 'Spike'});
  //     // "Hello, Spike!"
  //
  // The correct plural form is selected if substitutions.smart_count
  // is set. You can pass in a number instead of an Object as `substitutions`
  // as a shortcut for `smart_count`.
  //
  //     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 1}, 'en');
  //     // "1 new message"
  //
  //     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 2}, 'en');
  //     // "2 new messages"
  //
  //     transformPhrase('%{smart_count} new messages |||| 1 new message', 5, 'en');
  //     // "5 new messages"
  //
  // You should pass in a third argument, the locale, to specify the correct plural type.
  // It defaults to `'en'` with 2 plural forms.
  function transformPhrase(phrase, substitutions, locale, tokenRegex, pluralRules, replaceImplementation) {
      if (typeof phrase !== "string") throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
      if (substitutions == null) return phrase;
      var result = phrase;
      var interpolationRegex = tokenRegex || defaultTokenRegex;
      var replace = replaceImplementation || defaultReplace;
      // allow number as a pluralization shortcut
      var options = typeof substitutions === "number" ? {
          smart_count: substitutions
      } : substitutions;
      // Select plural form: based on a phrase text that contains `n`
      // plural forms separated by `delimiter`, a `locale`, and a `substitutions.smart_count`,
      // choose the correct plural form. This is only done if `count` is set.
      if (options.smart_count != null && phrase) {
          var pluralRulesOrDefault = pluralRules || defaultPluralRules;
          var texts = split.call(phrase, delimiter);
          var bestLocale = locale || "en";
          var pluralType = memoizedPluralTypeName(pluralRulesOrDefault, bestLocale);
          var pluralTypeWithCount = pluralTypeIndex(pluralRulesOrDefault, pluralType, options.smart_count);
          result = defaultReplace.call(texts[pluralTypeWithCount] || texts[0], /^[^\S]*|[^\S]*$/g, "");
      }
      // Interpolate: Creates a `RegExp` object for each interpolation placeholder.
      result = replace.call(result, interpolationRegex, function(expression, argument) {
          if (!has(options, argument) || options[argument] == null) return expression;
          return options[argument];
      });
      return result;
  }
  // ### Polyglot class constructor
  function Polyglot(options) {
      var opts = options || {};
      this.phrases = {};
      this.extend(opts.phrases || {});
      this.currentLocale = opts.locale || "en";
      var allowMissing = opts.allowMissing ? transformPhrase : null;
      this.onMissingKey = typeof opts.onMissingKey === "function" ? opts.onMissingKey : allowMissing;
      this.warn = opts.warn || warn;
      this.replaceImplementation = opts.replace || defaultReplace;
      this.tokenRegex = constructTokenRegex(opts.interpolation);
      this.pluralRules = opts.pluralRules || defaultPluralRules;
  }
  // ### polyglot.locale([locale])
  //
  // Get or set locale. Internally, Polyglot only uses locale for pluralization.
  Polyglot.prototype.locale = function(newLocale) {
      if (newLocale) this.currentLocale = newLocale;
      return this.currentLocale;
  };
  // ### polyglot.extend(phrases)
  //
  // Use `extend` to tell Polyglot how to translate a given key.
  //
  //     polyglot.extend({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     });
  //
  // The key can be any string.  Feel free to call `extend` multiple times;
  // it will override any phrases with the same key, but leave existing phrases
  // untouched.
  //
  // It is also possible to pass nested phrase objects, which get flattened
  // into an object with the nested keys concatenated using dot notation.
  //
  //     polyglot.extend({
  //       "nav": {
  //         "hello": "Hello",
  //         "hello_name": "Hello, %{name}",
  //         "sidebar": {
  //           "welcome": "Welcome"
  //         }
  //       }
  //     });
  //
  //     console.log(polyglot.phrases);
  //     // {
  //     //   'nav.hello': 'Hello',
  //     //   'nav.hello_name': 'Hello, %{name}',
  //     //   'nav.sidebar.welcome': 'Welcome'
  //     // }
  //
  // `extend` accepts an optional second argument, `prefix`, which can be used
  // to prefix every key in the phrases object with some string, using dot
  // notation.
  //
  //     polyglot.extend({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     }, "nav");
  //
  //     console.log(polyglot.phrases);
  //     // {
  //     //   'nav.hello': 'Hello',
  //     //   'nav.hello_name': 'Hello, %{name}'
  //     // }
  //
  // This feature is used internally to support nested phrase objects.
  Polyglot.prototype.extend = function(morePhrases, prefix) {
      var phraseEntries = entries(morePhrases || {});
      for(var i = 0; i < phraseEntries.length; i += 1){
          var key = phraseEntries[i][0];
          var phrase = phraseEntries[i][1];
          var prefixedKey = prefix ? prefix + "." + key : key;
          if (typeof phrase === "object") this.extend(phrase, prefixedKey);
          else this.phrases[prefixedKey] = phrase;
      }
  };
  // ### polyglot.unset(phrases)
  // Use `unset` to selectively remove keys from a polyglot instance.
  //
  //     polyglot.unset("some_key");
  //     polyglot.unset({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     });
  //
  // The unset method can take either a string (for the key), or an object hash with
  // the keys that you would like to unset.
  Polyglot.prototype.unset = function(morePhrases, prefix) {
      if (typeof morePhrases === "string") delete this.phrases[morePhrases];
      else {
          var phraseEntries = entries(morePhrases || {});
          for(var i = 0; i < phraseEntries.length; i += 1){
              var key = phraseEntries[i][0];
              var phrase = phraseEntries[i][1];
              var prefixedKey = prefix ? prefix + "." + key : key;
              if (typeof phrase === "object") this.unset(phrase, prefixedKey);
              else delete this.phrases[prefixedKey];
          }
      }
  };
  // ### polyglot.clear()
  //
  // Clears all phrases. Useful for special cases, such as freeing
  // up memory if you have lots of phrases but no longer need to
  // perform any translation. Also used internally by `replace`.
  Polyglot.prototype.clear = function() {
      this.phrases = {};
  };
  // ### polyglot.replace(phrases)
  //
  // Completely replace the existing phrases with a new set of phrases.
  // Normally, just use `extend` to add more phrases, but under certain
  // circumstances, you may want to make sure no old phrases are lying around.
  Polyglot.prototype.replace = function(newPhrases) {
      this.clear();
      this.extend(newPhrases);
  };
  // ### polyglot.t(key, options)
  //
  // The most-used method. Provide a key, and `t` will return the
  // phrase.
  //
  //     polyglot.t("hello");
  //     => "Hello"
  //
  // The phrase value is provided first by a call to `polyglot.extend()` or
  // `polyglot.replace()`.
  //
  // Pass in an object as the second argument to perform interpolation.
  //
  //     polyglot.t("hello_name", {name: "Spike"});
  //     => "Hello, Spike"
  //
  // If you like, you can provide a default value in case the phrase is missing.
  // Use the special option key "_" to specify a default.
  //
  //     polyglot.t("i_like_to_write_in_language", {
  //       _: "I like to write in %{language}.",
  //       language: "JavaScript"
  //     });
  //     => "I like to write in JavaScript."
  //
  Polyglot.prototype.t = function(key, options) {
      var phrase, result;
      var opts = options == null ? {} : options;
      if (typeof this.phrases[key] === "string") phrase = this.phrases[key];
      else if (typeof opts._ === "string") phrase = opts._;
      else if (this.onMissingKey) {
          var onMissingKey = this.onMissingKey;
          result = onMissingKey(key, opts, this.currentLocale, this.tokenRegex, this.pluralRules, this.replaceImplementation);
      } else {
          this.warn('Missing translation for key: "' + key + '"');
          result = key;
      }
      if (typeof phrase === "string") result = transformPhrase(phrase, opts, this.currentLocale, this.tokenRegex, this.pluralRules, this.replaceImplementation);
      return result;
  };
  // ### polyglot.has(key)
  //
  // Check if polyglot has a translation for given key
  Polyglot.prototype.has = function(key) {
      return has(this.phrases, key);
  };
  // export transformPhrase
  Polyglot.transformPhrase = function transform(phrase, substitutions, locale) {
      return transformPhrase(phrase, substitutions, locale);
  };
  module.exports = Polyglot;
  
  },{"34c32d9ae02c8907":"86wi8","2d29ff90c14f977f":"eUVzU","bef9436e6309577e":"9Wb6f"}],"86wi8":[function(require,module,exports) {
  "use strict";
  var define = require("f05a4cf8396ce723");
  var callBind = require("1f168bf7e5108591");
  var implementation = require("6c122dae8b2c5b20");
  var getPolyfill = require("45d515bc16616945");
  var shim = require("34d3e5e0e1dde420");
  var polyfill = callBind(getPolyfill(), Object);
  define(polyfill, {
      getPolyfill: getPolyfill,
      implementation: implementation,
      shim: shim
  });
  module.exports = polyfill;
  
  },{"f05a4cf8396ce723":"6eq5U","1f168bf7e5108591":"bfo8D","6c122dae8b2c5b20":"3qWxi","45d515bc16616945":"fwWhU","34d3e5e0e1dde420":"1GiYX"}],"6eq5U":[function(require,module,exports) {
  "use strict";
  var keys = require("7ff177585d1618f0");
  var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
  var toStr = Object.prototype.toString;
  var concat = Array.prototype.concat;
  var defineDataProperty = require("84ca194f5a28ce70");
  var isFunction = function(fn) {
      return typeof fn === "function" && toStr.call(fn) === "[object Function]";
  };
  var supportsDescriptors = require("c52d62086511583f")();
  var defineProperty = function(object, name, value, predicate) {
      if (name in object) {
          if (predicate === true) {
              if (object[name] === value) return;
          } else if (!isFunction(predicate) || !predicate()) return;
      }
      if (supportsDescriptors) defineDataProperty(object, name, value, true);
      else defineDataProperty(object, name, value);
  };
  var defineProperties = function(object, map) {
      var predicates = arguments.length > 2 ? arguments[2] : {};
      var props = keys(map);
      if (hasSymbols) props = concat.call(props, Object.getOwnPropertySymbols(map));
      for(var i = 0; i < props.length; i += 1)defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
  };
  defineProperties.supportsDescriptors = !!supportsDescriptors;
  module.exports = defineProperties;
  
  },{"7ff177585d1618f0":"eNyf4","84ca194f5a28ce70":"6cEff","c52d62086511583f":"esBLZ"}],"eNyf4":[function(require,module,exports) {
  "use strict";
  var slice = Array.prototype.slice;
  var isArgs = require("93e8460f624c96f4");
  var origKeys = Object.keys;
  var keysShim = origKeys ? function keys(o) {
      return origKeys(o);
  } : require("344bb0d7b2568e03");
  var originalKeys = Object.keys;
  keysShim.shim = function shimObjectKeys() {
      if (Object.keys) {
          var keysWorksWithArguments = function() {
              // Safari 5.0 bug
              var args = Object.keys(arguments);
              return args && args.length === arguments.length;
          }(1, 2);
          if (!keysWorksWithArguments) Object.keys = function keys(object) {
              if (isArgs(object)) return originalKeys(slice.call(object));
              return originalKeys(object);
          };
      } else Object.keys = keysShim;
      return Object.keys || keysShim;
  };
  module.exports = keysShim;
  
  },{"93e8460f624c96f4":"1HhOq","344bb0d7b2568e03":"aV01q"}],"1HhOq":[function(require,module,exports) {
  "use strict";
  var toStr = Object.prototype.toString;
  module.exports = function isArguments(value) {
      var str = toStr.call(value);
      var isArgs = str === "[object Arguments]";
      if (!isArgs) isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
      return isArgs;
  };
  
  },{}],"aV01q":[function(require,module,exports) {
  "use strict";
  var keysShim;
  if (!Object.keys) {
      // modified from https://github.com/es-shims/es5-shim
      var has = Object.prototype.hasOwnProperty;
      var toStr = Object.prototype.toString;
      var isArgs = require("b0d8c8b84be91ffd"); // eslint-disable-line global-require
      var isEnumerable = Object.prototype.propertyIsEnumerable;
      var hasDontEnumBug = !isEnumerable.call({
          toString: null
      }, "toString");
      var hasProtoEnumBug = isEnumerable.call(function() {}, "prototype");
      var dontEnums = [
          "toString",
          "toLocaleString",
          "valueOf",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "constructor"
      ];
      var equalsConstructorPrototype = function(o) {
          var ctor = o.constructor;
          return ctor && ctor.prototype === o;
      };
      var excludedKeys = {
          $applicationCache: true,
          $console: true,
          $external: true,
          $frame: true,
          $frameElement: true,
          $frames: true,
          $innerHeight: true,
          $innerWidth: true,
          $onmozfullscreenchange: true,
          $onmozfullscreenerror: true,
          $outerHeight: true,
          $outerWidth: true,
          $pageXOffset: true,
          $pageYOffset: true,
          $parent: true,
          $scrollLeft: true,
          $scrollTop: true,
          $scrollX: true,
          $scrollY: true,
          $self: true,
          $webkitIndexedDB: true,
          $webkitStorageInfo: true,
          $window: true
      };
      var hasAutomationEqualityBug = function() {
          /* global window */ if (typeof window === "undefined") return false;
          for(var k in window)try {
              if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") try {
                  equalsConstructorPrototype(window[k]);
              } catch (e) {
                  return true;
              }
          } catch (e) {
              return true;
          }
          return false;
      }();
      var equalsConstructorPrototypeIfNotBuggy = function(o) {
          /* global window */ if (typeof window === "undefined" || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
          try {
              return equalsConstructorPrototype(o);
          } catch (e) {
              return false;
          }
      };
      keysShim = function keys(object) {
          var isObject = object !== null && typeof object === "object";
          var isFunction = toStr.call(object) === "[object Function]";
          var isArguments = isArgs(object);
          var isString = isObject && toStr.call(object) === "[object String]";
          var theKeys = [];
          if (!isObject && !isFunction && !isArguments) throw new TypeError("Object.keys called on a non-object");
          var skipProto = hasProtoEnumBug && isFunction;
          if (isString && object.length > 0 && !has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
          if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
          else {
              for(var name in object)if (!(skipProto && name === "prototype") && has.call(object, name)) theKeys.push(String(name));
          }
          if (hasDontEnumBug) {
              var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
              for(var k = 0; k < dontEnums.length; ++k)if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
          }
          return theKeys;
      };
  }
  module.exports = keysShim;
  
  },{"b0d8c8b84be91ffd":"1HhOq"}],"6cEff":[function(require,module,exports) {
  "use strict";
  var $defineProperty = require("f17fd23367965521");
  var $SyntaxError = require("50f12088ee0f6bb");
  var $TypeError = require("45c79de2b2f9c949");
  var gopd = require("3f9bd39335781ec7");
  /** @type {import('.')} */ module.exports = function defineDataProperty(obj, property, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") throw new $TypeError("`obj` must be an object or a function`");
      if (typeof property !== "string" && typeof property !== "symbol") throw new $TypeError("`property` must be a string or a symbol`");
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") throw new $TypeError("`loose`, if provided, must be a boolean");
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!gopd && gopd(obj, property);
      if ($defineProperty) $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value: value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
      });
      else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
      obj[property] = value; // eslint-disable-line no-param-reassign
      else throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  };
  
  },{"f17fd23367965521":"5SmXK","50f12088ee0f6bb":"8jeeH","45c79de2b2f9c949":"6oWLR","3f9bd39335781ec7":"eOTQB"}],"5SmXK":[function(require,module,exports) {
  "use strict";
  var GetIntrinsic = require("8e0b8e4026aaf38a");
  /** @type {import('.')} */ var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
  if ($defineProperty) try {
      $defineProperty({}, "a", {
          value: 1
      });
  } catch (e) {
      // IE 8 has a broken defineProperty
      $defineProperty = false;
  }
  module.exports = $defineProperty;
  
  },{"8e0b8e4026aaf38a":"dZb05"}],"dZb05":[function(require,module,exports) {
  "use strict";
  var undefined1;
  var $Error = require("ff34c740859aa28e");
  var $EvalError = require("349515b7ea9b6cef");
  var $RangeError = require("9da01653b2dd9abf");
  var $ReferenceError = require("68586abd6b0136da");
  var $SyntaxError = require("662263fdbc077fc8");
  var $TypeError = require("abdfc34e5f6bb86");
  var $URIError = require("daca1f932429e03e");
  var $Function = Function;
  // eslint-disable-next-line consistent-return
  var getEvalledConstructor = function(expressionSyntax) {
      try {
          return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {}
  };
  var $gOPD = Object.getOwnPropertyDescriptor;
  if ($gOPD) try {
      $gOPD({}, "");
  } catch (e) {
      $gOPD = null; // this is IE 8, which has a broken gOPD
  }
  var throwTypeError = function() {
      throw new $TypeError();
  };
  var ThrowTypeError = $gOPD ? function() {
      try {
          // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
          arguments.callee; // IE 8 does not throw here
          return throwTypeError;
      } catch (calleeThrows) {
          try {
              // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
              return $gOPD(arguments, "callee").get;
          } catch (gOPDthrows) {
              return throwTypeError;
          }
      }
  }() : throwTypeError;
  var hasSymbols = require("1f00f712d594ccf")();
  var hasProto = require("23730654306aa64c")();
  var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
      return x.__proto__;
  } // eslint-disable-line no-proto
   : null);
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined : getProto(Uint8Array);
  var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
      "%AsyncFromSyncIteratorPrototype%": undefined,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      "%EvalError%": $EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
      "%JSON%": typeof JSON === "object" ? JSON : undefined,
      "%Map%": typeof Map === "undefined" ? undefined : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined,
      "%Symbol%": hasSymbols ? Symbol : undefined,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined : WeakSet
  };
  if (getProto) try {
      null.error; // eslint-disable-line no-unused-expressions
  } catch (e) {
      // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
      var errorProto = getProto(getProto(e));
      INTRINSICS["%Error.prototype%"] = errorProto;
  }
  var doEval = function doEval(name) {
      var value;
      if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
      else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
      else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
      else if (name === "%AsyncGenerator%") {
          var fn = doEval("%AsyncGeneratorFunction%");
          if (fn) value = fn.prototype;
      } else if (name === "%AsyncIteratorPrototype%") {
          var gen = doEval("%AsyncGenerator%");
          if (gen && getProto) value = getProto(gen.prototype);
      }
      INTRINSICS[name] = value;
      return value;
  };
  var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": [
          "ArrayBuffer",
          "prototype"
      ],
      "%ArrayPrototype%": [
          "Array",
          "prototype"
      ],
      "%ArrayProto_entries%": [
          "Array",
          "prototype",
          "entries"
      ],
      "%ArrayProto_forEach%": [
          "Array",
          "prototype",
          "forEach"
      ],
      "%ArrayProto_keys%": [
          "Array",
          "prototype",
          "keys"
      ],
      "%ArrayProto_values%": [
          "Array",
          "prototype",
          "values"
      ],
      "%AsyncFunctionPrototype%": [
          "AsyncFunction",
          "prototype"
      ],
      "%AsyncGenerator%": [
          "AsyncGeneratorFunction",
          "prototype"
      ],
      "%AsyncGeneratorPrototype%": [
          "AsyncGeneratorFunction",
          "prototype",
          "prototype"
      ],
      "%BooleanPrototype%": [
          "Boolean",
          "prototype"
      ],
      "%DataViewPrototype%": [
          "DataView",
          "prototype"
      ],
      "%DatePrototype%": [
          "Date",
          "prototype"
      ],
      "%ErrorPrototype%": [
          "Error",
          "prototype"
      ],
      "%EvalErrorPrototype%": [
          "EvalError",
          "prototype"
      ],
      "%Float32ArrayPrototype%": [
          "Float32Array",
          "prototype"
      ],
      "%Float64ArrayPrototype%": [
          "Float64Array",
          "prototype"
      ],
      "%FunctionPrototype%": [
          "Function",
          "prototype"
      ],
      "%Generator%": [
          "GeneratorFunction",
          "prototype"
      ],
      "%GeneratorPrototype%": [
          "GeneratorFunction",
          "prototype",
          "prototype"
      ],
      "%Int8ArrayPrototype%": [
          "Int8Array",
          "prototype"
      ],
      "%Int16ArrayPrototype%": [
          "Int16Array",
          "prototype"
      ],
      "%Int32ArrayPrototype%": [
          "Int32Array",
          "prototype"
      ],
      "%JSONParse%": [
          "JSON",
          "parse"
      ],
      "%JSONStringify%": [
          "JSON",
          "stringify"
      ],
      "%MapPrototype%": [
          "Map",
          "prototype"
      ],
      "%NumberPrototype%": [
          "Number",
          "prototype"
      ],
      "%ObjectPrototype%": [
          "Object",
          "prototype"
      ],
      "%ObjProto_toString%": [
          "Object",
          "prototype",
          "toString"
      ],
      "%ObjProto_valueOf%": [
          "Object",
          "prototype",
          "valueOf"
      ],
      "%PromisePrototype%": [
          "Promise",
          "prototype"
      ],
      "%PromiseProto_then%": [
          "Promise",
          "prototype",
          "then"
      ],
      "%Promise_all%": [
          "Promise",
          "all"
      ],
      "%Promise_reject%": [
          "Promise",
          "reject"
      ],
      "%Promise_resolve%": [
          "Promise",
          "resolve"
      ],
      "%RangeErrorPrototype%": [
          "RangeError",
          "prototype"
      ],
      "%ReferenceErrorPrototype%": [
          "ReferenceError",
          "prototype"
      ],
      "%RegExpPrototype%": [
          "RegExp",
          "prototype"
      ],
      "%SetPrototype%": [
          "Set",
          "prototype"
      ],
      "%SharedArrayBufferPrototype%": [
          "SharedArrayBuffer",
          "prototype"
      ],
      "%StringPrototype%": [
          "String",
          "prototype"
      ],
      "%SymbolPrototype%": [
          "Symbol",
          "prototype"
      ],
      "%SyntaxErrorPrototype%": [
          "SyntaxError",
          "prototype"
      ],
      "%TypedArrayPrototype%": [
          "TypedArray",
          "prototype"
      ],
      "%TypeErrorPrototype%": [
          "TypeError",
          "prototype"
      ],
      "%Uint8ArrayPrototype%": [
          "Uint8Array",
          "prototype"
      ],
      "%Uint8ClampedArrayPrototype%": [
          "Uint8ClampedArray",
          "prototype"
      ],
      "%Uint16ArrayPrototype%": [
          "Uint16Array",
          "prototype"
      ],
      "%Uint32ArrayPrototype%": [
          "Uint32Array",
          "prototype"
      ],
      "%URIErrorPrototype%": [
          "URIError",
          "prototype"
      ],
      "%WeakMapPrototype%": [
          "WeakMap",
          "prototype"
      ],
      "%WeakSetPrototype%": [
          "WeakSet",
          "prototype"
      ]
  };
  var bind = require("7c5e688e48cd07b0");
  var hasOwn = require("af36d49b4b8c6c7c");
  var $concat = bind.call(Function.call, Array.prototype.concat);
  var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
  var $replace = bind.call(Function.call, String.prototype.replace);
  var $strSlice = bind.call(Function.call, String.prototype.slice);
  var $exec = bind.call(Function.call, RegExp.prototype.exec);
  /* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
  var stringToPath = function stringToPath(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
          result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
  };
  /* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
          alias = LEGACY_ALIASES[intrinsicName];
          intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
          var value = INTRINSICS[intrinsicName];
          if (value === needsEval) value = doEval(intrinsicName);
          if (typeof value === "undefined" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
          return {
              alias: alias,
              name: intrinsicName,
              value: value
          };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError('"allowMissing" argument must be a boolean');
      if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply(parts, $concat([
              0,
              1
          ], alias));
      }
      for(var i = 1, isOwn = true; i < parts.length; i += 1){
          var part = parts[i];
          var first = $strSlice(part, 0, 1);
          var last = $strSlice(part, -1);
          if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
          if (part === "constructor" || !isOwn) skipFurtherCaching = true;
          intrinsicBaseName += "." + part;
          intrinsicRealName = "%" + intrinsicBaseName + "%";
          if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
          else if (value != null) {
              if (!(part in value)) {
                  if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                  return void 0;
              }
              if ($gOPD && i + 1 >= parts.length) {
                  var desc = $gOPD(value, part);
                  isOwn = !!desc;
                  // By convention, when a data property is converted to an accessor
                  // property to emulate a data property that does not suffer from
                  // the override mistake, that accessor's getter is marked with
                  // an `originalValue` property. Here, when we detect this, we
                  // uphold the illusion by pretending to see that original data
                  // property, i.e., returning the value rather than the getter
                  // itself.
                  if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
                  else value = value[part];
              } else {
                  isOwn = hasOwn(value, part);
                  value = value[part];
              }
              if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
          }
      }
      return value;
  };
  
  },{"ff34c740859aa28e":"eDsor","349515b7ea9b6cef":"hIiFU","9da01653b2dd9abf":"11MNe","68586abd6b0136da":"2YV8d","662263fdbc077fc8":"8jeeH","abdfc34e5f6bb86":"6oWLR","daca1f932429e03e":"a04Um","1f00f712d594ccf":"3dK91","23730654306aa64c":"6eZiF","7c5e688e48cd07b0":"6J4ob","af36d49b4b8c6c7c":"9Wb6f"}],"eDsor":[function(require,module,exports) {
  "use strict";
  /** @type {import('.')} */ module.exports = Error;
  
  },{}],"hIiFU":[function(require,module,exports) {
  "use strict";
  /** @type {import('./eval')} */ module.exports = EvalError;
  
  },{}],"11MNe":[function(require,module,exports) {
  "use strict";
  /** @type {import('./range')} */ module.exports = RangeError;
  
  },{}],"2YV8d":[function(require,module,exports) {
  "use strict";
  /** @type {import('./ref')} */ module.exports = ReferenceError;
  
  },{}],"8jeeH":[function(require,module,exports) {
  "use strict";
  /** @type {import('./syntax')} */ module.exports = SyntaxError;
  
  },{}],"6oWLR":[function(require,module,exports) {
  "use strict";
  /** @type {import('./type')} */ module.exports = TypeError;
  
  },{}],"a04Um":[function(require,module,exports) {
  "use strict";
  /** @type {import('./uri')} */ module.exports = URIError;
  
  },{}],"3dK91":[function(require,module,exports) {
  "use strict";
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = require("3fb25678c62d2fce");
  module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") return false;
      if (typeof Symbol !== "function") return false;
      if (typeof origSymbol("foo") !== "symbol") return false;
      if (typeof Symbol("bar") !== "symbol") return false;
      return hasSymbolSham();
  };
  
  },{"3fb25678c62d2fce":"euYk7"}],"euYk7":[function(require,module,exports) {
  "use strict";
  /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
      if (typeof Symbol.iterator === "symbol") return true;
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") return false;
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
      // temp disabled per https://github.com/ljharb/object.assign/issues/17
      // if (sym instanceof Symbol) { return false; }
      // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
      // if (!(symObj instanceof Symbol)) { return false; }
      // if (typeof Symbol.prototype.toString !== 'function') { return false; }
      // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
      var symVal = 42;
      obj[sym] = symVal;
      for(sym in obj)return false;
       // eslint-disable-line no-restricted-syntax, no-unreachable-loop
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) return false;
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
      if (typeof Object.getOwnPropertyDescriptor === "function") {
          var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
          if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
      }
      return true;
  };
  
  },{}],"6eZiF":[function(require,module,exports) {
  "use strict";
  var test = {
      __proto__: null,
      foo: {}
  };
  var $Object = Object;
  /** @type {import('.')} */ module.exports = function hasProto() {
      // @ts-expect-error: TS errors on an inherited property for some reason
      return ({
          __proto__: test
      }).foo === test.foo && !(test instanceof $Object);
  };
  
  },{}],"6J4ob":[function(require,module,exports) {
  "use strict";
  var implementation = require("12e173b4dbaee960");
  module.exports = Function.prototype.bind || implementation;
  
  },{"12e173b4dbaee960":"jwaxQ"}],"jwaxQ":[function(require,module,exports) {
  "use strict";
  /* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var toStr = Object.prototype.toString;
  var max = Math.max;
  var funcType = "[object Function]";
  var concatty = function concatty(a, b) {
      var arr = [];
      for(var i = 0; i < a.length; i += 1)arr[i] = a[i];
      for(var j = 0; j < b.length; j += 1)arr[j + a.length] = b[j];
      return arr;
  };
  var slicy = function slicy(arrLike, offset) {
      var arr = [];
      for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1)arr[j] = arrLike[i];
      return arr;
  };
  var joiny = function(arr, joiner) {
      var str = "";
      for(var i = 0; i < arr.length; i += 1){
          str += arr[i];
          if (i + 1 < arr.length) str += joiner;
      }
      return str;
  };
  module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
          if (this instanceof bound) {
              var result = target.apply(this, concatty(args, arguments));
              if (Object(result) === result) return result;
              return this;
          }
          return target.apply(that, concatty(args, arguments));
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for(var i = 0; i < boundLength; i++)boundArgs[i] = "$" + i;
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
          var Empty = function Empty() {};
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
      }
      return bound;
  };
  
  },{}],"9Wb6f":[function(require,module,exports) {
  "use strict";
  var call = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var bind = require("126cb75e62f8e17b");
  /** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
  
  },{"126cb75e62f8e17b":"6J4ob"}],"eOTQB":[function(require,module,exports) {
  "use strict";
  var GetIntrinsic = require("693e651525841e04");
  var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
  if ($gOPD) try {
      $gOPD([], "length");
  } catch (e) {
      // IE 8 has a broken gOPD
      $gOPD = null;
  }
  module.exports = $gOPD;
  
  },{"693e651525841e04":"dZb05"}],"esBLZ":[function(require,module,exports) {
  "use strict";
  var $defineProperty = require("1c3b0ce871129f60");
  var hasPropertyDescriptors = function hasPropertyDescriptors() {
      return !!$defineProperty;
  };
  hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      // node v0.6 has a bug where array lengths can be Set but not Defined
      if (!$defineProperty) return null;
      try {
          return $defineProperty([], "length", {
              value: 1
          }).length !== 1;
      } catch (e) {
          // In Firefox 4-22, defining length on an array throws an exception.
          return true;
      }
  };
  module.exports = hasPropertyDescriptors;
  
  },{"1c3b0ce871129f60":"5SmXK"}],"bfo8D":[function(require,module,exports) {
  "use strict";
  var bind = require("4f9d84d5de4909bc");
  var GetIntrinsic = require("68d2ad3775278f43");
  var setFunctionLength = require("f4b53071c102d4e");
  var $TypeError = require("761613670c43be80");
  var $apply = GetIntrinsic("%Function.prototype.apply%");
  var $call = GetIntrinsic("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
  var $defineProperty = require("3426ee59b177cf96");
  var $max = GetIntrinsic("%Math.max%");
  module.exports = function callBind(originalFunction) {
      if (typeof originalFunction !== "function") throw new $TypeError("a function is required");
      var func = $reflectApply(bind, $call, arguments);
      return setFunctionLength(func, 1 + $max(0, originalFunction.length - (arguments.length - 1)), true);
  };
  var applyBind = function applyBind() {
      return $reflectApply(bind, $apply, arguments);
  };
  if ($defineProperty) $defineProperty(module.exports, "apply", {
      value: applyBind
  });
  else module.exports.apply = applyBind;
  
  },{"4f9d84d5de4909bc":"6J4ob","68d2ad3775278f43":"dZb05","f4b53071c102d4e":"9IKoX","761613670c43be80":"6oWLR","3426ee59b177cf96":"5SmXK"}],"9IKoX":[function(require,module,exports) {
  "use strict";
  var GetIntrinsic = require("8b1c9107ef1524f2");
  var define = require("37dd1486f0f556ef");
  var hasDescriptors = require("6a9d2b46085df706")();
  var gOPD = require("2d412b0f532d1834");
  var $TypeError = require("4352c534d27fe477");
  var $floor = GetIntrinsic("%Math.floor%");
  /** @type {import('.')} */ module.exports = function setFunctionLength(fn, length) {
      if (typeof fn !== "function") throw new $TypeError("`fn` is not a function");
      if (typeof length !== "number" || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) throw new $TypeError("`length` must be a positive 32-bit integer");
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
          var desc = gOPD(fn, "length");
          if (desc && !desc.configurable) functionLengthIsConfigurable = false;
          if (desc && !desc.writable) functionLengthIsWritable = false;
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
          if (hasDescriptors) define(/** @type {Parameters<define>[0]} */ fn, "length", length, true, true);
          else define(/** @type {Parameters<define>[0]} */ fn, "length", length);
      }
      return fn;
  };
  
  },{"8b1c9107ef1524f2":"dZb05","37dd1486f0f556ef":"6cEff","6a9d2b46085df706":"esBLZ","2d412b0f532d1834":"eOTQB","4352c534d27fe477":"6oWLR"}],"3qWxi":[function(require,module,exports) {
  "use strict";
  var RequireObjectCoercible = require("dcf47dcb8d121713");
  var callBound = require("b4853052a5b6e723");
  var $isEnumerable = callBound("Object.prototype.propertyIsEnumerable");
  var $push = callBound("Array.prototype.push");
  module.exports = function entries(O) {
      var obj = RequireObjectCoercible(O);
      var entrys = [];
      for(var key in obj)if ($isEnumerable(obj, key)) $push(entrys, [
          key,
          obj[key]
      ]);
      return entrys;
  };
  
  },{"dcf47dcb8d121713":"7Mcya","b4853052a5b6e723":"5yYiF"}],"7Mcya":[function(require,module,exports) {
  "use strict";
  var $TypeError = require("7a8f85b6ac57aec7");
  /** @type {import('./RequireObjectCoercible')} */ module.exports = function RequireObjectCoercible(value) {
      if (value == null) throw new $TypeError(arguments.length > 0 && arguments[1] || "Cannot call method on " + value);
      return value;
  };
  
  },{"7a8f85b6ac57aec7":"6oWLR"}],"5yYiF":[function(require,module,exports) {
  "use strict";
  var GetIntrinsic = require("8b08ecb81cf4de17");
  var callBind = require("266fc50410cfc4a");
  var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
  module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBind(intrinsic);
      return intrinsic;
  };
  
  },{"8b08ecb81cf4de17":"dZb05","266fc50410cfc4a":"bfo8D"}],"fwWhU":[function(require,module,exports) {
  "use strict";
  var implementation = require("4e93e3142e0bf15e");
  module.exports = function getPolyfill() {
      return typeof Object.entries === "function" ? Object.entries : implementation;
  };
  
  },{"4e93e3142e0bf15e":"3qWxi"}],"1GiYX":[function(require,module,exports) {
  "use strict";
  var getPolyfill = require("a4ac95cb64a67848");
  var define = require("76b1dfc53d84e73e");
  module.exports = function shimEntries() {
      var polyfill = getPolyfill();
      define(Object, {
          entries: polyfill
      }, {
          entries: function testEntries() {
              return Object.entries !== polyfill;
          }
      });
      return polyfill;
  };
  
  },{"a4ac95cb64a67848":"fwWhU","76b1dfc53d84e73e":"6eq5U"}],"eUVzU":[function(require,module,exports) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ "use strict";
  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */ var __DEV__ = true;
  var warning = function() {};
  if (__DEV__) {
      var printWarning = function printWarning(format, args) {
          var len = arguments.length;
          args = new Array(len > 1 ? len - 1 : 0);
          for(var key = 1; key < len; key++)args[key - 1] = arguments[key];
          var argIndex = 0;
          var message = "Warning: " + format.replace(/%s/g, function() {
              return args[argIndex++];
          });
          if (typeof console !== "undefined") console.error(message);
          try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
          } catch (x) {}
      };
      warning = function(condition, format, args) {
          var len = arguments.length;
          args = new Array(len > 2 ? len - 2 : 0);
          for(var key = 2; key < len; key++)args[key - 2] = arguments[key];
          if (format === undefined) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
          if (!condition) printWarning.apply(null, [
              format
          ].concat(args));
      };
  }
  module.exports = warning;
  
  },{}],"g70v7":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  exports.default = {
      /* Menu */
      "tp_menu_1": "MyFit",
      "tp_menu_2": "ABOUT",
      "tp_menu_3": "SERVICES",
      "tp_menu_4": "CONTACT US",
      /* Banners */
      "tp-bn-h4-1": "Customized solutions",
      "tp-bn-h4-2": "We drive your growth",
      "tp-bn-h4-3": "A highly qualified team",
      "tp-bn-p-1": "that drive efficiency, productivity, and growth for your company.",
      "tp-bn-p-2": "We create value through our three lines of service",
      "tp-bn-p-3": "Your projects will be completed timely and with the highest standards of quality",
      "tp-btn": "READ MORE", 
      "tp-form-1": "Request a call back right now ?",
      "tp-txt-form": "We will gladly assist you",
      "tp-service-hd-title": "Our services",
      "tp-service-hd-span": "We drive your growth and create value through our three service lines.",
      "tp-service-hd-title-1": "Consulting and management",
      "tp-service-hd-title-2": "Outsourcing",
      "tp-service-hd-title-3": "Staffing",
      "tp-hd-more-info-title": "WHO WE ARE",
      "tp-hd-more-info-p": "After years of leading executive, strategic, and financial processes in multiple organizations across diverse sectors, we learned to identify and address real needs that companies face to accelerate their growth. We founded 3 Pinos to share the knowledge and lessons learned with growing companies that need to advance to the next level. We provide customized solutions that optimize the efficiency and effectiveness of business processes. Our mission is to drive the growth and success of companies through a comprehensive approach focused on their specific needs. We aspire to be recognized as the trusted strategic partner, distinguished by our excellence in providing consulting and management services.",
      "tp-conf-title": "Who trust in us",
      "tp-callback-title": "Request a call back",
      "tp-callback-p": "We will gladly get in touch with you",
      "tp-btn-contact-bn": "Contact us",
      /* fin index*/ 
      /* about */ 
      "tp-more-info-title": "ABOUT US",
      "tp-more-info-p": "After years of leading executive, strategic, and financial processes in multiple organizations across diverse sectors, we learned to identify and address real needs that companies face to accelerate their growth. We founded 3 Pinos to share the knowledge and lessons learned with growing companies that need to advance to the next level. We provide customized solutions that optimize the efficiency and effectiveness of business processes. Our mission is to drive the growth and success of companies through a comprehensive approach focused on their specific needs. We aspire to be recognized as the trusted strategic partner, distinguished by our excellence in providing consulting and management\xa0services. ",
      "tp-team-section-heading-title": "Our team members",
      "tp-team-section-heading-span": "highly qualified team",
      "tp-team-item-h4-1": "Mauricio Vasquez Barrera",
      "tp-team-item-span-1": "Partner / Founder",
      "tp-team-item-p-1": "Administrative Engineering (EIA University), Specialist in Corporate Finance (EIA University), Master's in Applied Economics (EAFIT University).",
      "tp-team-item-h4-2": "Laura Jim\xe9nez Pulido",
      "tp-team-item-span-2": "Partner / Founder",
      "tp-team-item-p-2": "Extensive experience in the Retail sector with responsibilities in logistics, finance, and key account management in multinational companies.",
      "tp-team-item-h4-3": "Andres Valencia Trujillo",
      "tp-team-item-span-3": "Associate",
      "tp-team-item-p-3": "Experienced in financial consulting and execution, process design and optimization, and management in BPO companies.",
      /* services */ 
      "tp-single-services-title-h1": "OUR SERVICES",
      "tp-single-services-title-1": "Consulting and management",
      "tp-single-services-title-2": "Outsourcing",
      "tp-single-services-title-3": "Staffing",
      "tp-single-services-tab-1-li-1": "Corporate structure design",
      "tp-single-services-tab-1-li-2": "Strategy development",
      "tp-single-services-tab-1-li-3": "Strategic control and management",
      "tp-single-services-tab-1-li-4": "Process design and KPIs",
      "tp-single-services-tab-1-li-5": "Financial planning",
      "tp-single-services-tab-1-li-6": "Budget design and control",
      "tp-single-services-tab-1-li-7": "ERP structural design and implementation",
      "tp-single-services-tab-2-li-1": "Financial management",
      "tp-single-services-tab-2-li-2": "Accounting and bookkeeping under NIIF standards in Colombia and US GAAP in the USA",
      "tp-single-services-tab-2-li-3": "Data entry",
      "tp-single-services-tab-2-li-4": "Payroll administration",
      "tp-single-services-tab-2-li-5": "Purchasing",
      "tp-single-services-tab-3-li-1": "Financial planning",
      "tp-single-services-tab-3-li-2": "Accounting",
      "tp-single-services-tab-3-li-3": "Logistics",
      /*  Contact  */ 
      "tp-contact-title": "CONTACT US",
      "tp-contact-span": "Don't Hesitate To Send Us A Message Now",
      "tp-contact-item-p": "Contact us for more information and we will be happy to assist you",
      "tp-contact-item-h4": "Location",
      /* form */ 
      "tp-form-name": "Name",
      "tp-form-email": "Email",
      "tp-form-message": "Message",
      "tp-form-submit": "Submit",
      "tp-btn-send":"Send",
      /* footer */ 
      "tp-footer-contact-title": "Contact",
      "tp-footer-contact-p": "Weston \u2013 Florida United States  Medell\xedn - Antioquia  Colombia"
  }; /*
  "Hello World": "Hello World",
      "Welcome, User": "Welcome, %{name}!",
      "You have ### wolfs":
        "You have %{smart_count} wolf 🐺 |||| You have %{smart_count} wolves 🐺",
      "Warning USER, winter is coming to LOCATION":
        "⚠️ Warning %{name}, winter is coming to %{location} ⚠️"
  */ 
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
  exports.interopDefault = function(a) {
      return a && a.__esModule ? a : {
          default: a
      };
  };
  exports.defineInteropFlag = function(a) {
      Object.defineProperty(a, "__esModule", {
          value: true
      });
  };
  exports.exportAll = function(source, dest) {
      Object.keys(source).forEach(function(key) {
          if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
          Object.defineProperty(dest, key, {
              enumerable: true,
              get: function() {
                  return source[key];
              }
          });
      });
      return dest;
  };
  exports.export = function(dest, destName, get) {
      Object.defineProperty(dest, destName, {
          enumerable: true,
          get: get
      });
  };
  
  },{}],"jWmdd":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  exports.default = {
      "tp_menu_1": "MyFit",
      "tp_menu_2": "NOSOTROS",
      "tp_menu_3": "SERVICIOS",
      "tp_menu_4": "CONT\xc1CTANOS",
      "tp-bn-h4-1": "SOLUCIONES PERSONALIZADAS",
      "tp-bn-h4-2": "IMPULSAMOS TU CRECIMIENTO",
      "tp-bn-h4-3": "UN EQUIPO ALTAMENTE CALIFICADO",
      "tp-bn-p-1": "Que impulsan la eficiencia, productividad <br> y creciminento de tu empresa.",
      "tp-bn-p-2": "Creamos valor a trav\xe9s de nuestras tres  l\xedneas de servicios.",
      "tp-bn-p-3": "Tus proyectos se completar\xe1n de manera oportuna y con los m\xe1s altos est\xe1ndares de calidad.",
      "tp-btn": "VER M\xc1S",
      "tp-form-1": "\xa1Solicita una llamada ahora mismo!",
      "tp-txt-form": "Con gusto te atenderemos",
      "tp-service-hd-title": "Nuestros Servicios",
      "tp-service-hd-span": "Impulsamos tu crecimineto y creamos valor a tr\xe1ves de nuestras tres lineas de servicio",
      "tp-service-hd-title-1": "Consultor\xeda Y Gesti\xf3n",
      "tp-service-hd-title-2": "Outsourcing",
      "tp-service-hd-title-3": "Staffing",
      "tp-hd-more-info-title": "Qui\xe9nes somos",
      "tp-hd-more-info-p": "Tras a\xf1os liderando procesos ejecutivos, estrat\xe9gicos y financieros en m\xfaltiples organizaciones de diversos sectores, aprendimos a identificar y abordar las necesidades reales a las que se enfrentan las empresas para acelerar su crecimiento. Fundamos 3 Pinos para compartir el conocimiento y las lecciones aprendidas con empresas en crecimiento que necesitan avanzar al siguiente nivel.",
      "tp-conf-title": "Conf\xedan en nosotros",
      "tp-callback-title": "Solicitar una llamada",
      "tp-callback-p": "Con gusto nos pondremos en contacto contigo",
      "tp-btn-contact-bn": "Cont\xe1ctanos",
      /* fin index*/ 
      /* about */ 
      "tp-more-info-title": "Quienes somos",
      "tp-more-info-p": "Tras a\xf1os liderando procesos ejecutivos, estrat\xe9gicos y financieros en m\xfaltiples organizaciones de diversos sectores, aprendimos a identificar y abordar las necesidades reales a las que se enfrentan las empresas para acelerar su crecimiento.  Fundamos 3 Pinos para compartir el conocimiento y las lecciones aprendidas con empresas en crecimiento que necesitan avanzar al siguiente nivel. Proporcionamos soluciones personalizadas que optimizan la eficiencia y la eficacia de los procesos empresariales. Nuestra misi\xf3n es impulsar el crecimiento y el \xe9xito de las empresas a trav\xe9s de un enfoque integral centrado en sus necesidades espec\xedficas. Aspiramos a ser reconocidos como el socio estrat\xe9gico de confianza, distinguidos por nuestra excelencia en la prestaci\xf3n de servicios de consultor\xeda\xa0y\xa0gesti\xf3n. ",
      "tp-team-section-heading-title": "Miembros del equipo",
      "tp-team-section-heading-span": "Equipo altamente calificado",
      "tp-team-item-h4-1": "Mauricio Vasquez Barrera",
      "tp-team-item-span-1": "Socio / Fundador",
      "tp-team-item-p-1": "Experimentado en gesti\xf3n financiera y estrat\xe9gica actuando como gerente financiero, gerente de estrategia y gerente general en empresas en el sector financiero y en el sector real. Formado en Ingenier\xeda Administrativa (Universidad EIA), Especialista en Finanzas Corporativas (Universidad EIA), Magister en Econom\xeda Aplicada (Universidad EAFIT).",
      "tp-team-item-h4-2": "Laura Jim\xe9nez Pulido",
      "tp-team-item-span-2": "Socia / Fundadora",
      "tp-team-item-p-2": "Amplia trayectoria en el sector Retail con responsabilidades en \xe1reas de log\xedstica, financieras y gerencia de cuentas clave en multinacionales. Formada en Ingenier\xeda Industrial (Universidad EIA), Especialista en Econom\xeda (Universidad de los Andes), Magister en Econom\xeda Aplicada (Universidad EAFIT).",
      "tp-team-item-h4-3": "Andres Valencia Trujillo",
      "tp-team-item-span-3": "Asociado",
      "tp-team-item-p-3": "Con experiencia en consultor\xeda y ejecuci\xf3n financiera, dise\xf1o y optimizaci\xf3n de procesos y gerencia en compa\xf1\xedas BPO. Formado en Finanzas y Relaciones Internacionales (Universidad Externado de Colombia), Especialista en Finanzas Corporativas\xa0(CESA).",
      /* services */ 
      "tp-single-services-title-h1": "Nuestros Servicios",
      "tp-single-services-title-1": "Consultor\xeda y Gesti\xf3n",
      "tp-single-services-title-2": "Outsourcing",
      "tp-single-services-title-3": "Staffing", 
      "tp-single-services-tab-1-li-1": "Dise\xf1o de estructura corporativa",
      "tp-single-services-tab-1-li-2": "Desarrollo de la estrategia",
      "tp-single-services-tab-1-li-3": "Control y Gesti\xf3n estrat\xe9gica",
      "tp-single-services-tab-1-li-4": "Dise\xf1o de procesos y KPIS",
      "tp-single-services-tab-1-li-5": "Planeaci\xf3n Financiera",
      "tp-single-services-tab-1-li-6": "Dise\xf1o y control de presupuestos",
      "tp-single-services-tab-1-li-7": "Dise\xf1o estructural e implementaci\xf3n de ERP",
      "tp-single-services-tab-2-li-1": "Direcci\xf3n financiera",
      "tp-single-services-tab-2-li-2": "Contabilidad y Bookkeeping bajo normas NIIF en Colombia y US GAAP en USA",
      "tp-single-services-tab-2-li-3": "Digitaci\xf3n",
      "tp-single-services-tab-2-li-4": "Administraci\xf3n de n\xf3mina",
      "tp-single-services-tab-2-li-5": "Compras",
      "tp-single-services-tab-3-li-1": "Planeaci\xf3n financiera",
      "tp-single-services-tab-3-li-2": "Contabilidad",
      "tp-single-services-tab-3-li-3": "Log\xedstica",
      /*  Contact  */ 
      "tp-contact-title": "Cont\xe1ctanos",
      "tp-contact-span": "NO DUDES EN ENVIARNOS UN MENSAJE AHORA",
      "tp-contact-item-p": "Cont\xe1ctanos para m\xe1s informaci\xf3n y con gusto te atenderemos",
      "tp-contact-item-h4": "Ubicaci\xf3n",
      /* form */ 
      "tp-form-name": "nombre",
      "tp-form-email": "Correo",
      "tp-form-message": "Mensaje",
      "tp-form-submit": "Asunto",
      "tp-btn-send":"Enviar",
      /* footer */ 
      "tp-footer-contact-title": "Contacto",
      "tp-footer-contact-p": "Weston \u2013 Florida United States  Medell\xedn - Antioquia  Colombia"
  }; /*
  "Hello World": "Hello World",
      "Welcome, User": "Welcome, %{name}!",
      "You have ### wolfs":
        "You have %{smart_count} wolf 🐺 |||| You have %{smart_count} wolves 🐺",
      "Warning USER, winter is coming to LOCATION":
        "⚠️ Warning %{name}, winter is coming to %{location} ⚠️"
  */ 
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3Z3vu","6Ai1m"], "6Ai1m", "parcelRequiref957")
  
  //# sourceMappingURL=index.8e127e5a.js.map
  