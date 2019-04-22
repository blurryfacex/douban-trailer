const mongoose  = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10
const MAX_LOGIN_ATTEMPTS = 5
const LOCK_TIME = 2 * 60 * 60 * 1000

const UserSchema = new Schema({
  username: {
    unique: true,
    required: true,
    type: String,
  },
  password: {
    unique: true,
    required: true,
    type: String,
  },
  loginAttempts: {
    type: Number,
    required: true,
    default: 0
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

UserSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
  next()
})

UserSchema.pre('save', function (next) {
  if (!user.isModified('password')) return next()

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err)
      this.password = hash
      next()
    })
  })
  next()
})

//查看锁定时间
UserSchema.virtual('isLocked').get(() => {
  return !!(this.lockUntil && this.lockUntil > Data.now())
})

UserSchema.methods = {
  comparePassword: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err, isMatch) => {
        if (!err) resolve(isMatch)
        else reject(err)
      })
    })
  },

  //判断当前是否锁定
  incLoginAttepts: (user) => {
    if (this.lockUntil && this.lockUntil < Data.now()) {
      this.update({
        $set: {
          loginAttempts: 1
        },
        $unset: {
          lockUntil: 1
        }
      }, (err) => {
        if (!err) resolve(true)
        else reject(err)
      })
    } else {
      let update = {
        $inc: {
          loginAttempts: 1
        }
      }
      if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
        update.$set = {
          lockUntil: Date.now() + LOCK_TIME
        }
      }

      this.update(updates, err => {
        if (!err) resolve(true)
        else reject(err)
      })
    }
  }
}

mongoose.model('User', UserSchema)