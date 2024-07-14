import React, { memo } from "react";
import { TABS, TABS_KEYS } from "../constants";

type DevicesTitleProps = {
  onSelectInput: React.FormEventHandler<HTMLSelectElement>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const DevicesTitle: React.FC<DevicesTitleProps> = memo(({ onSelectInput, activeTab, setActiveTab }) => {
  return (
    <div className="section__title">
      <h2 className="section__title-header">
        Избранные устройства
      </h2>

      <select className="section__select" defaultValue="all" onInput={onSelectInput}>
        {TABS_KEYS.map(key =>
          <option key={key} value={key}>
            {TABS[key].title}
          </option>
        )}
      </select>

      <ul role="tablist" className="section__tabs">
        {TABS_KEYS.map(key =>
          <li
            key={key}
            role="tab"
            aria-selected={key === activeTab ? 'true' : 'false'}
            tabIndex={key === activeTab ? 0 : undefined}
            className={'section__tab' + (key === activeTab ? ' section__tab_active' : '')}
            id={`tab_${key}`}
            aria-controls={`panel_${key}`}
            onClick={() => setActiveTab(key)}
          >
            {TABS[key].title}
          </li>
        )}
      </ul>
    </div>
  );
});

export default DevicesTitle