import '../../estilos/estilos.css'

export default function Categorias () {
    return (
        <div>
            <header>
                <h2 className="display-4">Produtos</h2>
                <hr />
            </header>
            <section className="categorias">
                <h3 className="text-center">Categorias</h3>
                <ul className="list-group ulCat">
                    <li onclick="exibir_todos()" className="list-group-item ">Todos (8)</li>
                    <li onclick="exibir_categoria('Jerseys')" className="list-group-item">Jerseys (8)</li>
                    <li onclick="exibir_categoria('Bolas')" className="list-group-item">Bolas (0)</li>
                    <li onclick="exibir_categoria('Bonés')" className="list-group-item">Bonés (0)</li>
                    <li onclick="exibir_categoria('Bermudas')" className="list-group-item">Bermudas (0)</li>
                    <li onclick="exibir_categoria('Tênis')" className="list-group-item">Tênis (0)</li>
                </ul>
            </section>
        </div>
    )
}