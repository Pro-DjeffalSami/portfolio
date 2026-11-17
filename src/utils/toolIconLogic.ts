export type ToolIconId =
  | 'linux-ubuntu'
  | 'bash'
  | 'vps-security'
  | 'docker'
  | 'docker-compose'
  | 'volumes-network'
  | 'terraform'
  | 'aws'
  | 'azure'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'nextjs'
  | 'nodejs'
  | 'php'
  | 'java'
  | 'mysql'
  | 'postgresql'
  | 'git'
  | 'github'
  | 'gitlab'
  | 'gitlab-ci'
  | 'github-actions'
  | 'hyperledger'
  | 'llm'
  | 'ssh'
  | 'ufw'
  | 'generic';

const TOOL_ICON_MAP: Record<string, ToolIconId> = {
  'linux / ubuntu': 'linux-ubuntu',
  linux: 'linux-ubuntu',
  'ubuntu vps': 'linux-ubuntu',
  bash: 'bash',
  'configuration de vps (ssh, ufw)': 'vps-security',
  ssh: 'ssh',
  ufw: 'ufw',
  docker: 'docker',
  'docker compose': 'docker-compose',
  'volumes et réseaux': 'volumes-network',
  terraform: 'terraform',
  aws: 'aws',
  azure: 'azure',
  javascript: 'javascript',
  typescript: 'typescript',
  react: 'react',
  'next.js': 'nextjs',
  'node.js': 'nodejs',
  php: 'php',
  java: 'java',
  mysql: 'mysql',
  postgresql: 'postgresql',
  git: 'git',
  github: 'github',
  gitlab: 'gitlab',
  'gitlab ci': 'gitlab-ci',
  'github actions': 'github-actions',
  'hyperledger fabric': 'hyperledger',
  llm: 'llm',
};

export function getToolIconId(toolName: string): ToolIconId {
  const normalized = toolName.trim().toLowerCase();
  return TOOL_ICON_MAP[normalized] ?? 'generic';
}
