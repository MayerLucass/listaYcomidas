import test from 'node:test';
import assert from 'node:assert/strict';
import {hasIngredient,suggestions} from '../src/recipes.js';

test('reconoce nombres frecuentes y acentos',()=>{
  assert.equal(hasIngredient([{name:'Papas grandes'}],'papa'),true);
  assert.equal(hasIngredient([{name:'Tallarines'}],'fideos'),true);
  assert.equal(hasIngredient([{name:'Tallarín'}],'fideos'),true);
  assert.equal(hasIngredient([{name:'Huevos'}],'huevo'),true);
});
test('ordena primero las recetas que se pueden preparar',()=>{
  const result=suggestions([{name:'huevo'},{name:'queso'}]);
  assert.equal(result[0].id,'omelette');
  assert.deepEqual(result[0].missing,[]);
});
