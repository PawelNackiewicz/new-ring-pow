import { brand, variants } from '../data/content';
import type { VariantId } from '../data/content';
import { Arrow, BrandImage } from './Primitives';
export function Hero({ variant }: {variant: VariantId}) {
  const data = variants[variant-1].hero;
  return <section className="hero wrap" data-level={variant===1||variant===4?'P0':'P2'} aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow"><span/> {data.eyebrow}</p><h1 id="hero-title">{data.title}</h1><p className="hero-description">{data.description}</p><div className="hero-actions"><a href={data.primaryUrl} className="button button-primary">{data.primary}<Arrow/></a><a href={data.secondaryUrl} className="button button-secondary">{data.secondary}<Arrow/></a></div><div className="hero-signature"><span aria-hidden="true">R /</span> {data.caption}</div></div><div className={`hero-media ${variant===4?'hero-media-fire':''}`}><BrandImage key={data.image} src={data.image} alt={variant===4?'Sprzęt treningowy RING-SPORT z banera rękawic Fire':'Ring i klatka MMA z oficjalnego banera RING-SPORT'} width={1920} height={820}/><span className="hero-media-caption">RING-SPORT <span>EST. {brand.since}</span></span></div></section>;
}
