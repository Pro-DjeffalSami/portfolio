export const BOOT_LOG_LINES: readonly string[] = [
  '[    0.000000] Linux version 6.8.0-45-generic (x86_64-linux-gnu-gcc)',
  '[    0.142810] Command line: BOOT_IMAGE=/vmlinuz-linux root=/dev/nvme0n1p2 ro quiet',
  '[    0.318492] ACPI: IRQ0 used by override, Kernel CPU topology initialized',
  '[    0.491023] systemd[1]: Detected virtualization kvm. Architecture x86-64.',
  '[    0.604118] systemd[1]: Reached target Local File Systems.',
  '[    0.728940] systemd-journald[312]: Runtime journal (/run/log/journal) ready.',
  '[    0.854201] ufw[408]: [UFW] Firewall rules loaded: allow 22/tcp, 80/tcp, 443/tcp',
  '[    0.971554] sshd[445]: Server listening on 0.0.0.0 port 22 (Ed25519 key)',
  '[    1.104832] containerd[512]: starting containerd v1.7.18',
  '[    1.249310] dockerd[604]: [graphdriver] using overlay2 storage driver',
  '[    1.380214] dockerd[604]: Default bridge (docker0) assigned 172.17.0.1/16',
  '[    1.512904] docker-compose[718]: Network fabric_net Created (driver: bridge)',
  '[    1.648120] hyperledger-peer[802]: Ledger state database leveldb initialized',
  '[    1.792045] terraform[910]: Refreshing state... [id=vpc-0a94c21e88b]',
  '[    1.930411] gitlab-runner[1024]: Checking for jobs... runner=lyon-devops-01',
  '[    2.075190] nginx[1108]: worker_processes auto; epoll_wait active',
  '[    2.214802] postgres[1190]: database system is ready to accept connections',
  '[    2.359011] systemd[1]: Reached target Multi-User System.',
];

export interface ColumnLayout {
  x: number;
  columnIndex: number;
}

export function computeLogColumns(viewportWidth: number): ColumnLayout[] {
  if (viewportWidth >= 1200) {
    return [
      { x: 32, columnIndex: 0 },
      { x: Math.round(viewportWidth * 0.54), columnIndex: 1 },
    ];
  }
  return [{ x: 20, columnIndex: 0 }];
}

export function advanceScrollOffset(
  currentOffset: number,
  deltaSeconds: number,
  speedPxPerSec: number,
  totalHeight: number
): number {
  if (totalHeight <= 0 || deltaSeconds <= 0 || speedPxPerSec <= 0) {
    return currentOffset;
  }
  const next = currentOffset + deltaSeconds * speedPxPerSec;
  return next >= totalHeight ? next % totalHeight : next;
}
