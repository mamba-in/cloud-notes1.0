# 字符串扩展

## 编译模板字符串

```js
const compile = (template) => {
  const evalExpr = /<%=(.+?)%>/g
  const expr = /<%([\s\S]+?)%>/g

  template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`')

  template = 'echo(`' + template + '`);'

  let script = `(function parse(data){
      let output = "";
      function echo(html){
        output += html;
      }
      ${template}
      return output;
  })`

  return script
}
let parse = eval(this.compile(template))
```
