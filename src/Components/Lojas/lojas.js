import '../../estilos/estilos.css'

export default function Lojas() {
    return (
        <div>
            <main>
                <header>
                    <h2 class="display-4">Nossas lojas</h2>
                </header>
                <hr />
                    <div class="row">
                        <div class="container_lojas">
                            <div class="lojas">
                                <h3>Rio de Janeiro</h3>
                                <p>Presidente Vargas, Nº 438</p>
                                <p>10º andar</p>
                                <p>Centro</p>
                                <p>(21) 3340-2574</p>
                            </div>

                            <div class="lojas">
                                <h3>São Paulo</h3>
                                <p>Rua Vinte e Quatro de Maio, Nº62</p>
                                <p>1º andar</p>
                                <p>Guarulhos</p>
                                <p>(11) 3567-0872</p>
                            </div>

                            <div class="lojas">
                                <h3>Curitiba</h3>
                                <p>Rua Delegado Leopoldo Belczak, Nº14</p>
                                <p>1º andar</p>
                                <p>Capão da Imbuia</p>
                                <p>(41) 2356-7890</p>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
    )
}