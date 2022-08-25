let textAlert = 'You will be redirected to an external website for English language / Você será conduzido a uma página web externa para o Idioma Português';

var dict = {
    /* Navbar */
    'Home': {
        pt: 'a Principal',
        fr: "",
        es: 'Principal',
    },
    /* Presentation */
    "Hello, my name is Lucas": {
        pt: "Olá, meu nome é Lucas",
        fr: "bonjour, je m'appelle Lucas",
        es: 'Hola, mi nombre es Lucas'

    },

    "I am": {
        pt: "Eu sou",
        fr: "Je suis",

    },

    "I am a skydiver with over 8 years of experience.": {
        pt: "Tenho 8 anos de experiência como paraquedista"
    },

    "Go to the online campus (in Spanish)": {
        pt: "vá para o campo virtual, em espanhol"
    },
    /* Presentation */
    "Contact": {
        pt: "Eu sou",
        fr: "Je suis",
        es: "Contacto"

    },
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
} if (getUrlParameter('lang') == 'fr') {
    translator.lang("fr");
} if (getUrlParameter('lang') == 'es') {
    translator.lang("es");
}

$(document).ready(function(){
    if(getUrlParameter('lang') == 'pt'){
        console.log('pt');
        $('a').each(function(i,v){
            let viejoHREF = $(v).attr('href');
            $(v).attr('href', viejoHREF+'?lang=pt');
        });
        $('.cepi-url').attr('href','#');
        $('.cepi-url').find('h3').text('Web - English');
    } else {
        if(getUrlParameter('lang') == 'fr'){
            console.log('fr');
            $('a').each(function(i,v){
                let viejoHREF = $(v).attr('href');
                $(v).attr('href', viejoHREF+'?lang=fr');
            });
            $('.cepi-url').attr('href','#');
            $('.cepi-url').find('h3').text('Web - English');
        }
    }
})

