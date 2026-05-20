document.addEventListener('DOMContentLoaded', () => {
    const quizItems = document.querySelectorAll('.quiz-item');

    quizItems.forEach(item => {
        const botoes = item.querySelectorAll('.botoes-quiz button');
        const resultadoElement = item.querySelector('.resultado');
        const comentario = item.querySelector('.comentario').textContent;

        botoes.forEach(botao => {
            botao.addEventListener('click', (event) => {
                const respostaUsuario = event.target.dataset.resposta;
                let respostaCorreta;
                let motivo;

                // Lógica para determinar a resposta correta e o motivo
                if (comentario.includes('Eu não concordo com esse posicionamento político')) {
                    respostaCorreta = 'opiniao';
                    motivo = 'Crítica a ideias ou políticas é parte fundamental do debate democrático.';
                } else if (comentario.includes('Pessoas dessa etnia X são inferiores')) {
                    respostaCorreta = 'odio';
                    motivo = 'Ataca a dignidade humana com base em características inerentes e promove a desigualdade/discriminação.';
                } else if (comentario.includes('Esse artista é péssimo')) {
                    respostaCorreta = 'opiniao';
                    motivo = 'Crítica estética ou profissional, por mais dura que seja, é protegida pela liberdade de expressão.';
                } else if (comentario.includes('Deveríamos nos organizar para expulsar todos os seguidores da religião Y')) {
                    respostaCorreta = 'odio';
                    motivo = 'Incitamento direto à violência e exclusão social baseada em crença religiosa.';
                }

                if (respostaUsuario === respostaCorreta) {
                    resultadoElement.textContent = `Correto! Isso é ${respostaCorreta}. Motivo: ${motivo}`;
                    resultadoElement.classList.remove('incorreto');
                    resultadoElement.classList.add('correto');
                } else {
                    resultadoElement.textContent = `Incorreto. Isso é ${respostaCorreta}. Motivo: ${motivo}`;
                    resultadoElement.classList.remove('correto');
                    resultadoElement.classList.add('incorreto');
                }
                resultadoElement.style.display = 'block';

                // Desabilitar botões após a resposta
                botoes.forEach(btn => btn.disabled = true);
            });
        });
    });
});
