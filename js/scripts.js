$(function(){
    
    const apiAccuWeather = 'gqJlXmDtm8nHX2VWM5mdO61SRp4hUqPp';
    geoLocation();
    //pega lat e longitude com base no IP ou na pesquisa
    function geoLocation(){
        $.ajax({
            url: 'http://www.geoplugin.net/json.gp',
            type:'GET',
            dataType: 'json',
            success: function(data){
                if(data.geoplugin_latitude && data.geoplugin_longitude)
                cityCode(data.geoplugin_latitude, data.geoplugin_longitude);
            },
            error: function(){
                console.log('algo de errado n ta certo nao')
            }
    
        })
    };

    //pega codigo da cidade necessario p pesquisa de clima com base na lat e long
    function cityCode(lat, long){
        $.ajax({
            url:'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=' + apiAccuWeather + '&q=' + lat + '%2C%20' + long + '&language=pt-br',
            type:'GET',
            dataType: 'json',
            success: function(data){
                weatherReq(data.Key);
            },
            error: function(){
                console.log('algo de errado n ta certo nao')
            }
            
        })
    }
    
    
    // requisicao do clima com base no codigo da cidade
    function weatherReq(local){
        $.ajax({
            url:'http://dataservice.accuweather.com/currentconditions/v1/'+local+'?apikey='+apiAccuWeather+'&language=pt-br',
            type:'GET',
            dataType: 'json',
            success: function(data){
                console.log(data);
            },
            error: function(){
                console.log('algo de errado n ta certo nao')
            }
    
        })
    }
});
// *** APIs ***
// clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
// pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
// gerar gráficos em JS: https://www.highcharts.com/demo

/*
Query p sao paulo
 


*/