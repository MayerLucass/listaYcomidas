import test from 'node:test';
import assert from 'node:assert/strict';
import {buildMealPrompt} from '../src/chatgpt.js';

test('prepara una consulta útil con la despensa y la preferencia',()=>{
  const prompt=buildMealPrompt([{name:'Arroz',quantity:1,unit:'kg',expiry:'2026-10-01'}],'sin horno');
  assert.match(prompt,/Arroz: 1 kg/);
  assert.match(prompt,/vence 2026-10-01/);
  assert.match(prompt,/sin horno/);
  assert.match(prompt,/lo que me faltaría comprar/);
});
