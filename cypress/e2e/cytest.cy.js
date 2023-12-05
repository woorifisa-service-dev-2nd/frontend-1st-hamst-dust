describe('template spec', () => {
    beforeEach(() => cy.visit('http://localhost:3000/'));
    it('메인 페이지가 출력된다.', () => {
      cy.visit('http://localhost:3000/');
    });

    it('클릭된 이미지의 src에 따라 다르게 동작하는 테스트', () => {
        
        for (let i = 1; i<=9;i++) {
        // 클릭된 이미지의 src 값을 가져오기
            cy.get('#num'+i).invoke('attr', 'src').then((src) => {

            // src 값에 따라 다르게 동작하는 조건문
            if (src.includes('hamst.png')) {
                // 첫 번째 이미지의 경우
                cy.get('#num'+i).click()
                .should('have.attr', 'src', 'dust.png'); // 변경된 이미지 속성 확인
            }
            })
        }
    })

    });