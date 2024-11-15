(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{401:function(n,o,t){"use strict";t.r(o);var a=t(7),r=Object(a.a)({},(function(){var n=this._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"pan-region"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pan-region"}},[this._v("#")]),this._v(" Pan Region")]),this._v(" "),n("p",[this._v("In this example pan is only accepted at the middle region (50%) of the chart. This region is highlighted by a red border.")]),this._v(" "),n("chart-editor",{attrs:{code:"// <block:data:1>\nconst NUMBER_CFG = {count: 20, min: -100, max: 100};\nconst data = {\n  datasets: [{\n    label: 'My First dataset',\n    borderColor: Utils.randomColor(0.4),\n    backgroundColor: Utils.randomColor(0.1),\n    pointBorderColor: Utils.randomColor(0.7),\n    pointBackgroundColor: Utils.randomColor(0.5),\n    pointBorderWidth: 1,\n    data: Utils.points(NUMBER_CFG),\n  }, {\n    label: 'My Second dataset',\n    borderColor: Utils.randomColor(0.4),\n    backgroundColor: Utils.randomColor(0.1),\n    pointBorderColor: Utils.randomColor(0.7),\n    pointBackgroundColor: Utils.randomColor(0.5),\n    pointBorderWidth: 1,\n    data: Utils.points(NUMBER_CFG),\n  }]\n};\n// </block:data>\n\n// <block:scales:2>\nconst scaleOpts = {\n  ticks: {\n    callback: (val, index, ticks) => index === 0 || index === ticks.length - 1 ? null : val,\n  },\n  grid: {\n    borderColor: Utils.randomColor(1),\n    color: 'rgba( 0, 0, 0, 0.1)',\n  },\n  title: {\n    display: true,\n    text: (ctx) => ctx.scale.axis + ' axis',\n  }\n};\nconst scales = {\n  x: {\n    position: 'top',\n  },\n  y: {\n    position: 'right',\n  },\n};\nObject.keys(scales).forEach(scale => Object.assign(scales[scale], scaleOpts));\n// </block:scales>\n\n// <block:zoom:0>\nconst zoomOptions = {\n  limits: {\n    x: {min: -200, max: 200, minRange: 50},\n    y: {min: -200, max: 200, minRange: 50}\n  },\n  pan: {\n    enabled: true,\n    onPanStart({chart, point}) {\n      const area = chart.chartArea;\n      const w25 = area.width * 0.25;\n      const h25 = area.height * 0.25;\n      if (point.x < area.left + w25 || point.x > area.right - w25\n        || point.y < area.top + h25 || point.y > area.bottom - h25) {\n        return false; // abort\n      }\n    },\n    mode: 'xy',\n  },\n  zoom: {\n    wheel: {\n      enabled: false,\n    },\n    pinch: {\n      enabled: true\n    },\n  }\n};\n// </block:zoom>\n\n// <block:border:3>\nconst borderPlugin = {\n  id: 'panAreaBorder',\n  beforeDraw(chart, args, options) {\n    const {ctx, chartArea: {left, top, width, height}} = chart;\n    ctx.save();\n    ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';\n    ctx.lineWidth = 1;\n    ctx.strokeRect(left + width * 0.25, top + height * 0.25, width / 2, height / 2);\n    ctx.restore();\n  }\n};\n// </block:border>\n\n// <block:config:1>\nconst config = {\n  type: 'scatter',\n  data: data,\n  options: {\n    scales: scales,\n    plugins: {\n      zoom: zoomOptions,\n    },\n  },\n  plugins: [borderPlugin]\n};\n// </block:config>\n\nmodule.exports = {\n  config,\n};\n"}})],1)}),[],!1,null,null,null);o.default=r.exports}}]);