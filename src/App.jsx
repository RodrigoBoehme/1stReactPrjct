//Tela inicial
//Usa varios componente (aqui faremos a composição )
import Card from "./components/ui/Card"
import Header from "./components/ui/Header"
import CardV2 from "./components/ui/CardV2"
import "./App.css"

import img1 from "./assets/hero.png"
import img2 from "./assets/R.jpg"
import img3 from "./assets/DWM.jpeg"

function App({onNavigation}){
  return(
    <section className="page">
      <Header 
      title="A"
      subtitle="Exemplo simples com componentização"
      />
      <div className="App">
        <h1>Meus Cards</h1>
        <CardV2
        imagem={img3}
        alt=""
        titulo="Oque é"
        descricao="O desenvolvimento web e mobile envolve a criação de sites e aplicativos, utilizando tecnologias específicas para cada plataforma, com foco em experiência do usuário, performance e integração de sistemas."
        textoBotao="Clique Ali"
        />

        <CardV2
        imagem={img1}
        alt="asda"
        titulo="Desenvolvimento Web"
        descricao="O desenvolvimento web refere-se à criação de sites e aplicações acessíveis via navegador, podendo ser dividido em front-end (HTML, CSS, JavaScript, frameworks como React, Angular e Vue.js), back-end (Node.js, PHP, Python, Java, bancos de dados como MySQL, PostgreSQL e MongoDB) e full-stack, que combina ambas as áreas."
        textoBotao="Clique Aqui"
        />

        <CardV2
        imagem={img2}
        alt="avbfnka"
        titulo="Desenvolvimento mobile"
        descricao="Já o desenvolvimento mobile foca em aplicativos para smartphones e tablets, podendo ser nativo (Kotlin para Android, Swift para iOS) ou híbrido (React Native, Flutter), oferecendo acesso a funcionalidades nativas como GPS, câmera e notificações. 
nextage.com.br
+2"
        textoBotao="Clique Acola"
        />
      </div>
    </section>
  )
}
export default App