import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { CategoryTiles } from '../components/CategoryTiles';
import { ProductGrid } from '../components/ProductGrid';
import { GoalPaths, B2BSection, ShoppingBenefits, EditorialEnd } from '../components/Sections';
export function Variant2() {return <><Hero variant={2}/><TrustBar/><GoalPaths/><CategoryTiles compact/><ProductGrid mode="selection"/><B2BSection/><ShoppingBenefits/><EditorialEnd/></>;}
