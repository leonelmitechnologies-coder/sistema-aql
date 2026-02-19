# ANÁLISIS INTEGRAL DE CALIDAD - TELEVISORES SNTV
## MI Technologies Inc.
### Ingeniero de Calidad Black Belt - Análisis y Plan de Mejora

**Fecha:** 13 de Febrero, 2026
**Elaborado por:** Ingeniero de Calidad Black Belt
**Documentos de referencia:** ISO 9001:2015, EI-MTY-PRU-ELE-001, AC-MTY-DES-001-PANTALLA

---

## EXECUTIVE SUMMARY

### Situación Crítica Identificada
- **Total de quejas registradas:** 1,624
- **Quejas de televisores (SNTV):** 1,365 registros
- **Porcentaje:** **84.05%** de todas las quejas corresponden a televisores
- **Impacto económico estimado:** >$409,500 USD (basado en 1,365 unidades × $300 promedio)
- **Nivel de severidad:** **CRÍTICO** - Requiere acción inmediata

### Hallazgos Clave
1. **39% de las quejas** están relacionadas con daños en pantalla (quebradas + defectos)
2. Ya existe alerta de calidad AC-MTY-DES-001-PANTALLA (NPR: 288) pero no ha sido efectiva
3. Inspecciones actuales al 100% solo cubren aspectos eléctricos, NO aspectos cosméticos/físicos
4. Falta de controles preventivos en etapas críticas de manipulación

---

## 1. ANÁLISIS ESTADÍSTICO DETALLADO

### 1.1 Distribución por Tipo de Defecto (Top 10)

| Razón de Queja | Cantidad | % del Total SNTV | % Acumulado | Categoría |
|----------------|----------|------------------|-------------|-----------|
| Quebrada | 349 | 25.6% | 25.6% | **Crítico - Físico** |
| Defecto En Pantalla | 186 | 13.6% | 39.2% | **Crítico - Físico** |
| Defective | 92 | 6.7% | 45.9% | Funcional |
| Incompleto | 82 | 6.0% | 51.9% | Logístico |
| Mala Calidad | 79 | 5.8% | 57.7% | Cosmético |
| No Funciona | 63 | 4.6% | 62.3% | Funcional |
| Defectuoso | 57 | 4.2% | 66.5% | Funcional |
| Problema de inventario | 46 | 3.4% | 69.9% | Logístico |
| Software | 34 | 2.5% | 72.4% | Configuración |
| Envío erróneo | 32 | 2.3% | 74.7% | Logístico |

**Análisis de Pareto (80/20):**
- **Los primeros 4 tipos de defectos** representan el **51.9%** de las quejas
- **Daños físicos en pantalla** (Quebrada + Defecto) = **535 quejas (39.2%)**

### 1.2 SKUs Más Problemáticos (Top 10)

| Ranking | SKU | Quejas | % del Total | Acción Requerida |
|---------|-----|--------|-------------|------------------|
| 1 | SNTV001764 | 106 | 7.8% | **Auditoría profunda** |
| 2 | SNTV001763 | 54 | 4.0% | **Auditoría profunda** |
| 3 | SNTV002236 | 42 | 3.1% | Inspección mejorada |
| 4 | SNTV001863 | 41 | 3.0% | Inspección mejorada |
| 5 | SNTV001864 | 36 | 2.6% | Inspección mejorada |
| 6 | SNTV007322 | 34 | 2.5% | Inspección mejorada |
| 7 | SNTV006722 | 34 | 2.5% | Inspección mejorada |
| 8 | SNTV007321 | 32 | 2.3% | Monitoreo continuo |
| 9 | SNTV004097 | 32 | 2.3% | Monitoreo continuo |
| 10 | SNTV006643 | 24 | 1.8% | Monitoreo continuo |

### 1.3 Distribución por Tienda/Canal

| Tienda | Quejas | % | Análisis |
|--------|--------|---|----------|
| Exclusive B | 389 | 28.5% | Mayor volumen - requiere atención |
| Blow | 288 | 21.1% | Alto volumen |
| Apantallate | 204 | 14.9% | Volumen medio-alto |
| Miofertas | 151 | 11.1% | Volumen medio |
| Autobot | 48 | 3.5% | Bajo volumen |
| Vecktor | 34 | 2.5% | Bajo volumen |
| Otros | 251 | 18.4% | Varios canales |

### 1.4 Análisis de Palabras Clave en Comentarios

| Tipo de Problema | Ocurrencias | % Estimado |
|-----------------|-------------|------------|
| Defectos en pantalla (manchas, líneas, rayas) | 566 | 41.5% |
| Pantallas quebradas/dañadas físicamente | 364 | 26.7% |
| Productos incompletos (falta accesorios) | 119 | 8.7% |
| No funciona / No enciende | 117 | 8.6% |
| Problemas WiFi/Conectividad | 42 | 3.1% |
| Problemas de Software/PIN bloqueado | 38 | 2.8% |

---

## 2. ANÁLISIS DE CAUSA RAÍZ (RCA) - METODOLOGÍA 5 WHYs

### 2.1 Problema Principal: Pantallas Quebradas/Dañadas (535 quejas)

**Por qué 1:** ¿Por qué las pantallas llegan quebradas o con defectos al cliente?
→ Porque se dañan durante el proceso de manipulación en planta o transporte

**Por qué 2:** ¿Por qué se dañan durante la manipulación?
→ Porque los operadores tocan/presionan la pantalla o no siguen técnicas adecuadas de manejo

**Por qué 3:** ¿Por qué los operadores no siguen técnicas adecuadas?
→ Porque:
- La capacitación no es efectiva o no se refuerza constantemente
- No hay verificación activa del cumplimiento de procedimientos
- No hay consecuencias por incumplimiento
- El diseño de la estación no facilita el manejo correcto

**Por qué 4:** ¿Por qué la capacitación no es efectiva?
→ Porque:
- Falta de práctica supervisada
- No hay certificación obligatoria
- La rotación de personal hace que nuevos operadores no estén entrenados
- No hay auditorías de técnica de manejo en tiempo real

**Por qué 5:** ¿Por qué no se detectan las pantallas dañadas antes del envío?
→ Porque:
- **No existe inspección visual al 100% para defectos cosméticos/físicos**
- Las inspecciones actuales (EI-MTY-PRU-ELE-001) solo cubren aspectos eléctricos
- No hay un checkpoint de inspección final antes del empaque

**CAUSA RAÍZ IDENTIFICADA:**
1. **Ausencia de inspección visual al 100% para defectos físicos/cosméticos en pantalla**
2. **Falta de controles preventivos efectivos durante manipulación**
3. **Capacitación insuficiente con verificación en tiempo real**

### 2.2 Problema Secundario: Productos Incompletos (82 quejas + 119 ocurrencias)

**Análisis:**
- Falta cables de alimentación, soportes, controles remotos, accesorios
- Causa raíz: **Falta de checklist de verificación de completitud pre-empaque**
- Impacto: Menor que pantallas, pero genera insatisfacción y costos de reenvío

### 2.3 Problema Terciario: No Funciona / Defectuoso (212 quejas combinadas)

**Análisis:**
- A pesar de tener inspección eléctrica al 100% (EI-MTY-PRU-ELE-001)
- Posibles causas:
  - Daño durante transporte post-inspección
  - Inspección no detecta todos los modos de falla
  - Tiempo de encendido insuficiente (burn-in)
  - Problemas intermitentes no detectables en prueba rápida

---

## 3. ANÁLISIS FMEA (Failure Mode and Effects Analysis)

### Tabla FMEA - Top 5 Modos de Falla

| Modo de Falla | Efecto Potencial | Severidad (S) | Ocurrencia (O) | Detección (D) | RPN | Prioridad |
|---------------|------------------|---------------|----------------|---------------|-----|-----------|
| Pantalla quebrada por manipulación | Cliente recibe TV inservible | 10 | 9 | 8 | **720** | **1 - CRÍTICO** |
| Defecto cosmético en pantalla (manchas, líneas) | Cliente recibe producto defectuoso | 9 | 8 | 7 | **504** | **2 - CRÍTICO** |
| Falta accesorios en empaque | Cliente no puede usar TV | 6 | 7 | 8 | **336** | **3 - ALTO** |
| TV no enciende (defecto eléctrico) | Cliente recibe TV inservible | 10 | 5 | 4 | **200** | **4 - MEDIO** |
| Configuración previa/PIN bloqueado | Cliente no puede configurar TV | 5 | 3 | 9 | **135** | **5 - MEDIO** |

**Escala:**
- Severidad (S): 1-10 (10 = más severo)
- Ocurrencia (O): 1-10 (10 = más frecuente)
- Detección (D): 1-10 (10 = menos detectable)
- RPN = S × O × D

**Objetivos de Reducción:**
- RPN > 500 → Reducir a < 200 en 3 meses
- RPN > 200 → Reducir a < 100 en 6 meses

---

## 4. PLAN DE MUESTREO AQL (ACCEPTANCE QUALITY LEVEL)

### 4.1 Niveles AQL Propuestos por Tipo de Defecto

Basado en **MIL-STD-105E / ISO 2859-1 / ANSI/ASQ Z1.4**

| Tipo de Defecto | Clasificación | AQL Propuesto | Justificación |
|-----------------|---------------|---------------|---------------|
| **Pantalla quebrada** | Crítico | **0.065** | Cero tolerancia - 100% inspección |
| **Defecto visible en pantalla** | Crítico | **0.065** | Cero tolerancia - 100% inspección |
| **No enciende** | Crítico | **0.065** | Cero tolerancia - 100% inspección actual |
| **Falta accesorios** | Mayor | **0.65** | Inspección por muestreo |
| **Defectos cosméticos menores** | Menor | **2.5** | Inspección por muestreo |

### 4.2 Plan de Muestreo para Defectos Críticos (Pantalla)

**RECOMENDACIÓN: INSPECCIÓN AL 100%**

Para defectos críticos (pantallas), NO se recomienda muestreo. Se requiere:
- **Inspección visual al 100% de cada unidad**
- **Doble verificación (operador + QA)**
- **Uso de cuarto oscuro con iluminación LED para detectar defectos sutiles**

### 4.3 Plan de Muestreo para Defectos Mayores (Accesorios)

**Nivel de Inspección:** II (General)
**AQL:** 0.65 (Defectos Mayores)

| Tamaño de Lote | Tamaño de Muestra | Aceptación (Ac) | Rechazo (Re) |
|----------------|-------------------|-----------------|--------------|
| 26-50 | 13 | 0 | 1 |
| 51-90 | 20 | 0 | 1 |
| 91-150 | 32 | 1 | 2 |
| 151-280 | 50 | 1 | 2 |
| 281-500 | 80 | 2 | 3 |
| 501-1200 | 125 | 3 | 4 |

**Procedimiento:**
1. Por cada lote de producción, tomar muestra aleatoria
2. Verificar completitud de accesorios (checklist)
3. Si defectos ≤ Ac → Aceptar lote
4. Si defectos ≥ Re → Rechazar lote completo y hacer inspección 100%

### 4.4 Plan de Muestreo para Defectos Menores (Cosméticos)

**Nivel de Inspección:** II (General)
**AQL:** 2.5 (Defectos Menores)

| Tamaño de Lote | Tamaño de Muestra | Aceptación (Ac) | Rechazo (Re) |
|----------------|-------------------|-----------------|--------------|
| 26-50 | 13 | 1 | 2 |
| 51-90 | 20 | 1 | 2 |
| 91-150 | 32 | 2 | 3 |
| 151-280 | 50 | 3 | 4 |
| 281-500 | 80 | 5 | 6 |

Defectos menores incluyen:
- Rayones leves en marco (no pantalla)
- Manchas en carcasa posterior
- Etiquetas ligeramente torcidas
- Pequeñas imperfecciones cosméticas

---

## 5. PLAN INTEGRAL DE MEJORA DE CALIDAD

### 5.1 ACCIONES INMEDIATAS (Semana 1-2) - CRÍTICO

#### A. Inspección Visual al 100% - IMPLEMENTACIÓN URGENTE

**Objetivo:** Detectar el 100% de defectos de pantalla antes del empaque final

**Acción:**
1. **Crear checkpoint de inspección visual obligatorio**
   - Ubicación: Entre prueba eléctrica y empaque final
   - Tiempo estimado: 2-3 minutos por unidad
   - Responsable: Operador QA certificado

2. **Diseñar estación de inspección visual**
   - **Cuarto oscuro con iluminación LED controlada**
   - Fondo negro/blanco intercambiable para contrastar
   - Lupa de aumento 2x para inspección detallada
   - Plantilla de inspección con patrón de prueba en pantalla

3. **Protocolo de inspección** (agregar a EI-MTY-PRU-ELE-001):
   ```
   INSPECCIÓN VISUAL DE PANTALLA (100% - Cada Unidad)

   PREPARACIÓN:
   □ Encender TV y mostrar imagen blanca pura (255,255,255)
   □ Atenuar iluminación ambiental
   □ Usar luz LED para iluminación lateral

   VERIFICACIÓN:
   □ Inspección zona por zona (dividir pantalla en 9 cuadrantes)
   □ Buscar: Manchas, líneas, píxeles muertos, decoloración, grietas
   □ Cambiar a imagen negra pura (0,0,0)
   □ Buscar: Iluminación desigual, backlight bleeding
   □ Inspección de marco: Grietas, deformaciones, daños

   CRITERIO DE ACEPTACIÓN:
   ✓ Cero defectos visibles en área activa de pantalla
   ✓ Marco sin grietas o deformaciones
   ✓ Backlight uniforme (variación < 10%)

   CRITERIO DE RECHAZO:
   ✗ Cualquier mancha visible (>2mm)
   ✗ Cualquier línea visible
   ✗ Más de 3 píxeles muertos
   ✗ Grietas en pantalla o marco
   ✗ Decoloración visible
   ```

4. **Formato de registro:**
   - Hoja de inspección diaria con SKU, Serial, Inspector, Resultado
   - Fotografía de defectos rechazados
   - Base de datos digital para trazabilidad

**Inversión estimada:**
- Cuarto oscuro con iluminación: $5,000 USD
- Capacitación de inspectores: $2,000 USD
- Tiempo adicional de proceso: 2-3 min/unidad
- **ROI esperado:** Reducción de 80% de quejas de pantalla = ahorro de $327,600 USD/año

#### B. Reforzamiento de Técnica de Manejo

**Acción:**
1. **Re-capacitación obligatoria 100% del personal**
   - Sesión teórica: 1 hora
   - Sesión práctica supervisada: 2 horas
   - Certificación con examen práctico

2. **Auditorías de técnica de manejo cada 2 horas**
   - Supervisor QA observa técnica
   - Corrección en tiempo real
   - Registro en bitácora

3. **Sistema de consecuencias:**
   - 1ra falta: Advertencia verbal + re-capacitación
   - 2da falta: Advertencia escrita + evaluación de desempeño
   - 3ra falta: Reasignación a otra área

4. **Ayudas visuales permanentes:**
   - Posters en cada estación (técnica correcta vs. incorrecta)
   - Video en loop en pantallas de área
   - Marcas en piso para posicionamiento correcto

**Responsable:** Supervisor de Turno + QA
**Frecuencia:** Diaria durante primer mes, semanal después

#### C. Checklist de Completitud de Accesorios

**Objetivo:** Reducir quejas de "Incompleto" a < 10 por mes

**Acción:**
1. **Crear checklist específico por modelo de TV**
   - Ejemplo para SNTV001764:
     ```
     □ Cable de alimentación (1x)
     □ Control remoto + baterías AAA (2x)
     □ Soporte/patitas (2x) + tornillos (4x)
     □ Manual de usuario
     □ Tarjeta de garantía
     □ Cable HDMI (si aplica según modelo)
     ```

2. **Verificación en dos puntos:**
   - Punto 1: Operador de empaque (autocheck)
   - Punto 2: QA inspector (verificación aleatoria según AQL 0.65)

3. **Formato de registro:**
   - Hoja de verificación adherida a caja externa
   - Firma de operador y fecha
   - Inspección por muestreo de QA

**Responsable:** Líder de Empaque + QA
**Implementación:** Inmediata

---

### 5.2 ACCIONES A CORTO PLAZO (Mes 1-3)

#### A. Mejoras Ergonómicas en Estaciones de Trabajo

**Objetivo:** Facilitar manipulación segura y reducir fatiga del operador

**Acciones:**
1. **Evaluación ergonómica de estaciones**
   - Contratar ergonomista certificado
   - Evaluar altura de mesas, espacios, iluminación
   - Identificar movimientos de riesgo

2. **Implementar mejoras:**
   - Ajustar altura de mesas de trabajo (altura variable)
   - Instalar rodillos/rieles para desplazamiento de TVs grandes
   - Mejorar iluminación (LED 5000K, 500 lux)
   - Marcar zonas de colocación segura en mesas

3. **Para TVs >50 pulgadas:**
   - Política obligatoria: 2 operadores
   - Considerar vacuum lifters o ayudas mecánicas

**Inversión:** $15,000 - $25,000 USD
**ROI:** Reducción de daños + reducción de lesiones laborales

#### B. Implementar Control Estadístico de Procesos (SPC)

**Objetivo:** Monitorear en tiempo real la calidad y detectar tendencias

**Métricas a monitorear:**

1. **Tasa de Defectos por Turno**
   ```
   DPU (Defects Per Unit) = Defectos encontrados / Unidades inspeccionadas

   Límites de control:
   - UCL (Upper Control Limit): μ + 3σ
   - LCL (Lower Control Limit): μ - 3σ
   - Target: < 0.5% para defectos críticos
   ```

2. **First Pass Yield (FPY)**
   ```
   FPY = (Unidades aprobadas en primera inspección / Total inspeccionado) × 100%

   Meta: > 98% para televisores
   ```

3. **Gráficas de Control:**
   - Gráfica X-bar para promedio de defectos por lote
   - Gráfica R para variabilidad
   - Gráfica p para proporción de defectos
   - Actualización cada turno

4. **Dashboard digital:**
   - Pantalla en área de producción
   - Actualización en tiempo real
   - Alertas cuando se sale de control

**Herramientas:** Minitab, JMP, o Excel con macros
**Responsable:** Ingeniero de Calidad

#### C. Programa de Certificación de Operadores

**Objetivo:** Asegurar competencia técnica de todo el personal

**Niveles de certificación:**

**Nivel 1 - Operador Básico**
- Requisitos:
  - Capacitación teórica (4 horas)
  - Práctica supervisada (16 horas)
  - Examen teórico (>80%)
  - Examen práctico (>90%)
- Autorizado para: TVs < 40 pulgadas

**Nivel 2 - Operador Intermedio**
- Requisitos:
  - 1 mes de experiencia como Nivel 1
  - Sin incidentes de calidad
  - Capacitación avanzada (2 horas)
  - Examen práctico avanzado (>95%)
- Autorizado para: TVs 40-55 pulgadas

**Nivel 3 - Operador Avanzado**
- Requisitos:
  - 3 meses de experiencia como Nivel 2
  - Récord impecable de calidad
  - Certificación de ergonomía
  - Capacitación en inspección (4 horas)
- Autorizado para: TVs >55 pulgadas + Función de auditor

**Nivel 4 - Inspector QA**
- Requisitos:
  - 6 meses de experiencia como Nivel 3
  - Certificación ASQ CQI (deseable)
  - Capacitación en metrología
  - Examen de certificación riguroso
- Autorizado para: Inspección final, liberación de lotes

**Re-certificación:** Anual para todos los niveles

**Responsable:** Gerente de Capacitación + QA Manager
**Plazo de implementación:** 3 meses

#### D. Sistema de Gestión de No Conformidades

**Objetivo:** Capturar, analizar y actuar sobre defectos en tiempo real

**Componentes:**

1. **Formato de Reporte de No Conformidad (NCR)**
   ```
   NCR-SNTV-XXXX

   Información requerida:
   - Fecha y turno
   - SKU y Serial del producto
   - Tipo de defecto (lista desplegable)
   - Descripción detallada
   - Fotografías (obligatorio)
   - Operador que detectó
   - Estación donde se originó (si se conoce)
   - Disposición: Scrap / Rework / Use as-is
   ```

2. **Base de datos centralizada:**
   - Software: Puede ser Excel, Access, o sistema ERP
   - Campos indexados para búsqueda rápida
   - Dashboard de métricas

3. **Reuniones de revisión:**
   - Diaria: Revisar NCRs del día anterior (15 min)
   - Semanal: Análisis de tendencias, top 3 defectos (30 min)
   - Mensual: Revisión ejecutiva, acciones correctivas (1 hora)

4. **Seguimiento de acciones correctivas:**
   - Cada NCR genera acción correctiva asignada
   - Responsable y fecha límite
   - Verificación de efectividad a 30 días

**Responsable:** QA Manager
**Herramienta:** Sistema digital (software QMS o Excel avanzado)

---

### 5.3 ACCIONES A MEDIANO PLAZO (Mes 3-6)

#### A. Implementar Poka-Yoke (Mistake-Proofing)

**Objetivo:** Diseñar procesos a prueba de errores

**Ejemplos de Poka-Yoke para televisores:**

1. **Sensor de contacto en pantalla (opcional - alta inversión)**
   - Sensor capacitivo en marco
   - Alarma audible si detecta contacto en pantalla
   - Registro automático de evento
   - **Costo:** $200-500 por estación
   - **Beneficio:** Detección inmediata de manipulación incorrecta

2. **Plantilla guía para colocación**
   - Plantilla física que marca dónde colocar manos
   - Color contrastante (rojo en zonas prohibidas)
   - **Costo:** $50 por estación
   - **Beneficio:** Recordatorio visual constante

3. **Sistema de bloqueo de empaque:**
   - El sistema de empaque no permite cerrar la caja hasta que:
     - Checklist de accesorios esté completo (escáner RFID)
     - Inspección visual esté registrada en sistema
   - **Costo:** $2,000-5,000 por línea
   - **Beneficio:** Imposible empacar unidad no inspeccionada

4. **Código de colores para diferentes tamaños:**
   - TVs <40": Etiqueta verde (1 persona)
   - TVs 40-55": Etiqueta amarilla (1-2 personas)
   - TVs >55": Etiqueta roja (2 personas obligatorio)
   - **Costo:** Mínimo (solo etiquetas)
   - **Beneficio:** Identificación inmediata de requerimientos

**Prioridad:** Alta para ítems 2 y 4, media para ítems 1 y 3

#### B. Programa de Mejora Continua (Kaizen)

**Objetivo:** Involucrar a operadores en identificación y solución de problemas

**Estructura:**

1. **Eventos Kaizen mensuales:**
   - Duración: 2 días
   - Participantes: 5-7 personas (operadores, supervisores, QA, ingeniería)
   - Enfoque: Un problema específico
   - Resultado esperado: Acciones implementables en 1 semana

2. **Sistema de sugerencias:**
   - Buzón físico y digital
   - Revisión semanal de ideas
   - Recompensa por ideas implementadas:
     - Mención honorífica
     - Bono económico ($50-500 según impacto)
     - Certificado de reconocimiento

3. **Gemba Walks (Caminatas de Observación):**
   - Gerencia visita piso de producción semanalmente
   - Observación sin juicio
   - Conversación con operadores
   - Identificación de obstáculos

4. **Tablero de mejora continua:**
   - Visible en área de producción
   - Problemas identificados
   - Acciones en progreso
   - Resultados alcanzados

**Responsable:** Gerente de Operaciones + Ingeniero de Calidad
**Meta:** Mínimo 10 mejoras implementadas por trimestre

#### C. Auditorías de Calidad Internas

**Objetivo:** Verificar cumplimiento de procedimientos y efectividad de controles

**Tipos de auditorías:**

1. **Auditorías de Proceso:**
   - Frecuencia: Mensual
   - Alcance: Revisar cumplimiento de SOPs y estándares
   - Checklist basado en ISO 9001:2015
   - Duración: 1 día completo
   - Reporte: No conformidades + Observaciones + Mejores prácticas

2. **Auditorías de Producto:**
   - Frecuencia: Semanal (muestreo aleatorio)
   - Alcance: Inspección exhaustiva de producto final
   - Muestreo: 5-10 unidades aleatorias de producción terminada
   - Verificación: Cumple 100% con especificaciones

3. **Auditorías de Sistema:**
   - Frecuencia: Trimestral
   - Alcance: Revisar todo el sistema de gestión de calidad
   - Basado en: ISO 9001:2015 cláusulas 4-10
   - Preparación para auditorías externas

**Auditor:**
- Interno: Ingeniero de Calidad certificado como Auditor Interno ISO 9001
- Externo: Contratar firma de auditoría anual (deseable)

**Seguimiento:**
- Plan de acciones correctivas con responsable y fecha
- Verificación de cierre de hallazgos
- Indicador: % de hallazgos cerrados a tiempo (meta >95%)

---

### 5.4 ACCIONES A LARGO PLAZO (Mes 6-12)

#### A. Automatización de Inspección Visual

**Objetivo:** Reducir error humano mediante visión artificial

**Tecnología: Sistema de Visión por Computadora (Computer Vision)**

**Componentes:**

1. **Hardware:**
   - Cámara de alta resolución (mínimo 12 MP)
   - Iluminación LED controlada (frontal + lateral)
   - Computadora con GPU para procesamiento
   - **Costo:** $15,000-30,000 por estación

2. **Software:**
   - Algoritmo de detección de defectos entrenado con ML
   - Entrenamiento con imágenes de defectos reales
   - Categorías: Grietas, manchas, líneas, píxeles muertos
   - **Desarrollo:** $20,000-50,000 (una vez)

3. **Proceso:**
   ```
   1. TV en posición de inspección
   2. Cámara captura imagen de pantalla encendida (blanco + negro)
   3. Algoritmo analiza imagen (< 5 segundos)
   4. Resultado: PASS / FAIL con mapa de defectos
   5. Si FAIL: Alerta sonora + registro fotográfico
   6. Operador confirma o corrige resultado
   ```

4. **Beneficios:**
   - Detección más consistente (no depende de fatiga humana)
   - Velocidad: < 5 segundos vs. 2-3 minutos manual
   - Trazabilidad: Todas las imágenes guardadas
   - Datos para análisis: Tendencias de defectos por lote, turno, proveedor

5. **Limitaciones:**
   - Inversión inicial alta
   - Requiere mantenimiento y calibración
   - Puede generar falsos positivos inicialmente (ajuste fino)

**ROI Estimado:**
- Inversión: $40,000-80,000 por línea
- Ahorro anual: $100,000-200,000 (reducción de quejas + reducción de tiempo de inspección)
- **Payback:** 6-12 meses

**Prioridad:** Media-Alta (evaluar después de implementar inspección manual al 100%)

#### B. Programa de Desarrollo de Proveedores

**Objetivo:** Mejorar calidad desde el origen (upstream quality)

**Situación:** Si los TVs llegan con defectos de fábrica, MI Technologies no puede corregirlos

**Acciones:**

1. **Auditoría a proveedores clave:**
   - Identificar proveedores de los SKUs más problemáticos (SNTV001764, 001763, 002236)
   - Visita a planta del proveedor
   - Evaluación de su sistema de calidad
   - Scorecard de proveedor (calidad, entrega, costo, servicio)

2. **Especificaciones de calidad más estrictas:**
   - Definir AQL para recepción de material
   - Incluir cláusulas de calidad en contratos
   - Penalizaciones por lotes defectuosos

3. **Inspección en origen (Source Inspection):**
   - Para proveedores críticos, contratar inspector en su planta
   - Inspección antes de embarque
   - Reducir riesgo de recibir lotes malos

4. **Programa de mejora conjunta:**
   - Compartir datos de defectos con proveedor
   - Sesiones de trabajo conjunto para RCA
   - Transferencia de mejores prácticas

**Responsable:** Supply Chain Manager + QA Manager
**Inversión:** $10,000-30,000 anual (visitas, inspector)
**Beneficio:** Reducción de defectos en 20-40%

#### C. Certificación ISO 9001:2015 (Si no está certificado)

**Objetivo:** Formalizar el sistema de gestión de calidad

**Beneficios:**
- Mejora la imagen ante clientes (Walmart, Target, etc.)
- Estructura procesos y responsabilidades
- Mejora continua sistematizada
- Acceso a mercados que requieren certificación

**Proceso:**
1. Gap analysis (identificar brechas vs. norma)
2. Implementar requisitos faltantes
3. Auditoría interna completa
4. Contratar organismo certificador
5. Auditoría de certificación
6. Mantenimiento y re-certificación (anual)

**Plazo:** 6-12 meses desde inicio
**Costo:** $15,000-30,000 (consultoría + certificación)

---

## 6. KPIs (KEY PERFORMANCE INDICATORS)

### 6.1 KPIs Principales de Calidad

| KPI | Fórmula | Meta Actual | Meta 3 Meses | Meta 6 Meses | Meta 12 Meses |
|-----|---------|-------------|--------------|--------------|---------------|
| **Tasa de Quejas de Cliente** | (Quejas / Unidades vendidas) × 1000 | **Actual: TBD** | < 10 por 1000 | < 5 por 1000 | < 2 por 1000 |
| **Tasa de Defectos de Pantalla** | (Defectos pantalla / Total inspeccionado) × 100 | **Actual: TBD** | < 1% | < 0.5% | < 0.1% |
| **First Pass Yield (FPY)** | (Unidades OK primera vez / Total) × 100 | **Actual: TBD** | > 95% | > 97% | > 99% |
| **Costo de Mala Calidad (COPQ)** | Scrap + Rework + Quejas + Devoluciones | **Actual: $409K+** | < $250K | < $150K | < $75K |
| **% Inspección 100% Cumplida** | (Unidades inspeccionadas / Producidas) × 100 | 0% (No existe) | 100% | 100% | 100% |

### 6.2 KPIs Secundarios

| KPI | Meta | Frecuencia Medición |
|-----|------|---------------------|
| Tiempo promedio de inspección por unidad | < 3 minutos | Diaria |
| % de operadores certificados | 100% | Mensual |
| Número de NCRs por turno | < 5 | Diaria |
| % de NCRs cerrados a tiempo | > 95% | Semanal |
| Sugerencias de mejora implementadas | > 10 por trimestre | Trimestral |
| Score de auditoría interna | > 90% | Mensual |

### 6.3 Dashboard Recomendado

**Visualización sugerida:**
```
┌─────────────────────────────────────────────────────────┐
│        DASHBOARD DE CALIDAD - TELEVISORES SNTV         │
├─────────────────────────────────────────────────────────┤
│  Fecha: 13-Feb-2026              Turno: Matutino        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  📊 MÉTRICAS DEL DÍA                                    │
│  ├─ Unidades Inspeccionadas: 245                        │
│  ├─ Defectos Detectados: 3                              │
│  ├─ Tasa de Defectos: 1.22% [▲ 0.3% vs ayer]          │
│  └─ First Pass Yield: 98.78% [✓ Meta: >95%]           │
│                                                          │
│  🎯 PARETO DE DEFECTOS (Últimos 7 días)                │
│  ├─ Pantalla manchada: ████████████ 45%                │
│  ├─ Incompleto accesorios: ████████ 30%                │
│  ├─ Defecto cosmético: ████ 15%                         │
│  └─ Otros: ██ 10%                                       │
│                                                          │
│  ⚠️ ALERTAS                                             │
│  └─ SNTV001764: 2 defectos en último lote              │
│                                                          │
│  ✅ CUMPLIMIENTO                                         │
│  ├─ Inspección 100%: ✓ 100% cumplido                   │
│  ├─ Auditoría de técnica: ✓ Realizada 10:30 AM        │
│  └─ NCRs abiertas: 2 (todas < 24hrs)                   │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Herramientas:** Power BI, Tableau, Excel con macros, o software QMS

---

## 7. CRONOGRAMA DE IMPLEMENTACIÓN

### FASE 1: ACCIONES CRÍTICAS INMEDIATAS (Semanas 1-2)

| Semana | Acción | Responsable | Inversión | Status |
|--------|--------|-------------|-----------|--------|
| **Semana 1** |  |  |  | |
| Días 1-2 | Diseñar estación de inspección visual + cuarto oscuro | Ing. Calidad + Mantenimiento | $5,000 | ⏳ Pendiente |
| Días 3-4 | Construir/instalar estación de inspección | Mantenimiento | (incluido arriba) | ⏳ Pendiente |
| Día 5 | Capacitación intensiva de inspectores (1er grupo) | Ing. Calidad | $500 | ⏳ Pendiente |
| **Semana 2** |  |  |  | |
| Día 6 | Inicio de inspección visual 100% (piloto) | Operadores QA | - | ⏳ Pendiente |
| Día 7-8 | Re-capacitación obligatoria de técnica de manejo | Supervisor + QA | $1,500 | ⏳ Pendiente |
| Día 9 | Crear e imprimir checklists de accesorios | Ing. Calidad | $200 | ⏳ Pendiente |
| Día 10 | Implementar auditorías de técnica cada 2 horas | Supervisores | - | ⏳ Pendiente |
| Día 11-12 | Instalación de ayudas visuales (posters, videos) | Comunicación | $1,000 | ⏳ Pendiente |
| Día 14 | Revisión de resultados de primera semana | Gerencia + QA | - | ⏳ Pendiente |

**Inversión Fase 1:** $8,200
**Ahorro proyectado (mes 1):** $25,000-40,000

### FASE 2: ESTABILIZACIÓN Y MEJORA (Mes 1-3)

| Mes | Acciones Clave | Inversión |
|-----|---------------|-----------|
| **Mes 1** | - Evaluación ergonómica de estaciones<br>- Implementar SPC básico (gráficas de control)<br>- Diseñar programa de certificación<br>- Implementar sistema de NCRs digital | $5,000 |
| **Mes 2** | - Realizar mejoras ergonómicas<br>- Iniciar certificación de operadores (Nivel 1)<br>- Primera ronda de auditorías internas<br>- Análisis de resultados del primer mes | $18,000 |
| **Mes 3** | - Continuar certificaciones (Nivel 2)<br>- Implementar primeros Poka-Yokes<br>- Primer evento Kaizen<br>- Revisión trimestral con gerencia | $7,000 |

**Inversión Fase 2:** $30,000
**Ahorro proyectado (Mes 1-3):** $100,000-150,000

### FASE 3: OPTIMIZACIÓN (Mes 3-6)

| Acción | Mes 4 | Mes 5 | Mes 6 |
|--------|-------|-------|-------|
| Certificación operadores Nivel 3 | ✓ | ✓ | ✓ |
| Implementar todos los Poka-Yokes diseñados |  | ✓ | ✓ |
| Eventos Kaizen mensuales | ✓ | ✓ | ✓ |
| Auditorías mensuales | ✓ | ✓ | ✓ |
| Evaluar proveedores críticos |  | ✓ |  |
| Revisión semestral y ajuste de metas |  |  | ✓ |

**Inversión Fase 3:** $15,000
**Ahorro proyectado (Mes 4-6):** $150,000-200,000

### FASE 4: AUTOMATIZACIÓN Y EXCELENCIA (Mes 6-12)

| Acción | Plazo | Inversión |
|--------|-------|-----------|
| Evaluar e implementar sistema de visión artificial (piloto) | Mes 7-9 | $50,000 |
| Auditoría a proveedores clave | Mes 8 | $10,000 |
| Certificación operadores Nivel 4 (Inspectores QA) | Mes 9-10 | $5,000 |
| Proceso de certificación ISO 9001 (si aplica) | Mes 7-12 | $25,000 |
| Revisión anual y planificación año 2 | Mes 12 | - |

**Inversión Fase 4:** $90,000
**Ahorro proyectado (Mes 7-12):** $200,000-300,000

### RESUMEN DE INVERSIÓN Y ROI

| Concepto | Inversión | Ahorro Proyectado (Año 1) | ROI |
|----------|-----------|---------------------------|-----|
| **Fase 1 (Inmediato)** | $8,200 | $40,000 | 388% |
| **Fase 2 (Mes 1-3)** | $30,000 | $150,000 | 400% |
| **Fase 3 (Mes 3-6)** | $15,000 | $200,000 | 1,233% |
| **Fase 4 (Mes 6-12)** | $90,000 | $300,000 | 233% |
| **TOTAL AÑO 1** | **$143,200** | **$690,000** | **382%** |

**Conclusión:** Por cada dólar invertido, se proyecta un retorno de $4.82 en el primer año.

**Cálculo de ahorro:**
- Reducción de quejas de 1,365/año → 273/año (80% reducción) = 1,092 unidades salvadas
- Costo promedio por queja: $300 USD (scrap) + $150 (logística inversa) + $100 (pérdida de cliente) = $550
- **Ahorro total: 1,092 × $550 = $600,600**
- Ahorro adicional: Reducción de rework, mejora de eficiencia, mejora de reputación

---

## 8. RIESGOS Y PLAN DE MITIGACIÓN

### 8.1 Riesgos del Proyecto

| Riesgo | Probabilidad | Impacto | RPN | Mitigación |
|--------|--------------|---------|-----|------------|
| **Resistencia al cambio del personal** | Alta (70%) | Alto | 490 | - Comunicación clara de beneficios<br>- Involucrar a operadores en diseño de mejoras<br>- Incentivos por cumplimiento |
| **Aumento de tiempo de ciclo por inspección 100%** | Media (50%) | Medio | 200 | - Optimizar proceso de inspección<br>- Agregar personal de QA si necesario<br>- Automatización a largo plazo |
| **Costo de implementación excede presupuesto** | Media (40%) | Alto | 240 | - Priorizar acciones por ROI<br>- Implementación por fases<br>- Buscar financiamiento interno |
| **Proveedores no mejoran calidad** | Media (50%) | Alto | 300 | - Cambiar de proveedor si es necesario<br>- Inspección en origen<br>- Cláusulas contractuales más estrictas |
| **Nuevos operadores no siguen procedimientos** | Alta (60%) | Alto | 360 | - Certificación obligatoria antes de operar<br>- Supervisión intensiva durante primeras semanas<br>- Consecuencias claras por incumplimiento |

### 8.2 Plan de Contingencia

**Si las quejas no se reducen después de 3 meses:**
1. Auditoría externa del proceso completo
2. Evaluar si el problema es del proveedor (origen) vs. MI Technologies (proceso)
3. Considerar cambio de proveedor para SKUs críticos
4. Implementar inspección 200% (doble verificación obligatoria)

**Si el costo de inspección 100% es prohibitivo:**
1. Implementar inspección 100% solo para SKUs críticos (Top 10)
2. Usar AQL para otros SKUs (muestreo según tabla en Sección 4)
3. Acelerar proyecto de automatización con visión artificial

---

## 9. CONCLUSIONES Y RECOMENDACIONES

### 9.1 Hallazgos Críticos

1. **Situación es crítica:** 84% de quejas son de televisores, con un costo estimado de >$400K USD
2. **Causa raíz principal:** Daños en pantalla por manipulación incorrecta + falta de inspección visual
3. **Controles existentes son insuficientes:** Solo cubren aspectos eléctricos, NO físicos/cosméticos
4. **Ya existe alerta de calidad** pero las acciones no han sido efectivas

### 9.2 Recomendaciones Prioritarias

**ACCIÓN INMEDIATA (Esta semana):**
1. ✅ **Implementar inspección visual al 100%** - NO NEGOCIABLE
2. ✅ **Re-capacitación obligatoria** de todo el personal en técnica de manejo
3. ✅ **Auditorías cada 2 horas** de técnica de manejo

**ACCIÓN CORTO PLAZO (Este mes):**
4. ✅ Implementar checklist de accesorios con verificación en dos puntos
5. ✅ Mejorar ergonomía de estaciones de trabajo
6. ✅ Implementar SPC para monitoreo en tiempo real

**ACCIÓN MEDIANO PLAZO (Próximos 3 meses):**
7. ✅ Programa de certificación de operadores
8. ✅ Implementar Poka-Yokes
9. ✅ Iniciar programa de mejora continua (Kaizen)

**ACCIÓN LARGO PLAZO (6-12 meses):**
10. ✅ Evaluar automatización con visión artificial
11. ✅ Auditoría y desarrollo de proveedores
12. ✅ Certificación ISO 9001:2015 (si no existe)

### 9.3 Expectativas de Resultados

**Si se implementa el plan completo:**

| Métrica | Actual | 3 Meses | 6 Meses | 12 Meses |
|---------|--------|---------|---------|----------|
| Quejas mensuales SNTV | ~114 | < 40 | < 20 | < 10 |
| Reducción % | - | 65% | 82% | 91% |
| Tasa de defectos | Est. 3-5% | < 1% | < 0.5% | < 0.1% |
| First Pass Yield | Est. 90% | > 95% | > 97% | > 99% |
| Costo de mala calidad | $400K+ | $250K | $150K | $75K |
| Ahorro acumulado | $0 | $150K | $400K | $600K+ |

**Factores de éxito:**
- ✓ Compromiso de la gerencia
- ✓ Recursos asignados (presupuesto + personal)
- ✓ Seguimiento disciplinado del plan
- ✓ Cultura de calidad y mejora continua
- ✓ Participación activa de operadores

### 9.4 Siguiente Paso

**RECOMENDACIÓN INMEDIATA:**

> Agendar reunión urgente con:
> - Gerente General
> - Gerente de Operaciones
> - Gerente de Calidad
> - Gerente de Finanzas
>
> Objetivo: Aprobar presupuesto de Fase 1 ($8,200) e iniciar implementación ESTA SEMANA.
>
> Cada día de retraso = ~$1,100 USD en costos de quejas evitables.

---

## 10. ANEXOS

### Anexo A: Plantilla de Inspección Visual de Pantalla
### Anexo B: Checklist de Accesorios por Modelo
### Anexo C: Formato de Reporte de No Conformidad (NCR)
### Anexo D: Plan de Capacitación en Técnica de Manejo
### Anexo E: Tabla AQL Completa (MIL-STD-105E)
### Anexo F: Dashboard de KPIs (Template Excel)

---

**DOCUMENTO CONFIDENCIAL - MI TECHNOLOGIES INC.**

**Preparado por:** Ingeniero de Calidad Black Belt
**Revisado por:** [Pendiente]
**Aprobado por:** [Pendiente]
**Fecha de emisión:** 13 de Febrero, 2026
**Versión:** 1.0

---

**FIN DEL DOCUMENTO**
