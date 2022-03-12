// open itens current fundamentals

const btnOpenFundamentals = document.getElementById('btnOpenFundamentals'); 

btnOpenFundamentals.addEventListener('click', () => {
    let conteinerFundamentals = document.getElementById('conteinerFundamentals'); 
    if (conteinerFundamentals.style.display == 'block') {
        conteinerFundamentals.style.display = 'none';
        btnOpenFundamentals.innerHTML = '&#9782;' 
    } else {
        conteinerFundamentals.style.display = 'block'; 
        btnOpenFundamentals.innerHTML = 'X'
    }
}); 

// open itens current funções 

const btnOpenfuncao = document.getElementById('btnOpenfuncao'); 

btnOpenfuncao.addEventListener('click', function() {
    let conteinerFuncaoCurrent = document.getElementById('conteinerFuncaoCurrent'); 
    if (conteinerFuncaoCurrent.style.display == 'block') {
        conteinerFuncaoCurrent.style.display = 'none';
        btnOpenfuncao.innerHTML = '&#9782;' 
    } else {
        conteinerFuncaoCurrent.style.display = 'block'; 
        btnOpenfuncao.innerHTML = 'X'
    }
}); 


/* open itens current Object */

const btnOpenObject = document.getElementById('btnOpenObject'); 

btnOpenObject.addEventListener('click', function() {
    let conteinerObject = document.getElementById('conteinerObjectCurrent'); 

    if (conteinerObject.style.display == 'block') {
        conteinerObject.style.display = 'none'; 
        btnOpenObject.innerHTML = '&#9782;'
    } else {
        conteinerObject.style.display = 'block'; 
        btnOpenObject.innerHTML = 'X'
    }
})

/* open itens current Object */ 

const btnOpenEstrutura = document.getElementById('btnOpenEstrutura'); 

btnOpenEstrutura.addEventListener('click', function() {
    let conteinerEstrutura = document.getElementById('conteinerEstruturaCurrent'); 

    if (conteinerEstrutura.style.display == 'block') {
        conteinerEstrutura.style.display = 'none'; 
        btnOpenEstrutura.innerHTML = '&#9782';

    } else {
        conteinerEstrutura.style.display = 'block'; 
        btnOpenEstrutura.innerHTML = 'X';
    }
}); 


/* ----- open itens curent Array -------  */

const btnOpenArray = document.getElementById('btnOpenArray');

btnOpenArray.addEventListener('click', function() {
    let conteinerArray = document.getElementById('conteinerArrayCurrent'); 

    if (conteinerArray.style.display == 'block') {
        conteinerArray.style.display = 'none'; 
        btnOpenArray.innerHTML = '&#9782'; 
    } else {
        conteinerArray.style.display = 'block'; 
        btnOpenArray.innerHTML = 'X'
    }
}); 


/* ----- open itens curent Loop For -------  */

const btnOpenLoopFor = document.getElementById('btnOpenLoopFor');

btnOpenLoopFor.addEventListener('click', function() {
    let conteinerLoop = document.getElementById('conteinerLoopForCurrent'); 

    if (conteinerLoop.style.display == 'block') {
        conteinerLoop.style.display = 'none'; 
        btnOpenLoopFor.innerHTML = '&#9782'; 
    } else {
        conteinerLoop.style.display = 'block'; 
        btnOpenLoopFor.innerHTML = 'X'
    }
})


