import { useState, useEffect, useMemo } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import {
  useEnableProperties,
  useProperties,
  useVisiable,
  useEventProperties,
  useRenderDom,
} from '@uiw/react-baidu-map-utils';
import { InfoWindowProps } from '.';

export interface UseInfoWindow extends InfoWindowProps {}

export function useInfoWindow(props = {} as UseInfoWindow) {
  const { position, ...opts } = props;
  const { container } = useRenderDom({ children: props.children });
  const { container: title } = useRenderDom({ children: props.title || '' });
  const { map } = useMapContext();
  const [infoWindow, setInfoWindow] = useState<BMap.InfoWindow>();
  useMemo(() => {
    if (!infoWindow && map) {
      opts.title = title;
      const win = new BMap.InfoWindow(props.children ? container : opts.content || '', {
        ...opts,
      } as BMap.InfoWindowOptions);
      setInfoWindow(win);
    }
    return () => {
      if (infoWindow) {
        infoWindow.restore();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  const [isOpen, setIsOpen] = useState(opts.isOpen === undefined ? true : opts.isOpen);
  useEffect(() => {
    if (map && BMap && infoWindow) {
      if (!isOpen) {
        map.closeInfoWindow();
      } else if (position) {
        const point = new BMap.Point(position.lng, position.lat);
        map.openInfoWindow(infoWindow, point);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, infoWindow]);

  useEffect(() => {
    if (infoWindow) {
      infoWindow.setContent(props.children ? container : opts.content || '');
    }
  }, [props.content, props.children]);

  useEffect(() => {
    if (infoWindow) {
      infoWindow.setTitle(title);
    }
  }, [props.content, title]);

  useVisiable(infoWindow!, props);
  useEventProperties<BMap.InfoWindow, UseInfoWindow>(infoWindow!, props, [
    'Close',
    'Open',
    'Maximize',
    'Restore',
    'ClickClose',
  ]);
  useProperties<BMap.InfoWindow, UseInfoWindow>(infoWindow!, props, [
    'Width',
    'Height',
    'Title',
    // 'Content',
    'MaxContent',
  ]);
  useEnableProperties<BMap.InfoWindow, UseInfoWindow>(infoWindow!, props, ['CloseOnClick', 'Maximize', 'AutoPan']);

  return {
    /**
     * 信息窗口实例对象
     */
    infoWindow,
    /**
     * 更新 信息窗口实例对象
     */
    setInfoWindow,
    isOpen,
    setIsOpen,
  };
}
