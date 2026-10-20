import { brand, nav } from '../data/content';
import { Arrow, BrandImage } from './Primitives';
export function Header() {
  return <header className="store-header" data-level="P0"><div className="header-top wrap"><a className="brand-logo" href={brand.url} aria-label={`${brand.name} — istniejący sklep`}><BrandImage src={brand.logo} alt="RING — polski producent sprzętu sportowego" width={268} height={82}/></a><div className="header-location"><span className="polish-mark" aria-hidden="true"/>Polska produkcja<span>Krasiejów · od {brand.since}</span></div><a className="header-contact" href={brand.phoneUrl}><span>Potrzebujesz pomocy?</span>{brand.phone} <Arrow/></a></div><nav className="store-nav wrap" aria-label="Oferta sklepu">{nav.map(item=><a key={item.name} href={item.url}>{item.name}</a>)}</nav></header>;
}
