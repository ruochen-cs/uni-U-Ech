(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/stan-ucharts/LineChart"],{

/***/ 53:
/*!*************************************************************************!*\
  !*** D:/网页/uniapp_ucharts-master/components/stan-ucharts/LineChart.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineChart_vue_vue_type_template_id_383ae0be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=template&id=383ae0be& */ 54);
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js& */ 56);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LineChart_vue_vue_type_template_id_383ae0be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LineChart_vue_vue_type_template_id_383ae0be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _LineChart_vue_vue_type_template_id_383ae0be___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/stan-ucharts/LineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/*!********************************************************************************************************!*\
  !*** D:/网页/uniapp_ucharts-master/components/stan-ucharts/LineChart.vue?vue&type=template&id=383ae0be& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LineChart_vue_vue_type_template_id_383ae0be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./LineChart.vue?vue&type=template&id=383ae0be& */ 55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LineChart_vue_vue_type_template_id_383ae0be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LineChart_vue_vue_type_template_id_383ae0be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LineChart_vue_vue_type_template_id_383ae0be___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LineChart_vue_vue_type_template_id_383ae0be___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 55:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/网页/uniapp_ucharts-master/components/stan-ucharts/LineChart.vue?vue&type=template&id=383ae0be& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 56:
/*!**************************************************************************************************!*\
  !*** D:/网页/uniapp_ucharts-master/components/stan-ucharts/LineChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./LineChart.vue?vue&type=script&lang=js& */ 57);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 57:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/网页/uniapp_ucharts-master/components/stan-ucharts/LineChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uCharts = _interopRequireDefault(__webpack_require__(/*! @/plugins/stan-ucharts/u-charts/u-charts.js */ 46));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//可以优化放全局 uCharts ==>使用全局
var lineCharts = {},
  optionAs = {};
var _default2 = {
  name: 'LineChart',
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
    xAxisAs: {
      //xAxis YAxis等轴线基础设置(圆环饼图无轴线无需设置)
      type: Object,
      default: function _default() {
        return {};
      }
    },
    yAxisAs: {
      //xAxis YAxis等轴线基础设置(圆环饼图无轴线无需设置)
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
      default: 750
    },
    height: {
      //图标高度
      type: Number,
      default: 500
    },
    labelKey: {
      type: String,
      default: 'categories'
    },
    valueKey: {
      type: String,
      default: 'series'
    },
    canvasId: {
      type: String,
      default: "line_canvas_".concat(Math.ceil(Math.random(5) * 10000))
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
      var _this = this;
      var defaultOption = {
        //通用基础项设置 basicAs
        $this: this,
        //this实例组件内使用图表，必须传入this实例
        canvasId: this.canvasId,
        //页面组件canvas-id，支付宝中为id
        type: 'line',
        //图表类型，可选值为pie、line、column、area、ring、radar、arcbar、gauge、candle、bar、mix、rose、word
        padding: [15, 15, 0, 15],
        //画布填充边距，顺序为上右下左，同css，但必须4位
        colors: ['#1890ff', '#2fc25b', '#facc14', '#f04864', '#8543e0', '#90ed7d'],
        //图表配色方案，不传则使用系统默认配置
        rotate: false,
        //是否横屏展示
        rotateLock: true,
        //	锁定横屏模式，如果在支付宝和百度小程序中使用横屏模式，请赋值true，否则每次都会旋转90度。跨端使用通过uni-app的条件编译来赋值
        enableScroll: true,
        //是否开启图表可拖拽滚动 默认false 支持line, area, column, candle图表类型(需配合绑定@touchstart, @touchmove, @touchend方法)
        enableMarkLine: false,
        //是否显示辅助线 默认false 支持line, area, column, candle, mix图表类型
        animation: true,
        //是否动画展示
        dataLabel: true,
        //是否在图表中显示数据标签内容值
        dataPointShape: true,
        duration: 1000,
        //动画展示时长单位毫秒
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
        categories: this.dataAs[this.labelKey],
        //数据类别(饼图、圆环图不需要)
        series: this.dataAs[this.valueKey],
        //数据列表

        //坐标轴配置项 axisAs
        xAxis: {
          //	X轴配置
          type: 'grid',
          rotateLabel: true,
          //X轴刻度（数值）标签是否旋转（仅在文案超过单屏宽度时有效）
          itemCount: 5,
          //X轴可见区域数据数量（即X轴数据密度），配合拖拽滚动使用（即仅在启用enableScroll时有效）
          // labelCount:Number,//X轴可见区域标签数量（即X轴数刻度标签单屏幕限制显示的数量）
          scrollShow: true,
          //是否显示滚动条，配合拖拽滚动使用（即仅在启用enableScroll时有效）
          scrollAlign: 'left',
          //滚动条初始位置，left为数据整体左对齐，right为右对齐
          scrollBackgroundColor: '#EFEBEF',
          //	X轴滚动条背景颜色，配合拖拽滚动使用（即仅在启用enableScroll时有效）
          scrollColor: '#A6A6A6',
          //X轴滚动条颜色，配合拖拽滚动使用（即仅在启用enableScroll时有效）
          disabled: false,
          //不绘制X轴
          disableGrid: true,
          //不绘制X轴网格(即默认绘制网格)
          calibration: true,
          //坐标轴刻度线是否显示 注v1.9.0有效
          gridColor: '#cccccc',
          //X轴网格颜色 例如#7cb5ec
          gridType: 'dash',
          //	X轴网格线型 'solid'为实线、'dash'为虚线`
          gridEval: 1,
          //X轴网格线显示间隔，即假设为2时，是隔一个刻度显示间隔
          dashLength: 4,
          //X轴网格为虚线时，单段虚线长度
          fontColor: '#666666',
          //X轴数据点颜色
          boundaryGap: 'center',
          //折线图、区域图起画点结束点方法：center为单元格中间起画，justify为0点起画即两端对齐
          axisLine: false,
          //坐标轴轴线是否显示
          axisLineColor: '#cccccc' //坐标轴轴线颜色
          // splitNumber:Number
        },

        yAxis: {
          //如果是多坐标系则传数组型对象[{disabled:true},{disabled:false}]
          disabled: false,
          //不绘制Y轴
          position: 'left',
          //Y轴位置，可选值左侧left右侧right(未起效果)
          format: function format(val) {
            var defaultSetting = {
              type: 'number',
              fixed: 0,
              name: ''
            };
            var _ref = _this.yAxisAs && _this.yAxisAs.formatter ? Object.assign(defaultSetting, _this.yAxisAs.formatter) : defaultSetting,
              type = _ref.type,
              fixed = _ref.fixed,
              name = _ref.name;
            if (type == 'number') {
              return val.toFixed(fixed) + name;
            } else if (type == 'percent') {
              var newName = name || '%';
              return (val * 100).toFixed(fixed) + newName;
            } else {
              return val.toFixed(0);
            }
          }
          // title:'Y轴标题',//Y轴标题
          // titleFontSize:basic.fontSize titleFontColor==>#666666 fontColor==>666666 Y轴数据点颜色 fontSizeY轴数据标签字体大小 等详见http://doc.ucharts.cn/1172128
        },

        //图列配置 legendAs
        legend: {
          show: true,
          //是否显示各类别的图例标识
          position: 'top',
          float: 'left',
          padding: 10,
          margin: 0
          // itemGap:10,//各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
          // fontColor:'666666',
          // lineHeight:17,//默认opts.fontSize+5
          // fontSize:12,//默认opts.fontSize
          // backgroundColor:rgba(0,0,0,0),//图例背景颜色
          // borderColor:rgba(0,0,0,0),//图例边框颜色
          // format:()=>{}//未来预留，暂未生效】自定义显示数据内容
        },

        //扩展配置 extraAs 详情请看 http://doc.ucharts.cn/1172130
        extra: {
          line: {
            type: 'straight'
          }
        }
      };
      optionAs[this.canvasId] = Object.assign(defaultOption, this.basicAs, this.xAxisAs, this.yAxisAs, this.legendAs, this.extraAs);
      lineCharts[this.canvasId] = new _uCharts.default(optionAs[this.canvasId]);
    },
    touchstart: function touchstart(e) {
      var that = this;
      lineCharts[this.canvasId].touchLegend(e, {
        animation: false
      });
      lineCharts[this.canvasId].scrollStart(e);
      lineCharts[this.canvasId].showToolTip(e, {
        //修改点击事弹出文字
        format: function format(item, category) {
          var defaultSetting = {
            type: 'number',
            fixed: 0,
            name: ''
          };
          var newName;
          var _ref2 = that.yAxisAs && that.yAxisAs.formatter ? Object.assign(defaultSetting, that.yAxisAs.formatter) : defaultSetting,
            type = _ref2.type,
            fixed = _ref2.fixed,
            name = _ref2.name;
          if ((0, _typeof2.default)(item.data) === 'object') {
            if (type == 'number') {
              return "".concat(category, " ").concat(item.name, ":").concat(item.data.value.toFixed(fixed)).concat(name);
            } else if (type == 'percent') {
              newName = name || '%';
              return "".concat(category, " ").concat(item.name, ":").concat((item.data.value * 100).toFixed(fixed)).concat(newName);
            } else {
              return "".concat(category, " ").concat(item.name, ":").concat(item.data.value);
            }
          } else {
            if (type == 'number') {
              return "".concat(category, " ").concat(item.name, ":").concat(item.data.toFixed(fixed)).concat(name);
            } else if (type == 'percent') {
              newName = name || '%';
              return "".concat(category, " ").concat(item.name, ":").concat((item.data * 100).toFixed(fixed)).concat(newName);
            } else {
              return "".concat(category, " ").concat(item.name, ":").concat(item.data);
            }
          }
        }
      });
    },
    touchmove: function touchmove(e) {
      lineCharts[this.canvasId].scroll(e);
    },
    touchend: function touchend(e) {
      lineCharts[this.canvasId].scrollEnd(e);
    },
    changeData: function changeData(_ref3) {
      var series = _ref3.series,
        categories = _ref3.categories;
      lineCharts[this.canvasId].updateData({
        series: series,
        categories: categories
      });
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/stan-ucharts/LineChart.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/stan-ucharts/LineChart-create-component',
    {
        'components/stan-ucharts/LineChart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(53))
        })
    },
    [['components/stan-ucharts/LineChart-create-component']]
]);
