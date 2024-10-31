(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{658:function(v,_,t){"use strict";t.r(_);var d=t(14),a=Object(d.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"公共controller父类方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#公共controller父类方法"}},[v._v("#")]),v._v(" 公共Controller父类方法")]),v._v(" "),_("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),_("p",[v._v("公共Controller父类方法是一种基础的编程模式，它定义了一组标准的控制器方法，这些方法可以被其他控制器继承和重写。这种模式可以大大提高代码的复用性和一致性，简化开发过程，提高开发效率。")]),v._v(" "),_("p",[v._v("公共Controller父类方法主要包括数据封装、响应返回结果、成功和失败的AjaxResult返回、带消息的成功和失败的AjaxResult返回等方法。")]),v._v(" "),_("p",[v._v("此外，公共Controller父类还定义了一些公共的接口，如修改实体状态、查询状态正常列表、根据应用程序ID查询实体列表、根据租户ID查询实体列表、分页查询、保存实体、通过ID列表查询实体、通过ID删除实体、通过ID获取实体、更新实体、通过ID查询实体、实体数量统计、通过ID删除实体、修改实体状态、修改某字段的值、实体转换为Map对象、Map对象转换为实体等。")]),v._v(" "),_("h2",{attrs:{id:"你将获得"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#你将获得"}},[v._v("#")]),v._v(" 你将获得")]),v._v(" "),_("ol",[_("li",[v._v("代码复用性和一致性：公共Controller父类方法提供了一系列标准的控制器方法，这些方法可以被其他控制器继承和重写，从而实现代码的复用和保持项目代码的一致性。")]),v._v(" "),_("li",[v._v("提高开发效率：公共Controller父类方法已经封装了一些常用的操作，如数据封装、响应返回结果、操作实体等，这可以避免开发者重复编写相同的代码，从而节省开发时间，提高开发效率。")]),v._v(" "),_("li",[v._v("提供标准化的接口：公共Controller父类方法定义了一些公共的接口，这些接口提供了标准化的访问方式，使得前后端的交互更加方便和高效。")])]),v._v(" "),_("h2",{attrs:{id:"方法作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方法作用"}},[v._v("#")]),v._v(" 方法作用")]),v._v(" "),_("p",[v._v("公共Controller父类方法的作用主要有以下几点：")]),v._v(" "),_("ol",[_("li",[v._v("提供统一的数据处理方式：通过封装数据为AjaxResult，可以提供统一的数据处理方式，使得数据的处理更加简单和高效。")]),v._v(" "),_("li",[v._v("提供统一的响应返回方式：通过响应返回结果，可以提供统一的响应返回方式，使得前端可以更容易地处理和显示结果。")]),v._v(" "),_("li",[v._v("提供统一的实体操作接口：通过定义一些公共的实体操作接口，可以提供统一的实体操作方式，使得实体的操作更加简单和高效。")])]),v._v(" "),_("p",[v._v("通过这种方式，公共Controller父类方法可以大大简化开发过程，提高开发效率，同时也保证了代码的复用性和一致性。")]),v._v(" "),_("h2",{attrs:{id:"方法说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方法说明"}},[v._v("#")]),v._v(" 方法说明")]),v._v(" "),_("p",[v._v("以下是公共Controller父类方法的详细说明：")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("序号")]),v._v(" "),_("th",[v._v("方法名称")]),v._v(" "),_("th",[v._v("方法")]),v._v(" "),_("th",[v._v("方法参数")]),v._v(" "),_("th",[v._v("返回")]),v._v(" "),_("th",[v._v("作用")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("2")]),v._v(" "),_("td",[v._v("封装数据为AjaxResult")]),v._v(" "),_("td",[v._v("toAjax")]),v._v(" "),_("td",[v._v("data: 数据")]),v._v(" "),_("td",[v._v("AjaxResult: 封装后的AjaxResult")]),v._v(" "),_("td",[v._v("封装数据为AjaxResult")])]),v._v(" "),_("tr",[_("td",[v._v("3")]),v._v(" "),_("td",[v._v("响应返回结果(基于影响行数)")]),v._v(" "),_("td",[v._v("toAjax")]),v._v(" "),_("td",[v._v("rows: 影响行数")]),v._v(" "),_("td",[v._v("AjaxResult: 操作结果")]),v._v(" "),_("td",[v._v("根据影响的行数返回操作结果")])]),v._v(" "),_("tr",[_("td",[v._v("4")]),v._v(" "),_("td",[v._v("响应返回结果(基于结果布尔值)")]),v._v(" "),_("td",[v._v("toAjax")]),v._v(" "),_("td",[v._v("result: 结果")]),v._v(" "),_("td",[v._v("AjaxResult: 操作结果")]),v._v(" "),_("td",[v._v("根据结果的布尔值返回操作结果")])]),v._v(" "),_("tr",[_("td",[v._v("5")]),v._v(" "),_("td",[v._v("返回成功的AjaxResult")]),v._v(" "),_("td",[v._v("ok")]),v._v(" "),_("td",[v._v("无")]),v._v(" "),_("td",[v._v("AjaxResult: 成功的AjaxResult")]),v._v(" "),_("td",[v._v("返回一个表示成功的AjaxResult")])]),v._v(" "),_("tr",[_("td",[v._v("6")]),v._v(" "),_("td",[v._v("返回失败的AjaxResult")]),v._v(" "),_("td",[v._v("error")]),v._v(" "),_("td",[v._v("无")]),v._v(" "),_("td",[v._v("AjaxResult: 失败的AjaxResult")]),v._v(" "),_("td",[v._v("返回一个表示失败的AjaxResult")])]),v._v(" "),_("tr",[_("td",[v._v("7")]),v._v(" "),_("td",[v._v("返回带消息的成功的AjaxResult")]),v._v(" "),_("td",[v._v("ok")]),v._v(" "),_("td",[v._v("message: 消息")]),v._v(" "),_("td",[v._v("AjaxResult: 带消息的成功的AjaxResult")]),v._v(" "),_("td",[v._v("返回一个带有成功消息的AjaxResult")])]),v._v(" "),_("tr",[_("td",[v._v("8")]),v._v(" "),_("td",[v._v("返回带消息的失败的AjaxResult")]),v._v(" "),_("td",[v._v("error")]),v._v(" "),_("td",[v._v("message: 消息")]),v._v(" "),_("td",[v._v("AjaxResult: 带消息的失败的AjaxResult")]),v._v(" "),_("td",[v._v("返回一个带有失败消息的AjaxResult")])])])]),v._v(" "),_("h2",{attrs:{id:"接口说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接口说明"}},[v._v("#")]),v._v(" 接口说明")]),v._v(" "),_("p",[v._v("以下是公共Controller父类接口的详细说明：")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("序号")]),v._v(" "),_("th",[v._v("接口名称")]),v._v(" "),_("th",[v._v("接口地址")]),v._v(" "),_("th",[v._v("接口参数")]),v._v(" "),_("th",[v._v("返回")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("修改实体状态")]),v._v(" "),_("td",[v._v("modifyHasStatus")]),v._v(" "),_("td",[v._v("id: 实体ID")]),v._v(" "),_("td",[v._v("boolean: 更新结果")])]),v._v(" "),_("tr",[_("td",[v._v("2")]),v._v(" "),_("td",[v._v("查询状态正常列表")]),v._v(" "),_("td",[v._v("findAllHasStatus")]),v._v(" "),_("td",[v._v("无")]),v._v(" "),_("td",[v._v("AjaxResult: 查询结果")])]),v._v(" "),_("tr",[_("td",[v._v("3")]),v._v(" "),_("td",[v._v("根据应用程序ID查询实体列表")]),v._v(" "),_("td",[v._v("findAllByApplicationId")]),v._v(" "),_("td",[v._v("applicationId: 应用程序ID")]),v._v(" "),_("td",[v._v("List"),_("E",[v._v(": 查询结果")])],1)]),v._v(" "),_("tr",[_("td",[v._v("4")]),v._v(" "),_("td",[v._v("根据租户ID查询实体列表")]),v._v(" "),_("td",[v._v("findAllByTenantId")]),v._v(" "),_("td",[v._v("tenantId: 租户ID")]),v._v(" "),_("td",[v._v("List"),_("E",[v._v(": 查询结果")])],1)]),v._v(" "),_("tr",[_("td",[v._v("5")]),v._v(" "),_("td",[v._v("分页查询")]),v._v(" "),_("td",[v._v("toPage")]),v._v(" "),_("td",[v._v("model: 数据模型, feign: 业务服务, page: 分页信息, wrapper: RPC包装器, pageableResult: 分页查询结果")]),v._v(" "),_("td",[v._v("TableDataInfo: 表格数据信息")])]),v._v(" "),_("tr",[_("td",[v._v("6")]),v._v(" "),_("td",[v._v("保存实体")]),v._v(" "),_("td",[v._v("save")]),v._v(" "),_("td",[v._v("model: 数据模型, entity: 实体对象")]),v._v(" "),_("td",[v._v("AjaxResult: 保存结果")])]),v._v(" "),_("tr",[_("td",[v._v("7")]),v._v(" "),_("td",[v._v("通过ID列表查询实体")]),v._v(" "),_("td",[v._v("findIds")]),v._v(" "),_("td",[v._v("list: ID列表")]),v._v(" "),_("td",[v._v("AjaxResult: 查询结果")])]),v._v(" "),_("tr",[_("td",[v._v("8")]),v._v(" "),_("td",[v._v("通过ID删除实体")]),v._v(" "),_("td",[v._v("delete/{ids}")]),v._v(" "),_("td",[v._v("ids: ID字符串，多个ID用逗号分隔")]),v._v(" "),_("td",[v._v("AjaxResult: 删除结果")])]),v._v(" "),_("tr",[_("td",[v._v("9")]),v._v(" "),_("td",[v._v("通过ID获取实体")]),v._v(" "),_("td",[v._v("detail/{id}")]),v._v(" "),_("td",[v._v("id: ID")]),v._v(" "),_("td",[v._v("AjaxResult: 实体详情")])]),v._v(" "),_("tr",[_("td",[v._v("10")]),v._v(" "),_("td",[v._v("更新实体")]),v._v(" "),_("td",[v._v("modify")]),v._v(" "),_("td",[v._v("model: 数据模型, entity: 实体对象")]),v._v(" "),_("td",[v._v("AjaxResult: 更新结果")])]),v._v(" "),_("tr",[_("td",[v._v("11")]),v._v(" "),_("td",[v._v("通过ID查询实体")]),v._v(" "),_("td",[v._v("findOne")]),v._v(" "),_("td",[v._v("id: ID")]),v._v(" "),_("td",[v._v("AjaxResult: 查询结果")])]),v._v(" "),_("tr",[_("td",[v._v("12")]),v._v(" "),_("td",[v._v("实体数量统计")]),v._v(" "),_("td",[v._v("count")]),v._v(" "),_("td",[v._v("无")]),v._v(" "),_("td",[v._v("AjaxResult: 实体数量")])]),v._v(" "),_("tr",[_("td",[v._v("13")]),v._v(" "),_("td",[v._v("通过ID删除实体")]),v._v(" "),_("td",[v._v("deleteById")]),v._v(" "),_("td",[v._v("id: ID")]),v._v(" "),_("td",[v._v("AjaxResult: 删除结果")])]),v._v(" "),_("tr",[_("td",[v._v("14")]),v._v(" "),_("td",[v._v("修改实体状态")]),v._v(" "),_("td",[v._v("changeStatus")]),v._v(" "),_("td",[v._v("status: 状态对象")]),v._v(" "),_("td",[v._v("AjaxResult: 修改结果")])]),v._v(" "),_("tr",[_("td",[v._v("15")]),v._v(" "),_("td",[v._v("修改某字段的值")]),v._v(" "),_("td",[v._v("changeField")]),v._v(" "),_("td",[v._v("field: 字段对象")]),v._v(" "),_("td",[v._v("AjaxResult: 修改结果")])]),v._v(" "),_("tr",[_("td",[v._v("16")]),v._v(" "),_("td",[v._v("实体转换为Map对象")]),v._v(" "),_("td",[v._v("entityToMap")]),v._v(" "),_("td",[v._v("entity: 实体对象")]),v._v(" "),_("td",[v._v("AjaxResult: 转换结果")])]),v._v(" "),_("tr",[_("td",[v._v("17")]),v._v(" "),_("td",[v._v("Map对象转换为实体")]),v._v(" "),_("td",[v._v("mapToEntity")]),v._v(" "),_("td",[v._v("map: Map对象")]),v._v(" "),_("td",[v._v("AjaxResult: 转换结果")])])])]),v._v(" "),_("h2",{attrs:{id:"注意事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[v._v("#")]),v._v(" 注意事项")]),v._v(" "),_("p",[v._v("在使用公共Controller父类方法时，开发者需要注意以下几点：")]),v._v(" "),_("ol",[_("li",[v._v("在继承公共Controller父类时，需要重写或扩展相应的方法以满足特定的业务需求。")]),v._v(" "),_("li",[v._v("在调用公共接口时，需要确保传入的参数正确，以避免出现错误。")]),v._v(" "),_("li",[v._v("在处理返回结果时，需要正确处理AjaxResult，以便于前端正确解析和显示结果。")])]),v._v(" "),_("h2",{attrs:{id:"术语和缩略语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#术语和缩略语"}},[v._v("#")]),v._v(" 术语和缩略语")]),v._v(" "),_("ul",[_("li",[v._v("AjaxResult：一种常用的数据交互格式，用于在服务器和客户端之间传递数据。")]),v._v(" "),_("li",[v._v("ID：标识符，用于唯一标识一个实体。")]),v._v(" "),_("li",[v._v("RPC：远程过程调用，一种在网络上请求服务的协议。")])]),v._v(" "),_("h2",{attrs:{id:"其它"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[v._v("#")]),v._v(" 其它")]),v._v(" "),_("ul",[_("li",[v._v("无")])])])}),[],!1,null,null,null);_.default=a.exports}}]);