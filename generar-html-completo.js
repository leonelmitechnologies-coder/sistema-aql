const fs = require('fs');

// Leer el catálogo JSON
const catalogoData = fs.readFileSync('catalogo-sku.json', 'utf8');

// Crear el HTML completo con ambas pantallas
const html = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema AQL - Control de Calidad</title>
    <link href="https://cdn.jsdelivr.net/npm/tom-select@2.3.1/dist/css/tom-select.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            background-color: #f8f9fa;
            min-height: 100vh;
            padding: 40px 20px;
            color: #212529;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #dee2e6;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .header {
            background-color: #ffffff;
            border-bottom: 2px solid #212529;
            padding: 40px;
        }

        .header h1 {
            font-size: 24px;
            font-weight: 600;
            color: #212529;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
        }

        .header p {
            font-size: 14px;
            color: #6c757d;
            font-weight: 400;
        }

        .form-container {
            padding: 40px;
        }

        .step {
            display: none;
        }

        .step.active {
            display: block;
        }

        .form-group {
            margin-bottom: 24px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #212529;
            font-weight: 500;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .form-group input,
        .form-group select {
            width: 100%;
            padding: 11px 14px;
            border: 1px solid #ced4da;
            font-size: 14px;
            transition: border-color 0.15s ease-in-out;
            background-color: #ffffff;
            font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: #212529;
        }

        .form-group input:read-only {
            background-color: #f8f9fa;
            color: #6c757d;
            cursor: default;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
        }

        /* Estilos para checkbox */
        .checkbox-group {
            display: flex;
            gap: 30px;
            margin-top: 12px;
        }

        .checkbox-option {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .checkbox-option input[type="checkbox"] {
            width: 20px;
            height: 20px;
            cursor: pointer;
            accent-color: #212529;
        }

        .checkbox-option label {
            margin: 0;
            text-transform: none;
            font-size: 14px;
            cursor: pointer;
            font-weight: 400;
        }

        /* Estilos para barra de mensaje */
        .message-bar {
            background-color: #212529;
            color: #ffffff;
            padding: 20px;
            text-align: center;
            margin: 32px 0;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: 0.3px;
        }

        /* Estilos para botones de estado */
        .button-group {
            display: flex;
            gap: 12px;
            margin-top: 12px;
            flex-wrap: wrap;
        }

        .btn-estado {
            flex: 1;
            padding: 14px 20px;
            border: 2px solid #ced4da;
            background-color: #ffffff;
            color: #212529;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            min-width: 140px;
        }

        .btn-estado:hover {
            border-color: #212529;
            background-color: #f8f9fa;
        }

        .btn-estado.selected {
            background-color: #212529;
            color: #ffffff;
            border-color: #212529;
        }

        .btn-container {
            display: flex;
            gap: 12px;
            margin-top: 40px;
            padding-top: 32px;
            border-top: 1px solid #dee2e6;
        }

        .btn {
            flex: 1;
            padding: 12px 24px;
            border: 1px solid transparent;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.15s ease-in-out;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-family: inherit;
        }

        .btn-primary {
            background-color: #212529;
            color: #ffffff;
            border-color: #212529;
        }

        .btn-primary:hover {
            background-color: #000000;
            border-color: #000000;
        }

        .btn-secondary {
            background-color: #ffffff;
            color: #212529;
            border-color: #212529;
        }

        .btn-secondary:hover {
            background-color: #f8f9fa;
        }

        .alert {
            padding: 14px 16px;
            margin-bottom: 24px;
            display: none;
            font-size: 14px;
            border-left: 3px solid;
        }

        .alert-success {
            background-color: #f0f9f4;
            color: #0f5132;
            border-left-color: #0f5132;
        }

        .alert-error {
            background-color: #fef5f5;
            color: #842029;
            border-left-color: #842029;
        }

        .required {
            color: #dc3545;
            font-weight: 600;
        }

        .info-box {
            background-color: #f8f9fa;
            border-left: 3px solid #212529;
            padding: 14px 16px;
            margin-bottom: 32px;
        }

        .info-box p {
            color: #495057;
            font-size: 13px;
            margin: 0;
            line-height: 1.6;
        }

        /* Personalización Tom Select */
        .ts-wrapper.single .ts-control {
            padding: 11px 14px;
            border: 1px solid #ced4da;
            font-size: 14px;
            background-color: #ffffff;
        }

        .ts-wrapper.single .ts-control:focus {
            border-color: #212529;
            box-shadow: none;
        }

        .ts-dropdown {
            border: 1px solid #212529;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .ts-dropdown .option {
            padding: 10px 14px;
            font-size: 14px;
        }

        .ts-dropdown .option.active {
            background-color: #212529;
            color: #ffffff;
        }

        @media (max-width: 768px) {
            body {
                padding: 20px 10px;
            }

            .form-row {
                grid-template-columns: 1fr;
            }

            .header,
            .form-container {
                padding: 24px;
            }

            .btn-container {
                flex-direction: column;
            }

            .button-group {
                flex-direction: column;
            }

            .btn-estado {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 id="headerTitle">Registro de Datos</h1>
            <p>Sistema de Control de Calidad - AQL</p>
        </div>

        <div class="form-container">
            <div id="alertBox" class="alert"></div>

            <form id="aqlForm">
                <!-- PASO 1: Registro de Datos -->
                <div id="step1" class="step active">
                    <div class="info-box">
                        <p>Escriba para buscar por SKU, marca o modelo. Todos los 6,937 productos están disponibles.</p>
                    </div>

                    <div class="form-group">
                        <label for="licensePlate">
                            License Plate <span class="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="licensePlate"
                            name="licensePlate"
                            placeholder="Ingrese el número único del televisor"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="sku">
                            SKU <span class="required">*</span>
                        </label>
                        <select id="sku" name="sku" required>
                            <option value="">Buscar SKU...</option>
                        </select>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="marca">Marca</label>
                            <input
                                type="text"
                                id="marca"
                                name="marca"
                                readonly
                                placeholder="Se cargará automáticamente"
                            >
                        </div>

                        <div class="form-group">
                            <label for="modelo">Modelo</label>
                            <input
                                type="text"
                                id="modelo"
                                name="modelo"
                                readonly
                                placeholder="Se cargará automáticamente"
                            >
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="descripcion">Descripción</label>
                        <input
                            type="text"
                            id="descripcion"
                            name="descripcion"
                            readonly
                            placeholder="Se cargará automáticamente"
                        >
                    </div>

                    <div class="form-group">
                        <label for="pulgada">Pulgada</label>
                        <input
                            type="text"
                            id="pulgada"
                            name="pulgada"
                            readonly
                            placeholder="Se cargará automáticamente"
                        >
                    </div>

                    <div class="form-group">
                        <label for="clasificacion">
                            Clasificación <span class="required">*</span>
                        </label>
                        <select id="clasificacion" name="clasificacion" required>
                            <option value="">-- Seleccione una clasificación --</option>
                            <option value="GRA">GRA</option>
                            <option value="GRB">GRB</option>
                            <option value="GRC">GRC</option>
                            <option value="ICB">ICB</option>
                            <option value="ICC">ICC</option>
                            <option value="ICD">ICD</option>
                            <option value="ICX">ICX</option>
                            <option value="BOX">BOX</option>
                        </select>
                    </div>

                    <div class="btn-container">
                        <button type="button" class="btn btn-secondary" onclick="limpiarFormulario()">
                            Limpiar
                        </button>
                        <button type="button" class="btn btn-primary" onclick="irAPaso2()">
                            Siguiente
                        </button>
                    </div>
                </div>

                <!-- PASO 2: Proceso AQL -->
                <div id="step2" class="step">
                    <div class="info-box">
                        <p>Complete la inspección de calidad siguiendo el proceso AQL.</p>
                    </div>

                    <div class="form-group">
                        <label>
                            ¿Clasificación coincidente con el estado de la caja? <span class="required">*</span>
                        </label>
                        <div class="checkbox-group">
                            <div class="checkbox-option">
                                <input type="checkbox" id="clasificacionSi" name="clasificacionCaja" value="SI">
                                <label for="clasificacionSi">SI</label>
                            </div>
                            <div class="checkbox-option">
                                <input type="checkbox" id="clasificacionNo" name="clasificacionCaja" value="NO">
                                <label for="clasificacionNo">NO</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>
                            ¿Accesorios conforme a su compatibilidad? <span class="required">*</span>
                        </label>
                        <div class="checkbox-group">
                            <div class="checkbox-option">
                                <input type="checkbox" id="accesoriosSi" name="accesorios" value="SI">
                                <label for="accesoriosSi">SI</label>
                            </div>
                            <div class="checkbox-option">
                                <input type="checkbox" id="accesoriosNo" name="accesorios" value="NO">
                                <label for="accesoriosNo">NO</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>
                            ¿Protección (bolsa y cushion) en buen estado? <span class="required">*</span>
                        </label>
                        <div class="checkbox-group">
                            <div class="checkbox-option">
                                <input type="checkbox" id="proteccionSi" name="proteccion" value="SI">
                                <label for="proteccionSi">SI</label>
                            </div>
                            <div class="checkbox-option">
                                <input type="checkbox" id="proteccionNo" name="proteccion" value="NO">
                                <label for="proteccionNo">NO</label>
                            </div>
                        </div>
                    </div>

                    <div class="message-bar">
                        Procede a sacar el televisor para realizar la prueba eléctrica
                    </div>

                    <div class="form-group">
                        <label>
                            Estado del Audio <span class="required">*</span>
                        </label>
                        <div class="button-group">
                            <button type="button" class="btn-estado" data-value="Excelente" onclick="seleccionarEstadoAudio(this)">
                                Excelente
                            </button>
                            <button type="button" class="btn-estado" data-value="Buen Estado" onclick="seleccionarEstadoAudio(this)">
                                Buen Estado
                            </button>
                            <button type="button" class="btn-estado" data-value="Con Problemas" onclick="seleccionarEstadoAudio(this)">
                                Con Problemas
                            </button>
                        </div>
                        <input type="hidden" id="estadoAudio" name="estadoAudio">
                    </div>

                    <div class="btn-container">
                        <button type="button" class="btn btn-secondary" onclick="volverAPaso1()">
                            Atrás
                        </button>
                        <button type="submit" class="btn btn-primary">
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/tom-select@2.3.1/dist/js/tom-select.complete.min.js"></script>
    <script>
        // Catálogo de SKUs embebido
        const catalogoSKU = ${catalogoData};

        // Datos del registro
        let datosRegistro = {};

        // Preparar opciones para Tom Select
        const opciones = catalogoSKU.map(item => ({
            value: item.SKU,
            text: item.SKU + ' - ' + item.Marca + ' ' + item.Modelo,
            marca: item.Marca,
            modelo: item.Modelo,
            descripcion: item.Descripcion,
            pulgada: item.Pulgada
        }));

        // Inicializar Tom Select
        const tomSelectInstance = new TomSelect('#sku', {
            options: opciones,
            maxOptions: 100,
            maxItems: 1,
            searchField: ['value', 'text'],
            placeholder: 'Buscar por SKU, marca o modelo...',
            create: false,
            hideSelected: true,
            closeAfterSelect: true,
            sortField: {
                field: 'text',
                direction: 'asc'
            },
            render: {
                option: function(data, escape) {
                    return '<div>' + escape(data.text) + '</div>';
                },
                item: function(data, escape) {
                    return '<div>' + escape(data.value) + '</div>';
                }
            },
            onChange: function(value) {
                if (value) {
                    const opcion = this.options[value];
                    if (opcion) {
                        document.getElementById('marca').value = opcion.marca || '';
                        document.getElementById('modelo').value = opcion.modelo || '';
                        document.getElementById('descripcion').value = opcion.descripcion || '';
                        document.getElementById('pulgada').value = opcion.pulgada || '';
                    }
                } else {
                    limpiarCamposAutomaticos();
                }
            }
        });

        // Función para manejar checkboxes (solo uno seleccionado por grupo)
        document.querySelectorAll('input[name="clasificacionCaja"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    document.querySelectorAll('input[name="clasificacionCaja"]').forEach(cb => {
                        if (cb !== this) cb.checked = false;
                    });
                }
            });
        });

        document.querySelectorAll('input[name="accesorios"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    document.querySelectorAll('input[name="accesorios"]').forEach(cb => {
                        if (cb !== this) cb.checked = false;
                    });
                }
            });
        });

        document.querySelectorAll('input[name="proteccion"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    document.querySelectorAll('input[name="proteccion"]').forEach(cb => {
                        if (cb !== this) cb.checked = false;
                    });
                }
            });
        });

        // Función para seleccionar estado de audio
        function seleccionarEstadoAudio(button) {
            document.querySelectorAll('.btn-estado').forEach(btn => {
                btn.classList.remove('selected');
            });
            button.classList.add('selected');
            document.getElementById('estadoAudio').value = button.dataset.value;
        }

        // Función para ir al paso 2
        function irAPaso2() {
            // Validar paso 1
            const licensePlate = document.getElementById('licensePlate').value;
            const sku = document.getElementById('sku').value;
            const clasificacion = document.getElementById('clasificacion').value;

            if (!licensePlate) {
                mostrarAlerta('Por favor ingrese el License Plate', 'error');
                return;
            }

            if (!sku) {
                mostrarAlerta('Por favor seleccione un SKU', 'error');
                return;
            }

            if (!clasificacion) {
                mostrarAlerta('Por favor seleccione una clasificación', 'error');
                return;
            }

            // Guardar datos del paso 1
            datosRegistro = {
                licensePlate: licensePlate,
                sku: sku,
                marca: document.getElementById('marca').value,
                modelo: document.getElementById('modelo').value,
                descripcion: document.getElementById('descripcion').value,
                pulgada: document.getElementById('pulgada').value,
                clasificacion: clasificacion
            };

            // Cambiar a paso 2
            document.getElementById('step1').classList.remove('active');
            document.getElementById('step2').classList.add('active');
            document.getElementById('headerTitle').textContent = 'Proceso AQL';
            window.scrollTo(0, 0);
        }

        // Función para volver al paso 1
        function volverAPaso1() {
            document.getElementById('step2').classList.remove('active');
            document.getElementById('step1').classList.add('active');
            document.getElementById('headerTitle').textContent = 'Registro de Datos';
            window.scrollTo(0, 0);
        }

        // Función para limpiar campos automáticos
        function limpiarCamposAutomaticos() {
            document.getElementById('marca').value = '';
            document.getElementById('modelo').value = '';
            document.getElementById('descripcion').value = '';
            document.getElementById('pulgada').value = '';
        }

        // Función para limpiar formulario completo
        function limpiarFormulario() {
            document.getElementById('aqlForm').reset();
            tomSelectInstance.clear();
            limpiarCamposAutomaticos();
            datosRegistro = {};
            ocultarAlerta();

            // Limpiar checkboxes
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

            // Limpiar botones de estado
            document.querySelectorAll('.btn-estado').forEach(btn => btn.classList.remove('selected'));
            document.getElementById('estadoAudio').value = '';

            // Volver al paso 1
            document.getElementById('step2').classList.remove('active');
            document.getElementById('step1').classList.add('active');
            document.getElementById('headerTitle').textContent = 'Registro de Datos';
        }

        // Función para mostrar alertas
        function mostrarAlerta(mensaje, tipo) {
            const alertBox = document.getElementById('alertBox');
            alertBox.textContent = mensaje;
            alertBox.className = 'alert alert-' + tipo;
            alertBox.style.display = 'block';

            setTimeout(function() {
                ocultarAlerta();
            }, 5000);
        }

        // Función para ocultar alertas
        function ocultarAlerta() {
            const alertBox = document.getElementById('alertBox');
            alertBox.style.display = 'none';
        }

        // Manejar envío del formulario
        document.getElementById('aqlForm').addEventListener('submit', function(e) {
            e.preventDefault();

            // Validar paso 2
            const clasificacionCaja = document.querySelector('input[name="clasificacionCaja"]:checked');
            const accesorios = document.querySelector('input[name="accesorios"]:checked');
            const proteccion = document.querySelector('input[name="proteccion"]:checked');
            const estadoAudio = document.getElementById('estadoAudio').value;

            if (!clasificacionCaja) {
                mostrarAlerta('Por favor indique si la clasificación coincide con el estado de la caja', 'error');
                return;
            }

            if (!accesorios) {
                mostrarAlerta('Por favor indique si los accesorios son conformes', 'error');
                return;
            }

            if (!proteccion) {
                mostrarAlerta('Por favor indique si la protección está en buen estado', 'error');
                return;
            }

            if (!estadoAudio) {
                mostrarAlerta('Por favor seleccione el estado del audio', 'error');
                return;
            }

            // Agregar datos del paso 2
            datosRegistro.clasificacionCaja = clasificacionCaja.value;
            datosRegistro.accesorios = accesorios.value;
            datosRegistro.proteccion = proteccion.value;
            datosRegistro.estadoAudio = estadoAudio;
            datosRegistro.fecha = new Date().toISOString();

            // Guardar registro
            guardarRegistro(datosRegistro);

            mostrarAlerta('Registro guardado exitosamente', 'success');

            setTimeout(function() {
                limpiarFormulario();
            }, 2000);
        });

        // Guardar registro
        function guardarRegistro(datos) {
            let registros = JSON.parse(localStorage.getItem('registrosTV') || '[]');
            registros.push(datos);
            localStorage.setItem('registrosTV', JSON.stringify(registros));
            console.log('Registro guardado:', datos);
        }
    </script>
</body>
</html>`;

fs.writeFileSync('registro-televisiones.html', html, 'utf8');
console.log('HTML generado con sistema de pasos (Registro de Datos + Proceso AQL)');
