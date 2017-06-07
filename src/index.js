import * as config from './config';
import * as transactionLib from './lib/transactions';
import contracts from './contracts';
import * as helpers from './helpers';
import * as api from './api';
import * as state from './state';
import * as marketMaker from './market-maker';
import * as hunchgame from './hunch-game-api';

export default {config, transactionLib, contracts, helpers, api, state, marketMaker, hunchgame};

import contract from 'truffle-contract';
import StandardMarketFactory_artifacts from '../contracts/Markets/StandardMarketFactory.sol';
const StandardMarketFactory = contract(StandardMarketFactory_artifacts);
