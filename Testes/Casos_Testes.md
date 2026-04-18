# Casos de Teste

## CT01 - Login com dados corretos
**Entrada:**
- Email: admin@email.com
- Senha: 123456

**Resultado esperado:**
- Exibir mensagem: "Login realizado com sucesso!" em verde

---

## CT02 - Login com senha incorreta
**Entrada:**
- Email: admin@email.com
- Senha: 000000

**Resultado esperado:**
- Exibir mensagem: "E-mail ou senha inválidos." em vermelho

---

## CT03 - Login com campos vazios
**Entrada:**
- Email: vazio
- Senha: vazio

**Resultado esperado:**
- O navegador deve impedir o envio (campo obrigatório)

---

## CT04 - Cadastro com senha válida
**Entrada:**
- Senha com 6 ou mais caracteres

**Resultado esperado:**
- Exibir: "Usuário cadastrado com sucesso!"

---

## CT05 - Cadastro com senha curta
**Entrada:**
- Senha com menos de 6 caracteres

**Resultado esperado:**
- Exibir: "A senha deve ter no mínimo 6 caracteres."