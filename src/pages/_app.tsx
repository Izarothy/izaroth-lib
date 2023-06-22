import {type Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';
import {type AppType} from 'next/app';
import {api} from '~/utils/api';
import '~/styles/globals.css';
import Layout from '~/components/Layout';
import {Montserrat} from 'next/font/google';
import {Provider} from 'react-redux';
import {store} from '~/utils/store';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ['latin'],
});

const MyApp: AppType<{session: Session | null}> = ({
  Component,
  pageProps: {session, ...pageProps},
}) => {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <Provider store={store}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </Provider>
    </>
  );
};

export default api.withTRPC(MyApp);
