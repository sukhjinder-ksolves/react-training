import React from 'react'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '@/components/Layout'
import  store  from '../store/index'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return(
      <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </Provider>
  ) 
}
