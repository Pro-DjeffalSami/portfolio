import {
  Blocks,
  Cloud,
  Code2,
  Container,
  GitBranch,
  KeyRound,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
} from 'lucide-react';
import type { SkillCategory } from '../data/portfolio';
import { getToolIconId } from '../utils/toolIconLogic';

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = 'h-4 w-4 shrink-0' }: TechIconProps) {
  const id = getToolIconId(name);

  switch (id) {
    case 'linux-ubuntu':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="6.2" stroke="#FB923C" strokeWidth="2.2" />
          <circle cx="12" cy="4.2" r="2.1" fill="#FB923C" stroke="#060A15" strokeWidth="1.2" />
          <circle cx="5.4" cy="16" r="2.1" fill="#FB923C" stroke="#060A15" strokeWidth="1.2" />
          <circle cx="18.6" cy="16" r="2.1" fill="#FB923C" stroke="#060A15" strokeWidth="1.2" />
        </svg>
      );

    case 'bash':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect
            x="2.5"
            y="4"
            width="19"
            height="16"
            rx="3"
            stroke="#34D399"
            strokeWidth="1.8"
            fill="#34D399"
            fillOpacity="0.1"
          />
          <path
            d="M7 9.5L10.5 12L7 14.5M12.5 14.5H17"
            stroke="#34D399"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'vps-security':
      return <ShieldCheck className={`${className} text-cyan-400`} aria-hidden="true" />;

    case 'ssh':
      return <KeyRound className={`${className} text-emerald-400`} aria-hidden="true" />;

    case 'ufw':
      return <ShieldCheck className={`${className} text-amber-400`} aria-hidden="true" />;

    case 'docker':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="6.5" y="7" width="3" height="2.6" rx="0.4" fill="#38BDF8" />
          <rect x="10" y="7" width="3" height="2.6" rx="0.4" fill="#38BDF8" />
          <rect x="10" y="3.8" width="3" height="2.6" rx="0.4" fill="#38BDF8" />
          <rect x="13.5" y="7" width="3" height="2.6" rx="0.4" fill="#38BDF8" />
          <rect x="3" y="10.2" width="3" height="2.6" rx="0.4" fill="#38BDF8" />
          <rect x="6.5" y="10.2" width="3" height="2.6" rx="0.4" fill="#38BDF8" />
          <rect x="10" y="10.2" width="3" height="2.6" rx="0.4" fill="#38BDF8" />
          <rect x="13.5" y="10.2" width="3" height="2.6" rx="0.4" fill="#38BDF8" />
          <path
            d="M2 13.8H17.5C18.3 13.8 19.3 13.4 20.1 12.6C20.5 13.4 20.8 14.2 21.8 14.4C21.2 15.8 19.7 16.5 18.6 16.5C17 19 14.1 20.2 10.2 20.2C5.4 20.2 2 17.5 2 13.8Z"
            fill="#38BDF8"
            fillOpacity="0.85"
          />
        </svg>
      );

    case 'docker-compose':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="4" width="7.5" height="6.5" rx="1.2" stroke="#22D3EE" strokeWidth="1.8" />
          <rect x="13.5" y="4" width="7.5" height="6.5" rx="1.2" stroke="#38BDF8" strokeWidth="1.8" />
          <rect
            x="8.25"
            y="13.5"
            width="7.5"
            height="6.5"
            rx="1.2"
            stroke="#34D399"
            strokeWidth="1.8"
          />
          <path d="M6.75 10.5V12H17.25V10.5M12 12V13.5" stroke="#94A3B8" strokeWidth="1.5" />
        </svg>
      );

    case 'volumes-network':
      return <Network className={`${className} text-emerald-400`} aria-hidden="true" />;

    case 'terraform':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M3 4.5L8.5 7.7V13.9L3 10.7V4.5Z" fill="#A78BFA" />
          <path d="M9.6 8.3L15.1 11.5V17.7L9.6 14.5V8.3Z" fill="#8B5CF6" />
          <path d="M16.2 11.5L21.5 8.3V14.5L16.2 17.7V11.5Z" fill="#C4B5FD" />
          <path d="M9.6 15.6L15.1 18.8V22.2L9.6 19V15.6Z" fill="#A78BFA" />
        </svg>
      );

    case 'aws':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M6.8 14.2H17.6C19.5 14.2 21 12.8 21 11C21 9.3 19.7 8 18 7.9C17.4 5.4 15.1 3.7 12.4 3.7C9.3 3.7 6.8 6 6.5 9C4.7 9.2 3.3 10.7 3.3 12.5C3.3 13.5 4.9 14.2 6.8 14.2Z"
            stroke="#FBBF24"
            strokeWidth="1.7"
            fill="#FBBF24"
            fillOpacity="0.12"
          />
          <path
            d="M4.5 17.3C8.5 20.1 14.8 20.3 19.3 17.6M19.3 17.6L17.4 17.1M19.3 17.6L18.8 19.5"
            stroke="#F59E0B"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'azure':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M13.2 3.5L5.2 19.5H10.1L14.2 10.6L13.2 3.5Z" fill="#38BDF8" />
          <path d="M13.6 5.2L19.8 19.5H11.4L15.4 16.5L13.6 5.2Z" fill="#0284C7" />
        </svg>
      );

    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3.5" fill="#FACC15" />
          <path
            d="M10.8 12.2V16.2C10.8 17.3 10.1 18 9 18C8.3 18 7.8 17.7 7.5 17.2M16.8 13.4C16.4 12.8 15.8 12.5 15 12.5C14 12.5 13.4 13 13.4 13.8C13.4 14.6 14 14.9 15.2 15.3C16.3 15.7 17 16.1 17 17C17 17.9 16.2 18.5 15.1 18.5C14 18.5 13.3 18.1 12.9 17.4"
            stroke="#060A15"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3.5" fill="#3B82F6" />
          <path
            d="M6.8 12.4H11.6M9.2 12.4V18M17.3 13.2C16.9 12.7 16.3 12.4 15.5 12.4C14.5 12.4 13.9 12.9 13.9 13.7C13.9 14.5 14.5 14.8 15.7 15.2C16.8 15.6 17.5 16 17.5 16.9C17.5 17.8 16.7 18.4 15.6 18.4C14.5 18.4 13.8 18 13.4 17.3"
            stroke="#F8FAFC"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'react':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="2" fill="#22D3EE" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#22D3EE" strokeWidth="1.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.6"
            transform="rotate(60 12 12)"
            stroke="#22D3EE"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.6"
            transform="rotate(120 12 12)"
            stroke="#22D3EE"
            strokeWidth="1.5"
          />
        </svg>
      );

    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="#0F172A" stroke="#E2E8F0" strokeWidth="1.6" />
          <path
            d="M8.5 16.2V8.2L17.2 18.6M15.5 8.2V13.2"
            stroke="#F8FAFC"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 2.8L20 7.4V16.6L12 21.2L4 16.6V7.4L12 2.8Z"
            stroke="#4ADE80"
            strokeWidth="1.9"
            fill="#4ADE80"
            fillOpacity="0.14"
          />
          <path
            d="M9.5 14.5V9.5L14.5 14.5V9.5"
            stroke="#4ADE80"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'php':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="5.8"
            fill="#818CF8"
            fillOpacity="0.18"
            stroke="#818CF8"
            strokeWidth="1.6"
          />
          <path
            d="M6.4 14.2V9.8H8.2C9 9.8 9.4 10.2 9.4 11C9.4 11.8 9 12.2 8.2 12.2H6.4M11.1 14.2V8.8M11.1 10.8H12.7C13.3 10.8 13.7 11.2 13.7 11.9V14.2M15.5 14.2V9.8H17.3C18.1 9.8 18.5 10.2 18.5 11C18.5 11.8 18.1 12.2 17.3 12.2H15.5"
            stroke="#C7D2FE"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'java':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M6 12H16V15.5C16 17.7 14.2 19.5 12 19.5H10C7.8 19.5 6 17.7 6 15.5V12Z"
            stroke="#F87171"
            strokeWidth="1.8"
          />
          <path d="M16 13H17.6C18.7 13 19.5 13.8 19.5 14.8C19.5 15.9 18.7 16.7 17.6 16.7H16" stroke="#F87171" strokeWidth="1.7" />
          <path
            d="M9.5 9C9 7.8 10.5 7 10 5.5M12.8 9C12.3 7.8 13.8 7 13.3 5.5"
            stroke="#FB923C"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <ellipse cx="12" cy="6.2" rx="7" ry="2.6" stroke="#38BDF8" strokeWidth="1.7" />
          <path
            d="M5 6.2V17.4C5 18.8 8.1 20 12 20C15.9 20 19 18.8 19 17.4V6.2"
            stroke="#38BDF8"
            strokeWidth="1.7"
          />
          <path
            d="M5 11.8C5 13.2 8.1 14.4 12 14.4C15.9 14.4 19 13.2 19 11.8"
            stroke="#FBBF24"
            strokeWidth="1.5"
          />
        </svg>
      );

    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 4C8.2 4 5.5 6.6 5.5 10.3C5.5 13.5 7.4 15.7 9.4 16.4V19.2C9.4 19.8 9.9 20.3 10.5 20.3H12.2C13 20.3 13.6 19.6 13.6 18.8V16.6C16.2 16.2 18.5 13.8 18.5 10.3C18.5 6.6 15.8 4 12 4Z"
            stroke="#60A5FA"
            strokeWidth="1.8"
            fill="#60A5FA"
            fillOpacity="0.14"
          />
          <circle cx="9.8" cy="9.8" r="1" fill="#E2E8F0" />
          <circle cx="14.2" cy="9.8" r="1" fill="#E2E8F0" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 2.8L21.2 12L12 21.2L2.8 12L12 2.8Z"
            fill="#F97316"
            fillOpacity="0.15"
            stroke="#F97316"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="8.5" r="1.4" fill="#F97316" />
          <circle cx="12" cy="15.5" r="1.4" fill="#F97316" />
          <circle cx="15.5" cy="12" r="1.4" fill="#F97316" />
          <path d="M12 9.9V14.1M12.9 9.4L14.6 11.1" stroke="#F97316" strokeWidth="1.6" />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 2.8C6.9 2.8 2.8 6.9 2.8 12C2.8 16.1 5.4 19.5 9.1 20.7C9.6 20.8 9.7 20.5 9.7 20.2V18.4C7.1 19 6.6 17.3 6.6 17.3C6.2 16.2 5.6 15.9 5.6 15.9C4.8 15.3 5.7 15.3 5.7 15.3C6.6 15.4 7.1 16.3 7.1 16.3C7.9 17.7 9.2 17.3 9.8 17C9.9 16.4 10.1 16 10.4 15.7C8.4 15.5 6.2 14.7 6.2 11.2C6.2 10.2 6.6 9.4 7.2 8.7C7.1 8.5 6.8 7.5 7.3 6.2C7.3 6.2 8.1 5.9 9.8 7.1C10.5 6.9 11.2 6.8 12 6.8C12.8 6.8 13.5 6.9 14.2 7.1C15.9 5.9 16.7 6.2 16.7 6.2C17.2 7.5 16.9 8.5 16.8 8.7C17.4 9.4 17.8 10.2 17.8 11.2C17.8 14.7 15.6 15.5 13.6 15.7C13.9 16 14.2 16.6 14.2 17.5V20.2C14.2 20.5 14.4 20.8 14.9 20.7C18.6 19.5 21.2 16.1 21.2 12C21.2 6.9 17.1 2.8 12 2.8Z"
            fill="#F1F5F9"
          />
        </svg>
      );

    case 'gitlab':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M12 20.5L15.4 10H8.6L12 20.5Z" fill="#FB923C" />
          <path d="M12 20.5L8.6 10H3.8L12 20.5Z" fill="#F97316" />
          <path d="M3.8 10L2.5 13.9C2.4 14.3 2.5 14.7 2.8 15L12 20.5L3.8 10Z" fill="#FDBA74" />
          <path d="M3.8 10H8.6L6.5 3.6C6.4 3.3 6 3.3 5.9 3.6L3.8 10Z" fill="#EA580C" />
          <path d="M12 20.5L15.4 10H20.2L12 20.5Z" fill="#F97316" />
          <path d="M20.2 10L21.5 13.9C21.6 14.3 21.5 14.7 21.2 15L12 20.5L20.2 10Z" fill="#FDBA74" />
          <path d="M20.2 10H15.4L17.5 3.6C17.6 3.3 18 3.3 18.1 3.6L20.2 10Z" fill="#EA580C" />
        </svg>
      );

    case 'gitlab-ci':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="5.5" cy="12" r="2.3" stroke="#FB923C" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="2.3" stroke="#34D399" strokeWidth="1.8" />
          <circle cx="18.5" cy="12" r="2.3" stroke="#22D3EE" strokeWidth="1.8" />
          <path d="M7.8 12H9.7M14.3 12H16.2" stroke="#94A3B8" strokeWidth="1.7" />
        </svg>
      );

    case 'github-actions':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle
            cx="12"
            cy="12"
            r="8.5"
            stroke="#22D3EE"
            strokeWidth="1.8"
            fill="#22D3EE"
            fillOpacity="0.1"
          />
          <path d="M10.2 8.7L15.8 12L10.2 15.3V8.7Z" fill="#22D3EE" />
        </svg>
      );

    case 'hyperledger':
      return <Blocks className={`${className} text-violet-400`} aria-hidden="true" />;

    case 'llm':
      return <Sparkles className={`${className} text-emerald-400`} aria-hidden="true" />;

    default:
      return <Code2 className={`${className} text-cyan-400`} aria-hidden="true" />;
  }
}

interface CategoryIconProps {
  categoryId: SkillCategory['id'];
  className?: string;
}

export function SkillCategoryIcon({
  categoryId,
  className = 'h-4 w-4 text-cyan-300',
}: CategoryIconProps) {
  switch (categoryId) {
    case 'systemes':
      return <Terminal className={className} aria-hidden="true" />;
    case 'conteneurisation':
      return <Container className={className} aria-hidden="true" />;
    case 'cloud':
      return <Cloud className={className} aria-hidden="true" />;
    case 'developpement':
      return <Code2 className={className} aria-hidden="true" />;
    case 'outils':
      return <GitBranch className={className} aria-hidden="true" />;
  }
}
