### M 代表模型（Model）：负责业务对象和数据库的关系映射（ORM）。

### T 代表模板（Tempalte）：负责如何把页面展示给用户（html）。

### V 代表视图（View）：负责业务逻辑，并在适当的时候调用Model和Template。

#### 通过V对M和T进行连接，用户通过T(界面)对服务器进行访问（发送请求），T把请求传给V(调度)，V调用M(数据模型)获取数据，把数据给模板T进行渲染，然后再把渲染后的模板返回给用户。

## 0701 基础django练习
## 0702 bbs django模板
## 0703 bbs CBV重构
## 0704 备忘录 django模板
## 0705 商城 django模板
