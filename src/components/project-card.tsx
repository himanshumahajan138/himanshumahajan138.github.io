/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Globe, Languages, ScanSearch, Sparkles, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";
import Markdown from "react-markdown";

const ICON_MAP: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  languages: Languages,
  globe: Globe,
  scansearch: ScanSearch,
};

const PLACEHOLDER_PALETTES = [
  // [blob-1, blob-2, blob-3, base]
  ["#a855f7", "#ec4899", "#22d3ee", "#0b0414"], // violet · pink · cyan
  ["#f97316", "#fbbf24", "#ef4444", "#1a0a05"], // orange · amber · red
  ["#10b981", "#14b8a6", "#38bdf8", "#02201c"], // emerald · teal · sky
  ["#6366f1", "#a855f7", "#ec4899", "#0c0a26"], // indigo · violet · pink
  ["#f43f5e", "#d946ef", "#8b5cf6", "#190a1f"], // rose · fuchsia · violet
];

function ProjectPlaceholder({
  title,
  Icon,
}: {
  title: string;
  Icon?: LucideIcon;
}) {
  const hash = Array.from(title).reduce((a, c) => a + c.charCodeAt(0), 0) + title.length * 11;
  const [c1, c2, c3, base] = PLACEHOLDER_PALETTES[hash % PLACEHOLDER_PALETTES.length];
  const initial = title.charAt(0).toUpperCase();
  const reactId = useId();
  const gradId = `ph-grad-${reactId.replace(/[^a-z0-9]/gi, "")}`;
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now() + Math.random();
    setRipples((prev) => [
      ...prev,
      { x: e.clientX - rect.left, y: e.clientY - rect.top, id },
    ]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 900);
  };

  return (
    <div
      className="placeholder-card w-full h-48 relative overflow-hidden font-sans"
      style={{ backgroundColor: base }}
      onPointerDown={handlePointerDown}
    >
      <div className="absolute inset-0 overflow-hidden hue-shifter">
        <div
          className="absolute size-72 rounded-full blur-3xl opacity-80 blob-a will-change-transform"
          style={{ background: c1, top: "-30%", left: "-20%" }}
        />
        <div
          className="absolute size-64 rounded-full blur-3xl opacity-75 blob-b will-change-transform"
          style={{ background: c2, top: "-20%", right: "-25%" }}
        />
        <div
          className="absolute size-80 rounded-full blur-3xl opacity-70 blob-c will-change-transform"
          style={{ background: c3, bottom: "-40%", left: "20%" }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.10] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 -left-1/2 h-full w-1/3 shimmer-sweep"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
          }}
        />
      </div>

      <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
        <span className="size-1.5 rounded-full bg-white/40" />
        <span className="size-1.5 rounded-full bg-white/30" />
        <span className="size-1.5 rounded-full bg-white/20" />
      </div>

      {Icon ? (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Icon
            size={64}
            className="text-white"
            strokeWidth={1}
            style={{
              filter: `drop-shadow(0 6px 24px rgba(0,0,0,0.5)) drop-shadow(0 0 12px ${c1}66)`,
            }}
            aria-hidden
          />
        </div>
      ) : (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 200 100"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#ffffff" />
              <stop offset="75%" stopColor={c1} />
              <stop offset="100%" stopColor={c2} />
            </linearGradient>
            <filter id={`${gradId}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.45" />
            </filter>
          </defs>
          <text
            x="100"
            y="50"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize="62"
            fontWeight="900"
            fill={`url(#${gradId})`}
            letterSpacing="-3"
            filter={`url(#${gradId}-shadow)`}
            style={{ fontFamily: "var(--font-sans), ui-sans-serif, system-ui, sans-serif" }}
          >
            {initial}
          </text>
        </svg>
      )}

      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple-burst"
          style={{ left: r.x, top: r.y }}
        />
      ))}

      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5">
        <span className="size-1 rounded-full bg-white/70 animate-pulse" />
        <span className="text-[10px] font-mono tracking-[0.25em] text-white/55 uppercase">
          {title.slice(0, 14)}
        </span>
      </div>
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  title,
  Icon,
}: {
  src: string;
  alt: string;
  title: string;
  Icon?: LucideIcon;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <ProjectPlaceholder title={title} Icon={Icon} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  icon?: string;
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  icon,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="relative shrink-0">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover"
            />
          ) : (
            <ProjectImage src={image ?? ""} alt={title} title={title} Icon={icon ? ICON_MAP[icon] : undefined} />
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
