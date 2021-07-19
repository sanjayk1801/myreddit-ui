import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from '../theme'
import { createClient, Provider, useMutation } from 'urql';
import NavBar from '../components/NavBar';
import { Cache, QueryInput } from "@urql/exchange-graphcache";
import { dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import {
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  RegisterMutation,
  VoteMutationVariables,
  DeletePostMutationVariables,
} from "../generated/graphql";


export function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}


const client = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: "include"
  },
   exchanges: [
     dedupExchange, 
     cacheExchange({
       updates: {
         Mutation: {
           login: (_result, args, cache, info) => {
              betterUpdateQuery<LoginMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.login.errors) {
                    return query;
                  } else {
                    return {
                      me: result.login.user,
                    };
                  }
                }
              );
            },
            register: (_result, args, cache, info) => {
              betterUpdateQuery<RegisterMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.register.errors) {
                    return query;
                  } else {
                    return {
                      me: result.register.user,
                    };
                  }
                }
              );
            }
       }
       }
     }), 
     fetchExchange],
});


function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      > 
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
    </Provider>
    
  )
}

export default MyApp
