# Design: MagicBento Copy Update

## Architectural Reasoning
The `MagicBento` component uses a static `cardData` array defined within the file. This update targets that specific data structure.

## New Content Mapping
Based on client requirements, the following mapping will be applied:

| Card Index | Current Label | New Label | New Title | New Description |
| :--- | :--- | :--- | :--- | :--- |
| 0 | FUERZA | FUERZA | Forjada para Ganar | Ropa deportiva de alto rendimiento diseñada para quienes no aceptan el segundo lugar. Cada costura, una declaración de poder. |
| 1 | AGILIDAD | **MENTALIDAD** | El Sudor Es Tu Firma | Viste lo que refleja lo que eres: alguien que da el cien por cien, cada sesión, sin excusas. |
| 2 | PASIÓN | PASIÓN | Espíritu de Lucha | Ropa que grita determinación en cada serie. (Mantenido como placeholder) |
| 3 | POTENCIA | POTENCIA | Ingeniería que Rompe Récords | Transpirabilidad extrema, cortes ergonómicos y materiales de élite para que tu rendimiento no tenga techo. Creada por atletas, para atletas. |
| 4 | ACTITUD | ACTITUD | Domina Cada Espacio | Diseños que imponen respeto desde que entras. Porque la actitud se viste, no se finge. |
| 5 | RESISTENCIA | RESISTENCIA | Sin Descanso. Sin Concesiones. | Materiales que aguantan tanto como tú. Ropa deportiva premium construida para los que van más allá de sus límites. |

## Trade-offs
- **Hardcoded Data:** While keeping data in the component is simple, it may become harder to maintain if multiple languages or dynamic content are required in the future. For now, we follow the "minimal implementations first" guardrail.
- **Text Length:** The new descriptions are longer than the original ones. We must ensure the `MagicBento` CSS handles potential overflow or height adjustments gracefully.
- **Missing Information (Card 2):** Since the client did not provide specific text for the "PASIÓN" card (Large top right), it will remain with its current content to maintain grid integrity.

