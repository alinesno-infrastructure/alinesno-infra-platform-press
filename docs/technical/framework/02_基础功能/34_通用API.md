# 通用API

## 概述

通用API提供了一组通用的接口方法，用于查询、保存、更新和删除实体对象。这些接口可以被其他模块调用，以实现常见的数据操作功能。

## API列表

以下是通用API提供的接口方法：

|序号|接口名称|接口路径|方法|功能描述|请求参数|返回类型|返回数据|
|---|------|-------|----|--------|------|-------|------|
|1|查询状态正常列表|/findAllHasStatus|GET|查询状态正常的实体对象列表|无|AjaxResult|状态正常的实体对象列表|
|2|查询所有列表|/findAll|GET|查询所有的实体对象列表|feign: FEIGN对象<br>applicationId: 应用程序ID|AjaxResult|所有的实体对象列表|
|3|进行分页查询|/toPage|GET|进行分页查询|model: Model对象<br>feign: FEIGN对象<br>page: DatatablesPageBean对象<br>wrapper: RpcWrapper对象<br>pageableResult: Page对象|TableDataInfo|分页查询结果|
|4|保存实体|/save|POST|保存实体对象|model: Model对象<br>entity: 实体对象|AjaxResult|无|
|5|通过id列表查询|/findIds|POST|通过id列表查询实体对象|list: id列表|AjaxResult|查询到的实体对象列表|
|6|通过id删除|/delete/{ids}|DELETE|通过id删除实体对象|ids: id字符串|AjaxResult|无|
|7|通过id获取实体|/detail/{id}|GET|通过id获取实体对象|id: id字符串|AjaxResult|查询到的实体对象|
|8|更新实体|/modify|PUT|更新实体对象|model: Model对象<br>Entity: 实体对象|AjaxResult|无|
|9|通过id查询实体|/findOne|GET|通过id查询实体对象|id: id字符串|AjaxResult|查询到的实体对象|
|10|实体数量统计|/count|GET|统计实体对象数量|无|AjaxResult|实体对象数量|
|11|通过id删除实体|/deleteById|GET|通过id删除实体对象|id: id字符串|AjaxResult|无|
|12|修改实体状态|/changeStatus|PUT|修改实体对象状态|status: HasStatusVo对象|AjaxResult|修改结果|

## 使用示例

以下是使用通用API的示例：

1. 查询状态正常列表：

   ```
   GET /findAllHasStatus
   
   返回结果：
   {
     "code": 200,
     "msg": "查询成功",
     "data": [实体对象列表]
   }
   ```

2. 查询所有列表：

   ```
   GET /findAll?feign=feign对象&applicationId=应用程序ID
   
   返回结果：
   {
     "code": 200,
     "msg": "查询成功",
     "data": [实体对象列表]
   }
   ```

3. 进行分页查询：

   ```
   GET /toPage?model=Model对象&feign=FEIGN对象&page=DatatablesPageBean对象&wrapper=RpcWrapper对象&pageableResult=Page对象
   
   返回结果：
   {
     "code": 200,
     "msg": "查询成功",
     "data": {
       "rows": [实体对象列表],
       "total": 总记录数
     }
   }
   ```

4. 保存实体：

   ```
   POST /save
   
   请求参数：
   {
     "model": Model对象,
     "entity": 实体对象
   }
   
   返回结果：
   {
     "code": 200,
     "msg": "保存成功"
   }
   ```

5. 通过id列表查询：

   ```
   POST /findIds
   
   请求参数：
   {
     "list": [id列表]
   }
   
   返回结果：
   {
     "code": 200,
     "msg": "查询成功",
     "data": [实体对象列表]
   }
   ```

6. 通过id删除：

   ```
   DELETE /delete/{ids}
   
   请求路径示例：/delete/1,2,3
   
   返回结果：
   {
     "code": 200,
     "msg": "删除成功"
   }
   ```

7. 通过id获取实体：

   ```
   GET /detail/{id}
   
   请求路径示例：/detail/1
   
   返回结果：
   {
     "code": 200,
     "msg": "查询成功",
     "data": 实体对象
   }
   ```

8. 更新实体：

   ```
   PUT /modify
   
   请求参数：
   {
     "model": Model对象,
     "Entity": 实体对象
   }
   
   返回结果：
   {
     "code": 200,
     "msg": "更新成功"
   }
   ```

9. 通过id查询实体：

   ```
   GET /findOne?id=1
   
   返回结果：
   {
     "code": 200,
     "msg": "查询成功",
     "data": 实体对象
   }
   ```

10. 实体数量统计：

    ```
    GET /count
    
    返回结果：
    {
      "code": 200,
      "msg": "查询成功",
      "data": 实体对象数量
    }
    ```

11. 通过id删除实体：

    ```
    GET /deleteById?id=1
    
    返回结果：
    {
      "code": 200,
      "msg": "删除成功"
    }
    ```

12. 修改实体状态：

    ```
    PUT /changeStatus
    
    请求参数：
    {
      "status": HasStatusVo对象
    }
    
    返回结果：
    {
      "code": 200,
      "msg": "修改成功"
    }
    ```

## 扩展方法和注意事项

通用API可以根据具体需求进行扩展和定制。以下是一些扩展方法和注意事项：

- 可以根据业务需要在通用API的基础上添加新的接口方法。
- 在使用通用API时，需要根据实际情况传递正确的参数，确保接口调用的准确性和有效性。
- 在扩展通用API时，需要注意接口的命名规范、参数的合理性和返回结果的正确性。
- 可以根据具体业务需求对通用API进行定制化修改，以满足特定的业务需求。

## 参考资料

- 无