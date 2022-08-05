import {Grid} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import Column from '../../components/Column';
import Row from '../../components/Row';
import Card from '../../components/Card';
import CardContent from '../../components/CardContent';
import HomeImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const BackgroundImage = createGlobalStyle`
  body, html {
    background: url(${HomeImage}) no-repeat !important;
    background-size: cover !important; } `;

const HomeCardBlue = styled.div`
background: rgba(217, 238, 254, 0.75);
border-radius: 50px;
padding: 20px; 
color: #4b4453;
`;
const HomeCard = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  padding: 20px; 
  color: #4b4453;
`;
const HomeCardPurple = styled.div`
  background: rgba(214, 211, 242, 0.8);
  border-radius: 50px;
  padding: 20px; 
  color: #4b4453;
`;

const NodeLeaderboard = () => {
  return (
<Page>
  <BackgroundImage />
    <h2 style={{fontSize: '6vw', textAlign: 'center', marginBottom: '0%',}}>FROZEN WALRUS</h2> <br /> 
    <h2 style={{fontSize: '3vw', textAlign: 'center', marginBottom: '4%',}}>NODE LEADERBOARD</h2>


<Grid container spacing={3} direction="column" style={{ display: 'flex', alignItems: 'center'}} >

    <Grid  item xs={12} sm={8}>
      <HomeCardBlue>
        <CardContent>
        <h2 style={{ fontSize: '1.5vw', textAlign: 'center', marginBottom: '10%'}}> 
          Track the Node Leaderboard for Progress and Weekly Competition Updates! </h2>
        <h2 style={{ fontSize: '1.2vw', textAlign: 'center', marginBottom: '2%'}}>
          Each week, WSHARE rewards are given to the top creator of WLRS-USDC and WSHARE-USDC nodes. 
          WSHARE rewards are also given out randomly amongst all Node creators. 
        </h2>
        </CardContent>
      </HomeCardBlue>
    </Grid>
</Grid>

<Grid container spacing={3} direction="row" style={{ display: 'flex', justifyContent: 'center'}} >
  
    <Grid  item xs={12} sm={12}>
      <HomeCard>
          <CardContent>
          <h2 style={{ fontSize: '3vw', textAlign: 'center', marginBottom: '2%'}}>
              Weekly Winners! Week of July 24-31 <br /> </h2>
          <h2 style={{ fontSize: '1.5vw', textAlign: 'center', marginBottom: '2%'}}>
              These Frozen Walrus champions created at least one (1) WLRS-USDC or WSHARE-USDC node and 
              were randomly selected to receive one (1) WSHARE reward! 
          </h2> 
          </CardContent>
        
          <Grid container spacing={3} style={{ marginBottom: '5%'}} >
            <Grid direction="column" item xs={6} style={{ display: 'flex', alignItems: 'center' }}> 
              <HomeCardPurple style={{ width: '90%' }} >
                  <h2 style={{ fontSize: '1.5vw', textAlign: 'center'}}><u>WLRS-USDC</u></h2>
                  <h2 style={{ fontSize: '1.2vw', textAlign: 'center', }}>
                      cc9a8e1724<br />
                      043b72a8d5<br />
                      041e086f26<br />
                      c5575284da<br />
                      53120682b8<br />
                  </h2>
              </HomeCardPurple>
            </Grid>
            <Grid spacing={6} direction="column" item xs={6} style={{ display: 'flex', alignItems: 'center' }}> 
              <HomeCardBlue style={{ width: '90%'}}>
                <h2 style={{ fontSize: '1.5vw', textAlign: 'center'}}><u>WSHARE-USDC</u></h2>
                <h2 style={{ fontSize: '1.2vw', textAlign: 'center'}}>
                      750820c233<br />
                      33734003d8<br />
                      21cbf49580<br />
                      dfa032030d<br />
                      aa01c47a79<br />
                </h2> 
              </HomeCardBlue>
            </Grid>
        </Grid>
    
        <h2 style={{ fontSize: '1.2vw', textAlign: 'center', marginBottom: '2%'}}>  
          These two Frozen Walrus kings/queens created the most Nodes during this week's timespan and receive five (5) WSHARE as reward!</h2>
          
          <Grid container spacing={6} style={{ marginBottom: '5%'}} >
            
            <Grid direction="column" item xs={6} style={{ display: 'flex', alignItems: 'center' }}> 
              <HomeCardPurple style={{ width: '90%' }} >
                <h2 style={{ fontSize: '1.5vw', textAlign: 'center', marginTop:'10%'}}><u>WLRS-USDC</u></h2>
                <h2 style={{ fontSize: '1.2vw', textAlign: 'center', marginBottom: '15%' }}>
                e67E1ac524: 140
               
                </h2>
                </HomeCardPurple>
            </Grid>

            <Grid spacing={6} direction="column" item xs={6} style={{ display: 'flex', alignItems: 'center' }}> 
              <HomeCardBlue style={{ width: '90%'}}>
                <h2 style={{ fontSize: '1.5vw', textAlign: 'center', marginTop:'10%'}}><u>WSHARE-USDC</u></h2>
                <h2 style={{ fontSize: '1.2vw', textAlign: 'center', marginBottom: '15%' }}>
                e88EeB6141: 435 
                </h2> 
              </HomeCardBlue>
            </Grid>
        </Grid>

        </HomeCard>
    </Grid>
  <Grid  item xs={12} sm={12}>
    <HomeCard>
      <CardContent>
      <h2 style={{ fontSize: '3.0vw', textAlign: 'center', marginBottom: '2%'}}>
       All-Time Leaderboard<br /> </h2>
       <h2 style={{ fontSize: '1.5vw', textAlign: 'center', marginBottom: '2%'}}>
        God Tier Node Creators 
        </h2>
      
      </CardContent>
   
      <Grid container spacing={3} >   
        <Grid direction="column" item xs={6} style={{ display: 'flex', alignItems: 'center' }}> 
        <HomeCardPurple style={{  width: '90%'}}>
          <h2 style={{ fontSize: '1.5vw', textAlign: 'center'}}><u>WLRS-USDC</u></h2>
          <h2 style={{ fontSize: '1.2vw', textAlign: 'center', justifyContent: 'space-between' }}>
           
              C2D1057909: 959 <br />
              e67E1ac524:	790 <br />
              40bbE8e648:	400 <br />
              40a193bDE8:	338 <br />
              a965e6F388:	266 <br />
              606Be1A08c:	254 <br />
              657Fe56FBe:	205 <br />
              73D80768fD:	200 <br />
              E8dE8676E1:	150 <br />
              F4D7F6F5e6:	136 <br />
            
            
            
          </h2>
          </HomeCardPurple>

        </Grid>
        <Grid spacing={6} direction="column" item xs={6} style={{ display: 'flex', alignItems: 'center' }}> 
        <HomeCardBlue style={{ width: '90%'}}>
        <h2 style={{ fontSize: '1.5vw', textAlign: 'center'}}><u>WSHARE-USDC</u></h2>
        <h2 style={{ fontSize: '1.2vw', textAlign: 'center', justifyContent: 'space-between' }}>
            e88EeB6141:	435 <br />
            73D80768fD:	198 <br />
            6597f3d3d7:	115 <br />
            dFA032030D:	109 <br />
            eE0F450690:	094 <br />
            600E69E34F:	091 <br />
            267Fa43122:	087 <br />
            1E918C58A8:	082 <br />
            F6dAE48e0c:	080 <br />
            F4D7F6F5e6:	076 <br />
         </h2> 
         </HomeCardBlue>
        </Grid>
      </Grid>
      </HomeCard>
  </Grid>
</Grid>    
</Page>
  );
};

export default NodeLeaderboard;