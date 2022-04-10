class Utils {

    static dateFormat(date){

        var locale="pt-BR"
        return date.toLocaleDateString(locale)+' - '+date.toLocaleTimeString(locale);

    }

}