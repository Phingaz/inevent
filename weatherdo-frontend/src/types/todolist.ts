export interface TTodo {
  id: number;
  text: string;
  weatherTag: string;
  completed: boolean;
  priority: TPriority;
}

export type TPriority = "low" | "medium" | "high";
