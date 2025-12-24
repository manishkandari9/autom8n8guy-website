"use client";

import {
  Workflow,
  Database,
  Zap,
  Settings,
  RefreshCw,
  BarChart3,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Workflow,
  Database,
  Zap,
  Settings,
  RefreshCw,
  BarChart3,
};

export function LocationPageTemplate({ services }: any) {
  return (
    <div>
      {services.map((s: any, i: number) => {
        const Icon = iconMap[s.icon];

        return (
          <div key={i}>
            <Icon />
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        );
      })}
    </div>
  );
}
