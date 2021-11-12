import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};


export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  updatePost?: Maybe<Post>;
  deletePost: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
};


export type MutationCreatePostArgs = {
  body: Scalars['String'];
  title: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  body: Scalars['String'];
  title: Scalars['String'];
  id: Scalars['Float'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  options: UserRegisterInput;
};


export type MutationLoginArgs = {
  options: UserLoginInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  token: Scalars['String'];
  newPassword: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  body: Scalars['String'];
  user: User;
  bodySnippet: Scalars['String'];
};

export type PostsResponse = {
  __typename?: 'PostsResponse';
  errors?: Maybe<Array<FieldError>>;
  posts?: Maybe<Array<Post>>;
  totalCount?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  paginatedPosts: PostsResponse;
  post?: Maybe<Post>;
  me?: Maybe<User>;
};


export type QueryPaginatedPostsArgs = {
  pageIndex: Scalars['Float'];
  size: Scalars['Float'];
};


export type QueryPostArgs = {
  id: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  posts: Array<Post>;
};

export type UserLoginInput = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
};

export type UserRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'id'>
    )> }
  ) }
);

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['String'];
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'title' | 'body'>
  ) }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'id'>
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'id' | 'createdAt'>
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);

export type PostQueryVariables = Exact<{
  postId: Scalars['Float'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'createdAt' | 'updatedAt' | 'body'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  )> }
);

export type PaginatedPostsQueryVariables = Exact<{
  size: Scalars['Float'];
  pageIndex: Scalars['Float'];
}>;


export type PaginatedPostsQuery = (
  { __typename?: 'Query' }
  & { paginatedPosts: (
    { __typename?: 'PostsResponse' }
    & { posts?: Maybe<Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'createdAt' | 'updatedAt' | 'bodySnippet'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username'>
      ) }
    )>> }
  ) }
);


export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    errors {
      field
      message
    }
    user {
      username
      id
    }
  }
}
    `;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreatePostDocument = gql`
    mutation CreatePost($title: String!, $body: String!) {
  createPost(title: $title, body: $body) {
    id
    createdAt
    title
    body
  }
}
    `;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(options: {usernameOrEmail: $usernameOrEmail, password: $password}) {
    errors {
      field
      message
    }
    user {
      username
      id
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!) {
  register(options: {username: $username, email: $email, password: $password}) {
    errors {
      field
      message
    }
    user {
      username
      id
      createdAt
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    id
    username
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const PostDocument = gql`
    query Post($postId: Float!) {
  post(id: $postId) {
    id
    title
    createdAt
    updatedAt
    body
    user {
      id
      username
    }
  }
}
    `;

export function usePostQuery(options: Omit<Urql.UseQueryArgs<PostQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostQuery>({ query: PostDocument, ...options });
};
export const PaginatedPostsDocument = gql`
    query PaginatedPosts($size: Float!, $pageIndex: Float!) {
  paginatedPosts(size: $size, pageIndex: $pageIndex) {
    posts {
      id
      title
      createdAt
      updatedAt
      bodySnippet
      user {
        id
        username
      }
    }
  }
}
    `;

export function usePaginatedPostsQuery(options: Omit<Urql.UseQueryArgs<PaginatedPostsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PaginatedPostsQuery>({ query: PaginatedPostsDocument, ...options });
};