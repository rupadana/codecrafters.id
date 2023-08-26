import React from 'react';
import FooterSection from '../organism/footer-section';
import NavbarSection from '../organism/navbar-section';
import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import SettingModel from '@/src/models/setting-model';
import { settingsDataState } from '@/src/recoils/setting-atom';

interface MainTemplateProps {
  title?: string;
  children: React.ReactNode;
}

const MainTemplate = ({ title, children }: MainTemplateProps) => {
  const settings = useRecoilValue<SettingModel>(settingsDataState);

  return (
    <>
      <Head>
        <title>{title ?? `${settings.site_name ?? 'CodeCrafters'} - Crafting Innovation Through Code`}</title>
        <meta name='description' content={settings.site_description} />
      </Head>

      <NavbarSection />
      {children}
      <FooterSection />
    </>
  );
};

export default MainTemplate;
