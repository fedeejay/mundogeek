$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $.validator.addMethod("nome-valido", function(value, element) {

        return this.optional(element) || value.trim().split(/\s+/).length >= 2;
    }, "Por favor, informe seu nome completo (pelo menos nome e sobrenome)");

    $('form#cadastro').validate({
        rules: {
            'nome-completo': {
                required: true,
                "nome-valido": true
            },
            'email': {
                required: true,
                email: true
            },
            'telefone': {
                required: true,
                minlength: 15
            },
            'cpf': {
                required: true,
                minlength: 14
            },
            'endereco': {
            required: true
            },
            'cep': {
            required: true,
            minlength: 9
            }
        },
        messages: {
            'nome-completo': {
                required: 'Por favor, informe seu nome completo'
            },
            'email': {
                required: 'Por favor, informe seu e-mail',
                email: 'Por favor, informe um e-mail válido'
            },
            'telefone': {
                required: 'Por favor, informe seu telefone',
                minlength: 'Por favor, informe um telefone válido'
            },
            'cpf': {
                required: 'Por favor, informe seu CPF',
                minlength: 'Por favor, informe um CPF válido'
            },
            'endereco': {
                required: 'Por favor, informe seu endereço completo'
            },
            'cep': {
                required: 'Por favor, informe seu CEP',
                minlength: 'Por favor, informe um CEP válido'
            }
        },
        submitHandler: function(form) {
        alert('Formulário enviado com sucesso!');
        form.reset();
        return false;
        },
        invalidHandler: function(event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                var message = errors == 1
                ? 'Você precisa preencher 1 campo obrigatório'
                : 'Você precisa preencher ' + errors + ' campos obrigatórios';
                alert(message);
        } else {
            $('.msg-ajuda').remove();
        }
        }
    });
});
