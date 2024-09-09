const Challenge = () => {
    const valores = {
        value1: 3,
        value2 :4        
    };

    const Soma = () => {
        var resultado = valores.value1 + valores.value2;   
        document.getElementById("result").innerHTML = resultado;         
    }
    
    return(
        <div>
            <div>{valores.value1}</div>
            <div>{valores.value2}</div>
            <button onClick={Soma}>Somar</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <div id="result"></div>
        </div>
    );
};

export default Challenge;