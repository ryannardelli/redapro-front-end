export type ProfileTab<T extends string> = {
  value: T;
  label: string;
  icon: React.ReactNode;
};

interface ProfileTabsProps<T extends string> {
  tabs: ProfileTab<T>[];
  activeTab: T;
  onChange: (value: T) => void;
}

export function ProfileTabs<T extends string>({
  tabs,
  activeTab,
  onChange,
}: ProfileTabsProps<T>) {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex gap-2 p-1 bg-slate-200/50 rounded-2xl min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`px-6 py-2.5 rounded-xl cursor-pointer flex items-center gap-2 font-bold transition-all whitespace-nowrap ${
              activeTab === tab.value
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab.icon}
            <span className="capitalize">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}