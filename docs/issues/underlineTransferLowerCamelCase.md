# 下划线转换驼峰

:::tip
深度处理复杂数据类型( Object、Array )的`key`**下划线** 转换 **驼峰命名**
:::

- 封装方法

```js
function getCamelCase(data) {
  const targetData = data.constructor === Object ? {} : []

  Object.keys(data).forEach(keys => {
    if (data[keys] && typeof data[keys] === 'object') {
      targetData[
        keys.replace(/_(\w)/g, (arg0, arg1) => arg1.toUpperCase())
      ] = getCamelCase(data[keys])
    } else {
      targetData[keys.replace(/_(\w)/g, (arg0, arg1) => arg1.toUpperCase())] =
        data[keys]
    }
  })
  return targetData
}
```

- 测试

```js
const obj = {
  first_name_aaa: 'aaa',
  last_name_1: 'bbb',
  obj1: {
    a_b_c: 'abc'
  },
  arr: [
    {
      arr_child: 'arr-child'
    }
  ]
}

console.log(getCamelCase(obj))

/*
    处理结果
    {
      firstNameAaa: 'aaa',
      lastName1: 'bbb',
      obj1: { aBC: 'abc' },
      arr: [ { arrChild: 'arr-child' } ]
    }
*/
```
