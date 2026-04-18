# Capability: MagicBento Copy

## ADDED Requirements

### Requirement: Update Card Content
The `MagicBento` component **SHALL** display the updated brand copy for strength, mindset, power, attitude, and endurance.

#### Scenario: Verify FUERZA Card
- **Given** the `MagicBento` component is rendered
- **Then** the card with index 0 should have the title "Forjada para Ganar"
- **And** the description should be "Ropa deportiva de alto rendimiento diseñada para quienes no aceptan el segundo lugar. Cada costura, una declaración de poder."

#### Scenario: Verify MENTALIDAD Card
- **Given** the `MagicBento` component is rendered
- **Then** the card with index 1 should have the label "MENTALIDAD"
- **And** the title "El Sudor Es Tu Firma"
- **And** the description "Viste lo que refleja lo que eres: alguien que da el cien por cien, cada sesión, sin excusas."

#### Scenario: Verify PASIÓN Card (Placeholder)
- **Given** the `MagicBento` component is rendered
- **Then** the card with index 2 should retain the label "PASIÓN"
- **And** the title "Espíritu de Lucha"
- **And** the description "Ropa que grita determinación en cada serie."

#### Scenario: Verify POTENCIA Card
- **Given** the `MagicBento` component is rendered
- **Then** the card with index 3 should have the title "Ingeniería que Rompe Récords"
- **And** the description "Transpirabilidad extrema, cortes ergonómicos y materiales de élite para que tu rendimiento no tenga techo. Creada por atletas, para atletas."

#### Scenario: Verify ACTITUD Card
- **Given** the `MagicBento` component is rendered
- **Then** the card with index 4 should have the title "Domina Cada Espacio"
- **And** the description "Diseños que imponen respeto desde que entras. Porque la actitud se viste, no se finge."

#### Scenario: Verify RESISTENCIA Card
- **Given** the `MagicBento` component is rendered
- **Then** the card with index 5 should have the title "Sin Descanso. Sin Concesiones."
- **And** the description "Materiales que aguantan tanto como tú. Ropa deportiva premium construida para los que van más allá de sus límites."
