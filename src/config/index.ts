enum Environment {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
}

interface Config {
  apiHost: string;
}

const config: Record<Environment, Config> = {
  [Environment.PRODUCTION]: {
    apiHost: "54.180.165.105:8000",
  },
  [Environment.DEVELOPMENT]: {
    apiHost: "54.180.165.105:8000",
  },
};

export default config[process.env.NODE_ENV as Environment];
