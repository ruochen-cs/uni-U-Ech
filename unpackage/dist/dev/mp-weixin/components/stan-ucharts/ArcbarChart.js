(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/stan-ucharts/ArcbarChart"],{

/***/ 48:
/*!***************************************************************************!*\
  !*** D:/网页/uniapp_ucharts-master/components/stan-ucharts/ArcbarChart.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArcbarChart_vue_vue_type_template_id_48b711f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArcbarChart.vue?vue&type=template&id=48b711f4& */ 49);
/* harmony import */ var _ArcbarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArcbarChart.vue?vue&type=script&lang=js& */ 51);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ArcbarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ArcbarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ArcbarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArcbarChart_vue_vue_type_template_id_48b711f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ArcbarChart_vue_vue_type_template_id_48b711f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _ArcbarChart_vue_vue_type_template_id_48b711f4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/stan-ucharts/ArcbarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 49:
/*!**********************************************************************************************************!*\
  !*** D:/网页/uniapp_ucharts-master/components/stan-ucharts/ArcbarChart.vue?vue&type=template&id=48b711f4& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ArcbarChart_vue_vue_type_template_id_48b711f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ArcbarChart.vue?vue&type=template&id=48b711f4& */ 50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ArcbarChart_vue_vue_type_template_id_48b711f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ArcbarChart_vue_vue_type_template_id_48b711f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ArcbarChart_vue_vue_type_template_id_48b711f4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ArcbarChart_vue_vue_type_template_id_48b711f4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 50:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/网页/uniapp_ucharts-master/components/stan-ucharts/ArcbarChart.vue?vue&type=template&id=48b711f4& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 51:
/*!****************************************************************************************************!*\
  !*** D:/网页/uniapp_ucharts-master/components/stan-ucharts/ArcbarChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ArcbarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ArcbarChart.vue?vue&type=script&lang=js& */ 52);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ArcbarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ArcbarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ArcbarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ArcbarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ArcbarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 52:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/网页/uniapp_ucharts-master/components/stan-ucharts/ArcbarChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uCharts = _interopRequireDefault(__webpack_require__(/*! @/plugins/stan-ucharts/u-charts/u-charts.js */ 46));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
//可以优化放全局 uCharts ==>使用全局
var arcbarCharts = {},
  optionAs = {};
var _default2 = {
  name: 'ArcbarChart',
  props: {
    dataAs: {
      //数据
      type: Object,
      default: function _default() {
        return {};
      }
    },
    basicAs: {
      ////通用基础项设置
      type: Object,
      default: function _default() {
        return {};
      }
    },
    titleAs: {
      //只适用于适用于ring 环形、arcbar 弧线、gauge
      type: Object,
      default: function _default() {
        return {};
      }
    },
    legendAs: {
      //图例设置
      type: Object,
      default: function _default() {
        return {};
      }
    },
    extraAs: {
      //详情请看 http://doc.ucharts.cn/1172130
      type: Object,
      default: function _default() {
        return {};
      }
    },
    width: {
      //图标宽度
      type: Number,
      default: 250
    },
    height: {
      //图标高度
      type: Number,
      default: 250
    },
    valueKey: {
      type: String,
      default: 'series'
    },
    canvasId: {
      type: String,
      default: "arcbar_canvas_".concat(Math.ceil(Math.random(5) * 10000))
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    cWidth: function cWidth() {
      return uni.upx2px(this.width);
    },
    cHeight: function cHeight() {
      return uni.upx2px(this.height);
    }
  },
  methods: {
    showCharts: function showCharts() {
      var colors = ['#facc14', '#2fc25b', '#f04864', '#8543e0', '#90ed7d', '#ff7600'].sort(function () {
        return Math.random() - 0.5;
      });
      var defaultOption = {
        //通用基础项设置 basicAs
        $this: this,
        //this实例组件内使用图表，必须传入this实例
        canvasId: this.canvasId,
        //页面组件canvas-id，支付宝中为id
        type: 'arcbar',
        //图表类型，可选值为pie、line、column、area、ring、radar、arcbar、gauge、candle、bar、mix、rose、word
        padding: [15, 15, 0, 15],
        //画布填充边距，顺序为上右下左，同css，但必须4位
        colors: colors,
        //图表配色方案，不传则使用系统默认配置
        rotate: false,
        //是否横屏展示
        rotateLock: true,
        //	锁定横屏模式，如果在支付宝和百度小程序中使用横屏模式，请赋值true，否则每次都会旋转90度。跨端使用通过uni-app的条件编译来赋值
        enableScroll: false,
        //是否开启图表可拖拽滚动 默认false 支持line, area, column, candle图表类型(需配合绑定@touchstart, @touchmove, @touchend方法)
        enableMarkLine: false,
        //是否显示辅助线 默认false 支持line, area, column, candle, mix图表类型
        animation: true,
        //是否动画展示
        duration: 1000,
        //动画展示时长单位毫秒
        dataLabel: true,
        //是否在图表中显示数据标签内容值
        fontSize: 12,
        //全局默认字体大小（可选，单位为px，默认13px）高分屏不必乘像素比，自动根据pixelRatio计算
        background: '#ffffff',
        //canvas背景颜色（如果页面背景颜色不是白色请设置为页面的背景颜色，默认#ffffff）无作用
        pixelRatio: 1,
        //像素比，默认为1，仅支付宝小程序需要大于1，其他平台必须为1
        width: this.cWidth,
        //canvas宽度，单位为px，支付宝高分屏需要乘像素比(pixelRatio)
        height: this.cHeight,
        //canvas高度，单位为px，支付宝高分屏需要乘像素比

        //数据列表配置项 dataAS
        series: this.dataAs[this.valueKey],
        //数据列表

        //titleAs
        title: {
          name: (this.dataAs[this.valueKey][0].data * 100).toFixed(0) + '%',
          color: this.basicAs.colors ? this.basicAs.colors[0] : colors[0]
        },
        subtitle: {
          name: this.dataAs[this.valueKey][0].name
        },
        //扩展配置 extraAs 详情请看 http://doc.ucharts.cn/1172130
        extra: {}
      };
      var propsData = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.basicAs), this.titleAs), this.legendAs), this.extraAs);
      optionAs[this.canvasId] = Object.assign(defaultOption, propsData);
      arcbarCharts[this.canvasId] = new _uCharts.default(optionAs[this.canvasId]);
    },
    changeData: function changeData(series) {
      arcbarCharts[this.canvasId].updateData({
        series: series
      });
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/stan-ucharts/ArcbarChart.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/stan-ucharts/ArcbarChart-create-component',
    {
        'components/stan-ucharts/ArcbarChart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(48))
        })
    },
    [['components/stan-ucharts/ArcbarChart-create-component']]
]);
