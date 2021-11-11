import { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import GitHubCorners from '@uiw/react-github-corners';
import Loader from '@uiw/react-loader';
import { routes } from '../../router';
import SideMenu from '../../components/SideMenu';
import styles from './App.module.less';

const Loading = (
  <div style={{ padding: 30 }}>
    <Loader tip="loading..." />
  </div>
);

export default function App() {
  return (
    <HashRouter>
      <div className={styles.warpper}>
        <GitHubCorners fixed zIndex={99} size={60} target="__blank" href="https://github.com/uiwjs/react-baidu-map" />
        <SideMenu />
        <div className={styles.content}>
          <Routes>
            {routes.map(({ component: Child, path }, idx) => {
              // @ts-ignore
              const Com = Child as any;
              return (
                <Route
                  key={idx}
                  path={path}
                  element={
                    <Suspense fallback={Loading}>
                      <Com />
                    </Suspense>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}
