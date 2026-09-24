import React from 'react';
import { Info, AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'security';
  title?: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ type = 'info', title, children }) => {
  const styles = {
    info: {
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/[0.07]',
      icon: <Info className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />,
      text: 'text-cyan-200/90',
      titleColor: 'text-cyan-300',
    },
    warning: {
      border: 'border-amber-500/30',
      bg: 'bg-amber-500/[0.07]',
      icon: <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />,
      text: 'text-amber-200/90',
      titleColor: 'text-amber-300',
    },
    success: {
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/[0.07]',
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />,
      text: 'text-emerald-200/90',
      titleColor: 'text-emerald-300',
    },
    security: {
      border: 'border-purple-500/30',
      bg: 'bg-purple-500/[0.07]',
      icon: <ShieldCheck className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />,
      text: 'text-purple-200/90',
      titleColor: 'text-purple-300',
    },
  }[type];

  return (
    <div className={`my-5 rounded-2xl border ${styles.border} ${styles.bg} p-4 sm:p-5 flex items-start gap-3.5`}>
      {styles.icon}
      <div className="space-y-1 text-xs sm:text-sm">
        {title && <h5 className={`font-semibold ${styles.titleColor}`}>{title}</h5>}
        <div className={`leading-relaxed ${styles.text}`}>{children}</div>
      </div>
    </div>
  );
};
