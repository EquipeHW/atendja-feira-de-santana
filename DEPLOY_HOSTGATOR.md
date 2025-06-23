# Guia de Deploy na HostGator

## Problema Resolvido ✅
Este guia resolve o erro 404 e o redirecionamento para home que ocorre quando você tenta acessar diretamente as rotas dinâmicas do Next.js na HostGator.

## ⚠️ IMPORTANTE: Solução Atualizada

O problema estava no arquivo `.htaccess` que estava redirecionando TODAS as rotas para `index.html`. Agora ele foi corrigido para:
1. **Primeiro** tentar servir o arquivo HTML específico (ex: `ginecologista-feira-de-santana.html`)
2. **Depois** redirecionar para `index.html` apenas se o arquivo específico não existir

## Passos para Deploy

### 1. Build do Projeto
```bash
npm run build
```
ou
```bash
pnpm build
```

### 2. Localizar os Arquivos de Build
Após o build, os arquivos estarão na pasta `out/` (devido à configuração `output: 'export'` no `next.config.mjs`).

### 3. Upload para HostGator
1. Acesse o cPanel da HostGator
2. Vá para "Gerenciador de Arquivos"
3. Navegue até a pasta `public_html` (ou a pasta raiz do seu domínio)
4. **DELETE todos os arquivos antigos** (faça backup primeiro!)
5. Faça upload de **TODOS** os arquivos da pasta `out/` para a raiz do seu site

### 4. Verificar o Arquivo .htaccess (CRUCIAL!)
Certifique-se de que o arquivo `.htaccess` foi enviado junto com os outros arquivos. Este arquivo é **CRUCIAL** para o funcionamento das rotas.

**Conteúdo esperado do .htaccess:**
```apache
RewriteEngine On

# Primeiro, tentar servir o arquivo HTML específico se existir
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/_next/
RewriteCond %{REQUEST_URI} !^/images/
RewriteCond %{REQUEST_URI} !^/fonts/
RewriteCond %{REQUEST_URI} !\.(css|js|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot)$
RewriteRule ^([^/]+)/?$ /$1.html [L]

# Se não encontrar o arquivo HTML específico, redirecionar para index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/_next/
RewriteCond %{REQUEST_URI} !^/images/
RewriteCond %{REQUEST_URI} !^/fonts/
RewriteCond %{REQUEST_URI} !\.(css|js|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot)$
RewriteRule ^(.*)$ /index.html [L]
```

### 5. Estrutura de Arquivos na HostGator
```
public_html/
├── .htaccess (IMPORTANTE!)
├── index.html
├── ginecologista-feira-de-santana.html
├── cardiologista-feira-de-santana.html
├── dermatologista-feira-de-santana.html
├── oftalmologista-feira-de-santana.html
├── ortopedista-feira-de-santana.html
├── ultrassom-feira-de-santana.html
├── _next/
├── images/
├── fonts/
└── [outros arquivos...]
```

## ✅ Teste das Rotas

Após o deploy, teste as seguintes URLs:
- ✅ `https://atendjafeiradesantana.com.br/` (home)
- ✅ `https://atendjafeiradesantana.com.br/ginecologista-feira-de-santana`
- ✅ `https://atendjafeiradesantana.com.br/cardiologista-feira-de-santana`
- ✅ `https://atendjafeiradesantana.com.br/dermatologista-feira-de-santana`
- ✅ `https://atendjafeiradesantana.com.br/oftalmologista-feira-de-santana`
- ✅ `https://atendjafeiradesantana.com.br/ortopedista-feira-de-santana`
- ✅ `https://atendjafeiradesantana.com.br/ultrassom-feira-de-santana`

## Solução de Problemas

### Erro 404 Persiste?
1. ✅ Verifique se o arquivo `.htaccess` está na raiz do site
2. ✅ Certifique-se de que o mod_rewrite está habilitado no servidor
3. ✅ Tente acessar via FTP e verificar se todos os arquivos foram enviados
4. ✅ **IMPORTANTE**: Delete todos os arquivos antigos antes de fazer upload dos novos

### Redirecionamento para Home?
1. ✅ Verifique se o `.htaccess` tem o conteúdo correto (mostrado acima)
2. ✅ Certifique-se de que os arquivos HTML específicos existem na raiz
3. ✅ Limpe o cache do navegador (Ctrl+F5)

### Links Internos Não Funcionam?
1. ✅ Verifique se os links estão usando caminhos relativos
2. ✅ Certifique-se de que não há barras duplas nos URLs

## Comandos Úteis

### Para Desenvolvimento:
```bash
npm run dev
```

### Para Build de Produção:
```bash
npm run build
```

### Para Testar Localmente (após build):
```bash
npx serve out
```

## Notas Importantes

- **NUNCA** delete o arquivo `.htaccess` da raiz do site
- **SEMPRE** faça backup antes de fazer alterações
- **DELETE** todos os arquivos antigos antes de fazer upload dos novos
- O Next.js com `output: 'export'` gera arquivos estáticos que funcionam em qualquer servidor web
- As rotas dinâmicas agora funcionam através de arquivos HTML específicos + roteamento do lado do cliente

## Suporte

Se ainda houver problemas após seguir este guia, verifique:
1. Logs de erro do servidor (cPanel > Logs de Erro)
2. Configurações do servidor Apache
3. Permissões de arquivos (geralmente 644 para arquivos e 755 para pastas)
4. Se o mod_rewrite está habilitado (normalmente já está na HostGator) 