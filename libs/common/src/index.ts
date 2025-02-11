export type CpuInfo = {
  brand: string;
  model: string;
  cores: number;
  threads: number;
  frequency: number;
};
export type CpuLoad = {
  core: number;
  load: number;
  temp: number;
}[];

export type RamInfo = {
  size: number;
  layout: {
    brand?: string;
    type?: string;
    frequency?: number;
  }[];
};
export type RamLoad = number;

export type StorageInfo = {
  layout: {
    brand: string;
    size: number;
    type: string;
  }[];
};
export type StorageLoad = number;

export type NetworkInfo = {
  interfaceSpeed: number;
  speedDown: number;
  speedUp: number;
  type: string;
  publicIp: string;
};
export type NetworkLoad = {
  up: number;
  down: number;
};

export type OsInfo = {
  platform: string;
  distro: string;
  release: string;
  kernel: string;
  arch: string;
  uptime: number;
};

export type HardwareInfo = {
  os: OsInfo;
  cpu: CpuInfo;
  ram: RamInfo;
  storage: StorageInfo;
  network: NetworkInfo;
};

export type Config = {
  // General
  port: number;
  enable_tilt: boolean;
  widget_list: ('os' | 'cpu' | 'storage' | 'ram' | 'network')[];

  // OS Widget
  disable_host: boolean;
  os_label_list: ('os' | 'arch' | 'up_since')[];
  os_widget_grow: number;
  os_widget_min_width: number;

  // CPU Widget
  enable_cpu_temps: boolean;
  cpu_label_list: ('brand' | 'model' | 'cores' | 'threads' | 'frequency')[];
  cpu_widget_grow: number;
  cpu_widget_min_width: number;
  cpu_shown_datapoints: number;
  cpu_poll_interval: number;

  // Storage Widget
  storage_label_list: ('brand' | 'size' | 'type')[];
  storage_widget_grow: number;
  storage_widget_min_width: number;
  storage_poll_interval: number;

  // RAM Widget
  ram_label_list: ('brand' | 'size' | 'type' | 'frequency')[];
  ram_widget_grow: number;
  ram_widget_min_width: number;
  ram_shown_datapoints: number;
  ram_poll_interval: number;

  // Network Widget
  speed_test_interval: number;
  network_label_list: (
    | 'type'
    | 'speed_up'
    | 'speed_down'
    | 'interface_speed'
    | 'public_ip'
  )[];
  network_widget_grow: number;
  network_widget_min_width: number;
  network_shown_datapoints: number;
  network_poll_interval: number;

  // Overrides
  override: {
    os?: string;
    arch?: string;
    cpu_brand?: string;
    cpu_model?: string;
    cpu_cores?: number;
    cpu_threads?: number;
    cpu_frequency?: number;
    ram_brand?: string;
    ram_size?: number;
    ram_type?: string;
    ram_frequency?: number;
    network_type?: string;
    network_speed_up?: number;
    network_speed_down?: number;
    network_interface_speed?: number;
    network_public_ip?: string;
    storage_brand_1?: string;
    storage_size_1?: number;
    storage_type_1?: string;
    storage_brand_2?: string;
    storage_size_2?: number;
    storage_type_2?: string;
    storage_brand_3?: string;
    storage_size_3?: number;
    storage_type_3?: string;
    storage_brand_4?: string;
    storage_size_4?: number;
    storage_type_4?: string;
    storage_brand_5?: string;
    storage_size_5?: number;
    storage_type_5?: string;
  };
};

export type ServerInfo = HardwareInfo & {
  config: Config;
};
