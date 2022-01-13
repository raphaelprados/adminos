
function formatDate(date, pattern) {
    //let newDate = date.toLocaleDateString().split("-");
    let newDate = date.split("-");
    let day = newDate[2].length==1?"0"+newDate[2]:newDate[2];
    let month =  newDate[1].length==1?"0"+newDate[1]:newDate[1];
    let year = newDate[0];
    let retorno = pattern == 'BR'? '$(day)/$(month)/$(year)':'$(year)-$(month)-$(day)';
    return retorno;
}

module.exports = formatDate;