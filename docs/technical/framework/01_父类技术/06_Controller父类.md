# 公共Controller父类方法

## 概述

公共Controller父类方法是一种基础的编程模式，它定义了一组标准的控制器方法，这些方法可以被其他控制器继承和重写。这种模式可以大大提高代码的复用性和一致性，简化开发过程，提高开发效率。

公共Controller父类方法主要包括数据封装、响应返回结果、成功和失败的AjaxResult返回、带消息的成功和失败的AjaxResult返回等方法。

此外，公共Controller父类还定义了一些公共的接口，如修改实体状态、查询状态正常列表、根据应用程序ID查询实体列表、根据租户ID查询实体列表、分页查询、保存实体、通过ID列表查询实体、通过ID删除实体、通过ID获取实体、更新实体、通过ID查询实体、实体数量统计、通过ID删除实体、修改实体状态、修改某字段的值、实体转换为Map对象、Map对象转换为实体等。

## 你将获得

1. 代码复用性和一致性：公共Controller父类方法提供了一系列标准的控制器方法，这些方法可以被其他控制器继承和重写，从而实现代码的复用和保持项目代码的一致性。
2. 提高开发效率：公共Controller父类方法已经封装了一些常用的操作，如数据封装、响应返回结果、操作实体等，这可以避免开发者重复编写相同的代码，从而节省开发时间，提高开发效率。
3. 提供标准化的接口：公共Controller父类方法定义了一些公共的接口，这些接口提供了标准化的访问方式，使得前后端的交互更加方便和高效。

## 方法作用

公共Controller父类方法的作用主要有以下几点：

1. 提供统一的数据处理方式：通过封装数据为AjaxResult，可以提供统一的数据处理方式，使得数据的处理更加简单和高效。
2. 提供统一的响应返回方式：通过响应返回结果，可以提供统一的响应返回方式，使得前端可以更容易地处理和显示结果。
3. 提供统一的实体操作接口：通过定义一些公共的实体操作接口，可以提供统一的实体操作方式，使得实体的操作更加简单和高效。

通过这种方式，公共Controller父类方法可以大大简化开发过程，提高开发效率，同时也保证了代码的复用性和一致性。


## 方法说明

以下是公共Controller父类方法的详细说明：

| 序号 | 方法名称                     | 方法   | 方法参数       | 返回                                 | 作用                             |
|------|------------------------------|--------|----------------|--------------------------------------|----------------------------------|
| 2    | 封装数据为AjaxResult         | toAjax | data: 数据     | AjaxResult: 封装后的AjaxResult       | 封装数据为AjaxResult             |
| 3    | 响应返回结果(基于影响行数)   | toAjax | rows: 影响行数 | AjaxResult: 操作结果                 | 根据影响的行数返回操作结果       |
| 4    | 响应返回结果(基于结果布尔值) | toAjax | result: 结果   | AjaxResult: 操作结果                 | 根据结果的布尔值返回操作结果     |
| 5    | 返回成功的AjaxResult         | ok     | 无             | AjaxResult: 成功的AjaxResult         | 返回一个表示成功的AjaxResult     |
| 6    | 返回失败的AjaxResult         | error  | 无             | AjaxResult: 失败的AjaxResult         | 返回一个表示失败的AjaxResult     |
| 7    | 返回带消息的成功的AjaxResult | ok     | message: 消息  | AjaxResult: 带消息的成功的AjaxResult | 返回一个带有成功消息的AjaxResult |
| 8    | 返回带消息的失败的AjaxResult | error  | message: 消息  | AjaxResult: 带消息的失败的AjaxResult | 返回一个带有失败消息的AjaxResult |


## 接口说明

以下是公共Controller父类接口的详细说明：

| 序号 | 接口名称                   | 接口地址               | 接口参数                                                                                           | 返回                        |
|------|----------------------------|------------------------|----------------------------------------------------------------------------------------------------|-----------------------------|
| 1    | 修改实体状态               | modifyHasStatus        | id: 实体ID                                                                                         | boolean: 更新结果           |
| 2    | 查询状态正常列表           | findAllHasStatus       | 无                                                                                                 | AjaxResult: 查询结果        |
| 3    | 根据应用程序ID查询实体列表 | findAllByApplicationId | applicationId: 应用程序ID                                                                          | List<E>: 查询结果           |
| 4    | 根据租户ID查询实体列表     | findAllByTenantId      | tenantId: 租户ID                                                                                   | List<E>: 查询结果           |
| 5    | 分页查询                   | toPage                 | model: 数据模型, feign: 业务服务, page: 分页信息, wrapper: RPC包装器, pageableResult: 分页查询结果 | TableDataInfo: 表格数据信息 |
| 6    | 保存实体                   | save                   | model: 数据模型, entity: 实体对象                                                                  | AjaxResult: 保存结果        |
| 7    | 通过ID列表查询实体         | findIds                | list: ID列表                                                                                       | AjaxResult: 查询结果        |
| 8    | 通过ID删除实体             | delete/{ids}           | ids: ID字符串，多个ID用逗号分隔                                                                    | AjaxResult: 删除结果        |
| 9    | 通过ID获取实体             | detail/{id}            | id: ID                                                                                             | AjaxResult: 实体详情        |
| 10   | 更新实体                   | modify                 | model: 数据模型, entity: 实体对象                                                                  | AjaxResult: 更新结果        |
| 11   | 通过ID查询实体             | findOne                | id: ID                                                                                             | AjaxResult: 查询结果        |
| 12   | 实体数量统计               | count                  | 无                                                                                                 | AjaxResult: 实体数量        |
| 13   | 通过ID删除实体             | deleteById             | id: ID                                                                                             | AjaxResult: 删除结果        |
| 14   | 修改实体状态               | changeStatus           | status: 状态对象                                                                                   | AjaxResult: 修改结果        |
| 15   | 修改某字段的值             | changeField            | field: 字段对象                                                                                    | AjaxResult: 修改结果        |
| 16   | 实体转换为Map对象          | entityToMap            | entity: 实体对象                                                                                   | AjaxResult: 转换结果        |
| 17   | Map对象转换为实体          | mapToEntity            | map: Map对象                                                                                       | AjaxResult: 转换结果        |

## 注意事项

在使用公共Controller父类方法时，开发者需要注意以下几点：

1. 在继承公共Controller父类时，需要重写或扩展相应的方法以满足特定的业务需求。
2. 在调用公共接口时，需要确保传入的参数正确，以避免出现错误。
3. 在处理返回结果时，需要正确处理AjaxResult，以便于前端正确解析和显示结果。

## 术语和缩略语

- AjaxResult：一种常用的数据交互格式，用于在服务器和客户端之间传递数据。
- ID：标识符，用于唯一标识一个实体。
- RPC：远程过程调用，一种在网络上请求服务的协议。

## 其它

- 无

