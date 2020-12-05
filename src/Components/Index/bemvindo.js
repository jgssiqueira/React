import '../../estilos/estilos.css'

export default function Jumbo() {
    return (
        <div>
            <div className="jumbotron">
                <h2 className="mb-4">Bem-vindos ao Reino do Basquete!</h2>
                <p>Compras acima de <b>R$ 200,00</b>, tem <b><i>frete grátis</i></b> para todo o país.</p>
                <a href="produtos.php" class="btn bg-warning">Clique aqui para ver nossos produtos!</a>
            </div>
            <hr />
            <div>
                <h2 className="mb-5 text-danger">Cadastre-se e fique por dentro das novidades!</h2>
            </div>
        </div>

    )

}