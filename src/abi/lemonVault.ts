export const lemonVaultAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "lmETH_",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "AccessControlBadConfirmation",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "neededRole",
          "type": "bytes32"
        }
      ],
      "name": "AccessControlUnauthorizedAccount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "DirectETHTransfer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EntryAlreadyWithdrawn",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EntryAmountPlusFeesWasNotAuthorized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidEntryId",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidPoolId",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidRewardRounds",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "LemonTokenNotSet",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "LockTimeShouldBeInTheFuture",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotYetYieldTime",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotYourEntry",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnerWithdrawFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PoolEntryWindowHasPassed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PoolExistsAlready",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PoolIsStillLocked",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PoolIsStillOpen",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnlockTimeShouldBeAfterLockTime",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnspecifiedMethodCalled",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsuccessfulEntryAmountDeduction",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsuccessfulEntryAmountWithdrawal",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsuccessfulYieldsWithdrawal",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "YieldAlreadyRewarded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "YieldAlreadyWithdrawn",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "YieldNotYetRewarded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ZeroEntryAmountProvided",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "entryAmount",
          "type": "uint256"
        }
      ],
      "name": "PoolCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "entrant",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "entryId",
          "type": "uint256"
        }
      ],
      "name": "PoolJoined",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "entrant",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "entryId",
          "type": "uint256"
        }
      ],
      "name": "Withdrawal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "entrant",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "entryId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "yields",
          "type": "uint256"
        }
      ],
      "name": "YieldsRewarded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "entrant",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "entryId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "yields",
          "type": "uint256"
        }
      ],
      "name": "YieldsWithdrawn",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [],
      "name": "ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ENTRY_FEE_PERCENT",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "entryAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lockTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "unlockTime",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "rewardRounds",
              "type": "uint8"
            },
            {
              "internalType": "uint8",
              "name": "yieldPercentage",
              "type": "uint8"
            }
          ],
          "internalType": "struct LemonVault.PoolSeeds",
          "name": "seeds",
          "type": "tuple"
        }
      ],
      "name": "createPool",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "entryAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lockTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "unlockTime",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "rewardRounds",
              "type": "uint8"
            },
            {
              "internalType": "uint8",
              "name": "yieldPercentage",
              "type": "uint8"
            }
          ],
          "internalType": "struct LemonVault.PoolSeeds",
          "name": "seeds",
          "type": "tuple"
        }
      ],
      "name": "getCurrentRewardRound",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "entryId",
          "type": "uint256"
        }
      ],
      "name": "getEntry",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "entrant",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "entryId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "entryTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "poolId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "withdrawalTime",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "noOfYields",
              "type": "uint8"
            },
            {
              "components": [
                {
                  "internalType": "uint8",
                  "name": "round",
                  "type": "uint8"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "obtainedTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "withdrawalTime",
                  "type": "uint256"
                }
              ],
              "internalType": "struct LemonVault.Yield[]",
              "name": "yields",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct LemonVault.Entry",
          "name": "entry",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "entrant",
          "type": "address"
        }
      ],
      "name": "getEntryIdsForAddress",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "entryIds",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "entryAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lockTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "unlockTime",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "rewardRounds",
              "type": "uint8"
            },
            {
              "internalType": "uint8",
              "name": "yieldPercentage",
              "type": "uint8"
            }
          ],
          "internalType": "struct LemonVault.PoolSeeds",
          "name": "seeds",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "noOfEntries",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "noOfYields",
          "type": "uint256"
        }
      ],
      "name": "getIsRewardYieldsTime",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "entryAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lockTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "unlockTime",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "rewardRounds",
              "type": "uint8"
            },
            {
              "internalType": "uint8",
              "name": "yieldPercentage",
              "type": "uint8"
            }
          ],
          "internalType": "struct LemonVault.PoolSeeds",
          "name": "seeds",
          "type": "tuple"
        }
      ],
      "name": "getYieldAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        }
      ],
      "name": "grantAdminRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "entryAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lockTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "unlockTime",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "rewardRounds",
              "type": "uint8"
            },
            {
              "internalType": "uint8",
              "name": "yieldPercentage",
              "type": "uint8"
            }
          ],
          "internalType": "struct LemonVault.PoolSeeds",
          "name": "seeds",
          "type": "tuple"
        }
      ],
      "name": "hashPoolSeeds",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        }
      ],
      "name": "joinPool",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "joinedPoolIdsByAddresses",
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
      "name": "lmETH",
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
      "name": "lmn",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "noOfEntriesByAddresses",
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
      "name": "noOfPools",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ownerWithdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "poolIdsBySeedsHashes",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "pools",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "entryAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lockTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "unlockTime",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "rewardRounds",
              "type": "uint8"
            },
            {
              "internalType": "uint8",
              "name": "yieldPercentage",
              "type": "uint8"
            }
          ],
          "internalType": "struct LemonVault.PoolSeeds",
          "name": "seeds",
          "type": "tuple"
        },
        {
          "internalType": "bytes32",
          "name": "seedsHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "noOfEntries",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "noOfYields",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "noOfWithdrawnEntries",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "callerConfirmation",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        }
      ],
      "name": "revokeAdminRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "entryId",
          "type": "uint256"
        }
      ],
      "name": "rewardYields",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "lmn_",
          "type": "address"
        }
      ],
      "name": "setLemonToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalRewardedLmn",
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "entryId",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "entryId",
          "type": "uint256"
        }
      ],
      "name": "withdrawYields",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ] as const
  