// Mostrar campos para atualizar endereço se selecionado "Não"
document.querySelectorAll('input[name="endereco"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const novoEnderecoDiv = document.getElementById('novoEndereco');
        if (this.value === 'nao') {
            novoEnderecoDiv.style.display = 'block';
        } else {
            novoEnderecoDiv.style.display = 'none';
        }
    });
});

// Mostrar campos para atualizar e-mail se selecionado "Não"
document.querySelectorAll('input[name="email"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const novoEmailDiv = document.getElementById('novoEmailCampo');
        if (this.value === 'nao') {
            novoEmailDiv.style.display = 'block';
        } else {
            novoEmailDiv.style.display = 'none';
        }
    });
});

// Mostrar campos para incluir novo telefone se selecionado "Sim"
document.querySelectorAll('input[name="novoTelefone"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const incluirTelefoneDiv = document.getElementById('incluirTelefone');
        if (this.value === 'sim') {
            incluirTelefoneDiv.style.display = 'block';
        } else {
            incluirTelefoneDiv.style.display = 'none';
        }
    });
});

// Função para atualizar os dados no formulário
document.getElementById('confirmar').addEventListener('click', function () {
    // Atualizar o endereço se for marcado como incorreto
    const enderecoCorreto = document.querySelector('input[name="endereco"]:checked');
    if (enderecoCorreto && enderecoCorreto.value === 'nao') {
        const novaRua = document.getElementById('novaRua').value;
        const novoNumero = document.getElementById('novoNumero').value;
        const novoBairro = document.getElementById('novoBairro').value;
        const novaCidade = document.getElementById('novaCidade').value;
        const novoCEP = document.getElementById('novoCEP').value;

        // Atualiza o conteúdo do endereço exibido
        document.getElementById('endereco_atual').innerHTML =
            `Rua: ${novaRua}, ${novoNumero}<br>Bairro: ${novoBairro} - ${novaCidade}<br>CEP: ${novoCEP}`;

        // Ocultar campos de novo endereço após atualização
        document.getElementById('novoEndereco').style.display = 'none';
    }

    // Atualizar o e-mail se for marcado como incorreto
    const emailCorreto = document.querySelector('input[name="email"]:checked');
    if (emailCorreto && emailCorreto.value === 'nao') {
        const novoEmail = document.getElementById('novoEmail').value;
        document.getElementById('email_atual').innerText = novoEmail;

        // Ocultar campo de novo email após atualização
        document.getElementById('novoEmailCampo').style.display = 'none';
    }

    // Incluir novo telefone
    const incluirTelefone = document.querySelector('input[name="novoTelefone"]:checked');
    if (incluirTelefone && incluirTelefone.value === 'sim') {
        const novoTelefone = document.getElementById('novoTelefone').value;
        const responsavel = document.getElementById('responsavelTelefone').value;
        const telefoneLista = document.getElementById('telefones_lista');

        // Adicionar novo telefone na lista
        const novoItem = document.createElement('li');
        novoItem.innerHTML = `<label><input type="checkbox" name="telefone" value="${responsavel}"> ${novoTelefone} / ${responsavel} - (Telefone Celular)</label>`;
        telefoneLista.appendChild(novoItem);

        // Ocultar campos de inclusão de telefone após adicionar
        document.getElementById('incluirTelefone').style.display = 'none';
    }

    // Remover telefones selecionados para exclusão
    document.querySelectorAll('input[name="telefone"]:checked').forEach(checkbox => {
        checkbox.parentElement.remove();
    });

    // Limpar seleções de rádio
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });

    alert("Dados atualizados com sucesso!");
});
