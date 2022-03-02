APILoader
===

用于加载百度地图 SDK 依赖，加载完成，全局将会有 **`window.BMap`** 对象。

```jsx
import { APILoader } from '@uiw/react-baidu-map';
// 或者单独安装使用
import APILoader from '@uiw/react-baidu-map-api-loader';
```

### 基本用法

Map 的父组件必须具有宽度和高度；


> 🚧 注意：如果你不使用 `APILoader` 组件，需要手动将 SDK 引入到 HTML 中。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 3px;-->

<!--rehype:-->
```html
<script
  type="text/javascript"
  src="http://api.map.baidu.com/api?v=3.0&ak=GTrnXa5hwXGwgQnTBG28SHBubErMKm3f&callback=load_bmap_sdk"
>
</script>
```


<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Map, APILoader } from '@uiw/react-baidu-map';

const Demo = () => (
  <div style={{ width: '100%' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Map autoLocalCity style={{ height: 350 }} />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| akay | **`必填`** 您需先[申请密钥（ak）](http://lbs.baidu.com/apiconsole/key?application=key)才可使用该服务，接口无使用次数限制，请开发者放心使用。 | string | - |
| version | SDK 版本 | string | `3.0` |
| protocol | 协议，默认是根据当前网站协议的 | `http`/`https` | `window.location.protocol` |
| hostAndPath | 请求 `SDK` 的前半部分 | string | `api.map.baidu.com/api` |
| type | 可选使用百度的 `webgl` 地图 | `webgl` | - |