# A+Office地图找房页－百度地图项目
> aoffice_web_BaiduMapSearch

## 变量名-VariableName
`buildingOverlayObj` : 保存`buildingOverlayArr[NO]`的值(单个建筑物覆盖物对象,根据i传参数)


***
###  `2016.10.17` Commit `7f5cbca72bf471afedfa4b3e58085bd12c1dd311`版本还未修改问题
- [x] 修改文字居中
- [x] 确认层级是否跟点点租相同（存在问题:点点租2级为14一个层）
- [x] 改变声明位置


1. 点击行政区覆盖物时，去除跳转坐标方法;使用`展现当前区域(下一级)所有点在页面中的function`,目前无法正确展示，怀疑是假数据坐标问题
2. 如果修改假数据，需要对数组进行拆分，并在点击事件发生是传递当前行政区参数`code`
3. 假数据的坐标加上小数点不能超过7位
4. 调用中　判断2级希望改成=14,而不是区间,暂时无法实现(滚轮回滚缩小层级时无法退回1级)

***
# 未处理
- [ ] 替换building对象url值
***




```seq
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```
```seq
a -> b
a <- b
```

```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
```
