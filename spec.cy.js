describe('empty spec', () => {
  

  it('GET-list user',()=>{
    cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
        expect(response.status).equal(200)
        expect(response.body.data[0].first_name).equal('Michael')
        expect(response.body).to.not.be.null
        expect(response.body.data).to.have.length(6)
    })
  })

  it('GET-list a single user',()=>{
    cy.request('GET','https://reqres.in/api/users/2').then((response)=>{
        expect(response.status).equal(200)
       
        expect(response.body).to.not.be.null
        //expect(response.body.data).to.have.length(6)
    })
  })

  it('GET-List resources',()=>{
    cy.request('GET','https://reqres.in/api/unknown').then((response)=>{
       expect(response.status).equal(200)
       expect(response.body).to.not.be.null
        //expect(response.body.data).to.have.length(6)
    })
  })

  it('GET-List single resources',()=>{
    cy.request('GET','https://reqres.in/api/unknown/2').then((response)=>{
       expect(response.status).equal(200)
       expect(response.body).to.not.be.null
       
    })
  })

  it('POST-Create user',()=>{
    var user = {
        "name": "morpheus1",
        "job": "leader"
    }

      cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
        expect(response.status).equal(201)
      //expect(response.body.name).equal(user.name)
      //expect(response.body.job).equal(user.job)

      })
      //cy.request('POST','/users',user).its('body').should('include',{name:'morpheus1'})
  })

  it('PUT - Ùpdate user',()=>{
    var user1 = {
        "name": "morpheus",
        "job": "zion resident"
    }

    cy.request('PUT','https://reqres.in/api/users/2',user1  ).then((response)=>{
        expect(response.status).equal(200)
      //  expect(response.body.name).equal(user1.name)
        //expect(response.body.job).equal(user1.job)
    })
    })

  //   it('Delete user',()=>{
  //     var user1 = {
  //         "name": "Janet",
          
  //     }

  //     cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
  //         expect(response.status).equal(204)

  //     })
  // })
})
