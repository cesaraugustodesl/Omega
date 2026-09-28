# Omega

Plataforma de presença digital para profissionais.

## Arquitetura

1 domínio, perfis individuais por slug, páginas programáticas por serviço/cidade, páginas por cidade, área do profissional e camada administrativa.

A unidade central é `/profissional/[slug]`. A próxima camada é conectar a base real, gerar slugs canônicos, sitemap segmentado, metadata dinâmica, Schema.org, busca e painel.