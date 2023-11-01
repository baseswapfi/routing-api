import { Protocol } from '@baseswapfi/router-sdk'
import { ChainId } from '@baseswapfi/sdk-core'

export const S3_POOL_CACHE_KEY = (baseKey: string, chain: ChainId, protocol: Protocol) =>
  `${baseKey}-${chain}-${protocol}`
