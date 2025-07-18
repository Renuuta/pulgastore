// Scripts personalizados para Pulga Store
$(document).ready(function() {
    // Activar DataTables en la tabla de pedidos
    if ($('#tablaPedidos').length) {
        $('#tablaPedidos').DataTable({
            language: {
                url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
            }
        });
    }
    // Evento para mostrar mensaje al enviar formulario de contacto
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        // Mostrar mensaje de éxito
        if ($('.form-success').length === 0) {
            $(this).after('<div class="form-success">¡Gracias por contactarnos! Pronto te responderemos.</div>');
        }
        this.reset();
        setTimeout(function() {
            $('.form-success').fadeOut(500, function() { $(this).remove(); });
        }, 3000);
    });

    // Evento en botones de compra (solo los que tienen la clase btn-comprar)
    $('.btn-comprar').on('click', function() {
        alert('¡Producto agregado al pedido! Nos pondremos en contacto contigo.');
    });

    // Animación en tarjetas de productos
    $('.card').hover(
        function() {
            $(this).addClass('shadow-lg').css('transform', 'scale(1.05)');
        },
        function() {
            $(this).removeClass('shadow-lg').css('transform', 'scale(1)');
        }
    );
});
