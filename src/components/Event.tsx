import React, { memo, useRef } from "react";
import { SizeType } from "../types";

type EventProps = {
  slim?: boolean;
  icon: string;
  iconLabel: string;
  title: string;
  subtitle?: string;
  onSize?: (size: SizeType) => void;
}

const Event: React.FC<EventProps> = memo(({ slim, icon, iconLabel, title, subtitle }) => {
  const ref = useRef<HTMLLIElement>(null);

  return <li ref={ref} className={'event' + (slim ? ' event_slim' : '')}>
    <button className="event__button">
      <span className={`event__icon event__icon_${icon}`} role="img" aria-label={iconLabel}></span>
      <h4 className="event__title">{title}</h4>
      {subtitle &&
        <span className="event__subtitle">{subtitle}</span>
      }
    </button>
  </li>;
});

export default Event;