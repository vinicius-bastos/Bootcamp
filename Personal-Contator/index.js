let container = window.document.getElementById("app")
// let titulo = document.createElement("h1")
// titulo.innerHTML = "Título inserido por Javascript :0 "
// container.appendChild(titulo)

function Contador(props){

    const [numero, setNumero] = React.useState(0)

    function somar(){
        setNumero(numero + 1)
        console.log("Somei e ficou = " + numero)
    }

    function subtrair(){
        setNumero(numero - 1)
        console.log("Subitrai e ficou = " + numero)
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h1>{numero}</h1>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    )
}

function App(){
    return (
        <React.Fragment>
            <h1>Vote no seu lutador preferido</h1>
            <Contador titulo='Francis "The predator" Ngannou' />
            <Contador titulo='Stipe "The Fireman" Miocic' />
            <Contador titulo='Jon "Bones" jones' />
        </React.Fragment>
    )
}

ReactDOM.render(React.createElement(App, null, null), container)