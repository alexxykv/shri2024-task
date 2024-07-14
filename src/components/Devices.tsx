import React, { memo, useEffect, useRef, useState } from "react";
import DevicesTitle from "./DevicesTitle";
import DevicesList from "./DevicesList";

const Devices: React.FC = memo(() => {
  const initedRef = useRef(false);
  const [activeTab, setActiveTab] = useState('');

  const onSelectInput: React.FormEventHandler<HTMLSelectElement> = event => {
    setActiveTab((event.target as HTMLSelectElement).value);
  };

  useEffect(() => {
    if (!activeTab && !initedRef.current) {
      initedRef.current = true;
      setActiveTab(new URLSearchParams(location.search).get('tab') || 'all');
    }
  }, [activeTab]);

  return (
    <section className="section main__devices">
      <DevicesTitle onSelectInput={onSelectInput} activeTab={activeTab} setActiveTab={setActiveTab} />
      <DevicesList activeTab={activeTab} />
    </section>
  );
});

export default Devices;