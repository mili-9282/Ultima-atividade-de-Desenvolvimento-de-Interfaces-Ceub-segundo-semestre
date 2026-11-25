var claridade = true;
var tamanhoFonte1 = 18;
var tamanhoFonte2 = 22;
var tamanhoFonte3 = 30;
function aumentarTamanho() {
    tamanhoFonte1 += 2;
    document.documentElement.style.setProperty('--tamanhoFonte1', tamanhoFonte1 + 'px');
    tamanhoFonte2 += 2;
    document.documentElement.style.setProperty('--tamanhoFonte2', tamanhoFonte2 + 'px');
    tamanhoFonte3 += 2;
    document.documentElement.style.setProperty('--tamanhoFonte3', tamanhoFonte3 + 'px');
}
function diminuirTamanho() {
    tamanhoFonte1 -= 2;
    document.documentElement.style.setProperty('--tamanhoFonte1', tamanhoFonte1 + 'px');
    tamanhoFonte2 -= 2;
    document.documentElement.style.setProperty('--tamanhoFonte2', tamanhoFonte2 + 'px');
    tamanhoFonte3 -= 2;
    document.documentElement.style.setProperty('--tamanhoFonte3', tamanhoFonte3 + 'px');
}
function mudarClaridade() {
    claridade = !claridade;
    if (claridade) {
        document.documentElement.style.setProperty('--cor1', '#e4e4e4');
        document.documentElement.style.setProperty('--cor2', '#181818');
    } else {
        document.documentElement.style.setProperty('--cor1', '#181818');
        document.documentElement.style.setProperty('--cor2', '#e4e4e4');
    }
}
const data = [
    {
        title: "Introdução",
        description: "Muito bom dia, esta seção do site está aqui para oferecer uma dissertação na forma de uma redação fragmentada em 10 cartões a respeito de alguns dos conceitos presentes na disciplina de Desenvolvimento de Interfaces, sendo estes; as diretrizes WCAG, as heurísticas de Nielsen, user interface (UI), user experience (UX), paletas de cores, psicologia das cores, branding, acessibilidade e usabilidade, apresentarei cada assunto em um parágrafo diferente através desta redação e darei exemplos de como estes conceitos influenciaram na criação deste site, em seus parágrafos/cartões respectivos (Exceto para o último cartão, o da sumarização, visto que a sua função é a de descrever o passo a passo de como este projeto foi feito)."
    },
    {
        title: "WCAG",
        description: "O WCAG (Diretrizes de Acessibilidade para Conteúdo da Web) é um padrão internacional de acessibilidade criado para garantir que os sites e conteúdos da web sejam disponibilizados para o maior número possível de pessoas de forma equitativa, fornecendo orientações sobre a escolha de cores e contrastes adequados para interfaces acessíveis, padrões para tornar a utilização dos sites mais fácil para os usuários. Como exemplo, tenho em meu site todos os contrastes validados pelo Adobe Color Contrast Checker."
    },
    {
        title: "Heurísticas de Nielsen",
        description: "As heurísticas de Nielsen são um conjunto de dez princípios gerais para o desenvolvimento de interfaces, sendo elas as seguintes: Visibilidade do estado do sistema : Dita que o desing deve sempre manter os usuários informados sobre o que está acontecendo por meio de feedbacks apropriados dentro de uma quantia de tempo razoável; Correspondência entre sistema e mundo real : Dita que deve estar na 'língua natural do usuário', de forma a apenas usar termos que este conhece e seguindo convenções já pré-estabelecidas com as quais o usuário está acostumado; Controle e liberdade de usuário : Dita que o desing deve sempre avisar o usuário através de uma marcação caso este cometa algum erro para que não seja necessário repetir todo o processo; Consistência e padrões : Dita que palavras e símbolos comunmente encontrados em outros locais devem seguir os padrões da indústria e que os padrões estabelecidos pelo programador devem permanecer consistentes; Prevenção de erro : Dita que o desing deve eliminar condições que levem, através de checagens com o usuário e mensagens de erro; Reconhecimento em vez de recordação : Dita que o desing deve minimizar a necessidade de memória do usuário, ou seja todas as informações que lhe interessam devem estar visualmente disponíveis para de maneira reconhecível; Flexibilidade e eficiência de uso : Dita que o desing deve possuir atalhos voltados a usuários mais experientes permitindo que esses realizem ações repetitivas mais rapidamente sem é claro confundir os mais inexperientes; Estética e desing minimalista : Dita que as interfaces apresentar informações e recursos desnecessários ou pouco úteis de maneira visual com o objetivo de não sobrecarregar visualmente o usuário com mais um objeto que compete por sua atenção; Ajude usuários à reconhcer, diagnosticar e se recuperar de erros : Dita que as mensagens de erro de um desing devem estar na língua padrão de forma a indicar o problema e sugerir uma solução ao invés de mostrar um código de erro pouco útil a um usuário casual; e Ajuda e documentação : Dita que um bom sistema não precisa ser explicado pois a forma de usá-lo é intuitiva e natural, porém caso este passo seja necessário a explicação deve ser a mais detalhada possível para ajudar o usuário a completar suas tarefas sem deixar dúvidas. Como exemplo presente no meu site, tem-se a primeira heurística que se manifesta por exemplo no fato de que a aba de login exibi uma mensagem de erro detalhada caso o usuário tente entrar sem preencher os campos obrigatórios de nome e senha."
    },
    {
        title: "User Interface (UI)",
        description: "A UI (User Interface), ou interface do usuário, diz respeito à camada visual e interativa do produto digital. Ou seja, tudo aquilo que o usuário vê e utiliza para interagir com o sistema. Além da estética, a UI Design precisa garantir clareza, consistência e facilidade de uso, pois uma interface confusa e desorganizada pode comprometer toda a experiência, mesmo que o produto tenha uma boa estrutura funcional. Por fim a UI tem como principais características, o foco na interface visual e interação, declara como o produto se apresenta, é baseado no design visual e consistência, e sua atuação na aparência e interatividade do produto. E se mostra em meu site, através de suas imagens, campos e botões."
    },
    {
        title: "User Experience (UX)",
        description: "A UX (User Experience), ou experiência do usuário, refere-se à percepção, às emoções e às respostas de uma pessoa ao interagir com um produto digital ao longo de toda a sua jornada, indo muito além da usabilidade. Envolve compreender profundamente o comportamento do usuário, suas necessidades, expectativas e frustrações, desde o primeiro contato com o produto até a conclusão de uma tarefa ou conversão, possuindo  grande impacto nos resultados de um projeto, além disso tem como principais características, o foco na experiência e jornada do usuário, definição do funcionamento do produto, possuir como base pesquisa e dados, e sua atuação na estrutura e usabilidade do produto. Se apresentando em meu site, na forma de uma experiência agradável e intuitiva, ao se tirar anotações."
    },
    {
        title: "Paletas de Cores",
        description: "A paleta de cores é um conjunto de cores selecionadas que são utilizadas em um projeto de desenvolvimento de interfaces, ela serve como uma ferramenta essencial para transmitir emoções, criar identidade visual e harmonizar elementos estéticos de uma interface. A escolha das cores em uma paleta pode influenciar a percepção do público e a eficácia da mensagem que a interface deseja transmitir. É portanto, evidente que o elemento da paleta de cores também permeia meu site se apresentando principalmente atrvés do simbolismo patriótico do site."
    },
    {
        title: "Psicologia das Cores",
        description: "A psicologia das cores é a área que estuda como as diferentes tonalidades afetam as emoções e comportamentos das pessoas. Por exemplo, o vermelho pode evocar paixão e energia, enquanto o azul transmite calma e confiança. A compreensão dessas associações, permite que os designers utilizem as cores de forma estratégica para criar uma experiência coerente com os objetivos do site ou aplicativo. Quanto ao meu uso da psicologia das cores, para criação do site, este foi pouco profundo, visto que minha maior preocupação, era em transmitir sensações mais calmas, por meio de cores como o azul, ao invés de emoções mais voláteis através de tons avermelhados por exemplo."
    },
    {
        title: "Branding",
        description: "O branding é o processo de criação de uma identidade distinta e reconhecível para um produto, serviço ou organização, neste caso um site, ele envolve definir sua visão, missão, valores, personalidade, e estilo visual, ajudando à comunicar sua mensagem, atrair seu público-alvo e se diferenciar de seus concorrentes. E no site que a mim pertence, este processo visou criar uma identidade modesta e patriótica."
    },
    {
        title: "Acessibilidade",
        description: "A acessibilidade se trata da capacidade de um site de acomodar em seu sistema todos os tipos de usuários, tenham eles deficiências cognitivas, físicas ou nenhum impeditivo, como exemplos de funções e escolhas de desing que tornam sites mais acessíveis ao público, podemos citar uma funcionalidade muito encontrada em sites nos dias de hoje que transforma áudio em texto para usuários com dificuldades auditivas, já quando se trata de decisões sobre o desing temos o contraste entre o texto e seu fundo que deve ser determinado de forma a atender determinados requisitos que garantem a legibilidade da passagem para os mais diversos usuários. Neste site ela toma forma por exemplo, através dos botões fixados em seu topo que aumentam e diminuem o tamanho da fonte utilizada através da interface."
    },
    {
        title: "Usabilidade",
        description: "A usabilidade envolve a avaliação sobre diversos critérios capazes de medir a qualidade da experiência da pessoa usuária em relação a um produto, sistema ou neste caso, um site, portanto, é um fator importantíssimo para o desenvolvimento de interfaces e deve ser considerado ao desenvolver aplicações para que elas sejam compreendidas e utilizadas da melhor forma possível pelos usuários. E na interface presente, eu a consideraria alta, visto que suas funcionalidades são intuitivas, simples e eficazes."
    },
    {
        title: "Sumarização",
        description: "Primeiramente, para construir o site Bloco de Notas BR eu precisaria de 3 arquivos, 2 html, site e login, e um javascript para integração de certas funcionalidades. A estrutura do site era longa, então fixei uma navbar no topo do site para servir de atalho para as diferentes seções da interface com o uso das tags a e section. Após isso, nomeei as seções usando as tags de título e sub-título para customizá-las com as cores do Brasil. Conectei os arquivos html com o javascript para criar funções que controlassem o tamanho das fontes e a alternação entre modo claro e escuro. Organizei as tags style dos arquivos html para organizálos e padronizar suas tags, além de inserir as variáveis de cores e tamanhos. Utilizei a tag de input para criar um espaço para senha e um para um nome do usuário e criei um script interno de forma que o botão de enviar (tag button) só desse acesso ao site caso ambos os campos estivessem preenchidos, caso não estivessem gerava uma alerta através de um else na mesma função. Coloquei uma imagem na página de login. Criei espaços com a tag textarea para compor os 10 blocos de notas. Criei com o uso de tags form e inputs para criar um formulário de contato. Criei com as tags section e div um carrossel de imagens, e adicionei as próprias. Usei das tags label, span e div para criar uma barra de pesquisa com cartões que contém a redação solicitada (e a escrevi com informações de diversos sites) além da sumarização. Usei a tag p para dissertar a respeito do site, seus detalhes e objetivos, e listar referências.	Criei uma nota de rodapé de direitos reservados com a tag footer. Consertei as partes disfuncionais / indesejadas das tags style. Escrevi esta sumarização.	Lancei tudo no Github."
    },
];
const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");
const displayData = data => {
    cardContainer.innerHTML = "";
    data.forEach(e => {
        cardContainer.innerHTML += `
        <div class="card">
            <h4>${e.title}</h4>
            <p>${e.description}</p>
        </div>
        `
    })
}
window.addEventListener("load", displayData.bind(null, data))

searchInput.addEventListener("keyup", (e) => {
    const search = data.filter(i => i.title.toLowerCase().includes(e.target.value.toLowerCase()))
    displayData(search);
})
