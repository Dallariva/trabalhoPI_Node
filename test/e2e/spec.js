describe('Protractor Demo App', function() {

  it('Deve retornar 4.200,00 quando se passar o valor de 50', function() {
        browser.driver.get('http://localhost:3000/tijolosComuns10cm');
        browser.driver.findElement(by.id('numero1')).sendKeys(50);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('res')).getText()).toEqual('O resultado é 4.200,00.');
    });
});