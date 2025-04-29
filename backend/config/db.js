import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		// Connect to MongoDB (no deprecated options)
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
	} catch (error) {
		console.error(`Error: ${error.message}`.red.underline.bold)
		process.exit(1)
	}
}

export default connectDB
