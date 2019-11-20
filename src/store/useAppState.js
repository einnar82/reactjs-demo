import { useState, useMemo } from 'react'
import httpClient from '../utils/network'

/**
 * Our custom React hook to manage state
 */

const useAppState = () => {
  const initialState = { count: 0, posts: [] }

  // Manage the state using React.useState()
  const [state, setState] = useState(initialState)

  // Build our actions. We'll use useMemo() as an optimization,
  // so this will only ever be called once.
  const actions = useMemo(() => getActions(setState), [setState])

  return { state, actions }
}

// Define your actions as functions that call setState().
// It's a bit like Redux's dispatch(), but as individual
// functions.
const getActions = setState => ({
  increment: () => {
    setState(state => ({ ...state, count: state.count + 1 }))
  },
  decrement: () => {
    setState(state => ({ ...state, count: state.count - 1 }))
  },
  fetchPosts: () => {
    httpClient({
      url: '/posts',
      method: 'get',
    }).then(response => {
      setState(state => ({ ...state, posts: [...response.data, ...state.posts] }))
    })
  }
})

export default useAppState;