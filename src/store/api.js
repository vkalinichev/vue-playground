import { FORCE_AUTH } from '../constants/actions'

export default api

async function api ( { commit, dispatch }, url, [ START, SUCCESS, FAILED ], options = {} ) {
    commit( START )
    const response = await fetch( url, {
        credentials: 'same-origin',
        ...options
    } )

    if ( response.status === 401 ) {
        return dispatch( FORCE_AUTH )
    }

    try {
        const json = await response.json()
        commit( SUCCESS, json )
    } catch ( error ) {
        console.warn( error )
        commit( FAILED, error )
    }
}
