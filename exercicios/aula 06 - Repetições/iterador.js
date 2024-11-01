/* 
o que é um iterador? 

Um iterador em JavaScript é um objeto que permite acessar itens de uma coleção (como arrays ou listas) um de cada vez, sem precisar expor a estrutura interna dessa coleção. Ele usa um método chamado .next() para iterar através dos elementos. Cada vez que .next() é chamado, o iterador retorna um objeto com duas propriedades:

value: o valor atual da iteração;

done: um booleano que indica se a iteração terminou (true) ou ainda há mais itens (false).

Exemplo básico de um iterador

Para criar um iterador em JavaScript, você pode usar a função Symbol.iterator:
 */

const arr = [10,20,30]
const it = arr[Symbol.iterator]()

console.log(it.next()) //{ value: 10, done: false }
console.log(it.next()) //{ value: 20, done: false }
console.log(it.next()) //{ value: 30, done: false }
console.log(it.next()) //{ value: undefined, done: true }

//Exemplo com string

const str = 'Olá!'
const it_str = str[Symbol.iterator]()

console.log(it_str.next()) //{ value: 'O', done: false }
console.log(it_str.next()) //{ value: 'l', done: false }
console.log(it_str.next()) //{ value: 'á', done: false }
console.log(it_str.next()) //{ value: '!', done: false }
console.log(it_str.next()) //{ value: undefined, done: true }

/* 
Mas isso pode ser usado na prática? Se sim, em que situações? 

Na prática, iteradores são muito usados em JavaScript, especialmente quando precisamos percorrer elementos de uma coleção de dados de maneira personalizada ou controlada. Embora muitas vezes eles sejam usados de forma implícita (por exemplo, em loops for...of ou funções como Array.from()), também é possível criar iteradores personalizados para lidar com estruturas de dados complexas ou fluxos assíncronos. Aqui estão alguns cenários práticos:

1. Percorrer estruturas de dados complexas

Para estruturas como árvores ou grafos, onde não é possível simplesmente usar um array ou objeto, um iterador permite criar uma lógica de percurso personalizada.

Por exemplo, em uma árvore de componentes em um framework front-end, pode ser útil criar um iterador que percorre cada nó para gerar ou modificar a interface.


2. Realizar grandes operações de processamento em lote

Se você estiver trabalhando com grandes conjuntos de dados (como listas enormes), um iterador ajuda a processar elementos de forma incremental, sem carregar todos de uma vez na memória. É útil especialmente com geradores (funções com function*), que criam iteradores de forma eficiente.

Exemplo: carregar uma lista de registros de um banco de dados e processar um de cada vez.


3. Manipular fluxos de dados assíncronos

Em situações de tempo real ou streaming (como dados de um servidor, sensores IoT ou APIs em tempo real), os Async Iterators ajudam a manipular esses fluxos de forma assíncrona com for await...of, tratando cada nova entrada à medida que chega.


4. Construção de APIs e bibliotecas

Quando você desenvolve APIs ou bibliotecas, iteradores podem ser usados para criar uma interface de dados mais flexível e que não expõe a estrutura interna da coleção, melhorando a segurança e organização do código.

Exemplo: o objeto Map em JavaScript usa iteradores para permitir que os desenvolvedores percorram suas chaves, valores ou entradas, oferecendo métodos como map.keys() ou map.values().


5. Implementar customizações em estruturas já existentes

Em algumas situações, pode ser útil criar seu próprio iterador para objetos que não são iteráveis por padrão, como um objeto simples {} ou um conjunto personalizado de dados.

Por exemplo, um iterador em um objeto de configuração personalizado permite que você controle como cada configuração será acessada e iterada, o que pode ser útil em jogos, aplicativos de simulação ou qualquer aplicação com muitas configurações.


Exemplo de uso prático com for await...of

async function* fetchData() {
    let page = 1;
    while (page <= 3) { // Simulando três páginas de dados
        yield fetch(https://api.exemplo.com/data?page=${page}).then(res => res.json());
        page++;
    }
}

(async () => {
    for await (const data of fetchData()) {
        console.log(data); // Processa cada página de dados
    }
})();

Neste exemplo, usamos um async iterator para buscar dados em páginas de uma API de maneira assíncrona, carregando uma página de cada vez e tratando cada resultado conforme ele chega, sem precisar esperar que todas as páginas estejam carregadas.

*/