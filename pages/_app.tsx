import '../styles/globals.css';
import '../styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-activity/dist/library.css';
import Snowfall from 'react-snowfall';
import {snowfallConfig} from '../config/data';
import moment from 'moment';
import 'moment/locale/id';

moment.locale('id');
React.useLayoutEffect = React.useEffect;

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
  const {place} = router.query;

  const imgUrl = 'https://rikafariz-wedding.vercel.app/img/hero-is.png';

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Invitation</title>

        {/* Open Graph */}
        <meta
          property="og:url"
          content={'https://ysas-invitation.vercel.app/'}
          key="ogurl"
        />
        <meta property="og:image" content={imgUrl} key="ogimage" />
        <meta
          property="og:site_name"
          content={'Undangan Musyawarah Besar'}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={'Yayasan Sanusiah Al-mansyuriah Sumedang'}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={'Judul "Menuju Lentera Perdaban Dunia”'}
          key="ogdesc"
        />
      </Head>
      <Snowfall
        color={snowfallConfig.color}
        snowflakeCount={snowfallConfig.snowflakeCount}
        speed={snowfallConfig.speed}
        wind={snowfallConfig.wind}
        radius={snowfallConfig.radius}
        style={snowfallConfig.style}
      />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
