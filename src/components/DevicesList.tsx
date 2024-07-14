import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { TABS, TABS_KEYS } from "../constants";
import Event from "./Event";

type DevicesListProps = {
  activeTab: string;
}

const DevicesList: React.FC<DevicesListProps> = memo(({ activeTab }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasRightScroll, setHasRightScroll] = useState(false);

  const onArrowCLick = useCallback(() => {
    const scroller = ref?.current?.querySelector('.section__panel:not(.section__panel_hidden)');
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: 'smooth'
      });
    }
  }, []);

  useEffect(() => {
    const sumWidth = TABS[activeTab]?.items.length * 200;

    if (ref.current?.offsetWidth) {
      const newHasRightScroll = sumWidth > ref.current.offsetWidth;
      if (newHasRightScroll !== hasRightScroll) {
        setHasRightScroll(newHasRightScroll);
      }
    }
  }, [activeTab, hasRightScroll]);

  return (
    <div className="section__panel-wrapper" ref={ref}>
    {TABS_KEYS.map(key =>
      <div key={key} role="tabpanel" className={'section__panel' + (key === activeTab ? '' : ' section__panel_hidden')} aria-hidden={key === activeTab ? 'false' : 'true'} id={`panel_${key}`} aria-labelledby={`tab_${key}`}>
        <ul className="section__panel-list">
          {TABS[key].items.map((item, index) =>
            <Event
              key={index}
              {...item}
            />
          )}
        </ul>
      </div>
    )}
    {hasRightScroll &&
      <div className="section__arrow" onClick={onArrowCLick}></div>
    }
  </div>
  );
});

export default DevicesList;