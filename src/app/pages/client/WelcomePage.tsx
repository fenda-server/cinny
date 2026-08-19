import React from 'react';
import { Box, config } from 'folds';
import { Page, PageHero, PageHeroSection } from '../../components/page';
import VarandaSVG from '../../../../public/res/svg/varanda-icon.svg';

export function WelcomePage() {
  return (
    <Page>
      <Box
        grow="Yes"
        style={{ padding: config.space.S400, paddingBottom: config.space.S700 }}
        alignItems="Center"
        justifyContent="Center"
      >
        <PageHeroSection>
          <PageHero
            icon={<img width="70" height="70" src={VarandaSVG} alt="Varanda Logo" />}
            title="Varanda"
            subTitle={<span>Versão v4.12.6</span>}
          />
        </PageHeroSection>
      </Box>
    </Page>
  );
}
