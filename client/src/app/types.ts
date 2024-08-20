export interface UserListProps {
  user_id: number;
  user_name: string;
  user_email: string;
  user_is_member: boolean;
}

export interface PostsProps {
  post_id: Number;
  user_id: Number;
  post_title: String;
  post_text: String;
  post_date: String;
  user_name: String;
}

export interface PostByIdProps {
  post_id: Number;
  user_id: Number;
  post_title: String;
  post_text: String;
  post_date: String;
}
