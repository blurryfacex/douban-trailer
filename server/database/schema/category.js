const mongoose  = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId, Mixed } = Schema.Types

const CategorySchema = new Schema({
  name: {
    unique: true,
    type: String
  },
  movies: [{
    type: ObjectId,
    ref: 'Movie'
  }],

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

CategorySchema.pre('save', next => {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
})

mongoose.model('Category', CategorySchema)