import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/loginPage';

test.describe('Login Tests com Page Object Model', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    })

    test('Login Admin com sucesso via POM', async({ page }) => {
        await loginPage.login('admin@system.com','AdminPassword123');
        await expect(loginPage.statusMessage).toBeVisible();
        await expect(loginPage.statusMessage).toContainText(/Credenciais inválidas. Tentativa/i);
        await expect(page).toHaveURL(/painel\.html/);
    });
    test('testar visibilidade do botão de login', async ({ page }) => {
        await expect(loginPage.loginButton).toBeDisabled();
    });
})