import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
	'x-rapidapi-key': '5f427fdd72msh6af1e9b5740ab21p1cc7e5jsnc80f51769c7d',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// New syntax to use createApi:
export const cryptoApi = createApi({
	reducerPath: 'cryptoApi', // what is the reducer for? simply provide the name.
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		// give a name for this builder: getCryptos
		getCryptos: builder.query({
			query: () => createRequest('/coins'),
		}),
	}),
});

// Redux toolkit creates a react hook for exporting the query from above api, so the whole app can use it:
// the hook name is adding 'use' at front and 'Query' at the end for the endpoints name
export const {
	useGetCryptosQuery,
} = cryptoApi;