// Estrutura de dados ideal para redução de spam e evitar duplicatas

// TDD  - teste driven development

var novoMapa = new Map();

class HistoryMap{
    
     

    
}

novoMapa.set('11/11/11/2011 - 23:30 - URL',{title:'titulo do site', url:'url sozinha'});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:30 - URL',{});
novoMapa.set('11/11/11/2011 - 23:31 - URL',{});

// só irá registar dias e horários diferentes mesmo que o usuário faça 8 requisições no mesmo dia e na mesma hora
// o map set irá evitar esses spans e duplicatas
var resultado  = novoMapa.get('11/11/11/2011 - 23:30 - URL');
console.log(resultado);

// map baseado no id vai sempre reescrever o ultimo item e evitar duplicadas