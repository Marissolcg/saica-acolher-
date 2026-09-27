# SAICA Acolher

## 📄 Descrição do Projeto
O **SAICA Acolher** é uma plataforma web desenvolvida para apoiar e organizar as atividades e oficinas oferecidas pelo Serviço de Acolhimento em Família Acolhedora / SAICA.

---

## 🚀 Tecnologias Utilizadas
- **HTML5**: Estruturação semântica das páginas.
- **CSS3**: Estilização responsiva e moderna.
- **JavaScript**: Interatividade e dinamismo.
- **Git & GitHub**: Versionamento de código e colaboração.

---

## 🌿 Estrutura de Ramificação Adotada (GitFlow)

O projeto adota a estratégia de ramificação **GitFlow** para organizar o ciclo de vida do desenvolvimento:

### Branches Principais (Longa Duração)
- `main`: Armazena exclusivamente o código em estado de **produção** (estável e testado).
- `develop`: Servidor de **integração contínua** para o desenvolvimento diário das funcionalidades.

### Branches Auxiliares (Temporárias)
- `feature/*`: Isolamento para o desenvolvimento de novas funcionalidades (ex.: `feature/estrutura-inicial`), criadas a partir da `develop` e mescladas de volta nela após a conclusão.
- `release/*`: Preparação e ajustes finais para publicação da versão de produção.
- `hotfix/*`: Correções emergenciais diretamente aplicadas à `main` e replicadas na `develop`.

---

## 🛠️ Como Executar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone [https://github.com/Marissolcg/saica-acolher-.git](https://github.com/Marissolcg/saica-acolher-.git)