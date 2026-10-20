import { useState } from 'react';
import type { ReactNode } from 'react';
import { copy } from '../data/content';

export function Arrow() { return <span aria-hidden="true">↗</span>; }
export function Icon({ name }: { name: string }) {
  const shapes: Record<string, ReactNode> = {
    flag: <><path d="M5 21V4m0 0c5-5 9 5 14 0v10c-5 5-9-5-14 0"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    chat: <path d="M21 11a9 9 0 0 1-9 9H4l-2 2V11a9 9 0 0 1 19 0Z M7 10h10M7 14h6"/>,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>,
    audit: <><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 8h6M9 12h6M9 16h4"/></>,
  };
  return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[name] ?? shapes.star}</svg>;
}
export function BrandImage({ src, alt, width = 600, height = 400, className = '' }: {src: string; alt: string; width?: number; height?: number; className?: string}) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span role="img" aria-label={`${alt}. ${copy.imageFallback}`} className={`image-fallback ${className}`}>{copy.imageFallback}</span>;
  return <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" className={className} onError={() => setFailed(true)} />;
}
export function SectionHeading({eyebrow, title, link, url}: {eyebrow?: string; title: string; link?: string; url?: string}) {
  return <div className="section-heading"><div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2></div>{link && url && <a className="text-link" href={url}>{link} <Arrow/></a>}</div>;
}
