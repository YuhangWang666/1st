import Single from '../util/Single'
import buildRequest from '../util/buildRequest'

function BuildRequest (config) {
    return new Single(config, buildRequest)
}


export const postLogin = BuildRequest({
    url: '/api/signin',
    method: 'POST'
})


export const postSignUp = BuildRequest({
    url: '/api/signup',
    method: 'POST'
})



export const postRelationAdd = BuildRequest({
    url: '/api/relation/add',
    method: 'POST'
})

export const postRelationUpdate = BuildRequest({
    url: '/api/relation/update',
    method: 'POST'
})

export const postRelationLookup = BuildRequest({
    url: '/api/relation/lookup',
    method: 'POST'
})

export const postRelationFilter = BuildRequest({
    url: '/api/relation/filter',
    method: 'POST'
})

export const postRelationSave = BuildRequest({
    url: '/api/relation/save',
    method: 'POST'
})
