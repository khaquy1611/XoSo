import React, { lazy, Suspense , useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
import { Skeleton } from 'antd';

const HomePage = lazy(() => import('../../pages/HomePage'));
const NortPage = lazy(() => import('../../pages/NortPage'));
const SoutPage = lazy(() => import('../../pages/SoutPage'));
const MiddlePage = lazy(() => import('../../pages/MiddlePage'));
const LotteryPage = lazy(() => import('../../pages/Lottery'));
const NotFoundPage = lazy(() => import('../../pages/NotFound'));
const MoneyTranfersPage = lazy(() => import('../../pages/MoneyTranfers'));
const UpCardsPage = lazy(() => import('../../pages/UpCards'));
const HistoryPage = lazy(() => import('../../pages/HistoryPage'));
const SignInPage = lazy(() => import('../../pages/SignIn'));
const SignUpPage = lazy(() => import('../../pages/SignUp'));
const ResetPassWord = lazy(() => import('../../pages/ResetPassWord'));
const WithDrawPage = lazy(() => import('../../pages/WithDraw'));
const RouteApp = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active/>}>
        <Routes>
          <Route exact path="/"  element={<HomePage />}/>
          <Route path="/nort"  element={<NortPage />}/>
          <Route path="/south"  element={<SoutPage />}/>
          <Route path="/middle"  element={<MiddlePage />}/>
          <Route path="/lottery"  element={<LotteryPage />}/>
          <Route path="/money-tranfers"  element={<MoneyTranfersPage />}/>
          <Route path="/up-cards"  element={<UpCardsPage />}/>
          <Route path="/history"  element={<HistoryPage />}/>
          <Route path="/sign-in"  element={<SignInPage />}/>
          <Route path="/sign-up"  element={<SignUpPage />}/>
          <Route path="/reset-password"  element={<ResetPassWord />}/>
          <Route path="/reset-password"  element={<ResetPassWord />}/>
          <Route path="/with-draw"  element={<WithDrawPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </Suspense>
    </Router>
  )

}

export default React.memo(RouteApp);