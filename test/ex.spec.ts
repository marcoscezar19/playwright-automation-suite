import {test, expect} from "../fixtures/auth.fixture";
test('usuário já logado', async({loggedPage})=>{
    await expect(loggedPage).toHaveURL(/painel\.html/)
})