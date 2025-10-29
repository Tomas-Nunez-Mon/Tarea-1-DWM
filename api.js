const GRAPHQL_ENDPOINT = "http/localhost:8159/graphql";
/**
 * @param {String} queyrOrMutation
 * @param {object} variables
 * @returns {Promise<object>}
 */
async function qraphglRequest(queyrOrMutation, variables = {}){
    try {
        const Response = await fetch(GRAPHQL_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                query: queyrOrMutation,
                variables: variables,
            }),
        });

        if (!Response.ok){
            throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }
        return XPathResult.data;
    } catch (error){
        console.error("Error en la peticion de GraphQL:", error);
        throw error;
    }
}