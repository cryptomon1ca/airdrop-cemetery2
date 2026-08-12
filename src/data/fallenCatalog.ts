export interface FallenCategory {
  id: string
  label: string
  count: number
  sourceCount: number
  color: string
  projects: string[]
  note?: string
}

export const fallenCatalogMeta = {
  title: '2026 已阵亡加密项目名录',
  reportedTotal: 124,
  checkedAt: '2026-08-12',
  sourceName: 'RootData + 官方公告 / DefiLlama / CoinGecko',
  sourceUrl: 'https://www.rootdata.com/projects',
  scope: '已宣布关停、破产或停止运营的项目条目',
}

export const fallenCategories: FallenCategory[] = [
  {
    id: 'exchange',
    label: '交易平台',
    count: 28,
    sourceCount: 31,
    color: '#c47a12',
    projects: [
      'ICON', 'SecondFi', 'BitMart', 'Avon', 'DeltaDeFi', 'Lemon Terminal',
      'Ventuals', 'Pingu Exchange', 'Forma', 'Oxium', 'Coinflare', 'Fusion Trade',
      'BasePerp', 'Vela Exchange', 'Composite Labs', 'Enclave Markets', 'Loopring',
      'AscendEX', 'BitMEX', 'Satori', 'Voodoo', 'Rage Trade', 'LogX', 'Dango',
      'Valhalla', 'Ranger', 'Legend', 'EXMO.com',
    ],
    note: '中心化交易所、永续合约或交易终端；分类按产品主功能归档。',
  },
  {
    id: 'defi',
    label: 'DeFi / 金融',
    count: 20,
    sourceCount: 22,
    color: '#287d62',
    projects: [
      'ODOS', 'Levvy', 'Strobe Finance', 'Offramp.xyz', 'fey', 'Pyra',
      'Quiet Finance', 'Ionic', 'Zapper', 'Angle Protocol', 'UX', 'Goldfinch',
      'ZeroLend', 'Stream Finance', 'MilkyWay', 'Remora Markets', 'Altura', 'Buck',
      'Step Finance', 'Summer.fi',
    ],
    note: '包含 DEX、聚合器、借贷、收益和支付协议。',
  },
  {
    id: 'infra',
    label: '基础设施',
    count: 22,
    sourceCount: 25,
    color: '#3974a5',
    projects: [
      'Colony', 'HaHa', 'Creed', 'Zero Network', 'DataHaven',
      'Polygon zkEVM', 'CIFDAQ', 'Genome', 'Dmail', 'PowerLoom', 'Ctrl', 'Leap',
      'Syndicate', 'Entropy', 'Over Protocol', 'Family', 'Botanix', 'Mint',
      'Everclear', 'OneBalance', 'Yupp', '币印',
    ],
    note: '链、跨链、开发者工具与数据基础设施。',
  },
  {
    id: 'consumer',
    label: 'NFT / 游戏 / 社交',
    count: 23,
    sourceCount: 31,
    color: '#795087',
    projects: [
      '0xPPL', 'Zotto', 'Micro3', 'Foundation',
      'MUD / Lattice', 'FOMO', 'glyphse.fun', 'Exchange Art', 'Intergaze',
      'Ethereum Follow Protocol', 'OpenRank', 'The Forgotten Runes',
      'Nifty Gateway', 'Catalog', 'Bloktopia', 'HYPOTIA', 'Cura',
      'NFTfi', 'Kiosk', 'fantasy.top', 'GOAT Gaming', 'Sidekick', 'Rodeo',
    ],
    note: 'NFT、游戏、社交和创作者平台；部分条目仍需逐一核对关停公告。',
  },
  {
    id: 'services',
    label: '工具 / 服务 / 媒体',
    count: 8,
    sourceCount: 15,
    color: '#a84e45',
    projects: [
      'Hazeflow', 'StableLab', 'Rova', 'CharmVerse', 'WebN Group',
      'Parsec', 'Tally', 'DL News',
    ],
  },
]

export const fallenSummary = [
  'RootData 原始分类中，交易平台与 NFT、游戏、社交均为 31 个条目，基础设施 25 个，DeFi / 金融 22 个。',
  '同一项目可能同时具备交易、DeFi 或基础设施属性；本页按主要产品形态只保留一个分类，因此去重后数量低于原始条目数。',
  '“Dead”是 RootData 的状态分类，不代表每个项目都已发布正式关停公告；具体状态与原因需查看项目详情及官方信息。',
]

export const featuredFallenProjects = new Set([
  'BitMart', 'BitMEX', 'Loopring', 'AscendEX', 'ODOS', 'Goldfinch', 'Angle Protocol',
  'Polygon zkEVM', 'Dmail', 'Foundation', 'Nifty Gateway', 'NFTfi',
])

export const rootdataDetailUrls: Record<string, string> = {
  'ODOS': 'https://www.rootdata.com/projects/detail/ODOS?k=NDMzMw%3D%3D',
  'BitMEX': 'https://www.rootdata.com/projects/detail/BitMEX?k=MzkzNQ%3D%3D',
  'Loopring': 'https://www.rootdata.com/projects/detail/Loopring?k=MTYz',
  'AscendEX': 'https://www.rootdata.com/projects/detail/AscendEX?k=MzkyNA%3D%3D',
  'Goldfinch': 'https://www.rootdata.com/projects/detail/Goldfinch?k=NDcz',
  'Angle Protocol': 'https://www.rootdata.com/projects/detail/Angle%20Protocol?k=MzA0Mw%3D%3D',
  'Polygon zkEVM': 'https://www.rootdata.com/projects/detail/Polygon?k=MTYw',
  'Dmail': 'https://www.rootdata.com/projects/detail/Dmail?k=MjM1MQ%3D%3D',
  'Foundation': 'https://www.rootdata.com/projects/detail/Foundation?k=MjU3Mg%3D%3D',
  'Nifty Gateway': 'https://www.rootdata.com/projects/detail/Nifty%20Gateway?k=MjU2Nw%3D%3D',
  'NFTfi': 'https://www.rootdata.com/projects/detail/NFTfi?k=MjUxNA%3D%3D',
}
