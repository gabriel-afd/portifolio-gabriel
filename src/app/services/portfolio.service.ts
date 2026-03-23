import { Injectable } from '@angular/core';
import {
  Experience, Project, SkillGroup,
  Stat, Education, ContactItem
} from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getExperiences(): Experience[] {
    return [
      {
        role: 'Estagiário Full-Stack Developer',
        company: 'CWI Software',
        location: 'São Leopoldo/RS · Remoto',
        period: 'Jun 2025 – Fev 2026',
        description: `• Desenvolvimento e manutenção de APIs REST com Java e Spring Boot (Spring MVC e Spring Data JPA), aplicando princípios SOLID e boas práticas de Clean Code, contribuindo para maior organização e manutenção da aplicação.
        • Modelagem de entidades e persistência de dados com JPA/Hibernate em PostgreSQL, aplicando boas práticas de mapeamento relacional.
        • Desenvolvimento de componentes e telas em Angular, utilizando formulários reativos, rotas e consumo de APIs REST.
        • Integração completa entre frontend Angular e backend Spring.
        • Escrita e otimização de consultas SQL em Oracle e PostgreSQL, incluindo PL/SQL, para melhoria de performance e eficiência nas operações com banco de dados.
        • Atuação na correção de bugs e evolução de funcionalidades, contribuindo para maior estabilidade e melhoria contínua da aplicação.
        • Colaboração em equipe utilizando Git (branches, pull requests) e Scrum, contribuindo para organização e entrega contínua das funcionalidades.`,

        tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Oracle', 'PL/SQL', 'JPA/Hibernate', 'Scrum', 'REST APIs'],
      },
      {
        role: 'Desenvolvedor de Software Jr',
        company: 'Code Arts',
        location: 'Rio de Janeiro/RJ · Remoto',
        period: 'Mai 2025 – Dez 2025',
        description:
          `• Desenvolvimento de backend com ASP.NET Core e APIs REST escaláveis.\n` +
          `• Implementação de autenticação, autorização e tratamento de erros.\n` +
          `• Construção de portal web para clínicas odontológicas com gestão de pacientes, agendamentos e prontuários.\n` +
          `• Integração de frontend Angular com serviços backend e otimização de consumo de dados.\n` +
          `• Modelagem e otimização de banco de dados relacional em MSSQL Server com práticas de normalização.`,

        tags: ['.NET', 'ASP.NET Core', 'Angular', 'MSSQL Server', 'REST APIs','Scrum'],
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        name: 'CWInveste',
        description: `• Desenvolvimento de uma plataforma completa para automação de investimentos em CDB, integrando inteligência artificial para democratizar o acesso a investimentos de renda fixa e eliminar processos manuais no setor financeiro.\n` +
          `•Transformação de processos manuais de simulação e investimento em uma experiência automatizada, eliminando a complexidade dos cálculos de rentabilidade e proporcionando visualização em tempo real da evolução dos investimentos.\n` +
          `• Implementação de fluxo completo de autenticação (JWT), autorização e validação de regras de negócio financeiras.\n` +
          `• Persistência de dados com PostgreSQL utilizando JPA/Hibernate.\n` +
          `• Desenvolvimento de telas em Angular com formulários reativos e integração com APIs REST.\n` +
          `• Integração com IA para processamento de linguagem natural e geração de recomendações de investimento.\n` +
          `• Implementação de testes unitários utilizando JUnit e Mockito.\n` +
          `• Estruturação do backend aplicando princípios SOLID e Clean Architecture.`,
        icon: 'savings',
        image: 'assets/CWIInvest.jpg',
        observation: 'código sob propriedade intelectual da CWI Software',
        tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'JUnit'],
        link: '/assets/GRUPO_16.pdf',
      },
      {
        name: 'Pipeline de Engenharia de Dados - Sistema Financeiro Brasileiro',
        description: `• Desenvolvimento de um pipeline completo de dados seguindo a arquitetura Medallion (Bronze-Silver-Gold) para análise do ecossistema financeiro brasileiro, processando dados de instituições regulatórias como Banco Central.\n` +
        `• Geração de insights sobre transações PIX, crédito, inadimplência e inclusão financeira, correlacionando indicadores socioeconômicos para apoiar decisões estratégicas de fintechs, varejistas e instituições financeiras.` +
          `• Processamento e transformação de dados com PySpark e Azure Databricks.\n` +
          `• Implementação de validações de dados com Great Expectations.\n` +
          `• Implementação de testes com PyTest.`,
        icon: 'schema',
        image: 'assets/radar.png',
        observation: 'código sob propriedade intelectual da CWI Software',
        tags: ['PySpark', 'Azure Databricks', 'Python', 'PyTest', 'Azure'],
        link: '/assets/RADAR_FINANCEIRO.pdf',
      },
      {
        name: 'ERP - Portal Odontológico',
        description: `• Sistema web completo para clínicas odontológicas, cobrindo gestão administrativa, financeira e operacional.\n` +
          `• Agendamento com calendário interativo, confirmação de consultas e controle de salas de atendimento.\n` +
          `• Gestão de pacientes com cadastro, histórico médico e tipos de paciente.\n` +
          `• Módulo financeiro com contas a pagar/receber, centros de custo e relatórios.\n` +
          `• Suporte a multi-tenancy para operação de múltiplas clínicas independentes.\n` +
          `• Recursos avançados: notificações em tempo real (SignalR), assinaturas digitais, upload de arquivos e PWA offline.\n` +
          `• Front-end em Angular 18 + TypeScript, com componentes Syncfusion, Ng-Zorro e geração de PDFs/planilhas.\n` +
          `• Back-end em .NET 8 + ABP Framework, com Entity Framework Core, Identity e Swagger.`,
        icon: 'medical_services',
        image: '/assets/dental.png',
        observation: 'código sob propriedade intelectual da CodeArts',
        tags: ['ASP.NET Core', 'Angular', 'MSSQL Server'],
        link: '/assets/dental.pdf',
      },
    ];
  }

  getSkillGroups(): SkillGroup[] {
    return [
      {
        group: 'Backend',
        skills: [
          { name: 'Java', icon: '/assets/icons/java-logo-svgrepo-com.svg' },
          { name: 'Spring Boot', icon: '/assets/icons/spring-boot-icon.svg' },
          { name: '.NET / C#', icon: '/assets/icons/dotnet-official.svg' },
          { name: 'ASP.NET Core', icon: '/assets/icons/NET core.svg' },
        ],
      },
      {
        group: 'Frontend',
        skills: [
          { name: 'Angular', icon: '/assets/icons/angular-svgrepo-com.svg' },
          { name: 'TypeScript', icon: '/assets/icons/typescript-official-svgrepo-com.svg' },
          { name: 'JavaScript', icon: '/assets/icons/javascript-svgrepo-com.svg' },
          { name: 'HTML / CSS', icon: '/assets/icons/html-5-svgrepo-com.svg' },
        ],
      },
      {
        group: 'Banco de Dados',
        skills: [
          { name: 'PostgreSQL', icon: '/assets/icons/postgresql-svgrepo-com.svg' },
          { name: 'MySQL', icon: '/assets/icons/mysql-svgrepo-com.svg' },
          { name: 'MSSQL Server', icon: '/assets/icons/microsoft-sql-server-logo-svgrepo-com.svg' },
          { name: 'Oracle / PL-SQL', icon: '/assets/icons/oracle-svgrepo-com.svg' },
        ],
      },
      {
        group: 'Cloud & Dados',
        skills: [
          { name: 'Azure', icon: '/assets/icons/azure-svgrepo-com.svg' },
          { name: 'PySpark', icon: '/assets/icons/apache_spark-ar21.svg' },
          { name: 'Python', icon: '/assets/icons/python-svgrepo-com.svg' }
        ],
      },
      {
        group: 'Ferramentas',
        skills: [
          { name: 'Git / GitFlow', icon: '/assets/icons/git-svgrepo-com.svg' },
          { name: 'Scrum', icon: '/assets/icons/scrum-svgrepo-com.svg' },
          { name: 'RabbitMQ', icon: '/assets/icons/rabbitmq-svgrepo-com.svg' }
        ],
      },
    ];
  }

  getStats(): Stat[] {
    return [
      { value: '2+', label: 'anos de experiência' },
      { value: '3+', label: 'projetos em produção' },
      { value: '7+', label: 'anos em Engenharia' },
      { value: '2', label: 'graduações cursadas' },
    ];
  }

  getEducation(): Education[] {
    return [
      {
        period: '2025 – 2027',
        course: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Unifacisa Centro Universitário',
        status: 'Em andamento',
      },
      {
        period: '2018 – 2025',
        course: 'Bacharelado em Engenharia Mecânica',
        institution: 'Universidade Federal de Campina Grande (UFCG)',
        status: 'Concluído',
      },
    ];
  }

  getContacts(): ContactItem[] {
    return [
      {
        icon: '/assets/icons/whatsapp-svgrepo-com.svg',
        label: 'whatsapp',
        value: '+55 (83) 99670-4167',
        href: 'https://api.whatsapp.com/send?phone=5583996704167',
      },
      {
        icon: '/assets/icons/gmail-svgrepo-com.svg',
        label: 'email',
        value: 'gmedeiros144@gmail.com',
        href: 'mailto:gmedeiros144@gmail.com',
      },
      {
        icon: '/assets/icons/linkedin-svgrepo-com.svg',
        label: 'linkedin',
        value: 'gabriel-medeiros-de-mendonça',
        href: 'https://linkedin.com/in/gabriel-medeiros-de-mendonça-8a82b7251',
      },
      {
        icon: '/assets/icons/github-142-svgrepo-com.svg',
        label: 'github',
        value: 'github.com/gabriel-afd',
        href: 'https://github.com/gabriel-afd',
      },
    ];
  }
}
