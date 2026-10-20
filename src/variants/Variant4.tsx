import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { CategoryTiles } from '../components/CategoryTiles';
import { ProductGrid } from '../components/ProductGrid';
import { ShoppingBenefits, EditorialEnd } from '../components/Sections';
export function Variant4() {return <><Hero variant={4}/><TrustBar/><CategoryTiles compact/><ProductGrid/><ProductGrid mode="offers"/><ShoppingBenefits/><EditorialEnd/></>;}
