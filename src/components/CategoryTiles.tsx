import { categories, copy, links } from '../data/content';
import { Arrow, BrandImage, SectionHeading } from './Primitives';
export function CategoryTiles({ compact = false }: {compact?: boolean}) {
  return <section className={`section wrap categories-section ${compact?'categories-compact':''}`} data-level="P0" id="kategorie"><SectionHeading {...copy.categories} url={links.shop}/><div className="category-grid">{categories.map((item,i)=><a href={item.url} className="category-tile" key={item.name}><div className="category-image"><BrandImage src={item.image} alt={item.name} width={285} height={186}/><span className="category-number" aria-hidden="true">0{i+1}</span></div><div className="category-name"><span>{item.name}</span><Arrow/></div></a>)}</div></section>;
}
