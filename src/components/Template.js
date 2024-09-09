const templateFunction= () => {

    const dados = {
        name: "Guilherme",
        age: 23,
        job: "Desenvolvedor de Sistemas"
    }

    return(
        <div>
            <h1>Boa tarde {dados.name}</h1>
            <p>{dados.age} anos, {dados.job}</p>
        </div>
    );
};

export default templateFunction;