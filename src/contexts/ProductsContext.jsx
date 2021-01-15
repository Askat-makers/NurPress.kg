import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { NEWS_API } from '../helpers/Const';

export const productsContext = React.createContext()

const INIT_STATE = {
  news: [],
  someNews: [],
  newsDetails: null,
  categories: []
}

const reducer = (state=INIT_STATE, action) => {
  switch(action.type){
    case "GET_NEWS":
      return {...state, news: action.payload}
    case "GET_SOME_NEWS":
      return {...state, someNews: action.payload}
    case "GET_DETAILS_OF_NEWS":
      return {...state, newsDetails: action.payload}
    case "GET_CATEGORIES":
      return {...state, categories: action.payload}
    default: return state
  }
}

const ProductsContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  //get News

  async function getNews(){
    const {data} = await axios(`${NEWS_API}?_limit=5`)
    dispatch({
      type: "GET_NEWS",
      payload: data
    })
  }

  async function getSomeNews(){
    const {data} = await axios(`${NEWS_API}?_limit=3`)
    dispatch({
      type: "GET_SOME_NEWS",
      payload: data
    })
  }

  async function getDetailsOfNews(id){
    const {data} = await axios(`${NEWS_API}/${id}`)
    dispatch({
      type: "GET_DETAILS_OF_NEWS",
      payload: data
    })
  }
  // getNews()

  // -______________________________________________

  //get dinamyc categories
  const getCategories = async () => {
    const {data} = await axios('https://aqueous-plateau-10138.herokuapp.com/category/')
    dispatch({
      type: "GET_CATEGORIES",
      payload: data
    })
  }

  return (
    <productsContext.Provider value={{
      news: state.news,
      someNews: state.someNews,
      newsDetails: state.newsDetails,
      categories: state.categories,
      getCategories,
      getNews,
      getSomeNews,
      getDetailsOfNews
    }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;