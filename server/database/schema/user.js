const mongoose  = require('mongoose')
const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed

const UserSchema = new Schema({
  username: {
    unique: true,
    type: String,
  },
  password: {
    unique: true,
    type: String,
  },
  email: {
    unique: true,
    type: String,
  },
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

UserSchema.pre('save', next => {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
  next()
})

mongoose.model('Movie', MovieSchema)