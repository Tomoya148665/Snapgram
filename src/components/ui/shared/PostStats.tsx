import React from "react";
import { useSate, useEffect } from "react";
import { Models } from "appwrite";
import {
  useDeleteSavedPost,
  useGetCurrentUser,
  useLikePost,
  useSavePost,
} from "@/lib/react-query/queriesAndMutation";
import { useUserContext } from "@/context/AuthContext";

type PostStatsProps = {
  post: Models.Document;
  userId: string;
};

const PostStats = ({ post, userId }: PostStatsProps) => {
  const { mutate: likePost } = useLikePost();
  const { mutate: savePost } = useSavePost();
  const { mutate: deleteSavedpost } = useDeleteSavedPost();
  const { data: currentUser } = useGetCurrentUser()

const handleLikePost = (e:React.MouseEvent) => {
    e.stopPropagation();

    let newLikes = [...likes];

    const hasLiked = 
}
  
  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img
          src={`${chackIsLiked(likes, userId) ? "/assets/icons/liked.svg"}`}
          alt="like"
          width={20}
          height={20}
          onClick={() => {}}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PostStats;
