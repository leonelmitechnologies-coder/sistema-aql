const fs = require('fs');

// Leer el catálogo JSON
const catalogoData = fs.readFileSync('catalogo-sku.json', 'utf8');

// Crear el HTML completo con datos embebidos
const html = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Televisiones - AQL Calidad</title>
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

        .form-group select {
            cursor: pointer;
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23212529' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 14px center;
            padding-right: 40px;
        }

        .search-select-container {
            position: relative;
        }

        .search-select-input {
            width: 100%;
            padding: 11px 14px;
            border: 1px solid #ced4da;
            font-size: 14px;
            transition: border-color 0.15s ease-in-out;
            background-color: #ffffff;
            font-family: inherit;
            cursor: text;
        }

        .search-select-input:focus {
            outline: none;
            border-color: #212529;
        }

        .search-select-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #ffffff;
            border: 1px solid #212529;
            max-height: 300px;
            overflow-y: auto;
            z-index: 1000;
            display: none;
            margin-top: 2px;
        }

        .search-select-dropdown.active {
            display: block;
        }

        .search-select-option {
            padding: 10px 14px;
            cursor: pointer;
            font-size: 14px;
            border-bottom: 1px solid #f8f9fa;
            transition: background-color 0.1s ease;
        }

        .search-select-option:hover {
            background-color: #f8f9fa;
        }

        .search-select-option:last-child {
            border-bottom: none;
        }

        .search-select-option.selected {
            background-color: #212529;
            color: #ffffff;
        }

        .no-results {
            padding: 14px;
            text-align: center;
            color: #6c757d;
            font-size: 13px;
        }

        .search-icon {
            position: absolute;
            right: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: #6c757d;
            pointer-events: none;
        }

        .search-select-option strong {
            font-weight: 600;
            color: #212529;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
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

        .btn-primary:active {
            background-color: #000000;
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
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Registro de Televisiones</h1>
            <p>Sistema de Control de Calidad - AQL</p>
        </div>

        <div class="form-container">
            <div id="alertBox" class="alert"></div>

            <div class="info-box">
                <p>Seleccione el SKU correspondiente y los datos del televisor se cargarán automáticamente</p>
            </div>

            <form id="registroForm">
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
                    <label for="skuSearch">
                        SKU <span class="required">*</span>
                    </label>
                    <div class="search-select-container">
                        <input
                            type="text"
                            id="skuSearch"
                            class="search-select-input"
                            placeholder="Buscar SKU, marca o modelo..."
                            autocomplete="off"
                        >
                        <span class="search-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 14L10.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <div id="skuDropdown" class="search-select-dropdown"></div>
                        <input type="hidden" id="sku" name="sku" required>
                    </div>
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

                <div class="btn-container">
                    <button type="button" class="btn btn-secondary" onclick="limpiarFormulario()">
                        Limpiar
                    </button>
                    <button type="submit" class="btn btn-primary">
                        Guardar Registro
                    </button>
                </div>
            </form>
        </div>
    </div>

    <script>
        // Catálogo de SKUs embebido directamente
        const catalogoSKU = ${catalogoData};

        // Variables para el buscador de SKU
        let skuSeleccionado = null;
        const skuSearchInput = document.getElementById('skuSearch');
        const skuDropdown = document.getElementById('skuDropdown');
        const skuHiddenInput = document.getElementById('sku');
        let selectedIndex = -1;

        // Función para filtrar SKUs
        function filtrarSKUs(searchTerm) {
            const term = searchTerm.toLowerCase().trim();

            if (!term) {
                return catalogoSKU.slice(0, 100); // Mostrar primeros 100 si no hay búsqueda
            }

            // Filtrar SKUs que coincidan
            const resultados = catalogoSKU.filter(item => {
                const sku = (item.SKU || '').toLowerCase();
                const marca = (item.Marca || '').toLowerCase();
                const modelo = (item.Modelo || '').toLowerCase();
                const descripcion = (item.Descripcion || '').toLowerCase();

                return sku.includes(term) ||
                       marca.includes(term) ||
                       modelo.includes(term) ||
                       descripcion.includes(term);
            });

            // Limitar a 100 resultados para mejor rendimiento
            return resultados.slice(0, 100);
        }

        // Función para mostrar el dropdown con resultados
        function mostrarResultados(resultados, searchTerm) {
            skuDropdown.innerHTML = '';
            selectedIndex = -1;

            if (resultados.length === 0) {
                skuDropdown.innerHTML = '<div class="no-results">No se encontraron resultados' + (searchTerm ? ' para "' + searchTerm + '"' : '') + '</div>';
                skuDropdown.classList.add('active');
            } else {
                const fragment = document.createDocumentFragment();

                resultados.forEach((item, index) => {
                    const option = document.createElement('div');
                    option.className = 'search-select-option';
                    option.dataset.index = index;

                    // Resaltar el término de búsqueda
                    const displayText = item.SKU + ' - ' + item.Marca + ' ' + item.Modelo;
                    option.innerHTML = searchTerm ? resaltarTexto(displayText, searchTerm) : displayText;
                    option.dataset.sku = item.SKU;

                    option.addEventListener('click', function() {
                        seleccionarSKU(item);
                    });

                    fragment.appendChild(option);
                });

                skuDropdown.appendChild(fragment);
                skuDropdown.classList.add('active');
            }
        }

        // Función para resaltar el texto buscado
        function resaltarTexto(texto, busqueda) {
            try {
                const palabras = busqueda.split(' ').filter(p => p.length > 0);
                let resultado = texto;
                palabras.forEach(palabra => {
                    const index = resultado.toLowerCase().indexOf(palabra.toLowerCase());
                    if (index !== -1) {
                        const original = resultado.substr(index, palabra.length);
                        resultado = resultado.substr(0, index) + '<strong>' + original + '</strong>' + resultado.substr(index + palabra.length);
                    }
                });
                return resultado;
            } catch(e) {
                return texto;
            }
        }

        // Función para seleccionar un SKU
        function seleccionarSKU(producto) {
            skuSeleccionado = producto;
            skuSearchInput.value = producto.SKU;
            skuHiddenInput.value = producto.SKU;

            // Llenar automáticamente los campos
            document.getElementById('marca').value = producto.Marca || '';
            document.getElementById('modelo').value = producto.Modelo || '';
            document.getElementById('descripcion').value = producto.Descripcion || '';
            document.getElementById('pulgada').value = producto.Pulgada || '';

            // Cerrar dropdown
            skuDropdown.classList.remove('active');
        }

        // Función para navegar con teclado
        function navegarOpciones(direccion) {
            const opciones = skuDropdown.querySelectorAll('.search-select-option');
            if (opciones.length === 0) return;

            // Remover selección anterior
            if (selectedIndex >= 0 && selectedIndex < opciones.length) {
                opciones[selectedIndex].classList.remove('selected');
            }

            // Calcular nuevo índice
            if (direccion === 'down') {
                selectedIndex = selectedIndex < opciones.length - 1 ? selectedIndex + 1 : 0;
            } else if (direccion === 'up') {
                selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : opciones.length - 1;
            }

            // Aplicar nueva selección
            opciones[selectedIndex].classList.add('selected');
            opciones[selectedIndex].scrollIntoView({ block: 'nearest' });
        }

        // Evento de búsqueda en tiempo real
        skuSearchInput.addEventListener('input', function() {
            const searchTerm = this.value;

            // Limpiar selección previa si el usuario está escribiendo
            if (skuSeleccionado && skuSeleccionado.SKU !== searchTerm) {
                skuSeleccionado = null;
                skuHiddenInput.value = '';
                limpiarCamposAutomaticos();
            }

            const resultados = filtrarSKUs(searchTerm);
            mostrarResultados(resultados, searchTerm);
        });

        // Evento al hacer focus en el input
        skuSearchInput.addEventListener('focus', function() {
            const searchTerm = this.value;
            const resultados = filtrarSKUs(searchTerm);
            mostrarResultados(resultados, searchTerm);
        });

        // Navegación con teclado
        skuSearchInput.addEventListener('keydown', function(e) {
            const dropdown = skuDropdown;

            if (!dropdown.classList.contains('active')) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                navegarOpciones('down');
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                navegarOpciones('up');
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const opciones = dropdown.querySelectorAll('.search-select-option');
                if (selectedIndex >= 0 && selectedIndex < opciones.length) {
                    const skuCode = opciones[selectedIndex].dataset.sku;
                    const producto = catalogoSKU.find(item => item.SKU === skuCode);
                    if (producto) {
                        seleccionarSKU(producto);
                    }
                }
            } else if (e.key === 'Escape') {
                dropdown.classList.remove('active');
            }
        });

        // Cerrar dropdown al hacer click fuera
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-select-container')) {
                skuDropdown.classList.remove('active');
            }
        });

        // Función para limpiar solo los campos automáticos
        function limpiarCamposAutomaticos() {
            document.getElementById('marca').value = '';
            document.getElementById('modelo').value = '';
            document.getElementById('descripcion').value = '';
            document.getElementById('pulgada').value = '';
        }

        // Función para limpiar todo el formulario
        function limpiarFormulario() {
            document.getElementById('registroForm').reset();
            skuSearchInput.value = '';
            skuHiddenInput.value = '';
            skuSeleccionado = null;
            limpiarCamposAutomaticos();
            ocultarAlerta();
            skuDropdown.classList.remove('active');
        }

        // Función para mostrar alertas
        function mostrarAlerta(mensaje, tipo) {
            const alertBox = document.getElementById('alertBox');
            alertBox.textContent = mensaje;
            alertBox.className = 'alert alert-' + tipo;
            alertBox.style.display = 'block';

            // Ocultar la alerta después de 5 segundos
            setTimeout(function() {
                ocultarAlerta();
            }, 5000);
        }

        // Función para ocultar alertas
        function ocultarAlerta() {
            const alertBox = document.getElementById('alertBox');
            alertBox.style.display = 'none';
        }

        // Manejar el envío del formulario
        document.getElementById('registroForm').addEventListener('submit', function(e) {
            e.preventDefault();

            // Obtener los datos del formulario
            const datos = {
                licensePlate: document.getElementById('licensePlate').value,
                sku: document.getElementById('sku').value,
                marca: document.getElementById('marca').value,
                modelo: document.getElementById('modelo').value,
                descripcion: document.getElementById('descripcion').value,
                pulgada: document.getElementById('pulgada').value,
                fecha: new Date().toISOString()
            };

            // Validar que se haya seleccionado un SKU
            if (!datos.sku) {
                mostrarAlerta('Por favor seleccione un SKU', 'error');
                return;
            }

            // Guardar en localStorage (temporal)
            guardarRegistro(datos);

            // Mostrar mensaje de éxito
            mostrarAlerta('Registro guardado exitosamente', 'success');

            // Limpiar el formulario después de 2 segundos
            setTimeout(function() {
                limpiarFormulario();
            }, 2000);
        });

        // Función para guardar el registro
        function guardarRegistro(datos) {
            // Obtener registros existentes
            let registros = JSON.parse(localStorage.getItem('registrosTV') || '[]');

            // Agregar el nuevo registro
            registros.push(datos);

            // Guardar en localStorage
            localStorage.setItem('registrosTV', JSON.stringify(registros));

            console.log('Registro guardado:', datos);
        }

        // El catálogo está embebido y listo para usar
    </script>
</body>
</html>`;

// Guardar el HTML generado
fs.writeFileSync('registro-televisiones.html', html, 'utf8');
console.log('HTML generado exitosamente con datos embebidos');
