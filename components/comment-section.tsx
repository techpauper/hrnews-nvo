"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Comment {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  date: string
  likes: number
}

interface CommentSectionProps {
  postSlug: string
}

export function CommentSection({ postSlug }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "This article was incredibly insightful. I especially appreciated the breakdown of service level agreements and how they impact security operations.",
      date: "2 days ago",
      likes: 5,
    },
    {
      id: "2",
      author: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "As someone working in the security field, I found this very practical. Would love to see a follow-up on vetting potential MSSPs.",
      date: "1 day ago",
      likes: 3,
    },
  ])

  const [newComment, setNewComment] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSubmitComment = () => {
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      author: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: newComment,
      date: "Just now",
      likes: 0,
    }

    setComments([...comments, comment])
    setNewComment("")
  }

  const handleLike = (id: string) => {
    setComments(comments.map((comment) => (comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment)))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>

      {isLoggedIn ? (
        <div className="mb-8">
          <Textarea
            placeholder="Add your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handleSubmitComment} className="bg-[#3D2E2E] hover:bg-[#4D3E3E]">
            Post Comment
          </Button>
        </div>
      ) : (
        <div className="bg-gray-50 p-6 rounded-lg mb-8 text-center">
          <p className="mb-4">Sign in to join the conversation</p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => setIsLoggedIn(true)} className="bg-[#3D2E2E] hover:bg-[#4D3E3E]">
              Sign In
            </Button>
            <Button variant="outline">Create Account</Button>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-200 pb-6">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-medium">{comment.author.name}</span>
                    <span className="text-gray-500 text-sm ml-2">{comment.date}</span>
                  </div>
                </div>
                <p className="text-gray-800 mb-3">{comment.content}</p>
                <button
                  onClick={() => handleLike(comment.id)}
                  className="text-gray-500 text-sm hover:text-[#3D2E2E] flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  {comment.likes > 0 && <span>{comment.likes}</span>}
                  <span>Like</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

