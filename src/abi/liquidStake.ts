export const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "userStake",
          "type": "uint256"
        }
      ],
      "name": "AmountExceedsStake",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakeAmount",
          "type": "uint256"
        }
      ],
      "name": "BurningDerivativeFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CannotResetDerivativeToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "DerivativeTokenNotSet",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "DirectETHTransfer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FailedToSendEther",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "LowAmountProvided",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "LowContractETHBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakeAmount",
          "type": "uint256"
        }
      ],
      "name": "MintingDerivativeFailed",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "mintAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxSupply",
          "type": "uint256"
        }
      ],
      "name": "StakeExceedsMaximumSupply",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ETHWithdrawalBatched",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "withdrawer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ETHWithdrawn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "RewardClaimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "accumulated",
          "type": "uint256"
        }
      ],
      "name": "RewardsPerTokenUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "start",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "end",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rate",
          "type": "uint256"
        }
      ],
      "name": "RewardsSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Staked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Unstaked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "userRewards",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "paidRewardPerToken",
          "type": "uint256"
        }
      ],
      "name": "UserRewardsUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "batchedWithdrawals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimRewards",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "staker",
          "type": "address"
        }
      ],
      "name": "currentUserRewards",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_staker",
          "type": "address"
        }
      ],
      "name": "getStakerBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardsInterval",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "start",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "end",
          "type": "uint32"
        },
        {
          "internalType": "uint96",
          "name": "rate",
          "type": "uint96"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardsPerToken",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "accumulated",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "lastUpdated",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "start",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "end",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalRewards",
          "type": "uint256"
        }
      ],
      "name": "setRewardsInterval",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_trustedDerivative",
          "type": "address"
        }
      ],
      "name": "setTrustedDerivativeToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stake",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "stakers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "stake",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "accumulatedRewards",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastRewardsPerToken",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalStaked",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "trustedDerivateToken",
      "outputs": [
        {
          "internalType": "contract LemonLskToken",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "unstake",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawBatchedEth",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ] as const