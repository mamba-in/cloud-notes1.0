# 下划线与驼峰命名按需互转

:::tip
昨天实现了简单对象和复杂数据类型的[下划线转换驼峰命名](./styleUnderscoreFormat.md)，今天就有驼峰转换下划线命名的需要，生活天天会带给你惊喜，
你永远猜不到下一个糖果是什么味道 🍬 世事难料啊 🤷‍♂️ 😂
:::

- 索性直接封装一个方法根据数据类型按需互转
  - 首先根据构造函数的`constructor`属性判断传入对象的数据类型是 `Object` 还是 `Array`
  - 遍历该对象的所有属性，如果存在子属性就递归，如果是一维对象就替换 `key` 之后重组新对象
  - 重组新对象时判断当前 `key` 是下划线还是驼峰，根据`正则`过滤返回

```js
/**
 * format the keys of Object from underscore to camelcase or camelcase to underscore as you needed
 * @param { Object } data
 * @returns { Object }
 */

const keyStyleFormat = data => {
  const targetData = data.constructor === Object ? {} : []
  const hasUnderscore = /_(\w)/g
  const styleUnderscoreFormat = (arg0, arg1) => arg1.toUpperCase()

  Object.keys(data).forEach(keys => {
    if (data[keys] && typeof data[keys] === 'object') {
      if (hasUnderscore.test(keys)) {
        targetData[
          keys.replace(hasUnderscore, styleUnderscoreFormat)
        ] = keyStyleFormat(data[keys])
      } else {
        targetData[
          keys.replace(/([A-Z])/g, '_$1').toLowerCase()
        ] = keyStyleFormat(data[keys])
      }
    } else {
      if (hasUnderscore.test(keys)) {
        targetData[keys.replace(hasUnderscore, styleUnderscoreFormat)] =
          data[keys]
      } else {
        targetData[keys.replace(/([A-Z])/g, '_$1').toLowerCase()] = data[keys]
      }
    }
  })
  return targetData
}
```
