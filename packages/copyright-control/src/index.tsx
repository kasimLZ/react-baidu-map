import React, { useImperativeHandle, Fragment } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useCopyrightControl } from './useCopyrightControl';
import { CopyrightControlItem } from './Item';

export * from './Item';
export * from './useCopyrightControl';

export interface CopyrightControlProps extends OverlayProps, BMap.CopyrightControlOptions {
  /**
   * 自定义 DOM 元素。
   */
  children?: React.ReactNode;
}

const CopyrightControl: any = React.forwardRef<CopyrightControlProps>((props, ref) => {
  const { copyrightControl } = useCopyrightControl(props);
  useImperativeHandle(ref, () => ({ ...props, copyrightControl }), [copyrightControl]);
  return (
    <Fragment>
      {React.Children.toArray(props.children).map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            control: copyrightControl,
            id: index + 1,
          });
        }
        return child;
      })}
    </Fragment>
  );
});

CopyrightControl.Item = CopyrightControlItem;

export default CopyrightControl;
