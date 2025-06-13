
export interface Task {
  id: number;
  taskName: string;
  isComplete?: boolean;
  dateCreated?: null | Date;
  dateCompleted?: null | Date;
}

export interface FilterTasksProps {
  search: string;
  setSearch: (search: string) => void;
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
  banner: Banner;
}

export interface Banner {
  all: number;
  active: number;
  completed: number;
}

export interface ProgressProps {
  total: number;
  completed: number;
  active: number;
}
