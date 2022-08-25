let textAlert = 'You will be redirected to an external website for English language / Você será conduzido a uma página web externa para o Idioma Português';

var dict = {
    'Home': {
        pt: 'a Principal'
    },
    /*Alert*/
    "Hello, my name is Lucas": {
        pt: "Olá, meu nome é Lucas"
    },

    "I am": {
        pt: "eu sou"
    },

    "Agencies State map": {
        pt: "Mapa do Estado"
    },

    "Go to the online campus (in Spanish)": {
        pt: "vá para o campo virtual, em espanhol"
    }
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var translator = $('body').translate({ lang: "en", t: dict }); //use English
if (getUrlParameter('lang') == 'pt') {
    translator.lang("pt");
}

$(document).ready(function(){
    if(getUrlParameter('lang') == 'pt'){
        console.log('pt');
        $('a').each(function(i,v){
            let viejoHREF = $(v).attr('href');
            $(v).attr('href', viejoHREF+'?lang=pt');
        });
        $('.cepi-url').attr('href','https://so.jst.gob.ar/idiomasJST/');
        $('.cepi-url').find('h3').text('Web - English');
    }
})

