import { trust } from '../data/content';
import { Icon } from './Primitives';
export function TrustBar() { return <div className="trust-bar wrap" data-level="P0" aria-label="Dlaczego RING-SPORT">{trust.map(item=><a href={item.url} key={item.title}><Icon name={item.symbol}/><span><strong>{item.title}</strong><small>{item.detail}</small></span></a>)}</div>; }
