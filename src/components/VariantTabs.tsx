import type { KeyboardEvent } from 'react';
import { variants } from '../data/content';
import type { VariantId } from '../data/content';
export function VariantTabs({ selected, onChange }: {selected: VariantId; onChange: (id: VariantId)=>void}) {
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if(event.key==='ArrowRight') next=(index+1)%5;
    else if(event.key==='ArrowLeft') next=(index+4)%5;
    else if(event.key==='Home') next=0;
    else if(event.key==='End') next=4;
    else return;
    event.preventDefault();onChange((next+1) as VariantId);document.getElementById(`variant-tab-${next+1}`)?.focus();
  }
  return <div className="poc-shell"><div className="poc-intro wrap"><span className="poc-label">PoC <span>/</span> RING-SPORT</span><span className="poc-description">Jedna marka. Pięć kierunków.</span><span className="poc-counter">KONCEPCJA 0{selected} / 05</span></div><div className="variant-tabs wrap" role="tablist" aria-label="Warianty strony głównej">{variants.map((v,i)=><button key={v.id} id={`variant-tab-${v.id}`} role="tab" aria-selected={selected===v.id} aria-controls="variant-panel" tabIndex={selected===v.id?0:-1} onClick={()=>onChange(v.id)} onKeyDown={event=>onKeyDown(event,i)}><span className="tab-number">0{v.id}</span>{v.name}<span className="tab-scope">{v.scope}</span></button>)}</div><div className="poc-caption wrap"><span>{variants[selected-1].short}</span><span>Projekt strony głównej · podgląd, nie sklep</span></div></div>;
}
