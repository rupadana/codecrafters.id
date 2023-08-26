export default interface TagModel {
  id: number;
  name: string;
  slug: string;
  type: string;
  order_column: number;
  created_at: Date;
  updated_at: Date;
}
