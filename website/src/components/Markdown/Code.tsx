import React from 'react';
import CodePreview, { CodePreviewProps } from '@uiw/react-code-preview';

export interface CodeProps extends CodePreviewProps {
  code: string;
  version: string;
  codePen: boolean;
  codeSandbox?: boolean;
  dependencies: any;
}

export default function Code({ dependencies, version, codePen, codeSandbox, ...other }: CodeProps) {
  const props: CodePreviewProps = { ...other };
  if (codePen) {
    props.codePenOption = {
      title: `uiw${version} - demo`,
      includeModule: ['uiw'],
      js: (props.code || '').replace('_mount_', 'document.getElementById("container")'),
      html: '<div id="container" style="padding: 24px"></div>',
      // css_external: `https://unpkg.com/@uiw/react-baidu-map@${version}/dist/baidu.min.css`,
      js_external: `https://unpkg.com/react@17.x/umd/react.development.js;https://unpkg.com/react-dom@17.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/react-baidu-map@${version}/dist/baidu.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.1.3/index.js`,
    };
  }
  if (codeSandbox) {
    props.codeSandboxOption = {
      files: {
        'sandbox.config.json': {
          content: `{
        "template": "node",
        "container": {
          "startScript": "start",
          "node": "14"
        }
      }`,
        },
        'public/index.html': {
          content: `<div id="container"></div>`,
        },
        'src/index.js': {
          content: props.code!.replace('_mount_', 'document.getElementById("container")'),
        },
        '.kktrc.js': {
          content: `import lessModules from "@kkt/less-modules";\n\nexport default (conf, env, options) => {\n  conf = lessModules(conf, env, options);\n  return conf;\n};`,
        },
        'package.json': {
          content: {
            name: 'react-baidu-map-demo',
            description: `百度地图 React 组件 - demo`,
            dependencies: {
              react: '~17.0.2',
              'react-dom': '~17.0.2',
              '@uiw/react-baidu-map': 'latest',
            },
            devDependencies: {
              '@kkt/less-modules': '~7.1.1',
              kkt: '~7.1.5',
            },
            license: 'MIT',
            scripts: {
              start: 'kkt start',
              build: 'kkt build',
              test: 'kkt test --env=jsdom',
            },
            browserslist: ['>0.2%', 'not dead', 'not ie <= 11', 'not op_mini all'],
          },
        },
      },
    };
  }
  return <CodePreview {...props} dependencies={{ ...dependencies, React, ...React }} style={{ marginBottom: 0 }} />;
}
