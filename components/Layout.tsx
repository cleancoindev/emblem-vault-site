import { ReactNode } from 'react'
import BackgroundVideo from './BackgroundVideo';
import { Flex, IconButton, useDisclosure, Badge, LightMode, Stack, Box, Radio, Button} from '@chakra-ui/core'
import { useWeb3React } from '@web3-react/core'
import dynamic from 'next/dynamic'

import { CHAIN_ID_NAMES } from '../utils'
import { useEagerConnect, useQueryParameters, useUSDETHPrice } from '../hooks'
import { useTransactions, useFirstToken, useSecondToken, useShowUSD } from '../context'
import ColorBox from './ColorBox'
import Account from './Account'
import { TransactionToast } from './TransactionToast'
import TokenBalance from './TokenBalance'
import { WETH, ChainId, Token } from '@uniswap/sdk'
import WalletConnect from './WalletConnect'
import { QueryParameters } from '../constants'

const Settings = dynamic(() => import('./Settings'))

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
  const { chainId, account } = useWeb3React()
  const isTestnet = typeof chainId === 'number' && chainId !== 1

  const { isOpen: isOpenSettings, onOpen: onOpenSettings, onClose: onCloseSettings } = useDisclosure()

  const [firstToken] = useFirstToken()
  const [secondToken] = useSecondToken()
  const [showUSD, setShowUSD] = useShowUSD()

  const [transactions] = useTransactions()

  // automatically try connecting to the injected connector on pageload
  const triedToEagerConnect = useEagerConnect()

  const queryParameters = useQueryParameters()
  const requiredChainId = queryParameters[QueryParameters.CHAIN]

  const USDETHPrice = useUSDETHPrice()
  const handleNavigationclick = () => {
    console.log(location.pathname)
    let pieces = location.pathname.split('/')
    pieces.pop()
    if (location.pathname.includes('vaultlist')) {
      location.href = location.origin + pieces.join('/') + '/create'
    } else {
      location.href = location.origin + pieces.join('/') + '/vaultlist'
    }
  }
  return (
    <>
      <Settings isOpen={isOpenSettings} onClose={onCloseSettings} />
      <BackgroundVideo />
      <ColorBox
        as={Flex}
        flexDirection="column"
        borderColor="orange.500"
        borderWidth={isTestnet ? '.5rem' : '0'}
        minHeight="100vh"
        maxHeight="100vh"
      >
        <Flex justifyContent="space-between" flexShrink={0} overflowX="auto" p="1rem">
          <Stack spacing={0} direction="row">
            <IconButton m={2} icon="settings" variant="ghost" onClick={onOpenSettings} aria-label="Settings" />
            <Button m={2} variant="ghost" onClick={handleNavigationclick}>
              {' '}
              {location.pathname.includes('vaultlist') ? 'Create Vault' : 'My Vaults'}
            </Button>
          </Stack>
          <Account triedToEagerConnect={triedToEagerConnect} />
        </Flex>

        <Stack
          position="absolute"
          top={0}
          right={0}
          m={isTestnet ? '1.5rem' : '1rem'}
          mt={isTestnet ? '5rem' : '4.5rem'}
          alignItems="flex-end"
          spacing="1rem"
          zIndex={2}
        >
          {typeof account !== 'string' ? (
            !triedToEagerConnect ||
            (typeof chainId === 'number'
              ? chainId !== ChainId.MAINNET
              : typeof requiredChainId === 'number' && requiredChainId !== ChainId.MAINNET) ? null : (
              <Box>
                <WalletConnect />
              </Box>
            )
          ) : (
            [firstToken, secondToken]
              .filter((token) => token)
              .filter((token) => !token?.equals(WETH[token.chainId]))
              .map((token) => (
                <Box key={token?.address}>
                  <TokenBalance token={token as Token} />
                </Box>
              ))
          )}
        </Stack>

        <Flex flexGrow={1} direction="column" overflow="auto">
          {children}
        </Flex>

        <Flex minHeight="1.5rem">
          {typeof chainId === 'number' && (
            <LightMode>
              <Badge
                variant="solid"
                variantColor={isTestnet ? 'orange' : undefined}
                fontSize="1rem"
                style={{ borderTopLeftRadius: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
              >
                {CHAIN_ID_NAMES[chainId]}
              </Badge>
            </LightMode>
          )}
        </Flex>

        {transactions.length > 0 && (
          <Stack
            position="absolute"
            bottom={0}
            right={0}
            m={isTestnet ? '1.5rem' : '1rem'}
            alignItems="flex-end"
            spacing="1rem"
            zIndex={2}
          >
            {transactions
              .filter((transaction) => transaction.chainId === chainId)
              .map(({ hash }) => (
                <Box key={hash}>
                  <TransactionToast hash={hash} />
                </Box>
              ))}
          </Stack>
        )}
      </ColorBox>
    </>
  )
}
