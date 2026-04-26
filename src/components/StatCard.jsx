export default function StatCard({
  Icon,
  iconBg = "bg-brand-50",
  iconColor = "text-brand-500",
  label,
  value,
  delta,
  trend = "up",
  trendColor = "text-emerald-500",
  size = "md", // "sm" | "md"
  className = "",
}) {
  const isSm = size === "sm";
  return (
    <div
      className={`pointer-events-auto rounded-2xl border border-ink-900/5 bg-white/95 p-3 shadow-[0_20px_50px_-20px_rgba(11,23,51,0.28)] ring-1 ring-white/50 backdrop-blur-md ${
        isSm ? "w-[150px]" : "w-[170px] sm:p-3.5"
      } ${className}`}
    >
      <div className="flex items-center gap-2">
        <div
          className={`flex ${
            isSm ? "h-7 w-7" : "h-8 w-8"
          } items-center justify-center rounded-lg ${iconBg} ${iconColor}`}
        >
          {Icon && <Icon className={isSm ? "h-3.5 w-3.5" : "h-4 w-4"} strokeWidth={2.2} />}
        </div>
        <div className={`${isSm ? "text-[11px]" : "text-[12px]"} font-medium text-ink-500`}>
          {label}
        </div>
      </div>
      <div
        className={`mt-1 font-bold tracking-tight text-ink-900 ${
          isSm ? "text-[20px]" : "text-[22px] sm:text-[24px]"
        }`}
      >
        {value}
      </div>
      <div className={`mt-0.5 flex items-center gap-1 text-[10.5px] font-semibold ${trendColor}`}>
        {trend === "up" ? "↑" : "↓"}
        <span>
          {delta} this month
        </span>
      </div>
      <svg viewBox="0 0 100 22" className="mt-1 h-4 w-full">
        <defs>
          <linearGradient id={`spark-${label}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={trend === "up" ? "#10b981" : "#ef4444"} stopOpacity="0.25" />
            <stop offset="100%" stopColor={trend === "up" ? "#10b981" : "#ef4444"} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 18 Q 15 14 25 12 T 50 8 T 75 5 T 100 2 V22 H0 Z"
          fill={`url(#spark-${label})`}
        />
        <path
          d="M0 18 Q 15 14 25 12 T 50 8 T 75 5 T 100 2"
          fill="none"
          stroke={trend === "up" ? "#10b981" : "#ef4444"}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
