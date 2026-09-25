export function buildMealPrompt(pantry, preferences='') {
  const lines=pantry.map(item=>`- ${item.name}: ${item.quantity} ${item.unit}${item.expiry?` (vence ${item.expiry})`:''}`);
  return `Actuá como mi asistente de cocina. Estoy en Argentina y estos son los alimentos que tengo en casa:\n${lines.join('\n')}\n\n${preferences?`Hoy prefiero: ${preferences}\n\n`:''}Dame 3 comidas concretas que pueda preparar, priorizando lo que está por vencer. Para cada comida indicá ingredientes que ya tengo, lo que me faltaría comprar, pasos simples, tiempo aproximado y para cuántas personas rinde. No supongas que tengo otros ingredientes principales; podés mencionar sal, agua o aceite como básicos opcionales. Respondé en español claro.`;
}
