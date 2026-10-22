import {test, expect} from '../fixtures/auth.fixture'

test.describe('acesso area protegida - painel', ()=>{
    test('Deve acessar painel com usuário já logado', async ({ loggedPage})=>{
        // Validar se está na pagina de painel
        await expect(loggedPage).toHaveURL(/painel\.html/);
        // verificar existência de titulo h1 
        const h1Painel = loggedPage.locator('#painelTitle');
        await expect(h1Painel).toBeVisible();

        // verificar presença do botão loggout
        const btnSair = loggedPage.locator('#logoutButton');
        await expect(btnSair).toBeVisible();
    });
});