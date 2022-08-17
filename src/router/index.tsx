import React from 'react'
import { Routes, useRoutes } from 'react-router'
import { Home } from '../pages';

export const Router = () => {
  const routes= useRoutes(
    [{
      path: '/',
      element: <Home />
    }]
  )
  return routes;
}
