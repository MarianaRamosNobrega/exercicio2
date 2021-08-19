import React, { Component } from 'react';




class App extends Component {
  render() {
    return (
      <div className="App">

    <h1><b>Diário Eletrônico</b></h1>
    <h2><strong>Aplicação de Diário Eletrônico</strong></h2>
    <p><em> </em>
    </p>
    O <strong><abbr title="Diário Eletrônico">DE</abbr> </strong>é muito útil.
    
    <p></p>
    <cite>•O portal pode ser definido como um <mark> “[...] local central para disponibilizar todos os tipos
de informações a um público variado.” (O QUÊ..., 2004)." </mark>Ele pode ser classificado em duas formas
distintas, os públicos e os corporativos, porém, nada impede que as duas características sejam
utilizadas no mesmo portal.</cite>
    <p><em> •Os portais públicos também denominados de portais web têm a função de atrair para si
qualquer tipo de usuário que esteja navegando na internet, isso porque seu conteúdo é normalmente
bem diversificado e atende aos interesses de qualquer pessoa, como esporte, negócios, fofocas,
enfim, tudo isso reunido em um único local, facilitando o acesso rápido ao que se deseja.</em>
    </p>
    <p><em> •Os portais corporativos são similares aos portais públicos, que disponibilizam informações
pertinentes a um determinado contexto, como um portal de futebol, no qual as informações são
ligadas ao “mundo da bola”, no entanto, são mais focados a assuntos ligados à empresa.</em>
    </p>
    <p><em> •Assim, as principais funções dos portais corporativos são organizar e distribuir informações e
ajudar na tomada de decisões, sempre buscando agilidade e eficácia do negócio.</em>
    </p>
    <form id="myForm" action=''>
    <br/>
    <div className="caixa">
    <input type="text" placeholder="Nome" id="caixa"/>
    <br/><br/>
    <input type="password" placeholder="Senha" id="pass"/>
    <br/><br/>
    <button id="submit">Entrar</button>
    <br/>
    </div>
    </form>
    <br/>
         <article>
        <img src="diariogenerotextual-cke.jpg" alt="Image" /><br/>
        <strong>Diário</strong><br/>
    </article>
  <input type="button" value="TÍTULO do BOTÃO AQUI" onClick="alert('SUA MENSSAGEM AQUI'); return true">
        
</script>
  
        
      </div>
      
    );
  }
}

export default App;
