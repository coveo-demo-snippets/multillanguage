
window.coveoCustomScripts['default'] = function(promise) {
 var language = document.getElementsByClassName('triggerLabel')[0].innerHTML;
    console.log(language);
   
    var languageDictionary = {'English (US)' : "en", 'Fran�ais (CA)' : 'fr'};
     console.log(languageDictionary[language]);
     console.log(languageDictionary[language])
     var languageKey = languageDictionary[language];
    
    	Coveo.$('.CoveoSearchInterface').on('buildingQuery', function(e, args) {
           
            	//add pizza to query
                //args.queryBuilder.advancedExpression.add('"@sflanguage == "fr"');
            	args.queryBuilder.constantExpression.add('@sflanguage == \"' + languageKey '\"');
        });
}
