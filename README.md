# json
## 9/14/2017
* stringify()和parse()区别
### parse()
* parse用于从一个字符串中解析出json对象,如
#### var str = '{"name":"huangxiaojian","age":"23"}'
结果：
JSON.parse(str)

Object

age: "23"
name: "huangxiaojian"
__proto__: Object
注意：单引号写在{}外，每个属性名都必须用双引号，否则会抛出异常。
