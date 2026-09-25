// Keep purchased groceries and pantry entries linked, so an accidental check
// can be undone without touching manually added pantry items.
function addToPantry(state, item, createId) {
  state.pantry.push({
    id: createId(),
    sourceShoppingId: item.id,
    name: item.name,
    quantity: item.quantity,
    unit: item.unit,
    category: item.category,
    expiry: ''
  });
  item.transferred = true;
}

export function syncPurchased(state, createId) {
  let changed = false;
  for (const item of state.shopping) {
    if (item.done && !item.transferred) {
      addToPantry(state, item, createId);
      changed = true;
    }
  }
  return changed;
}

export function setPurchased(state, shoppingId, purchased, createId) {
  const item = state.shopping.find(entry => entry.id === shoppingId);
  if (!item || item.done === purchased) return false;

  if (purchased) {
    item.done = true;
    if (!item.transferred) {
      addToPantry(state, item, createId);
    }
  } else {
    item.done = false;
    const linkedIndex = state.pantry.findIndex(entry => entry.sourceShoppingId === item.id);
    if (linkedIndex !== -1) {
      state.pantry.splice(linkedIndex, 1);
      item.transferred = false;
    }
    // An older manual transfer has no link. Leave that pantry entry intact.
  }
  return true;
}
