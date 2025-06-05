export interface Task {
  id: number;
  taskName?: string;
  isComplete?: boolean;
  dateCreated?: null | Date;
  dateCompleted?: null | Date;
}