<template>
	<view>
		<!-- Number柱状图Compent1 -->
		<view>
			<histogram-chart ref="histogramData0" :dataAs="histogramData" canvasId="ht0" />
			<view style="text-align: center;line-height: 40px;">柱状图histogram Number</view>
			<button @click="changeHistogramData">改变柱状图数据</button>
		</view>

		<!-- 百分比柱状图Compent2 -->
		<view>
			<histogram-chart :dataAs="histogramData2" ref="histogramData1" canvasId="ht1" labelKey="label"
				valueKey="value" :yAxisAs="{
					formatter: {
						type: 'percent' //type:number percent String,额外参数:fixed:NUmber,name:String
					}
				}" />
			<view style="text-align: center;line-height: 40px;">柱状图histogram percent</view>
		</view>

		<!-- 柱状图Compent extra拓展 -->
		<view>
			<histogram-chart :dataAs="histogramData3" ref="histogramData2" canvasId="ht3" :extraAs="{
					extra: {
						column: {
							type: 'stack',
							width: 20
						}
					}
				}" />
			<view style="text-align: center;line-height: 40px;">柱状图histogram extra拓展</view>
		</view>

		<!-- 圆环arcbar -->
		<view>
			<view class="arcbar">
				<block v-for="(item, index) in arcbarList" :key="index">
					<arcbar-chart :canvasId="`index_arcbar_${index}`" :ref="`arcbar${index}`" :dataAs="item" :basicAs="{
							colors: ['#ff7600']
						}" />
				</block>
			</view>
			<view style="text-align: center;line-height: 40px;">圆环arcbar</view>
		</view>

		<!-- 折线Line带百分比 -->
		<view class="line">
			<line-chart canvasId="index_line_1" ref="lineData1" :dataAs="lineData" :yAxisAs="{
					formatter: {
						type: 'percent', //type:number percent String,额外参数:fixed:NUmber,name:String
						fixed: 2
					}
				}" />
			<view style="text-align: center;line-height: 40px;">折线LineChart percent</view>
			<button @click="changeLineData">改变折线图数据</button>
		</view>

		<!-- 折线Line纯数字-->
		<view class="line">
			<line-chart ref="lineData2" canvasId="index_line_2" :dataAs="lineData2" />
			<view style="text-align: center;line-height: 40px;">折线LineChart Number</view>
		</view>

		<!-- 饼状图 -->
		<view class="pie_chart">
			<pie-chart ref="pieChart0" :dataAs="pieData" canvasId="index_pie_1" />
			<view style="text-align: center;line-height: 40px;">饼状图PieChart</view>
			<button @click="changePieData">改变饼状图数据</button>
		</view>

		<!-- 环状图 -->
		<view class="ring_chart">
			<ring-chart :dataAs="pieData" ref="ringChart0" canvasId="index_ring_1" :titleAs="{
					title: {
						name: '一年级'
					},
					subtitle: {
						name: '70%'
					}
				}" />
			<view style="text-align: center;line-height: 40px;">环状图 RingChart</view>
			<button @click="changeRingData">改变环状图数据</button>
		</view>
	</view>
</template>

<script>
	import HistogramChart from '@/components/stan-ucharts/HistogramChart.vue';
	import ArcbarChart from '@/components/stan-ucharts/ArcbarChart.vue';
	import LineChart from '@/components/stan-ucharts/LineChart.vue';
	import PieChart from '@/components/stan-ucharts/PieChart.vue';
	import RingChart from '@/components/stan-ucharts/RingChart.vue';
	export default {
		name: 'Index',
		components: {
			HistogramChart,
			ArcbarChart,
			LineChart,
			PieChart,
			RingChart
		},
		data() {
			return {
				histogramData: {
					//总模板
					categories: ['2042', '2013', '2014', '2015', '2016', '2017', '2018'],
					series: [{
							name: '成交量1', //数据名称
							data: [
								15,
								{
									//(饼图、圆环图、玫瑰图为Number) 数据，如果传入null图表该处出现断点
									value: 20, //	仅针对柱状图有效，主要作用为柱状图显示数值
									// color: '#f04864' //仅针对柱状图有效，主要作用为柱状图自定义颜色,可覆盖外框定义主题颜色
								},
								45,
								37,
								43,
								34,
								45
							],
							show: true, //图形显示状态，配合点击图例显示状态，也可默认指定是否显示
							// color: '#FF7600', //	图形颜色 不传入则使用系统默认配色方案 即统一柱状图颜色
							textSize: 12 //图形上方标注文字的字体大小
							//如涉及混合图表请看 http://doc.ucharts.cn/1172126
						},
						{
							name: '成交量2',
							data: [
								30,
								{
									value: 40,
									// color: '#facc14'
								},
								25,
								14,
								34,
								18,
								20
							]
						}
					]
				},
				histogramData2: {
					//柱状图Compent  //label应为series value 应为
					label: ['2052', '2013', '2014', '2015', '2016', '2017', '2018'],
					value: [{
						name: 'labelKey改变',
						data: [0.3, 0.2, 0.5, 0.4, 0.3, 0.1, 0.2]
					}]
				},
				histogramData3: {
					//柱状标准图
					categories: ['2013', '2014', '2015', '2016', '2017', '2018'],
					series: [{
							name: '类别一',
							data: [35, 36, 31, 33, 13, 34]
						},
						{
							name: '类别二',
							data: [18, 27, 21, 24, 6, 28]
						},
						{
							name: '类别三',
							data: [18, 27, 21, 24, 6, 28]
						}
					]
				},
				arcbarList: [
					//圆环
					{
						series: [{
							name: '正确率',
							data: 0.2912
						}]
					},
					{
						series: [{
							name: '错误率',
							data: 0.6921
						}]
					},
					{
						series: [{
							name: '失误率',
							data: 0.8232
						}]
					}
				],
				lineData: {
					//带百分比的图--折线图数据
					categories: ['20111', '2013', '2014', '2015', '2016', '2017'],
					series: [{
						name: '成交量B',
						data: [0.7, 0.4, 0.65, 0.1, 0.44, 0.68]
					}, {
						name: '成交量C',
						data: [0.1, 0.8, 0.95, 0.15, 0.112, 0.132]
					}]
				},
				lineData2: {
					//数字的图--折线图数据
					categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
					series: [{
							name: '成交量A',
							data: [35, 8, 25, 37, 4, 20]
						},
						{
							name: '成交量B',
							data: [70, 40, 65, 100, 44, 68]
						},
						{
							name: '成交量C',
							data: [100, 80, 95, 150, 112, 132]
						}
					]
				},
				pieData: {
					//饼状图数据
					series: [{
							name: '一班',
							data: 50
						},
						{
							name: '二班',
							data: 30
						},
						{
							name: '三班',
							data: 20
						},
						{
							name: '四班',
							data: 18
						},
						{
							name: '五班',
							data: 8
						}
					]
				}
			};
		},
		methods: {
			//改变柱状图数据
			changeHistogramData() {
				let categories = ['20111', '2013', '2014', '2015', '2016', '2017'];
				let series = [{
					name: '成交量A',
					data: [200, 233, 25, 370, 400, 200]
				}];
				this.$refs['histogramData0'].changeData({
					series,
					categories
				});
			},
			//改变折线图数据
			changeLineData() {
				let categories = ['20111', '2013', '2014', '2015', '2016', '2017'];
				let series = [{
					name: '成交量A',
					data: [0.3511, 0.8233, 0.25, 0.37, 0.4, 0.2]
				}];
				this.$refs['lineData1'].changeData({
					series,
					categories
				});
			},
			//改变饼状图数据
			changePieData() {
				let series = [{
					name: '一班',
					data: 150
				}, {
					name: '二班',
					data: 130
				}, {
					name: '三班',
					data: 120
				}, {
					name: '四班',
					data: 182
				}, {
					name: '五班',
					data: 83
				}];
				this.$refs['pieChart0'].changeData(series);
			},
			//改变环状图数据
			changeRingData() {
				let series = [{
					name: '一班',
					data: 150
				}, {
					name: '二班',
					data: 130
				}, {
					name: '三班',
					data: 120
				}, {
					name: '四班',
					data: 182
				}, {
					name: '五班',
					data: 83
				}];
				this.$refs['ringChart0'].changeData(series);
			},
			getServerData() {
				//模拟ajax调用
				// uni.request({
				// 	url: 'https://www.easy-mock.com/mock/5cc586b64fc5576cba3d647b/uni-wx-charts/chartsdata2',
				// 	data: {},
				// 	success: function(res) {
				// 		console.log(res.data.data);
				// 		let serverData = res.data.data;
				// 		this.$set(this.lineData, 'categories', serverData.Column.categories);
				// 		this.$set(this.lineData, 'series', serverData.Column.series);
				// 		this.$refs['lineData1'].showCharts();
				// 	},
				// 	fail: () => {
				// 		console.log('网络错误');
				// 	}
				// });
				setTimeout(() => {
					//延迟模拟ajax嗲用后台数据
					let categories = ['20111', '2013', '2014', '2015', '2016', '2017'];
					let series = [{
						name: '成交量A',
						data: [0.8511, 0.233, 0.125, 0.437, 0.48, 0.1234]
					}];
					this.$set(this.lineData, 'categories', categories);
					this.$set(this.lineData, 'series', series);
					this.$refs['lineData1'].showCharts();
				}, 1000);
			}
		},
		created() {
			this.$nextTick(() => {
				//柱状图
				this.$refs['histogramData0'].showCharts();
				this.$refs['histogramData1'].showCharts();
				this.$refs['histogramData2'].showCharts();
				//圆环(注意循环可能会导致出现下面情况,请更具实际情况作出判断// console.log(this.$refs);)
				this.$refs['arcbar0'][0].showCharts();
				this.$refs['arcbar1'][0].showCharts();
				this.$refs['arcbar2'][0].showCharts();
				// 饼状图
				this.$refs['pieChart0'].showCharts();
				// 环状图
				this.$refs['ringChart0'].showCharts();
				//折线图
				this.$refs['lineData2'].showCharts();
			});
			//ajax调用
			this.getServerData();
		}
	};
</script>

<style scoped>
	.arcbar {
		display: flex;
	}
</style>
