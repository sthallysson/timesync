export type Events = {
  id: number;
  title: string;
  location: string;
  description: string;
  day: number;
  label: string;
};

export type ActionProps =
  | { type: 'add'; payload: Events }
  | { type: 'update'; payload: Events }
  | { type: 'delete'; payload: Events };
