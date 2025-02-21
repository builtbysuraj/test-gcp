import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
  {
    userId: Number,
    id: Number,
    title: String,
    body: String,
  },
  {
    timestamps: true,
  }
)

export const Post = mongoose.model('Post', postSchema)
