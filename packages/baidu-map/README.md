<p align="center">
  <a href="https://github.com/uiwjs/react-baidu-map">
    <img src="https://uiwjs.github.io/react-baidu-map/logo.svg" height="80px" alt="百度地图 LOGO" />
  </a>
</p>
<h3 align="center">百度地图 React 组件</h3>

<p align="center">
  <a href="https://github.com/uiwjs/react-baidu-map/actions">
    <img src="https://github.com/uiwjs/react-baidu-map/workflows/Build%20&%20Deploy/badge.svg" alt="Build & Deploy">
  </a>
  <a href="https://www.npmjs.com/package/@uiw/react-baidu-map">
    <img src="https://img.shields.io/npm/dm/@uiw/react-baidu-map.svg?style=flat" alt="Downloads">
  </a>
  <a href="https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map/file/README.md">
    <img src="https://img.shields.io/badge/Open%20in-unpkg-blue" alt="Open in unpkg">
  </a>
  <a href="https://www.npmjs.com/package/@uiw/react-baidu-map">
    <img src="https://img.shields.io/npm/v/@uiw/react-baidu-map.svg" alt="npm version">
  </a>
  <a href="https://gitee.com/uiw/react-baidu-map">
    <img src="https://jaywcjlove.github.io/sb/ico/gitee.svg" alt="Gitee Repo">
  </a>
</p>

这是一个基于 React 封装的百度地图组件，帮助你轻松的接入地图到 React 项目中。除了必须引用的 APILoader/Map 组件外，我们目前提供了最常用的地图组件，能满足大部分简单的业务场景；如果你有更复杂的需求，或者觉得默认提供的组件功能不够，可以使用 Map 组件返回的地图实例，完全自定义一个地图组件，然后根据百度地图原生 API 做百度地图允许你做的一切事情。

![](https://user-images.githubusercontent.com/1680273/71525077-35126b00-290b-11ea-9a11-ffd8b30dc9b8.png)

文档实例预览: [Github](https://uiwjs.github.io/react-baidu-map/) | [Gitee](https://uiw.gitee.io/react-baidu-map/)

### 特性

- ♻️ 自动加载百度地图 SDK（通过创建 Script 标签的形式加载），包括第三方 SDK。
- 📚 使用 Typescript 编写，集成百度地图 SDK [@type](src/types) 声明文件（包括中文注释）。
- ⚛️ 支持 React Hook 新增特性（需要 React 16.8+）。
- 💝 不依赖任何第三方组件。

## 安装

> 不依赖 [`uiw`](https://github.com/uiwjs/uiw) 组件库
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->
<!--rehype-->
```bash
npm install @uiw/react-baidu-map --save
```

## 使用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Map, APILoader } from '@uiw/react-baidu-map';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Map center="杭州"/>
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```

## 容器组件

Package | Bundle size(gzip) | Version/unpkg
----- | ----- | ----
[`@uiw/react-baidu-map`](https://uiwjs.github.io/react-baidu-map/) 集成所有包，懒人包，不比安装其它包 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map/file/README.md)
[`@uiw/react-baidu-map-api-loader`](https://uiwjs.github.io/react-amap/#/api-loader) 加载 SDK (必须) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-api-loader?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-api-loader) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-api-loader?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-api-loader) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-api-loader.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-api-loader) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-api-loader/file/README.md)
[`@uiw/react-baidu-map-map`](https://uiwjs.github.io/react-amap/#/api-loader) 加载地图(容器) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-map?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-map) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-map?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-map) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-map.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-map) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-map/file/README.md)

## 控件组件

Package | Bundle size(gzip) | Version/unpkg
----- | ----- | ----
[`@uiw/react-baidu-map-control`](https://uiwjs.github.io/react-baidu-map/) 自定义 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-control.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-control/file/README.md)
[`@uiw/react-baidu-map-copyright-control`](https://uiwjs.github.io/react-baidu-map/) 版权 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-copyright-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-copyright-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-copyright-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-copyright-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-copyright-control.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-copyright-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-copyright-control/file/README.md)
[`@uiw/react-baidu-map-navigation-control`](https://uiwjs.github.io/react-baidu-map/) 平移缩放 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-navigation-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-navigation-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-navigation-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-navigation-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-navigation-control.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-navigation-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-navigation-control/file/README.md)
[`@uiw/react-baidu-map-geolocation-control`](https://uiwjs.github.io/react-baidu-map/) 定位 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-geolocation-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-geolocation-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-geolocation-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-geolocation-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-geolocation-control.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-geolocation-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-geolocation-control/file/README.md)
[`@uiw/react-baidu-map-overview-map-control`](https://uiwjs.github.io/react-baidu-map/) 缩略地图 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-overview-map-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-overview-map-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-overview-map-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-overview-map-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-overview-map-control.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-overview-map-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-overview-map-control/file/README.md)
[`@uiw/react-baidu-map-scale-control`](https://uiwjs.github.io/react-baidu-map/) 比例尺 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-scale-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-scale-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-scale-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-scale-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-scale-control.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-scale-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-scale-control/file/README.md)
[`@uiw/react-baidu-map-type-control`](https://uiwjs.github.io/react-baidu-map/) 地图类型 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-type-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-type-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-type-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-type-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-type-control.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-type-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-type-control/file/README.md)
[`@uiw/react-baidu-map-panorama-control`](https://uiwjs.github.io/react-baidu-map/) 全景地图 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-panorama-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-panorama-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-panorama-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-panorama-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-panorama-control.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-panorama-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-panorama-control/file/README.md)

## 覆盖物

Package | Bundle size(gzip) | Version/unpkg
----- | ----- | ----
[`@uiw/react-baidu-map-marker`](https://uiwjs.github.io/react-baidu-map/) 点标注组件 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-marker?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-marker) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-marker?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-marker) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-marker.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-marker) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-marker/file/README.md)
[`@uiw/react-baidu-map-info-window`](https://uiwjs.github.io/react-baidu-map/) 信息窗口 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-info-window?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-info-window) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-info-window?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-info-window) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-info-window.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-info-window) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-info-window/file/README.md)
[`@uiw/react-baidu-map-label`](https://uiwjs.github.io/react-baidu-map/) 文本标注 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-label?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-label) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-label?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-label) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-label.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-label) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-label/file/README.md)
[`@uiw/react-baidu-map-point-collection`](https://uiwjs.github.io/react-baidu-map/) 加载海量点 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-point-collection?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-point-collection) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-point-collection?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-point-collection) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-point-collection.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-point-collection) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-point-collection/file/README.md)
[`@uiw/react-baidu-map-polyline`](https://uiwjs.github.io/react-baidu-map/) 折线组件 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-polyline?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-polyline) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-polyline?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-polyline) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-polyline.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-polyline) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-polyline/file/README.md)
[`@uiw/react-baidu-map-polygon`](https://uiwjs.github.io/react-baidu-map/) 多边形组件 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-polygon?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-polygon) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-polygon?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-polygon) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-polygon.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-polygon) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-polygon/file/README.md)
[`@uiw/react-baidu-map-circle`](https://uiwjs.github.io/react-baidu-map/) 圆 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-circle?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-circle) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-circle?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-circle) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-circle.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-circle) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-circle/file/README.md)
[`@uiw/react-baidu-map-ground-overlay`](https://uiwjs.github.io/react-baidu-map/) 地面叠加层 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-ground-overlay?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-ground-overlay) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-ground-overlay?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-ground-overlay) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-ground-overlay.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-ground-overlay) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-ground-overlay/file/README.md)
[`@uiw/react-baidu-map-canvas-layer`](https://uiwjs.github.io/react-baidu-map/) 自定义Canvas | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-canvas-layer?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-canvas-layer) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-canvas-layer?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-canvas-layer) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-canvas-layer.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-canvas-layer) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-canvas-layer/file/README.md)
[`@uiw/react-baidu-map-custom-overlay`](https://uiwjs.github.io/react-baidu-map/) 自定义覆盖物 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-custom-overlay?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-custom-overlay) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-custom-overlay?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-custom-overlay) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-custom-overlay.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-custom-overlay) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-custom-overlay/file/README.md)
[`@uiw/react-baidu-map-tile-layer`](https://uiwjs.github.io/react-baidu-map/) 地图图层 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-tile-layer?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-tile-layer) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-tile-layer?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-tile-layer) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-tile-layer.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-tile-layer) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-tile-layer/file/README.md)
[`@uiw/react-baidu-map-require-script`](https://uiwjs.github.io/react-baidu-map/) 加载第三方包 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-require-script?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-require-script) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-require-script?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-require-script) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-require-script.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-require-script) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-require-script/file/README.md)
[`@uiw/react-baidu-map-curve-line`](https://uiwjs.github.io/react-baidu-map/) 弧线组件 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-curve-line?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-curve-line) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-curve-line?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-curve-line) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-curve-line.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-curve-line) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-curve-line/file/README.md)
[`@uiw/react-baidu-map-drawing-manager`](https://uiwjs.github.io/react-baidu-map/) 鼠标绘制工具 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-baidu-map-drawing-manager?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-drawing-manager) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-baidu-map-drawing-manager?color=green&label=)](https://bundlephobia.com/package/@uiw/react-baidu-map-drawing-manager) | [![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-drawing-manager.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-drawing-manager) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-baidu-map-drawing-manager/file/README.md)

## 开发

```bash
npm install # 安装依赖

npm run build # 编译输出组件 js 文件, .d.ts 类型文件
npm run watch # 监听编译输出 js 文件, .d.ts 类型文件
npm run start # 文档网站运行
```

## 相关连接

- [@uiw/react-amap](https://github.com/uiwjs/react-amap) 高德地图 React 组件
- [百度拾取坐标系统](https://api.map.baidu.com/lbsapi/getpoint/index.html) 
- [百度地图官方 Demo 示例](https://lbsyun.baidu.com/jsdemo.htm) 
- [百度地图 API v3.0](https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html) 