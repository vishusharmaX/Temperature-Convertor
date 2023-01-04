const calculateTemp=()=>{

    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);
    const TempScale = document.getElementById('temp_diff').value;
//    const valueTemp=  temp_diff.options[TempScale.selectedIndex].value;
//      console.log(valueTemp);
    const celToFah=(cel)=>{
        let fahrenheit = Math.round((cel*9/5)+32);
        return fahrenheit;
    }
    const fahToCel=(fehr)=>{
        let celcius = Math.round((fehr-32)*5/9);
        return celcius;
    }
    let result ;

    if(TempScale=='cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`=${result}°Fahrenheit`
    }else{
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`=${result}°Celsius`
    }
}
