import assert from 'node:assert/strict';
import { products, variants, categories, originalMenu, brand } from '../src/data/content.ts';
import { getAudit } from '../src/data/audit.ts';
assert.equal(variants.length, 5);
assert(products.length >= 8 && products.length <= 12);
assert.equal(new Set(products.map(p => p.id)).size, products.length);
for (const product of products) {
  assert(product.name && product.price && product.source);
  assert.equal(new URL(product.image).hostname, 'ring-sport.pl');
  assert(!product.image.includes('loader.gif'));
  if (product.group === 'promotion') assert(product.regularPrice && product.lowestPrice);
}
for (const variant of variants) {
  const audit = getAudit(variant.id);
  assert(audit.title.length <= 60, `title W${variant.id}: ${audit.title.length}`);
  assert(audit.description.length <= 155, `description W${variant.id}: ${audit.description.length}`);
  assert(audit.h1 && audit.headings.length);
  assert.equal(JSON.parse(audit.jsonld)['@graph'][0].name, brand.name);
  assert(audit.changes.every(c => ['P0', 'P1', 'P2'].includes(c.level)));
  if (variant.id === 1) assert(audit.changes.every(c => c.level !== 'P2'));
}
assert(originalMenu.length && categories.length === 8);
const serialized = JSON.stringify({products, categories, originalMenu, variants});
assert(!/[?&](_gl|gclid|gbraid)=/.test(serialized));
console.log('OK: 5 wariantów, 11 produktów, SEO, JSON-LD, poziomy P0–P2 i czyste linki.');
