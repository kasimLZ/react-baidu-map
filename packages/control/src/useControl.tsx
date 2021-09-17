import { useMemo, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ControlProps } from './';
import { usePrevious, useProperties, useVisiable, useCreatePortal } from '@uiw/react-baidu-map-utils';
import getControl from './getControl';

export interface UseControl extends ControlProps {}

export function useControl(props = {} as UseControl) {
  const { portal, div, children, setPortal, setChildren } = useCreatePortal({
    children: props.children,
  });
  const [control, setControl] = useState<BMap.Control>();
  const { map, offset, anchor } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (map && !control && div) {
      const Control = getControl();
      const instance = new Control(div, anchor, offset);
      setCount(count + 1);
      setControl(instance);
      map.addOverlay(instance);
      setChildren(props.children);
    }
  }, [map, control, div, anchor, offset, count, setChildren, props.children]);

  const prevCount = usePrevious(count);
  useMemo(() => {
    if (map && control && div && children && count === prevCount) {
      const portalInstance = ReactDOM.createPortal(children, div);
      setCount(count + 1);
      setPortal(portalInstance);
      setChildren(props.children);
    }
  }, [children, control, count, div, map, prevCount, props.children, setChildren, setPortal]);

  useVisiable(control!, props);
  useProperties<BMap.Control, UseControl>(control!, props, ['Anchor', 'Offset']);
  return {
    portal,
    setPortal,
    control,
    setControl,
  };
}
