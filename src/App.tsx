import { useEffect, useState } from 'react';
import { VariantTabs } from './components/VariantTabs';
import { AuditDrawer } from './components/AuditDrawer';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Variant1 } from './variants/Variant1';
import { Variant2 } from './variants/Variant2';
import { Variant3 } from './variants/Variant3';
import { Variant4 } from './variants/Variant4';
import { Variant5 } from './variants/Variant5';
import type { VariantId } from './data/content';
import { variants } from './data/content';
const views = [Variant1,Variant2,Variant3,Variant4,Variant5];
function readVariant(): VariantId {const value=new URLSearchParams(window.location.search).get('v');return value&&/^[1-5]$/.test(value)?Number(value) as VariantId:1;}
export default function App() {
  const [variant,setVariant]=useState<VariantId>(readVariant);
  useEffect(()=>{const restore=()=>setVariant(readVariant());window.addEventListener('popstate',restore);return ()=>window.removeEventListener('popstate',restore);},[]);
  useEffect(()=>{document.title=`${variants[variant-1].name} · RING-SPORT · PoC`;},[variant]);
  function select(id: VariantId){if(id===variant)return;const url=new URL(window.location.href);url.searchParams.set('v',String(id));url.hash='';window.history.pushState({},'',url);setVariant(id);window.scrollTo({top:0,behavior:'instant'});}
  const View=views[variant-1];
  return <><a className="skip-link" href="#main">Przejdź do treści</a><VariantTabs selected={variant} onChange={select}/><div id="variant-panel" role="tabpanel" aria-labelledby={`variant-tab-${variant}`} className={`store variant-${variant}`}><Header/><main id="main" tabIndex={-1}><View/></main><Footer/></div><AuditDrawer variant={variant}/></>;
}
