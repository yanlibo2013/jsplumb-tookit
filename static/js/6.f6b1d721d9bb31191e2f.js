webpackJsonp([6],{"+VnV":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("0jG4"),o=(a("NYxO"),{components:{},data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}]}},computed:{},mounted:function(){var e=this;n.a.dataFlow().then(function(t){e.tableData=t.data.content})},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{handleClick:function(e){console.log(e)},tableRowClassName:function(e){e.row;var t=e.rowIndex;return 1===t?"warning-row":3===t?"success-row":""},handleEdit:function(e){this.$router.push({path:"/layout/flow/flowchart",query:{type:e}})}}}),r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dataflow"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{prop:"name",label:"名称",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"editName",on:{click:function(a){return e.handleEdit(t.row.flowType)}}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"flowType",label:"类型",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"lastModifiedTime",label:"修改时间"}})],1)],1)},staticRenderFns:[]};var l=a("VU/8")(o,r,!1,function(e){a("bevh")},null,null);t.default=l.exports},bevh:function(e,t){}});
//# sourceMappingURL=6.f6b1d721d9bb31191e2f.js.map