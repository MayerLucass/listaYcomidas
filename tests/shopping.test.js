import test from 'node:test';
import assert from 'node:assert/strict';
import {setPurchased,syncPurchased} from '../src/shopping.js';

test('marcar comprado ingresa automáticamente en la despensa, una sola vez',()=>{
  const state={shopping:[{id:'a',name:'Leche',quantity:2,unit:'l',category:'Lácteos y huevos',done:false,transferred:false}],pantry:[]};
  assert.equal(setPurchased(state,'a',true,()=> 'p'),true);
  assert.deepEqual(state.pantry,[{id:'p',sourceShoppingId:'a',name:'Leche',quantity:2,unit:'l',category:'Lácteos y huevos',expiry:''}]);
  assert.equal(setPurchased(state,'a',true,()=> 'q'),false);
  assert.equal(state.pantry.length,1);
});

test('desmarcar revierte solo el alimento vinculado y permite marcarlo otra vez',()=>{
  const state={shopping:[{id:'a',name:'Arroz',quantity:1,unit:'kg',category:'Almacén',done:false,transferred:false}],pantry:[{id:'manual',name:'Arroz',quantity:2}]};
  setPurchased(state,'a',true,()=> 'p');
  setPurchased(state,'a',false,()=> 'unused');
  assert.deepEqual(state.pantry,[{id:'manual',name:'Arroz',quantity:2}]);
  setPurchased(state,'a',true,()=> 'q');
  assert.equal(state.pantry.find(entry=>entry.sourceShoppingId==='a').id,'q');
});

test('una compra antigua transferida manualmente no se duplica',()=>{
  const state={shopping:[{id:'a',name:'Pan',quantity:1,done:false,transferred:true}],pantry:[{id:'old',name:'Pan'}]};
  setPurchased(state,'a',true,()=> 'new');
  assert.equal(state.pantry.length,1);
});

test('migra compras que ya estaban marcadas antes de la actualización',()=>{
  const state={shopping:[{id:'a',name:'Tomate',quantity:3,unit:'unid.',category:'Verduras y frutas',done:true,transferred:false}],pantry:[]};
  assert.equal(syncPurchased(state,()=> 'p'),true);
  assert.equal(syncPurchased(state,()=> 'q'),false);
  assert.equal(state.pantry.length,1);
  assert.equal(state.pantry[0].sourceShoppingId,'a');
});
