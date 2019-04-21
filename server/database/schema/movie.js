const mongoose  = require('mongoose')
const Movie = mongoose.Schema
const Schema = mongoose.Schema
const { ObjectId, Mixed } = Schema.Types

const MovieSchema = new Movie({
  doubanId: {
    unique: true,
    type: String,
  },
  category: [{
    type: ObjectId,
    ref: 'Category'
  }],
  rate: Number,
  title: String,
  summary: String,
  video: String,
  poster: String,
  cover: String,

  videoKey: String,
  posterKey: String,
  coverKey: String,

  rawTitle: String,
  movieTypes: [String],
  pubdate: Mixed,
  year: Number,

  tags: Array,

  mata: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

MovieSchema.pre('save', next => {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
})

mongoose.model('Movie', MovieSchema)