# Exercício Final - Serviço de Pagamento

Projeto de serviço de pagamento com testes automatizados usando Mocha e integração contínua com GitHub Actions.

## 📋 Índice

- [Instalação](#instalação)
- [Executar Testes](#executar-testes)
- [Pipeline de CI/CD](#pipeline-de-cicd)
- [Relatórios de Testes](#relatórios-de-testes)

## 📦 Instalação

### Pré-requisitos

- Node.js 18 ou superior
- npm

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/dafnecalv/exercicio-final-servico-de-pagamento.git
cd exercicio-final-servico-de-pagamento
```

2. Instale as dependências:
```bash
npm install
```

## 🧪 Executar Testes

### Testes Locais

Execute os testes com o Mocha:
```bash
npm test
```

### Testes com Relatório HTML

Para gerar um relatório HTML usando Mochawesome:
```bash
mkdir -p reports
npx mocha --reporter mochawesome --reporter-options reportDir=reports,reportFilename=mochawesome,quiet=true
```

O relatório será gerado em `reports/mochawesome.html`.

## 🚀 Pipeline de CI/CD

Este projeto utiliza **GitHub Actions** para integração contínua (CI/CD).

### Configuração da Pipeline

**Arquivo:** `.github/workflows/ci.yml`

**Nome:** N4 - Execução da pipeline de CI

### Gatilhos de Execução

A pipeline é acionada em três momentos:

#### 1. **Push na branch main**
```yaml
on:
  push:
    branches: [ main ]
```
Sempre que há um commit na branch `main`, a pipeline é executada automaticamente.

#### 2. **Execução Manual (Workflow Dispatch)**
```yaml
workflow_dispatch: {}
```
Você pode executar manualmente a pipeline através da aba **Actions** no GitHub.

**Passos:**
1. Vá para a aba **Actions**
2. Selecione o workflow "N4 - Execução da pipeline de CI"
3. Clique em **Run workflow**

#### 3. **Execução Agendada (Schedule)**
```yaml
schedule:
  - cron: '*/10 * * * *'
```
A pipeline é executada automaticamente a cada **10 minutos** (24/7).

### Etapas da Pipeline

A pipeline executa os seguintes passos em um runner Ubuntu:

| Etapa | Descrição | Comando |
|-------|-----------|---------|
| **Checkout** | Clona o repositório | `actions/checkout@v4` |
| **Setup Node.js** | Instala Node.js 18 | `actions/setup-node@v4` |
| **Install dependencies** | Instala as dependências | `npm ci` |
| **Prepare report folder** | Cria pasta para relatórios | `mkdir -p reports` |
| **Run tests** | Executa testes e gera relatório | `npx mocha --reporter mochawesome ...` |
| **Upload report** | Faz upload do relatório | `actions/upload-artifact@v4` |

## 📊 Relatórios de Testes

### Acessar Relatórios

Os relatórios HTML são armazenados como **artefatos** na pipeline.

**Passos para acessar:**

1. Vá para a aba **Actions** no GitHub
2. Selecione o workflow mais recente
3. Desça até a seção **Artifacts**
4. Clique em `mochawesome-report` para fazer download

### Estrutura do Relatório

O relatório gerado contém:
- ✅ Resumo dos testes (passou/falhou)
- 📈 Tempo de execução
- 📋 Detalhes de cada teste
- 🎯 Taxa de sucesso

### Gerar Relatório Localmente

Para gerar e visualizar o relatório no seu computador:

```bash
npm install
mkdir -p reports
npm test -- --reporter mochawesome --reporter-options reportDir=reports,reportFilename=mochawesome,quiet=true
```

Depois abra o arquivo `reports/mochawesome.html` no navegador.

## 📝 Dependências

- **mocha**: ^11.7.6 - Framework de testes
- **mochawesome**: ^7.1.3 - Reporter HTML para Mocha


## 📚 Referências

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Mocha Testing Framework](https://mochajs.org/)
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)


## 👤 Autor

Dafne Cavalcante

