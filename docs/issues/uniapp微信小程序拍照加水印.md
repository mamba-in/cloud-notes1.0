# uniapp 微信小程序拍照加水印

## 需求

为防篡改信息只能相机拍照不能从相册里选择照片，然后在照片上添加时间、经纬度和详细地址信息

## 使用 canvas 实现

```html
<view>
  <canvas
    :style="{'width':w,'height': h}"
    canvas-id="water-mark"
    style="border: 1px solid;"
  ></canvas>
</view>
```

## 过程

经纬度和地址信息使用[百度地图小程序 SDK](http://lbsyun.baidu.com/index.php?title=wxjsapi/guide/getlocation)获取，
时间和经纬度显示长度较短，获取到的详细地址会有超出画布宽度的情况，需要对超出的部分做换行处理

```js
/**
 * 1. 根据canvas的measureText属性获取地址在画布上的文字宽度
 * 2. 根据上一步求得的地址宽度计算单个文字的宽度
 * 3. 根据地址宽度、画布宽度和单个文字的宽度计算每行最大文字个数
 * 4. 根据最大文字个数计算换行后的文字
 **/

const textWidth = Number(ctx.measureText(address).width).toFixed()
const ctxWidth = Number(res1.width / 3).toFixed()
const singleWordWidth = Number(textWidth / address.length).toFixed()
const maxWord = Number((textWidth - ctxWidth) / singleWordWidth).toFixed()
const notChineseLength = address
  .split('')
  .filter(item => !isChineseCharacter(item)).length
const nextLine = Number(maxWord) + Number(notChineseLength) + 1
```

::: warning 注意
这里需要注意的是地址中会有`数字`、`括号`等非中文字符，而我们计算的单个文字的宽度是以汉字为准，所以需要对非中文字符做筛选处理
:::

```js
const isChineseCharacter = value =>
  /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(
    value
  )
```

## 以下是完整过程

```js
waterMark() {
			let that = this
			 uni.chooseImage({
				count:1,
				sourceType: ['camera'],
				success(res) {
					uni.getImageInfo({
					  src: res.tempFilePaths[0],
					  success: (res1) => {
						that.imgType = res1.type
						that.w = res1.width/3+'px'
						that.h = res1.height/3+'px'
						const ctx = uni.createCanvasContext('water-mark')

						ctx.drawImage(res.tempFilePaths[0], 0, 0, res1.width / 3, res1.height / 3)
						Object.is(that.platform, 'ios') ? ctx.setFontSize(16) : ctx.setFontSize(10)
						ctx.setFillStyle('#FFFFFF')
						let textToHeight = res1.height / 2
						const { longitude ,latitude, address } = that.wxMarkerData[0]
						const longitudeFormat = longitude.toString().substr(0, longitude.toString().indexOf('.') + 7)
						const latitudeFormat = latitude.toString().substr(0, latitude.toString().indexOf('.') + 7)
						const textWidth = Number(ctx.measureText(address).width).toFixed()
						const ctxWidth = Number(res1.width/3).toFixed()
						const singleWordWidth = Number(textWidth/address.length).toFixed()
						const maxWord = Number((textWidth - ctxWidth) / singleWordWidth).toFixed()
						const notChineseLength = address.split('').filter(item => !isChineseCharacter(item)).length
						const nextLine = Number(maxWord) + Number(notChineseLength) + 1


						ctx.fillText(`时间: ${getDate()}`, 10, textToHeight * 0.5)
						if (textWidth - ctxWidth > 0) {
							ctx.fillText(`地址: ${address.substr(0, address.length - nextLine)}`, 10, textToHeight * 0.55)
							ctx.fillText(`${address.substr(-nextLine)}`, 10, textToHeight * 0.58)
						} else {
							ctx.fillText(`地址: ${address}`, 10, textToHeight * 0.55)
						}

						ctx.fillText(`经度: ${longitudeFormat}`, 10, textToHeight * 0.63)
						ctx.fillText(`纬度: ${latitudeFormat}`, Object.is(that.platform, 'ios') ? 150 : 100, textToHeight * 0.63)

						ctx.draw(false,()=>{
							setTimeout(() => {
								uni.canvasToTempFilePath({
								  canvasId: 'water-mark',
								  success: (res1) => {
									that.previewSrc=res1.tempFilePath
								  }
								})
							}, 500)
						})
					  }
					})
				}
			 });
		}
```
