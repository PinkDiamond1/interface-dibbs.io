// import { ChainId } from '@pancakeswap-libs/sdk';
import { ChainId } from '@traderjoe-xyz/sdk';
import { Configuration } from './tomb-finance/config';
import { BankInfo } from './tomb-finance';

const configurations: { [env: string]: Configuration } = {
  production: {
    chainId: ChainId.AVALANCHE,
    networkName: 'Avalanche C Chain',
    ftmscanUrl: 'https://snowtrace.io/',
    defaultProvider: 'https://api.avax.network/ext/bc/C/rpc',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WAVAX: ['0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18],
      WLRS: ['0x395908aeb53d33A9B8ac35e148E9805D34A555D3', 18],
      WSHARE: ['0xe6d1aFea0B76C8f51024683DD27FA446dDAF34B6', 18],
      WBOND: ['0xa8cFe8b4e8632cF551692Ddf78B97Ff4784dF14a', 18],
      USDC: ['0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', 6],
      USDT: ['0xc7198437980c041c805A1EDcbA50c1Ce5db95118', 6],
      WFTM: ['0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18],
      SNO: ['0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D', 18],
      SNOBOND: ['0x8aB4Ac266d8e698b7E39f97Ec17876076680f6f1', 18],
      FOX: ['0xFFffFfFf68A2e13F7B68d2E190E37D804E02E0ad', 18],
      DIBS: ['0x5E430F88D1BE82EB3eF92b6fF06125168fD5DCf2', 18],
      GRAPE: ['0x5541D83EFaD1f281571B343977648B75d95cdAC2', 18],
      JOE: ['0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd', 18],
      MIM: ['0x130966628846BFd36ff31a822705796e8cb8C18D', 18],
      'WLRS-USDC-LP': ['0x82845B52b53c80595bbF78129126bD3E6Fc2C1DF', 18],
      'WSHARE-USDC-LP': ['0x03d15E0451e54Eec95ac5AcB5B0a7ce69638c62A', 18],
      'USDC-WAVAX-LP': ['0xA389f9430876455C36478DeEa9769B7Ca4E3DDB1', 18],
      'USDC-JOE-LP': ['0x67926d973cD8eE876aD210fAaf7DFfA99E414aCf', 18],
      'SNO-JOE-LP': ['0xe63b66a8cf7811525cd15dab15f17fb62aa5af2f', 18],
      'MIM-WAVAX-LP': ['0x781655d802670bbA3c89aeBaaEa59D3182fD755D', 18],
    },
    baseLaunchDate: new Date('2022-05-14T18:00:00Z'),
    bondLaunchesAt: new Date('2022-05-15T09:00:00Z'),
    masonryLaunchesAt: new Date('2022-05-15T09:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding TOMB
        - 2 = LP asset staking rewarding TSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  WlrsSnoGenesisRewardPool: {
    name: 'Earn WLRS by SNO',
    poolId: 0,
    sectionInUI: 0,
    contract: 'WlrsSnoGenesisRewardPool',
    depositTokenName: 'SNO',
    earnTokenName: 'WLRS',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },
  WlrsFoxGenesisRewardPool: {
    name: 'Earn WLRS by FOX',
    poolId: 0,
    sectionInUI: 0,
    contract: 'WlrsFoxGenesisRewardPool',
    depositTokenName: 'FOX',
    earnTokenName: 'WLRS',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
  WlrsSnobondGenesisRewardPool: {
    name: 'Earn WLRS by SNOBOND',
    poolId: 0,
    sectionInUI: 0,
    contract: 'WlrsSnobondGenesisRewardPool',
    depositTokenName: 'SNOBOND',
    earnTokenName: 'WLRS',
    finished: false,
    sort: 3,
    closedForStaking: false,
  },
  WlrsDibsGenesisRewardPool: {
    name: 'Earn WLRS by DIBS',
    poolId: 0,
    sectionInUI: 0,
    contract: 'WlrsDibsGenesisRewardPool',
    depositTokenName: 'DIBS',
    earnTokenName: 'WLRS',
    finished: false,
    sort: 4,
    closedForStaking: false,
  },
  WlrsAvaxGenesisRewardPool: {
    name: 'Earn WLRS by wAVAX',
    poolId: 0,
    sectionInUI: 0,
    contract: 'WlrsAvaxGenesisRewardPool',
    depositTokenName: 'WAVAX',
    earnTokenName: 'WLRS',
    finished: false,
    sort: 5,
    closedForStaking: false,
  },
  WlrsUsdcGenesisRewardPool: {
    name: 'Earn WLRS by USDC.e',
    poolId: 0,
    sectionInUI: 0,
    contract: 'WlrsUsdcGenesisRewardPool',
    depositTokenName: 'USDC',
    earnTokenName: 'WLRS',
    finished: false,
    sort: 6,
    closedForStaking: false,
  },
  WlrsGrapeGenesisRewardPool: {
    name: 'Earn WLRS by GRAPE',
    poolId: 0,
    sectionInUI: 0,
    contract: 'WlrsGrapeGenesisRewardPool',
    depositTokenName: 'GRAPE',
    earnTokenName: 'WLRS',
    finished: false,
    sort: 7,
    closedForStaking: false,
  },
  WlrsUsdtGenesisRewardPool: {
    name: 'Earn WLRS by USDT.e',
    poolId: 0,
    sectionInUI: 0,
    contract: 'WlrsUsdtGenesisRewardPool',
    depositTokenName: 'USDT',
    earnTokenName: 'WLRS',
    finished: false,
    sort: 8,
    closedForStaking: false,
  },
  WlrsUsdcLPWShareRewardPool: {
    name: 'Earn WSHARE by WLRS-USDC.e LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'WlrsUsdcLPWShareRewardPool',
    depositTokenName: 'WLRS-USDC-LP',
    earnTokenName: 'WSHARE',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },
  WShareUsdcLPWShareRewardPool: {
    name: 'Earn WSHARE by WSHARE-USDC.e LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'WShareUsdcLPWShareRewardPool',
    depositTokenName: 'WSHARE-USDC-LP',
    earnTokenName: 'WSHARE',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
  WlrsUsdcLPRebate: {
    name: 'Bond WLRS-USDC-LP for WLRS',
    poolId: 100,
    sectionInUI: 3,
    contract: 'RebateTreasury',
    depositTokenName: 'WLRS-USDC-LP',
    earnTokenName: 'WLRS',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },
  /*WShareUsdcJoeLPRebate: {
    name: 'Bond WSHARE-USDC-LP for WLRS',
    poolId: 100,
    sectionInUI: 3,
    contract: 'RebateTreasury',
    depositTokenName: 'WSHARE-USDC-LP',
    earnTokenName: 'WLRS',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },*/
  AvaxJoeLPRebate: {
    name: 'Bond AVAX for WLRS',
    poolId: 100,
    sectionInUI: 3,
    contract: 'RebateTreasury',
    depositTokenName: 'WAVAX',
    earnTokenName: 'WLRS',
    finished: false,
    sort: 3,
    closedForStaking: false,
  },
  UsdcJoeLPRebate: {
    name: 'Bond USDC.e for WLRS',
    poolId: 100,
    sectionInUI: 3,
    contract: 'RebateTreasury',
    depositTokenName: 'USDC',
    earnTokenName: 'WLRS',
    finished: false,
    sort: 4,
    closedForStaking: false,
  },
};

export default configurations[/*process.env.NODE_ENV || */'production'];
