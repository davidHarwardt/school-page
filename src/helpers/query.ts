import * as qs from "qs";

const QUERY_URL = "http://localhost:3000/api";

async function query(table: string, query: any): Promise<any> {
    const queryString = qs.stringify({
        where: query,
    }, { addQueryPrefix: true });
   
    return await (await fetch(`${QUERY_URL}/${table}${queryString}`)).json();
}

export default query;