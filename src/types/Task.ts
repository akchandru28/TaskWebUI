export interface TaskExecution {
  timestamp: string;
  output: string;
}

export interface Task {
  id?: string;
  name: string;
  owner: string;
  description: string;
  command?: string;
  commandOutput?: string;
}
