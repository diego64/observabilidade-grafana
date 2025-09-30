## 📝 Summary

Este repositório tem como objetivo construir um sistema de observabilidade para duas aplicações desenvolvidas em
Node.js, utilizando o framework Nest.js para auxiliar na identificação proativa de possíveis falhas no ambiente.

Para simular esse cenário de forma prática, todas as ferramentas foram configuradas com Docker,
permitindo que as imagens rodem localmente de maneira rápida e gratuita. Portanto, é necessário ter o 
Docker instalado em sua máquina para acompanhar o projeto.

Antes de iniciarmos o monitoramento, vamos conhecer algumas das principais ferramentas utilizadas neste setup:

1 - Grafana - Plataforma de visualização e monitoramento de dados em tempo real, muito utilizada para criar
dashboards interativos que exibem métricas provenientes de diversas fontes.

2 - Grafana Loki - Sistema de agregação e busca de logs, projetado para armazenar logs.

3 - Grafana Tempo - Sistema de rastreamento distribuído (tracing), projetado para coletar e armazenar spans de
aplicações distribuídas de forma escalável e econômica.

4 - Grafana Mimir: Solução de armazenamento escalável para séries temporais, projetada para armazenar grandes 
volumes de métricas.

5 - Prometheus - Ferramenta de monitoramento que coleta, armazena e consulta métricas de sistemas e aplicações em
tempo real.

6 - Minio - Sistema de armazenamento de objetos compatível com S3, leve e escalável, usado para armazenar grandes
volumes de dados não estruturados, como arquivos, imagens e backups.

7 - OpenTelemetry (OTel) é um projeto open-source de observabilidade que fornece ferramentas e padrões para
coletar métricas, logs e traces de aplicações distribuídas.

---

## 📦 Estrutura do Projeto

```
/
├── application/            # Aplicação 01
├── application-02/         # Aplicação 02
├── config/                 # Configuração dos serviços
├── minio-data/             # Backup dos logs
└── .gitignore          
└── docker-compose.yaml     # Arquivo de montagem dos containers
└── LICENSE                 # Documentação
└── README.md               # Documentação
```
---

## 🔧 Instalação e execução do projeto

Para colocar o projeto em funcionamento, é necessário seguir alguns procedimentos iniciais que garantem que
todas as ferramentas estejam corretamente configuradas e integradas. Esses passos vão preparar o ambiente para
que o monitoramento e a observabilidade das aplicações rodem de forma fluida e eficiente.

1 clonar o repositorio
2 docker compose up -d 
3 entrar em cada pasta das asplicacoes e rodar o comando yarn install e depois yarn run dev
4 export OTEL_EXPORTER_OTLP_ENDPOINT=http://127.0.0.1:4318

> 1. Clone do repositório:
>
> ```console
> $ git clone https://github.com/diego64/observabilidade-grafana
> ```
>
> 2. Entrar no projeto:
> ```console
> $ cd observabilidade-grafana
> ```
>
> 3. Criar os containers:
> ```console
> $ docker compose up -d
> ```
> 4. Expor a portar o OTEL:
> ```console
> $ OTEL_EXPORTER_OTLP_ENDPOINT=http://127.0.0.1:4318
> ```
> 5. Instalar e executar cada aplicação e iniciar os stprit para popular a base de dados:
> ```console
> $ yarn install
> $ yarn run start:dev
> $ node health-load.js
> $ node health-load-error.js
> ```
> 5. Acecssar o grafana
> ```console
> $ http://localhost:3000/
> ```
---