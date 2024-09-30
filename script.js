const avanca = document.querySelectorAll('.btn-next');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelectorAll(.ativo);
        const proximoPasso = 'pass-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
     })
})
