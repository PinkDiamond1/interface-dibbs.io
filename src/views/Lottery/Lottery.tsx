import React, { useCallback, useMemo } from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import Column from '../../components/Column';
import Row from '../../components/Row';
import { Switch, useRouteMatch } from 'react-router-dom';
import { useWallet } from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import ExchangeCard from './components/ExchangeCard';
import ExchangeCardNRWL from './components/ExchangeCardNRWL'; 
import useNrwlStats from '../../hooks/useNrwlStats';
import useTombStats from '../../hooks/useTombStats';
import styled from 'styled-components';
import useRaffleStats from '../../hooks/useRaffleBalance';
import useNRWLRaffleStats from '../../hooks/useRaffleBalanceNRWL';
import useGrapeFinance from '../../hooks/useTombFinance';
import { useTransactionAdder } from '../../state/transactions/hooks';
import HomeImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import { Card, Grid, Box, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LaunchCountdown from '../../components/LaunchCountdown';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;
const BondCard = styled.div`
  background: rgba(255, 255, 255, 0.55);
  border-radius: 50px;
  padding: 20px; 
  color: #4b4453;
`;
const LotteryText = styled.h2`
  text-align: center; 
  margin-bottom: 2%; 
  font-size: 2rem; 
`; 
const LotterySubText = styled.h2`
  text-align: center; 
  font-size: 1.2rem; 
`; 
const LotterySubText1 = styled.h2`
  text-align: center; 
  font-size: 1.0rem; 
`; 
const LotterySubText2 = styled.h2`
  text-align: justify; 
  font-size: 1.2rem; 
`; 

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    paddingTop: '15px',
    paddingBottom: '15px',
    width: '100%',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
    height: '1.3rem',
    fontFamily: 'superstar',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  link: {
    width: '24px',
    height: '24px',
    display: 'inline',
    marginLeft: '20px',
  },

  img: {
    width: '24px',
    height: '24px',
  },
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
  },
}));

const Lottery: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width:1000px)');
  const startDate = new Date('2022-8-2 21:00:00Z');
  const endDate = new Date('2022-8-8 21:00:00Z');
  const raffleAddress = '0x4b8d4EAe1Bff52113d7DA8a7103e6fF9f2611A86';
  const nrwlRaffleAddress = '0x4b8d4EAe1Bff52113d7DA8a7103e6fF9f2611A86';
  const { account } = useWallet();
  const grapeFinance = useGrapeFinance();
  const addTransaction = useTransactionAdder();
  const raffleStats = useRaffleStats(account, raffleAddress);
  const nrwlRaffleStats= useNRWLRaffleStats(account, nrwlRaffleAddress);
  const nrwlStats = useNrwlStats();
  const tombStats = useTombStats();
  const tombPriceInDollars = useMemo(() => (tombStats ? Number(tombStats.priceInDollars).toFixed(2) : null), [tombStats]);
  const nrwlPriceInDollars = useMemo(() => (nrwlStats ? Number(nrwlStats.priceInDollars).toFixed(2) : null), [nrwlStats]);
  const nrwlPriceInFTM = useMemo(() => (nrwlStats ? Number(nrwlStats.tokenInFtm).toFixed(4) : null), [nrwlStats]);
  const startTime = Number(startDate);
  const endTime = Number(endDate);
  const grapePrice = useMemo(() => (raffleStats ? Number(raffleStats.tokenInFtm).toFixed(2) : null), [raffleStats]);
  const nrwlPrice = useMemo(() => (nrwlRaffleStats ? Number(nrwlRaffleStats.tokenInFtm).toFixed(2) : null), [nrwlRaffleStats]);
  const raffleBals = useMemo(() => (raffleStats ? Number(raffleStats.totalSupply).toFixed(0) : null), [raffleStats]);
  const nrwlRaffleBals = useMemo(() => (nrwlRaffleStats ? Number(nrwlRaffleStats.totalSupply).toFixed(0) : null), [nrwlRaffleStats]);
  const userBals = useMemo(() => (raffleStats ? Number(raffleStats.priceInDollars).toFixed(0) : null), [raffleStats]);
  const nrwluserBals = useMemo(() => (nrwlRaffleStats ? Number(nrwlRaffleStats.priceInDollars).toFixed(0) : null), [nrwlRaffleStats]);
  const handleBuyBonds = useCallback(
    async (amount: string) => {
      const tx = await grapeFinance.sendTomb(amount, raffleAddress);
      addTransaction(tx, {
        summary: `SEND ${Number(amount).toFixed(2)} WLRS TO THE LOTTERY ${amount} `,
      });
    },
    [grapeFinance, addTransaction],
  );
  const handleBuyBondsNRWL = useCallback(
    async (amount: string) => {
      const tx = await grapeFinance.sendNRWL(amount, raffleAddress);
      addTransaction(tx, {
        summary: `SEND ${Number(amount).toFixed(2)} NRWL TO THE LOTTERY ${amount} `,
      });
    },
    [grapeFinance, addTransaction],
  );


  return (
    <Switch>
      <Page>
        <BackgroundImage />
        {!!account ? (
          <>
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '1%', 
            ...(isDesktop ? { fontSize: '3rem' } : { fontSize: '2rem'})}}>
            LOTTERY 
            </h2>
            
          </div>

<Grid container justify="center" spacing={3}  >
<Grid alignItems='center' item xs={12} sm={9} style={{ width: '100%'}}>
    <BondCard>
    <h2 style={{ textAlign: 'center', marginBottom: '8%', marginTop: '2%', margin: '1%', 
            ...(isDesktop ? { fontSize: '2.rem' } : { fontSize: '1.3rem'}) }}>
            Win USDC by depositing Frozen Walrus tokens!
    </h2>
    <h2 style={{ textAlign: 'left', marginBottom: '5%', marginTop: '5%', 
            ...(isDesktop ? { fontSize: '1.3rem' } : { fontSize: '1.1rem'}) }}>
            Deposit your WLRS tokens below to gain eligibility to the Frozen Walrus Lottery. 
            5 WLRS tokens gains 1 entry to the Lottery.<br /> 
             
    </h2>
    {/*   <div>             {Date.now() > endTime ? (
               <h2 style={{ fontSize: '3rem', textAlign: 'center' }}>Lottery Closed</h2>
              ) : (
                <h2 style={{ fontSize: '3rem', textAlign: 'center' }}>Lottery Open</h2>
              )}  
              {Date.now() < startTime ? (
      <LaunchCountdown
        deadline={startDate}
        description={'Lottery Starts In'}
        descriptionLink={''}
      ></LaunchCountdown>
    ) : (
      <h2>
      <LaunchCountdown
        deadline={endDate}
        description={''}
        descriptionLink={''}
      ></LaunchCountdown> </h2>
    )}
    </div> */}
<h2 style={{ textAlign: 'left', marginBottom: '5%', marginTop: '5%', 
            ...(isDesktop ? { fontSize: '1.5rem' } : { fontSize: '1.2rem'}) }}>
            Current WLRS price: ${tombPriceInDollars}
</h2>
<h2 style={{ textAlign: 'left',  marginBottom: '5%',
            ...(isDesktop ? { fontSize: '1.5rem' } : { fontSize: '1.2rem'}) }}>
            Total WLRS entered into lottery: {raffleBals}
</h2>
<h2 style={{ textAlign: 'left',  marginBottom: '5%',
            ...(isDesktop ? { fontSize: '1.5rem' } : { fontSize: '1.2rem'}) }}>
            Your WLRS tokens entered into lottery: {userBals}
</h2>

     <ExchangeCard
            action="Enter Lottery"
            fromToken={grapeFinance.TOMB}
            fromTokenName="WLRS"
            toToken={grapeFinance.TBOND}
            toTokenName="TBOND"
            priceDesc="5 WLRS = 1 ENTRY"
            disabled
            onExchange={handleBuyBonds}>
            </ExchangeCard>

            <h2 style={{ textAlign: 'left', marginBottom: '5%', marginTop: '5%', 
            ...(isDesktop ? { fontSize: '1.3rem' } : { fontSize: '1.1rem'}) }}>
    <i>The first inaugural Frozen Walrus has now closed. Winners will be announced here no later than August 8, 2022 at 2100 UTC. 
            First prize wins 2500 USDC. Second prize wins 500 USDC. Third prize wins 250 USDC.</i> </h2>
    <LotterySubText style={{ textAlign: 'center',  marginTop: '5%', width:'95%', 
            ...(isDesktop ? { fontSize: '1.2rem' } : { fontSize: '1.0rem'}) }}>Your account: <br />
    
    {account}
    </LotterySubText>
    
    </BondCard>
  </Grid>  
  

{/*
  <Grid direction="row" container spacing={3} item xs={12} sm={6}  style={{ height: '100%', justifyContent: 'space-between', alignItems: 'center', marginRight:'1%' }}>
      
  </Grid>*/}
  {/*
  <Grid container spacing={3} direction="row" item  xs={12} sm={6}  md={3}  style={{ height: '100%', justifyContent: 'space-between', alignItems: 'center', }}>
      <StyledCardWrapper>
        <ExchangeCardNRWL
          action="Enter Lottery"
          fromToken={grapeFinance.NRWL}
          fromTokenName="NRWL"
          toToken={grapeFinance.TBOND}
          toTokenName="TBOND"
          priceDesc="5 NRWL = 1 ENTRY"
            
          onExchange={handleBuyBondsNRWL}>
          </ExchangeCardNRWL>
      </StyledCardWrapper>
  </Grid>
  */}
  
</Grid>
          </>
        ) : (
          <UnlockWallet />
        )}
      </Page>
    </Switch>
  );
};

const StyledBond = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default Lottery;
